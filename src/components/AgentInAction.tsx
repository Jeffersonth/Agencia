"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { ParticleNetwork } from "@/components/ParticleNetwork";

type Turn = { from: "user" | "agent" | "action"; text: string };

const CONVO: Turn[] = [
  { from: "user", text: "Oi! Vi o anúncio de vocês. Vocês atendem no sábado? Queria marcar uma avaliação." },
  { from: "action", text: "Interpretando intenção · consultando agenda e regras de atendimento" },
  { from: "agent", text: "Oi! Atendemos sim, sábado das 9h às 13h. Já consigo verificar um horário pra você. Qual seu nome e a cidade?" },
  { from: "user", text: "Sou a Marina, de Campinas." },
  { from: "action", text: "Registrando lead no CRM · qualificando oportunidade" },
  { from: "agent", text: "Prazer, Marina! 😊 Pra Campinas o atendimento é presencial ou online. Tenho sábado às 10h ou 11h30. Qual prefere?" },
  { from: "user", text: "Pode ser 10h, presencial." },
  { from: "action", text: "Agendando · enviando confirmação e lembrete automático" },
  { from: "agent", text: "Fechado! ✅ Agendei presencial no sábado às 10h e já te enviei a confirmação. Um dia antes eu mando um lembrete. Precisa de mais alguma coisa?" },
  { from: "user", text: "Só isso, muito obrigada!" },
  { from: "agent", text: "Combinado, Marina. Qualquer dúvida é só chamar aqui. Até sábado! 🙌" },
];

const STEPS = ["Mensagem recebida", "Intenção: qualificação de lead", "Consulta ao CRM", "Resposta gerada"];
const NODES = ["Cliente", "Agente de IA", "CRM / ERP", "Automação", "Ação"];
const CHANNELS = ["WhatsApp", "CRM", "ERP", "API", "n8n"];

const CAPABILITIES = [
  "Receber e interpretar mensagens",
  "Identificar a intenção de um cliente",
  "Consultar produtos, serviços ou informações internas",
  "Buscar dados em CRM, ERP ou banco de dados",
  "Qualificar oportunidades comerciais",
  "Criar ou atualizar registros no CRM",
  "Agendar reuniões",
  "Enviar propostas ou informações",
  "Interpretar documentos e gerar relatórios",
  "Acionar automações",
  "Transferir o atendimento para uma pessoa",
  "Registrar tudo que aconteceu no processo",
];

type Rendered = { full: number; partial: string; typingIdx: number | null };

