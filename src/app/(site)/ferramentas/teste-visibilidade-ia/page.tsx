import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { VisibilityTest } from "@/components/tools/VisibilityTest";

const path = "/ferramentas/teste-visibilidade-ia/";
const description =
  "Teste grátis: descubra se o seu site está pronto para ser lido e citado por ChatGPT, Gemini, Claude e Perplexity. Robôs de IA, dados estruturados, llms.txt e mais.";

export const metadata: Metadata = pageMetadata({ title: "Teste de Visibilidade em IA (grátis)", description, path });

export default function TesteVisibilidadePage() {
  const crumbs = [
    { name: "Ferramentas", path: "/ferramentas/" },
    { name: "Teste de Visibilidade em IA", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebApplication",
            name: "Teste de Visibilidade em IA",
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
        eyebrow="Mini-diagnóstico gratuito"
        title="Seu site está pronto para ser citado pelas IAs?"
        answer="Informe o endereço do seu site e receba, na hora, um retrato técnico da prontidão para buscadores e assistentes de IA: robôs liberados no robots.txt, conteúdo no HTML, dados estruturados, sitemap, llms.txt e mais. Sem cadastro para ver o resultado."
      >
        <div className="mt-10">
          <VisibilityTest />
        </div>
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["O que o teste mede", "A base técnica: se os robôs das IAs conseguem acessar e entender o seu site."],
            ["O que ele não mede", "Se as IAs de fato citam a sua marca. Isso exige testar perguntas reais do seu mercado — é o que faz a Auditoria."],
            ["Próximo passo", "Receba o relatório completo com o plano de correção, ou peça a Auditoria de Visibilidade em IA."],
          ].map(([t, s]) => (
            <div key={t} className="rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 p-7">
              <h2 className="text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-slate">{s}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection title="Quer ser a resposta quando seu cliente pergunta às IAs?" />
    </>
  );
}
