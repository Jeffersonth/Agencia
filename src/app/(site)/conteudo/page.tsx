import type { Metadata } from "next";
import Link from "next/link";
import { comparisons, guides } from "@/content/articles";
import { glossary } from "@/content/glossary";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Badge, Section, SectionHeading, TextLink } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { BannerCard } from "@/components/BannerCard";
import { Orb } from "@/components/Orb";
import { site } from "@/lib/site";

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
        <Link
          href={`/conteudo/guias/${guides[0].slug}/`}
          className="group mt-10 grid overflow-hidden rounded-[1.4rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:shadow-[var(--shadow-lift)] md:grid-cols-2"
        >
          <div className="relative min-h-60 overflow-hidden bg-[linear-gradient(135deg,#3b5bff,#6a4dff)]">
            <Orb tone="blue" wave={false} className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <Badge tone="blue" className="w-fit">Destaque · Guia</Badge>
            <h3 className="mt-4 text-[1.6rem] font-bold leading-tight md:text-[1.9rem]">{guides[0].title}</h3>
            <p className="mt-3 text-slate">{guides[0].description}</p>
            <p className="mt-6 text-sm text-slate">
              {site.founder.name} · {guides[0].readingMinutes} min de leitura
            </p>
          </div>
        </Link>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {guides.slice(1).map((g, i) => (
            <BannerCard
              key={g.slug}
              href={`/conteudo/guias/${g.slug}/`}
              tone={(["violet", "teal", "blue"] as const)[i % 3]}
              deco={(["flow", "shield", "lines"] as const)[i % 3]}
              tag="Guia"
              meta={`${g.readingMinutes} min de leitura`}
              title={g.title}
              cta="Ler artigo"
            />
          ))}
        </div>
      </Section>

      <Section tone="mist" id="comparativos" labelledBy="comparativos-titulo">
        <SectionHeading id="comparativos-titulo" eyebrow="Comparativos" title="Para decidir entre uma opção e outra." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {comparisons.map((c, i) => (
            <BannerCard
              key={c.slug}
              href={`/conteudo/comparativos/${c.slug}/`}
              tone={(["violet", "blue", "cyan", "teal"] as const)[i % 4]}
              tag="Comparativo"
              meta={`${c.readingMinutes} min de leitura`}
              title={c.title}
              cta="Ler comparativo"
            />
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
