import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, FileStack, Hourglass, Timer, TrendingUp } from "lucide-react";
import { hubs } from "@/content/solutions";
import { sectors } from "@/content/sectors";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { Badge, ButtonLink, Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { IconTile } from "@/components/Icon";
import { CTASection, DirectAnswer, HubCard, SecurityStrip } from "@/components/sections";
import { CoreDiagram, WhatsAppMock } from "@/components/visuals";
import { MethodTimeline } from "@/components/MethodTimeline";

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
  { icon: TrendingUp, text: "Processos que dependem da memória de alguém." },
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-mist">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_20%,black_15%,transparent_65%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-10 size-[36rem] rounded-full bg-signal/10 blur-3xl" />
        <Container className="relative grid items-center gap-16 pb-24 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-24">
          <div>
            <Badge tone="blue" className="mb-7">
              <span className="size-1.5 rounded-full bg-signal" /> Estúdio de engenharia de IA
            </Badge>
            <h1 className="text-[2.6rem] font-semibold leading-[1.04] md:text-[4.1rem]">
              Sua empresa parou de perder cliente nos intervalos.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
              Agentes de IA que atendem, qualificam e vendem 24/7 — integrados aos sistemas que você já usa. Engenharia sênior, entrega rápida, resultado medido.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/diagnostico/" size="lg" arrow>
                Agendar Diagnóstico
              </ButtonLink>
              <ButtonLink href="/solucoes/" size="lg" variant="secondary">
                Ver soluções
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-line-strong/70 border-t border-line-strong/70 pt-6">
              <div className="pr-4">
                <dt className="sr-only">Experiência</dt>
                <dd className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">{site.stats.years} anos</dd>
                <dd className="mt-1 text-sm text-slate">de engenharia</dd>
              </div>
              <div className="px-4">
                <dt className="sr-only">Projetos</dt>
                <dd className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">{site.stats.projects}</dd>
                <dd className="mt-1 text-sm text-slate">projetos entregues</dd>
              </div>
              <div className="pl-4">
                <dt className="sr-only">Especialidade</dt>
                <dd className="text-base font-semibold leading-tight text-navy md:text-lg">Setores regulados</dd>
                <dd className="mt-1 text-sm text-slate">jurídico e saúde</dd>
              </div>
            </dl>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <WhatsAppMock />
          </div>
        </Container>
      </section>

      {/* 2 — Resposta direta */}
      <section className="bg-white pt-20 md:pt-28">
        <Container className="max-w-5xl">
          <DirectAnswer label={`O que é a ${site.name}`}>
            A {site.name} é um estúdio de engenharia de IA que cria agentes e automações para empresas. Implantamos atendimento e vendas por IA no WhatsApp, automação de processos e sistemas sob medida, com foco em resultado e segurança de dados. Atendemos empresas em todo o Brasil, com experiência em setores regulados como jurídico e saúde.
          </DirectAnswer>
        </Container>
      </section>

      {/* 3 — O problema */}
      <Section labelledBy="problema">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="problema" eyebrow="O problema" title="O gargalo não é a demanda. É a capacidade de responder a ela." />
            <p className="mt-8 border-l-2 border-signal pl-5 text-lg font-medium text-ink">
              Cada uma dessas falhas tem um custo. A IA resolve todas ao mesmo tempo.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {problems.map(({ icon: I, text }) => (
              <li key={text} className="rounded-[var(--radius-card)] border border-line bg-mist p-7">
                <I aria-hidden className="size-6 text-signal" strokeWidth={1.75} />
                <p className="mt-5 text-lg font-medium leading-snug text-ink">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4 — Soluções do núcleo */}
      <Section tone="mist" labelledBy="solucoes">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="solucoes"
            eyebrow="Soluções"
            title="IA no centro da sua operação."
            text="Quatro frentes, um objetivo: sua empresa atender, vender e operar melhor, com a IA trabalhando dentro da operação — não ao lado dela."
          />
          <TextLink href="/solucoes/" className="shrink-0">
            Todas as soluções
          </TextLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {hubs.map((h, i) => (
            <HubCard key={h.slug} hub={h} index={i} />
          ))}
        </div>
      </Section>

      {/* 5 — Como trabalhamos */}
      <Section tone="navy" labelledBy="como-trabalhamos" className="relative overflow-hidden">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              dark
              id="como-trabalhamos"
              eyebrow="Como trabalhamos"
              title="IA no centro. Todo o resto a serviço dela."
              text="Todo projeto nosso — até um site — nasce com inteligência operando dentro dele. É isso que separa uma solução que gera resultado de uma que só ocupa espaço."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/servicos/" variant="light" arrow>
                Serviços complementares
              </ButtonLink>
              <ButtonLink href="/metodo/" variant="ghost-light">
                Nosso método
              </ButtonLink>
            </div>
          </div>
          <CoreDiagram />
        </div>
      </Section>

      {/* 6 — Prova */}
      <Section labelledBy="resultados">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="resultados"
            eyebrow="Prova"
            title="Resultados que dá para medir."
            text="Cada projeto de IA começa registrando o “antes” da sua operação. Depois, acompanhamos os mesmos números todo mês."
          />
          <TextLink href="/cases/" className="shrink-0">
            Ver todos os cases
          </TextLink>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[var(--radius-card)] bg-navy p-8 text-white">
              <p className="text-6xl font-semibold tracking-tight">{site.stats.projects}</p>
              <p className="mt-3 text-white/75">projetos entregues em sites, sistemas, aplicativos e automações.</p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-mist p-8">
              <p className="text-6xl font-semibold tracking-tight text-navy">{site.stats.years}</p>
              <p className="mt-3 text-slate">anos de engenharia, com clientes em setores regulados como jurídico e saúde.</p>
            </div>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold text-slate">O que medimos em cada agente de IA</p>
            <ul className="mt-6 divide-y divide-line">
              {[
                { icon: Timer, t: "Tempo de primeira resposta", s: "de horas para segundos — o agente responde a qualquer hora." },
                { icon: TrendingUp, t: "% de agendamentos sem intervenção humana", s: "quanto da agenda se preenche sozinho." },
                { icon: Clock, t: "Horas por semana devolvidas à equipe", s: "tempo que volta para o trabalho que exige gente." },
              ].map(({ icon: I, t, s }) => (
                <li key={t} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-strong">
                    <I aria-hidden className="size-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">{t}</span>
                    <span className="block text-slate">{s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 7 — Setores */}
      <Section tone="mist" labelledBy="setores">
        <SectionHeading id="setores" eyebrow="Setores" title="Feito para quem não pode errar com dados." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/setores/${s.slug}/`}
              className="group rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)] md:p-10"
            >
              <IconTile name={s.icon} />
              <h3 className="mt-8 text-2xl font-semibold">{s.menuName}</h3>
              <p className="mt-3 text-lg text-slate">
                {s.slug === "escritorios-de-advocacia"
                  ? "Atendimento e triagem dentro das regras da OAB."
                  : "Agendamento e comunicação com LGPD."}
              </p>
              <span className="mt-8 inline-flex items-center gap-1.5 font-semibold text-signal">
                IA para {s.menuName.toLowerCase()} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 8 — Segurança */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SecurityStrip text="API oficial do WhatsApp, adequação à LGPD, opção de IA privada, contas e dados em nome da sua empresa, e código e automações com cláusula de saída." />
        </Container>
      </section>

      {/* 9 — Método */}
      <section className="border-t border-line bg-white py-20 md:py-28" aria-labelledby="metodo">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="metodo" eyebrow="Método" title="Um método. Cinco etapas. Zero improviso." />
            <TextLink href="/metodo/" className="shrink-0">
              Conheça o Método
            </TextLink>
          </div>
          <div className="mt-14">
            <MethodTimeline />
          </div>
        </Container>
      </section>

      {/* 10 — CTA final */}
      <CTASection />
    </>
  );
}
