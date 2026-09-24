import type { Metadata } from "next";
import { hubs, servicesOf } from "@/content/solutions";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading, TextLink } from "@/components/ui";
import { IconTile } from "@/components/Icon";
import { CTASection, DiagnosticActions, PageHero, ServiceCard } from "@/components/sections";
import { CoreDiagram } from "@/components/visuals";

const path = "/solucoes/";
const description =
  "Agentes de IA e automações para atendimento, vendas, operações e IA corporativa privada. Soluções integradas aos seus sistemas, com diagnóstico de ROI. Atendemos todo o Brasil.";

export const metadata: Metadata = pageMetadata({ title: "Soluções de IA, Agentes e Automação para Empresas", description, path });

export default function SolucoesPage() {
  const crumbs = [{ name: "Soluções", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="IA, Agentes & Automação"
        title="Soluções de IA que trabalham dentro da sua operação."
        answer="Construímos agentes de IA e automações em quatro frentes: atendimento, vendas, operações e IA corporativa privada. Cada solução é integrada aos sistemas que você já usa, começa por um Diagnóstico com estimativa de ROI e é acompanhada com indicadores todo mês."
        actions={<DiagnosticActions secondary={{ href: "/investimento/", label: "Ver investimento" }} />}
      />

      {hubs.map((hub, i) => (
        <Section key={hub.slug} tone={i % 2 === 0 ? "white" : "mist"} labelledBy={`hub-${hub.slug}`}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex items-start gap-5">
              <IconTile name={hub.icon} />
              <SectionHeading id={`hub-${hub.slug}`} title={hub.name} text={hub.answer} />
            </div>
            <TextLink href={`/solucoes/${hub.slug}/`} className="shrink-0">
              Ver {hub.shortName.toLowerCase()}
            </TextLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicesOf(hub.slug).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      ))}

      <Section tone="navy" labelledBy="servicos-complementares">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            dark
            id="servicos-complementares"
            eyebrow="Capacidades complementares"
            title="Sites, visibilidade em IA e software, a serviço do núcleo."
            text="Todo projeto complementar sai com pelo menos um componente de IA: o site vem com assistente, o sistema com automação, o app com agente."
          />
          <CoreDiagram />
        </div>
        <div className="mt-6">
          <TextLink href="/servicos/" className="!text-white">
            Ver serviços complementares
          </TextLink>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
