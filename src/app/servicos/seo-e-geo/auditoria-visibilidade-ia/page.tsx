import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { Checklist, CTASection, FAQSection, PageHero, Signature, StepsList } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";

const path = "/servicos/seo-e-geo/auditoria-visibilidade-ia/";
const answer =
  "A Auditoria de Visibilidade em IA mostra como a sua marca aparece hoje no Google e nas respostas de ChatGPT, Gemini, Claude e Perplexity para as perguntas do seu mercado, quem é citado no seu lugar e o que corrigir primeiro. É paga, rápida e o valor é creditado na implementação.";

export const metadata: Metadata = pageMetadata({
  title: "Auditoria de Visibilidade em IA (ChatGPT, Gemini e Google)",
  description:
    "Descubra como sua marca aparece no ChatGPT, Gemini, Claude, Perplexity e Google, quem é citado no seu lugar e o plano para corrigir. A partir de R$ 1.500, creditável.",
  path,
});

const faq = [
  { q: "Por que a auditoria é paga?", a: "Porque é trabalho sério: perguntas testadas em várias IAs, análise técnica e plano priorizado. O valor é creditado se você seguir com a implementação." },
  { q: "Qual a diferença para o teste gratuito?", a: "O teste gratuito dá um retrato técnico rápido do site. A auditoria testa as perguntas do seu mercado nas IAs, compara com concorrentes e entrega um plano de ação." },
  { q: "Quanto tempo leva?", a: "A Essencial fica pronta em cerca de 5 dias úteis; a Completa, em cerca de 10." },
  { q: "Preciso dar acesso ao meu site?", a: "Para a Essencial, não. Para a Completa, pedimos acesso de leitura ao Search Console e ao Analytics." },
];

export default function AuditoriaPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "SEO e GEO", path: "/servicos/seo-e-geo/" },
    { name: "Auditoria de Visibilidade em IA", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Auditoria de Visibilidade em IA", description: answer, path, price: 1500 }), faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Produto de entrada · SEO e GEO"
        title="Auditoria de Visibilidade em IA: como sua marca aparece hoje nas IAs"
        answer={answer}
        actions={
          <>
            <ButtonLink href="/contato/?assunto=auditoria" size="lg" arrow>
              Solicitar auditoria
            </ButtonLink>
            <ButtonLink href="/ferramentas/teste-visibilidade-ia/" size="lg" variant="secondary">
              Fazer o teste gratuito
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="analisamos">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading id="analisamos" eyebrow="O que analisamos" title="Tudo que decide se a sua marca é encontrada — e citada." />
          <Checklist
            className="text-lg"
            items={[
              "Um conjunto de perguntas reais do seu mercado, testado em ChatGPT, Gemini, Claude, Perplexity e Google.",
              "Quem é citado no seu lugar e por quê.",
              "Base técnica: indexação, performance, HTML no servidor, robots.txt, sitemap e llms.txt.",
              "Dados estruturados (Organization, Service, FAQ, Article).",
              "Conteúdo citável: respostas diretas, escopo, preços e perguntas frequentes.",
              "Autoridade de entidade: Google Business Profile, LinkedIn, diretórios e menções.",
            ]}
          />
        </div>
      </Section>

      <Section tone="mist" labelledBy="versoes">
        <SectionHeading id="versoes" eyebrow="Duas versões" title="Escolha a profundidade." text="Valor 100% creditado se você contratar a implementação." />
        <div className="mt-12">
          <OfferCards
            columns={2}
            offers={[
              { name: "Essencial", price: "R$ 1.500", priceNote: "cerca de 5 dias úteis", features: ["Perguntas-chave testadas nas principais IAs", "Diagnóstico técnico do site", "Plano de ação priorizado", "Relatório em PDF"] },
              { name: "Completa", price: "R$ 2.800", priceNote: "cerca de 10 dias úteis", highlight: true, badge: "Mais completa", features: ["Tudo da Essencial", "Análise dos concorrentes citados", "Revisão de conteúdo página a página", "Roteiro de 6 meses", "Reunião de apresentação"] },
            ]}
          />
        </div>
      </Section>

      <Section labelledBy="como">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading id="como" eyebrow="Como funciona" title="Da pergunta ao plano." />
          <StepsList
            steps={[
              { title: "Alinhamento", text: "Entendemos o seu mercado, os serviços e os concorrentes." },
              { title: "Perguntas", text: "Montamos o conjunto fixo de perguntas que seus clientes fazem às IAs." },
              { title: "Testes e análise", text: "Rodamos as perguntas nas IAs e analisamos o site e a presença da marca." },
              { title: "Plano de ação", text: "Entregamos o que corrigir, em que ordem e o impacto esperado." },
            ]}
          />
        </div>
      </Section>

      <FAQSection items={faq} tone="mist" />
      <CTASection title="Descubra se as IAs recomendam você — ou o seu concorrente." />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
