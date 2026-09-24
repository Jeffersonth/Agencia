import Link from "next/link";
import type { ReactNode } from "react";
import { Orb, type OrbTone } from "@/components/Orb";
import { cx } from "@/components/ui";

const banners: Record<OrbTone, string> = {
  blue: "bg-[linear-gradient(135deg,#3b5bff,#6a4dff)]",
  violet: "bg-[linear-gradient(135deg,#7c4dff,#b04dff)]",
  teal: "bg-[linear-gradient(135deg,#2bd0a8,#2b7cff)]",
  orange: "bg-[linear-gradient(135deg,#ff9a5c,#c0406a)]",
  cyan: "bg-[linear-gradient(135deg,#2bc6d0,#1f5f9a)]",
};

/** Card com faixa colorida e orbe (cases e artigos, como no design). */
export function BannerCard({
  href,
  tone = "blue",
  tag,
  meta,
  title,
  text,
  footer,
  cta = "Ler mais",
  deco,
}: {
  href?: string;
  tone?: OrbTone;
  tag?: ReactNode;
  meta?: ReactNode;
  title: string;
  text?: string;
  footer?: ReactNode;
  cta?: string;
  deco?: "lines" | "flow" | "shield";
}) {
  const body = (
    <>
      <div className={cx("relative h-40 overflow-hidden", banners[tone])}>
        {tag && <span className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-2.5 py-1 text-[0.7rem] font-semibold text-ink">{tag}</span>}
        {deco === "lines" && (
          <svg aria-hidden viewBox="0 0 200 100" className="absolute left-6 top-8 h-24 w-48 opacity-60">
            <path d="M8 18 C 70 0, 120 10, 150 40 M8 82 C 70 100, 120 90, 150 60" fill="none" stroke="#fff" strokeOpacity=".5" />
            <circle cx="8" cy="18" r="3" fill="#fff" fillOpacity=".7" />
            <circle cx="8" cy="82" r="3" fill="#fff" fillOpacity=".7" />
          </svg>
        )}
        {deco === "flow" && (
          <svg aria-hidden viewBox="0 0 200 100" className="absolute left-6 top-8 h-24 w-48 opacity-60">
            <rect x="4" y="14" width="14" height="14" rx="3" fill="none" stroke="#fff" />
            <rect x="4" y="68" width="14" height="14" rx="3" fill="none" stroke="#fff" />
            <path d="M18 21 H 90 L 130 48 L 90 75 H 18" fill="none" stroke="#fff" strokeOpacity=".6" />
          </svg>
        )}
        {deco === "shield" && (
          <svg aria-hidden viewBox="0 0 60 70" className="absolute left-8 top-10 h-20 w-16 opacity-70">
            <path d="M30 4 L54 14 V34 C54 50 43 61 30 66 C17 61 6 50 6 34 V14 Z" fill="none" stroke="#fff" strokeWidth="1.5" />
            <path d="M20 35 l7 7 l13 -14" fill="none" stroke="#fff" strokeWidth="1.8" />
          </svg>
        )}
        <Orb tone={tone} wave={false} className="absolute -bottom-6 right-6 size-36 transition-transform duration-500 group-hover:-translate-y-1" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {meta && <div className="text-[0.8rem] text-slate">{meta}</div>}
        <h3 className="mt-2 text-[1.12rem] font-bold leading-snug">{title}</h3>
        {text && <p className="mt-2 flex-1 text-[0.93rem] text-slate">{text}</p>}
        {footer}
        {href && <span className="mt-4 text-[0.9rem] font-semibold text-signal">{cta}</span>}
      </div>
    </>
  );
  const cls =
    "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all duration-200";
  return href ? (
    <Link href={href} className={cx(cls, "hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]")}>
      {body}
    </Link>
  ) : (
    <article className={cls}>{body}</article>
  );
}
