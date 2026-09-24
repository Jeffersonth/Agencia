/**
 * Interfaces ilustrativas (sem clichês de IA): conversas, agendas, pipelines e
 * documentos, como o cliente vai ver no dia a dia. Todas usam empresas fictícias.
 */
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  CheckCheck,
  CircleAlert,
  Database,
  FileText,
  Globe,
  Lock,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import type { VisualName } from "@/content/types";
import { cx } from "@/components/ui";
import { InstagramGlyph, WhatsAppGlyph } from "@/components/Icon";
import { LogoMark } from "@/components/layout/Logo";

function Frame({
  label,
  children,
  className,
  title,
  caption = "Interface ilustrativa · empresa fictícia",
}: {
  label: string;
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  caption?: string;
}) {
  return (
    <figure role="img" aria-label={label} className={cx("relative", className)}>
      <div className="overflow-hidden rounded-[1.4rem] bg-white shadow-[var(--shadow-float)] ring-1 ring-black/5">
        {title && (
          <div className="flex items-center gap-2 border-b border-line bg-mist/70 px-4 py-3">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-line-strong" />
              <span className="size-2.5 rounded-full bg-line-strong" />
              <span className="size-2.5 rounded-full bg-line-strong" />
            </span>
            <span className="ml-2 truncate text-xs font-medium text-slate">{title}</span>
          </div>
        )}
        {children}
      </div>
      {caption && <figcaption className="mt-3 text-center text-xs opacity-60">{caption}</figcaption>}
    </figure>
  );
}

function Floating({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={cx(
        "absolute z-10 hidden items-center gap-2.5 rounded-xl bg-white ring-1 ring-line/60 px-3.5 py-2.5 text-[0.8rem] font-medium shadow-[var(--shadow-lift)] sm:flex",
        className,
      )}
    >
      {children}
    </div>
  );
}

function OkDot() {
  return (
    <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent-50 text-accent-strong">
      <Check className="size-3.5" strokeWidth={2.5} />
    </span>
  );
}

/* ───────────────────────────── WhatsApp ───────────────────────────── */

function Bubble({ from, children, time }: { from: "client" | "agent"; children: ReactNode; time: string }) {
  const client = from === "client";
  return (
    <div className={cx("flex", client ? "justify-end" : "justify-start")}>
      <div
        className={cx(
          "max-w-[82%] rounded-2xl px-3.5 py-2 text-[0.84rem] leading-snug shadow-sm",
          client ? "rounded-br-md bg-[#1f9e75] text-white" : "rounded-bl-md bg-white text-ink",
        )}
      >
        {children}
        <span className={cx("ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[0.65rem]", client ? "text-white/70" : "text-slate/80")}>
          {time}
          {client && <CheckCheck className="size-3 text-mint" />}
        </span>
      </div>
    </div>
  );
}

