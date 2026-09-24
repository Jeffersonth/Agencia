import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink, Container } from "@/components/ui";
import { Orb } from "@/components/Orb";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="conteudo" className="bg-mist">
        <Container className="grid min-h-[60vh] items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Erro 404</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.06] md:text-[3.6rem]">O sinal se perdeu no caminho</h1>
            <p className="mt-5 max-w-md text-lg text-slate">A página que você procura não existe ou mudou de lugar. Vamos te levar de volta ao trilho.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/" size="lg">
                Voltar ao início
              </ButtonLink>
              <ButtonLink href="/contato/" size="lg" variant="secondary">
                Falar com o time
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-md" aria-hidden>
            <svg viewBox="0 0 440 260" className="absolute inset-0 size-full">
              <path d="M10 200 C 110 90, 200 90, 250 150 S 380 60, 430 20" fill="none" stroke="#9b99b3" strokeDasharray="6 7" />
              <circle cx="10" cy="200" r="6" fill="#7c4dff" />
            </svg>
            <div className="absolute right-12 top-10 size-40">
              <Orb tone="violet" wave={false} className="size-full" />
              <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-display)] text-4xl font-bold text-white">404</span>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
