import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { CostCalculator } from "@/components/tools/CostCalculator";

const path = "/ferramentas/calculadora-custo-atendimento/";
const description =
  "Calcule quanto sua empresa gasta por mês com atendimento repetitivo e com a cobertura de horário, e até quanto um agente de IA pode custar para dar economia. Grátis e sem cadastro.";

export const metadata: Metadata = pageMetadata({ title: "Calculadora de Custo do Atendimento: Equipe vs Agente de IA", description, path });

export default function CustoAtendimentoPage() {
  const crumbs = [
    { name: "Ferramentas", path: "/ferramentas/" },
    { name: "Calculadora de Custo do Atendimento", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebApplication",
            name: "Calculadora de Custo do Atendimento",
            url: absoluteUrl(path),
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: 0, priceCurrency: "BRL" },
            description,
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Ferramenta gratuita"
        title="Quanto custa o atendimento repetitivo da sua empresa?"
        answer="Informe o volume de atendimentos, o tempo médio de cada um, a parte repetitiva e o custo mensal por atendente. A calculadora mostra as horas e o valor gastos por mês com o que um agente de IA pode assumir, o custo de ampliar o horário com pessoas e até quanto o agente pode custar para compensar. Sem cadastro."
      />
      <Section>
        <CostCalculator />
      </Section>
      <CTASection />
    </>
  );
}
