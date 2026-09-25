import { cx } from "@/components/ui";

/** Orbe brilhante (decorativo). */
export type OrbTone = "blue" | "violet" | "teal" | "orange" | "cyan";

const palettes: Record<OrbTone, [string, string, string]> = {
  blue: ["#e3ecff", "#5c7cff", "#241a7a"],
  violet: ["#f3e6ff", "#a869ff", "#39197f"],
  teal: ["#e4fff6", "#2bd0a8", "#0f5f7a"],
  orange: ["#fff0e0", "#ff9a5c", "#a8304f"],
  cyan: ["#e0fbff", "#3fd6e6", "#0f5f7a"],
};

export function Orb({ tone = "blue", className, wave = true }: { tone?: OrbTone; className?: string; wave?: boolean }) {
  const [a, b, c] = palettes[tone];
  const id = `orb-${tone}`;
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cx("drop-shadow-[0_22px_44px_rgba(70,50,190,0.45)]", className)}>
      <defs>
        <radialGradient id={id} cx="38%" cy="32%" r="72%">
          <stop offset="0" stopColor={a} />
          <stop offset="0.45" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#${id})`} />
      {wave && (
        <g clipPath={`url(#${id}-clip)`}>
          <path d="M-2 62 Q50 34 104 56 Q60 86 -2 62Z" fill="#fff" opacity="0.14" />
          <path d="M-2 62 Q50 34 104 56" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.2" />
        </g>
      )}
      <ellipse cx="36" cy="27" rx="13" ry="7.5" fill="#fff" opacity="0.55" transform="rotate(-18 36 27)" />
    </svg>
  );
}
