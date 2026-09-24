"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUp, MessageCircle, Sparkles, X } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { track } from "@/lib/track";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = ["Quanto custa um agente de IA?", "Como funciona o Diagnóstico?", "Vocês atendem clínicas?"];

/** Links permitidos na resposta: páginas do próprio site e o WhatsApp da empresa. */
function safeHref(href: string) {
  if (href.startsWith("/") && !href.startsWith("//")) return href;
  if (href.startsWith("https://wa.me/")) return href;
  return null;
}

function renderText(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const href = safeHref(link[2]);
      if (!href) return <Fragment key={i}>{link[1]}</Fragment>;
      return href.startsWith("/") ? (
        <Link key={i} href={href} className="font-semibold text-signal underline underline-offset-2">
          {link[1]}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-signal underline underline-offset-2">
          {link[1]}
        </a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    return bold ? <strong key={i}>{bold[1]}</strong> : <Fragment key={i}>{part}</Fragment>;
  });
}

export function ChatWidget() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch("/api/chat/")
      .then((r) => (r.ok ? r.json() : { enabled: false }))
      .then((d: { enabled?: boolean }) => setEnabled(Boolean(d.enabled)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    // O botão volta a existir no próximo render.
    requestAnimationFrame(() => launcherRef.current?.focus());
  }

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const history: Msg[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    inputRef.current?.focus();
    track("chat_message", { turno: history.filter((m) => m.role === "user").length });
    const update = (reply: string) => setMessages([...history, { role: "assistant", content: reply }]);
    try {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (res.status === 429) return update("Muitas mensagens em pouco tempo. Tente de novo em alguns minutos ou fale com a equipe pelo WhatsApp.");
      if (!res.ok || !res.body) throw new Error(String(res.status));
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        update(reply);
      }
      if (!reply.trim()) update("Não consegui responder agora. Tente de novo ou fale com a equipe pelo WhatsApp.");
    } catch {
      update("Não consegui responder agora. Tente de novo ou fale com a equipe pelo WhatsApp.");
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  if (!enabled) return null;

  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => {
            setOpen(true);
            track("chat_open");
          }}
          className="bg-brand fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
        >
          <MessageCircle aria-hidden className="size-5" /> Pergunte à IA
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-label={`Assistente de IA da ${site.name}`}
          className="fixed inset-x-3 bottom-3 top-20 z-40 flex flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-float)] ring-1 ring-line sm:inset-x-auto sm:right-5 sm:top-auto sm:h-[36rem] sm:w-[24rem]"
        >
          <header className="flex items-center gap-3 bg-[#221963] px-5 py-4 text-white">
            <span className="bg-brand inline-flex size-9 items-center justify-center rounded-full">
              <Sparkles aria-hidden className="size-4" />
            </span>
            <div className="flex-1">
              <p className="font-semibold leading-tight">Assistente {site.name}</p>
              <p className="text-xs text-white/65">IA · responde com base no conteúdo do site</p>
            </div>
            <button type="button" onClick={close} aria-label="Fechar o chat" className="rounded-full p-2 text-white/75 hover:bg-white/10 hover:text-white">
              <X aria-hidden className="size-5" />
            </button>
          </header>

          <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto bg-mist/60 p-4">
            <p className="max-w-[90%] rounded-2xl rounded-tl-md bg-white p-3.5 text-[0.95rem] text-ink ring-1 ring-line/60">
              Olá! Sou o assistente virtual da {site.name}. Posso explicar nossas soluções, preços de referência, setores e como funciona o Diagnóstico.
            </p>
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full bg-white px-3.5 py-2 text-sm font-medium text-signal ring-1 ring-signal/30 hover:bg-signal-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) =>
              m.role === "user" ? (
                <p key={i} className="bg-brand ml-auto max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-md p-3.5 text-[0.95rem] text-white">
                  {m.content}
                </p>
              ) : (
                <p key={i} className="max-w-[90%] whitespace-pre-wrap rounded-2xl rounded-tl-md bg-white p-3.5 text-[0.95rem] text-ink ring-1 ring-line/60">
                  {m.content ? renderText(m.content) : <span className="text-slate">Escrevendo…</span>}
                </p>
              ),
            )}
          </div>

          <form onSubmit={onSubmit} className="border-t border-line bg-white p-3">
            <div className="flex items-end gap-2">
              <label htmlFor="chat-input" className="sr-only">
                Sua pergunta
              </label>
              <textarea
                id="chat-input"
                ref={inputRef}
                rows={1}
                maxLength={1200}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Escreva sua pergunta…"
                className="max-h-32 flex-1 resize-none rounded-2xl border border-line bg-[#f8f7fd] px-4 py-2.5 text-base text-ink placeholder:text-slate/60 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-400/15"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Enviar"
                className="bg-brand inline-flex size-11 shrink-0 items-center justify-center rounded-full text-white disabled:opacity-50"
              >
                <ArrowUp aria-hidden className="size-5" />
              </button>
            </div>
            <p className="mt-2 px-1 text-[0.72rem] leading-snug text-slate">
              Assistente com IA: pode errar. Não envie dados pessoais sensíveis.{" "}
              <a href={whatsappLink("Olá! Vim pelo chat do site.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-signal underline">
                Falar com uma pessoa
              </a>
            </p>
          </form>
        </section>
      )}
    </>
  );
}
