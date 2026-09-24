import type { Metadata } from "next";
import { BadgePercent, Filter, ShieldCheck } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Card, Section, SectionHeading } from "@/components/ui";
import { Breadcrumbs, Checklist, FAQList, WhatsAppCard } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { LeadForm } from "@/components/LeadForm";

const path = "/diagnostico/";
const answer =
  "O Diagnóstico é o ponto de partida. Mapeamos seus processos, identificamos onde a IA e a automação geram mais resultado e entregamos um plano com estimativa de ROI. O valor é 100% creditado se você seguir com o projeto.";

export const metadata: Metadata = pageMetadata({
  title: "Diagnóstico de IA & Automação para Empresas",
  description:
    "Mapeamos seus processos, apontamos onde a IA gera mais retorno e entregamos um plano com estimativa de ROI em 7 dias. A partir de R$ 2.500, 100% creditável no projeto.",
  path,
});

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

      <section className="relative overflow-hidden border-b border-line bg-mist">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
        <div className="container-site relative grid gap-12 pb-20 pt-8 md:pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-5 mt-12">Diagnóstico de IA & Automação</p>
            <h1 className="text-[2.35rem] font-semibold leading-[1.08] md:text-[3.3rem]">Descubra onde a IA gera mais retorno na sua empresa.</h1>
            <p data-answer className="mt-6 text-lg leading-relaxed text-slate md:text-xl">
              {answer}
            </p>
            <h2 className="mt-10 text-lg font-semibold">O que você recebe</h2>
            <Checklist
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
          <div id="formulario" className="lg:pt-16">
            <Card className="shadow-[var(--shadow-float)]">
              <h2 className="text-2xl font-semibold">Agende seu Diagnóstico</h2>
              <p className="mt-2 text-slate">Conte o principal desafio. Respondemos em até 1 dia útil.</p>
              <div className="mt-7">
                <LeadForm
                  origin="diagnostico"
                  options={["Diagnóstico Essencial (a partir de R$ 2.500)", "Diagnóstico Completo (a partir de R$ 5.000)", "Ainda não sei — quero orientação"]}
                  defaultOption="Ainda não sei — quero orientação"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Section labelledBy="como">
        <SectionHeading id="como" eyebrow="Como funciona" title="Três passos. Plano na mão em 7 dias." />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Você conta a dor", "Uma conversa sobre a operação, os gargalos e os números básicos."],
            ["Analisamos", "Mapeamos processos, sistemas e dados e calculamos o retorno de cada oportunidade."],
            ["Entregamos o plano", "Em até 7 dias, com prioridades, ROI estimado e proposta fechada."],
          ].map(([t, s], i) => (
            <li key={t} className="rounded-[var(--radius-card)] border border-line bg-mist p-7">
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
    </>
  );
}
