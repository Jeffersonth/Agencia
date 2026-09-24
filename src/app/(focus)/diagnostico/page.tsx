import type { Metadata } from "next";
import { BadgePercent, Filter, ShieldCheck } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Card, Section, SectionHeading } from "@/components/ui";
import { Checklist, FAQList, WhatsAppCard } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { DiagnosticWizard, type WizardPain } from "@/components/DiagnosticWizard";
import { sectors } from "@/content/sectors";
import { getService, serviceHref } from "@/content/solutions";

const path = "/diagnostico/";
const answer =
  "O Diagnóstico é o ponto de partida. Mapeamos seus processos, identificamos onde a IA e a automação geram mais resultado e entregamos um plano com estimativa de ROI. O valor é 100% creditado se você seguir com o projeto.";

export const metadata: Metadata = pageMetadata({
  title: "Diagnóstico de IA & Automação para Empresas",
  description:
    "Mapeamos seus processos, apontamos onde a IA gera mais retorno e entregamos um plano com estimativa de ROI em 7 dias. A partir de R$ 2.500, 100% creditável no projeto.",
  path,
});

/** Cada gargalo aponta para as soluções que mais costumam resolvê-lo. */
const painMap: { id: string; label: string; services: string[] }[] = [
  { id: "atendimento", label: "Mensagens sem resposta, principalmente fora do horário", services: ["agente-ia-whatsapp", "assistente-ia-para-site"] },
  { id: "agenda", label: "Agendamentos, confirmações e faltas", services: ["agendamento-inteligente", "agente-ia-whatsapp"] },
  { id: "leads", label: "Leads que esfriam sem qualificação ou follow-up", services: ["sdr-com-ia", "crm-e-pipeline", "funis-automatizados"] },
  { id: "canais", label: "Atendimento espalhado em vários canais e pessoas", services: ["central-multicanal", "crm-e-pipeline"] },
  { id: "documentos", label: "Digitação e conferência de documentos", services: ["automacao-de-documentos"] },
  { id: "processos", label: "Tarefas repetitivas e sistemas que não conversam", services: ["automacao-de-processos", "integracao-de-sistemas"] },
  { id: "conhecimento", label: "Informação interna difícil de encontrar", services: ["agente-de-conhecimento"] },
  { id: "dados", label: "Usar IA com dados sensíveis e dentro da LGPD", services: ["ia-privada", "governanca-ia-lgpd"] },
];

const pains: WizardPain[] = painMap.map(({ services, ...p }) => ({
  ...p,
  services: services.map((slug) => {
    const s = getService(slug)!;
    return { name: s.name, href: serviceHref(s) };
  }),
}));

const sectorOptions = [...sectors.map((s) => s.menuName), "Outro setor"];

const faq = [
  { q: "Por que o Diagnóstico é pago?", a: "Porque é uma análise séria, com gente sênior olhando para a sua operação — e não uma reunião de vendas disfarçada. Além disso, o valor é 100% creditado se você seguir com o projeto em até 30 dias." },
  { q: "Quanto tempo leva?", a: "Você recebe o plano em até 7 dias depois da conversa inicial e do envio das informações." },
  { q: "Sou obrigado a contratar o projeto?", a: "Não. O plano é seu e você pode executá-lo com quem quiser. Se seguir com a gente, o valor é abatido." },
  { q: "Qual a diferença entre o Essencial e o Completo?", a: "O Essencial foca na frente com maior potencial (por exemplo, atendimento). O Completo olha toda a operação — atendimento, vendas, processos e dados — e entrega um roteiro de implantação." },
  { q: "Preciso preparar alguma coisa?", a: "Só a disponibilidade para uma conversa e, se possível, números básicos: volume de atendimentos, leads por mês e ticket médio." },
];

