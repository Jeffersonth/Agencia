"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ReportRequest } from "./ReportRequest";

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const num = (v: number) => v.toLocaleString("pt-BR", { maximumFractionDigits: 0 });

/**
 * Redução estimada da conversão por faixa de tempo de primeira resposta, em
 * relação a uma resposta imediata. Premissas conservadoras e ajustáveis pelo usuário.
 */
const responseBuckets = [
  { id: "5m", label: "Até 5 minutos", loss: 5 },
  { id: "30m", label: "De 5 a 30 minutos", loss: 15 },
  { id: "2h", label: "De 30 minutos a 2 horas", loss: 25 },
  { id: "12h", label: "De 2 a 12 horas", loss: 35 },
  { id: "1d", label: "No dia seguinte ou mais", loss: 45 },
];

const IMPLANTACAO_AGENTE = 7500;

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

export function RoiCalculator() {
  const [leads, setLeads] = useState(300);
  const [ticket, setTicket] = useState(1500);
  const [conversion, setConversion] = useState(10);
  const [bucket, setBucket] = useState("2h");
  const [offHours, setOffHours] = useState(35);
  const [lossIn, setLossIn] = useState(25);
  const [lossOff, setLossOff] = useState(45);

  const result = useMemo(() => {
    const c = Math.max(0, Math.min(100, conversion)) / 100;
    const o = Math.max(0, Math.min(100, offHours)) / 100;
    const li = Math.max(0, Math.min(90, lossIn)) / 100;
    const lo = Math.max(0, Math.min(90, lossOff)) / 100;
    // Conversão observada hoje = conversão com resposta imediata × fator de perda médio.
    const factor = (1 - o) * (1 - li) + o * (1 - lo);
    const c0 = factor > 0 ? Math.min(1, c / factor) : c;
    const salesNow = leads * c;
    const salesPotential = leads * c0;
    const lostSales = Math.max(0, salesPotential - salesNow);
    const lostRevenue = lostSales * ticket;
    const conservative = lostRevenue / 2;
    const payback = conservative > 0 ? IMPLANTACAO_AGENTE / conservative : Infinity;
    return { salesNow, lostSales, lostRevenue, conservative, payback, yearly: conservative * 12 };
  }, [leads, ticket, conversion, offHours, lossIn, lossOff]);

  const summary = `Calculadora de ROI: ${num(leads)} contatos/mês, ticket ${brl(ticket)}, conversão ${conversion}%, resposta ${
    responseBuckets.find((b) => b.id === bucket)?.label
  }, ${offHours}% fora do horário. Perda estimada: ${brl(result.lostRevenue)}/mês (conservador: ${brl(result.conservative)}).`;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
        <h2 className="text-xl font-semibold">Seus números</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Contatos (leads) por mês">
            <input type="number" min={0} className={inputCls} value={leads} onChange={(e) => setLeads(Number(e.target.value))} />
          </Field>
          <Field label="Ticket médio (R$)">
            <input type="number" min={0} className={inputCls} value={ticket} onChange={(e) => setTicket(Number(e.target.value))} />
          </Field>
          <Field label="Conversão atual (%)" hint="De cada 100 contatos, quantos compram">
            <input type="number" min={0} max={100} className={inputCls} value={conversion} onChange={(e) => setConversion(Number(e.target.value))} />
          </Field>
          <Field label="Contatos fora do horário (%)" hint="Noite, madrugada e fim de semana">
            <input type="number" min={0} max={100} className={inputCls} value={offHours} onChange={(e) => setOffHours(Number(e.target.value))} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Tempo médio da primeira resposta (no horário comercial)">
            <select
              className={inputCls}
              value={bucket}
              onChange={(e) => {
                setBucket(e.target.value);
                setLossIn(responseBuckets.find((b) => b.id === e.target.value)!.loss);
              }}
            >
              {responseBuckets.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <details className="mt-6 rounded-xl bg-mist p-4 text-sm">
          <summary className="cursor-pointer font-semibold">Premissas (ajuste se quiser)</summary>
          <p className="mt-3 text-slate">
            Quanto mais um contato espera, menor a chance de ele comprar. Estimamos quanto a demora reduz a conversão em relação a uma resposta
            imediata. Os valores padrão são conservadores; use a sua experiência.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label={`Redução no horário comercial: ${lossIn}%`}>
              <input type="range" min={0} max={80} value={lossIn} onChange={(e) => setLossIn(Number(e.target.value))} className="w-full accent-signal" />
            </Field>
            <Field label={`Redução fora do horário: ${lossOff}%`}>
              <input type="range" min={0} max={80} value={lossOff} onChange={(e) => setLossOff(Number(e.target.value))} className="w-full accent-signal" />
            </Field>
          </div>
        </details>
      </div>

      <div aria-live="polite" className="flex flex-col gap-5">
        <div className="rounded-[var(--radius-card)] bg-navy p-7 text-white md:p-9">
          <p className="text-sm font-medium text-white/65">Receita que a demora pode estar custando</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            {brl(result.lostRevenue)}
            <span className="ml-2 text-lg font-medium text-white/60">/mês</span>
          </p>
          <p className="mt-2 text-white/70">≈ {num(result.lostSales)} vendas a mais por mês com resposta imediata.</p>
          <dl className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-white/60">Cenário conservador (recuperar metade)</dt>
              <dd className="mt-1 text-2xl font-semibold text-accent">{brl(result.conservative)}/mês</dd>
            </div>
            <div>
              <dt className="text-sm text-white/60">Retorno sobre a implantação*</dt>
              <dd className="mt-1 text-2xl font-semibold text-accent">
                {Number.isFinite(result.payback) ? (result.payback < 1 ? "< 1 mês" : `${result.payback.toFixed(1).replace(".", ",")} meses`) : "—"}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-white/50">
            * Considerando a implantação de um Agente de IA para WhatsApp a partir de {brl(IMPLANTACAO_AGENTE)}, sem incluir sustentação e consumo.
            Estimativa ilustrativa, não é promessa de resultado.
          </p>
        </div>
        <ReportRequest origin="calculadora-roi" summary={summary} title="Receba o relatório completo com a análise do seu caso" />
        <p className="text-sm text-slate">
          Quer o número exato? No{" "}
          <Link href="/diagnostico/" className="font-semibold text-signal underline underline-offset-2">
            Diagnóstico
          </Link>{" "}
          medimos com os seus dados reais.
        </p>
      </div>
    </div>
  );
}
