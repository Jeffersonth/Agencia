"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { track } from "@/lib/track";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "consentimento-cookies";

function readConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * GA4 com Consent Mode: a medição só usa cookies depois do aceite (LGPD).
 * Sem NEXT_PUBLIC_GA_ID, nada é carregado nem exibido.
 */
export function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null | "loading">("loading");

  useEffect(() => {
    // Lido no cliente: o HTML estático não conhece a escolha do visitante.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(readConsent());
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (a?.href.includes("wa.me/")) track("whatsapp_click", { link_text: a.textContent?.trim().slice(0, 60) ?? "" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  function choose(value: "granted" | "denied") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("consent", "update", { analytics_storage: value });
  }

  return (
    <>
      <Script id="ga-consent" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
var c=null;try{c=localStorage.getItem('${STORAGE_KEY}')}catch(e){}
gtag('consent','default',{analytics_storage:c==='granted'?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      {consent === null && (
        <div
          role="dialog"
          aria-label="Preferências de cookies"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-float)] sm:p-6"
        >
          <p className="text-[0.95rem] text-ink">
            Usamos cookies de medição para entender como o site é usado e melhorá-lo. Você pode aceitar ou recusar.{" "}
            <Link href="/privacidade/" className="text-signal underline underline-offset-2">
              Saiba mais
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => choose("granted")} className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white hover:bg-signal-600">
              Aceitar
            </button>
            <button type="button" onClick={() => choose("denied")} className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink">
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
