import { caseTypeLabels, type CaseStudy, type CaseType } from "@/content/cases";
import { Badge } from "@/components/ui";
import { BannerCard } from "@/components/BannerCard";
import type { OrbTone } from "@/components/Orb";

export const caseTone: Record<CaseType, OrbTone> = {
  ia: "blue",
  automacao: "violet",
  seo: "teal",
  sites: "orange",
  apps: "cyan",
  saas: "cyan",
};

export function CaseStatusBadge({ status }: { status: CaseStudy["status"] }) {
  return status === "real" ? <Badge tone="green">Case real</Badge> : <Badge tone="gray">Projeto demonstrativo</Badge>;
}

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <BannerCard
      href={item.noDetail ? undefined : `/cases/${item.slug}/`}
      tone={caseTone[item.type]}
      tag={item.status === "real" ? "Case real" : "Demonstrativo"}
      deco={item.type === "automacao" ? "flow" : item.type === "seo" ? "shield" : undefined}
      meta={
        <span className="flex flex-wrap gap-1.5">
          <Badge tone="blue">{caseTypeLabels[item.type]}</Badge>
          <Badge tone="violet">{item.sector}</Badge>
        </span>
      }
      title={item.title}
      text={item.summary}
      footer={
        item.indicators.length > 0 ? (
          <p className="mt-4 border-t border-line pt-3 text-[0.82rem] text-slate">
            <span className="font-semibold text-ink">{item.status === "real" ? "Medimos:" : "Indicadores acompanhados:"}</span>{" "}
            {item.indicators.slice(0, 2).join(" · ")}
          </p>
        ) : undefined
      }
      cta={item.status === "real" ? "Ver case" : "Ver como funciona"}
    />
  );
}
