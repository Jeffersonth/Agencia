import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Badge, Card, Section, SectionHeading } from "@/components/ui";
import { Checklist, CTASection, DiagnosticActions, FAQSection, PageHero, Signature } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { SiteChatMock } from "@/components/visuals";

const path = "/servicos/criacao-de-sites/";
const title = "Criação de Sites Profissionais com IA para Empresas";
const description =
  "Sites institucionais, landing pages e e-commerces rápidos, otimizados para Google e IAs, com assistente de IA integrado. Next.js e SEO técnico como padrão. A partir de R$ 3.500.";
const answer =
  "Criamos sites institucionais, landing pages e e-commerces rápidos, otimizados para Google e IAs, e com um assistente de IA integrado para atender e converter. Design moderno, performance alta e SEO técnico como padrão, não como extra.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const standard = [
  "Performance alta (Core Web Vitals no verde)",
  "HTML renderizado no servidor",
  "SEO técnico e dados estruturados",
  "Responsividade em qualquer tela",
  "UX/UI com design moderno",
  "Copywriting orientado a conversão",
  "Integração com WhatsApp e CRM",
  "Adequação à LGPD (cookies e formulários)",
  "Mensuração (GA4 e Search Console)",
  "QA antes de ir ao ar",
];

const faq = [
  { q: "Por que Next.js e não WordPress?", a: "Next.js entrega sites mais rápidos, seguros e com HTML pronto para Google e IAs. Usamos WordPress quando você precisa editar muito conteúdo sozinho ou exige WooCommerce." },
  { q: "O assistente de IA está incluso?", a: "Sim. Todo site sai com pelo menos um componente de IA — normalmente o assistente que responde e converte visitantes." },
  { q: "Quem escreve os textos?", a: "O copywriting está incluso. Você nos passa as informações e aprova; nós escrevemos para converter e para ser citado pelas IAs." },
  { q: "E se eu atrasar o envio de conteúdo?", a: "Atrasos do cliente acima de 10 dias pausam o cronograma e antecipam a segunda parcela. Isso protege o prazo de todos." },
  { q: "Preciso de manutenção mensal?", a: "É recomendada. O Site Gerenciado cuida de hospedagem, atualizações e segurança; o Site Pro inclui evolução contínua." },
  { q: "O site e o domínio ficam em meu nome?", a: "Sim. Domínio, hospedagem e código ficam em nome da sua empresa." },
];

export default function CriacaoDeSitesPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "Criação de Sites", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Criação de Sites", description: answer, path, price: 3500 }), faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Criação de Sites"
        title="Sites que já nascem inteligentes."
        answer={answer}
        actions={<DiagnosticActions secondary={{ href: "#produtos", label: "Ver formatos e preços" }} />}
        visual={<SiteChatMock />}
      />

      <Section labelledBy="padrao">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="padrao"
            eyebrow="Padrão de engenharia"
            title="Incluso em todo site, sem custo extra."
            text="Um site datado destrói qualquer discurso de modernidade. Por isso o nosso padrão mínimo é o que muitas agências vendem como opcional."
          />
          <Checklist items={standard} className="grid gap-x-8 sm:grid-cols-2 [&>li+li]:mt-0" />
        </div>
      </Section>

      <Section tone="mist" id="produtos" labelledBy="produtos-titulo">
        <SectionHeading id="produtos-titulo" eyebrow="Formatos" title="O site certo para o seu momento." />
        <div className="mt-12">
          <OfferCards
            columns={4}
            offers={[
              { name: "Landing Page", price: "R$ 3.500", priceNote: "a partir de · 1 a 2 semanas", text: "Uma página focada em uma oferta ou campanha.", features: ["Copy de conversão", "Formulário + WhatsApp + CRM", "Assistente de IA", "Mensuração de conversões"] },
              { name: "Site Institucional", price: "R$ 7.500", priceNote: "a partir de · 3 a 5 semanas", text: "A casa da sua marca, com uma página por serviço.", features: ["Arquitetura para SEO e GEO", "Páginas de serviço citáveis", "Blog / conteúdo", "Assistente de IA"], highlight: true, badge: "Mais pedido" },
              { name: "E-commerce", price: "R$ 18.000", priceNote: "a partir de · 6 a 10 semanas", text: "Loja rápida, integrada a pagamento, frete e ERP.", features: ["Catálogo e checkout", "Integração com ERP e estoque", "Recuperação de carrinho", "Agente de vendas com IA"] },
              { name: "Portais e Sites Dinâmicos", price: "R$ 20.000", priceNote: "a partir de · prazo por escopo", text: "Áreas logadas, conteúdo em volume, integrações.", features: ["Área do cliente", "Painel administrativo", "Integrações sob medida", "IA aplicada ao conteúdo"] },
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-slate">Prazos estimados; o cronograma fechado sai na proposta.</p>
      </Section>

      <Section labelledBy="stack">
        <div className="grid gap-5 lg:grid-cols-3">
          <Card>
            <p className="eyebrow mb-3">Stack</p>
            <h2 id="stack" className="text-2xl font-semibold">Next.js como padrão.</h2>
            <p className="mt-3 text-slate">
              HTML completo no servidor, alta performance e segurança. WordPress apenas quando você precisa editar muito conteúdo sozinho ou exige WooCommerce.
            </p>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Manutenção mensal</p>
            <h2 className="text-2xl font-semibold">Seu site sempre em dia.</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <p className="flex items-baseline justify-between gap-3 font-semibold">
                  Site Gerenciado <span className="text-signal">R$ 390/mês</span>
                </p>
                <p className="text-[0.95rem] text-slate">Hospedagem gerenciada, atualizações, backups, segurança e monitoramento.</p>
              </li>
              <li>
                <p className="flex items-baseline justify-between gap-3 font-semibold">
                  Site Pro <span className="text-signal">R$ 790/mês</span>
                </p>
                <p className="text-[0.95rem] text-slate">Tudo do Gerenciado, mais evolução contínua, ajustes de conteúdo e melhorias de conversão.</p>
              </li>
            </ul>
          </Card>
          <Card className="bg-navy text-white [&_h2]:text-white">
            <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-[#8fb4ff]">Combos</p>
            <h2 className="text-2xl font-semibold">Site + IA, do jeito que funciona melhor.</h2>
            <ul className="mt-5 space-y-4 text-white/80">
              <li>
                <Badge tone="dark">Presença Inteligente</Badge>
                <p className="mt-2 text-[0.95rem]">Site + Agente de IA para WhatsApp.</p>
              </li>
              <li>
                <Badge tone="dark">Encontrado + Atendido</Badge>
                <p className="mt-2 text-[0.95rem]">Site + GEO + Agente: o SEO traz o visitante, o agente converte.</p>
              </li>
            </ul>
          </Card>
        </div>
        <p className="mt-8 rounded-2xl border border-dashed border-line-strong bg-mist p-5 text-[0.95rem] text-slate">
          <strong className="text-ink">Cláusula de conteúdo:</strong> atraso do cliente acima de 10 dias na entrega de conteúdo pausa o cronograma e antecipa a segunda parcela.
        </p>
      </Section>

      <FAQSection items={faq} tone="mist" />
      <CTASection title="Quer um site que atende, converte e aparece nas IAs?" />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
