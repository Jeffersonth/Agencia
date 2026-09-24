import type { Metadata } from "next";
import { methodSteps } from "@/content/method";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Checklist, CTASection, DiagnosticActions, PageHero, Signature } from "@/components/sections";
import { MethodTimeline } from "@/components/MethodTimeline";

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
        crumbs={crumbs}
        eyebrow="Método"
        title="Um método. Cinco etapas. Zero improviso."
        answer="Todo projeto segue um método claro, do diagnóstico à operação contínua. É o que garante entregas rápidas sem perder rigor, e resultado que dá para medir."
        actions={<DiagnosticActions />}
      />

      <Section labelledBy="etapas">
        <SectionHeading id="etapas" eyebrow="Linha do tempo" title="Do problema à operação." />
        <div className="mt-14">
          <MethodTimeline detailed />
        </div>
      </Section>

      <Section tone="mist" labelledBy="entregaveis">
        <SectionHeading id="entregaveis" eyebrow="Entregáveis" title="O que você recebe em cada etapa." />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {methodSteps.map((s, i) => (
            <li key={s.title} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
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
