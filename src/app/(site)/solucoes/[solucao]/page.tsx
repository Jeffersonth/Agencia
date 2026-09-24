import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases } from "@/content/cases";
import { getHub, hubs, servicesOf } from "@/content/solutions";
import { getGuide } from "@/content/articles";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { brl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { CaseCard } from "@/components/CaseCard";
import { Chips, CTASection, DiagnosticActions, FAQSection, LinkCard, PageHero, SecurityStrip, ServiceCard } from "@/components/sections";
import { Visual } from "@/components/visuals";

export const dynamicParams = false;

export function generateStaticParams() {
  return hubs.map((h) => ({ solucao: h.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solucoes/[solucao]">): Promise<Metadata> {
  const hub = getHub((await params).solucao);
  if (!hub) return {};
  return pageMetadata({ title: hub.title, description: hub.metaDescription, path: `/solucoes/${hub.slug}/` });
}

export default async function HubPage({ params }: PageProps<"/solucoes/[solucao]">) {
  const hub = getHub((await params).solucao);
  if (!hub) notFound();

  const path = `/solucoes/${hub.slug}/`;
  const crumbs = [
    { name: "Soluções", path: "/solucoes/" },
    { name: hub.name, path },
  ];
  const children = servicesOf(hub.slug);
  const minPrice = Math.min(...children.map((s) => s.pricing.from));
  const hubCases = cases.filter((c) => c.service?.startsWith(path) || c.alsoFor?.includes(hub.slug)).slice(0, 3);
  const guide = hub.guide ? getGuide(hub.guide) : undefined;
  const lead = children.find((s) => s.featured) ?? children[0];

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({ name: hub.name, description: hub.answer, path, price: minPrice, serviceType: hub.title }),
          faqSchema(hub.faq),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow={hub.name}
        title={hub.h1}
        answer={hub.answer}
        actions={<DiagnosticActions secondary={{ href: "#solucoes", label: "Ver as soluções" }} />}
        aside={<p className="mt-6 text-sm text-slate">Projetos a partir de {brl(minPrice)} · Diagnóstico creditável no projeto</p>}
        visual={<Visual name={lead.visual} />}
      />

      <Section labelledBy="problema">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading id="problema" eyebrow="O problema" title={hub.problem.title} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {hub.problem.items.map((p) => (
              <li key={p} className="rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 p-6 text-lg font-medium leading-snug">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="mist" id="solucoes" labelledBy="sub-solucoes">
        <SectionHeading
          id="sub-solucoes"
          eyebrow="Soluções"
          title={`O que entregamos em ${hub.shortName.toLowerCase()}`}
          text="Cada solução pode ser contratada sozinha ou combinada. O Diagnóstico mostra por onde começar."
        />
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${children.length > 2 ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}>
          {children.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        {hub.note && (
          <p className="mt-8 rounded-2xl border border-dashed border-line-strong bg-white p-5 text-[0.95rem] text-slate">{hub.note}</p>
        )}
      </Section>

      <Section tone="navy" labelledBy="destaque">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading dark id="destaque" eyebrow={hub.highlight.eyebrow} title={hub.highlight.title} text={hub.highlight.text} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {hub.highlight.points.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="text-sm font-semibold tabular-nums text-[#8fb4ff]">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-white/70">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="integracoes">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="integracoes"
            eyebrow="Integrações"
            title="Conectado aos sistemas que você já usa."
            text="Não pedimos para você trocar de ferramenta. A IA entra na sua operação do jeito que ela é."
          />
          <Chips items={hub.integrations} />
        </div>
        <div className="mt-16">
          <SecurityStrip />
        </div>
      </Section>

      {hubCases.length > 0 && (
        <Section tone="mist" labelledBy="prova">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="prova"
              eyebrow="Soluções em ação"
              title="Como aplicamos na prática."
              text="Cenários demonstrativos, com empresas fictícias declaradas, construídos com a mesma arquitetura e o mesmo método dos projetos reais."
            />
            <TextLink href="/cases/" className="shrink-0">
              Ver todos os cases
            </TextLink>
          </div>
          <div className={`mt-12 grid gap-5 ${hubCases.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {hubCases.map((c) => (
              <CaseCard key={c.slug} item={c} />
            ))}
          </div>
        </Section>
      )}

      <FAQSection items={hub.faq} />

      {guide && (
        <section className="bg-white pb-20">
          <Container>
            <div className="grid gap-5 md:grid-cols-2">
              <LinkCard href={`/conteudo/guias/${guide.slug}/`} meta="Guia" title={guide.title} text={guide.description} />
              <LinkCard href="/investimento/" meta="Investimento" title="Quanto custa IA e automação" text="Faixas de preço claras, do Diagnóstico à operação contínua." />
            </div>
          </Container>
        </section>
      )}

      <CTASection title={hub.cta.title} text={hub.cta.text} />
    </>
  );
}
