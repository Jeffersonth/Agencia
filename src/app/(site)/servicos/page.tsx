import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { complementaryServices } from "@/lib/nav";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui";
import { IconTile } from "@/components/Icon";
import { CTASection, DiagnosticActions, PageHero } from "@/components/sections";

const path = "/servicos/";

export const metadata: Metadata = pageMetadata({
  title: "Criação de Sites, SEO/GEO, Sistemas e Aplicativos com IA",
  description:
    "Sites, SEO e GEO, sistemas e aplicativos sob medida, sempre com um componente de IA embutido: o site vem com assistente, o sistema com automação, o app com agente.",
  path,
});

const details: Record<string, string> = {
  "/servicos/criacao-de-sites/": "Institucional, landing page, e-commerce e portais. Next.js, SEO técnico e assistente de IA como padrão.",
  "/servicos/seo-e-geo/": "Ranquear no Google e ser citado por ChatGPT, Gemini, Claude e Perplexity. Auditoria, implementação e planos mensais.",
  "/servicos/desenvolvimento-de-sistemas/": "Sistemas corporativos e SaaS com IA no núcleo, código seu desde o primeiro dia e sem lock-in.",
  "/servicos/desenvolvimento-de-aplicativos/": "Apps iOS e Android com uma única base de código, IA integrada e publicação nas lojas.",
};

const prices: Record<string, string> = {
  "/servicos/criacao-de-sites/": "a partir de R$ 3.500",
  "/servicos/seo-e-geo/": "a partir de R$ 1.500",
  "/servicos/desenvolvimento-de-sistemas/": "a partir de R$ 25.000",
  "/servicos/desenvolvimento-de-aplicativos/": "a partir de R$ 40.000",
};

export default function ServicosPage() {
  const crumbs = [{ name: "Serviços", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        centered
        crumbs={crumbs}
        eyebrow="Capacidades complementares"
        title="Sites, visibilidade em IA e software. Sempre com inteligência dentro."
        answer="Além dos agentes e automações, criamos sites, fazemos SEO e GEO e desenvolvemos sistemas e aplicativos sob medida. A regra é uma só: todo projeto complementar sai com pelo menos um componente de IA — o site com assistente, o sistema com automação, o app com agente. É o que nos diferencia de uma agência comum."
        actions={<DiagnosticActions secondary={{ href: "/solucoes/", label: "Ver o núcleo de IA" }} />}
      />
      <Section labelledBy="lista-servicos">
        <SectionHeading id="lista-servicos" eyebrow="Serviços" title="Escolha por onde começar." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {complementaryServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)] md:p-10"
            >
              {s.icon && <IconTile name={s.icon} />}
              <h3 className="mt-8 text-2xl font-semibold">{s.label}</h3>
              <p className="mt-3 flex-1 text-lg text-slate">{details[s.href]}</p>
              <p className="mt-8 flex items-center justify-between border-t border-line pt-5">
                <span className="text-slate">{prices[s.href]}</span>
                <ArrowRight aria-hidden className="size-5 text-signal transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
