import { Clock } from "lucide-react";
import type { Article, Block } from "@/content/articles";
import { routeInfo } from "@/lib/routes";
import { site } from "@/lib/site";
import { Badge, Container } from "@/components/ui";
import { Breadcrumbs, CTASection, FAQList, LinkCard } from "@/components/sections";
import { LogoMark } from "@/components/layout/Logo";

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="rounded-2xl border border-signal-100 bg-signal-50 p-6 text-ink">
          {block.title && <p className="mb-1 font-semibold text-signal-600">{block.title}</p>}
          <p>{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[34rem] overflow-hidden rounded-2xl border border-line text-left text-[0.95rem]">
            <thead className="bg-navy text-white">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {block.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="px-4 py-3 font-semibold">
                        {c}
                      </th>
                    ) : (
                      <td key={i} className="px-4 py-3 text-slate">
                        {c}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function ArticleView({ article, crumbs }: { article: Article; crumbs: { name: string; path: string }[] }) {
  const date = new Date(`${article.updatedAt}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  const related = article.related.map((p) => ({ path: p, info: routeInfo(p) })).filter((r) => r.info);
  return (
    <>
      <header className="border-b border-line bg-mist">
        <Container className="pb-14 pt-8 md:pt-10">
          <Breadcrumbs items={crumbs} />
          <div className="mt-12 max-w-4xl">
            <Badge tone="blue">{article.kind === "guia" ? "Guia" : "Comparativo"}</Badge>
            <h1 className="mt-5 text-[2.2rem] font-semibold leading-[1.1] md:text-[3.2rem]">{article.title}</h1>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span className="flex items-center gap-2">
                <LogoMark className="size-7" /> Por <strong className="font-semibold text-ink">{site.founder.name}</strong>
              </span>
              <span>
                Atualizado em <time dateTime={article.updatedAt}>{date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock aria-hidden className="size-4" /> {article.readingMinutes} min de leitura
              </span>
            </div>
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <nav aria-label="Neste artigo" className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate">Neste artigo</p>
            <ol className="mt-4 space-y-2.5 border-l border-line text-[0.92rem]">
              <li>
                <a href="#resposta" className="-ml-px block border-l border-transparent pl-4 text-slate hover:border-signal hover:text-ink">
                  Resposta direta
                </a>
              </li>
              {article.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent pl-4 text-slate hover:border-signal hover:text-ink">
                    {s.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#perguntas" className="-ml-px block border-l border-transparent pl-4 text-slate hover:border-signal hover:text-ink">
                  Perguntas frequentes
                </a>
              </li>
            </ol>
          </div>
        </nav>

        <article className="min-w-0 max-w-3xl">
          <div id="resposta" className="rounded-2xl border-l-4 border-signal bg-mist p-6 md:p-8">
            <p className="eyebrow mb-3">Resposta direta</p>
            <p data-answer className="text-lg leading-relaxed text-ink md:text-xl">
              {article.answer}
            </p>
          </div>

          {article.sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-14">
              <h2 className="text-2xl font-semibold md:text-3xl">{s.heading}</h2>
              <div className="prose-site mt-5 text-[1.05rem] text-ink/90">
                {s.blocks.map((b, i) => (
                  <RenderBlock key={i} block={b} />
                ))}
              </div>
            </section>
          ))}

          <section id="perguntas" className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Perguntas frequentes</h2>
            <FAQList items={article.faq} />
          </section>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold">Leia também</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map(({ path, info }) => (
                  <LinkCard key={path} href={path} title={info!.title} meta={groupLabel(info!.group)} />
                ))}
              </div>
            </section>
          )}
        </article>
      </Container>

      <CTASection title="Quer aplicar isso na sua empresa?" />
    </>
  );
}

function groupLabel(g: string) {
  return (
    { solucoes: "Solução", servicos: "Serviço", conteudo: "Conteúdo", paginas: "Página", setores: "Setor", cases: "Case", ferramentas: "Ferramenta" } as Record<string, string>
  )[g];
}
