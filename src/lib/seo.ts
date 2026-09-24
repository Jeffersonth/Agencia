import type { Metadata } from "next";
import type { FAQ } from "@/content/types";
import { absoluteUrl, site } from "./site";

const ogImage = { url: "/opengraph-image/", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` };

/** Metadata padrão de página: title, description, canonical e Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  /** Quando true, não aplica o sufixo " | [Nome]". */
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}

/* ───────────────────────────── Schema.org ───────────────────────────── */

const ORG_ID = `${site.url}/#organization`;
const FOUNDER_ID = `${site.url}/sobre/#fundador`;

export function organizationSchema(full = false) {
  const base = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    description: site.description,
    areaServed: { "@type": "Country", name: "Brasil" },
    founder: { "@id": FOUNDER_ID },
    sameAs: [site.social.linkedin, site.social.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.city,
      addressRegion: site.contact.state,
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${site.contact.whatsapp}`,
      email: site.contact.email,
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };
  if (!full) return base;
  return {
    ...base,
    legalName: site.legalName,
    taxID: site.cnpj,
    foundingDate: String(site.foundingYear),
    knowsAbout: ["Agentes de IA", "Automação de processos", "IA privada", "SEO e GEO", "Desenvolvimento de software"],
  };
}

export function founderSchema() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    worksFor: { "@id": ORG_ID },
    knowsAbout: site.founder.knowsAbout,
    sameAs: [site.founder.linkedin],
    url: absoluteUrl("/sobre/"),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "pt-BR",
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqSchema(faq: FAQ[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  price,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  price?: number;
  serviceType?: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Brasil" },
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "BRL",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: price,
              priceCurrency: "BRL",
            },
            availability: "https://schema.org/InStock",
            url: absoluteUrl(path),
          },
        }
      : {}),
  };
}

export function articleSchema({
  title,
  description,
  path,
  updatedAt,
}: {
  title: string;
  description: string;
  path: string;
  updatedAt: string;
}) {
  return {
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "pt-BR",
    datePublished: updatedAt,
    dateModified: updatedAt,
    author: { "@id": FOUNDER_ID, "@type": "Person", name: site.founder.name },
    publisher: { "@id": ORG_ID },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
