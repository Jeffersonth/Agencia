import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, FileKey, KeyRound, Lock, LogOut, Scale, ShieldCheck } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui";
import { WhatsAppGlyph } from "@/components/Icon";
import { CTASection, DiagnosticActions, FAQSection, PageHero, Signature } from "@/components/sections";
import { VaultMock } from "@/components/visuals";

const path = "/seguranca-e-lgpd/";

export const metadata: Metadata = pageMetadata({
  title: "Segurança de Dados e LGPD",
  description:
    "API oficial do WhatsApp, contas e dados em nome da sua empresa, adequação à LGPD, IA privada para dados sensíveis e cláusula de saída. Veja como tratamos seus dados.",
  path,
});

const blocks = [
  {
    icon: KeyRound,
    title: "Propriedade dos dados",
    text: "Número de WhatsApp, contas de provedores, CRM, bases de conhecimento e dados ficam em nome da sua empresa. Nós operamos; você é o dono.",
  },
  {
    icon: WhatsAppGlyph,
    title: "API oficial do WhatsApp",
    text: "Trabalhamos somente com a API oficial da Meta, sem risco de banimento e sem ferramentas que simulam o aplicativo.",
  },
  {
    icon: ShieldCheck,
    title: "LGPD na prática",
    text: "Base legal definida para cada tratamento, consentimento quando necessário, controle de acesso por perfil e logs de uso.",
  },
  {
    icon: Lock,
    title: "IA privada para dados sensíveis",
    text: "Para documentos confidenciais e dados de saúde, usamos provedores com não retenção de dados ou modelos em ambiente dedicado.",
    href: "/solucoes/ia-corporativa/ia-privada/",
  },
  {
    icon: FileKey,
    title: "Governança de IA",
    text: "Política de uso, ferramentas aprovadas, registros e auditoria. Sua equipe sabe o que pode e o que não pode.",
    href: "/solucoes/ia-corporativa/governanca-ia-lgpd/",
  },
  {
    icon: LogOut,
    title: "Cláusula de saída",
    text: "Exportação dos dados e de tudo o que foi construído — código, fluxos, prompts e documentação — prevista em contrato.",
  },
  {
    icon: Scale,
    title: "Setores regulados",
    text: "Um profissional do cliente valida conteúdos e roteiros, e a comunicação segue as regras da OAB e dos conselhos de saúde (como o CFM).",
  },
];

const faq = [
  { q: "É seguro usar IA no atendimento de uma clínica ou de um escritório?", a: "Sim, com API oficial, dados em nome da empresa, controle de acesso, logs e, quando há dados sensíveis, IA privada. O agente cuida do administrativo e do acolhimento; a orientação clínica ou jurídica é sempre do profissional." },
  { q: "Meus dados treinam o modelo de IA?", a: "Não. Usamos provedores corporativos com contrato de não retenção de dados ou modelos em ambiente privado. Seus dados não são usados para treinar modelos de terceiros." },
  { q: "E a LGPD?", a: "Cada projeto define a base legal dos tratamentos, coleta consentimento quando necessário, restringe acessos e registra o uso. Trabalhamos junto com o jurídico ou o DPO da sua empresa." },
  { q: "Fico preso ao fornecedor?", a: "Não. Contas, dados e código ficam em nome da sua empresa, e a saída — com exportação de tudo — está prevista em contrato." },
  { q: "Onde os dados ficam armazenados?", a: "Em provedores de nuvem de mercado, em contas da sua empresa. Quando a exigência é máxima, em servidor dedicado ou on-premise." },
  { q: "Quem da equipe de vocês acessa meus dados?", a: "Somente as pessoas do projeto, com acesso nominal, registrado e revogado ao final do trabalho." },
];

export default function SegurancaPage() {
  const crumbs = [{ name: "Segurança e LGPD", path }];
  return (
    <>
      <JsonLd data={graph(faqSchema(faq), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Segurança e LGPD"
        title="Seus dados continuam seus."
        answer="Levamos a segurança de dados a sério em todos os projetos. Usamos a API oficial do WhatsApp, mantemos contas e dados em nome da sua empresa, seguimos a LGPD e oferecemos IA privada para informações sensíveis. Você mantém o controle e a portabilidade de tudo."
        actions={<DiagnosticActions secondary={{ href: "#faq-titulo", label: "Perguntas frequentes" }} />}
        visual={<VaultMock />}
      />

      <Section labelledBy="principios">
        <SectionHeading id="principios" eyebrow="Como tratamos seus dados" title="Sete compromissos, em todo projeto." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(({ icon: I, title, text, href }) => (
            <div key={title} className="flex flex-col rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-7 shadow-[var(--shadow-card)]">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal-50 text-signal">
                <I className="size-5" aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-slate">{text}</p>
              {href && (
                <Link href={href} className="mt-5 text-sm font-semibold text-signal hover:underline">
                  Saiba mais →
                </Link>
              )}
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-[var(--radius-card)] bg-navy p-7 text-white">
            <BadgeCheck aria-hidden className="size-7 text-accent" />
            <p className="mt-5 text-xl font-semibold">Quer ver isso no contrato?</p>
            <p className="mt-2 text-white/70">Cada compromisso desta página vira cláusula na proposta.</p>
          </div>
        </div>
      </Section>

      <FAQSection items={faq} tone="mist" title="Perguntas que recebemos sobre segurança" />
      <CTASection title="Segurança é a base. Vamos falar do resultado?" />
      <Signature updatedAt="2026-09-24" />
    </>
  );
}
