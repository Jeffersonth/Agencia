import type { Metadata } from "next";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, LinkCard, PageHero } from "@/components/sections";

const path = "/ferramentas/";

export const metadata: Metadata = pageMetadata({
  title: "Ferramentas Gratuitas de IA para Empresas",
  description: "Calculadora de ROI, Calculadora de Custo do Atendimento, Raio-X do WhatsApp e Teste de Visibilidade em IA: ferramentas gratuitas, sem cadastro para ver o resultado.",
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
        answer="Quatro ferramentas gratuitas para você medir o problema antes de falar com a gente: quanto a demora e o trabalho repetitivo custam no atendimento, como está o seu WhatsApp e quão preparado o seu site está para ser lido pelas IAs. O resultado aparece na hora, sem cadastro."
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
          <LinkCard
            href="/ferramentas/calculadora-custo-atendimento/"
            meta="Calculadora"
            title="Calculadora de Custo do Atendimento"
            text="Veja quanto a equipe gasta com atendimento repetitivo, quanto custaria ampliar o horário com pessoas e até quanto um agente pode custar."
          />
          <LinkCard
            href="/ferramentas/raio-x-whatsapp/"
            meta="Autoavaliação"
            title="Raio-X do WhatsApp"
            text="Dez perguntas, uma nota de 0 a 100 e os três pontos que mais valem a pena melhorar no atendimento pelo WhatsApp."
          />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
