import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { site } from "./site";

/**
 * Checagem técnica de prontidão de um site para buscadores e assistentes de IA.
 * Usada pela ferramenta /ferramentas/teste-visibilidade-ia/.
 */

export type CheckStatus = "ok" | "warn" | "fail";
export type Check = { id: string; label: string; status: CheckStatus; detail: string; weight: number };
export type BotRule = { name: string; owner: string; purpose: "busca" | "treinamento"; allowed: boolean };
export type VisibilityReport = { url: string; finalUrl: string; score: number; checks: Check[]; bots: BotRule[]; ms: number };

const BOTS: Omit<BotRule, "allowed">[] = [
  { name: "Googlebot", owner: "Google", purpose: "busca" },
  { name: "Bingbot", owner: "Microsoft (Bing/Copilot)", purpose: "busca" },
  { name: "OAI-SearchBot", owner: "OpenAI (ChatGPT Search)", purpose: "busca" },
  { name: "ChatGPT-User", owner: "OpenAI (navegação do ChatGPT)", purpose: "busca" },
  { name: "Claude-SearchBot", owner: "Anthropic (Claude)", purpose: "busca" },
  { name: "PerplexityBot", owner: "Perplexity", purpose: "busca" },
  { name: "GPTBot", owner: "OpenAI", purpose: "treinamento" },
  { name: "ClaudeBot", owner: "Anthropic", purpose: "treinamento" },
  { name: "Google-Extended", owner: "Google (Gemini)", purpose: "treinamento" },
];

const UA = `Mozilla/5.0 (compatible; VisibilityCheck/1.0; +${site.url}/ferramentas/teste-visibilidade-ia/)`;
const MAX_BYTES = 1_500_000;

export class InputError extends Error {}

function isPrivateAddress(ip: string) {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split(".").map(Number);
    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 198 && (b === 18 || b === 19)) ||
      a >= 224
    );
  }
  const v6 = ip.toLowerCase();
  if (v6.startsWith("::ffff:")) return isPrivateAddress(v6.slice(7));
  return v6 === "::" || v6 === "::1" || v6.startsWith("fc") || v6.startsWith("fd") || v6.startsWith("fe80");
}

async function assertPublicUrl(raw: string) {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new InputError("Endereço inválido.");
  }
  if (!["http:", "https:"].includes(url.protocol)) throw new InputError("Use um endereço http ou https.");
  if (url.username || url.password) throw new InputError("Endereço inválido.");
  if (url.port && !["80", "443"].includes(url.port)) throw new InputError("Porta não permitida.");
  const host = url.hostname.replace(/^\[|\]$/g, "");
  if (!host.includes(".") || host.endsWith(".local") || host.endsWith(".internal")) throw new InputError("Informe um domínio público.");
  const addresses = isIP(host) ? [{ address: host }] : await lookup(host, { all: true }).catch(() => {
    throw new InputError("Não encontramos esse domínio.");
  });
  if (addresses.length === 0 || addresses.some((a) => isPrivateAddress(a.address))) throw new InputError("Informe um domínio público.");
  return url;
}

/** fetch com timeout, limite de tamanho e redirecionamentos revalidados. */
async function safeFetch(raw: string, hops = 4): Promise<{ status: number; url: string; text: string; ms: number } | null> {
  let current = raw;
  const started = Date.now();
  for (let i = 0; i <= hops; i++) {
    const url = await assertPublicUrl(current);
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        headers: { "User-Agent": UA, Accept: "text/html,text/plain,application/xml;q=0.9,*/*;q=0.5" },
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      return null;
    }
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      current = new URL(res.headers.get("location")!, url).toString();
      continue;
    }
    const reader = res.body?.getReader();
    let received = 0;
    const chunks: Uint8Array[] = [];
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        received += value.byteLength;
        if (received > MAX_BYTES) {
          await reader.cancel();
          break;
        }
        chunks.push(value);
      }
    }
    const text = new TextDecoder().decode(Buffer.concat(chunks));
    return { status: res.status, url: url.toString(), text, ms: Date.now() - started };
  }
  return null;
}

