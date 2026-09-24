import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { ButtonLink, cx } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

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
        <Logo dark />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((group) => (
              <li key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {group.label}
                  {group.items && (
                    <ChevronDown aria-hidden className="size-3.5 text-white/50 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  )}
                </Link>
                {group.items && (
                  <div
                    className={cx(
                      "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200",
                      "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                      group.wide ? "w-[40rem]" : "w-[22rem]",
                    )}
                  >
                    <ul
                      className={cx(
                        "grid gap-1 rounded-2xl bg-white p-2.5 shadow-[var(--shadow-float)] ring-1 ring-line",
                        group.wide && "grid-cols-2",
                      )}
                    >
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-mist focus-visible:bg-mist"
                          >
                            {item.icon && (
                              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-400">
                                <Icon name={item.icon} className="size-[1.1rem]" />
                              </span>
                            )}
                            <span>
                              <span className="block text-[0.94rem] font-semibold text-ink">{item.label}</span>
                              {item.description && (
                                <span className="mt-0.5 block text-[0.84rem] leading-snug text-slate">{item.description}</span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
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
