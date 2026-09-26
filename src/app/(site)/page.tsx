import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleHelp, Clock, FileStack, Hourglass, Sparkle } from "lucide-react";
import { hubs } from "@/content/solutions";
import { sectors } from "@/content/sectors";
import { cases, caseTypeLabels } from "@/content/cases";
import { guides } from "@/content/articles";
import { methodSteps } from "@/content/method";
import type { IconName } from "@/content/types";
import { complementaryServices } from "@/lib/nav";
import { site } from "@/lib/site";
import { faqSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Badge, ButtonLink, Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { Icon, IconTile } from "@/components/Icon";
import { Orb, type OrbTone } from "@/components/Orb";
import { BannerCard } from "@/components/BannerCard";
import { caseTone } from "@/components/CaseCard";
import { CTASection, FAQList, SecurityStrip } from "@/components/sections";
import { AgentInAction } from "@/components/AgentInAction";

// Ruído sutil (grão) para o card escuro, sem depender de imagem externa
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Ilustração "planeta" (visão computacional / operações)
function PlanetMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden className={className}>
      <defs>
        <radialGradient id="planet" cx="38%" cy="30%" r="78%">
          <stop offset="0" stopColor="#a9c7ff" />
          <stop offset="52%" stopColor="#4d7cff" />
          <stop offset="100%" stopColor="#2b52d8" />
        </radialGradient>
      </defs>
      <ellipse cx="45" cy="60" rx="43" ry="12" fill="none" stroke="#b9a4ff" strokeWidth="4.5" opacity="0.6" transform="rotate(-20 45 60)" />
      <circle cx="43" cy="47" r="27" fill="url(#planet)" />
      <ellipse cx="34" cy="38" rx="8" ry="5" fill="#ffffff" opacity="0.35" transform="rotate(-20 34 38)" />
      <path d="M83 14l2.6 7.4 7.4 2.6-7.4 2.6L83 34l-2.6-7.4L73 24l7.4-2.6z" fill="#7c4dff" />
    </svg>
  );
}

// Ilustração "esfera marmorizada" (dados e previsões / IA corporativa)
function SwirlMark({ className }: { className?: string }) {
  return (
    <span className={`relative inline-block overflow-hidden rounded-full ${className ?? ""}`} style={{ background: "conic-gradient(from 205deg at 52% 46%, #3d5cff, #7c4dff, #ff7a45, #ffb547, #ff5e8a, #3d5cff)" }}>
      <span className="absolute inset-0 rounded-full" style={{ boxShadow: "inset -8px -10px 22px rgba(6,8,40,0.5), inset 9px 11px 22px rgba(255,255,255,0.45)" }} />
      <span className="absolute left-[26%] top-[22%] size-3 rounded-full bg-white/50 blur-[2px]" />
    </span>
  );
}

export const metadata: Metadata = pageMetadata({
  title: `${site.name} | Agentes de IA e Automação para Empresas`,
  absoluteTitle: true,
  description:
    "Agência de IA e automação para empresas em todo o Brasil. Criamos agentes de IA, integrações e sistemas inteligentes para atendimento, vendas e operações.",
  path: "/",
});

const problems = [
  { icon: Clock, text: "Leads que chegam fora do horário e só recebem resposta no dia seguinte." },
  { icon: FileStack, text: "Equipe qualificada gastando horas copiando dados entre sistemas." },
  { icon: Hourglass, text: "Orçamentos enviados e nunca acompanhados." },
  { icon: CircleHelp, text: "Processos que dependem da memória de alguém." },
];

const integrations = ["WhatsApp", "RD Station", "HubSpot", "Pipedrive", "Google Agenda", "n8n"];

