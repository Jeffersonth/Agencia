"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/Icon";

/** Oferece continuar a conversa no WhatsApp com o resumo do formulário. */
export function ContinueOnWhatsApp() {
  const [summary, setSummary] = useState<string | undefined>();
  useEffect(() => {
    try {
      // Lido no cliente: a página é estática.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSummary(sessionStorage.getItem("lead-resumo") ?? undefined);
    } catch {}
  }, []);
  return (
    <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
      <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_#5ce6a8]" />
      Tem pressa?{" "}
      <a href={whatsappLink(summary)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-mint hover:underline">
        <WhatsAppGlyph className="size-4" /> Continue pelo WhatsApp
      </a>
    </p>
  );
}
