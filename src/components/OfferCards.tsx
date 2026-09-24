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
            "flex h-full flex-col rounded-[var(--radius-card)] border bg-white p-7 shadow-[var(--shadow-card)]",
            o.highlight ? "border-signal/50 ring-1 ring-signal/25" : "border-line",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold">{o.name}</h3>
            {o.badge && <Badge tone={o.highlight ? "blue" : "gray"}>{o.badge}</Badge>}
          </div>
          {o.text && <p className="mt-2 text-[0.97rem] text-slate">{o.text}</p>}
          <p className="mt-6 text-3xl font-semibold tracking-tight text-navy">{o.price}</p>
          {o.priceNote && <p className="mt-1 text-sm text-slate">{o.priceNote}</p>}
          {o.features && <Checklist items={o.features} className="mt-6 border-t border-line pt-6 text-[0.95rem]" />}
        </div>
      ))}
    </div>
  );
}
