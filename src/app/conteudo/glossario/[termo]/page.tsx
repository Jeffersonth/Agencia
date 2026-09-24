import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTerm, glossary } from "@/content/glossary";
import { routeInfo } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { Breadcrumbs, CTASection, LinkCard } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossary.map((t) => ({ termo: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conteudo/glossario/[termo]">): Promise<Metadata> {
  const term = getTerm((await params).termo);
  if (!term) return {};
  return pageMetadata({ title: `O que é ${term.term}? Definição`, description: term.definition, path: `/conteudo/glossario/${term.slug}/` });
}

export default async function TermPage({ params }: PageProps<"/conteudo/glossario/[termo]">) {
  const term = getTerm((await params).termo);
  if (!term) notFound();
  const path = `/conteudo/glossario/${term.slug}/`;
  const crumbs = [
    { name: "Conteúdo", path: "/conteudo/" },
    { name: "Glossário", path: "/conteudo/glossario/" },
    { name: term.term, path },
  ];
  const related = term.related.map((p) => ({ p, info: routeInfo(p) })).filter((r) => r.info);
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "DefinedTerm",
            name: term.term,
            description: term.definition,
            url: absoluteUrl(path),
            inDefinedTermSet: absoluteUrl("/conteudo/glossario/"),
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <section className="border-b border-line bg-mist">
        <Container className="pb-14 pt-8 md:pt-10">
          <Breadcrumbs items={crumbs} />
          <div className="mt-12 max-w-3xl">
            <p className="eyebrow mb-4">Glossário</p>
            <h1 className="text-[2.2rem] font-semibold leading-[1.1] md:text-[3.1rem]">O que é {term.term}?</h1>
            <p data-answer className="mt-6 rounded-2xl border-l-4 border-signal bg-white p-6 text-lg leading-relaxed text-ink md:text-xl">
              {term.definition}
            </p>
          </div>
        </Container>
      </section>
      <Container className="max-w-3xl py-16">
        <div className="prose-site text-[1.05rem] text-ink/90">
          {term.body.map((b) => (
            <p key={b}>{b}</p>
          ))}
        </div>
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Para aprofundar</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map(({ p, info }) => (
                <LinkCard key={p} href={p} title={info!.title} />
              ))}
            </div>
          </div>
        )}
      </Container>
      <CTASection />
    </>
  );
}
