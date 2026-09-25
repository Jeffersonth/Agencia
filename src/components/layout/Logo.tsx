import Link from "next/link";
import { site } from "@/lib/site";
import { cx } from "@/components/ui";

/**
 * Marca Soluna IA: lua crescente (Sol + Luna, a IA que trabalha 24/7) com o sol
 * como hub de uma rede neural. Violeta da marca + acento dourado.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" aria-hidden className={cx("size-8", className)}>
      <defs>
        <linearGradient id="sol-v" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c4dff" />
          <stop offset="1" stopColor="#4d7cff" />
        </linearGradient>
        <linearGradient id="sol-s" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffb547" />
          <stop offset="1" stopColor="#ff7a45" />
        </linearGradient>
        <mask id="sol-m">
          <rect width="240" height="240" fill="#fff" />
          <circle cx="183" cy="94" r="91" fill="#000" />
        </mask>
      </defs>
      <circle cx="115" cy="120" r="95" fill="url(#sol-v)" mask="url(#sol-m)" />
      <g stroke="#7c4dff" strokeWidth="8" strokeLinecap="round">
        <line x1="185" y1="87" x2="150" y2="44" />
        <line x1="185" y1="87" x2="214" y2="60" />
        <line x1="185" y1="87" x2="212" y2="128" />
      </g>
      <g fill="#7c4dff">
        <circle cx="150" cy="44" r="11" />
        <circle cx="214" cy="60" r="11" />
        <circle cx="212" cy="128" r="11" />
      </g>
      <circle cx="185" cy="87" r="18" fill="url(#sol-s)" />
    </svg>
  );
}

export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cx("inline-flex items-center gap-2.5", className)} aria-label={`${site.name} — página inicial`}>
      <LogoMark />
      <span className={cx("font-[family-name:var(--font-display)] text-[1.2rem] font-bold tracking-[-0.03em]", dark ? "text-white" : "text-ink")}>
        Soluna <span className={dark ? "text-[#b9a4ff]" : "text-violet-400"}>IA</span>
      </span>
    </Link>
  );
}
