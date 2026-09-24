import { Badge, cx } from "@/components/ui";
import { Checklist } from "@/components/sections";

export type Offer = {
  name: string;
  price: string;
  priceNote?: string;
  text?: string;
  features?: string[];
  badge?: string;
  highlight?: boolean;
};

export function OfferCards({ offers, columns = 3 }: { offers: Offer[]; columns?: 2 | 3 | 4 }) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 xl:grid-cols-4" }[columns];
  return (
    <div className={cx("grid gap-5", cols)}>
      {offers.map((o) => (
        <div
          key={o.name}
          className={cx(
            "relative flex h-full flex-col rounded-[var(--radius-card)] p-7 shadow-[var(--shadow-card)]",
            o.highlight ? "bg-[linear-gradient(165deg,#251b60,#12102e)] text-white shadow-[0_30px_70px_-30px_rgba(124,77,255,.6)] ring-1 ring-violet-400/40" : "bg-white ring-1 ring-line/60",
          )}
        >
          {o.badge && o.highlight && (
            <span className="bg-brand absolute -top-3 left-7 rounded-full px-3 py-1 text-[0.72rem] font-semibold text-white">{o.badge}</span>
          )}
          <div className="flex items-start justify-between gap-3">
            <h3 className={cx("text-[1.25rem] font-bold", o.highlight && "text-white")}>{o.name}</h3>
            {o.badge && !o.highlight && <Badge tone="gray">{o.badge}</Badge>}
          </div>
          {o.text && <p className={cx("mt-2 text-[0.95rem]", o.highlight ? "text-white/65" : "text-slate")}>{o.text}</p>}
          <p className={cx("mt-6 w-fit font-[family-name:var(--font-display)] text-[1.9rem] font-bold tracking-tight", o.highlight ? "text-gradient" : "text-ink")}>{o.price}</p>
          {o.priceNote && <p className={cx("mt-1 text-sm", o.highlight ? "text-white/55" : "text-slate")}>{o.priceNote}</p>}
          {o.features && (
            <Checklist dark={o.highlight} items={o.features} className={cx("mt-6 border-t pt-6 text-[0.95rem]", o.highlight ? "border-white/10" : "border-line")} />
          )}
        </div>
      ))}
    </div>
  );
}
