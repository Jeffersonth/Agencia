import type { Metadata } from "next";
import { GitBranch, Layers, LogOut, ShieldCheck } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Card, Section, SectionHeading } from "@/components/ui";
import { CTASection, DiagnosticActions, FAQSection, PageHero, Signature, StepsList } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { FlowMock } from "@/components/visuals";

const path = "/servicos/desenvolvimento-de-sistemas/";
const answer =
  "Desenvolvemos sistemas corporativos e SaaS sob medida, com IA e automação no núcleo, integrados aos seus sistemas atuais. Você recebe software que resolve o seu processo real, com código seu e sem lock-in.";

export const metadata: Metadata = pageMetadata({
  title: "Sistemas Sob Medida com IA para Empresas",
  description:
    "Sistemas corporativos e SaaS sob medida com IA e automação no núcleo, código seu desde o primeiro dia e sem lock-in. Discovery a partir de R$ 6.000; sistemas a partir de R$ 25.000.",
  path,
});

const faq = [
  { q: "Por que não passam preço fechado sem Discovery?", a: "Porque preço de sistema sem escopo é chute — e chute vira aditivo ou atraso. O Discovery define escopo, protótipo e preço com precisão." },
  { q: "O código é meu?", a: "Sim. O código fica em um repositório Git da sua empresa desde o primeiro dia." },
  { q: "Vocês atendem requisitos de saúde e jurídico?", a: "Sim. Projetamos com controle de acesso, logs, criptografia e LGPD desde o início." },
  { q: "Como funciona a sustentação?", a: "Cerca de 1,5% do valor do projeto por mês (mínimo de R$ 1.500), cobrindo monitoramento, correções, atualizações e pequenas evoluções." },
  { q: "Posso trocar de fornecedor depois?", a: "Pode. Código, documentação e infraestrutura em nome da sua empresa, com cláusula de saída em contrato." },
];

const diffs = [
  { icon: GitBranch, t: "Código via Git desde o dia 1", s: "Repositório em nome da sua empresa, com histórico de tudo." },
  { icon: Layers, t: "Escopo por fases", s: "Entregas utilizáveis a cada fase, sem big bang." },
  { icon: LogOut, t: "Cláusula de saída", s: "Você pode seguir com outro time a qualquer momento." },
  { icon: ShieldCheck, t: "Atenção a compliance", s: "Saúde e jurídico: acesso, logs, criptografia e LGPD." },
];

export default function SistemasPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "Desenvolvimento de Sistemas", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Desenvolvimento de Sistemas Sob Medida", description: answer, path, price: 25000 }), faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Desenvolvimento de Sistemas"
        title="Sistemas que se adaptam à sua empresa, não o contrário."
        answer={answer}
        actions={<DiagnosticActions secondary={{ href: "#faixas", label: "Faixas de investimento" }} />}
        visual={<FlowMock />}
      />

      <Section labelledBy="diferenciais">
        <SectionHeading id="diferenciais" eyebrow="Diferenciais" title="Software que continua seu depois da entrega." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map(({ icon: I, t, s }) => (
            <Card key={t}>
              <I aria-hidden className="size-6 text-signal" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-slate">{s}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="como">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="como"
              eyebrow="Etapa obrigatória"
              title="Tudo começa pelo Discovery."
              text="Design & Protótipo: entendemos o processo, desenhamos as telas e validamos com os usuários antes de construir. Nunca passamos preço fechado de sistema sem Discovery."
            />
            <p className="mt-6 text-2xl font-semibold text-navy">R$ 6.000 a R$ 12.000</p>
          </div>
          <StepsList
            steps={[
              { title: "Discovery", text: "Processo mapeado, requisitos e riscos." },
              { title: "Protótipo navegável", text: "Telas validadas com quem vai usar." },
              { title: "Construção por fases", text: "Entregas utilizáveis, com IA e automação no núcleo." },
              { title: "Validação", text: "Testes com dados e cenários reais." },
              { title: "Sustentação", text: "Monitoramento, correções e evolução." },
            ]}
          />
        </div>
      </Section>

      <Section id="faixas" labelledBy="faixas-titulo">
        <SectionHeading id="faixas-titulo" eyebrow="Faixas de investimento" title="Referências para planejar." text="O valor exato sai do Discovery." />
        <div className="mt-12">
          <OfferCards
            offers={[
              { name: "MVP / Sistema interno", price: "R$ 25.000 a R$ 50.000", text: "Um processo específico resolvido de ponta a ponta, com automação." },
              { name: "Sistema Corporativo com IA", price: "R$ 60.000 a R$ 150.000", text: "Vários módulos, integrações e agentes de IA no fluxo de trabalho.", highlight: true },
              { name: "SaaS", price: "a partir de R$ 50.000", text: "Produto para vender a outros clientes, com multiempresa e cobrança." },
            ]}
          />
        </div>
        <p className="mt-6 text-slate">
          <strong className="text-ink">Sustentação:</strong> cerca de 1,5% do valor do projeto por mês (mínimo de R$ 1.500).
        </p>
      </Section>

      <FAQSection items={faq} tone="mist" />
      <CTASection title="Seu processo não cabe em sistema pronto?" text="Comece pelo Diagnóstico e siga para o Discovery com escopo e preço claros." />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
