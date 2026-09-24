import type { Metadata } from "next";
import { cases, liveDemos } from "@/content/cases";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui";
import { WhatsAppGlyph } from "@/components/Icon";
import { CaseCard } from "@/components/CaseCard";
import { CaseFilter } from "@/components/CaseFilter";
import { CTASection, DiagnosticActions, PageHero } from "@/components/sections";

const path = "/cases/";

export const metadata: Metadata = pageMetadata({
  title: "Cases e Projetos",
  description:
    "Soluções em Ação: cases reais, produtos próprios e projetos demonstrativos de agentes de IA, automação, SEO/GEO, sites, apps e SaaS. Tudo rotulado com transparência.",
  path,
});

export default function CasesPage() {
  const crumbs = [{ name: "Cases", path }];
  const real = cases.filter((c) => c.status === "real");
  const demos = cases.filter((c) => c.status === "demo");
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Soluções em Ação"
        title="O que já construímos, e o que a IA pode fazer pela sua empresa."
        answer="Mais de 300 projetos entregues em sites, sistemas, aplicativos e automações. Aqui você encontra três níveis de prova: cases reais e produtos próprios, projetos demonstrativos de IA rotulados como tal, e agentes de demonstração que você pode testar agora no WhatsApp."
        actions={<DiagnosticActions secondary={{ href: "#demonstracoes", label: "Testar uma demonstração" }} />}
      />

      <Section labelledBy="reais">
        <SectionHeading
          id="reais"
          eyebrow="Nível 1 · Cases reais"
          title="Produtos que construímos, operamos e mantemos."
          text="Produto próprio prova que sabemos construir, operar e manter software — não só entregar projeto."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {real.map((c) => (
            <CaseCard key={c.slug} item={c} />
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="demonstrativos">
        <SectionHeading
          id="demonstrativos"
          eyebrow="Nível 2 · Projetos demonstrativos"
          title="Como aplicamos cada solução."
          text="Cenário, solução, funcionamento, tecnologias e indicadores acompanhados — sem números apresentados como alcançados."
        />
        <div className="mt-12">
          <CaseFilter items={demos} />
        </div>
      </Section>

      <Section tone="navy" id="demonstracoes" labelledBy="ao-vivo">
        <SectionHeading
          dark
          id="ao-vivo"
          eyebrow="Nível 3 · Demonstrações ao vivo"
          title="O que mais convence: testar."
          text="Converse com agentes de demonstração no WhatsApp. São empresas fictícias, com o mesmo método e a mesma arquitetura dos projetos reais."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {liveDemos.map((d) => (
            <a
              key={d.name}
              href={whatsappLink(d.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <WhatsAppGlyph className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{d.name}</h3>
              <p className="mt-2 flex-1 text-white/70">{d.text}</p>
              <span className="mt-6 text-sm font-semibold text-accent">Testar no WhatsApp →</span>
            </a>
          ))}
        </div>
      </Section>

      <section className="border-b border-line bg-white py-10">
        <div className="container-site">
          <p className="mx-auto max-w-3xl text-center text-sm italic text-slate">
            Projetos demonstrativos são cenários construídos para ilustrar como aplicamos cada solução. As empresas são fictícias; a arquitetura e o método são os que usamos nos projetos reais.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
