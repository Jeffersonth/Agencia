import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "@/content/glossary";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";

const path = "/conteudo/glossario/";

export const metadata: Metadata = pageMetadata({
  title: "Glossário de IA para Empresas",
  description: "Definições curtas e precisas de agente de IA, RAG, SDR com IA, GEO, llms.txt, transbordo, IA privada e outros termos.",
  path,
});

export default function GlossarioPage() {
  const crumbs = [
    { name: "Conteúdo", path: "/conteudo/" },
    { name: "Glossário", path },
  ];
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "DefinedTermSet",
            name: "Glossário de IA para Empresas",
            url: absoluteUrl(path),
            hasDefinedTerm: sorted.map((t) => ({ "@type": "DefinedTerm", name: t.term, description: t.definition, url: absoluteUrl(`/conteudo/glossario/${t.slug}/`) })),
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Glossário"
        title="Glossário de IA para empresas."
        answer="Definições curtas e precisas dos termos que aparecem em projetos de IA, automação e visibilidade nas IAs. Cada termo tem uma página própria, com explicação e links para aprofundar."
      />
      <Section>
        <dl className="grid gap-5 md:grid-cols-2">
          {sorted.map((t) => (
            <div key={t.slug} className="rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-7 shadow-[var(--shadow-card)]">
              <dt className="text-xl font-semibold">
                <Link href={`/conteudo/glossario/${t.slug}/`} className="hover:text-signal">
                  {t.term}
                </Link>
              </dt>
              <dd className="mt-2 text-slate">{t.definition}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <CTASection />
    </>
  );
}
