"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, LoaderCircle, Sparkles } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { track } from "@/lib/track";
import { cx } from "@/components/ui";

export type WizardPain = { id: string; label: string; services: { name: string; href: string }[] };

type Answers = { setor: string; dores: string[]; volume: string; urgencia: string };

const VOLUMES = ["Até 200 por mês", "200 a 1.000 por mês", "1.000 a 5.000 por mês", "Mais de 5.000 por mês"];
const URGENCIAS = ["Quero começar agora", "Nos próximos 3 meses", "Estou pesquisando"];
const HIGH_VOLUME = VOLUMES.slice(2);
const MAX_PAINS = 3;

const inputCls =
  "mt-1.5 block w-full rounded-xl border border-line bg-[#f8f7fd] px-4 py-3 text-base text-ink placeholder:text-slate/60 transition-colors focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-400/15";

/** Diagnóstico sugerido: Completo quando há várias frentes, volume alto ou dados sensíveis. */
function suggestedTier(a: Answers) {
  return a.dores.length >= 2 || HIGH_VOLUME.includes(a.volume) || a.dores.includes("dados")
    ? { name: "Diagnóstico Completo", price: "a partir de R$ 5.000", why: "Há mais de uma frente para priorizar e o plano precisa de um roteiro por fases." }
    : { name: "Diagnóstico Essencial", price: "a partir de R$ 2.500", why: "O foco está em uma frente, o caminho mais rápido para o primeiro resultado." };
}

function Choice({
  type,
  name,
  value,
  checked,
  disabled,
  onChange,
  children,
}: {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label
      className={cx(
        "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[0.95rem] font-medium transition-colors",
        "has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-violet-400/25",
        checked ? "border-violet-400 bg-violet-50 text-ink" : "border-line bg-white text-ink hover:border-violet-400/60",
        disabled && !checked && "cursor-not-allowed opacity-50",
      )}
    >
      <input type={type} name={name} value={value} checked={checked} disabled={disabled && !checked} onChange={onChange} className="sr-only" />
      <span
        aria-hidden
        className={cx(
          "inline-flex size-5 shrink-0 items-center justify-center border transition-colors",
          type === "radio" ? "rounded-full" : "rounded-md",
          checked ? "border-violet-400 bg-violet-400 text-white" : "border-line bg-white",
        )}
      >
        {checked && <Check className="size-3.5" strokeWidth={3} />}
      </span>
      {children}
    </label>
  );
}

