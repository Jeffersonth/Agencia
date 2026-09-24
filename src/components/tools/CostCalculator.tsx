"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/track";
import { ReportRequest } from "./ReportRequest";

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const num = (v: number, digits = 0) => v.toLocaleString("pt-BR", { maximumFractionDigits: digits });

/** Horas por mês que cada cobertura exige, por posição de atendimento. */
const coverages = [
  { id: "comercial", label: "Horário comercial (seg. a sex., 9h às 18h)", hours: 198 },
  { id: "estendido", label: "Estendido (seg. a sáb., 8h às 20h)", hours: 312 },
  { id: "24h", label: "24 horas, todos os dias", hours: 730 },
];

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {hint && <span className="mt-0.5 block text-xs text-slate">{hint}</span>}
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const inputCls =
  "block w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-base tabular-nums text-ink focus:border-signal focus:outline-none focus:ring-4 focus:ring-signal/15";

const clamp = (v: number, min: number, max: number) => (Number.isFinite(v) ? Math.max(min, Math.min(max, v)) : min);

export function CostCalculator() {
  const [contacts, setContacts] = useState(1500);
  const [minutes, setMinutes] = useState(6);
  const [repetitive, setRepetitive] = useState(60);
  const [monthlyCost, setMonthlyCost] = useState(3500);
  const [productiveHours, setProductiveHours] = useState(130);
  const [coverage, setCoverage] = useState("estendido");
  const tracked = useRef(false);
  const onInteract = () => {
    if (tracked.current) return;
    tracked.current = true;
    track("tool_use", { tool: "calculadora_custo_atendimento" });
  };

  const r = useMemo(() => {
    const perHour = monthlyCost / Math.max(1, productiveHours);
    const hours = (Math.max(0, contacts) * clamp(minutes, 0, 240)) / 60;
    const repetitiveHours = hours * (clamp(repetitive, 0, 100) / 100);
    const repetitiveCost = repetitiveHours * perHour;
    const fte = hours / Math.max(1, productiveHours);
    const cov = coverages.find((c) => c.id === coverage)!;
    // Pessoas necessárias para manter ao menos uma posição de atendimento aberta durante toda a cobertura.
    const coverageFte = cov.hours / Math.max(1, productiveHours);
    const extraCoverageFte = Math.max(0, coverageFte - coverages[0].hours / Math.max(1, productiveHours));
    const extraCoverageCost = extraCoverageFte * monthlyCost;
    return { hours, repetitiveHours, repetitiveCost, fte, coverageFte, extraCoverageFte, extraCoverageCost, ceiling: repetitiveCost + extraCoverageCost, cov };
  }, [contacts, minutes, repetitive, monthlyCost, productiveHours, coverage]);

  const summary = `Calculadora de custo do atendimento: ${num(contacts)} atendimentos/mês, ${minutes} min cada, ${repetitive}% repetitivos, custo por pessoa ${brl(
    monthlyCost,
  )}/mês, cobertura "${r.cov.label}". Trabalho repetitivo: ${num(r.repetitiveHours)} h/mês (${brl(r.repetitiveCost)}); cobertura extra com pessoas: ${brl(
    r.extraCoverageCost,
  )}/mês.`;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <div onChange={onInteract} className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60 md:p-8">
        <h2 className="text-xl font-semibold">Seu atendimento hoje</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Atendimentos por mês" hint="WhatsApp, telefone, site e e-mail">
            <input type="number" min={0} className={inputCls} value={contacts} onChange={(e) => setContacts(Number(e.target.value))} />
          </Field>
          <Field label="Minutos por atendimento" hint="Tempo médio de uma pessoa, do início ao registro">
            <input type="number" min={0} className={inputCls} value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />
          </Field>
          <Field label="Atendimentos repetitivos (%)" hint="Dúvidas frequentes, agendamento, status, segunda via">
            <input type="number" min={0} max={100} className={inputCls} value={repetitive} onChange={(e) => setRepetitive(Number(e.target.value))} />
          </Field>
          <Field label="Custo mensal por atendente (R$)" hint="Salário + encargos + benefícios">
            <input type="number" min={0} className={inputCls} value={monthlyCost} onChange={(e) => setMonthlyCost(Number(e.target.value))} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Cobertura que você quer oferecer">
            <select className={inputCls} value={coverage} onChange={(e) => setCoverage(e.target.value)}>
              {coverages.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <details className="mt-6 rounded-xl bg-mist p-4 text-sm">
          <summary className="cursor-pointer font-semibold">Premissas (ajuste se quiser)</summary>
          <p className="mt-3 text-slate">
            Consideramos as horas realmente disponíveis para atender, descontando pausas, reuniões, férias e faltas. Para cobrir um horário maior com
            pessoas, calculamos quantos atendentes são necessários para manter ao menos uma posição aberta o tempo todo.
          </p>
          <div className="mt-4">
            <Field label={`Horas produtivas por atendente: ${productiveHours} h/mês`}>
              <input type="range" min={80} max={180} value={productiveHours} onChange={(e) => setProductiveHours(Number(e.target.value))} className="w-full accent-signal" />
            </Field>
          </div>
        </details>
      </div>

      <div aria-live="polite" className="flex flex-col gap-5">
        <div className="rounded-[var(--radius-card)] bg-navy p-7 text-white md:p-9">
          <p className="text-sm font-medium text-white/65">Custo mensal do trabalho repetitivo</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            {brl(r.repetitiveCost)}
            <span className="ml-2 text-lg font-medium text-white/60">/mês</span>
          </p>
          <p className="mt-2 text-white/70">
            {num(r.repetitiveHours)} horas por mês em atendimentos que um agente de IA pode assumir.
          </p>
          <dl className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-white/60">Equipe equivalente ao volume atual</dt>
              <dd className="mt-1 text-2xl font-semibold text-accent">{num(r.fte, 1)} pessoas</dd>
            </div>
            <div>
              <dt className="text-sm text-white/60">Para cobrir além do horário comercial com pessoas</dt>
              <dd className="mt-1 text-2xl font-semibold text-accent">
                {r.extraCoverageFte > 0 ? `+${brl(r.extraCoverageCost)}/mês` : "—"}
              </dd>
            </div>
          </dl>
          <div className="mt-6 rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/10">
            <p className="text-sm text-white/70">Um agente de IA se paga enquanto custar, por mês, menos que</p>
            <p className="mt-1 text-3xl font-semibold text-white">{brl(r.ceiling)}</p>
            <p className="mt-1 text-xs text-white/55">Soma do trabalho repetitivo com a cobertura extra que ele substitui.</p>
          </div>
          <p className="mt-6 text-xs text-white/50">
            Estimativa ilustrativa a partir dos seus números, não é promessa de resultado. Casos sensíveis, negociações e reclamações continuam com a
            equipe.
          </p>
        </div>
        <ReportRequest origin="calculadora-custo" summary={summary} title="Receba a análise do seu caso com o custo real do agente" />
        <p className="text-sm text-slate">
          Quer comparar os dois cenários com calma? Leia{" "}
          <Link href="/conteudo/comparativos/agente-de-ia-vs-contratar-atendente/" className="font-semibold text-signal underline underline-offset-2">
            Agente de IA vs contratar mais um atendente
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
