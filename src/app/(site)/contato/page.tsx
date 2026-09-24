import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { breadcrumbSchema, graph, organizationSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
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

function ContactItem({ icon, title, children, href }: { icon: React.ReactNode; title: string; children: React.ReactNode; href?: string }) {
  const inner = (
    <>
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-mint">{icon}</span>
      <span>
        <span className="block font-[family-name:var(--font-display)] font-semibold text-white">{title}</span>
        <span className="block text-[0.92rem] text-white/65">{children}</span>
      </span>
    </>
  );
  const cls = "glass flex items-center gap-4 rounded-2xl p-5";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${cls} transition-colors hover:bg-white/10`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function ContatoPage() {
  const crumbs = [{ name: "Contato", path }];
  return (
    <>
      <JsonLd data={graph(organizationSchema(true), breadcrumbSchema(crumbs))} />
      <section className="bg-hero on-dark relative overflow-hidden text-white">
        <Container className="relative grid items-start gap-12 pb-20 pt-8 md:pt-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div>
            <Breadcrumbs items={crumbs} dark />
            <h1 className="mt-10 text-[2.35rem] leading-[1.08] text-white md:text-[3.1rem]">Vamos conversar sobre a sua operação.</h1>
            <p data-answer className="mt-6 text-lg leading-relaxed text-white/75">
              Atendemos empresas em todo o Brasil. Fale pelo WhatsApp (atendido pelo nosso próprio agente de IA — a melhor demonstração do que fazemos), por e-mail ou pelo formulário. Respondemos em horário comercial.
            </p>
            <div className="mt-8 grid gap-3">
              <ContactItem icon={<WhatsAppGlyph className="size-5" />} title="WhatsApp · atendido por IA" href={whatsappLink(`Olá! Vim pelo site da ${site.name}.`)}>
                {site.contact.whatsappDisplay} — o agente responde 24/7 e chama uma pessoa quando precisa
              </ContactItem>
              <ContactItem icon={<Mail aria-hidden className="size-5" />} title="E-mail" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </ContactItem>
              <ContactItem icon={<MapPin aria-hidden className="size-5" />} title="Atuação nacional">
                Base em {site.contact.city}, {site.contact.state}
              </ContactItem>
              <ContactItem icon={<Clock aria-hidden className="size-5" />} title="Horário">
                {site.contact.hours}
              </ContactItem>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-[1.4rem] bg-white p-7 text-ink shadow-[var(--shadow-float)] md:p-9">
              <h2 className="text-[1.45rem] font-bold">Envie uma mensagem</h2>
              <p className="mt-1.5 text-[0.95rem] text-slate">Respondemos em até um dia útil. Quer ir direto ao ponto? Agende o diagnóstico.</p>
              <div className="mt-6">
                <LeadForm
                  origin="contato"
                  submitLabel="Enviar mensagem"
                  options={["Quero um diagnóstico", "Quero a Auditoria de Visibilidade em IA", "Tenho uma dúvida", "Outro assunto"]}
                />
              </div>
              <p className="mt-4 text-center text-xs text-slate">Seus dados são tratados conforme a LGPD.</p>
            </div>
            <WhatsAppCard />
          </div>
        </Container>
      </section>
    </>
  );
}
