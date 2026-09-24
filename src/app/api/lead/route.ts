import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { site } from "@/lib/site";

/**
 * Recebe os leads dos formulários e entrega por e-mail (SMTP_USER + SMTP_PASS) e/ou
 * webhook (LEAD_WEBHOOK_URL: n8n, Make, CRM). Com pelo menos um canal configurado,
 * falhar em todos devolve erro, e o formulário oferece o WhatsApp ao visitante.
 * Sem nenhum canal, o lead é registrado no log do servidor.
 */

export const dynamic = "force-dynamic";

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

type Lead = Record<(typeof FIELDS)[number], string>;

const LABELS: Lead = {
  nome: "Nome",
  empresa: "Empresa",
  whatsapp: "WhatsApp",
  email: "E-mail",
  desafio: "Desafio / resumo",
  interesse: "Interesse",
  origem: "Origem",
  site_informado: "Site informado",
  setor: "Setor",
  dores: "Gargalos",
  volume: "Volume de contatos",
  urgencia: "Urgência",
  recomendacao: "Recomendação mostrada",
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Link para responder o lead no WhatsApp (assume Brasil quando vier sem DDI). */
function whatsappOf(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return "";
  return `https://wa.me/${digits.length <= 11 ? `55${digits}` : digits}`;
}

async function sendEmail(lead: Lead, receivedAt: string) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;

  const port = Number(process.env.SMTP_PORT) || 465;
  const transport = createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");
  const company = lead.empresa && lead.empresa !== "-" ? ` (${lead.empresa})` : "";
  const subject = oneLine(`Novo lead: ${lead.nome}${company} · ${lead.origem || "site"}`).slice(0, 180);
  const wa = whatsappOf(lead.whatsapp);
  const text = [
    `Novo contato pelo site ${site.url}`,
    "",
    ...FIELDS.filter((f) => lead[f]).map((f) => `${LABELS[f]}: ${lead[f]}`),
    "",
    ...(wa ? [`Responder no WhatsApp: ${wa}`] : []),
    `Recebido em: ${receivedAt}`,
    "Consentimento LGPD: sim (marcado no formulário)",
  ].join("\n");

  await transport.sendMail({
    from: { name: `Site ${site.name}`, address: process.env.SMTP_FROM || user },
    to: process.env.LEAD_EMAIL_TO || site.contact.email,
    replyTo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ? lead.email : undefined,
    subject,
    text,
  });
  return true;
}

async function sendWebhook(payload: Record<string, unknown>) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) return null;
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`webhook ${res.status}`);
  return true;
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

  // Só o desafio aceita várias linhas; os demais campos viram uma linha.
  const lead = Object.fromEntries(
    FIELDS.map((f) => [f, f === "desafio" ? clean(body[f]) : clean(body[f]).replace(/\s*[\r\n]+\s*/g, " ")]),
  ) as Lead;

  if (!lead.nome || !lead.whatsapp || body.consentimento !== "sim") {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const receivedAt = new Date().toISOString();
  const payload = { ...lead, consentimento: true, recebidoEm: receivedAt };

  const [email, webhook] = await Promise.allSettled([sendEmail(lead, receivedAt), sendWebhook(payload)]);
  const channels = [
    ["e-mail", email],
    ["webhook", webhook],
  ] as const;

  for (const [name, r] of channels) {
    if (r.status === "rejected") console.error(`[lead] falha no ${name}:`, r.reason instanceof Error ? r.reason.message : r.reason);
  }

  const configured = channels.some(([, r]) => r.status === "rejected" || r.value !== null);
  if (!configured) {
    console.info("[lead]", JSON.stringify(payload));
    return NextResponse.json({ ok: true });
  }

  const delivered = channels.some(([, r]) => r.status === "fulfilled" && r.value === true);
  if (!delivered) return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
