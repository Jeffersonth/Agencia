import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseTypeLabels, type CaseStudy } from "@/content/cases";
import { Badge } from "@/components/ui";

export function CaseStatusBadge({ status }: { status: CaseStudy["status"] }) {
  return status === "real" ? <Badge tone="green">Case real</Badge> : <Badge tone="gray">Projeto demonstrativo</Badge>;
}

export function CaseCard({ item }: { item: CaseStudy }) {
  const body = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <CaseStatusBadge status={item.status} />
        <Badge tone="blue">{caseTypeLabels[item.type]}</Badge>
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-snug">{item.title}</h3>
      <p className="mt-1 text-sm text-slate">
        {item.company} · {item.sector}
      </p>
      <p className="mt-4 flex-1 text-[0.97rem] text-slate">{item.summary}</p>
      {item.indicators.length > 0 && (
        <p className="mt-5 border-t border-line pt-4 text-sm text-slate">
          <span className="font-semibold text-ink">{item.status === "real" ? "Medimos:" : "Indicadores acompanhados:"}</span>{" "}
          {item.indicators.slice(0, 3).join(" · ")}
        </p>
      )}
    </>
  );
  const cls =
    "group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all";
  if (item.noDetail) return <article className={cls}>{body}</article>;
  return (
    <Link href={`/cases/${item.slug}/`} className={`${cls} hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)]`}>
      {body}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
        Ver como funciona <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
