import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui";
import { Checklist, CTASection, DiagnosticActions, FAQSection, PageHero, Signature, StepsList } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { WhatsAppMock } from "@/components/visuals";

const path = "/servicos/desenvolvimento-de-aplicativos/";
const answer =
  "Criamos aplicativos web e mobile (iOS e Android) sob medida, com uma única base de código, IA integrada e design cuidadoso. Do protótipo navegável ao app publicado nas lojas.";

export const metadata: Metadata = pageMetadata({
  title: "Desenvolvimento de Aplicativos Web e Mobile",
  description:
    "Aplicativos iOS e Android sob medida com uma única base de código (React Native/Expo), IA integrada e publicação nas lojas. App mobile a partir de R$ 40.000.",
  path,
  absoluteTitle: false,
});

const faq = [
  { q: "Uma base de código funciona bem nos dois sistemas?", a: "Sim. Com React Native e Expo, iOS e Android compartilham a maior parte do código, com desempenho nativo e custo menor de manutenção." },
  { q: "Posso contratar só o design e o protótipo?", a: "Pode. Design & Protótipo pode ser contratado sozinho para validar a ideia com usuários e investidores." },
  { q: "Vocês publicam nas lojas?", a: "Sim. A publicação na Apple App Store e no Google Play tem processo e custo próprios (contas de desenvolvedor), tratados no projeto." },
  { q: "Onde entra a IA?", a: "Todo app sai com pelo menos um componente de IA: um agente de atendimento, busca inteligente, leitura de documentos ou recomendações." },
];

export default function AplicativosPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "Desenvolvimento de Aplicativos", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Desenvolvimento de Aplicativos", description: answer, path, price: 40000 }), faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Desenvolvimento de Aplicativos"
        title="Aplicativos que colocam sua operação no bolso do cliente."
        answer={answer}
        actions={<DiagnosticActions secondary={{ href: "#faixas", label: "Faixas de investimento" }} />}
        visual={<WhatsAppMock actions={false} />}
      />

      <Section labelledBy="tecnologia">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="tecnologia"
            eyebrow="Tecnologia"
            title="React Native e Expo: uma base, iOS e Android."
            text="Menos código para manter, entregas mais rápidas e atualizações simultâneas nas duas plataformas."
          />
          <Checklist
            className="text-lg"
            items={[
              "Design de interface e protótipo navegável",
              "App iOS e Android com uma única base de código",
              "Painel web para gestão (no pacote App + Sistema Web)",
              "IA integrada: agente, busca inteligente ou leitura de documentos",
              "Notificações, pagamentos e integrações",
              "Publicação na App Store e no Google Play",
            ]}
          />
        </div>
      </Section>

      <Section tone="mist" labelledBy="etapas">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading id="etapas" eyebrow="Como funciona" title="Do protótipo às lojas." />
          <StepsList
            steps={[
              { title: "Design & Protótipo", text: "Telas navegáveis para validar com usuários. Pode ser contratado sozinho." },
              { title: "Construção", text: "App e, se necessário, sistema web, em fases." },
              { title: "Testes", text: "Em aparelhos reais, iOS e Android." },
              { title: "Publicação", text: "Nas lojas da Apple e do Google, com processo e custo próprios." },
              { title: "Evolução", text: "Sustentação, métricas de uso e novas versões." },
            ]}
          />
        </div>
      </Section>

      <Section id="faixas" labelledBy="faixas-titulo">
        <SectionHeading id="faixas-titulo" eyebrow="Faixas de investimento" title="Referências para planejar." />
        <div className="mt-12">
          <OfferCards
            columns={2}
            offers={[
              { name: "App Mobile", price: "a partir de R$ 40.000", text: "Aplicativo iOS e Android com IA integrada." },
              { name: "App + Sistema Web", price: "a partir de R$ 80.000", text: "Aplicativo e painel web de gestão, integrados.", highlight: true },
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-slate">
          Nota: a publicação nas lojas (Apple e Google) tem processo e custo próprios, tratados no projeto.
        </p>
      </Section>

      <FAQSection items={faq} tone="mist" />
      <CTASection title="Tem uma ideia de app? Vamos validar antes de construir." />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
