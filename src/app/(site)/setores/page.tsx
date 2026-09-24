import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/content/sectors";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { IconTile } from "@/components/Icon";
import { CTASection, DiagnosticActions, PageHero } from "@/components/sections";

const path = "/setores/";

export const metadata: Metadata = pageMetadata({
  title: "IA e Automação por Setor: Advocacia, Saúde, Varejo e Mais",
  description: "Agentes de IA e automação para escritórios de advocacia, clínicas, imobiliárias, escritórios contábeis, e-commerce e escolas, dentro das regras de cada setor e da LGPD.",
  path,
});

export default function SetoresPage() {
  const crumbs = [{ name: "Setores", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Setores"
        title="IA desenhada para as regras do seu setor."
        answer="Cada setor tem dores, sistemas e regras próprias: OAB na advocacia, dados sensíveis na saúde, CRECI no mercado imobiliário, sigilo na contabilidade, CDC no e-commerce e dados de menores na educação. Desenhamos cada projeto a partir disso, com LGPD desde o primeiro dia e as soluções que mais geram retorno em cada área."
        actions={<DiagnosticActions />}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/setores/${s.slug}/`}
              className="group flex flex-col rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)]"
            >
              <IconTile name={s.icon} />
              <h2 className="mt-8 text-2xl font-semibold">{s.name}</h2>
              <p className="mt-3 text-slate">{s.answer}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-semibold text-signal">
                IA para {s.menuName.toLowerCase()} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
