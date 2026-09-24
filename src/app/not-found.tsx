import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-mist py-28">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Esta página não existe (ou mudou de lugar).</h1>
        <p className="mt-5 text-lg text-slate">
          Que tal começar pelas <Link href="/solucoes/" className="font-semibold text-signal underline underline-offset-2">soluções</Link> ou pelo{" "}
          <Link href="/conteudo/" className="font-semibold text-signal underline underline-offset-2">conteúdo</Link>?
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <ButtonLink href="/" variant="secondary">Página inicial</ButtonLink>
          <ButtonLink href="/diagnostico/" arrow>Agendar Diagnóstico</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
