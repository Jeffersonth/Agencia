/**
 * Envia todas as URLs do sitemap ao IndexNow (o índice do Bing alimenta o Copilot e outros assistentes).
 * Uso, depois do deploy:  INDEXNOW_KEY=... NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br npm run indexnow
 */
const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY;
if (!site || !key) {
  console.error("Defina NEXT_PUBLIC_SITE_URL e INDEXNOW_KEY.");
  process.exit(1);
}

const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/indexnow-key.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs enviadas — HTTP ${res.status}`);
if (!res.ok && res.status !== 202) process.exit(1);
