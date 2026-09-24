import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { ContinueOnWhatsApp } from "./ContinueOnWhatsApp";

export const metadata: Metadata = {
  title: "Recebemos sua mensagem",
  robots: { index: false, follow: true },
};

export default function ObrigadoPage() {
  return (
    <section className="relative overflow-hidden">
      <svg aria-hidden viewBox="0 0 1200 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-[55%] h-40 w-full">
        <path d="M0 150 Q600 20 1200 150" fill="none" stroke="#8ab4ff" strokeOpacity=".3" />
        <path d="M0 175 Q600 60 1200 175" fill="none" stroke="#8ab4ff" strokeOpacity=".15" />
      </svg>
      <div className="container-site relative flex flex-col items-center py-20 text-center md:py-28">
        <span className="flex size-24 items-center justify-center rounded-full bg-white/10 text-mint ring-1 ring-white/15">
          <CircleCheck aria-hidden className="size-11" strokeWidth={1.5} />
        </span>
        <h1 className="mt-8 max-w-2xl text-[2.4rem] leading-[1.08] text-white md:text-[3.4rem]">Recebemos sua mensagem</h1>
        <p className="mt-5 max-w-xl text-lg text-white/70">
          Nosso time responde em até um dia útil. Enquanto isso, você já pode dar uma olhada em como trabalhamos e nos projetos que construímos.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/cases/" size="lg">
            Ver cases
          </ButtonLink>
          <ButtonLink href="/metodo/" size="lg" variant="ghost-light">
            Como funciona
          </ButtonLink>
        </div>
        <ContinueOnWhatsApp />
      </div>
    </section>
  );
}
