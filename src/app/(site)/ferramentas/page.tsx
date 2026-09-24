import type { Metadata } from "next";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, LinkCard, PageHero } from "@/components/sections";

const path = "/ferramentas/";

export const metadata: Metadata = pageMetadata({
  title: "Ferramentas Gratuitas de IA para Empresas",
  description: "Calculadora de ROI de atendimento e Teste de Visibilidade em IA: ferramentas gratuitas, sem cadastro para ver o resultado.",
  path,
});

export default function FerramentasPage() {
  const crumbs = [{ name: "Ferramentas", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Ferramentas gratuitas"
        title="Números antes de qualquer conversa."
        answer="Duas ferramentas gratuitas para você medir o problema antes de falar com a gente: quanto a demora no atendimento pode estar custando e quão preparado o seu site está para ser lido pelas IAs. O resultado aparece na hora, sem cadastro."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <LinkCard
            href="/ferramentas/calculadora-roi-atendimento/"
            meta="Calculadora"
            title="Calculadora de ROI de Atendimento"
            text="Informe volume de leads, ticket médio e tempo de resposta e veja quanto a demora pode estar custando por mês."
          />
          <LinkCard
            href="/ferramentas/teste-visibilidade-ia/"
            meta="Mini-diagnóstico"
            title="Teste de Visibilidade em IA"
            text="Informe o site e receba um retrato técnico: robôs de IA liberados, dados estruturados, conteúdo no HTML, llms.txt e mais."
          />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