export default function DiagnosticoPage() {
  const crumbs = [{ name: "Diagnóstico", path }];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Diagnóstico de IA & Automação", description: answer, path, price: 2500 }), faqSchema(faq), breadcrumbSchema(crumbs))} />

      <section className="relative text-white">
        <div className="container-site grid items-start gap-12 pb-20 pt-6 md:pt-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="lg:pt-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.8rem] text-white/85">
              <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_#5ce6a8]" /> Plano em até 7 dias · valor creditável
            </p>
            <h1 className="mt-6 text-[2.35rem] leading-[1.08] text-white md:text-[3.2rem]">Descubra onde a IA gera mais retorno na sua empresa.</h1>
            <p data-answer className="mt-6 text-lg leading-relaxed text-white/75">
              {answer}
            </p>
            <h2 className="mt-9 text-base font-semibold text-white">O que você recebe</h2>
            <Checklist
              dark
              className="mt-4"
              items={[
                "Análise dos seus processos de atendimento, vendas e operação",
                "Oportunidades de IA e automação priorizadas por impacto",
                "Estimativa de ROI de cada oportunidade",
                "Proposta com escopo, prazo e preço fechado",
                "Reunião de apresentação do plano",
              ]}
            />
          </div>
          <div id="formulario">
            <div className="rounded-[1.4rem] bg-white p-7 text-ink shadow-[var(--shadow-float)] md:p-9">
              <h2 className="text-[1.45rem] font-bold">Monte seu diagnóstico</h2>
              <p className="mt-1.5 text-[0.95rem] text-slate">Quatro perguntas rápidas e você vê na hora o caminho indicado.</p>
              <div className="mt-6">
                <DiagnosticWizard sectors={sectorOptions} pains={pains} />
              </div>
              <p className="mt-4 text-center text-xs text-slate">Seus dados são tratados conforme a LGPD. Sem spam.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-mist text-ink">
      <Section labelledBy="como">
        <SectionHeading id="como" eyebrow="Como funciona" title="Três passos. Plano na mão em 7 dias." />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Você conta a dor", "Uma conversa sobre a operação, os gargalos e os números básicos."],
            ["Analisamos", "Mapeamos processos, sistemas e dados e calculamos o retorno de cada oportunidade."],
            ["Entregamos o plano", "Em até 7 dias, com prioridades, ROI estimado e proposta fechada."],
          ].map(([t, s], i) => (
            <li key={t} className="rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy font-semibold text-white">{i + 1}</span>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-slate">{s}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist" labelledBy="opcoes">
        <SectionHeading id="opcoes" eyebrow="Duas opções" title="Escolha a profundidade." text="Ambos são 100% creditáveis no projeto contratado em até 30 dias." />
        <div className="mt-12">
          <OfferCards
            columns={2}
            offers={[
              {
                name: "Essencial",
                price: "a partir de R$ 2.500",
                text: "Foco na frente com maior potencial de retorno.",
                features: ["Mapeamento de uma frente (ex.: atendimento ou vendas)", "Oportunidades priorizadas", "Estimativa de ROI", "Proposta fechada + reunião"],
              },
              {
                name: "Completo",
                price: "a partir de R$ 5.000",
                text: "Toda a operação, com roteiro de implantação.",
                highlight: true,
                badge: "Mais completo",
                features: ["Atendimento, vendas, processos e dados", "Conversas com as áreas envolvidas", "Estimativa de ROI por oportunidade", "Roteiro de implantação por fases", "Avaliação de segurança e LGPD"],
              },
            ]}
          />
        </div>
      </Section>

      <Section labelledBy="por-que-pago">
        <SectionHeading id="por-que-pago" eyebrow="Transparência" title="Por que o Diagnóstico é pago." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Análise séria", s: "Gente sênior estudando a sua operação, com método. Não é uma reunião de vendas disfarçada." },
            { icon: Filter, t: "Foco em quem quer resolver", s: "Nosso tempo vai para empresas prontas para agir — e isso se reflete na qualidade da entrega." },
            { icon: BadgePercent, t: "Risco zero", s: "O valor é 100% creditado no projeto. Na prática, você não paga a mais por começar certo." },
          ].map(({ icon: I, t, s }) => (
            <Card key={t}>
              <I aria-hidden className="size-6 text-signal" strokeWidth={1.75} />
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-slate">{s}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="mist" labelledBy="faq-diag">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 id="faq-diag" className="text-3xl font-semibold md:text-[2.5rem]">
              Perguntas frequentes
            </h2>
            <div className="mt-8">
              <FAQList items={faq} />
            </div>
          </div>
          <div className="lg:pt-20">
            <WhatsAppCard light />
            <p className="mt-4 text-center text-sm text-slate">Prefere conversar antes? O agente da {site.name} responde na hora.</p>
          </div>
        </div>
      </Section>
      </div>
    </>
  );
}
