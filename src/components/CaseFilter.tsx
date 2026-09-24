"use client";

import { useState } from "react";
import { caseTypeLabels, type CaseStudy, type CaseType } from "@/content/cases";
import { CaseCard } from "@/components/CaseCard";
import { cx } from "@/components/ui";

export function CaseFilter({ items }: { items: CaseStudy[] }) {
  const types = (Object.keys(caseTypeLabels) as CaseType[]).filter((t) => items.some((i) => i.type === t));
  const [active, setActive] = useState<CaseType | "all">("all");
  const visible = active === "all" ? items : items.filter((i) => i.type === active);

  return (
    <div>
      <div role="group" aria-label="Filtrar por tipo" className="flex flex-wrap gap-2">
        {(["all", ...types] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={active === t}
            onClick={() => setActive(t)}
            className={cx(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              active === t ? "border-navy bg-navy text-white" : "border-line-strong bg-white text-ink hover:border-ink",
            )}
          >
            {t === "all" ? "Todos" : caseTypeLabels[t]}
            <span className={cx("ml-1.5 tabular-nums", active === t ? "text-white/60" : "text-slate")}>
              {t === "all" ? items.length : items.filter((i) => i.type === t).length}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <CaseCard key={c.slug} item={c} />
        ))}
      </div>
    </div>
  );
}
