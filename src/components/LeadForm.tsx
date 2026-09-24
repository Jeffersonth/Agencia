"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CircleCheck, LoaderCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/Icon";
import { track } from "@/lib/track";

type Status = "idle" | "sending" | "ok" | "error";

const inputCls =
  "mt-1.5 block w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-base text-ink placeholder:text-slate/60 transition-colors focus:border-signal focus:outline-none focus:ring-4 focus:ring-signal/15";

export function LeadForm({
  origin,
  submitLabel = "Agendar Diagnóstico",
  options,
  defaultOption,
}: {
  origin: string;
  submitLabel?: string;
  options?: string[];
  defaultOption?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [summary, setSummary] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setSummary(`Olá! Sou ${data.nome} (${data.empresa}). ${data.desafio}`);
    setStatus("sending");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, origem: origin }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      track("generate_lead", { origem: origin });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-accent/30 bg-accent-50 p-8 text-center">
        <CircleCheck aria-hidden className="mx-auto size-10 text-accent-strong" />
        <h3 className="mt-4 text-2xl font-semibold">Recebemos seu pedido.</h3>
        <p className="mt-2 text-slate">Entramos em contato em até 1 dia útil pelo WhatsApp informado. Se preferir, fale agora com o nosso agente:</p>
        <a
          href={whatsappLink(summary)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 font-semibold text-white hover:bg-navy-700"
        >
          <WhatsAppGlyph className="size-4 text-accent" /> Continuar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Nome
          <input name="nome" required autoComplete="name" className={inputCls} placeholder="Seu nome" />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Empresa
          <input name="empresa" required autoComplete="organization" className={inputCls} placeholder="Nome da empresa" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          WhatsApp
          <input
            name="whatsapp"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[\d\s()+\-]{10,20}"
            className={inputCls}
            placeholder="(83) 99999-9999"
          />
        </label>
        {options ? (
          <label className="block text-sm font-semibold text-ink">
            Interesse
            <select name="interesse" defaultValue={defaultOption ?? options[0]} className={inputCls}>
              {options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        ) : (
          <label className="block text-sm font-semibold text-ink">
            E-mail <span className="font-normal text-slate">(opcional)</span>
            <input name="email" type="email" autoComplete="email" className={inputCls} placeholder="voce@empresa.com.br" />
          </label>
        )}
      </div>
      <label className="block text-sm font-semibold text-ink">
        Principal desafio
        <textarea
          name="desafio"
          required
          rows={4}
          className={inputCls}
          placeholder="Ex.: perdemos muitos contatos à noite no WhatsApp e a recepção não dá conta."
        />
      </label>
      {/* Honeypot anti-spam */}
      <input type="text" name="site" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="consentimento" value="sim" required className="mt-1 size-4 shrink-0 accent-signal" />
        <span>
          Concordo em ser contatado(a) pela {site.name} sobre este pedido, conforme a{" "}
          <Link href="/privacidade/" className="font-medium text-signal underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgb(11_95_255/0.6)] transition-all hover:bg-signal-600 disabled:opacity-70"
      >
        {status === "sending" && <LoaderCircle aria-hidden className="size-4 animate-spin" />}
        {status === "sending" ? "Enviando…" : submitLabel}
      </button>
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          Não conseguimos enviar agora.{" "}
          <a href={whatsappLink(summary)} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Envie pelo WhatsApp
          </a>{" "}
          e respondemos por lá.
        </p>
      )}
    </form>
  );
}
