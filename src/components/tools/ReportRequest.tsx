"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { track } from "@/lib/track";

const inputCls =
  "block w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-base text-ink placeholder:text-slate/60 focus:border-signal focus:outline-none focus:ring-4 focus:ring-signal/15";

/** Pedido do relatório completo: o resultado básico nunca exige cadastro. */
export function ReportRequest({ origin, summary, title }: { origin: string; summary: string; title: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    setState("sending");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, empresa: data.empresa || "-", desafio: summary, origem: origin }),
      });
      setState(res.ok ? "ok" : "error");
      if (res.ok) track("generate_lead", { origem: origin });
    } catch {
      setState("error");
    }
  }

  if (state === "ok")
    return (
      <p role="status" className="flex items-center gap-3 rounded-2xl bg-accent-50 p-5 font-medium text-accent-strong">
        <CircleCheck aria-hidden className="size-5 shrink-0" /> Pronto! Enviaremos o relatório completo em até 1 dia útil.
      </p>
    );

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-mist p-6">
      <p className="font-semibold">{title}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <label className="sr-only" htmlFor={`${origin}-nome`}>
          Nome
        </label>
        <input id={`${origin}-nome`} name="nome" required placeholder="Seu nome" autoComplete="name" className={inputCls} />
        <label className="sr-only" htmlFor={`${origin}-whats`}>
          WhatsApp
        </label>
        <input id={`${origin}-whats`} name="whatsapp" required type="tel" placeholder="WhatsApp" autoComplete="tel" className={inputCls} />
        <label className="sr-only" htmlFor={`${origin}-email`}>
          E-mail
        </label>
        <input id={`${origin}-email`} name="email" type="email" placeholder="E-mail (opcional)" autoComplete="email" className={inputCls} />
      </div>
      <input type="text" name="site" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="mt-4 flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="consentimento" value="sim" required className="mt-1 size-4 accent-signal" />
        <span>
          Aceito receber o relatório e o contato sobre ele, conforme a{" "}
          <Link href="/privacidade/" className="text-signal underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-signal px-5 py-3 font-semibold text-white hover:bg-signal-600 disabled:opacity-70"
      >
        {state === "sending" ? "Enviando…" : "Receber relatório completo"}
      </button>
      {state === "error" && <p className="mt-3 text-sm text-amber-800">Não foi possível enviar agora. Tente de novo em instantes.</p>}
    </form>
  );
}
