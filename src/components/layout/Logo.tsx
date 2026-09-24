import Link from "next/link";
import { site } from "@/lib/site";
import { cx } from "@/components/ui";

/** Marca Sinal: pulso dentro de um círculo (design Claude Design). */
export function LogoMark({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden className={cx("size-7", className)}>
      <defs>
        <linearGradient id="sinal-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c4dff" />
          <stop offset="1" stopColor="#4d7cff" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="12.5" fill={dark ? "rgba(255,255,255,.08)" : "#f3edff"} stroke={dark ? "rgba(201,182,255,.55)" : "rgba(124,77,255,.35)"} />
      <path
        d="M6.5 14.5h3.2l2-4.6 3.1 8.6 2.2-5.4 1.2 1.4h3.3"
        fill="none"
        stroke={dark ? "#c9b6ff" : "url(#sinal-g)"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cx("inline-flex items-center gap-2.5", className)} aria-label={`${site.name} — página inicial`}>
      <LogoMark dark={dark} />
      <span className={cx("font-[family-name:var(--font-display)] text-[1.2rem] font-bold tracking-[-0.03em]", dark ? "text-white" : "text-ink")}>
        {site.name}
      </span>
    </Link>
  );
}
