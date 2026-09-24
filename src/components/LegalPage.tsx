import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { Breadcrumbs } from "@/components/sections";

export function LegalPage({ title, path, updatedAt, children }: { title: string; path: string; updatedAt: string; children: ReactNode }) {
  const date = new Date(`${updatedAt}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  return (
    <>
      <section className="border-b border-line bg-mist">
        <Container className="pb-12 pt-8 md:pt-10">
          <Breadcrumbs items={[{ name: title, path }]} />
          <h1 className="mt-10 text-[2.2rem] font-semibold md:text-5xl">{title}</h1>
          <p className="mt-3 text-slate">Última atualização: {date}</p>
        </Container>
      </section>
      <Container className="max-w-3xl py-16">
        <div className="prose-site text-ink/90 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold">{children}</div>
      </Container>
    </>
  );
}
