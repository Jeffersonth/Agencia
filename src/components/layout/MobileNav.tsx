"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { site, whatsappLink } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open &&
        createPortal(
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto border-t border-line bg-white"
        >
          <nav
            aria-label="Navegação principal (celular)"
            className="container-site py-4"
            onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
          >
            <ul className="divide-y divide-line">
              {mainNav.map((group) =>
                group.items ? (
                  <li key={group.label}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                        {group.label}
                        <ChevronDown aria-hidden className="size-5 text-slate transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="pb-4">
                        <li>
                          <Link href={group.href} className="block rounded-lg px-3 py-2.5 font-medium text-signal">
                            Ver tudo em {group.label}
                          </Link>
                        </li>
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className="block rounded-lg px-3 py-2.5 hover:bg-mist">
                              <span className="block font-medium text-ink">{item.label}</span>
                              {item.description && (
                                <span className="block text-sm leading-snug text-slate">{item.description}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={group.label}>
                    <Link href={group.href} className="block py-4 text-lg font-semibold text-ink">
                      {group.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6 grid gap-3 pb-10">
              <Link
                href="/diagnostico/"
                className="bg-brand inline-flex items-center justify-center rounded-full px-5 py-3.5 font-semibold text-white"
              >
                Agendar Diagnóstico
              </Link>
              <a
                href={whatsappLink(`Olá! Vim pelo site da ${site.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-line-strong px-5 py-3.5 font-semibold text-ink"
              >
                Falar no WhatsApp
              </a>
            </div>
          </nav>
        </div>,
          // Portal: o backdrop-filter do header criaria um bloco de contenção para o painel fixo.
          document.body,
        )}
    </div>
  );
}
