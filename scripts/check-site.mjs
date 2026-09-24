#!/usr/bin/env node
/**
 * Verifica o site compilado rodando em BASE_URL (padrão http://localhost:3000):
 * percorre todas as páginas a partir da home e do sitemap e falha se encontrar
 * link interno quebrado, título/descrição ausentes ou repetidos, canonical errado,
 * H1 ausente ou duplicado, JSON-LD inválido, URL do sitemap fora do ar ou 404 com status errado.
 *
 * Uso: npm run check  (com o site rodando)  ·  BASE_URL=https://... SITE_URL=https://... node scripts/check-site.mjs
 */

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const SITE = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://agencia.inovalabs.io").replace(/\/$/, "");

const errors = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);

const SKIP = /^\/(_next|api)\//;
const ASSET = /\.(svg|png|jpe?g|webp|ico|txt|xml|pdf)$/i;

async function get(path) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  return { status: res.status, type: res.headers.get("content-type") || "", body: await res.text(), location: res.headers.get("location") };
}

const attr = (html, re) => html.match(re)?.[1]?.trim();
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const titles = new Map();
const descriptions = new Map();
const seen = new Set();
const queue = ["/"];

async function checkPage(path) {
  const { status, type, body, location } = await get(path);
  if (status >= 300 && status < 400) {
    if (location) {
      const next = new URL(location, BASE + path);
      if (next.origin === new URL(BASE).origin && !seen.has(next.pathname)) queue.push(next.pathname);
    }
    return;
  }
  if (status !== 200) return fail(path, `status ${status}`);
  if (!type.includes("text/html")) return;

  const title = attr(body, /<title>([^<]*)<\/title>/);
  if (!title) fail(path, "sem <title>");
  else titles.set(title, [...(titles.get(title) || []), path]);

  const description = attr(body, /<meta name="description" content="([^"]*)"/);
  if (!description) fail(path, "sem meta description");
  else descriptions.set(description, [...(descriptions.get(description) || []), path]);

  const canonical = attr(body, /<link rel="canonical" href="([^"]*)"/);
  if (!canonical) fail(path, "sem canonical");
  else if (decode(canonical) !== SITE + path) fail(path, `canonical ${canonical} (esperado ${SITE + path})`);

  const h1 = (body.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(path, `${h1} elementos <h1> (esperado 1)`);

  for (const [, json] of body.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch {
      fail(path, "JSON-LD inválido");
    }
  }

  for (const [, href] of body.matchAll(/href="(\/[^"#?]*)/g)) {
    const link = decode(href);
    if (link.startsWith("//") || SKIP.test(link) || ASSET.test(link)) continue;
    if (!seen.has(link)) queue.push(link);
  }
}

async function crawl() {
  while (queue.length) {
    const batch = [...new Set(queue.splice(0, 8))].filter((p) => !seen.has(p));
    batch.forEach((p) => seen.add(p));
    await Promise.all(batch.map((p) => checkPage(p).catch((e) => fail(p, e.message))));
  }
}

async function main() {
  await crawl();
  const pages = seen.size;

  // Sitemap: toda URL precisa abrir e apontar para o domínio público.
  const sitemap = await get("/sitemap.xml");
  if (sitemap.status !== 200) fail("/sitemap.xml", `status ${sitemap.status}`);
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) fail("/sitemap.xml", "nenhuma URL");
  for (const loc of locs) {
    if (!loc.startsWith(SITE + "/")) {
      fail("/sitemap.xml", `URL fora do domínio: ${loc}`);
      continue;
    }
    const path = loc.slice(SITE.length);
    if (!seen.has(path)) {
      seen.add(path);
      await checkPage(path).catch((e) => fail(path, e.message));
      fail(path, "está no sitemap, mas nenhuma página tem link para ela");
    }
  }

  const robots = await get("/robots.txt");
  if (robots.status !== 200 || !robots.body.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail("/robots.txt", "ausente ou sem a linha Sitemap");

  const llms = await get("/llms.txt");
  if (llms.status !== 200) fail("/llms.txt", `status ${llms.status}`);
  for (const [, url] of llms.body.matchAll(/\]\((https?:\/\/[^)]+)\)/g)) {
    if (url.startsWith(SITE + "/") && !seen.has(url.slice(SITE.length))) fail("/llms.txt", `link para página inexistente: ${url}`);
  }

  const missing = await get("/pagina-que-nao-existe-" + Date.now() + "/");
  if (missing.status !== 404) fail("404", `página inexistente respondeu ${missing.status}`);

  for (const [value, where] of titles) if (where.length > 1) fail(where.join(", "), `título repetido: "${value}"`);
  for (const [, where] of descriptions) if (where.length > 1) fail(where.join(", "), "meta description repetida");

  console.log(`Verificadas ${pages} páginas, ${locs.length} URLs do sitemap.`);
  if (errors.length) {
    console.error(`\n${errors.length} problema(s):\n- ${errors.join("\n- ")}`);
    process.exit(1);
  }
  console.log("Tudo certo.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
