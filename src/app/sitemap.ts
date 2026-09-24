import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-09-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: LAST_MODIFIED,
    changeFrequency: r.group === "conteudo" ? "monthly" : r.group === "legal" ? "yearly" : "weekly",
    priority: r.priority,
  }));
}
