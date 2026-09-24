import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Busca (liberado): fazem a marca aparecer nas respostas.
 * Treinamento (decisão da empresa): para o site da própria agência, liberar tende a
 * ajudar, porque aumenta a chance de a marca ser conhecida pelos modelos.
 * Para bloquear o treinamento, troque `allow` por `disallow` no grupo de treinamento.
 */
const searchBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"];
const trainingBots = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: searchBots, allow: "/", disallow: "/api/" },
      { userAgent: trainingBots, allow: "/", disallow: "/api/" },
      { userAgent: "*", allow: "/", disallow: "/api/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
