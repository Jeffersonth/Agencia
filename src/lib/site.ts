/**
 * Configuração central da marca.
 *
 * O nome da empresa, o domínio e os dados de contato ainda não foram definidos.
 * Tudo que aparece entre colchetes é placeholder: troque aqui e o site inteiro
 * (páginas, Schema.org, sitemap, robots.txt e llms.txt) é atualizado.
 */
export const site = {
  name: "[Nome]",
  legalName: "[Razão Social]",
  cnpj: "00.000.000/0000-00",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.seudominio.com.br").replace(/\/$/, ""),
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
    name: "[Fundador]",
    jobTitle: "Fundador e engenheiro de IA",
    linkedin: "https://www.linkedin.com/in/[fundador]",
    knowsAbout: [
      "Agentes de IA",
      "Automação de processos",
      "Engenharia de software",
      "SEO e GEO",
      "LGPD aplicada a IA",
    ],
  },
  contact: {
    // Somente dígitos, com DDI e DDD (ex.: 5583999999999)
    whatsapp: "5583900000000",
    whatsappDisplay: "+55 (83) 90000-0000",
    email: "contato@seudominio.com.br",
    city: "João Pessoa / Cabedelo",
    state: "PB",
    hours: "Segunda a sexta, das 9h às 18h",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/[nome]",
    instagram: "https://www.instagram.com/[nome]",
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
