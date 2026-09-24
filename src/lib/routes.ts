import { comparisons, guides } from "@/content/articles";
import { cases } from "@/content/cases";
import { glossary } from "@/content/glossary";
import { sectors } from "@/content/sectors";
import { hubs, serviceHref, services } from "@/content/solutions";

export type RouteInfo = {
  path: string;
  title: string;
  description?: string;
  group: "paginas" | "solucoes" | "servicos" | "setores" | "conteudo" | "cases" | "ferramentas" | "legal";
  priority: number;
};

/** Registro único de rotas públicas: alimenta sitemap.xml, llms.txt e links internos. */
export function allRoutes(): RouteInfo[] {
  return [
    { path: "/", title: "Início", description: "Agentes de IA e automação para empresas.", group: "paginas", priority: 1 },
    { path: "/diagnostico/", title: "Diagnóstico de IA & Automação", description: "Ponto de partida: processos mapeados, ROI estimado e valor creditável.", group: "paginas", priority: 0.9 },
    { path: "/investimento/", title: "Investimento", description: "Faixas de preço “a partir de” de todas as soluções.", group: "paginas", priority: 0.8 },
    { path: "/solucoes/", title: "Soluções", description: "IA, agentes e automação em quatro frentes.", group: "solucoes", priority: 0.9 },
    ...hubs.map((h) => ({ path: `/solucoes/${h.slug}/`, title: h.name, description: h.answer, group: "solucoes" as const, priority: 0.9 })),
    ...services.map((s) => ({
      path: serviceHref(s),
      title: s.name,
      description: s.answer,
      group: "solucoes" as const,
      priority: s.featured ? 0.9 : 0.7,
    })),
    { path: "/servicos/", title: "Serviços complementares", group: "servicos", priority: 0.7 },
    { path: "/servicos/criacao-de-sites/", title: "Criação de Sites", description: "Sites que já nascem inteligentes, a partir de R$ 3.500.", group: "servicos", priority: 0.8 },
    { path: "/servicos/seo-e-geo/", title: "SEO e GEO", description: "Ser encontrado no Google e citado pelas IAs.", group: "servicos", priority: 0.8 },
    { path: "/servicos/seo-e-geo/auditoria-visibilidade-ia/", title: "Auditoria de Visibilidade em IA", description: "Como a marca aparece hoje nas IAs. A partir de R$ 1.500.", group: "servicos", priority: 0.7 },
    { path: "/servicos/desenvolvimento-de-sistemas/", title: "Desenvolvimento de Sistemas", description: "Sistemas e SaaS sob medida com IA, a partir de R$ 25.000.", group: "servicos", priority: 0.7 },
    { path: "/servicos/desenvolvimento-de-aplicativos/", title: "Desenvolvimento de Aplicativos", description: "Apps iOS e Android, a partir de R$ 40.000.", group: "servicos", priority: 0.7 },
    { path: "/setores/", title: "Setores", group: "setores", priority: 0.6 },
    ...sectors.map((s) => ({ path: `/setores/${s.slug}/`, title: s.title, description: s.answer, group: "setores" as const, priority: 0.8 })),
    { path: "/cases/", title: "Cases e Projetos", description: "Cases reais, projetos demonstrativos e demonstrações ao vivo.", group: "cases", priority: 0.7 },
    ...cases
      .filter((c) => !c.noDetail)
      .map((c) => ({ path: `/cases/${c.slug}/`, title: c.title, description: c.summary, group: "cases" as const, priority: 0.5 })),
    { path: "/metodo/", title: "Método", description: "Cinco etapas: Diagnóstico, Desenho, Construção, Validação e Operação.", group: "paginas", priority: 0.6 },
    { path: "/sobre/", title: "Sobre", description: "Estúdio de engenharia de IA, 4+ anos, 300+ projetos.", group: "paginas", priority: 0.7 },
    { path: "/seguranca-e-lgpd/", title: "Segurança e LGPD", description: "Como tratamos os dados dos clientes.", group: "paginas", priority: 0.8 },
    { path: "/contato/", title: "Contato", group: "paginas", priority: 0.6 },
    { path: "/conteudo/", title: "Conteúdo", description: "Guias, comparativos e glossário.", group: "conteudo", priority: 0.6 },
    ...guides.map((g) => ({ path: `/conteudo/guias/${g.slug}/`, title: g.title, description: g.answer, group: "conteudo" as const, priority: 0.7 })),
    ...comparisons.map((c) => ({ path: `/conteudo/comparativos/${c.slug}/`, title: c.title, description: c.answer, group: "conteudo" as const, priority: 0.6 })),
    { path: "/conteudo/glossario/", title: "Glossário", group: "conteudo", priority: 0.5 },
    ...glossary.map((t) => ({ path: `/conteudo/glossario/${t.slug}/`, title: t.term, description: t.definition, group: "conteudo" as const, priority: 0.5 })),
    { path: "/ferramentas/", title: "Ferramentas gratuitas", group: "ferramentas", priority: 0.5 },
    { path: "/ferramentas/calculadora-roi-atendimento/", title: "Calculadora de ROI de Atendimento", description: "Quanto você perde hoje com demora no atendimento.", group: "ferramentas", priority: 0.6 },
    { path: "/ferramentas/teste-visibilidade-ia/", title: "Teste de Visibilidade em IA", description: "Retrato rápido da prontidão do seu site para as IAs.", group: "ferramentas", priority: 0.6 },
    { path: "/ferramentas/calculadora-custo-atendimento/", title: "Calculadora de Custo do Atendimento", description: "Quanto custa o atendimento repetitivo e a cobertura de horário com pessoas.", group: "ferramentas", priority: 0.6 },
    { path: "/ferramentas/raio-x-whatsapp/", title: "Raio-X do WhatsApp", description: "Nota de 0 a 100 para o atendimento no WhatsApp, com pontos a melhorar.", group: "ferramentas", priority: 0.6 },
    { path: "/privacidade/", title: "Política de Privacidade", group: "legal", priority: 0.2 },
    { path: "/termos/", title: "Termos de Uso", group: "legal", priority: 0.2 },
  ];
}

export function routeInfo(path: string) {
  return allRoutes().find((r) => r.path === path);
}
