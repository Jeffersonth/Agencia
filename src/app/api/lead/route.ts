import { NextResponse } from "next/server";

/**
 * Recebe os leads dos formulários e repassa para LEAD_WEBHOOK_URL (n8n, Make, CRM…).
 * Sem webhook configurado, o lead é registrado no log do servidor.
 */

const FIELDS = [
  "nome",
  "empresa",
  "whatsapp",
  "email",
  "desafio",
  "interesse",
  "origem",
  "site_informado",
  // Diagnóstico em etapas
  "setor",
  "dores",
  "volume",
  "urgencia",
  "recomendacao",
] as const;

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: robôs preenchem o campo oculto "site".
  if (clean(body.site)) return NextResponse.json({ ok: true });

  const lead: Record<string, string> = {};
  for (const f of FIELDS) lead[f] = clean(body[f]);

  if (!lead.nome || !lead.whatsapp || body.consentimento !== "sim") {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const payload = { ...lead, consentimento: true, recebidoEm: new Date().toISOString() };
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!webhook) {
    console.info("[lead]", JSON.stringify(payload));
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] falha ao enviar para o webhook", err);
    return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
  }
}
