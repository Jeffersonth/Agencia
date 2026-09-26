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
      <h2 className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-[0.92rem] text-white/60 transition-colors hover:text-white">
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
  // Só exibe razão social/CNPJ quando forem dados reais (nunca publicar placeholder).
  const hasLegalInfo = !site.legalName.includes("[") && !/^0[0.]/.test(site.cnpj);
  return (
    <footer className="on-dark bg-navy-900 text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-white/55">
            Agentes de IA e automações sob medida para operações que não podem parar. Atuação nacional.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: site.social.linkedin, label: "LinkedIn", icon: <LinkedInGlyph className="size-4" /> },
              { href: site.social.instagram, label: "Instagram", icon: <InstagramGlyph className="size-4" /> },
              { href: whatsappLink(), label: "WhatsApp", icon: <WhatsAppGlyph className="size-4" /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex size-10 items-center justify-center rounded-xl bg-white/[0.07] text-white/75 transition-colors hover:bg-white/15 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
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
            { label: "Sobre a Soluna IA", href: "/sobre/" },
            { label: "Método", href: "/metodo/" },
            { label: "Segurança e LGPD", href: "/seguranca-e-lgpd/" },
            { label: "Cases", href: "/cases/" },
            { label: "Investimento", href: "/investimento/" },
            { label: "Conteúdo e guias", href: "/conteudo/" },
            { label: "Ferramentas gratuitas", href: "/ferramentas/" },
            { label: "Contato", href: "/contato/" },
          ]}
        />
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold text-white">Contato</h2>
          <ul className="mt-4 space-y-3 text-[0.92rem] text-white/65">
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                <Mail aria-hidden className="size-4 text-lilac" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-white">
                <WhatsAppGlyph className="size-4 text-mint" />
                {site.contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-lilac" />
              <span>{site.contact.coverage}</span>
            </li>
          </ul>
          <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-white/75">
            <ShieldCheck aria-hidden className="size-3.5 text-mint" /> LGPD · API oficial do WhatsApp
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-7 text-[0.82rem] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}
            {hasLegalInfo ? ` · ${site.legalName} · CNPJ ${site.cnpj}` : ""}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacidade/" className="hover:text-white">
              Privacidade
            </Link>
            <Link href="/termos/" className="hover:text-white">
              Termos
            </Link>
            <span>Feito no Brasil · Atuação nacional</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
