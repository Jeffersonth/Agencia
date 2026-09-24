import { Clock } from "lucide-react";
import type { Article, Block } from "@/content/articles";
import { routeInfo } from "@/lib/routes";
import { site } from "@/lib/site";
import { Badge, Container } from "@/components/ui";
import { Breadcrumbs, CTASection, FAQList, LinkCard } from "@/components/sections";
import { Orb } from "@/components/Orb";

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
        <aside className="rounded-2xl border-l-[3px] border-violet-400 bg-[#faf9fe] p-6 font-[family-name:var(--font-display)] text-[1.1rem] text-ink">
          {block.title && <p className="mb-1 text-[0.8rem] font-bold uppercase tracking-[0.06em] text-violet">{block.title}</p>}
          <p>{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[34rem] overflow-hidden rounded-2xl border border-line text-left text-[0.95rem]">
            <thead className="bg-navy-900 text-white">
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
  const guia = article.kind === "guia";
  return (
    <div className="bg-white">
      <Container className="max-w-[46rem] pb-6 pt-10 md:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6">
          <Badge tone="blue">{guia ? "Guia" : "Comparativo"}</Badge>
        </div>
        <h1 className="mt-5 text-[2.1rem] leading-[1.12] md:text-[2.8rem]">{article.title}</h1>
        <div className="mt-6 flex items-center gap-3 border-b border-line pb-7">
          <span aria-hidden className="flex size-11 items-end justify-center overflow-hidden rounded-full bg-[linear-gradient(160deg,#6aa0ff,#2438b0)]">
            <span className="mb-[-12%] size-[68%] rounded-t-full bg-white/85" />
          </span>
          <div className="text-sm">
            <p className="font-semibold text-ink">{site.founder.name}</p>
            <p className="flex items-center gap-1.5 text-slate">
              Atualizado em <time dateTime={article.updatedAt}>{date}</time> · <Clock aria-hidden className="size-3.5" /> {article.readingMinutes} min de leitura
            </p>
          </div>
        </div>
        <div className={`relative mt-8 h-56 overflow-hidden rounded-[1.25rem] md:h-72 ${guia ? "bg-[linear-gradient(135deg,#3b5bff,#7c4dff)]" : "bg-[linear-gradient(135deg,#7c4dff,#b04dff)]"}`}>
          <svg aria-hidden viewBox="0 0 300 160" className="absolute left-8 top-1/2 h-40 w-72 -translate-y-1/2 opacity-60">
            <path d="M10 40 C 110 10, 170 30, 220 75 M10 120 C 110 150, 170 130, 220 85" fill="none" stroke="#fff" strokeOpacity=".55" />
            <circle cx="10" cy="40" r="4" fill="#fff" fillOpacity=".75" />
            <circle cx="10" cy="120" r="4" fill="#fff" fillOpacity=".75" />
          </svg>
          <Orb tone={guia ? "blue" : "violet"} wave={false} className="absolute right-8 top-1/2 size-40 -translate-y-1/2 md:right-14 md:size-52" />
        </div>
      </Container>

      <Container className="max-w-[46rem] pb-20">
        <article className="min-w-0">
          <div id="resposta" className="mt-4 rounded-2xl border-l-[3px] border-violet-400 bg-[#faf9fe] p-6 md:p-7">
            <p className="eyebrow mb-3">Resposta direta</p>
            <p data-answer className="text-lg leading-relaxed text-ink">
              {article.answer}
            </p>
          </div>

          {article.sections.length > 2 && (
            <nav aria-label="Neste artigo" className="mt-10 rounded-2xl bg-mist p-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-violet">Neste artigo</p>
              <ol className="mt-3 grid gap-1.5 text-[0.95rem] sm:grid-cols-2">
                {article.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-slate hover:text-signal">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {article.sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-12">
              <h2 className="text-[1.6rem] md:text-[1.85rem]">{s.heading}</h2>
              <div className="prose-site mt-4 text-[1.05rem] leading-[1.8] text-ink/85">
                {s.blocks.map((b, i) => (
                  <RenderBlock key={i} block={b} />
                ))}
              </div>
            </section>
          ))}

          <section id="perguntas" className="mt-16">
            <h2 className="mb-6 text-[1.6rem] md:text-[1.85rem]">Perguntas frequentes</h2>
            <FAQList items={article.faq} />
          </section>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-[1.4rem]">Leia também</h2>
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
    </div>
  );
}

function groupLabel(g: string) {
  return (
    { solucoes: "Solução", servicos: "Serviço", conteudo: "Conteúdo", paginas: "Página", setores: "Setor", cases: "Case", ferramentas: "Ferramenta" } as Record<string, string>
  )[g];
}
