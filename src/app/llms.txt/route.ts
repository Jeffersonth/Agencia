import { hubs, serviceHref, services } from "@/content/solutions";
import { comparisons, guides } from "@/content/articles";
import { sectors } from "@/content/sectors";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt: resumo da empresa e links principais, em Markdown, para modelos de linguagem. */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.name} é um estúdio de engenharia de IA que cria agentes e automações para empresas. Implantamos atendimento e vendas por IA no WhatsApp, automação de processos e sistemas sob medida, com foco em resultado e segurança de dados. Atende empresas de todo o Brasil, com experiência em setores regulados como jurídico e saúde. ${site.stats.years} anos de experiência e ${site.stats.projects} projetos entregues. Atendimento 100% digital, em todo o Brasil.`,
    "",
    "Todo projeto começa por um Diagnóstico pago e 100% creditável. Preços são publicados em faixas “a partir de”.",
    "",
    "## Soluções (núcleo: IA, Agentes & Automação)",
    "",
    ...hubs.flatMap((h) => [
      `- [${h.name}](${absoluteUrl(`/solucoes/${h.slug}/`)}): ${h.menuDescription}`,
      ...services
        .filter((s) => s.solution === h.slug)
        .map((s) => `  - [${s.name}](${absoluteUrl(serviceHref(s))}): ${s.cardDescription} ${s.pricing.prefix ?? "A partir de"} R$ ${s.pricing.from.toLocaleString("pt-BR")}.`),
    ]),
    "",
    "## Serviços complementares",
    "",
    `- [Criação de Sites](${absoluteUrl("/servicos/criacao-de-sites/")}): sites com assistente de IA, a partir de R$ 3.500.`,
    `- [SEO e GEO](${absoluteUrl("/servicos/seo-e-geo/")}): ranquear no Google e ser citado pelas IAs. Auditoria a partir de R$ 1.500.`,
    `- [Desenvolvimento de Sistemas](${absoluteUrl("/servicos/desenvolvimento-de-sistemas/")}): sistemas e SaaS com IA, a partir de R$ 25.000.`,
    `- [Desenvolvimento de Aplicativos](${absoluteUrl("/servicos/desenvolvimento-de-aplicativos/")}): apps iOS e Android, a partir de R$ 40.000.`,
    "",
    "## Setores",
    "",
    ...sectors.map((s) => `- [${s.name}](${absoluteUrl(`/setores/${s.slug}/`)}): ${s.h1}`),
    "",
    "## Páginas principais",
    "",
    `- [Diagnóstico](${absoluteUrl("/diagnostico/")}): Essencial a partir de R$ 2.500; Completo a partir de R$ 5.000; creditável no projeto.`,
    `- [Investimento](${absoluteUrl("/investimento/")}): tabela de faixas de preço de todas as soluções.`,
    `- [Segurança e LGPD](${absoluteUrl("/seguranca-e-lgpd/")}): API oficial do WhatsApp, dados em nome do cliente, IA privada, cláusula de saída.`,
    `- [Método](${absoluteUrl("/metodo/")}): Diagnóstico, Desenho, Construção acelerada, Validação, Operação contínua.`,
    `- [Sobre](${absoluteUrl("/sobre/")}): a empresa e o fundador.`,
    `- [Cases](${absoluteUrl("/cases/")}): cases reais e projetos demonstrativos (rotulados).`,
    `- [Contato](${absoluteUrl("/contato/")}): WhatsApp ${site.contact.whatsappDisplay}, ${site.contact.email}.`,
    "",
    "## Guias e comparativos",
    "",
    ...[...guides, ...comparisons].map(
      (a) => `- [${a.title}](${absoluteUrl(`/conteudo/${a.kind === "guia" ? "guias" : "comparativos"}/${a.slug}/`)}): ${a.description}`,
    ),
    "",
    "## Opcional",
    "",
    `- [Glossário](${absoluteUrl("/conteudo/glossario/")})`,
    `- [Calculadora de ROI de Atendimento](${absoluteUrl("/ferramentas/calculadora-roi-atendimento/")})`,
    `- [Teste de Visibilidade em IA](${absoluteUrl("/ferramentas/teste-visibilidade-ia/")})`,
    `- [Calculadora de Custo do Atendimento](${absoluteUrl("/ferramentas/calculadora-custo-atendimento/")})`,
    `- [Raio-X do WhatsApp](${absoluteUrl("/ferramentas/raio-x-whatsapp/")})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
