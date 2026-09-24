import type { Metadata } from "next";
import { breadcrumbSchema, founderSchema, graph, organizationSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, Section, SectionHeading } from "@/components/ui";
import { LinkedInGlyph } from "@/components/Icon";
import { Checklist, Chips, CTASection, DiagnosticActions, PageHero } from "@/components/sections";

const path = "/sobre/";

export const metadata: Metadata = pageMetadata({
  title: `Sobre a ${site.name} | Engenharia de IA para Empresas`,
  absoluteTitle: true,
  description: `A ${site.name} é um estúdio de engenharia de IA com mais de 4 anos de experiência e mais de 300 projetos entregues, atuando em setores regulados como jurídico e saúde.`,
  path,
});

const initials = site.founder.name.replace(/[^A-Za-zÀ-ú ]/g, "").split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("") || "F";

export default function SobrePage() {
  const crumbs = [{ name: "Sobre", path }];
  return (
    <>
      <JsonLd data={graph(organizationSchema(true), founderSchema(), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Sobre"
        title="Engenharia de IA aplicada a resultado de negócio."
        answer={`A ${site.name} é um estúdio de engenharia de IA que ajuda empresas a atender, vender e operar melhor com agentes e automações. Reúne mais de 4 anos de experiência e mais de 300 projetos entregues, com atuação em setores regulados como jurídico e saúde, atendendo empresas em todo o Brasil.`}
        actions={<DiagnosticActions secondary={{ href: "/metodo/", label: "Nosso método" }} />}
      />

      <Section labelledBy="historia">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading id="historia" eyebrow="História e propósito" title="Por que existimos." />
          <div className="space-y-5 text-lg text-slate">
            <p>
              Em mais de 300 projetos de sites, sistemas e aplicativos, vimos o mesmo padrão se repetir: empresas com boa demanda perdendo clientes por falta de capacidade de resposta, e equipes qualificadas presas em trabalho repetitivo.
            </p>
            <p>
              A IA mudou o que é possível resolver. Por isso colocamos agentes de IA e automações no centro de tudo o que fazemos — e usamos sites, visibilidade em IA e software sob medida como capacidades que alimentam esse núcleo.
            </p>
            <p className="font-medium text-ink">
              Nosso propósito: empresas que operam melhor porque a IA trabalha dentro da operação, não ao lado dela.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="numeros">
        <h2 id="numeros" className="sr-only">
          Números
        </h2>
        <dl className="grid gap-5 md:grid-cols-3">
          {[
            [site.stats.years, "anos de engenharia"],
            [site.stats.projects, "projetos entregues"],
            ["Jurídico · Saúde", "setores regulados atendidos"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-[var(--radius-card)] border border-line bg-white p-8">
              <dd className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">{n}</dd>
              <dt className="mt-2 text-slate">{l}</dt>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="fundador">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative">
            {/* TODO: substituir pela foto profissional do fundador (next/image). */}
            <div
              role="img"
              aria-label={`Foto de ${site.founder.name}`}
              className="flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[var(--radius-card)] bg-gradient-to-br from-navy to-navy-700 text-7xl font-semibold text-white/90"
            >
              {initials}
            </div>
          </div>
          <div>
            <SectionHeading id="fundador" eyebrow="Fundador" title={site.founder.name} text={site.founder.jobTitle} />
            <div className="mt-6 space-y-4 text-lg text-slate">
              <p>
                [Trajetória do fundador: formação, experiências anteriores, projetos marcantes e por que decidiu criar a {site.name}. A autoridade da empresa se ancora na pessoa — este texto é peça-chave de E-E-A-T.]
              </p>
            </div>
            <h3 className="mt-8 text-lg font-semibold">Especialidades</h3>
            <div className="mt-4">
              <Chips items={[...site.founder.knowsAbout]} />
            </div>
            <ButtonLink href={site.founder.linkedin} variant="secondary" className="mt-8">
              <LinkedInGlyph className="size-4 text-[#0A66C2]" /> Ver perfil no LinkedIn
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="navy" labelledBy="como-trabalhamos">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            dark
            id="como-trabalhamos"
            eyebrow="Como trabalhamos"
            title="Estúdio boutique sênior, com rede de parceiros especialistas."
            text="Você fala com quem constrói. Para cada projeto, montamos o time certo com parceiros especialistas — sem camadas de gerência e sem júnior aprendendo no seu projeto."
          />
          <Checklist
            dark
            className="text-lg"
            items={[
              "Engenharia sênior na arquitetura e na revisão de cada entrega.",
              "Parceiros especialistas por demanda: design, jurídico/LGPD, dados.",
              "Comunicação direta, sem intermediários.",
              "Método claro e indicadores medidos todo mês.",
            ]}
          />
        </div>
      </Section>

      <Section labelledBy="tecnologias">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="tecnologias"
            eyebrow="Tecnologias"
            title="As ferramentas certas para cada problema."
            text="Escolhemos a tecnologia pelo problema, não o contrário."
          />
          <div className="space-y-6">
            <Card className="!p-6">
              <h3 className="font-semibold">Modelos de IA</h3>
              <div className="mt-4">
                <Chips items={["OpenAI", "Anthropic Claude", "Google Gemini", "Modelos abertos"]} />
              </div>
            </Card>
            <Card className="!p-6">
              <h3 className="font-semibold">Automação e integração</h3>
              <div className="mt-4">
                <Chips items={["n8n", "WhatsApp Business Platform", "APIs REST", "Webhooks"]} />
              </div>
            </Card>
            <Card className="!p-6">
              <h3 className="font-semibold">Produto e dados</h3>
              <div className="mt-4">
                <Chips items={["Next.js", "React Native / Expo", "Node.js", "Python", "PostgreSQL"]} />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