export function WhatsAppMock({ className, actions = true }: { className?: string; actions?: boolean }) {
  return (
    <div className={cx("relative mx-auto w-full max-w-[25rem]", className)}>
      <Frame label="Ilustração: agente de IA no WhatsApp agendando uma consulta às 22h47, fora do horário comercial.">
        <div className="flex items-center gap-3 bg-[#1b7a5c] px-4 py-3.5 text-white">
          <LogoMark dark className="size-9" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Clínica Demo</p>
            <p className="flex items-center gap-1.5 text-[0.72rem] text-white/70">
              <span className="size-1.5 rounded-full bg-mint" /> Assistente virtual · online
            </p>
          </div>
          <WhatsAppGlyph className="ml-auto size-5 text-white/70" />
        </div>
        <div className="space-y-2.5 bg-[#0f2a22] px-3.5 py-4">
          <p className="mx-auto w-fit rounded-md bg-white/10 px-2 py-0.5 text-[0.68rem] font-medium text-white/70">Hoje</p>
          <Bubble from="client" time="22:47">
            Oi! Vocês têm horário amanhã para limpeza?
          </Bubble>
          <Bubble from="agent" time="22:47">
            Oi, Marina! Tenho sim. Amanhã com a Dra. Paula: <strong>9h</strong>, <strong>10h30</strong> ou <strong>16h</strong>. Qual fica melhor?
          </Bubble>
          <Bubble from="client" time="22:48">
            10h30
          </Bubble>
          <Bubble from="agent" time="22:48">
            Pronto! Quinta, 10h30, confirmado. Envio um lembrete na véspera. Posso ajudar em mais alguma coisa?
          </Bubble>
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-3.5 py-3 shadow-sm" aria-hidden>
              <span className="typing-dot size-1.5 rounded-full bg-slate" />
              <span className="typing-dot size-1.5 rounded-full bg-slate" />
              <span className="typing-dot size-1.5 rounded-full bg-slate" />
            </div>
          </div>
        </div>
      </Frame>
      {actions && (
        <ul aria-label="Ações do agente nesta conversa" className="mt-4 flex flex-wrap justify-center gap-2 text-[0.78rem] font-medium">
          {[
            { icon: <CalendarCheck className="size-3.5" />, t: "Consulta criada na agenda" },
            { icon: <Database className="size-3.5" />, t: "Lead registrado no CRM" },
            { icon: <Check className="size-3.5" />, t: "Lembrete programado" },
          ].map((a) => (
            <li key={a.t} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-ink shadow-[var(--shadow-card)]">
              <span className="text-accent-strong">{a.icon}</span> {a.t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ───────────────────────────── Agenda ───────────────────────────── */

export function CalendarMock() {
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  const slots: { d: number; h: number; name: string; tone: "ok" | "wait" | "fill" }[] = [
    { d: 0, h: 0, name: "Carlos M.", tone: "ok" },
    { d: 0, h: 2, name: "Ana P.", tone: "ok" },
    { d: 1, h: 1, name: "Lucas R.", tone: "wait" },
    { d: 1, h: 3, name: "Bia S.", tone: "ok" },
    { d: 2, h: 0, name: "Rafa T.", tone: "fill" },
    { d: 2, h: 2, name: "João V.", tone: "ok" },
    { d: 3, h: 1, name: "Marina L.", tone: "ok" },
    { d: 3, h: 3, name: "Pedro A.", tone: "ok" },
    { d: 4, h: 0, name: "Júlia C.", tone: "wait" },
    { d: 4, h: 2, name: "Nina F.", tone: "ok" },
  ];
  const hours = ["09:00", "10:30", "14:00", "16:00"];
  const tone = {
    ok: "bg-accent-50 text-accent-strong ring-accent/25",
    wait: "bg-amber-50 text-amber-800 ring-amber-200",
    fill: "bg-signal-50 text-signal-600 ring-signal-100",
  };
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <Floating className="-right-6 -top-5">
        <OkDot /> Lembrete enviado · 8 confirmações
      </Floating>
      <Frame title="Agenda · Dra. Paula" label="Ilustração: agenda semanal com consultas confirmadas pelo agente, uma aguardando confirmação e um encaixe da lista de espera.">
        <div className="p-4">
          <div className="grid grid-cols-[3.2rem_repeat(5,1fr)] gap-1.5 text-[0.7rem]">
            <span />
            {days.map((d) => (
              <span key={d} className="pb-1 text-center font-semibold text-slate">
                {d}
              </span>
            ))}
            {hours.map((h, hi) => (
              <div key={h} className="contents">
                <span className="pt-2 text-right font-medium tabular-nums text-slate/80">{h}</span>
                {days.map((_, di) => {
                  const s = slots.find((x) => x.d === di && x.h === hi);
                  return (
                    <span key={di} className={cx("min-h-12 rounded-lg p-1.5 ring-1 ring-inset", s ? tone[s.tone] : "bg-mist ring-line")}>
                      {s && (
                        <>
                          <span className="block truncate font-semibold">{s.name}</span>
                          <span className="block truncate opacity-80">{s.tone === "ok" ? "Confirmado" : s.tone === "wait" ? "Aguardando" : "Encaixe"}</span>
                        </>
                      )}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 px-3.5 py-2.5 text-[0.78rem]">
            <CalendarCheck className="size-4 shrink-0 text-signal" />
            <span>
              <strong>Rafa T.</strong> desmarcou quarta 9h — vaga oferecida à lista de espera e preenchida.
            </span>
          </div>
        </div>
      </Frame>
    </div>
  );
}

/* ───────────────────────────── Caixa multicanal ───────────────────────────── */

export function InboxMock() {
  const rows = [
    { ch: "wa", name: "Fernanda Costa", text: "Consigo parcelar em 3x?", status: "IA respondeu", tone: "green" },
    { ch: "ig", name: "@studio.bela", text: "Vocês atendem aos sábados?", status: "IA respondeu", tone: "green" },
    { ch: "site", name: "Visitante · /planos", text: "Quero falar com vendas", status: "Com Rodrigo · Vendas", tone: "blue" },
    { ch: "mail", name: "financeiro@cliente.com", text: "Segunda via do boleto", status: "Com Ana · Financeiro", tone: "blue" },
    { ch: "wa", name: "Paulo Mendes", text: "Meu pedido chegou avariado", status: "Transferido · prioridade", tone: "amber" },
  ] as const;
  const icon = {
    wa: <WhatsAppGlyph className="size-4 text-accent-strong" />,
    ig: <InstagramGlyph className="size-4 text-pink-600" />,
    site: <Globe className="size-4 text-signal" />,
    mail: <Mail className="size-4 text-slate" />,
  };
  const tones = { green: "bg-accent-50 text-accent-strong", blue: "bg-signal-50 text-signal-600", amber: "bg-amber-50 text-amber-800" };
  return (
    <Frame title="Caixa de entrada unificada" label="Ilustração: caixa de entrada que reúne WhatsApp, Instagram, chat do site e e-mail, com a IA respondendo e distribuindo conversas.">
      <div className="grid grid-cols-[auto_1fr]">
        <div className="hidden w-36 space-y-1 border-r border-line bg-mist/60 p-3 text-[0.78rem] sm:block">
          {[
            ["Todas", "24"],
            ["WhatsApp", "12"],
            ["Instagram", "5"],
            ["Site", "4"],
            ["E-mail", "3"],
          ].map(([l, n], i) => (
            <div key={l} className={cx("flex justify-between rounded-lg px-2.5 py-1.5", i === 0 ? "bg-white font-semibold shadow-sm" : "text-slate")}>
              {l}
              <span className="tabular-nums">{n}</span>
            </div>
          ))}
        </div>
        <ul className="divide-y divide-line">
          {rows.map((r) => (
            <li key={r.name} className="flex items-center gap-3 px-4 py-3">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-mist">{icon[r.ch]}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[0.82rem] font-semibold">{r.name}</span>
                <span className="block truncate text-[0.78rem] text-slate">{r.text}</span>
              </span>
              <span className={cx("hidden shrink-0 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold md:inline", tones[r.tone])}>{r.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* ───────────────────────────── Chat no site ───────────────────────────── */

export function SiteChatMock() {
  return (
    <Frame title="seusite.com.br/servicos" label="Ilustração: site com um assistente de IA respondendo a dúvida de um visitante e oferecendo agendamento.">
      <div className="relative h-[22rem] bg-white p-5">
        <div className="space-y-3" aria-hidden>
          <div className="h-3 w-24 rounded bg-navy/80" />
          <div className="h-6 w-3/4 rounded bg-mist" />
          <div className="h-6 w-1/2 rounded bg-mist" />
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-lg bg-mist" />
            <div className="h-20 rounded-lg bg-mist" />
            <div className="h-20 rounded-lg bg-mist" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 w-[17rem] overflow-hidden rounded-2xl bg-white ring-1 ring-line/60 shadow-[var(--shadow-float)]">
          <div className="flex items-center gap-2 bg-signal px-3.5 py-2.5 text-white">
            <Sparkles className="size-4" />
            <span className="text-[0.8rem] font-semibold">Assistente · responde na hora</span>
          </div>
          <div className="space-y-2 p-3 text-[0.76rem] leading-snug">
            <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-signal-50 px-3 py-2">O plano mensal inclui manutenção?</p>
            <p className="w-fit max-w-[90%] rounded-xl rounded-bl-sm bg-mist px-3 py-2">
              Inclui sim: atualizações, backup e suporte. Quer que eu agende uma conversa com o time?
            </p>
            <div className="flex gap-1.5">
              <span className="rounded-full border border-signal/40 px-2.5 py-1 font-medium text-signal">Agendar</span>
              <span className="rounded-full border border-line px-2.5 py-1 font-medium text-slate">Ir para o WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ───────────────────────────── SDR / pontuação ───────────────────────────── */

export function LeadScoreMock() {
  const answers = [
    ["Segmento", "Clínica · 6 profissionais"],
    ["Necessidade", "Reduzir faltas e atender à noite"],
    ["Prazo", "Próximos 30 dias"],
    ["Decisor", "Sim, sócia"],
  ];
  return (
    <div className="relative mx-auto w-full max-w-[28rem]">
      <Floating className="-left-10 -top-4">
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-signal-50 text-signal">
          <MessageSquareText className="size-3.5" />
        </span>
        Lead abordado em segundos
      </Floating>
      <Frame title="CRM · Lead qualificado pelo SDR com IA" label="Ilustração: ficha de lead qualificada pelo SDR com IA, com respostas, pontuação e reunião agendada.">
        <div className="p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">CM</span>
            <div>
              <p className="font-semibold">Camila Moreira</p>
              <p className="text-xs text-slate">Origem: anúncio · formulário do site</p>
            </div>
            <span className="ml-auto rounded-full bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-strong">Quente</span>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-2.5 text-[0.78rem]">
            {answers.map(([k, v]) => (
              <div key={k} className="rounded-lg bg-mist px-3 py-2">
                <dt className="text-slate">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5">
            <div className="flex justify-between text-xs font-semibold">
              <span>Pontuação do lead</span>
              <span className="tabular-nums text-accent-strong">86/100</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-mist">
              <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-signal to-accent" />
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-line px-3.5 py-3 text-[0.8rem]">
            <CalendarCheck className="size-4 shrink-0 text-signal" />
            <span>
              Reunião agendada: <strong>terça, 14h</strong> com Rodrigo (vendas)
            </span>
          </div>
        </div>
      </Frame>
    </div>
  );
}

/* ───────────────────────────── CRM kanban ───────────────────────────── */

export function KanbanMock() {
  const cols = [
    { name: "Novo", cards: [["Construtora Alfa", "R$ 18 mil"], ["Dr. Henrique", "R$ 6 mil"]] },
    { name: "Qualificado", cards: [["Loja Norte", "R$ 12 mil"], ["Clínica Viva", "R$ 9 mil"]] },
    { name: "Proposta", cards: [["Grupo Mar", "R$ 32 mil"]], alert: true },
    { name: "Fechado", cards: [["Studio Pilates", "R$ 7 mil"]] },
  ];
  return (
    <Frame title="Pipeline de vendas" label="Ilustração: pipeline de CRM com etapas, oportunidades e alerta automático de follow-up.">
      <div className="grid grid-cols-2 gap-2.5 p-4 md:grid-cols-4">
        {cols.map((c) => (
          <div key={c.name} className="rounded-xl bg-mist p-2.5">
            <p className="mb-2 flex justify-between px-1 text-[0.72rem] font-semibold text-slate">
              {c.name} <span className="tabular-nums">{c.cards.length}</span>
            </p>
            <div className="space-y-2">
              {c.cards.map(([n, v]) => (
                <div key={n} className="rounded-lg bg-white ring-1 ring-line/60 p-2.5 text-[0.74rem] shadow-sm">
                  <p className="font-semibold">{n}</p>
                  <p className="text-slate">{v}</p>
                  {c.alert && (
                    <p className="mt-1.5 flex items-center gap-1 rounded-md bg-amber-50 px-1.5 py-1 text-[0.66rem] font-semibold text-amber-800">
                      <CircleAlert className="size-3" /> Follow-up hoje
                    </p>
                  )}
                  {c.name === "Fechado" && (
                    <p className="mt-1.5 flex items-center gap-1 text-[0.66rem] font-semibold text-accent-strong">
                      <Check className="size-3" /> Ganho
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ───────────────────────────── Sequência / nutrição ───────────────────────────── */

export function SequenceMock() {
  const steps = [
    { day: "Dia 0", ch: "WhatsApp", text: "Obrigado pelo contato! Separei um material rápido para você.", icon: <WhatsAppGlyph className="size-4 text-accent-strong" /> },
    { day: "Dia 2", ch: "E-mail", text: "Guia: 5 perguntas antes de contratar", icon: <Mail className="size-4 text-slate" /> },
    { day: "Dia 5", ch: "Condição", text: "Abriu o guia e visitou a página de preços?", icon: <Sparkles className="size-4 text-signal" /> },
  ];
  return (
    <Frame title="Sequência · orçamento sem resposta" label="Ilustração: sequência automática de nutrição por WhatsApp e e-mail com uma condição baseada no comportamento do lead.">
      <div className="p-5">
        <ol className="space-y-3">
          {steps.map((s) => (
            <li key={s.day} className="flex gap-3">
              <span className="w-12 shrink-0 pt-2.5 text-[0.72rem] font-semibold tabular-nums text-slate">{s.day}</span>
              <div className="flex-1 rounded-xl bg-white ring-1 ring-line/60 p-3 shadow-sm">
                <p className="flex items-center gap-2 text-[0.72rem] font-semibold text-slate">
                  {s.icon} {s.ch}
                </p>
                <p className="mt-1 text-[0.82rem]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="ml-[3.75rem] mt-3 grid grid-cols-2 gap-2 text-[0.76rem]">
          <div className="rounded-xl bg-accent-50 p-3 text-accent-strong">
            <p className="font-semibold">Sim</p>
            <p>Alerta ao vendedor + mensagem personalizada</p>
          </div>
          <div className="rounded-xl bg-mist p-3 text-slate">
            <p className="font-semibold text-ink">Não</p>
            <p>Novo conteúdo em 4 dias</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ───────────────────────────── Documentos ───────────────────────────── */

export function DocumentMock() {
  const fields = [
    ["CNPJ do emitente", "12.345.678/0001-90", true],
    ["Número da nota", "000.482.119", true],
    ["Data de emissão", "12/09/2026", true],
    ["Valor total", "R$ 4.870,00", true],
    ["Centro de custo", "não identificado", false],
  ] as const;
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <Frame title="Automação de documentos · lote de hoje" label="Ilustração: IA lendo uma nota fiscal, extraindo campos, validando e enviando um campo para revisão humana.">
        <div className="grid gap-4 p-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 p-3" aria-hidden>
            <div className="flex items-center gap-2 text-[0.72rem] font-semibold text-slate">
              <FileText className="size-4" /> NF-e_482119.pdf
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-3/4 rounded bg-line-strong" />
              <div className="h-2 w-1/2 rounded bg-signal/40 ring-2 ring-signal/30" />
              <div className="h-2 w-2/3 rounded bg-line-strong" />
              <div className="h-2 w-2/5 rounded bg-signal/40 ring-2 ring-signal/30" />
              <div className="mt-4 h-10 rounded bg-white" />
              <div className="h-2 w-1/3 rounded bg-signal/40 ring-2 ring-signal/30" />
              <div className="h-2 w-3/5 rounded bg-line-strong" />
            </div>
          </div>
          <ul className="space-y-1.5 text-[0.78rem]">
            {fields.map(([k, v, ok]) => (
              <li
                key={k}
                className={cx("flex items-center justify-between gap-2 rounded-lg px-3 py-2", ok ? "bg-white ring-1 ring-line" : "bg-amber-50 ring-1 ring-amber-200")}
              >
                <span>
                  <span className="block text-slate">{k}</span>
                  <span className="block font-semibold tabular-nums">{v}</span>
                </span>
                {ok ? <Check className="size-4 text-accent-strong" /> : <CircleAlert className="size-4 text-amber-700" />}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-mist/60 px-4 py-3 text-[0.76rem]">
          <span className="flex items-center gap-1.5 font-medium text-accent-strong">
            <Check className="size-3.5" /> Validado e lançado no ERP
          </span>
          <span className="flex items-center gap-1.5 font-medium text-amber-800">
            <CircleAlert className="size-3.5" /> 1 campo na fila de revisão
          </span>
        </div>
      </Frame>
    </div>
  );
}

/* ───────────────────────────── Conhecimento interno ───────────────────────────── */

export function KnowledgeMock() {
  return (
    <Frame title="Assistente interno" label="Ilustração: colaborador pergunta ao agente de conhecimento e recebe a resposta com a citação do documento de origem.">
      <div className="space-y-3 p-5 text-[0.84rem]">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-md bg-navy px-4 py-2.5 text-white">
            Qual o prazo para enviar a documentação de admissão ao escritório?
          </p>
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white ring-1 ring-line/60 p-4 shadow-sm">
          <p>
            O prazo é de <strong>3 dias úteis</strong> após a assinatura do contrato. Documentos pendentes devem ser sinalizados ao setor pessoal no mesmo prazo.
          </p>
          <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-mist px-3 py-2 text-[0.76rem]">
            <BookOpen className="size-4 shrink-0 text-signal" />
            <span className="min-w-0">
              <span className="block truncate font-semibold">Manual de Procedimentos — DP.pdf</span>
              <span className="block text-slate">Seção 4.2 · página 12</span>
            </span>
          </div>
        </div>
        <p className="flex items-center gap-1.5 text-[0.72rem] text-slate">
          <Lock className="size-3.5" /> Resposta limitada aos documentos que você tem permissão para ver.
        </p>
      </div>
    </Frame>
  );
}

/* ───────────────────────────── Fluxo / integração ───────────────────────────── */

export function FlowMock() {
  const sources = [
    { label: "E-commerce", sub: "novo pedido" },
    { label: "WhatsApp", sub: "pedido do vendedor" },
    { label: "E-mail", sub: "PDF anexo" },
  ];
  const targets = [
    { label: "ERP", sub: "pedido lançado" },
    { label: "CRM", sub: "cliente atualizado" },
    { label: "Planilha", sub: "relatório do dia" },
  ];
  const Node = ({ label, sub, strong }: { label: string; sub: string; strong?: boolean }) => (
    <div className={cx("rounded-xl border px-3 py-2.5 text-[0.76rem] shadow-sm", strong ? "border-signal bg-signal text-white" : "border-line bg-white")}>
      <p className="font-semibold">{label}</p>
      <p className={strong ? "text-white/80" : "text-slate"}>{sub}</p>
    </div>
  );
  return (
    <Frame title="Fluxo · pedidos → sistemas" label="Ilustração: fluxo de automação recebendo pedidos de três canais, validando com IA e lançando no ERP, no CRM e em uma planilha.">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 p-5">
        <div className="space-y-2">
          {sources.map((s) => (
            <Node key={s.label} {...s} />
          ))}
        </div>
        <ArrowRight className="size-4 text-slate" aria-hidden />
        <div className="space-y-2">
          <Node label="Validação" sub="regras + IA" strong />
          <div className="rounded-xl border border-dashed border-amber-300 bg-amber-50 px-3 py-2 text-[0.72rem] text-amber-800">
            Exceções → revisão
          </div>
        </div>
        <ArrowRight className="size-4 text-slate" aria-hidden />
        <div className="space-y-2">
          {targets.map((s) => (
            <Node key={s.label} {...s} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-line bg-mist/60 px-5 py-3 text-[0.74rem] text-slate">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-accent" /> Execução concluída há 2 min
        </span>
        <span>Logs · alertas · reprocessamento</span>
      </div>
    </Frame>
  );
}

/* ───────────────────────────── IA privada ───────────────────────────── */

export function VaultMock() {
  return (
    <Frame title="Ambiente privado de IA" label="Ilustração: ambiente privado em que documentos, modelo de IA e equipe ficam dentro do perímetro da empresa, com registro de acessos.">
      <div className="p-5">
        <div className="relative rounded-2xl border-2 border-dashed border-signal/40 bg-signal-50/40 p-4">
          <span className="absolute -top-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[0.7rem] font-semibold text-signal ring-1 ring-signal-100">
            <ShieldCheck className="size-3.5" /> Perímetro da sua empresa
          </span>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[0.74rem]">
            {[
              { icon: <FileText className="mx-auto size-5 text-signal" />, t: "Acervo", s: "contratos, prontuários" },
              { icon: <Sparkles className="mx-auto size-5 text-signal" />, t: "Modelo de IA", s: "sem retenção" },
              { icon: <UserRound className="mx-auto size-5 text-signal" />, t: "Equipe", s: "acesso por perfil" },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-line">
                {b.icon}
                <p className="mt-1.5 font-semibold">{b.t}</p>
                <p className="text-slate">{b.s}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-mist px-3 py-2 text-[0.74rem] text-slate">
          <X className="size-4 text-red-600" /> Dados não treinam modelos de terceiros
        </div>
        <ul className="mt-3 space-y-1 font-mono text-[0.68rem] text-slate">
          <li className="flex justify-between rounded-md bg-white px-2.5 py-1.5 ring-1 ring-line">
            <span>ana.souza · consulta ao acervo trabalhista</span>
            <span>10:42</span>
          </li>
          <li className="flex justify-between rounded-md bg-white px-2.5 py-1.5 ring-1 ring-line">
            <span>marcos.lima · rascunho de petição</span>
            <span>10:38</span>
          </li>
        </ul>
      </div>
    </Frame>
  );
}

/* ───────────────────────────── Diagrama do núcleo (Home) ───────────────────────────── */

export function CoreDiagram() {
  const satellites = [
    { t: "Sites Inteligentes", s: "já nascem com assistente de IA", pos: "left-1/2 top-0 -translate-x-1/2" },
    { t: "Visibilidade em IA", s: "SEO e GEO que trazem o cliente", pos: "left-0 bottom-6" },
    { t: "Produtos Digitais", s: "sistemas e apps com agentes", pos: "right-0 bottom-6" },
  ];
  return (
    <figure
      role="img"
      aria-label="Diagrama: núcleo de IA, Agentes e Automação ao centro, com Sites Inteligentes, Visibilidade em IA e Produtos Digitais ao redor."
      className="relative mx-auto aspect-square w-full max-w-[32rem]"
    >
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" aria-hidden>
        <circle cx="200" cy="210" r="150" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeDasharray="3 6" />
        <circle cx="200" cy="210" r="100" fill="none" stroke="rgb(255 255 255 / 0.08)" />
        <line x1="200" y1="210" x2="200" y2="40" stroke="rgb(143 180 255 / 0.5)" strokeDasharray="4 5" />
        <line x1="200" y1="210" x2="62" y2="330" stroke="rgb(143 180 255 / 0.5)" strokeDasharray="4 5" />
        <line x1="200" y1="210" x2="338" y2="330" stroke="rgb(143 180 255 / 0.5)" strokeDasharray="4 5" />
      </svg>
      <div className="absolute left-1/2 top-[52.5%] flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand text-center text-white shadow-[0_0_0_12px_rgb(124_77_255/0.18),0_0_80px_rgb(124_77_255/0.6)] md:size-48">
        <Sparkles aria-hidden className="size-6" />
        <span className="mt-2 px-4 text-sm font-semibold leading-tight md:text-base">IA, Agentes &amp; Automação</span>
      </div>
      {satellites.map((s) => (
        <div key={s.t} className={cx("absolute w-40 rounded-2xl border border-white/15 bg-white/[0.07] p-3.5 text-center backdrop-blur md:w-48", s.pos)}>
          <p className="text-sm font-semibold text-white">{s.t}</p>
          <p className="mt-0.5 text-xs leading-snug text-white/65">{s.s}</p>
        </div>
      ))}
    </figure>
  );
}

export function Visual({ name }: { name: VisualName }) {
  switch (name) {
    case "whatsapp":
      return <WhatsAppMock />;
    case "calendar":
      return <CalendarMock />;
    case "inbox":
      return <InboxMock />;
    case "sitechat":
      return <SiteChatMock />;
    case "leadscore":
      return <LeadScoreMock />;
    case "kanban":
      return <KanbanMock />;
    case "sequence":
      return <SequenceMock />;
    case "document":
      return <DocumentMock />;
    case "knowledge":
      return <KnowledgeMock />;
    case "flow":
      return <FlowMock />;
    case "vault":
      return <VaultMock />;
  }
}
