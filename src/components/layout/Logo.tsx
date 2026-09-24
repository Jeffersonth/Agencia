import Link from "next/link";
import { site } from "@/lib/site";
import { cx } from "@/components/ui";

/** Marca provisória: núcleo (IA) com órbita. Trocar pelo logotipo definitivo. */
export function LogoMark({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cx("size-8", className)}>
      <rect width="32" height="32" rx="9" fill={dark ? "#ffffff" : "#0A1F44"} />
      <circle cx="16" cy="16" r="9" fill="none" stroke={dark ? "#0A1F44" : "#ffffff"} strokeOpacity="0.28" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="4.5" fill="#0B5FFF" />
      <circle cx="23.8" cy="11.5" r="1.9" fill={dark ? "#0A1F44" : "#ffffff"} />
    </svg>
  );
}

export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cx("inline-flex items-center gap-2.5", className)} aria-label={`${site.name} — página inicial`}>
      <LogoMark dark={dark} />
      <span className={cx("text-[1.05rem] font-bold tracking-tight", dark ? "text-white" : "text-navy")}>{site.name}</span>
    </Link>
  );
}
