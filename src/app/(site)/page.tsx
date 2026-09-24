import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleHelp, Clock, FileStack, Gauge, Hourglass, LayoutTemplate } from "lucide-react";
import { hubs } from "@/content/solutions";
import { sectors } from "@/content/sectors";
import { cases, caseTypeLabels } from "@/content/cases";
import { guides } from "@/content/articles";
import { methodSteps } from "@/content/method";
import { site } from "@/lib/site";
import { faqSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Badge, ButtonLink, Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { Icon, IconTile } from "@/components/Icon";
import { Orb, type OrbTone } from "@/components/Orb";
import { BannerCard } from "@/components/BannerCard";
import { caseTone } from "@/components/CaseCard";
import { CTASection, FAQList, SecurityStrip } from "@/components/sections";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — Agentes de IA e Automação para Empresas`,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

const problems = [
  { icon: Clock, text: "Leads que chegam fora do horário e só recebem resposta no dia seguinte." },
  { icon: FileStack, text: "Equipe qualificada gastando horas copiando dados entre sistemas." },
  { icon: Hourglass, text: "Orçamentos enviados e nunca acompanhados." },
  { icon: CircleHelp, text: "Processos que dependem da memória de alguém." },
];

const integrations = ["WhatsApp", "RD Station", "HubSpot", "Pipedrive", "Google Agenda", "n8n"];

const homeFaq = [
  { q: "Quanto tempo até estar rodando?", a: "Um agente de IA para WhatsApp entra no ar em 2 a 3 semanas. Projetos com mais integrações são faseados, com entregas a cada etapa." },
  { q: "A IA vai substituir o meu time?", a: "Não. A IA assume o repetitivo — responder, qualificar, digitar, agendar — e transfere para uma pessoa quando o caso pede julgamento." },
  { q: "Funciona com os sistemas que eu já uso?", a: "Sim. Integramos com WhatsApp, CRMs, agendas, ERPs e planilhas via API ou integração sob medida. Avaliamos o seu cenário no Diagnóstico." },
  { q: "Meus dados ficam seguros?", a: "Sim. API oficial do WhatsApp, contas e dados em nome da sua empresa, adequação à LGPD e opção de IA privada para dados sensíveis." },
  { q: "Como é cobrado?", a: "Implantação + sustentação mensal + consumo repassado sem margem. Os projetos partem de faixas claras e o preço fechado sai do Diagnóstico, que é creditado no projeto." },
];

const solutionTones: Record<string, "blue" | "violet"> = {
  "atendimento-inteligente": "blue",
  "vendas-e-receita": "violet",
  operacoes: "blue",
  "ia-corporativa": "violet",
};

export default function HomePage() {
  const featuredCases = ["agendamento-clinica-odontologica", "sdr-juridico-trabalhista", "extracao-notas-fiscais"]
    .map((s) => cases.find((c) => c.slug === s)!)
    .filter(Boolean);
  const blogTones: OrbTone[] = ["blue", "violet", "teal"];
  const blogDeco = ["lines", "flow", "shield"] as const;

  return (
    <>
      <JsonLd data={graph(faqSchema(homeFaq))} />

      {/* 1 — Hero */}
      <section className="bg-hero on-dark relative overflow-hidden text-white">
        <div aria-hidden className="pointer-events-none absolute -bottom-36 left-1/2 h-[22rem] w-[75rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(120,170,255,.35),transparent_70%)] blur-md" />
        <Orb tone="blue" className="animate-float pointer-events-none absolute left-[8%] top-20 hidden size-28 md:block lg:size-36" />
        <Orb tone="cyan" wave={false} className="animate-float pointer-events-none absolute right-[10%] top-56 hidden size-16 [animation-delay:3s] md:block" />
        <Container className="relative pb-20 pt-14 text-center md:pb-24 md:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.8rem] text-white/85">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_#5ce6a8]" /> Estúdio de engenharia de IA
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl text-[2.5rem] leading-[1.06] text-white md:text-[3.9rem]">
            Sua empresa parou de perder cliente <span className="text-gradient">nos intervalos.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-[1.2rem]">
            Agentes de IA que atendem, qualificam e vendem 24/7 — integrados aos sistemas que você já usa. Engenharia sênior, entrega rápida, resultado medido.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/diagnostico/" size="lg">
              Agendar diagnóstico
            </ButtonLink>
            <ButtonLink href="/solucoes/" size="lg" variant="ghost-light">
              Ver soluções
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/60">
            {site.stats.years} anos · {site.stats.projects} projetos entregues · Especialistas em setores regulados
          </p>
          <div className="relative mt-14">
            <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" className="pointer-events-none absolute -top-6 left-1/2 hidden h-28 w-[110%] -translate-x-1/2 md:block">
              <path d="M0 110 Q600 -10 1200 110" fill="none" stroke="#8ab4ff" strokeOpacity=".35" />
              <path d="M0 120 Q600 20 1200 120" fill="none" stroke="#8ab4ff" strokeOpacity=".18" />
            </svg>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">Integra com as ferramentas que você já usa</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {integrations.map((i) => (
                <li key={i} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[0.88rem] font-semibold text-white/85">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 2 — Resposta direta (Sobre a Sinal) */}
      <section className="relative bg-mist pt-16 md:pt-24">
        <span aria-hidden className="pointer-events-none absolute left-4 top-10 select-none font-[family-name:var(--font-display)] text-[14rem] font-extrabold leading-none text-violet-400/[0.06] md:left-10">
          S
        </span>
        <Container className="relative grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-[1.4rem] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-line/60 md:p-11">
            <p className="eyebrow">Sobre a {site.name}</p>
            <h2 className="mt-4 text-[1.9rem] md:text-[2.4rem]">IA trabalhando dentro da operação, não ao lado dela.</h2>
            <p data-answer className="mt-5 text-[1.05rem] leading-relaxed text-slate">
              A {site.name} é um estúdio de engenharia de IA que cria agentes e automações para empresas. Implantamos atendimento e vendas por IA no WhatsApp, automação de processos e sistemas sob medida, com foco em resultado e segurança de dados. Atendemos empresas em todo o Brasil, com experiência em setores regulados como jurídico e saúde.
            </p>
            <dl className="mt-8 flex gap-10">
              <div>
                <dd className="font-[family-name:var(--font-display)] text-4xl font-bold text-signal">{site.stats.years}</dd>
                <dt className="text-sm text-slate">anos de operação</dt>
              </div>
              <div>
                <dd className="font-[family-name:var(--font-display)] text-4xl font-bold text-signal">{site.stats.projects}</dd>
                <dt className="text-sm text-slate">projetos entregues</dt>
              </div>
            </dl>
          </div>
          <div className="grid gap-5">
            <div className="bg-brand relative overflow-hidden rounded-[1.4rem] p-8 text-white shadow-[var(--shadow-glow)]">
              <div aria-hidden className="absolute -bottom-10 -right-10 size-44 rounded-full bg-[radial-gradient(circle,rgba(160,200,255,.7),transparent_65%)]" />
              <h3 className="relative text-[1.35rem] text-white">Comece pelo Diagnóstico</h3>
              <p className="relative mt-3 text-[0.95rem] text-white/85">
                Mapeamos seus processos, apontamos o potencial de ROI e o valor é creditado no projeto.
              </p>
              <ButtonLink href="/diagnostico/" variant="light" size="sm" className="relative mt-6">
                Agendar diagnóstico
              </ButtonLink>
            </div>
            <div className="flex items-center justify-between gap-6 rounded-[1.4rem] bg-navy-900 p-8 text-white">
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold">Atendimento que não dorme</p>
                <p className="mt-1 text-sm text-white/55">agentes respondendo em segundos, inclusive à noite</p>
              </div>
              <p className="text-gradient font-[family-name:var(--font-display)] text-5xl font-bold">24/7</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 — O problema */}
      <Section labelledBy="problema">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading id="problema" eyebrow="O problema" title="O gargalo não é a demanda. É a capacidade de responder a ela." />
            <p className="mt-6 border-l-[3px] border-violet-400 pl-5 text-lg font-medium text-ink">
              Cada uma dessas falhas tem um custo. A IA resolve todas ao mesmo tempo.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {problems.map(({ icon: I, text }) => (
              <li key={text} className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-400">
                  <I aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <p className="mt-5 font-[family-name:var(--font-display)] text-[1.05rem] font-semibold leading-snug text-ink">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4 — Soluções */}
      <Section labelledBy="solucoes" className="!pt-4">
        <SectionHeading id="solucoes" eyebrow="Soluções" title="IA no centro da sua operação." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((h) => (
            <Link
              key={h.slug}
              href={`/solucoes/${h.slug}/`}
              className="group rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
            >
              <span className={solutionTones[h.slug] === "violet" ? "inline-flex size-12 items-center justify-center rounded-xl bg-violet-50 text-violet-400" : "inline-flex size-12 items-center justify-center rounded-xl bg-signal-50 text-signal"}>
                <Icon name={h.icon} className="size-5" />
              </span>
              <h3 className="mt-6 text-[1.2rem] font-bold">{h.name}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{h.menuDescription}</p>
            </Link>
          ))}
          <Link
            href="/servicos/"
            className="group rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-signal-50 text-signal">
              <LayoutTemplate aria-hidden className="size-5" />
            </span>
            <h3 className="mt-6 text-[1.2rem] font-bold">Sites, SEO/GEO e Sistemas</h3>
            <p className="mt-2 text-[0.95rem] text-slate">Capacidades que alimentam o núcleo: todo projeto sai com um componente de IA.</p>
          </Link>
          <Link href="/metodo/" className="group relative overflow-hidden rounded-[var(--radius-card)] bg-navy-900 p-7 text-white transition-all hover:-translate-y-0.5">
            <div aria-hidden className="absolute -right-10 -top-10 size-44 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,.55),transparent_65%)]" />
            <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-lilac">
              <Gauge aria-hidden className="size-5" />
            </span>
            <h3 className="relative mt-6 text-[1.2rem] font-bold text-white">Operação contínua</h3>
            <p className="relative mt-2 text-[0.95rem] text-white/70">Monitoramos, ajustamos e evoluímos a solução todo mês.</p>
            <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lilac">
              Conheça o método <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>

      {/* 5 — Método */}
      <Section tone="aurora" labelledBy="metodo">
        <SectionHeading dark id="metodo" eyebrow="Como funciona" title="Um método. Cinco etapas. Zero improviso." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {methodSteps.map((s, i) => (
            <li key={s.title} className="glass rounded-[var(--radius-card)] p-6">
              <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-white/15 px-2 text-sm font-semibold">0{i + 1}</span>
              <h3 className="mt-5 text-[1.1rem] font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[0.9rem] text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <TextLink href="/metodo/" className="!text-lilac">
            Conheça o Método
          </TextLink>
        </div>
      </Section>

      {/* 6 — Prova / cases */}
      <Section labelledBy="cases">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <SectionHeading id="cases" eyebrow="Soluções em ação" title="Resultados que dá para medir." />
            <div className="bg-brand mt-8 rounded-[1.4rem] p-8 text-white shadow-[var(--shadow-glow)]">
              <p className="font-[family-name:var(--font-display)] text-6xl font-bold">{site.stats.projects}</p>
              <p className="mt-3 text-white/85">projetos entregues em sites, sistemas, aplicativos e automações. Em cada projeto de IA registramos o “antes” e medimos o depois.</p>
            </div>
            <TextLink href="/cases/" className="mt-6">
              Ver todos os cases
            </TextLink>
          </div>
          <ul className="space-y-4">
            {featuredCases.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cases/${c.slug}/`}
                  className="group flex items-center gap-5 rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex size-28 shrink-0 items-center justify-center rounded-xl bg-signal-50">
                    <Orb tone={caseTone[c.type]} className="size-20" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-[family-name:var(--font-display)] text-[1.08rem] font-bold leading-snug">{c.title}</span>
                    <span className="mt-2 flex flex-wrap gap-1.5">
                      <Badge tone="blue">{caseTypeLabels[c.type]}</Badge>
                      <Badge tone="violet">{c.sector}</Badge>
                      <Badge tone="gray">Demonstrativo</Badge>
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-signal">Explorar case</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7 — Setores */}
      <Section labelledBy="setores" className="!pt-4">
        <SectionHeading id="setores" eyebrow="Setores" title="Feito para quem não pode errar com dados." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/setores/${s.slug}/`}
              className="group rounded-[var(--radius-card)] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] md:p-10"
            >
              <IconTile name={s.icon} />
              <h3 className="mt-7 text-[1.4rem] font-bold">{s.menuName}</h3>
              <p className="mt-2 text-slate">
                {s.slug === "escritorios-de-advocacia" ? "Atendimento e triagem dentro das regras da OAB." : "Agendamento e comunicação com LGPD."}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-signal">
                IA para {s.menuName.toLowerCase()} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <SecurityStrip text="API oficial do WhatsApp, adequação à LGPD, opção de IA privada, contas e dados em nome da sua empresa, e código e automações com cláusula de saída." />
        </div>
      </Section>

      {/* 8 — Quem constrói */}
      <Section labelledBy="time" className="!pt-4">
        <SectionHeading id="time" eyebrow="Quem constrói" title="Engenharia sênior, sem camadas." align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <Link href="/sobre/" className="flex flex-col items-center rounded-[var(--radius-card)] bg-white p-8 text-center shadow-[var(--shadow-card)] ring-1 ring-line/60">
            <span className="flex size-28 items-end justify-center overflow-hidden rounded-full bg-[linear-gradient(160deg,#6aa0ff,#2438b0)]" aria-hidden>
              <span className="mb-[-10%] size-[70%] rounded-t-full bg-white/85" />
            </span>
            <p className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold">{site.founder.name}</p>
            <p className="text-sm text-slate">{site.founder.jobTitle}</p>
          </Link>
          <div className="flex flex-col items-center rounded-[var(--radius-card)] bg-white p-8 text-center shadow-[var(--shadow-card)] ring-1 ring-line/60">
            <span className="flex size-28 items-center justify-center rounded-full bg-[linear-gradient(160deg,#b98cff,#4b1fa0)]" aria-hidden>
              <Orb tone="violet" wave={false} className="size-14" />
            </span>
            <p className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold">Rede de especialistas</p>
            <p className="text-sm text-slate">Design, dados e jurídico/LGPD sob demanda, com revisão sênior em cada entrega.</p>
          </div>
        </div>
      </Section>

      {/* 9 — FAQ */}
      <Section labelledBy="duvidas">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading id="duvidas" eyebrow="Dúvidas" title="Perguntas que todo mundo faz antes de começar" text="Não encontrou o que procura? Fale com a gente no diagnóstico." />
            <ButtonLink href="/diagnostico/" className="mt-7">
              Agendar diagnóstico
            </ButtonLink>
          </div>
          <FAQList items={homeFaq} />
        </div>
      </Section>

      {/* 10 — Conteúdo */}
      <Section labelledBy="conteudo" className="!pt-4">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading id="conteudo" eyebrow="Conteúdo" title="Guias para decidir com segurança" />
          <TextLink href="/conteudo/" className="shrink-0">
            Ver todos
          </TextLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {guides.slice(0, 3).map((g, i) => (
            <BannerCard
              key={g.slug}
              href={`/conteudo/guias/${g.slug}/`}
              tone={blogTones[i]}
              deco={blogDeco[i]}
              tag="Guia"
              meta={`${g.readingMinutes} min de leitura`}
              title={g.title}
              cta="Ler artigo"
            />
          ))}
        </div>
      </Section>

      {/* 11 — CTA final */}
      <CTASection title="Descubra o que a IA já resolveria na sua operação" />
    </>
  );
}