/** Interpretação simplificada do robots.txt: o bot pode acessar a raiz "/"? */
function robotsAllows(robots: string, bot: string) {
  const groups: { agents: string[]; rules: { allow: boolean; path: string }[] }[] = [];
  let current: (typeof groups)[number] | null = null;
  let lastWasAgent = false;
  for (const rawLine of robots.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;
    const [k, ...rest] = line.split(":");
    const key = k.trim().toLowerCase();
    const value = rest.join(":").trim();
    if (key === "user-agent") {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
    } else if ((key === "allow" || key === "disallow") && current) {
      current.rules.push({ allow: key === "allow", path: value });
      lastWasAgent = false;
    } else {
      lastWasAgent = false;
    }
  }
  const name = bot.toLowerCase();
  const group = groups.find((g) => g.agents.includes(name)) ?? groups.find((g) => g.agents.includes("*"));
  if (!group) return true;
  const matching = group.rules.filter((r) => r.path && "/".startsWith(r.path.replace(/\*$/, "").replace(/\$$/, "") || "/"));
  if (matching.length === 0) return true;
  const best = matching.sort((a, b) => b.path.length - a.path.length || Number(b.allow) - Number(a.allow))[0];
  return best.allow;
}

function stripTags(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function checkVisibility(input: string): Promise<VisibilityReport> {
  const normalized = /^https?:\/\//i.test(input.trim()) ? input.trim() : `https://${input.trim()}`;
  const base = await assertPublicUrl(normalized);
  const origin = base.origin;

  const home = await safeFetch(origin + "/");
  if (!home || home.status >= 400) throw new InputError("Não conseguimos acessar a página inicial desse site.");
  const finalOrigin = new URL(home.url).origin;

  const [robotsRes, llmsRes, sitemapRes] = await Promise.all([
    safeFetch(finalOrigin + "/robots.txt"),
    safeFetch(finalOrigin + "/llms.txt"),
    safeFetch(finalOrigin + "/sitemap.xml"),
  ]);

  const html = home.text;
  const head = html.slice(0, 200_000);
  const title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
  const description = head.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] ?? head.match(/<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i)?.[1] ?? "";
  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  const canonical = /<link[^>]+rel=["']canonical["']/i.test(head);
  const lang = html.match(/<html[^>]*\slang=["']([^"']+)["']/i)?.[1] ?? "";
  const og = /<meta[^>]+property=["']og:title["']/i.test(head);
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const schemaTypes = new Set<string>();
  for (const block of jsonLdBlocks) {
    for (const t of block.matchAll(/"@type"\s*:\s*"([^"]+)"/g)) schemaTypes.add(t[1]);
  }
  const textLength = stripTags(html).length;
  const robotsTxt = robotsRes && robotsRes.status === 200 && !/<html/i.test(robotsRes.text.slice(0, 500)) ? robotsRes.text : "";
  const llmsOk = !!llmsRes && llmsRes.status === 200 && !/<html/i.test(llmsRes.text.slice(0, 500)) && llmsRes.text.trim().length > 20;
  const sitemapOk = (!!sitemapRes && sitemapRes.status === 200 && /<(urlset|sitemapindex)/i.test(sitemapRes.text)) || /^sitemap:/im.test(robotsTxt);

  const bots: BotRule[] = BOTS.map((b) => ({ ...b, allowed: robotsTxt ? robotsAllows(robotsTxt, b.name) : true }));
  const searchBlocked = bots.filter((b) => b.purpose === "busca" && !b.allowed);

  const checks: Check[] = [
    {
      id: "https",
      label: "HTTPS ativo",
      status: finalOrigin.startsWith("https://") ? "ok" : "fail",
      detail: finalOrigin.startsWith("https://") ? "O site responde em HTTPS." : "O site não usa HTTPS — buscadores e navegadores penalizam.",
      weight: 8,
    },
    {
      id: "ssr",
      label: "Conteúdo no HTML (sem depender de JavaScript)",
      status: textLength > 1200 ? "ok" : textLength > 300 ? "warn" : "fail",
      detail:
        textLength > 1200
          ? "O texto da página chega pronto no HTML — ótimo para crawlers de IA."
          : "Pouco texto no HTML inicial. Crawlers de IA que não executam JavaScript podem não ver seu conteúdo.",
      weight: 16,
    },
    {
      id: "robots-ai",
      label: "Robôs de busca das IAs liberados",
      status: searchBlocked.length === 0 ? "ok" : "fail",
      detail:
        searchBlocked.length === 0
          ? "Nenhum robô de busca de IA está bloqueado no robots.txt."
          : `Bloqueados no robots.txt: ${searchBlocked.map((b) => b.name).join(", ")}.`,
      weight: 16,
    },
    {
      id: "schema",
      label: "Dados estruturados (Schema.org)",
      status: schemaTypes.size >= 2 ? "ok" : schemaTypes.size === 1 ? "warn" : "fail",
      detail: schemaTypes.size ? `Tipos encontrados: ${[...schemaTypes].slice(0, 6).join(", ")}.` : "Nenhum JSON-LD encontrado na página inicial.",
      weight: 14,
    },
    {
      id: "title",
      label: "Título da página",
      status: title.length >= 20 && title.length <= 70 ? "ok" : title ? "warn" : "fail",
      detail: title ? `“${title.slice(0, 80)}” (${title.length} caracteres).` : "Sem título.",
      weight: 8,
    },
    {
      id: "description",
      label: "Meta description",
      status: description.length >= 70 && description.length <= 170 ? "ok" : description ? "warn" : "fail",
      detail: description ? `${description.length} caracteres.` : "Sem meta description — o resumo que buscadores e IAs usam.",
      weight: 8,
    },
    {
      id: "h1",
      label: "Um título principal (H1)",
      status: h1Count === 1 ? "ok" : h1Count > 1 ? "warn" : "fail",
      detail: h1Count === 1 ? "Há exatamente um H1." : h1Count > 1 ? `Há ${h1Count} H1 — o ideal é um só.` : "Nenhum H1 encontrado.",
      weight: 6,
    },
    {
      id: "sitemap",
      label: "Sitemap XML",
      status: sitemapOk ? "ok" : "warn",
      detail: sitemapOk ? "Sitemap encontrado." : "Não encontramos /sitemap.xml nem referência no robots.txt.",
      weight: 8,
    },
    {
      id: "llms",
      label: "llms.txt",
      status: llmsOk ? "ok" : "warn",
      detail: llmsOk ? "Arquivo llms.txt publicado." : "Sem llms.txt — boa prática de baixo custo (sem garantia de efeito).",
      weight: 4,
    },
    {
      id: "canonical",
      label: "URL canônica",
      status: canonical ? "ok" : "warn",
      detail: canonical ? "Tag canonical presente." : "Sem tag canonical na página inicial.",
      weight: 4,
    },
    {
      id: "lang",
      label: "Idioma declarado",
      status: lang ? "ok" : "warn",
      detail: lang ? `Idioma: ${lang}.` : "O atributo lang não está declarado.",
      weight: 4,
    },
    {
      id: "og",
      label: "Open Graph (compartilhamento)",
      status: og ? "ok" : "warn",
      detail: og ? "Tags Open Graph presentes." : "Sem Open Graph — prévias ruins em redes e apps.",
      weight: 2,
    },
    {
      id: "speed",
      label: "Tempo de resposta do servidor",
      status: home.ms < 1200 ? "ok" : home.ms < 3000 ? "warn" : "fail",
      detail: `A página inicial respondeu em ${(home.ms / 1000).toFixed(1)} s (medido do nosso servidor).`,
      weight: 2,
    },
  ];

  const total = checks.reduce((s, c) => s + c.weight, 0);
  const got = checks.reduce((s, c) => s + (c.status === "ok" ? c.weight : c.status === "warn" ? c.weight / 2 : 0), 0);

  return { url: origin, finalUrl: home.url, score: Math.round((got / total) * 100), checks, bots, ms: home.ms };
}
