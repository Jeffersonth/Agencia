"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatWidget = dynamic(() => import("./ChatWidget").then((m) => m.ChatWidget), { ssr: false });

/**
 * O balão de chat não é crítico para a primeira renderização: adia o import do
 * componente (e a checagem /api/chat/) para quando o navegador estiver ocioso,
 * para não competir por JS/rede com o conteúdo da página em todas as rotas.
 */
export function ChatWidgetLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);

  return ready ? <ChatWidget /> : null;
}
