import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { mainNav, type NavGroup } from "@/lib/nav";
import { ButtonLink, cx } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Logo, LogoMark } from "./Logo";
import { MobileNav } from "./MobileNav";

const alignOuter = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
} as const;
const notchPos = {
  left: "left-9",
  center: "left-1/2 -translate-x-1/2",
  right: "right-9",
} as const;

function MegaPanel({ group }: { group: NavGroup }) {
  const align = group.align ?? "center";
  const width = group.wide ? "w-[50rem]" : group.featured ? "w-[42rem]" : "w-[22rem]";
  return (
    <div className={cx("pointer-events-none absolute top-full z-50 max-w-[calc(100vw-24px)] pt-3 group-hover:pointer-events-auto group-focus-within:pointer-events-auto", alignOuter[align], width)}>
      <div
        className={cx(
          "invisible origin-top translate-y-1 scale-[0.98] opacity-0 transition-all duration-200 ease-out",
          "group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
          "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100",
        )}
      >
        <span aria-hidden className={cx("absolute -top-0.5 z-10 size-3 rotate-45 rounded-[3px] bg-white ring-1 ring-line/60", notchPos[align])} />
        <div className="relative overflow-hidden rounded-[1.35rem] bg-white shadow-[var(--shadow-float)] ring-1 ring-line">
          <div className={cx("grid", group.featured && (group.wide ? "grid-cols-[20rem_1fr]" : "grid-cols-[19rem_1fr]"))}>
            {group.featured && (
              <Link
                href={group.featured.href}
                className="group/f relative flex flex-col justify-between overflow-hidden bg-[linear-gradient(155deg,#2b2170,#171036)] p-6 text-white"
              >
                <span aria-hidden className="pointer-events-none absolute -right-10 -top-14 size-44 rounded-full opacity-60" style={{ background: "radial-gradient(circle, #7c4dff 0%, transparent 68%)" }} />
                <span aria-hidden className="pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full opacity-40" style={{ background: "radial-gradient(circle, #4d7cff 0%, transparent 70%)" }} />
                <LogoMark className="absolute right-5 top-5 size-7 opacity-30" />
                <div className="relative">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#b9a4ff]">{group.featured.eyebrow}</p>
                  <p className="mt-3 text-[1.16rem] font-bold leading-snug">{group.featured.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{group.featured.text}</p>
                </div>
                <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform group-hover/f:translate-x-0.5">
                  {group.featured.cta}
                  <ArrowRight aria-hidden className="size-4 text-violet-400" />
                </span>
              </Link>
            )}
            <ul className={cx("grid gap-1 p-3", group.wide && "grid-cols-2")}>
              {group.items?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group/i flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist focus-visible:bg-mist">
                    {item.icon && (
                      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-400 ring-1 ring-violet-100 transition-all group-hover/i:bg-[linear-gradient(135deg,#7c4dff,#4d7cff)] group-hover/i:text-white group-hover/i:ring-transparent">
                        <Icon name={item.icon} className="size-[1.1rem]" />
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="flex items-center gap-1 text-[0.94rem] font-semibold text-ink">
                        {item.label}
                        <ArrowRight aria-hidden className="size-3.5 -translate-x-1 text-violet-400 opacity-0 transition-all group-hover/i:translate-x-0 group-hover/i:opacity-100" />
                      </span>
                      {item.description && <span className="mt-0.5 block text-[0.84rem] leading-snug text-slate">{item.description}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#221963]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:text-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo dark markClassName="size-[37px]" />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((group) => (
              <li key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white group-hover:bg-white/10 group-hover:text-white"
                >
                  {group.label}
                  {group.items && (
                    <ChevronDown aria-hidden className="size-3.5 text-white/50 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  )}
                </Link>
                {group.items && <MegaPanel group={group} />}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden sm:block">
            <ButtonLink href="/diagnostico/" size="sm" className="lg:px-5 lg:py-2.5">
              Agendar Diagnóstico
            </ButtonLink>
          </span>
          <span className="sm:hidden">
            <ButtonLink href="/diagnostico/" size="sm">
              Diagnóstico
            </ButtonLink>
          </span>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
