import type { Metadata } from "next";
import Link from "next/link";
import { comparisons, guides } from "@/content/articles";
import { glossary } from "@/content/glossary";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading, TextLink } from "@/components/ui";
import { CTASection, LinkCard, PageHero } from "@/components/sections";

const path = "/conteudo/";

export const metadata: Metadata = pageMetadata({
  title: "Conteúdo sobre IA, Agentes e Automação para Empresas",
  description:
    "Guias, comparativos e glossário sobre agentes de IA, WhatsApp, LGPD, automação e GEO. Conteúdo prático, assinado e atualizado, para decidir com segurança.",
  path,
});

export default function ConteudoPage() {
  const crumbs = [{ name: "Conteúdo", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        centered
        crumbs={crumbs}
        eyebrow="Central de conteúdo"
        title="IA para empresas, explicada sem jargão."
        answer="Guias completos, comparativos e um glossário para entender agentes de IA, automação, WhatsApp, LGPD e GEO — e decidir com segurança. Todo conteúdo é assinado, datado e escrito a partir de projetos reais, não de teoria."
      />

      <Section id="guias" labelledBy="guias-titulo">
        <SectionHeading id="guias-titulo" eyebrow="Guias" title="Conteúdo longo e definitivo." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <LinkCard key={g.slug} href={`/conteudo/guias/${g.slug}/`} meta={`Guia · ${g.readingMinutes} min`} title={g.title} text={g.description} />
          ))}
        </div>
      </Section>

      <Section tone="mist" id="comparativos" labelledBy="comparativos-titulo">
        <SectionHeading id="comparativos-titulo" eyebrow="Comparativos" title="Para decidir entre uma opção e outra." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {comparisons.map((c) => (
            <LinkCard key={c.slug} href={`/conteudo/comparativos/${c.slug}/`} meta={`Comparativo · ${c.readingMinutes} min`} title={c.title} text={c.description} />
          ))}
        </div>
      </Section>

      <Section id="glossario" labelledBy="glossario-titulo">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="glossario-titulo" eyebrow="Glossário" title="Termos de IA, em uma frase." />
          <TextLink href="/conteudo/glossario/" className="shrink-0">
            Ver glossário completo
          </TextLink>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {glossary.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/conteudo/glossario/${t.slug}/`}
                className="inline-block rounded-full bg-white ring-1 ring-line/60 px-4 py-2 font-medium shadow-[var(--shadow-card)] transition-colors hover:border-signal hover:text-signal"
              >
                {t.term}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection />
    </>
  );
}