export function DiagnosticWizard({ sectors, pains }: { sectors: string[]; pains: WizardPain[] }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ setor: "", dores: [], volume: "", urgencia: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [summary, setSummary] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    // Leva o foco ao título da etapa ao avançar ou voltar (não no carregamento).
    if (moved.current) headingRef.current?.focus();
    moved.current = true;
  }, [step]);

  const selectedPains = pains.filter((p) => answers.dores.includes(p.id));
  const services = [...new Map(selectedPains.flatMap((p) => p.services).map((s) => [s.href, s])).values()].slice(0, 4);
  const tier = suggestedTier(answers);

  const steps = [
    { title: "Qual é o setor da sua empresa?", valid: !!answers.setor },
    { title: `Onde está o maior gargalo hoje? (até ${MAX_PAINS})`, valid: answers.dores.length > 0 },
    { title: "Volume e urgência", valid: !!answers.volume && !!answers.urgencia },
    { title: "Seu caminho recomendado", valid: true },
  ];
  const last = steps.length - 1;

  function next() {
    if (!steps[step].valid) return;
    track("diagnostico_etapa", { etapa: step + 2 });
    setStep((s) => Math.min(s + 1, last));
  }

  function togglePain(id: string) {
    setAnswers((a) => ({
      ...a,
      dores: a.dores.includes(id) ? a.dores.filter((d) => d !== id) : a.dores.length < MAX_PAINS ? [...a.dores, id] : a.dores,
    }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step !== last) return next();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const dores = selectedPains.map((p) => p.label).join("; ");
    const desafio = [`Setor: ${answers.setor}`, `Gargalos: ${dores}`, `Volume de contatos: ${answers.volume}`, `Urgência: ${answers.urgencia}`, data.observacao && `Observação: ${data.observacao}`]
      .filter(Boolean)
      .join(" | ");
    const resumo = `Olá! Sou ${data.nome} (${data.empresa}), do setor ${answers.setor}. Nosso maior gargalo: ${dores}. Sugestão do site: ${tier.name}.`;
    setSummary(resumo);
    setStatus("sending");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome,
          empresa: data.empresa,
          whatsapp: data.whatsapp,
          email: data.email,
          consentimento: data.consentimento,
          site: data.site,
          desafio,
          interesse: tier.name,
          setor: answers.setor,
          dores,
          volume: answers.volume,
          urgencia: answers.urgencia,
          recomendacao: services.map((s) => s.name).join("; "),
          origem: "diagnostico-etapas",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("generate_lead", { origem: "diagnostico-etapas" });
      try {
        sessionStorage.setItem("lead-resumo", resumo);
      } catch {}
      router.push("/obrigado/?origem=diagnostico-etapas");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" aria-labelledby="wizard-titulo">
      <div>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate">
          <span>
            Etapa {step + 1} de {steps.length}
          </span>
          <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist"
          role="progressbar"
          aria-label="Progresso do diagnóstico"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={step + 1}
        >
          <div className="bg-brand h-full rounded-full transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      <h3 id="wizard-titulo" ref={headingRef} tabIndex={-1} className="text-lg font-bold outline-none">
        {steps[step].title}
      </h3>

      {step === 0 && (
        <fieldset className="grid gap-2.5 sm:grid-cols-2">
          <legend className="sr-only">{steps[0].title}</legend>
          {sectors.map((s) => (
            <Choice key={s} type="radio" name="setor" value={s} checked={answers.setor === s} onChange={() => setAnswers((a) => ({ ...a, setor: s }))}>
              {s}
            </Choice>
          ))}
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="grid gap-2.5">
          <legend className="sr-only">{steps[1].title}</legend>
          {pains.map((p) => (
            <Choice
              key={p.id}
              type="checkbox"
              name="dores"
              value={p.id}
              checked={answers.dores.includes(p.id)}
              disabled={answers.dores.length >= MAX_PAINS}
              onChange={() => togglePain(p.id)}
            >
              {p.label}
            </Choice>
          ))}
        </fieldset>
      )}

      {step === 2 && (
        <div className="grid gap-6">
          <fieldset className="grid gap-2.5 sm:grid-cols-2">
            <legend className="mb-2.5 text-sm font-semibold text-ink">Contatos de clientes por mês (WhatsApp, site, telefone)</legend>
            {VOLUMES.map((v) => (
              <Choice key={v} type="radio" name="volume" value={v} checked={answers.volume === v} onChange={() => setAnswers((a) => ({ ...a, volume: v }))}>
                {v}
              </Choice>
            ))}
          </fieldset>
          <fieldset className="grid gap-2.5">
            <legend className="mb-2.5 text-sm font-semibold text-ink">Quando quer resolver?</legend>
            {URGENCIAS.map((u) => (
              <Choice key={u} type="radio" name="urgencia" value={u} checked={answers.urgencia === u} onChange={() => setAnswers((a) => ({ ...a, urgencia: u }))}>
                {u}
              </Choice>
            ))}
          </fieldset>
        </div>
      )}

      {step === last && (
        <div className="grid gap-5">
          <div className="rounded-2xl bg-mist p-5 ring-1 ring-line/60">
            <p className="flex items-center gap-2 text-sm font-semibold text-violet">
              <Sparkles aria-hidden className="size-4" /> Pelas suas respostas
            </p>
            <p className="mt-3 text-[0.95rem] text-ink">
              <strong>{tier.name}</strong> <span className="text-slate">({tier.price})</span>. {tier.why}
            </p>
            {services.length > 0 && (
              <>
                <p className="mt-4 text-sm font-semibold text-ink">Soluções com mais chance de retorno:</p>
                <ul className="mt-2 grid gap-1.5">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} target="_blank" className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-signal underline-offset-2 hover:underline">
                        <ArrowRight aria-hidden className="size-3.5" /> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="mt-4 text-xs text-slate">Indicação preliminar, confirmada na conversa do Diagnóstico.</p>
          </div>

          <p className="text-[0.95rem] text-slate">Deixe seu contato para receber o plano. Respondemos em até 1 dia útil.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Nome
              <input name="nome" required autoComplete="name" className={inputCls} placeholder="Seu nome" />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Empresa
              <input name="empresa" required autoComplete="organization" className={inputCls} placeholder="Nome da empresa" />
            </label>
            <label className="block text-sm font-semibold text-ink">
              WhatsApp
              <input name="whatsapp" required type="tel" inputMode="tel" autoComplete="tel" pattern="[\d\s\(\)\+\-]{10,20}" className={inputCls} placeholder="(83) 99999-9999" />
            </label>
            <label className="block text-sm font-semibold text-ink">
              E-mail <span className="font-normal text-slate">(opcional)</span>
              <input name="email" type="email" autoComplete="email" className={inputCls} placeholder="voce@empresa.com.br" />
            </label>
          </div>
          <label className="block text-sm font-semibold text-ink">
            Quer contar mais alguma coisa? <span className="font-normal text-slate">(opcional)</span>
            <textarea name="observacao" rows={3} className={inputCls} placeholder="Ex.: usamos o sistema X na agenda e temos 3 recepcionistas." />
          </label>
          {/* Honeypot anti-spam */}
          <input type="text" name="site" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <label className="flex items-start gap-3 text-sm text-slate">
            <input type="checkbox" name="consentimento" value="sim" required className="mt-1 size-4 shrink-0 accent-violet-400" />
            <span>
              Concordo em ser contatado(a) pela {site.name} sobre este pedido, conforme a{" "}
              <Link href="/privacidade/" className="font-medium text-signal underline underline-offset-2">
                Política de Privacidade
              </Link>
              .
            </span>
          </label>
        </div>
      )}

      <div className="flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-slate transition-colors hover:bg-mist hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" /> Voltar
          </button>
        )}
        <button
          type="submit"
          disabled={!steps[step].valid || status === "sending"}
          className="bg-brand ml-auto inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
        >
          {status === "sending" && <LoaderCircle aria-hidden className="size-4 animate-spin" />}
          {step === last ? (status === "sending" ? "Enviando…" : "Receber meu plano") : "Continuar"}
          {step !== last && <ArrowRight aria-hidden className="size-4" />}
        </button>
      </div>

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
