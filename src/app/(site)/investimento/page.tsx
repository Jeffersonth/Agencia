import type { Metadata } from "next";
import Link from "next/link";
import { hubs, serviceHref, servicesOf } from "@/content/solutions";
import { breadcrumbSchema, faqSchema, graph, pageMetadata } from "@/lib/seo";
import { brl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Card, Section, SectionHeading } from "@/components/ui";
import { Checklist, CTASection, DiagnosticActions, FAQSection, PageHero, Signature } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";

const path = "/investimento/";
const answer =
  "Nossos projetos partem de faixas claras: agente de IA para WhatsApp a partir de R$ 7.500, SDR com IA a partir de R$ 15.000, sites a partir de R$ 3.500 e sistemas sob medida a partir de R$ 25.000. Todo projeto começa por um Diagnóstico creditável e inclui um plano de operação mensal.";

export const metadata: Metadata = pageMetadata({
  title: "Quanto Custa IA, Automação e Sites para Empresas",
  description:
    "Faixas de investimento claras: agente de IA para WhatsApp a partir de R$ 7.500, SDR com IA a partir de R$ 15.000, sites a partir de R$ 3.500 e sistemas a partir de R$ 25.000.",
  path,
});

type Row = { name: string; href: string; price: string };

const complementary: { group: string; rows: Row[] }[] = [
  {
    group: "Diagnóstico",
    rows: [
      { name: "Diagnóstico Essencial", href: "/diagnostico/", price: "a partir de R$ 2.500" },
      { name: "Diagnóstico Completo", href: "/diagnostico/", price: "a partir de R$ 5.000" },
    ],
  },
  {
    group: "Sites",
    rows: [
      { name: "Landing Page", href: "/servicos/criacao-de-sites/", price: "a partir de R$ 3.500" },
      { name: "Site Institucional", href: "/servicos/criacao-de-sites/", price: "a partir de R$ 7.500" },
      { name: "E-commerce", href: "/servicos/criacao-de-sites/", price: "a partir de R$ 18.000" },
      { name: "Portais e Sites Dinâmicos", href: "/servicos/criacao-de-sites/", price: "a partir de R$ 20.000" },
      { name: "Manutenção (Gerenciado / Pro)", href: "/servicos/criacao-de-sites/", price: "R$ 390 / R$ 790 por mês" },
    ],
  },
  {
    group: "SEO e GEO",
    rows: [
      { name: "Auditoria de Visibilidade em IA", href: "/servicos/seo-e-geo/auditoria-visibilidade-ia/", price: "R$ 1.500 / R$ 2.800" },
      { name: "Pacote GEO na criação do site", href: "/servicos/seo-e-geo/", price: "a partir de R$ 2.000" },
      { name: "Planos mensais (mínimo 6 meses)", href: "/servicos/seo-e-geo/", price: "R$ 1.800 a R$ 5.500 por mês" },
    ],
  },
  {
    group: "Sistemas",
    rows: [
      { name: "Discovery (Design & Protótipo)", href: "/servicos/desenvolvimento-de-sistemas/", price: "R$ 6.000 a R$ 12.000" },
      { name: "MVP / Sistema interno", href: "/servicos/desenvolvimento-de-sistemas/", price: "R$ 25.000 a R$ 50.000" },
      { name: "Sistema Corporativo com IA", href: "/servicos/desenvolvimento-de-sistemas/", price: "R$ 60.000 a R$ 150.000" },
      { name: "SaaS", href: "/servicos/desenvolvimento-de-sistemas/", price: "a partir de R$ 50.000" },
    ],
  },
  {
    group: "Aplicativos",
    rows: [
      { name: "App Mobile (iOS e Android)", href: "/servicos/desenvolvimento-de-aplicativos/", price: "a partir de R$ 40.000" },
      { name: "App + Sistema Web", href: "/servicos/desenvolvimento-de-aplicativos/", price: "a partir de R$ 80.000" },
    ],
  },
];

const faq = [
  { q: "Por que não mostram o preço fechado?", a: "Porque o preço depende das integrações, do volume e das regras do seu negócio. As faixas mostram o ponto de partida; o preço fechado sai do Diagnóstico." },
  { q: "O que é a sustentação mensal?", a: "É o plano de operação contínua: monitoramento, ajustes, atualização da base de conhecimento e evolução. IA não é projeto que se entrega e esquece." },
  { q: "O que é o consumo repassado?", a: "Custos de terceiros, como mensagens da API do WhatsApp (Meta), uso de modelos de IA, licenças e infraestrutura. São pagos direto pela sua empresa, sem margem escondida." },
  { q: "Vocês parcelam?", a: "Sim. As condições de pagamento são definidas na proposta, normalmente por marcos de entrega." },
];

