import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide } from "@/content/articles";
import { getHub, getService, serviceHref, services } from "@/content/solutions";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { brl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Badge, Card, Container, Section, SectionHeading, TextLink } from "@/components/ui";
import {
  Checklist,
  Chips,
  CTASection,
  DiagnosticActions,
  FAQSection,
  IndicatorsBlock,
  LinkCard,
  PageHero,
  PriceBlock,
  SecurityStrip,
  Signature,
} from "@/components/sections";
import { Visual } from "@/components/visuals";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ solucao: s.solution, servico: s.slug }));
}

async function load(params: PageProps<"/solucoes/[solucao]/[servico]">["params"]) {
  const { solucao, servico } = await params;
  const service = getService(servico);
  if (!service || service.solution !== solucao) return undefined;
  return { service, hub: getHub(solucao)! };
}

export async function generateMetadata({ params }: PageProps<"/solucoes/[solucao]/[servico]">): Promise<Metadata> {
  const data = await load(params);
  if (!data) return {};
  return pageMetadata({ title: data.service.title, description: data.service.metaDescription, path: serviceHref(data.service) });
}

export default async function ServicePage({ params }: PageProps<"/solucoes/[solucao]/[servico]">) {
  const data = await load(params);
  if (!data) notFound();
  const { service, hub } = data;

  const path = serviceHref(service);
  const crumbs = [
    { name: "Soluções", path: "/solucoes/" },
    { name: hub.name, path: `/solucoes/${hub.slug}/` },
    { name: service.name, path },
  ];
  const related = service.related.map((slug) => getService(slug)!).filter(Boolean);
  const guide = service.guide ? getGuide(service.guide) : undefined;

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({ name: service.name, description: service.answer, path, price: service.pricing.from, serviceType: service.title }),
          faqSchema(service.faq),
          breadcrumbSchema(crumbs),
        )}
      />

      {/* 1–2: H1 + resposta direta */}
      <PageHero
        crumbs={crumbs}
        eyebrow={hub.name}
        title={service.h1}
        answer={service.answer}
        actions={<DiagnosticActions secondary={{ href: "#investimento", label: "Prazo e investimento" }} />}
        aside={
          <div className="mt-7 flex flex-wrap gap-2">
            <Badge tone="gray">
              {service.pricing.prefix ?? "A partir de"} {brl(service.pricing.from)}
            </Badge>
            {service.pricing.timeline && <Badge tone="gray">Entrega em {service.pricing.timeline}</Badge>}
            <Badge tone="green">Sustentação mensal inclusa</Badge>
          </div>
        }
        visual={<Visual name={service.visual} />}
      />

      {/* 3 e 5: Para quem é + O que está incluso */}
      <Section labelledBy="para-quem">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 id="para-quem" className="text-[1.6rem] font-bold">Para quem é</h2>
            <p className="mt-2 text-slate">Se você se reconhece em pelo menos um destes pontos, há retorno para buscar.</p>
            <Checklist items={service.forWho} className="mt-6" />
          </Card>
          <Card>
            <h2 className="text-[1.6rem] font-bold">O que está incluso</h2>
            <p className="mt-2 text-slate">Entregáveis objetivos, do treino à sustentação.</p>
            <Checklist items={service.included} className="mt-6" />
          </Card>
        </div>
      </Section>

      {/* 4: Como funciona */}
      <Section tone="aurora" labelledBy="como-funciona">
        <SectionHeading dark id="como-funciona" eyebrow="Como funciona" title={`${service.steps.length} passos, do conhecimento ao resultado.`} />
        <ol className={`mt-12 grid gap-4 sm:grid-cols-2 ${service.steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
          {service.steps.map((st, i) => (
            <li key={st.title} className="glass rounded-[var(--radius-card)] p-6">
              <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-white/15 px-2 text-sm font-semibold">0{i + 1}</span>
              <h3 className="mt-5 text-[1.08rem] font-bold text-white">{st.title}</h3>
              <p className="mt-2 text-[0.9rem] text-white/70">{st.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {service.paths && (
        <Section labelledBy="caminhos">
          <SectionHeading id="caminhos" eyebrow="Dois caminhos" title="O nível de proteção certo para cada caso." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {service.paths.map((p, i) => (
              <Card key={p.name} className={i === 0 ? "border-signal/40 ring-1 ring-signal/20" : undefined}>
                {i === 0 && <Badge tone="blue" className="mb-4">Atende à maioria dos casos</Badge>}
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-slate">{p.text}</p>
                <p className="mt-6 font-semibold text-signal">{p.price}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* 6: Integrações */}
      <Section labelledBy="integracoes" className={service.paths ? "border-t border-line" : undefined}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="integracoes"
            eyebrow="Integrações"
            title="Funciona com o que você já usa."
            text="Outros sistemas? Integramos via API ou integração sob medida — avaliamos no Diagnóstico."
          />
          <Chips items={service.integrations} />
        </div>
      </Section>

      {/* 7–8: Prazo e investimento + Segurança */}
      <Section tone="mist" id="investimento" labelledBy="investimento-titulo">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              id="investimento-titulo"
              eyebrow="Prazo e investimento"
              title="Preço claro desde o primeiro contato."
              text="Cobramos por escopo e valor, não por hora: implantação + sustentação mensal. O consumo de terceiros é pago direto pela sua empresa, sem margem escondida."
            />
            <p className="mt-6 text-slate">
              O preço fechado sai do Diagnóstico, que é 100% creditado no projeto.
            </p>
          </div>
          <PriceBlock service={service} />
        </div>
        <div className="mt-16">
          <SecurityStrip text={service.security} />
        </div>
      </Section>

      {/* 9: Prova */}
      <Section labelledBy="prova">
        <IndicatorsBlock indicators={service.indicators} demoHref={service.demoCase ? `/cases/${service.demoCase}/` : undefined} />
      </Section>

      {/* 10: FAQ */}
      <FAQSection items={service.faq} tone="mist" />

      {/* Links internos: hub + 2 relacionados + guia + Diagnóstico */}
      <section className="bg-white py-20" aria-labelledby="explore">
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="explore" className="text-2xl font-semibold md:text-3xl">
              Continue explorando
            </h2>
            <TextLink href={`/solucoes/${hub.slug}/`}>Tudo sobre {hub.name}</TextLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <LinkCard key={r.slug} href={serviceHref(r)} meta="Solução relacionada" title={r.name} text={r.cardDescription} />
            ))}
            {guide && <LinkCard href={`/conteudo/guias/${guide.slug}/`} meta="Guia" title={guide.title} text={guide.description} />}
            <LinkCard href="/diagnostico/" meta="Comece aqui" title="Diagnóstico de IA & Automação" text="Processos mapeados, ROI estimado e valor creditado no projeto." />
          </div>
        </Container>
      </section>

      {/* 11: CTA */}
      <CTASection title={service.cta.title} text={`${service.cta.text ?? ""} Mapeamos seus processos, estimamos o ROI e o valor é creditado no projeto.`.trim()} />

      {/* 12: Assinatura */}
      <Signature updatedAt={service.updatedAt} />
    </>
  );
}
