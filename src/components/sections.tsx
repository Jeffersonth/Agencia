import Link from "next/link";
import QRCode from "qrcode";
import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronRight, KeyRound, Lock, LogOut, Minus, Plus, ScrollText, ShieldCheck } from "lucide-react";
import type { FAQ, ServicePage, SolutionHub, Step } from "@/content/types";
import { serviceHref } from "@/content/solutions";
import { brl, site, whatsappLink } from "@/lib/site";
import { Badge, ButtonLink, Container, Eyebrow, Section, SectionHeading, TextLink, cx } from "@/components/ui";
import { IconTile, WhatsAppGlyph } from "@/components/Icon";
import { LogoMark } from "@/components/layout/Logo";
import { Orb } from "@/components/Orb";

/* ───────────────────────────── Breadcrumbs ───────────────────────────── */

export function Breadcrumbs({ items, dark }: { items: { name: string; path: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Você está em" className="text-sm">
      <ol className={cx("flex flex-wrap items-center gap-1.5", dark ? "text-white/60" : "text-slate")}>
        <li>
          <Link href="/" className={dark ? "hover:text-white" : "hover:text-ink"}>
            Início
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            <ChevronRight aria-hidden className="size-3.5 opacity-60" />
            {i === items.length - 1 ? (
              <span aria-current="page" className={dark ? "text-white/85" : "text-ink"}>
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className={dark ? "hover:text-white" : "hover:text-ink"}>
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ───────────────────────────── Page hero ───────────────────────────── */

export function PageHero({
  crumbs,
  eyebrow,
  title,
  answer,
  actions,
  visual,
  aside,
  children,
  centered,
  orbs = true,
}: {
  crumbs: { name: string; path: string }[];
  eyebrow?: ReactNode;
  title: ReactNode;
  /** Resposta direta (40–60 palavras): o trecho que as IAs citam. */
  answer?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
  orbs?: boolean;
}) {
  return (
    <section className="bg-hero on-dark relative overflow-hidden text-white">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(120,170,255,.28),transparent_70%)] blur-md" />
      {orbs && !visual && (
        <>
          <Orb tone="blue" className="animate-float pointer-events-none absolute right-[9%] top-28 hidden size-32 lg:block" />
          <Orb tone="cyan" wave={false} className="animate-float pointer-events-none absolute bottom-16 right-[22%] hidden size-12 [animation-delay:2s] lg:block" />
        </>
      )}
      <Container className="relative pb-16 pt-8 md:pb-24 md:pt-10">
        <div className={cx(centered && !visual && "flex justify-center")}>
          <Breadcrumbs items={crumbs} dark />
        </div>
        <div className={cx("mt-10 grid items-center gap-12 md:mt-12", !!visual && "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16")}>
          <div className={cx(centered && !visual && "mx-auto max-w-3xl text-center")}>
            {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
            <h1 className="text-[2.3rem] leading-[1.08] text-white md:text-[3rem] xl:text-[3.2rem]">{title}</h1>
            {answer && (
              <p data-answer className={cx("mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-[1.2rem]", centered && !visual && "mx-auto")}>
                {answer}
              </p>
            )}
            {actions && <div className={cx("mt-8 flex flex-wrap items-center gap-3", centered && !visual && "justify-center")}>{actions}</div>}
            {aside}
          </div>
          {visual && <div className="animate-rise text-ink [animation-delay:120ms]">{visual}</div>}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function DiagnosticActions({ secondary }: { secondary?: { href: string; label: string } }) {
  return (
    <>
      <ButtonLink href="/diagnostico/" size="lg">
        Agendar diagnóstico
      </ButtonLink>
      {secondary && (
        <ButtonLink href={secondary.href} size="lg" variant="ghost-light">
          {secondary.label}
        </ButtonLink>
      )}
    </>
  );
}

/* ───────────────────────────── Resposta direta ───────────────────────────── */

export function DirectAnswer({ children, label = "Em resumo" }: { children: ReactNode; label?: string }) {
  return (
    <div className="relative border-l-[3px] border-violet-400 pl-6 md:pl-8">
      <p className="eyebrow mb-3">{label}</p>
      <p data-answer className="font-[family-name:var(--font-display)] text-xl font-normal leading-relaxed tracking-[-0.01em] text-ink md:text-[1.6rem] md:leading-[1.55]">
        {children}
      </p>
    </div>
  );
}

/* ───────────────────────────── Listas ───────────────────────────── */

export function Checklist({ items, dark, className }: { items: ReactNode[]; dark?: boolean; className?: string }) {
  return (
    <ul className={cx("space-y-3.5", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className={cx("mt-1 inline-flex size-5 shrink-0 items-center justify-center", dark ? "text-mint" : "text-accent")}>
            <Check aria-hidden className="size-[1.1rem]" strokeWidth={2.5} />
          </span>
          <span className={dark ? "text-white/80" : "text-ink/85"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepsList({ steps, dark }: { steps: Step[]; dark?: boolean }) {
  return (
    <ol className="relative grid gap-0">
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0">
          {i < steps.length - 1 && (
            <span aria-hidden className={cx("absolute left-[1.15rem] top-11 bottom-1 w-0.5", dark ? "bg-white/15" : "bg-gradient-to-b from-violet-400 to-signal")} />
          )}
          <span
            className={cx(
              "relative z-10 inline-flex size-[2.35rem] shrink-0 items-center justify-center rounded-full text-sm font-semibold",
              dark ? "bg-white text-ink" : "bg-navy-900 text-sky",
            )}
          >
            {i + 1}
          </span>
          <div className="pt-1">
            <h3 className={cx("text-lg font-semibold", dark && "text-white")}>{s.title}</h3>
            <p className={cx("mt-1", dark ? "text-white/70" : "text-slate")}>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Chips({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((i) => (
        <li
          key={i}
          className={cx(
            "rounded-full border px-4 py-2 text-[0.92rem] font-medium",
            dark ? "border-white/15 bg-white/5 text-white/85" : "border-line/70 bg-white font-semibold text-ink shadow-[var(--shadow-card)]",
          )}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

/* ───────────────────────────── FAQ ───────────────────────────── */

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-3.5">
      {items.map((f, i) => (
        <details
          key={f.q}
          open={i === 0}
          className="group rounded-2xl bg-white px-6 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-colors open:bg-[linear-gradient(135deg,#7c4dff,#4d7cff)] open:shadow-[var(--shadow-glow)] open:ring-0"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-[family-name:var(--font-display)] text-[1.02rem] font-semibold tracking-[-0.01em] group-open:text-white">{f.q}</h3>
            <span className="shrink-0 text-signal group-open:text-white" aria-hidden>
              <Plus className="size-5 group-open:hidden" />
              <Minus className="hidden size-5 group-open:block" />
            </span>
          </summary>
          <p className="-mt-1 pb-6 pr-8 text-[0.95rem] text-white/85">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FAQSection({ items, title = "Perguntas que todo mundo faz antes de começar", tone = "mist" }: { items: FAQ[]; title?: string; tone?: "white" | "mist" }) {
  return (
    <Section tone={tone} labelledBy="faq-titulo">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="faq-titulo"
          eyebrow="Dúvidas"
          title={title}
          text={
            <>
              Não encontrou o que procura? <Link href="/contato/" className="font-semibold text-signal hover:underline">Fale com a gente</Link> ou tire no diagnóstico.
            </>
          }
        />
        <FAQList items={items} />
      </div>
    </Section>
  );
}

/* ───────────────────────────── CTA de Diagnóstico ───────────────────────────── */

export function CTASection({
  title = "Vamos descobrir onde a IA gera mais retorno na sua empresa?",
  text = "Comece pelo Diagnóstico. Mapeamos seus processos, apontamos o potencial de ROI e o valor é creditado no projeto.",
  showWhatsApp = true,
}: {
  title?: string;
  text?: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section className="bg-mist py-16 md:py-24">
      <Container>
        <div className="bg-hero on-dark relative overflow-hidden rounded-[1.75rem] px-6 py-14 text-white shadow-[var(--shadow-float)] md:px-14 md:py-16">
          <svg aria-hidden viewBox="0 0 800 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-6 h-24 w-full opacity-60">
            <path d="M0 90 C 200 60, 420 50, 800 20" fill="none" stroke="#8ab4ff" strokeOpacity="0.5" strokeWidth="1.2" />
          </svg>
          <div className={cx("relative grid items-center gap-10", showWhatsApp && "lg:grid-cols-[1.45fr_0.55fr]")}>
            <div className={cx(!showWhatsApp && "mx-auto max-w-3xl text-center")}>
              <h2 className="text-[1.9rem] text-white md:text-[2.6rem]">{title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/70">{text}</p>
              <div className={cx("mt-8 flex flex-wrap gap-3", !showWhatsApp && "justify-center")}>
                <ButtonLink href="/diagnostico/" size="lg">
                  Agendar diagnóstico
                </ButtonLink>
                <ButtonLink href="/investimento/" variant="ghost-light" size="lg">
                  Ver investimento
                </ButtonLink>
              </div>
              <p className="mt-5 text-sm text-white/50">Valor 100% creditado no projeto se você seguir em até 30 dias.</p>
            </div>
            {showWhatsApp && <WhatsAppCard />}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** QR code do WhatsApp (atendido pelo próprio agente — a melhor demonstração). */
export async function WhatsAppCard({ light }: { light?: boolean }) {
  const link = whatsappLink(`Olá! Vim pelo site da ${site.name} e quero conhecer o agente de IA.`);
  // QR code gerado no build, sem depender de serviço externo.
  const qrSvg = await QRCode.toString(link, { type: "svg", margin: 0, color: { dark: "#0A1F44", light: "#FFFFFF" } });
  return (
    <div
      className={cx(
        "rounded-[var(--radius-card)] p-6 text-center",
        light ? "bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60" : "glass",
      )}
    >
      <div className="mx-auto w-fit rounded-2xl bg-white p-3">
        <div
          role="img"
          aria-label="QR code para falar com o nosso agente no WhatsApp"
          className="size-[150px] [&>svg]:size-full"
          dangerouslySetInnerHTML={{ __html: qrSvg }}
        />
      </div>
      <p className={cx("mt-4 font-semibold", light ? "text-ink" : "text-white")}>Fale com o nosso agente</p>
      <p className={cx("mt-1 text-sm", light ? "text-slate" : "text-white/65")}>
        Atendido pela própria IA que implantamos. A melhor demonstração.
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#157a5a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#116a4e]"
      >
        <WhatsAppGlyph className="size-4" /> Abrir no WhatsApp
      </a>
    </div>
  );
}

/* ───────────────────────────── Segurança / LGPD ───────────────────────────── */

const securityPoints = [
  { icon: WhatsAppGlyph, label: "API oficial do WhatsApp" },
  { icon: ShieldCheck, label: "Adequação à LGPD" },
  { icon: Lock, label: "Opção de IA privada" },
  { icon: KeyRound, label: "Contas e dados em nome da sua empresa" },
  { icon: LogOut, label: "Código e automações com cláusula de saída" },
];

export function SecurityStrip({ text }: { text?: string }) {
  return (
    <div className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60 md:p-9">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow mb-3">Segurança</p>
          <h3 className="text-2xl font-bold">Seus dados continuam seus.</h3>
          {text && <p className="mt-3 text-slate">{text}</p>}
        </div>
        <TextLink href="/seguranca-e-lgpd/" className="shrink-0">
          Como tratamos seus dados
        </TextLink>
      </div>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {securityPoints.map(({ icon: I, label }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl bg-mist px-4 py-3 text-[0.92rem] font-medium">
            <I className="size-[1.1rem] shrink-0 text-violet-400" aria-hidden />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────────── Prova ───────────────────────────── */

export function IndicatorsBlock({
  indicators,
  demoHref,
  note,
}: {
  indicators: string[];
  demoHref?: string;
  note?: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div>
        <Eyebrow className="mb-4">Prova</Eyebrow>
        <h2 className="text-[1.9rem] font-bold md:text-[2.5rem]">Resultado que dá para medir.</h2>
        <p className="mt-5 text-lg text-slate">
          {note ??
            "No Diagnóstico registramos o “antes” da sua operação. Depois da implantação, acompanhamos os mesmos indicadores todo mês — é assim que o resultado vira número, e não promessa."}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {demoHref && (
            <ButtonLink href={demoHref} variant="secondary" arrow>
              Ver projeto demonstrativo
            </ButtonLink>
          )}
          <ButtonLink href={whatsappLink("Quero testar o agente de demonstração")} variant="secondary">
            <WhatsAppGlyph className="size-4 text-accent-strong" /> Testar agente de demonstração
          </ButtonLink>
        </div>
      </div>
      <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60 md:p-8">
        <p className="text-sm font-semibold text-slate">Indicadores acompanhados</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {indicators.map((ind, i) => (
            <li key={ind} className="rounded-xl bg-mist p-5">
              <span className="text-xs font-semibold tabular-nums text-violet">0{i + 1}</span>
              <p className="mt-2 font-[family-name:var(--font-display)] font-semibold leading-snug text-ink">{ind}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ───────────────────────────── Preço ───────────────────────────── */

export function PriceBlock({ service }: { service: Pick<ServicePage, "pricing" | "name"> }) {
  const p = service.pricing;
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-lift)] ring-1 ring-line/60">
      <div className="bg-hero p-7 text-white md:p-9">
        <p className="text-sm font-medium text-white/65">{p.prefix ?? "A partir de"}</p>
        <p className="text-gradient mt-1 w-fit font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
          {brl(p.from)}
          {p.suffix && <span className="ml-2 text-lg font-medium text-white/65">{p.suffix}</span>}
        </p>
        {p.timeline && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium">
            <span className="size-1.5 rounded-full bg-mint" aria-hidden /> Entrega em {p.timeline}
          </p>
        )}
      </div>
      <div className="p-7 md:p-9">
        {p.tiers && (
          <ul className="mb-6 divide-y divide-line rounded-xl border border-line">
            {p.tiers.map((t) => (
              <li key={t.name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  {t.note && <span className="block text-sm text-slate">{t.note}</span>}
                </span>
                <span className="shrink-0 font-semibold text-signal">a partir de {brl(t.from)}</span>
              </li>
            ))}
          </ul>
        )}
        <Checklist items={p.details} />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="/diagnostico/" arrow>
            Receber proposta fechada
          </ButtonLink>
          <TextLink href="/investimento/">Como cobramos</TextLink>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── Cards ───────────────────────────── */

export function ServiceCard({ service, showSolution }: { service: ServicePage; showSolution?: string }) {
  return (
    <Link
      href={serviceHref(service)}
      className="group relative flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
    >
      <div className="flex items-start justify-between gap-4">
        <IconTile name={service.icon} />
        {service.featured && <Badge tone="violet">Mais procurado</Badge>}
      </div>
      {showSolution && <p className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-slate">{showSolution}</p>}
      <h3 className={cx("text-[1.2rem] font-bold", showSolution ? "mt-1.5" : "mt-6")}>{service.name}</h3>
      <p className="mt-2 flex-1 text-slate">{service.cardDescription}</p>
      <p className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
        <span className="text-slate">
          a partir de <strong className="font-semibold text-ink">{brl(service.pricing.from)}</strong>
        </span>
        <ArrowRight aria-hidden className="size-4 text-signal transition-transform group-hover:translate-x-1" />
      </p>
    </Link>
  );
}

export function HubCard({ hub, index, dark }: { hub: SolutionHub; index?: number; dark?: boolean }) {
  return (
    <Link
      href={`/solucoes/${hub.slug}/`}
      className={cx(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border p-7 transition-all duration-200 hover:-translate-y-0.5 md:p-8",
        dark
          ? "border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.07]"
          : "border-transparent bg-white shadow-[var(--shadow-card)] ring-1 ring-line/60 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40",
      )}
    >
      <div className="flex items-center justify-between">
        <IconTile name={hub.icon} dark={dark} />
        {index !== undefined && (
          <span className={cx("text-sm font-semibold tabular-nums", dark ? "text-white/40" : "text-slate/70")}>0{index + 1}</span>
        )}
      </div>
      <h3 className={cx("mt-7 text-[1.3rem] font-bold", dark && "text-white")}>{hub.name}</h3>
      <p className={cx("mt-3 flex-1", dark ? "text-white/70" : "text-slate")}>{hub.menuDescription}</p>
      <span className={cx("mt-7 inline-flex items-center gap-1.5 font-semibold", dark ? "text-white" : "text-signal")}>
        Conhecer a solução
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function LinkCard({ href, title, text, meta }: { href: string; title: string; text?: string; meta?: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
    >
      {meta && <span className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-violet">{meta}</span>}
      <span className={cx("font-[family-name:var(--font-display)] text-[1.05rem] font-semibold tracking-[-0.01em] text-ink", meta && "mt-2")}>{title}</span>
      {text && <span className="mt-2 flex-1 text-[0.95rem] text-slate">{text}</span>}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
        Ler mais <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/* ───────────────────────────── Assinatura (E-E-A-T) ───────────────────────────── */

export function Signature({ updatedAt }: { updatedAt: string }) {
  const date = new Date(`${updatedAt}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  return (
    <div className="border-t border-line bg-mist">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="size-9" />
          <p>
            Escrito por{" "}
            <Link href="/sobre/" className="font-semibold text-ink hover:text-signal">
              {site.founder.name}
            </Link>
 · {site.founder.jobTitle.replace("·", "de").replace("Fundador", "fundador")} na {site.name}
          </p>
        </div>
        <p className="inline-flex items-center gap-2">
          <ScrollText aria-hidden className="size-4" /> Atualizado em <time dateTime={updatedAt}>{date}</time>
        </p>
      </Container>
    </div>
  );
}