export default function InvestimentoPage() {
  const crumbs = [{ name: "Investimento", path }];
  return (
    <>
      <JsonLd data={graph(faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        centered
        crumbs={crumbs}
        eyebrow="Investimento"
        title="Investimento com clareza, do diagnóstico à operação."
        answer={answer}
        actions={<DiagnosticActions secondary={{ href: "#tabela", label: "Ver tabela de faixas" }} />}
      />

      <Section labelledBy="como-cobramos">
        <SectionHeading
          id="como-cobramos"
          eyebrow="Como cobramos"
          title="Três partes, nenhuma surpresa."
          text="Por escopo e valor, não por hora."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Implantação", "O projeto: desenho, construção, integrações, testes e ida ao ar. Valor fechado por escopo."],
            ["Sustentação mensal", "A operação contínua: monitoramento, ajustes, atualização e evolução, com indicadores todo mês."],
            ["Consumo (repassado)", "Mensagens do WhatsApp, uso de IA, licenças e infraestrutura, pagos direto aos provedores, em nome da sua empresa."],
          ].map(([t, s], i) => (
            <Card key={t}>
              <span className="text-sm font-semibold tabular-nums text-signal">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-slate">{s}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="mist" id="tabela" labelledBy="faixas">
        <SectionHeading id="faixas" eyebrow="Faixas de investimento" title="Quanto custa cada solução." text="Valores de implantação “a partir de”. O preço fechado sai do Diagnóstico." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {hubs.map((hub) => (
            <PriceTable
              key={hub.slug}
              title={hub.name}
              rows={servicesOf(hub.slug).map((s) => ({
                name: s.name,
                href: serviceHref(s),
                price: `a partir de ${brl(s.pricing.from)}${s.pricing.suffix ? ` ${s.pricing.suffix}` : ""}`,
              }))}
            />
          ))}
          {complementary.map((c) => (
            <PriceTable key={c.group} title={c.group} rows={c.rows} />
          ))}
        </div>
      </Section>

      <Section labelledBy="sustentacao">
        <SectionHeading
          id="sustentacao"
          eyebrow="Planos de sustentação"
          title="A operação contínua que mantém o resultado."
          text="O valor mensal depende do escopo implantado e é definido na proposta."
        />
        <div className="mt-12">
          <OfferCards
            offers={[
              { name: "Essencial", price: "Sob proposta", text: "Para uma solução em operação.", features: ["Monitoramento e correções", "Ajustes pontuais de prompt e regras", "Relatório mensal de indicadores"] },
              { name: "Profissional", price: "Sob proposta", text: "Para evoluir todo mês.", highlight: true, badge: "Mais comum", features: ["Tudo do Essencial", "Atualização contínua da base de conhecimento", "Módulos inclusos (ex.: Agendamento Inteligente)", "Reunião mensal de evolução"] },
              { name: "Enterprise", price: "Sob proposta", text: "Para várias unidades e setores regulados.", features: ["Tudo do Profissional", "Múltiplos agentes e unidades", "Governança, logs e auditoria", "Atendimento prioritário"] },
            ]}
          />
        </div>
      </Section>

      <Section tone="navy" labelledBy="sempre">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading dark id="sempre" eyebrow="Sempre incluído" title="O que não é opcional." />
            <Checklist
              dark
              className="mt-8 text-lg"
              items={[
                "Padrão de engenharia: revisão sênior, QA e documentação",
                "Segurança e adequação à LGPD",
                "Contas, dados e código em nome da sua empresa",
                "Cláusula de saída em contrato",
              ]}
            />
          </div>
          <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-8">
            <p className="eyebrow mb-3">Por que não por hora</p>
            <h3 className="text-2xl font-semibold text-white">A IA comprime o tempo. Você paga pelo resultado.</h3>
            <p className="mt-4 text-white/75">
              Usamos IA para construir mais rápido. Cobrar por hora puniria essa eficiência — e transferiria para você o risco de estimativas erradas. Por escopo e valor, você sabe quanto vai pagar e o que vai receber.
            </p>
          </div>
        </div>
      </Section>

      <FAQSection items={faq} />
      <CTASection title="Quer o preço fechado para o seu caso?" text="Ele sai do Diagnóstico — que é 100% creditado no projeto." />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}

function PriceTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 shadow-[var(--shadow-card)]">
      <h3 className="border-b border-line bg-white px-6 py-4 text-lg font-semibold">{title}</h3>
      <table className="w-full text-left text-[0.95rem]">
        <caption className="sr-only">Faixas de investimento — {title}</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">Solução</th>
            <th scope="col">Investimento</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((r) => (
            <tr key={r.name}>
              <th scope="row" className="px-6 py-3.5 font-medium">
                <Link href={r.href} className="hover:text-signal">
                  {r.name}
                </Link>
              </th>
              <td className="px-6 py-3.5 text-right font-semibold text-navy">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