const aiAreas: { area: string; icon: IconName; items: string[] }[] = [
  { area: "Atendimento", icon: "headset", items: ["Atendimento 24/7", "Triagem automática", "Consulta de informações", "Agendamentos", "Suporte de primeiro nível", "Transferência para humanos"] },
  { area: "Comercial", icon: "target", items: ["SDR com IA", "Qualificação de leads", "Follow-up", "Reativação de base", "Atualização de CRM", "Preparação de reuniões"] },
  { area: "Operações", icon: "workflow", items: ["Processamento de documentos", "Integração entre sistemas", "Classificação de informações", "Execução de rotinas", "Alertas automáticos", "Relatórios operacionais"] },
  { area: "Financeiro", icon: "file", items: ["Leitura de documentos", "Cobrança e comunicação", "Extração de dados", "Relatórios gerenciais", "Rotinas assistidas"] },
  { area: "Gestão e Conhecimento", icon: "book", items: ["Assistentes internos", "Pesquisa em documentos", "Bases de conhecimento", "Resumo e análise", "Copilotos para equipes"] },
];

const techLayers: { icon: IconName; title: string; text: string }[] = [
  { icon: "sparkles", title: "Inteligência Artificial", text: "Modelos e agentes que interpretam informações, mantêm contexto e geram respostas." },
  { icon: "zap", title: "Automação", text: "Fluxos que executam tarefas automaticamente, do início ao fim." },
  { icon: "plug", title: "Integrações", text: "Conexões com CRM, ERP, WhatsApp, APIs e ferramentas internas." },
  { icon: "database", title: "Dados", text: "Bases de conhecimento e informações da própria empresa." },
  { icon: "code", title: "Software", text: "Interfaces e sistemas desenvolvidos quando a operação exige algo específico." },
];

const productionQuestions = [
  "O que acontece quando a IA não sabe a resposta?",
  "Quem recebe um atendimento que precisa de uma pessoa?",
  "Quais sistemas ela pode acessar e quais ações pode executar?",
  "Como saber se o agente está funcionando como deveria?",
];

const productionControls = [
  "Regras e limites de atuação",
  "Transferência para atendimento humano",
  "Controle de permissões",
  "Registro de interações",
  "Monitoramento de falhas",
  "Avaliação da qualidade das respostas",
  "Tratamento de exceções",
  "Controle de custos",
  "Versionamento",
  "Evolução contínua dos agentes",
];

const integracoesTechs = ["WhatsApp", "HubSpot", "RD Station", "Pipedrive", "Google Workspace", "ERPs", "CRMs", "APIs", "n8n", "Make", "Bancos de Dados"];

const diagnosticoInclui = [
  "Mapeamento de processos",
  "Identificação de oportunidades",
  "Priorização por impacto",
  "Análise dos sistemas envolvidos",
  "Estimativa de ROI",
  "Avaliação inicial de segurança e LGPD",
  "Roteiro de implementação",
  "Escopo, prazo e investimento",
];

const ferramentasGratuitas: { title: string; text: string; icon: IconName }[] = [
  { title: "Calculadora de ROI de Atendimento", text: "Descubra quanto a demora na resposta pode estar custando em oportunidades.", icon: "chart" },
  { title: "Calculadora de Custo do Atendimento", text: "Compare o custo atual da operação com diferentes cenários.", icon: "gauge" },
  { title: "Raio-X do WhatsApp", text: "Avalie a maturidade do atendimento da sua empresa pelo WhatsApp.", icon: "message" },
  { title: "Teste de Visibilidade em IA", text: "Avalie como seu site está preparado para buscadores e sistemas de IA.", icon: "search" },
];

const arquiteturaFatores = ["Qualidade", "Segurança", "Privacidade", "Latência", "Volume", "Custo", "Capacidade de integração", "Manutenção", "Escalabilidade"];

const seoGeoEntende = [
  "quem é sua empresa",
  "o que ela oferece",
  "para quem ela oferece",
  "em quais assuntos possui experiência",
  "quais informações sustentam sua autoridade",
];

