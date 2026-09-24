import Link from "next/link";
import QRCode from "qrcode";
import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, ChevronRight, KeyRound, Lock, LogOut, ScrollText, ShieldCheck } from "lucide-react";
import type { FAQ, ServicePage, SolutionHub, Step } from "@/content/types";
import { serviceHref } from "@/content/solutions";
import { brl, site, whatsappLink } from "@/lib/site";
import { Badge, ButtonLink, Container, Eyebrow, Section, SectionHeading, TextLink, cx } from "@/components/ui";
import { IconTile, WhatsAppGlyph } from "@/components/Icon";
import { LogoMark } from "@/components/layout/Logo";

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
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mist">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" />
      <Container className="relative pb-16 pt-8 md:pb-24 md:pt-10">
        <Breadcrumbs items={crumbs} />
        <div className={cx("mt-10 grid items-center gap-12 md:mt-14", !!visual && "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16")}>
          <div>
            {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
            <h1 className="text-[2.25rem] font-semibold leading-[1.08] md:text-[3.1rem] xl:text-[3.3rem]">{title}</h1>
            {answer && (
              <p data-answer className="mt-6 max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
                {answer}
              </p>
            )}
            {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
            {aside}
          </div>
          {visual && <div className="animate-rise [animation-delay:120ms]">{visual}</div>}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function DiagnosticActions({ secondary }: { secondary?: { href: string; label: string } }) {
  return (
    <>
      <ButtonLink href="/diagnostico/" size="lg" arrow>
        Agendar Diagnóstico
      </ButtonLink>
      {secondary && (
        <ButtonLink href={secondary.href} size="lg" variant="secondary">
          {secondary.label}
        </ButtonLink>
      )}
    </>
  );
}

/* ───────────────────────────── Resposta direta ───────────────────────────── */

export function DirectAnswer({ children, label = "Em resumo" }: { children: ReactNode; label?: string }) {
  return (
    <div className="relative rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] md:p-10">
      <span className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-signal md:top-10" aria-hidden />
      <p className="eyebrow mb-4">{label}</p>
      <p data-answer className="text-xl leading-relaxed text-ink md:text-[1.6rem] md:leading-[1.5]">
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
          <span
            className={cx(
              "mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
              dark ? "bg-accent/20 text-accent" : "bg-accent-50 text-accent-strong",
            )}
          >
            <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
          </span>
          <span className={dark ? "text-white/85" : "text-ink"}>{item}</span>
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
            <span aria-hidden className={cx("absolute left-[1.15rem] top-11 bottom-1 w-px", dark ? "bg-white/15" : "bg-line-strong")} />
          )}
          <span
            className={cx(
              "relative z-10 inline-flex size-[2.35rem] shrink-0 items-center justify-center rounded-full text-sm font-semibold",
              dark ? "bg-white text-navy" : "bg-navy text-white",
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
            dark ? "border-white/15 bg-white/5 text-white/85" : "border-line bg-white text-ink shadow-[var(--shadow-card)]",
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
    <div className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-6 md:px-8">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-semibold">{f.q}</h3>
            <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-mist text-slate transition-transform group-open:rotate-180">
              <ChevronDown aria-hidden className="size-4" />
            </span>
          </summary>
          <p className="-mt-2 pb-6 pr-10 text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FAQSection({ items, title = "Perguntas frequentes", tone = "white" }: { items: FAQ[]; title?: string; tone?: "white" | "mist" }) {
  return (
    <Section tone={tone} labelledBy="faq-titulo">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="faq-titulo"
          eyebrow="FAQ"
          title={title}
          text={
            <>
              Não achou sua dúvida? <Link href="/contato/" className="font-semibold text-signal hover:underline">Fale com a gente</Link>.
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
    <section className="on-dark relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div aria-hidden className="grid-bg-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-signal/25 blur-3xl" />
      <Container className="relative">
        <div className={cx("grid items-center gap-12", showWhatsApp && "lg:grid-cols-[1.4fr_0.6fr]")}>
          <div>
            <Eyebrow className="mb-5">Diagnóstico de IA & Automação</Eyebrow>
            <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-lg text-white/75 md:text-xl">{text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/diagnostico/" variant="light" size="lg" arrow>
                Agendar Diagnóstico
              </ButtonLink>
              <ButtonLink href="/investimento/" variant="ghost-light" size="lg">
                Ver investimento
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-white/55">Valor 100% creditado no projeto se você seguir em até 30 dias.</p>
          </div>
          {showWhatsApp && <WhatsAppCard />}
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
        light ? "border border-line bg-white shadow-[var(--shadow-lift)]" : "border border-white/15 bg-white/5 backdrop-blur",
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
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-[#32d583]"
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
    <div className="rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] md:p-9">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow mb-3">Segurança</p>
          <h3 className="text-2xl font-semibold">Seus dados continuam seus.</h3>
          {text && <p className="mt-3 text-slate">{text}</p>}
        </div>
        <TextLink href="/seguranca-e-lgpd/" className="shrink-0">
          Como tratamos seus dados
        </TextLink>
      </div>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {securityPoints.map(({ icon: I, label }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl bg-mist px-4 py-3 text-[0.92rem] font-medium">
            <I className="size-[1.1rem] shrink-0 text-signal" aria-hidden />
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
        <h2 className="text-3xl font-semibold md:text-[2.5rem]">Resultado que dá para medir.</h2>
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
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
        <p className="text-sm font-semibold text-slate">Indicadores acompanhados</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {indicators.map((ind, i) => (
            <li key={ind} className="rounded-xl border border-line bg-mist p-5">
              <span className="text-xs font-semibold tabular-nums text-accent-strong">0{i + 1}</span>
              <p className="mt-2 font-semibold leading-snug text-ink">{ind}</p>
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
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-lift)]">
      <div className="bg-navy p-7 text-white md:p-9">
        <p className="text-sm font-medium text-white/65">{p.prefix ?? "A partir de"}</p>
        <p className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
          {brl(p.from)}
          {p.suffix && <span className="ml-2 text-lg font-medium text-white/65">{p.suffix}</span>}
        </p>
        {p.timeline && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden /> Entrega em {p.timeline}
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
      className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex items-start justify-between gap-4">
        <IconTile name={service.icon} />
        {service.featured && <Badge tone="blue">Mais procurado</Badge>}
      </div>
      {showSolution && <p className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-slate">{showSolution}</p>}
      <h3 className={cx("text-xl font-semibold", showSolution ? "mt-1.5" : "mt-6")}>{service.name}</h3>
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
          : "border-line bg-white shadow-[var(--shadow-card)] hover:border-signal/40 hover:shadow-[var(--shadow-lift)]",
      )}
    >
      <div className="flex items-center justify-between">
        <IconTile name={hub.icon} dark={dark} />
        {index !== undefined && (
          <span className={cx("text-sm font-semibold tabular-nums", dark ? "text-white/40" : "text-slate/70")}>0{index + 1}</span>
        )}
      </div>
      <h3 className={cx("mt-8 text-2xl font-semibold", dark && "text-white")}>{hub.name}</h3>
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
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)]"
    >
      {meta && <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate">{meta}</span>}
      <span className={cx("text-lg font-semibold text-ink", meta && "mt-2")}>{title}</span>
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
    <div className="border-t border-line bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="size-9" />
          <p>
            Escrito por{" "}
            <Link href="/sobre/" className="font-semibold text-ink hover:text-signal">
              {site.founder.name}
            </Link>
            , {site.founder.jobTitle.toLowerCase()} da {site.name}
          </p>
        </div>
        <p className="inline-flex items-center gap-2">
          <ScrollText aria-hidden className="size-4" /> Atualizado em <time dateTime={updatedAt}>{date}</time>
        </p>
      </Container>
    </div>
  );
}
