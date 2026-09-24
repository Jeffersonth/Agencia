import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCase } from "@/content/cases";
import { getSector, sectors } from "@/content/sectors";
import { getService, serviceHref } from "@/content/solutions";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { IconTile, WhatsAppGlyph } from "@/components/Icon";
import { CaseCard } from "@/components/CaseCard";
import { Checklist, CTASection, DiagnosticActions, FAQSection, PageHero, Signature } from "@/components/sections";
import { CalendarMock, LeadScoreMock } from "@/components/visuals";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ setor: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/setores/[setor]">): Promise<Metadata> {
  const sector = getSector((await params).setor);
  if (!sector) return {};
  return pageMetadata({ title: sector.title, description: sector.metaDescription, path: `/setores/${sector.slug}/` });
}

export default async function SetorPage({ params }: PageProps<"/setores/[setor]">) {
  const sector = getSector((await params).setor);
  if (!sector) notFound();

  const path = `/setores/${sector.slug}/`;
  const crumbs = [
    { name: "Setores", path: "/setores/" },
    { name: sector.name, path },
  ];
  const demoCases = sector.demoCases.map((s) => getCase(s)!).filter(Boolean);
  const isLaw = sector.slug === "escritorios-de-advocacia";

  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: sector.title, description: sector.answer, path }), faqSchema(sector.faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow={`Setor · ${sector.menuName}`}
        title={sector.h1}
        answer={sector.answer}
        actions={<DiagnosticActions secondary={{ href: "#conformidade", label: isLaw ? "Como respeitamos a OAB" : "LGPD para dados de saúde" }} />}
        visual={isLaw ? <LeadScoreMock /> : <CalendarMock />}
      />

      <Section labelledBy="dores">
        <SectionHeading id="dores" eyebrow="Dores do setor" title={isLaw ? "O tempo do advogado é caro demais para triagem." : "Horário vazio é receita que não volta."} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sector.pains.map((p) => (
            <div key={p.title} className="rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="solucoes-setor">
        <SectionHeading id="solucoes-setor" eyebrow="Soluções recomendadas" title={`O que mais gera retorno em ${sector.menuName.toLowerCase()}.`} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sector.solutions.map(({ service: slug, why }) => {
            const s = getService(slug)!;
            return (
              <Link
                key={slug}
                href={serviceHref(s)}
                className="group flex gap-5 rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)]"
              >
                <IconTile name={s.icon} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                  <p className="mt-1.5 text-slate">{why}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
                    Ver solução <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="navy" id="conformidade" labelledBy="conformidade-titulo">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading dark id="conformidade-titulo" eyebrow="Conformidade" title={sector.compliance.title} text={sector.compliance.text} />
          <Checklist dark items={sector.compliance.points} className="text-lg" />
        </div>
      </Section>

      <Section labelledBy="prova">
        <SectionHeading id="prova" eyebrow="Prova" title="Como aplicamos no setor." text={sector.proofNote} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {demoCases.map((c) => (
            <CaseCard key={c.slug} item={c} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href={whatsappLink(isLaw ? "Quero testar o Escritório Demo" : "Quero testar a Clínica Demo")} variant="secondary">
            <WhatsAppGlyph className="size-4 text-accent-strong" /> Testar {isLaw ? "o Escritório Demo" : "a Clínica Demo"} no WhatsApp
          </ButtonLink>
        </div>
      </Section>

      <FAQSection items={sector.faq} tone="mist" />
      <CTASection title={sector.cta} />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
