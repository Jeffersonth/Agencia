import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/content/sectors";
import { breadcrumbSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui";
import { IconTile } from "@/components/Icon";
import { CTASection, DiagnosticActions, PageHero } from "@/components/sections";

const path = "/setores/";

export const metadata: Metadata = pageMetadata({
  title: "IA para Setores Regulados: Advocacia e Saúde",
  description: "IA e automação para escritórios de advocacia e clínicas, dentro das regras da OAB, dos conselhos de saúde e da LGPD.",
  path,
});

export default function SetoresPage() {
  const crumbs = [{ name: "Setores", path }];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Setores"
        title="Feito para quem não pode errar com dados."
        answer="Atuamos onde temos experiência real: escritórios de advocacia e clínicas e empresas de saúde. Nesses setores, IA só gera resultado se respeitar as regras da profissão e a LGPD — e é assim que desenhamos cada projeto. Novos setores entram quando houver cases."
        actions={<DiagnosticActions />}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/setores/${s.slug}/`}
              className="group rounded-[var(--radius-card)] bg-white ring-1 ring-line/60 p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-lift)] md:p-10"
            >
              <IconTile name={s.icon} />
              <h2 className="mt-8 text-2xl font-semibold">{s.name}</h2>
              <p className="mt-3 text-lg text-slate">{s.answer}</p>
              <span className="mt-8 inline-flex items-center gap-1.5 font-semibold text-signal">
                IA para {s.menuName.toLowerCase()} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
