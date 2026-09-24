import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("container-site", className)}>{children}</div>;
}

type Tone = "white" | "mist" | "navy" | "aurora";

export function Section({
  tone = "mist",
  className,
  id,
  children,
  labelledBy,
}: {
  tone?: Tone;
  className?: string;
  id?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const toneClass =
    tone === "navy"
      ? "bg-hero text-white on-dark"
      : tone === "aurora"
        ? "bg-aurora text-white on-dark"
        : tone === "white"
          ? "bg-white"
          : "bg-mist";
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx("relative overflow-hidden py-20 md:py-28", toneClass, className)}>
      <Container className="relative">{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("eyebrow", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  align = "left",
  dark,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  id?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 id={id} className={cx("text-[1.9rem] font-bold md:text-[2.6rem]", dark && "text-white")}>
        {title}
      </h2>
      {text && (
        <p className={cx("mt-4 text-lg", dark ? "text-white/70" : "text-slate")}>{text}</p>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "light" | "ghost-light" | "link";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-offset-4 whitespace-nowrap";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white shadow-[var(--shadow-glow)] hover:-translate-y-px hover:brightness-110",
  secondary: "border border-line-strong bg-white text-signal hover:border-signal/50",
  light: "bg-white text-ink hover:-translate-y-px hover:bg-violet-50",
  "ghost-light": "border border-white/25 bg-white/[0.06] text-white hover:border-white/50 hover:bg-white/10",
  link: "text-signal hover:text-signal-600 !px-0 !py-0",
};

const buttonSizes = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
  sm: "px-4 py-2 text-sm",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  size?: keyof typeof buttonSizes;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">) {
  const classes = cx(buttonBase, buttonSizes[size], buttonVariants[variant], "group", className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cx("group inline-flex items-center gap-1.5 font-semibold text-signal hover:text-signal-600", className)}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: "blue" | "violet" | "green" | "gray" | "amber" | "dark";
  className?: string;
}) {
  const tones = {
    blue: "bg-signal-50 text-signal-600 ring-signal-100",
    violet: "bg-violet-50 text-violet ring-violet-100",
    green: "bg-accent-50 text-accent-strong ring-accent/20",
    gray: "bg-white text-slate ring-line",
    amber: "bg-amber-50 text-amber-800 ring-amber-200",
    dark: "bg-white/10 text-white ring-white/15",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cx("rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60 md:p-8", className)}>
      {children}
    </div>
  );
}
