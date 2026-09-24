import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/lib/site";

/** Páginas de conversão: cabeçalho enxuto, sem navegação que tire o foco. */
export default function FocusLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-hero flex min-h-dvh flex-col text-white">
      <header className="container-site flex h-[4.5rem] items-center justify-between">
        <Logo dark />
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
          <ArrowLeft aria-hidden className="size-4" /> Voltar ao site
        </Link>
      </header>
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <footer className="container-site py-8 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {site.name} · Atuação nacional ·{" "}
        <Link href="/privacidade/" className="hover:text-white">
          Privacidade
        </Link>
      </footer>
    </div>
  );
}
