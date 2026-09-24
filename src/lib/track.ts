/** Eventos de conversão do GA4 (clique no WhatsApp, envio de formulário, uso das ferramentas). */
type Gtag = (...args: unknown[]) => void;

export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", event, { page_path: window.location.pathname, ...params });
}