const porqueSoluna: { title: string; text: string; icon: IconName }[] = [
  { title: "IA aplicada ao negócio", text: "Começamos pelo problema e pelo resultado esperado — não pela ferramenta da moda.", icon: "target" },
  { title: "Engenharia especializada", text: "Arquitetamos soluções que integram modelos de IA, automações, APIs, sistemas e dados.", icon: "code" },
  { title: "Soluções sob medida", text: "Cada projeto considera os processos, sistemas, clientes e regras da empresa.", icon: "compass" },
  { title: "Integração com seu ecossistema", text: "Aproveitamos as ferramentas que já fazem sentido na operação.", icon: "plug" },
  { title: "Segurança desde o início", text: "LGPD, controle de acesso e governança fazem parte da arquitetura quando aplicável.", icon: "shield" },
  { title: "Acompanhamento contínuo", text: "IA não termina no lançamento: monitoramos e evoluímos soluções em produção.", icon: "gauge" },
];

const homeFaq = [
  { q: "O que é um agente de IA?", a: "Um agente de IA é um sistema que interpreta informações, mantém contexto, decide dentro de regras definidas e executa tarefas usando os sistemas conectados. Diferente de um chatbot, ele pode consultar dados, atualizar sistemas e encaminhar casos para pessoas quando necessário." },
  { q: "Qual a diferença entre um chatbot e um agente de IA?", a: "Um chatbot normalmente responde perguntas seguindo fluxos ou uma base de conhecimento. Um agente de IA, além de conversar, consulta sistemas, interpreta informações, decide dentro de limites definidos e executa ações." },
  { q: "O que a Soluna IA faz?", a: "A Soluna IA é uma agência brasileira especializada em agentes de inteligência artificial e automação para empresas. Desenvolvemos soluções para atendimento, vendas, suporte e processos internos, além de sistemas, sites, aplicativos e projetos de SEO e GEO." },
  { q: "Vocês integram a IA aos sistemas que eu já uso?", a: "Sim. Projetamos integrações com CRMs, ERPs, WhatsApp, agendas, bancos de dados, APIs, planilhas e sistemas internos. A viabilidade e a arquitetura são analisadas no Diagnóstico." },
  { q: "Agentes de IA funcionam no WhatsApp?", a: "Sim. Integramos agentes de IA ao WhatsApp para atendimento, qualificação de leads, vendas, suporte e agendamentos, usando a API oficial e as integrações adequadas ao projeto." },
  { q: "A Soluna atende empresas de todo o Brasil?", a: "Sim. O atendimento é online, o que permite projetos para empresas de pequeno, médio e grande porte em qualquer região do Brasil." },
  { q: "Quanto tempo leva para implementar um agente de IA?", a: "Depende do número de processos, integrações e regras. Projetos mais simples podem entrar no ar em poucas semanas; operações mais complexas são divididas em fases, com entregas a cada etapa." },
  { q: "A IA vai substituir o meu time?", a: "Não. A IA assume o repetitivo — responder, qualificar, digitar, agendar — e transfere para uma pessoa quando o caso exige negociação, julgamento ou decisão sensível." },
  { q: "Meus dados ficam seguros?", a: "Sim. API oficial do WhatsApp, contas e dados em nome da sua empresa, adequação à LGPD e opção de IA privada para dados sensíveis." },
];

