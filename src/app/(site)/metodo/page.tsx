import type { Metadata } from "next";
import { methodSteps } from "@/content/method";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Checklist, CTASection, DiagnosticActions, PageHero, Signature } from "@/components/sections";

const path = "/metodo/";

export const metadata: Metadata = pageMetadata({
  title: "Nosso Método de Implantação de IA",
  description:
    "Diagnóstico, Desenho, Construção acelerada, Validação e Operação contínua: o método que garante entregas rápidas sem perder rigor, e resultado que dá para medir.",
  path,
});

const deliverables = [
  ["Mapa de processos", "Registro do “antes”", "Oportunidades com ROI estimado"],
  ["Arquitetura da solução", "Fluxos e regras aprovados", "Plano de integrações e segurança"],
  ["Entregas incrementais", "Revisão sênior em cada entrega", "Documentação"],
  ["Testes com cenários reais", "Ajustes antes do lançamento", "Treinamento da equipe"],
  ["Relatório mensal de indicadores", "Ajustes e melhorias", "Roteiro de evolução"],
];

export default function MetodoPage() {
  const crumbs = [{ name: "Método", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        centered
        crumbs={crumbs}
        eyebrow="Método"
        title="Um método. Cinco etapas. Zero improviso."
        answer="Todo projeto segue um método claro, do diagnóstico à operação contínua. É o que garante entregas rápidas sem perder rigor, e resultado que dá para medir."
        actions={<DiagnosticActions />}
      />

      <Section labelledBy="etapas">
        <h2 id="etapas" className="sr-only">
          Etapas
        </h2>
        <ol className="relative mx-auto max-w-4xl space-y-5">
          <span aria-hidden className="absolute bottom-6 left-6 top-6 w-0.5 bg-gradient-to-b from-violet-400 via-signal to-accent" />
          {methodSteps.map((s, i) => {
            const last = i === methodSteps.length - 1;
            return (
              <li key={s.title} className="relative flex gap-5 md:gap-7">
                <span
                  className={`relative z-10 mt-4 inline-flex size-12 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-display)] font-bold ${last ? "bg-[#1a9e7a] text-white" : "bg-navy-900 text-sky"}`}
                >
                  {i + 1}
                </span>
                <div className={`flex-1 rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 md:p-7 ${last ? "ring-accent/40" : "ring-line/60"}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-[1.3rem] font-bold">{s.title}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${last ? "bg-accent-50 text-accent-strong" : "bg-violet-50 text-violet"}`}>{s.duration}</span>
                  </div>
                  <p className="mt-2 text-slate">
                    {s.text} {s.detail}
                  </p>
                  <p className="mt-3 text-sm text-slate">
                    <strong className="text-ink">De você:</strong> {s.fromYou}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section tone="mist" labelledBy="entregaveis">
        <SectionHeading id="entregaveis" eyebrow="Entregáveis" title="O que você recebe em cada etapa." />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {methodSteps.map((s, i) => (
            <li key={s.title} className="rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-signal-50 text-signal">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">
                {i + 1}. {s.title}
              </h3>
              <Checklist items={deliverables[i]} className="mt-4 text-[0.92rem] [&>li]:gap-2.5" />
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy" labelledBy="velocidade">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            dark
            id="velocidade"
            eyebrow="Velocidade com rigor"
            title="Usamos IA para construir mais rápido, não para pular etapas."
          />
          <Checklist
            dark
            className="text-lg"
            items={[
              "Revisão sênior em cada entrega — nada vai ao ar sem olhar humano experiente.",
              "QA com cenários reais, inclusive os casos difíceis.",
              "Padrões de engenharia: versionamento, documentação e testes.",
              "Indicadores definidos antes de construir, medidos depois de lançar.",
            ]}
          />
        </div>
      </Section>

      <CTASection title="A etapa 1 começa com uma conversa." />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