export function AgentInAction() {
  const [r, setR] = useState<Rendered>({ full: 0, partial: "", typingIdx: null });

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setR({ full: CONVO.length, partial: "", typingIdx: null });
      return;
    }
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((res) => timers.push(setTimeout(res, ms)));

    async function run() {
      while (!cancelled) {
        setR({ full: 0, partial: "", typingIdx: null });
        await wait(600);
        for (let i = 0; i < CONVO.length && !cancelled; i++) {
          const t = CONVO[i];
          if (t.from === "agent") {
            setR({ full: i, partial: "", typingIdx: i });
            for (let c = 1; c <= t.text.length && !cancelled; c++) {
              setR({ full: i, partial: t.text.slice(0, c), typingIdx: i });
              await wait(18);
            }
            setR({ full: i + 1, partial: "", typingIdx: null });
            await wait(900);
          } else {
            setR({ full: i + 1, partial: "", typingIdx: null });
            await wait(t.from === "action" ? 850 : 700);
          }
        }
        await wait(3200);
      }
    }
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section aria-labelledby="agente-acao" className="bg-liquid on-dark relative overflow-hidden py-20 text-white md:py-28">
      <ParticleNetwork className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-white/80 backdrop-blur-sm">
            Agentes que executam
            <span className="rounded-full bg-violet-400/20 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-lilac">demonstração</span>
          </p>
          <h2 id="agente-acao" className="mt-6 text-[2rem] font-bold leading-[1.1] text-white md:text-[2.7rem]">
            Muito além de responder perguntas.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Um agente de IA entende a solicitação, consulta os sistemas certos e executa ações na sua operação — passando para uma pessoa quando o caso pede.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Chat com typing effect + glow neon */}
          <div className="glass-card animate-glow relative flex flex-col rounded-[1.4rem] p-5 md:p-6 lg:col-span-2 lg:row-span-2">
            <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
              <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7c4dff,#4d7cff)] text-sm font-bold">S</span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">Agente Soluna</p>
                <p className="flex items-center gap-1.5 text-[0.72rem] text-white/60">
                  <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_#5ce6a8]" /> online · responde em segundos
                </p>
              </div>
            </div>
            <div className="mt-4 flex h-[26rem] flex-1 flex-col justify-end gap-2.5 overflow-hidden">
              {CONVO.map((t, i) => {
                const isTyping = r.typingIdx === i;
                const visible = i < r.full || isTyping;
                if (!visible) return null;
                const text = isTyping ? r.partial : t.text;
                if (t.from === "action") {
                  return (
                    <div key={i} className="flex justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.72rem] text-white/55">
                        <span className="typing-dot size-1.5 rounded-full bg-mint" />
                        {text}
                      </span>
                    </div>
                  );
                }
                return (
                  <div key={i} className={t.from === "user" ? "flex justify-end" : "flex justify-start"}>
                    <span
                      className={
                        t.from === "user"
                          ? "max-w-[80%] rounded-2xl rounded-br-sm bg-white/12 px-3.5 py-2 text-[0.9rem] text-white/90"
                          : "max-w-[80%] rounded-2xl rounded-bl-sm bg-[linear-gradient(135deg,rgba(124,77,255,0.35),rgba(77,124,255,0.28))] px-3.5 py-2 text-[0.9rem] text-white ring-1 ring-white/10"
                      }
                    >
                      {text}
                      {isTyping && <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[2px] self-stretch text-lilac">▍</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fluxo de nós (rede neural) */}
          <div className="glass-card rounded-[1.4rem] p-5 md:p-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">Fluxo do agente</p>
            <ul className="mt-4 space-y-2.5">
              {NODES.map((n, i) => (
                <li key={n} className="flex items-center gap-3">
                  <span className="relative flex size-2.5 shrink-0 items-center justify-center">
                    <span className="animate-node absolute inline-flex size-2.5 rounded-full bg-lilac" style={{ animationDelay: `${i * 0.3}s` }} />
                  </span>
                  <span className="text-[0.9rem] text-white/85">{n}</span>
                  {i < NODES.length - 1 && (
                    <svg aria-hidden className="ml-auto h-4 w-6 text-white/25" viewBox="0 0 24 16">
                      <line x1="1" y1="8" x2="23" y2="8" stroke="currentColor" strokeWidth="1.5" className="animate-flow" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Processamento em tempo real (micro-animações) */}
          <div className="glass-card rounded-[1.4rem] p-5 md:p-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">Processando</p>
            <ul className="mt-4 space-y-3">
              {STEPS.map((s, i) => (
                <li key={s}>
                  <p className="mb-1 text-[0.82rem] text-white/80">{s}</p>
                  <span className="block h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span className="animate-bar block h-full rounded-full bg-[linear-gradient(90deg,#7c4dff,#4d7cff,#3fc6f5)]" style={{ animationDelay: `${i * 0.5}s` }} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {CHANNELS.map((c, i) => (
                <span key={c} className="animate-chip rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[0.72rem] font-medium text-white/85" style={{ animationDelay: `${i * 0.35}s` }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Capacidades (§8) — o que um agente pode fazer */}
        <div className="mt-12 rounded-[1.4rem] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
          <p className="text-[0.95rem] text-white/70">Um agente de IA conectado aos sistemas da empresa pode:</p>
          <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[0.9rem] text-white/85">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-white/10 pt-5 text-[1.05rem] font-semibold text-white">
            A diferença não está apenas em conversar. Está na capacidade de <span className="text-gradient">agir dentro da operação</span>.
          </p>
        </div>
      </Container>
    </section>
  );
}
