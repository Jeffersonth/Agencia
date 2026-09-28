import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { caseTypeLabels, cases, getCase } from "@/content/cases";
import { articleSchema, breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Badge, ButtonLink, Card, Container, Section } from "@/components/ui";
import { WhatsAppGlyph } from "@/components/Icon";
import { CaseCard, CaseStatusBadge, caseTone } from "@/components/CaseCard";
import { Orb } from "@/components/Orb";
import { Breadcrumbs, Chips, CTASection } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.filter((c) => !c.noDetail).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const item = getCase((await params).slug);
  if (!item) return {};
  const prefix = item.status === "demo" ? "Projeto demonstrativo: " : "";
  return pageMetadata({ title: `${prefix}${item.title}`, description: item.summary, path: `/cases/${item.slug}/`, type: "article" });
}

export default async function CasePage({ params }: PageProps<"/cases/[slug]">) {
  const item = getCase((await params).slug);
  if (!item || item.noDetail) notFound();

  const path = `/cases/${item.slug}/`;
  const crumbs = [
    { name: "Cases", path: "/cases/" },
    { name: item.title, path },
  ];
  const more = cases.filter((c) => c.slug !== item.slug && c.type === item.type && !c.noDetail).slice(0, 3);
  const isDemo = item.status === "demo";

  return (
    <>
      <JsonLd data={graph(articleSchema({ title: item.title, description: item.summary, path, updatedAt: "2026-09-24" }), breadcrumbSchema(crumbs))} />
      <section className="bg-hero on-dark relative overflow-hidden text-white">
        <Orb tone={caseTone[item.type]} className="animate-float pointer-events-none absolute right-[8%] top-16 hidden size-40 lg:block" />
        <Container className="relative pb-16 pt-8 md:pt-10">
          <Breadcrumbs items={crumbs} dark />
          <div className="mt-12 max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <CaseStatusBadge status={item.status} />
              <Badge tone="blue">{caseTypeLabels[item.type]}</Badge>
              <Badge tone="gray">{item.sector}</Badge>
            </div>
            <h1 className="mt-6 text-[1.5rem] leading-[1.15] text-white md:text-[2.125rem]">{item.title}</h1>
            <p data-answer className="mt-5 text-lg text-white/75 md:text-xl">
              {item.summary}
            </p>
            <p className="mt-4 text-sm font-medium text-white/60">{item.company}</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <article className="space-y-12">
            {isDemo && (
              <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-[0.95rem] text-amber-900">
                <strong>Projeto demonstrativo.</strong> A empresa é fictícia e não há números apresentados como alcançados. A arquitetura e o método são os que usamos nos projetos reais.
              </p>
            )}
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Cenário</h2>
              <p className="mt-4 text-lg text-slate">{item.scenario}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Solução</h2>
              <p className="mt-4 text-lg text-slate">{item.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Como funciona</h2>
              <ol className="relative mt-6 grid gap-0">
                {item.how.map((h, i) => (
                  <li key={h} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < item.how.length - 1 && (
                      <span aria-hidden className="absolute left-4 top-9 bottom-1 w-0.5 bg-gradient-to-b from-violet-400 to-signal" />
                    )}
                    <span className="relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">{i + 1}</span>
                    <span className="pt-0.5 text-lg">{h}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Tecnologias</h2>
              <div className="mt-5">
                <Chips items={item.tech} />
              </div>
            </div>
            {item.expectedOutcome && (
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">O que a solução muda</h2>
                <p className="mt-3 text-slate">
                  Sem números apresentados como alcançados — a mudança qualitativa que essa arquitetura é feita para entregar.
                </p>
                <ul className="mt-6 space-y-4">
                  {item.expectedOutcome.map((o) => (
                    <li key={o.before} className="grid gap-3 rounded-2xl bg-mist p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-5">
                      <p className="text-[0.95rem] text-slate">
                        <span className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate/70">Antes</span>
                        {o.before}
                      </p>
                      <ArrowRight aria-hidden className="hidden size-5 shrink-0 text-signal sm:block" />
                      <p className="text-[0.95rem] font-medium text-ink">
                        <span className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-signal">Depois</span>
                        {o.after}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.results && (
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Resultados</h2>
                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                  {item.results.map((r) => (
                    <div key={r.label} className="rounded-2xl bg-navy p-6 text-white">
                      <dd className="text-3xl font-semibold text-accent">{r.value}</dd>
                      <dt className="mt-1 text-white/75">{r.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </article>
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Card>
              <h2 className="text-lg font-semibold">{isDemo ? "Indicadores acompanhados" : "Indicadores"}</h2>
              <ul className="mt-4 space-y-2.5">
                {item.indicators.map((i) => (
                  <li key={i} className="flex gap-2.5 text-[0.95rem]">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              {item.service && (
                <ButtonLink href={item.service} variant="secondary" className="mt-6 w-full" arrow>
                  Ver a solução
                </ButtonLink>
              )}
            </Card>
            {isDemo && (
              <ButtonLink href={whatsappLink("Quero testar um agente de demonstração")} variant="secondary" className="w-full">
                <WhatsAppGlyph className="size-4 text-accent-strong" /> Testar demonstração no WhatsApp
              </ButtonLink>
            )}
          </aside>
        </div>
      </Section>

      {more.length > 0 && (
        <Section tone="mist" labelledBy="mais">
          <h2 id="mais" className="text-2xl font-semibold md:text-3xl">
            Outros projetos de {caseTypeLabels[item.type]}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((c) => (
              <CaseCard key={c.slug} item={c} />
            ))}
          </div>
        </Section>
      )}

      <CTASection title="Quer ver isso funcionando na sua empresa?" />
    </>
  );
}
