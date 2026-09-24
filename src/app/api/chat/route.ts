import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { chatSystemPrompt } from "@/lib/chat/knowledge";

/**
 * Assistente de IA do site. Desligado enquanto ANTHROPIC_API_KEY não estiver definida.
 * Limites (em memória, por instância): mensagens por visitante e total diário.
 */

export const dynamic = "force-dynamic";

const MODEL = process.env.CHAT_MODEL || "claude-opus-5";
const DAILY_LIMIT = Number(process.env.CHAT_DAILY_LIMIT) || 500;
const PER_VISITOR = { max: 20, windowMs: 10 * 60 * 1000 };
const MAX_TURNS = 12;
const MAX_CHARS = 1200;

const enabled = () => Boolean(process.env.ANTHROPIC_API_KEY);

const visitors = new Map<string, number[]>();
let day = { date: "", count: 0 };

function allow(ip: string) {
  const now = Date.now();
  const today = new Date(now).toISOString().slice(0, 10);
  if (day.date !== today) day = { date: today, count: 0 };
  if (day.count >= DAILY_LIMIT) return false;
  const recent = (visitors.get(ip) ?? []).filter((t) => now - t < PER_VISITOR.windowMs);
  if (recent.length >= PER_VISITOR.max) return false;
  recent.push(now);
  visitors.set(ip, recent);
  if (visitors.size > 5000) visitors.clear();
  day.count++;
  return true;
}

/** Aceita só alternância usuário/assistente em texto, terminando no usuário. */
function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  const list = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(list) || list.length === 0) return null;
  const msgs = list.slice(-MAX_TURNS);
  if (msgs[0]?.role !== "user") msgs.shift();
  const out: Anthropic.Beta.BetaMessageParam[] = [];
  for (const [i, m] of msgs.entries()) {
    const role = i % 2 === 0 ? "user" : "assistant";
    if (m?.role !== role || typeof m.content !== "string") return null;
    const content = m.content.trim().slice(0, role === "user" ? MAX_CHARS : 4000);
    if (!content) return null;
    out.push({ role, content });
  }
  return out.length && out[out.length - 1].role === "user" ? out : null;
}

const client = () => new Anthropic({ maxRetries: 1, timeout: 60_000 });

export function GET() {
  return NextResponse.json({ enabled: enabled() });
}

export async function POST(request: Request) {
  if (!enabled()) return NextResponse.json({ error: "disabled" }, { status: 404 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  const messages = parseMessages(body);
  if (!messages) return NextResponse.json({ error: "invalid_messages" }, { status: 400 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
  if (!allow(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const stream = client().beta.messages.stream({
    model: MODEL,
    max_tokens: 2048,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "low" },
    system: [{ type: "text", text: chatSystemPrompt, cache_control: { type: "ephemeral" } }],
    messages,
  });

  const encoder = new TextEncoder();
  const body$ = new ReadableStream<Uint8Array>({
    async start(controller) {
      let wrote = false;
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            wrote = true;
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(encoder.encode(`${wrote ? "\n\n" : ""}Não consigo ajudar com esse pedido por aqui. Para falar com a equipe, use o WhatsApp.`));
        } else if (final.stop_reason === "max_tokens") {
          controller.enqueue(encoder.encode("…"));
        }
      } catch (err) {
        if (err instanceof Anthropic.RateLimitError) console.warn("[chat] limite da API atingido");
        else if (err instanceof Anthropic.APIError) console.error(`[chat] erro da API ${err.status}:`, err.message);
        else console.error("[chat] falha", err);
        controller.enqueue(encoder.encode(`${wrote ? "\n\n" : ""}Tive um problema para responder agora. Tente de novo em instantes ou fale com a equipe pelo WhatsApp.`));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body$, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Accel-Buffering": "no" },
  });
}
