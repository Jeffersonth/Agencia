import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { RoiCalculator } from "@/components/tools/RoiCalculator";

const path = "/ferramentas/calculadora-roi-atendimento/";
const description =
  "Calcule quanto a demora no atendimento pode estar custando à sua empresa e o retorno potencial de um agente de IA que responde em segundos, 24/7. Grátis e sem cadastro.";

export const metadata: Metadata = pageMetadata({ title: "Calculadora de ROI de Atendimento com IA", description, path });

export default function CalculadoraPage() {
  const crumbs = [
    { name: "Ferramentas", path: "/ferramentas/" },
    { name: "Calculadora de ROI de Atendimento", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebApplication",
            name: "Calculadora de ROI de Atendimento",
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
        title="Quanto a demora no atendimento custa para a sua empresa?"
        answer="Informe o volume de contatos, o ticket médio, a conversão atual e o tempo de resposta. A calculadora estima a receita que a demora pode estar custando por mês e o retorno de um agente de IA que responde em segundos, 24/7. Sem cadastro."
      />
      <Section>
        <RoiCalculator />
      </Section>
      <CTASection />
    </>
  );
}
