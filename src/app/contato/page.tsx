import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { breadcrumbSchema, graph, organizationSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Card, Section } from "@/components/ui";
import { WhatsAppGlyph } from "@/components/Icon";
import { Breadcrumbs, WhatsAppCard } from "@/components/sections";
import { LeadForm } from "@/components/LeadForm";

const path = "/contato/";

export const metadata: Metadata = pageMetadata({
  title: `Fale com a ${site.name} | Atendemos empresas em todo o Brasil`,
  absoluteTitle: true,
  description: `Fale com a ${site.name} pelo WhatsApp (atendido pelo nosso próprio agente de IA), e-mail ou formulário. Base em ${site.contact.city}, ${site.contact.state}. Atendemos todo o Brasil.`,
  path,
});

export default function ContatoPage() {
  const crumbs = [{ name: "Contato", path }];
  return (
    <>
      <JsonLd data={graph(organizationSchema(true), breadcrumbSchema(crumbs))} />
      <section className="border-b border-line bg-mist">
        <div className="container-site pb-16 pt-8 md:pt-10">
          <Breadcrumbs items={crumbs} />
          <div className="mt-12 max-w-3xl">
            <p className="eyebrow mb-5">Contato</p>
            <h1 className="text-[2.35rem] font-semibold leading-[1.08] md:text-[3.3rem]">Vamos conversar sobre a sua operação.</h1>
            <p data-answer className="mt-6 text-lg leading-relaxed text-slate md:text-xl">
              Atendemos empresas em todo o Brasil. Fale pelo WhatsApp (atendido pelo nosso próprio agente de IA — a melhor demonstração do que fazemos), por e-mail ou pelo formulário. Respondemos em horário comercial.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Card>
            <h2 className="text-2xl font-semibold">Envie uma mensagem</h2>
            <p className="mt-2 text-slate">Conte rapidamente o que você precisa. Respondemos em até 1 dia útil.</p>
            <div className="mt-7">
              <LeadForm origin="contato" submitLabel="Enviar mensagem" />
            </div>
          </Card>
          <div className="space-y-5">
            <div className="rounded-[var(--radius-card)] bg-navy p-7 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                <span className="size-1.5 rounded-full bg-accent" /> Prova viva
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Nosso WhatsApp é atendido por um agente de IA.</h2>
              <p className="mt-2 text-white/75">
                O mesmo tipo de agente que implantamos nos clientes. Converse com ele e veja como funciona na prática — ele transfere para uma pessoa quando precisa.
              </p>
              <a
                href={whatsappLink(`Olá! Vim pelo site da ${site.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-navy-900 hover:bg-[#32d583]"
              >
                <WhatsAppGlyph className="size-4" /> {site.contact.whatsappDisplay}
              </a>
            </div>
            <WhatsAppCard light />
            <Card className="space-y-4 !p-7">
              <p className="flex items-start gap-3">
                <Mail aria-hidden className="mt-1 size-5 shrink-0 text-signal" />
                <a href={`mailto:${site.contact.email}`} className="font-medium hover:text-signal">
                  {site.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-signal" />
                <span>
                  {site.contact.city}, {site.contact.state}
                  <br />
                  <span className="text-slate">Atuação nacional: atendemos empresas em todo o Brasil.</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock aria-hidden className="mt-1 size-5 shrink-0 text-signal" />
                <span>
                  {site.contact.hours}
                  <br />
                  <span className="text-slate">O agente no WhatsApp responde 24/7.</span>
                </span>
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
