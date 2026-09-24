import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, Section, SectionHeading, TextLink } from "@/components/ui";
import { Checklist, CTASection, FAQSection, LinkCard, PageHero, Signature, StepsList } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";

const path = "/servicos/seo-e-geo/";
const answer =
  "Otimizamos seu site para ranquear no Google e para ser citado por ChatGPT, Gemini, Claude e Perplexity. Unimos SEO técnico, conteúdo citável e autoridade de marca, e conectamos o tráfego a um agente que converte. Para sites novos ou existentes.";

export const metadata: Metadata = pageMetadata({
  title: "SEO e GEO para Empresas | Apareça no Google e nas IAs",
  description:
    "SEO técnico, conteúdo citável e autoridade de marca para ranquear no Google e ser citado por ChatGPT, Gemini, Claude e Perplexity. Auditoria a partir de R$ 1.500.",
  path,
});

const faq = [
  { q: "Vocês garantem primeira posição ou citação no ChatGPT?", a: "Não — e desconfie de quem garante. As IAs variam as respostas. Garantimos método, execução e medição transparente, com um conjunto fixo de perguntas acompanhado todo mês." },
  { q: "Qual a diferença entre SEO e GEO?", a: "SEO é ranquear nos buscadores. GEO é ser encontrado e citado nas respostas das IAs. O GEO se apoia no SEO: sem base técnica e conteúdo sólidos, a marca dificilmente é citada." },
  { q: "Em quanto tempo vejo resultado?", a: "Ajustes técnicos têm efeito em semanas; conteúdo e autoridade, em meses. Por isso os planos mensais têm contrato mínimo de 6 meses." },
  { q: "Meu site é em WordPress. Dá para fazer GEO?", a: "Sim. A Auditoria mostra o que é possível no seu site atual e quando vale a pena migrar." },
  { q: "Por que o assistente de IA faz parte?", a: "Porque o SEO traz o visitante e o agente converte. Todo cliente de GEO sai com pelo menos o assistente no site ou no WhatsApp." },
];

export default function SeoGeoPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "SEO e GEO", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "SEO e GEO", description: answer, path, price: 1500 }), faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="SEO, GEO e LLM SEO"
        title="Seja encontrado no Google e citado pelas IAs."
        answer={answer}
        actions={
          <>
            <ButtonLink href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" size="lg" arrow>
              Auditoria de Visibilidade em IA
            </ButtonLink>
            <ButtonLink href="/ferramentas/teste-visibilidade-ia/" size="lg" variant="secondary">
              Teste grátis
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="pilares">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="pilares"
            eyebrow="Método"
            title="Os cinco pilares da visibilidade em IA."
            text="Este site foi construído com os mesmos pilares. Ele é o nosso próprio case."
          />
          <StepsList
            steps={[
              { title: "Uma intenção por URL", text: "Cada página responde a uma pergunta real. Concentra autoridade e facilita a extração pelas IAs." },
              { title: "Estrutura hub-and-spoke", text: "Páginas-mãe por tema conectadas a páginas específicas, tudo interligado por links internos." },
              { title: "Conteúdo citável", text: "Resposta direta no topo, escopo, prazo e faixa de preço claros." },
              { title: "Autoridade de entidade", text: "Quem é a empresa, quem é o fundador e onde mais a marca aparece (E-E-A-T + sameAs)." },
              { title: "Base técnica impecável", text: "HTML no servidor, performance, dados estruturados, robots.txt, llms.txt e sitemap." },
            ]}
          />
        </div>
      </Section>

      <Section tone="mist" labelledBy="modalidades">
        <SectionHeading id="modalidades" eyebrow="Duas modalidades" title="Para sites novos ou existentes." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-semibold">Site novo</h3>
            <p className="mt-3 text-slate">Pacote GEO na criação: o site já nasce com arquitetura, conteúdo e base técnica para ser encontrado e citado.</p>
            <p className="mt-6 text-3xl font-semibold text-navy">a partir de R$ 2.000</p>
            <TextLink href="/servicos/criacao-de-sites/" className="mt-6">
              Criação de sites
            </TextLink>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold">Site existente</h3>
            <p className="mt-3 text-slate">Três etapas, com ganho mensurável em cada uma.</p>
            <ol className="mt-6 space-y-3">
              {[
                ["Auditoria", "como sua marca aparece hoje e o que corrigir primeiro"],
                ["Implementação", "correções técnicas, conteúdo e dados estruturados"],
                ["Plano mensal", "conteúdo, autoridade e medição contínua"],
              ].map(([t, s], i) => (
                <li key={t} className="flex gap-3">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">{i + 1}</span>
                  <span>
                    <strong>{t}</strong> — <span className="text-slate">{s}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      <Section labelledBy="planos">
        <SectionHeading
          id="planos"
          eyebrow="Planos mensais"
          title="Crescimento contínuo, medido todo mês."
          text="Contrato mínimo de 6 meses. Escopo detalhado na proposta."
        />
        <div className="mt-12">
          <OfferCards
            offers={[
              { name: "Presença", price: "R$ 1.800/mês", text: "Base técnica e medição.", features: ["Ajustes técnicos contínuos", "Google Business Profile", "Monitoramento de posições e citações", "Relatório mensal"] },
              { name: "Crescimento", price: "R$ 3.200/mês", text: "Conteúdo citável todo mês.", features: ["Tudo do Presença", "Produção de conteúdo citável", "Otimização das páginas de serviço", "Links internos e dados estruturados"], highlight: true, badge: "Recomendado" },
              { name: "Autoridade", price: "R$ 5.500/mês", text: "Presença da marca fora do site.", features: ["Tudo do Crescimento", "Comparativos e guias-pilar", "Autoridade fora do site (artigos, diretórios, LinkedIn)", "Reunião mensal de estratégia"] },
            ]}
          />
        </div>
      </Section>

      <Section tone="navy" labelledBy="regras">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading dark id="regras" eyebrow="Regra da casa" title="O SEO traz o visitante. O agente converte." />
            <p className="mt-5 text-lg text-white/75">
              Todo cliente de GEO sai com pelo menos o assistente de IA no site ou no WhatsApp. Tráfego sem conversão é custo.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xl font-semibold text-white">O que nunca prometemos</h3>
            <Checklist dark className="mt-5" items={["Posição garantida no Google.", "Citação garantida em qualquer IA.", "Resultado sem conteúdo e sem autoridade.", "Atalhos que colocam o domínio em risco."]} />
          </div>
        </div>
      </Section>

      <Section labelledBy="saiba-mais">
        <h2 id="saiba-mais" className="text-2xl font-semibold md:text-3xl">Saiba mais</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <LinkCard href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" meta="Produto de entrada" title="Auditoria de Visibilidade em IA" text="Como sua marca aparece hoje nas IAs. A partir de R$ 1.500, creditável." />
          <LinkCard href="/conteudo/guias/geo-como-aparecer-nas-ias/" meta="Guia" title="GEO: como aparecer no ChatGPT, Gemini e Google AI Mode" />
          <LinkCard href="/ferramentas/teste-visibilidade-ia/" meta="Ferramenta gratuita" title="Teste de Visibilidade em IA" text="Um retrato rápido da prontidão técnica do seu site." />
        </div>
      </Section>

      <FAQSection items={faq} tone="mist" />
      <CTASection title="Quer ser a resposta quando seu cliente pergunta às IAs?" text="Comece pela Auditoria de Visibilidade em IA ou pelo Diagnóstico completo." />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