export default function HomePage() {
  const featuredCases = ["agendamento-clinica-odontologica", "sdr-juridico-trabalhista", "extracao-notas-fiscais"]
    .map((s) => cases.find((c) => c.slug === s)!)
    .filter(Boolean);
  const blogTones: OrbTone[] = ["blue", "violet", "teal"];
  const blogDeco = ["lines", "flow", "shield"] as const;
  const hubBySlug = (slug: string) => hubs.find((h) => h.slug === slug)!;
  const coreDuo = [hubBySlug("atendimento-inteligente"), hubBySlug("vendas-e-receita")];

  return (
    <>
      <JsonLd data={graph(faqSchema(homeFaq))} />

      {/* 1 — Hero */}
      <section className="bg-hero on-dark relative overflow-hidden text-white">
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
          className="motion-reduce:hidden pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
            type="video/mp4"
          />
        </video>
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(24,18,64,.58),rgba(24,18,64,.46)_45%,rgba(24,18,64,.82))]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-36 left-1/2 z-0 h-[22rem] w-[75rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(120,170,255,.35),transparent_70%)] blur-md" />
        <Orb tone="blue" className="animate-float pointer-events-none absolute left-[8%] top-20 hidden size-28 md:block lg:size-36" />
        <Orb tone="cyan" wave={false} className="animate-float pointer-events-none absolute right-[10%] top-56 hidden size-16 [animation-delay:3s] md:block" />
        <Container className="relative z-10 pb-20 pt-14 text-center md:pb-24 md:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/85">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_#5ce6a8]" /> Soluna IA · AI Solutions Agency
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl text-[2.4rem] leading-[1.08] text-white md:text-[3.7rem]">
            Agentes de IA e automação para empresas que querem <span className="text-gradient">operar em outro nível.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-[1.18rem]">
            Projetamos e implementamos agentes de IA, automações e sistemas inteligentes para atendimento, vendas e operações — integrados ao WhatsApp, CRM, ERP e às ferramentas que sua empresa já utiliza.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/diagnostico/" size="lg">
              Agendar Diagnóstico de IA
            </ButtonLink>
            <ButtonLink href="/solucoes/" size="lg" variant="ghost-light">
              Conhecer as Soluções
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/60">
            {site.stats.years} anos de experiência · {site.stats.projects} projetos entregues · Atendimento em todo o Brasil
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

      {/* 1.5 — Agente em ação (bento interativo) */}
      <AgentInAction />

      {/* 2 — Resposta direta (Sobre a Soluna IA) */}
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

      {/* 2.5 — Integrações */}
      <Section tone="white" labelledBy="integracoes">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="integracoes" align="center" title="IA que trabalha com o que sua empresa já usa." />
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {integracoesTechs.map((t) => (
              <li key={t} className="rounded-full border border-line-strong bg-mist px-4 py-1.5 text-[0.9rem] font-semibold text-ink">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-slate">
            Não criamos mais uma ferramenta isolada. <span className="font-semibold text-ink">Integramos inteligência à operação que já existe.</span>
          </p>
        </div>
      </Section>

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
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Card 1 — destaque escuro */}
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0a0a18] p-8 text-white md:col-span-2 md:p-10 lg:col-span-1">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(58% 55% at 14% -4%, rgba(45,212,191,0.5) 0%, transparent 56%), radial-gradient(72% 62% at 104% 108%, rgba(124,77,255,0.6) 0%, transparent 60%)" }}
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
            <span aria-hidden className="absolute right-6 top-6 flex items-end gap-[3px]" title="atividade ao vivo">
              {[0.15, 0.35, 0, 0.5, 0.25].map((d, i) => (
                <span key={i} className="animate-bary block w-[3px] rounded-full bg-[linear-gradient(180deg,#8affd6,#4d7cff)]" style={{ height: "22px", animationDelay: `${d}s` }} />
              ))}
            </span>
            <div className="relative">
              <h3 className="max-w-[16rem] text-[1.6rem] font-bold leading-[1.15] text-white md:text-[1.85rem]">
                Atendimento e vendas com IA, sem parar.
              </h3>
              <span aria-hidden className="mt-6 block h-px w-full bg-white/15" />
              <ul className="mt-7 space-y-6">
                {coreDuo.map((h) => (
                  <li key={h.slug}>
                    <Link href={`/solucoes/${h.slug}/`} className="group flex gap-4">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 shadow-[0_6px_18px_-6px_rgba(0,0,0,0.6)]">
                        <Icon name={h.icon} className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 text-[1.05rem] font-bold text-white">
                          {h.name}
                          <ArrowRight aria-hidden className="size-4 -translate-x-1 text-lilac opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                        <span className="mt-1 block text-[0.9rem] leading-snug text-white/65">{h.menuDescription}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 — Operações & Processos */}
          <Link
            href="/solucoes/operacoes/"
            className="group flex h-full flex-col rounded-[1.5rem] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
          >
            <PlanetMark className="size-20" />
            <h3 className="mt-6 text-[1.3rem] font-bold leading-snug">Operações e processos no automático</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-slate">
              {["Automação de documentos e relatórios", "Agente de conhecimento interno", "Integração entre os seus sistemas"].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <Sparkle aria-hidden className="mt-0.5 size-4 shrink-0 text-violet-400" fill="currentColor" />
                  {t}
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-bold uppercase tracking-[0.08em] text-signal">
              Explore mais
              <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          {/* Card 3 — IA Corporativa Privada */}
          <Link
            href="/solucoes/ia-corporativa/"
            className="group flex h-full flex-col rounded-[1.5rem] bg-[linear-gradient(180deg,#ffffff,#f2f0ff)] p-8 ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
          >
            <SwirlMark className="size-20" />
            <h3 className="mt-6 text-[1.3rem] font-bold leading-snug">IA privada, com os dados sob controle</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-slate">
              {["Inteligência sobre os seus dados", "Adequação à LGPD e governança", "Controle total de acessos"].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <Sparkle aria-hidden className="mt-0.5 size-4 shrink-0 text-violet-400" fill="currentColor" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <p className="text-gradient font-[family-name:var(--font-display)] text-5xl font-extrabold leading-none">{site.stats.projects}</p>
              <p className="mt-1 text-sm text-slate">projetos entregues com IA</p>
            </div>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <TextLink href="/solucoes/">Ver todas as soluções</TextLink>
        </div>
      </Section>

      {/* 4.5 — IA por área da empresa */}
      <Section tone="white" labelledBy="areas">
        <SectionHeading
          id="areas"
          eyebrow="Possibilidades"
          title="Onde a IA pode trabalhar na sua empresa?"
          text="Não existe uma única forma de aplicar IA. O objetivo é descobrir onde ela gera retorno real dentro da sua operação."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiAreas.map((a) => (
            <div key={a.area} className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-400 ring-1 ring-violet-100">
                  <Icon name={a.icon} className="size-5" />
                </span>
                <h3 className="text-[1.15rem] font-bold">{a.area}</h3>
              </div>
              <ul className="mt-5 space-y-2 text-[0.92rem] text-slate">
                {a.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-brand relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] p-7 text-white shadow-[var(--shadow-glow)]">
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,rgba(160,200,255,.6),transparent_65%)]" />
            <div className="relative">
              <h3 className="text-[1.25rem] font-bold text-white">Não sabe por onde começar?</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
                No Diagnóstico, mapeamos seus processos e apontamos onde a IA gera mais retorno — com prioridades claras.
              </p>
            </div>
            <ButtonLink href="/diagnostico/" variant="light" size="sm" className="relative mt-6 w-fit">
              Descobrir oportunidades de IA
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 4.6 — Diferencial técnico */}
      <Section tone="mist" labelledBy="diferencial">
        <SectionHeading
          id="diferencial"
          eyebrow="Mais do que chatbots"
          title="IA conectada à operação real."
          text="Um agente útil precisa fazer mais do que conversar. Ele entende o contexto da empresa, acessa as informações certas e executa ações nos sistemas certos. Por isso, nossos projetos podem combinar:"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techLayers.map((l) => (
            <div key={l.title} className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal-50 text-signal">
                <Icon name={l.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-[1.15rem] font-bold">{l.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{l.text}</p>
            </div>
          ))}
          <div className="flex items-center rounded-[var(--radius-card)] bg-navy-900 p-7 text-white">
            <p className="text-[1.02rem] leading-relaxed text-white/85">
              O resultado é uma solução construída para o <span className="text-gradient font-semibold">seu processo</span> — e não um processo adaptado à ferramenta.
            </p>
          </div>
        </div>
      </Section>

      {/* 4.7 — IA em produção */}
      <Section tone="white" labelledBy="producao">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="producao"
              eyebrow="Confiabilidade"
              title="Criar uma demo de IA é fácil. Colocá-la em produção é outra história."
              text="Uma solução empresarial precisa lidar com o que não aparece em uma apresentação:"
            />
            <ul className="mt-6 space-y-3">
              {productionQuestions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-[1.02rem] text-ink">
                  <CircleHelp aria-hidden className="mt-0.5 size-5 shrink-0 text-violet-400" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.4rem] bg-mist p-8 ring-1 ring-line/60 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate">Por isso, projetamos com</p>
            <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {productionControls.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[0.95rem] text-slate">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line/70 pt-5 text-[1.05rem] font-bold text-ink">
              IA empresarial não é só inteligência. É inteligência com <span className="text-signal">controle operacional</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* 5 — Método */}
      <section aria-labelledby="metodo" className="bg-liquid on-dark relative overflow-hidden py-20 text-white md:py-28">
        {/* Decoração: estrelas e globo wireframe (sem texto) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(1px_1px_at_20%_30%,#fff,transparent),radial-gradient(1px_1px_at_65%_15%,#cfe0ff,transparent),radial-gradient(1px_1px_at_82%_42%,#fff,transparent),radial-gradient(1.5px_1.5px_at_35%_70%,#fff,transparent),radial-gradient(1px_1px_at_90%_78%,#bcd,transparent)]" />
        <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute -right-16 top-1/3 hidden h-[26rem] w-[26rem] text-white/10 md:block">
          <g fill="none" stroke="currentColor" strokeWidth="0.6">
            <circle cx="100" cy="100" r="88" />
            <ellipse cx="100" cy="100" rx="88" ry="30" />
            <ellipse cx="100" cy="100" rx="88" ry="58" />
            <ellipse cx="100" cy="100" rx="30" ry="88" />
            <ellipse cx="100" cy="100" rx="58" ry="88" />
            <line x1="12" y1="100" x2="188" y2="100" />
            <line x1="100" y1="12" x2="100" y2="188" />
          </g>
        </svg>

        <Container className="relative">
          <p className="eyebrow inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-white/80 backdrop-blur-sm">
            Como funciona
          </p>
          <h2 id="metodo" className="mt-6 max-w-3xl text-[2rem] font-bold leading-[1.08] text-white md:text-[3.1rem]">
            Um método. Cinco etapas.<br className="hidden sm:block" /> Zero improviso.
          </h2>

          {/* Card de vidro fosco com as 5 etapas */}
          <div className="glass-card mt-12 rounded-[1.75rem] p-6 shadow-[0_40px_90px_-40px_rgba(8,10,45,0.9)] md:mt-16 md:p-10 lg:p-12">
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {methodSteps.map((s, i) => (
                <li
                  key={s.title}
                  className={`relative ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}
                >
                  <span className="num-outline block font-[family-name:var(--font-display)] text-[3.75rem] font-extrabold leading-none">0{i + 1}</span>
                  <h3 className="mt-6 text-[1.15rem] font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-white/70">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <TextLink href="/metodo/" className="!text-lilac">
              Conheça o Método
            </TextLink>
          </div>
        </Container>
      </section>

      {/* 5.5 — Humano + IA */}
      <Section tone="white" labelledBy="humano-ia">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="humano-ia"
            eyebrow="Automação responsável"
            title="Automatize o que pode ser automatizado. Preserve pessoas onde elas fazem diferença."
            text="A IA assume o trabalho repetitivo. As pessoas permanecem responsáveis por negociação, julgamento, criatividade e decisões sensíveis. Projetamos pontos claros de intervenção humana para que tecnologia e equipe trabalhem juntas."
          />
          <div className="rounded-[1.4rem] bg-mist p-8 ring-1 ring-line/60 md:p-10">
            <p className="text-sm text-slate">A pergunta não é</p>
            <p className="mt-2 text-[1.35rem] font-semibold text-slate/70 line-through decoration-violet-400/40 md:text-[1.5rem]">
              “Quantas pessoas a IA pode substituir?”
            </p>
            <p className="mt-8 text-sm text-slate">A pergunta correta é</p>
            <p className="mt-2 text-[1.35rem] font-bold leading-snug text-ink md:text-[1.6rem]">
              “Quanto mais essa equipe consegue fazer quando deixa de gastar tempo com tarefas que uma máquina pode executar?”
            </p>
          </div>
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
        <SectionHeading id="setores" eyebrow="Setores" title="IA desenhada para as regras do seu setor." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/setores/${s.slug}/`}
              className="group rounded-[var(--radius-card)] bg-white p-8 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] md:p-10"
            >
              <IconTile name={s.icon} />
              <h3 className="mt-7 text-[1.4rem] font-bold">{s.menuName}</h3>
              <p className="mt-2 text-slate">{s.cardText}</p>
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

      {/* 7.1 — Diagnóstico de IA */}
      <Section tone="white" labelledBy="diagnostico">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="diagnostico"
              eyebrow="Antes de construir"
              title="Primeiro descobrimos onde vale a pena usar IA."
              text="Implementar IA só porque a tecnologia existe é uma forma cara de resolver o problema errado. Por isso, projetos mais amplos podem começar pelo Diagnóstico Soluna: analisamos processos, sistemas, volumes e gargalos para identificar e priorizar oportunidades por impacto, complexidade e potencial de retorno."
            />
            <ButtonLink href="/diagnostico/" className="mt-7">
              Conhecer o Diagnóstico Soluna
            </ButtonLink>
          </div>
          <div className="rounded-[1.4rem] bg-mist p-8 ring-1 ring-line/60 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate">O diagnóstico pode incluir</p>
            <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {diagnosticoInclui.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[0.95rem] text-slate">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line/70 pt-5 text-slate">
              <span className="text-lg font-bold text-signal">Plano em até 7 dias.</span> O valor pode ser creditado no projeto contratado, conforme condições comerciais vigentes.
            </p>
          </div>
        </div>
      </Section>

      {/* 7.2 — Ferramentas gratuitas */}
      <Section tone="mist" labelledBy="ferramentas">
        <SectionHeading
          id="ferramentas"
          eyebrow="Meça antes de contratar"
          title="Antes de acreditar na gente, olhe para os seus próprios números."
          text="Criamos ferramentas gratuitas para ajudar a identificar gargalos e estimar oportunidades antes mesmo de conversar com a Soluna."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ferramentasGratuitas.map((f) => (
            <div key={f.title} className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-50 text-violet-400 ring-1 ring-violet-100">
                <Icon name={f.icon} className="size-[1.1rem]" />
              </span>
              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug">{f.title}</h3>
              <p className="mt-2 text-[0.88rem] leading-snug text-slate">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="/ferramentas/">Usar ferramentas gratuitas</ButtonLink>
          <p className="text-sm text-slate">Sem cadastro. Resultado na hora.</p>
        </div>
      </Section>

      {/* 7.3 — Quando não usar IA */}
      <Section tone="white" labelledBy="quando-nao">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="quando-nao" align="center" eyebrow="Tecnologia com critério" title="Nem todo problema precisa de inteligência artificial." />
          <div className="mt-6 space-y-3 text-lg leading-relaxed text-slate">
            <p>Às vezes uma automação simples resolve. Às vezes o problema está no processo. Às vezes um sistema precisa ser reorganizado antes de qualquer IA entrar. E existem decisões que continuam melhores nas mãos de uma pessoa.</p>
            <p>Nosso trabalho não é colocar IA em tudo. É encontrar onde a tecnologia realmente melhora a operação.</p>
          </div>
          <p className="mt-7 text-[1.3rem] font-bold text-ink md:text-[1.5rem]">Quando IA não for a melhor resposta, nós dizemos.</p>
        </div>
      </Section>

      {/* 7.4 — Arquitetura */}
      <Section tone="mist" labelledBy="arquitetura">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="arquitetura"
              eyebrow="Arquitetura"
              title="Escolhemos a tecnologia de acordo com o problema."
              text="Um projeto pode combinar modelos de IA, bancos de dados, APIs, plataformas de automação, ferramentas de comunicação e sistemas já usados pela empresa."
            />
            <div className="mt-6 rounded-[1.2rem] bg-white p-6 ring-1 ring-line/60">
              <p className="text-slate">Não começamos perguntando <span className="text-slate/60 line-through">“Como colocar determinada ferramenta na sua empresa?”</span></p>
              <p className="mt-2 font-bold text-ink">Começamos perguntando: “Qual arquitetura resolve melhor este problema?”</p>
            </div>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate">A arquitetura considera fatores como</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {arquiteturaFatores.map((f) => (
                <li key={f} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-slate ring-1 ring-line/70">{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 7.45 — Independência tecnológica */}
      <Section tone="white" labelledBy="independencia">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading id="independencia" align="center" eyebrow="A solução é sua" title="Sua empresa não deveria ficar presa à agência que construiu a solução." />
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Sempre que tecnicamente possível, estruturamos projetos para que contas, dados, integrações e ativos sejam controlados pela empresa contratante — o que facilita governança, continuidade e evolução ao longo do tempo. Arquitetura, propriedade de código, credenciais, documentação e condições de saída são definidas com clareza no escopo e no contrato de cada projeto.
          </p>
          <p className="mt-6 text-[1.15rem] font-semibold text-ink">Porque parceria tecnológica saudável também significa liberdade.</p>
        </div>
      </Section>

      {/* 7.5 — Serviços complementares (secundário) */}
      <Section tone="mist" labelledBy="complementares" className="!pt-4">
        <SectionHeading
          id="complementares"
          eyebrow="Tecnologia completa"
          title="Quando o projeto precisa de mais do que IA, nós construímos."
          text="Nossa especialidade é IA e automação. Mas algumas transformações exigem uma estrutura digital maior — e a Soluna também desenvolve os ativos que sustentam a estratégia."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {complementaryServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] hover:ring-violet-400/40"
            >
              {s.icon && (
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-mist text-slate ring-1 ring-line/70 transition-colors group-hover:bg-violet-50 group-hover:text-violet-400">
                  <Icon name={s.icon} className="size-[1.1rem]" />
                </span>
              )}
              <h3 className="mt-4 text-[1.02rem] font-bold">{s.label.replace("Desenvolvimento de ", "")}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-snug text-slate">{s.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-signal">
                Conhecer <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7.6 — SEO + GEO */}
      <Section tone="white" labelledBy="seo-geo">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="seo-geo"
              eyebrow="A nova busca"
              title="Sua empresa precisa ser encontrada pelo Google — e compreendida pelas IAs."
              text="Além dos buscadores tradicionais, as pessoas também usam ferramentas de IA para pesquisar soluções, fornecedores, produtos e serviços. Nosso trabalho de SEO e GEO estrutura o site para que buscadores e sistemas de IA entendam com clareza:"
            />
            <ButtonLink href="/servicos/seo-e-geo/" className="mt-7">
              Conhecer SEO e GEO
            </ButtonLink>
          </div>
          <div className="rounded-[1.4rem] bg-mist p-8 ring-1 ring-line/60 md:p-10">
            <ul className="space-y-3">
              {seoGeoEntende.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[1.02rem] text-ink">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-accent-strong" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line/70 pt-5 text-[0.95rem] text-slate">
              Combinamos SEO técnico, arquitetura de conteúdo, dados estruturados, conteúdo especializado, autoridade de entidade e mensuração contínua.
            </p>
          </div>
        </div>
      </Section>

      {/* 7.7 — Por que Soluna */}
      <Section tone="mist" labelledBy="porque">
        <SectionHeading id="porque" eyebrow="Por que empresas escolhem a Soluna" title="Estratégia, engenharia e execução no mesmo time." align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {porqueSoluna.map((p) => (
            <div key={p.title} className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal-50 text-signal">
                <Icon name={p.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-[1.15rem] font-bold">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{p.text}</p>
            </div>
          ))}
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
            <SectionHeading id="duvidas" eyebrow="Perguntas frequentes" title="O que empresas querem saber antes de começar." text="Não encontrou o que procura? Fale com a gente no Diagnóstico." />
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
      <CTASection
        title="Descubra onde a IA pode gerar mais impacto na sua empresa."
        text="Antes de falar sobre ferramentas, modelos ou automações, queremos entender sua operação. No Diagnóstico, mapeamos processos, gargalos e sistemas para achar onde agentes de IA e automação geram maior retorno."
      />
    </>
  );
}
