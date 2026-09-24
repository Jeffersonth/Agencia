/**
 * Configuração central da marca.
 *
 * Nome "Sinal" e fundador vêm do design (Claude Design). Domínio, contatos,
 * razão social e redes ainda são placeholders (entre colchetes ou fictícios):
 * troque aqui e o site inteiro (páginas, Schema.org, sitemap, robots.txt e llms.txt) é atualizado.
 */
export const site = {
  name: "Sinal",
  legalName: "[Razão Social da Sinal]",
  cnpj: "00.000.000/0000-00",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://agencia.inovalabs.io").replace(/\/$/, ""),
  tagline: "Agentes de IA e Automação para Empresas",
  description:
    "Agentes de IA, automações e sistemas sob medida que fazem sua empresa atender, vender e operar 24/7. Diagnóstico com ROI. Atendemos todo o Brasil.",
  locale: "pt_BR",
  foundingYear: 2022,
  stats: {
    years: "4+",
    projects: "300+",
  },
  founder: {
    name: "Jefferson Thales",
    jobTitle: "Fundador · Arquitetura de IA",
    linkedin: "https://www.linkedin.com/in/[perfil-do-fundador]",
    knowsAbout: [
      "Agentes de IA",
      "Automação de processos",
      "Engenharia de software",
      "SEO e GEO",
      "LGPD aplicada a IA",
    ],
  },
  contact: {
    // Somente dígitos, com DDI e DDD (ex.: 5511999999999)
    whatsapp: "5511924574553",
    whatsappDisplay: "+55 (11) 92457-4553",
    email: "jeff.thchaves@gmail.com",
    city: "João Pessoa / Cabedelo",
    state: "PB",
    hours: "Segunda a sexta, das 9h às 18h",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/[sinal]",
    instagram: "https://www.instagram.com/[sinal]",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
