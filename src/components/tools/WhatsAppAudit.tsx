"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@/lib/track";
import { cx } from "@/components/ui";
import { ReportRequest } from "./ReportRequest";

type Question = {
  id: string;
  text: string;
  options: { label: string; points: number }[];
  fix: { text: string; href: string; link: string };
};

/** Cada pergunta vale até 10 pontos; "não se aplica" conta como ponto cheio. */
const questions: Question[] = [
  {
    id: "versao",
    text: "Qual WhatsApp a empresa usa para atender?",
    options: [
      { label: "O app comum, no celular de alguém", points: 0 },
      { label: "WhatsApp Business (app)", points: 5 },
      { label: "API oficial do WhatsApp (WhatsApp Business Platform)", points: 10 },
    ],
    fix: { text: "Migre para a API oficial: número verificado, vários atendentes e integração com sistemas, sem risco de bloqueio.", href: "/conteudo/comparativos/api-oficial-vs-nao-oficial-whatsapp/", link: "API oficial vs não oficial" },
  },
  {
    id: "equipe",
    text: "Como a equipe divide as conversas?",
    options: [
      { label: "Cada um atende no próprio celular ou número", points: 0 },
      { label: "Várias pessoas no mesmo aparelho ou WhatsApp Web", points: 4 },
      { label: "Plataforma com filas, responsáveis e histórico", points: 10 },
    ],
    fix: { text: "Centralize os canais em uma caixa de entrada com filas e histórico, para nenhuma conversa se perder.", href: "/solucoes/atendimento-inteligente/central-multicanal/", link: "Central de Atendimento Multicanal" },
  },
  {
    id: "tempo",
    text: "Quanto tempo leva a primeira resposta, no horário comercial?",
    options: [
      { label: "Mais de 2 horas", points: 0 },
      { label: "De 30 minutos a 2 horas", points: 4 },
      { label: "De 5 a 30 minutos", points: 7 },
      { label: "Menos de 5 minutos", points: 10 },
    ],
    fix: { text: "Responda em segundos: quem pesquisa costuma chamar vários fornecedores, e o primeiro a responder bem sai na frente.", href: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/", link: "Agente de IA para WhatsApp" },
  },
  {
    id: "fora",
    text: "O que acontece com quem escreve à noite ou no fim de semana?",
    options: [
      { label: "Fica sem resposta até o próximo dia útil", points: 0 },
      { label: "Recebe uma mensagem automática de ausência", points: 4 },
      { label: "É atendido: tira dúvidas, agenda ou compra", points: 10 },
    ],
    fix: { text: "Atenda fora do horário com um agente que resolve de verdade, e não só avisa que a empresa está fechada.", href: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/", link: "Agente de IA para WhatsApp" },
  },
  {
    id: "faq",
    text: "Como são respondidas as perguntas frequentes?",
    options: [
      { label: "Digitadas do zero a cada vez", points: 0 },
      { label: "Com respostas rápidas copiadas e coladas", points: 5 },
      { label: "Automaticamente, a partir de uma base aprovada pela empresa", points: 10 },
    ],
    fix: { text: "Monte uma base de conhecimento aprovada e deixe o repetitivo com a IA; a equipe fica com o que exige pessoas.", href: "/conteudo/glossario/base-de-conhecimento/", link: "O que é base de conhecimento" },
  },
  {
    id: "agenda",
    text: "Agendamentos ou pedidos feitos pelo WhatsApp…",
    options: [
      { label: "São passados à mão para outra ferramenta", points: 0 },
      { label: "Vão por um link de agenda ou loja on-line", points: 6 },
      { label: "São marcados e confirmados na própria conversa", points: 10 },
      { label: "Não se aplica ao meu negócio", points: 10 },
    ],
    fix: { text: "Deixe o atendimento marcar, confirmar e remarcar direto na agenda, com lembretes que reduzem faltas.", href: "/solucoes/atendimento-inteligente/agendamento-inteligente/", link: "Agendamento Inteligente" },
  },
  {
    id: "crm",
    text: "Os contatos do WhatsApp vão para um CRM?",
    options: [
      { label: "Não, ficam só nas conversas", points: 0 },
      { label: "Às vezes, anotados em planilha", points: 4 },
      { label: "Sim, automaticamente, com o histórico", points: 10 },
    ],
    fix: { text: "Registre cada contato no CRM automaticamente, com etapa, responsável e resumo da conversa.", href: "/solucoes/vendas-e-receita/crm-e-pipeline/", link: "CRM & Pipeline" },
  },
  {
    id: "followup",
    text: "Quem pediu orçamento e não respondeu recebe retorno?",
    options: [
      { label: "Não fazemos follow-up", points: 0 },
      { label: "Quando alguém lembra", points: 4 },
      { label: "Sim, com uma sequência automática e consentida", points: 10 },
    ],
    fix: { text: "Crie uma régua de follow-up automática para quem consentiu, com alerta ao vendedor na hora certa.", href: "/solucoes/vendas-e-receita/funis-automatizados/", link: "Funis Automatizados" },
  },
  {
    id: "lgpd",
    text: "Como a empresa registra o consentimento para mensagens?",
    options: [
      { label: "Não registramos", points: 0 },
      { label: "De maneira informal ou em parte dos casos", points: 4 },
      { label: "Opt-in registrado e opção simples de sair", points: 10 },
    ],
    fix: { text: "Registre o opt-in e ofereça sempre a opção de sair: protege a empresa na LGPD e o número nas regras da Meta.", href: "/conteudo/glossario/opt-in/", link: "O que é opt-in" },
  },
  {
    id: "metricas",
    text: "A empresa acompanha números do atendimento?",
    options: [
      { label: "Não medimos", points: 0 },
      { label: "Olhamos de vez em quando", points: 4 },
      { label: "Sim: tempo de resposta, volume e conversão", points: 10 },
    ],
    fix: { text: "Defina indicadores (tempo de resposta, volume, conversão) antes de mudar qualquer coisa, para medir o ganho.", href: "/diagnostico/", link: "Diagnóstico de IA & Automação" },
  },
];

const levels = [
  { min: 90, name: "Referência", text: "O atendimento está no nível das melhores operações. O próximo passo é otimizar com dados." },
  { min: 70, name: "Bom, pronto para escalar", text: "A base está sólida. Automatizar os pontos abaixo tende a gerar ganho rápido." },
  { min: 40, name: "Base montada, muito a ganhar", text: "Há estrutura, mas o WhatsApp ainda depende muito de esforço manual." },
  { min: 0, name: "Atendimento em risco", text: "Contatos e vendas provavelmente estão se perdendo. Os pontos abaixo são o começo." },
];

export function WhatsAppAudit() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const tracked = useRef(false);
  const answered = Object.keys(answers).length;
  const done = answered === questions.length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const level = levels.find((l) => score >= l.min)!;
  const gaps = questions
    .filter((q) => (answers[q.id] ?? 10) < 10)
    .sort((a, b) => answers[a.id] - answers[b.id])
    .slice(0, 3);

  function answer(id: string, points: number) {
    if (!tracked.current) {
      tracked.current = true;
      track("tool_use", { tool: "raio_x_whatsapp" });
    }
    setAnswers((a) => ({ ...a, [id]: points }));
  }

  const summary = `Raio-X do WhatsApp: nota ${score}/100 (${level.name}). Pontos a melhorar: ${gaps.map((g) => g.fix.link).join("; ") || "nenhum"}.`;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <ol className="grid gap-5">
        {questions.map((q, i) => (
          <li key={q.id} className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60">
            <fieldset>
              <legend className="text-[1.05rem] font-semibold text-ink">
                <span className="mr-2 text-slate">{i + 1}.</span>
                {q.text}
              </legend>
              <div className="mt-4 grid gap-2">
                {q.options.map((o) => (
                  <label
                    key={o.label}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-line px-4 py-3 text-[0.95rem] transition-colors hover:border-violet-400/60 has-[:checked]:border-violet-400 has-[:checked]:bg-violet-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-violet-400/25"
                  >
                    <input type="radio" name={q.id} value={o.label} onChange={() => answer(q.id, o.points)} className="size-4 shrink-0 accent-violet-400" />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24">
        <div aria-live="polite" className="rounded-[var(--radius-card)] bg-navy p-7 text-white md:p-9">
          {!done ? (
            <>
              <p className="text-sm font-medium text-white/65">Seu Raio-X</p>
              <p className="mt-2 text-3xl font-semibold">
                {answered} de {questions.length} respondidas
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="bg-brand h-full rounded-full transition-all" style={{ width: `${(answered / questions.length) * 100}%` }} />
              </div>
              <p className="mt-4 text-white/70">Responda todas as perguntas para ver a nota e os pontos a melhorar. Nada é enviado até você pedir.</p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-white/65">Nota do seu atendimento no WhatsApp</p>
              <p className="mt-2 text-5xl font-semibold tracking-tight">
                {score}
                <span className="ml-1 text-xl font-medium text-white/60">/100</span>
              </p>
              <p className={cx("mt-3 text-xl font-semibold", score >= 70 ? "text-accent" : "text-white")}>{level.name}</p>
              <p className="mt-1 text-white/70">{level.text}</p>
              {gaps.length > 0 && (
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-white/80">Onde começar</p>
                  <ol className="mt-3 grid gap-4">
                    {gaps.map((g) => (
                      <li key={g.id}>
                        <p className="text-[0.95rem] text-white/85">{g.fix.text}</p>
                        <Link href={g.fix.href} className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
                          {g.fix.link} <ArrowRight aria-hidden className="size-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}
        </div>
        {done && <ReportRequest origin="raio-x-whatsapp" summary={summary} title="Receba o plano de melhoria do seu WhatsApp" />}
      </div>
    </div>
  );
}
