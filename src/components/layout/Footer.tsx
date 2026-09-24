import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { hubs } from "@/content/solutions";
import { sectors } from "@/content/sectors";
import { complementaryServices } from "@/lib/nav";
import { site, whatsappLink } from "@/lib/site";
import { InstagramGlyph, LinkedInGlyph, WhatsAppGlyph } from "@/components/Icon";
import { Logo } from "./Logo";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[0.95rem] text-white/65 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-navy-900 text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr] lg:py-20">
        <FooterColumn
          title="Soluções"
          links={[
            ...hubs.map((h) => ({ label: h.name, href: `/solucoes/${h.slug}/` })),
            { label: "Agente de IA para WhatsApp", href: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/" },
            { label: "SDR com IA", href: "/solucoes/vendas-e-receita/sdr-com-ia/" },
          ]}
        />
        <FooterColumn
          title="Serviços e Setores"
          links={[
            ...complementaryServices.map((s) => ({ label: s.label, href: s.href })),
            ...sectors.map((s) => ({ label: `IA para ${s.name}`, href: `/setores/${s.slug}/` })),
          ]}
        />
        <FooterColumn
          title="Empresa"
          links={[
            { label: "Sobre a empresa", href: "/sobre/" },
            { label: "Método de implantação", href: "/metodo/" },
            { label: "Segurança e LGPD", href: "/seguranca-e-lgpd/" },
            { label: "Cases e projetos", href: "/cases/" },
            { label: "Investimento", href: "/investimento/" },
            { label: "Conteúdo e guias", href: "/conteudo/" },
            { label: "Ferramentas gratuitas", href: "/ferramentas/" },
            { label: "Contato", href: "/contato/" },
          ]}
        />
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">Contato</h2>
          <ul className="mt-5 space-y-3.5 text-[0.95rem] text-white/75">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-white">
                <WhatsAppGlyph className="size-[1.1rem] text-accent" />
                {site.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                <Mail aria-hidden className="size-[1.1rem]" />
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin aria-hidden className="mt-1 size-[1.1rem] shrink-0" />
              <span>
                {site.contact.city}, {site.contact.state}
                <br />
                <span className="text-white/55">Atendemos empresas em todo o Brasil.</span>
              </span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80">
              <ShieldCheck aria-hidden className="size-3.5 text-accent" /> Adequação à LGPD
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80">
              <WhatsAppGlyph className="size-3.5 text-accent" /> API oficial do WhatsApp
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Logo dark />
            <p>
              © {year} {site.legalName} · CNPJ {site.cnpj}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacidade/" className="hover:text-white">
              Privacidade
            </Link>
            <Link href="/termos/" className="hover:text-white">
              Termos
            </Link>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <LinkedInGlyph className="size-[1.1rem]" />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <InstagramGlyph className="size-[1.2rem]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
