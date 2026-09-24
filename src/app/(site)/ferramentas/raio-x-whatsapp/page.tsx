import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { WhatsAppAudit } from "@/components/tools/WhatsAppAudit";

const path = "/ferramentas/raio-x-whatsapp/";
const description =
  "Responda 10 perguntas e receba uma nota de 0 a 100 para o atendimento da sua empresa no WhatsApp, com os pontos que mais geram resultado para melhorar. Grátis e sem cadastro.";

export const metadata: Metadata = pageMetadata({ title: "Raio-X do WhatsApp: Avalie o Atendimento da Sua Empresa", description, path });

export default function RaioXWhatsAppPage() {
  const crumbs = [
    { name: "Ferramentas", path: "/ferramentas/" },
    { name: "Raio-X do WhatsApp", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebApplication",
            name: "Raio-X do WhatsApp",
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
        title="Como está o atendimento da sua empresa no WhatsApp?"
        answer="Dez perguntas rápidas sobre versão do WhatsApp, tempo de resposta, atendimento fora do horário, CRM, follow-up e LGPD. No fim, você recebe uma nota de 0 a 100 e os três pontos que mais valem a pena melhorar primeiro, com links para aprofundar. Tudo roda no seu navegador, sem cadastro."
      />
      <Section>
        <WhatsAppAudit />
      </Section>
      <CTASection />
    </>
  );
}
