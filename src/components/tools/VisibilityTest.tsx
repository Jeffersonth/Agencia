"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, CircleX, LoaderCircle } from "lucide-react";
import type { VisibilityReport } from "@/lib/visibility";
import { cx } from "@/components/ui";
import { track } from "@/lib/track";
import { ReportRequest } from "./ReportRequest";

const statusIcon = {
  ok: <CircleCheck aria-label="OK" className="size-5 shrink-0 text-accent-strong" />,
  warn: <CircleAlert aria-label="Atenção" className="size-5 shrink-0 text-amber-600" />,
  fail: <CircleX aria-label="Falha" className="size-5 shrink-0 text-red-600" />,
};

function ScoreRing({ score }: { score: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const color = score >= 80 ? "#12B76A" : score >= 55 ? "#F79009" : "#F04438";
  return (
    <svg viewBox="0 0 120 120" className="size-36" role="img" aria-label={`Pontuação ${score} de 100`}>
      <circle cx="60" cy="60" r={r} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="10" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${(score / 100) * c} ${c}`}
        transform="rotate(-90 60 60)"
      />
      <text x="60" y="66" textAnchor="middle" className="fill-white text-[28px] font-semibold">
        {score}
      </text>
    </svg>
  );
}

export function VisibilityTest() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [report, setReport] = useState<VisibilityReport | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setReport(null);
    try {
      const res = await fetch("/api/visibilidade/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao analisar.");
      setReport(data);
      track("tool_use", { tool: "teste_visibilidade", score: data.score });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao analisar.");
    } finally {
      setLoading(false);
    }
  }

  const summary = report
    ? `Teste de Visibilidade em IA: ${report.url} — pontuação ${report.score}/100. Pendências: ${
        report.checks
          .filter((c) => c.status !== "ok")
          .map((c) => c.label)
          .join("; ") || "nenhuma"
      }.`
    : "";

  return (
    <div>
      <form onSubmit={onSubmit} className="flex max-w-3xl flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-white p-4 shadow-[var(--shadow-lift)] sm:flex-row">
        <label htmlFor="site-url" className="sr-only">
          Endereço do site
        </label>
        <input
          id="site-url"
          type="text"
          inputMode="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="seusite.com.br"
          className="min-w-0 flex-1 rounded-xl border border-line-strong px-4 py-3.5 text-base focus:border-signal focus:outline-none focus:ring-4 focus:ring-signal/15"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-signal px-6 py-3.5 font-semibold text-white hover:bg-signal-600 disabled:opacity-70"
        >
          {loading && <LoaderCircle aria-hidden className="size-4 animate-spin" />}
          {loading ? "Analisando…" : "Analisar meu site"}
        </button>
      </form>
      <p className="mt-3 text-sm text-slate">Sem cadastro. Analisamos apenas páginas públicas do site informado.</p>

      {error && (
        <p role="alert" className="mt-6 rounded-xl bg-amber-50 p-4 text-amber-900">
          {error}
        </p>
      )}

      {report && (
        <div aria-live="polite" className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex flex-col items-center rounded-[var(--radius-card)] bg-navy p-8 text-center text-white">
              <ScoreRing score={report.score} />
              <p className="mt-4 text-lg font-semibold">Prontidão técnica para IAs</p>
              <p className="mt-1 break-all text-sm text-white/60">{report.finalUrl}</p>
              <p className="mt-4 text-sm text-white/70">
                Este é um retrato técnico. Presença real nas respostas das IAs é medida na Auditoria, com perguntas do seu mercado.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <h3 className="font-semibold">Robôs no robots.txt</h3>
              <ul className="mt-4 divide-y divide-line text-sm">
                {report.bots.map((b) => (
                  <li key={b.name} className="flex items-center justify-between gap-3 py-2.5">
                    <span>
                      <span className="font-medium">{b.name}</span>
                      <span className="block text-xs text-slate">
                        {b.owner} · {b.purpose}
                      </span>
                    </span>
                    <span
                      className={cx(
                        "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        b.allowed ? "bg-accent-50 text-accent-strong" : b.purpose === "busca" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-800",
                      )}
                    >
                      {b.allowed ? "Liberado" : "Bloqueado"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <ul className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
              {report.checks.map((c) => (
                <li key={c.id} className="flex gap-4 p-5">
                  {statusIcon[c.status]}
                  <span>
                    <span className="block font-semibold">{c.label}</span>
                    <span className="mt-0.5 block text-[0.95rem] text-slate">{c.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
            <ReportRequest origin="teste-visibilidade" summary={summary} title="Receba o relatório completo, com o plano de correção" />
            <p className="text-sm text-slate">
              Quer saber se as IAs citam a sua marca — ou o concorrente?{" "}
              <Link href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" className="font-semibold text-signal underline underline-offset-2">
                Conheça a Auditoria de Visibilidade em IA
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
