import { hubs } from "@/content/solutions";
import { sectors } from "@/content/sectors";
import type { IconName } from "@/content/types";

export type NavItem = { label: string; href: string; description?: string; icon?: IconName };
export type NavGroup = { label: string; href: string; items?: NavItem[]; wide?: boolean };

export const complementaryServices: NavItem[] = [
  { label: "Criação de Sites", href: "/servicos/criacao-de-sites/", description: "Sites rápidos que já nascem com IA.", icon: "layout" },
  { label: "SEO e GEO", href: "/servicos/seo-e-geo/", description: "Apareça no Google e nas respostas das IAs.", icon: "search" },
  { label: "Desenvolvimento de Sistemas", href: "/servicos/desenvolvimento-de-sistemas/", description: "Sistemas e SaaS sob medida, com IA no núcleo.", icon: "code" },
  { label: "Desenvolvimento de Aplicativos", href: "/servicos/desenvolvimento-de-aplicativos/", description: "Apps iOS e Android com uma base de código.", icon: "smartphone" },
];

export const mainNav: NavGroup[] = [
  {
    label: "Soluções",
    href: "/solucoes/",
    wide: true,
    items: hubs.map((h) => ({ label: h.name, href: `/solucoes/${h.slug}/`, description: h.menuDescription, icon: h.icon })),
  },
  {
    label: "Serviços",
    href: "/servicos/",
    items: complementaryServices.map(({ label, href, description, icon }) => ({
      label: label.replace("Desenvolvimento de ", ""),
      href,
      description,
      icon,
    })),
  },
  {
    label: "Setores",
    href: "/setores/",
    wide: true,
    items: sectors.map((s) => ({ label: s.menuName, href: `/setores/${s.slug}/`, description: s.cardText, icon: s.icon })),
  },
  { label: "Cases", href: "/cases/" },
  { label: "Conteúdo", href: "/conteudo/" },
  {
    label: "Empresa",
    href: "/sobre/",
    items: [
      { label: "Sobre", href: "/sobre/", description: "Quem somos e quem está por trás.", icon: "users" },
      { label: "Método", href: "/metodo/", description: "Cinco etapas, zero improviso.", icon: "compass" },
      { label: "Segurança e LGPD", href: "/seguranca-e-lgpd/", description: "Seus dados continuam seus.", icon: "shield" },
      { label: "Investimento", href: "/investimento/", description: "Faixas de preço, com clareza.", icon: "chart" },
      { label: "Contato", href: "/contato/", description: "Fale com a gente.", icon: "headset" },
    ],
  },
];
