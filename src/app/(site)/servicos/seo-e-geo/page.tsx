import type { Metadata } from "next";
import { ArrowRight, ChevronDown } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { Checklist, FAQSection, LinkCard, PageHero, Signature } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { whatsappLink } from "@/lib/site";

const path = "/servicos/seo-e-geo/";
const answer =
  "Seu site já existe. A Soluna evolui esse ativo para aumentar a visibilidade no Google, fortalecer autoridade, expandir a presença em buscas com IA e transformar mais tráfego qualificado em oportunidades — unindo SEO técnico, conteúdo, arquitetura semântica, GEO, LLM SEO, performance, dados e conversão em um trabalho contínuo. Você não precisa necessariamente refazer o site.";

export const metadata: Metadata = pageMetadata({
  title: "SEO, GEO e LLM SEO para Empresas",
  description:
    "Melhore seu site com SEO técnico, conteúdo, GEO e LLM SEO. Aumente visibilidade no Google e em buscas com IA, autoridade, tráfego qualificado e conversão.",
  path,
});

/* ── Dados ───────────────────────────────────────────────────────── */

const sinais = [
  "aparece pouco para pesquisas estratégicas no Google",
  "depende excessivamente de mídia paga",
  "recebe tráfego orgânico, mas gera poucos leads",
  "não sabe quais páginas realmente geram oportunidades",
  "tem serviços importantes sem páginas próprias",
  "tem dezenas de artigos, mas pouca autoridade",
  "publica conteúdo sem planejamento",
  "não tem estratégia de palavras-chave e intenções",
  "perdeu posições ou tráfego",
  "apresenta problemas de indexação",
  "tem páginas concorrendo entre si (canibalização)",
  "tem conteúdo antigo ou superficial",
  "está lento no mobile",
  "não usa dados estruturados adequadamente",
  "não tem Search Console ou Analytics corretos",
  "não sabe como a marca aparece em buscas com IA",
  "não tem estratégia clara de GEO ou LLM SEO",
  "não conecta tráfego orgânico a resultado comercial",
];

const entendemos = [
  "o que sua empresa vende",
  "para quem vende",
  "quais problemas resolve",
  "como seus clientes pesquisam",
  "quais concorrentes disputam atenção",
  "quais páginas já existem",
  "quais ativos já performam",
  "onde estão as lacunas",
  "qual resultado o site precisa gerar",
];

const baseSeo = [
  "site rastreável e indexação correta",
  "arquitetura clara",
  "conteúdo original e páginas aprofundadas",
  "informações institucionais consistentes",
  "autoridade temática",
  "entidades bem definidas",
  "dados estruturados adequados",
  "boa experiência e performance",
  "reputação e evidências externas",
  "conteúdo atualizado e mensuração",
];

const auditoria = [
  { title: "Tecnologia", text: "Rastreamento, indexação, status HTTP, canonical, redirects, sitemap, robots, JavaScript, Core Web Vitals, responsividade e segurança." },
  { title: "Conteúdo", text: "Qualidade, profundidade, intenção de busca, canibalização, conteúdos desatualizados, páginas sem função e lacunas (topical coverage)." },
  { title: "Arquitetura", text: "Hierarquia, URLs, categorias, páginas de serviço e solução, setores, blog, links internos e profundidade de navegação." },
  { title: "Autoridade", text: "Entidades, marca, autores, cases, referências, menções, backlinks e sinais institucionais." },
  { title: "GEO / LLM SEO", text: "Clareza da entidade, conteúdo recuperável, respostas diretas, rastreabilidade por mecanismos relevantes e capacidade de citação." },
  { title: "Conversão", text: "CTAs, formulários, WhatsApp, fluxo de navegação, páginas de maior valor, fricções e mensuração de leads." },
];

const seoTecnico = [
  "Rastreamento e indexação",
  "Status HTTP, redirects e canonical",
  "robots.txt e XML sitemap",
  "JavaScript SEO e renderização",
  "URLs, paginação e duplicidade",
  "Core Web Vitals e performance",
  "HTML semântico e headings",
  "Metadados e links quebrados",
  "Dados estruturados",
  "Search Console e Bing Webmaster",
  "IndexNow quando aplicável",
];

const intencoes = [
  { stage: "Descoberta", ex: ["Como resolver…", "O que é…", "Por que acontece…"] },
  { stage: "Consideração", ex: ["Melhor solução para…", "Como escolher…", "X vs Y"] },
  { stage: "Intenção comercial", ex: ["Empresa de…", "Serviço de…", "Agência…"] },
  { stage: "Decisão", ex: ["Preço de…", "Vale a pena…", "Cases…"] },
];

const conteudoCards = [
  { eyebrow: "SEO on-page", title: "Cada página com um papel claro.", text: "Intenção, headings, title, meta, URL, entidades, semântica, links internos, alt text, dados estruturados, CTA e conversão. Estruturamos para que pessoas e mecanismos entendam o valor rapidamente." },
  { eyebrow: "Topical authority", title: "Publicar mais não é construir autoridade.", text: "Mapeamento de tópicos, páginas pilares, clusters, comparativos, cases e dados próprios. Uma relação clara entre marca → expertise → problema → solução → evidência." },
  { eyebrow: "Conteúdo existente", title: "Às vezes o maior potencial já está publicado.", text: "URLs com histórico e backlinks podem render mais com atualização. Decidimos o que manter, atualizar, expandir, consolidar, redirecionar ou remover." },
];

const entidadeCards = [
  { eyebrow: "Otimização de entidades", title: "A mesma empresa, a mesma entidade em toda a presença digital.", text: "Consistência entre nome oficial, marca, descrição, fundadores, autores, serviços, contatos, perfis e dados empresariais — para reduzir ambiguidade." },
  { eyebrow: "Dados estruturados", title: "Sinais adicionais sobre o significado do conteúdo.", text: "Organization, Article, BreadcrumbList, Person e outros tipos compatíveis com o conteúdo real. Markup sempre reflete o que está visível e verdadeiro." },
  { eyebrow: "Conteúdo citável", title: "Conteúdo genérico é fácil de ignorar.", text: "Priorizamos valor original: experiência prática, dados próprios, benchmarks, metodologias, estudos de caso e ferramentas. Mais razões para o site virar referência." },
];

const autoridadeCards = [
  { eyebrow: "Autoria e experiência", title: "Autoridade vem das pessoas e evidências por trás do domínio.", text: "Páginas de autores, biografias, especializações, revisão técnica, datas de publicação e atualização, fontes e metodologia." },
  { eyebrow: "Linkagem interna", title: "Páginas isoladas desperdiçam autoridade.", text: "Links internos contextuais — não só menus e rodapés — criando uma rede lógica entre conteúdos e páginas comerciais." },
  { eyebrow: "Autoridade externa", title: "O que outras fontes dizem também importa.", text: "Menções, backlinks relevantes, diretórios legítimos, perfis e mídia. Autoridade sustentável — nunca redes de links de baixa qualidade." },
];

const buscaIaCards = [
  { title: "Visibilidade generativa medida com dados", text: "Quando os mecanismos disponibilizam relatórios de recursos generativos (como o Search Console a partir de 2026), incorporamos esses dados. Não transformamos prints isolados de uma IA em KPI." },
  { title: "Crawlers e acessibilidade para IA", text: "Verificamos se robots.txt, noindex, WAF, firewall ou autenticação bloqueiam páginas públicas. A política de crawlers (Googlebot, Bingbot, OAI-SearchBot) é consciente e documentada." },
  { title: "llms.txt e “hacks de IA”", text: "Podemos manter um llms.txt experimentalmente, mas ele não substitui SEO técnico, conteúdo, arquitetura, autoridade e dados estruturados. Não vendemos arquivos mágicos." },
];

const valorFlow = ["Demanda", "SEO / GEO", "Página relevante", "Conteúdo + autoridade", "UX + prova", "Conversão", "CRM", "Receita / oportunidade"];

const ecossistemaDescoberta = ["Google Search", "AI Overviews / AI Mode", "Bing", "Copilot", "ChatGPT Search", "Conteúdo", "Sites externos", "Redes", "Diretórios", "Mídia", "Parceiros"];

const metodo = [
  { n: "01", title: "Auditoria e Diagnóstico", text: "Técnica, conteúdo, arquitetura, autoridade, GEO, mensuração e conversão.", result: "Visão clara dos gargalos, ativos e oportunidades." },
  { n: "02", title: "Estratégia e Priorização", text: "Objetivos, temas, páginas, intenções, roadmap e indicadores.", result: "Plano de ação por impacto e prioridade." },
  { n: "03", title: "Implementação", text: "Correções técnicas, otimizações, arquitetura, conteúdos, dados estruturados, links e conversão.", result: "O site começa a evoluir de forma estruturada." },
  { n: "04", title: "Indexação e Mensuração", text: "Validação de rastreamento, indexação, analytics e acompanhamento de performance.", result: "Dados confiáveis para entender impacto." },
  { n: "05", title: "Evolução Contínua", text: "Monitoramos resultados, atualizamos conteúdos e expandimos autoridade.", result: "Uma estratégia que evolui com o mercado." },
];

const entregaveis = [
  "Auditorias técnica, de conteúdo, indexação e arquitetura",
  "Auditoria de GEO / LLM SEO e análise competitiva",
  "Pesquisa de demanda e mapeamento de intenções",
  "Topical map e plano editorial",
  "Otimização on-page e páginas de serviço",
  "Atualização e produção de conteúdo",
  "Linkagem interna e dados estruturados",
  "Ajustes técnicos e performance",
  "Search Console, Analytics, Tag Manager e Bing",
  "Revisão de crawlers e recomendações off-page",
  "CRO, dashboards e relatórios",
  "Roadmap e acompanhamento estratégico",
];

const naoFazemos = [
  "Primeira posição garantida no Google.",
  "Número fixo de leads.",
  "Citação garantida em ChatGPT ou AI Overviews.",
  "“Hack secreto” de algoritmo.",
  "Centenas de backlinks artificiais.",
  "Milhares de páginas automáticas sem valor.",
  "Resultados instantâneos.",
];

const paraQuem = [
  "já possuem um site",
  "oferecem produtos ou serviços que as pessoas pesquisam",
  "querem reduzir dependência de mídia paga",
  "possuem expertise que pode virar conteúdo",
  "querem fortalecer autoridade",
  "podem investir em evolução contínua",
  "valorizam mensuração",
  "querem presença em busca tradicional e generativa",
];

const naoSeja = [
  "o produto ainda não foi validado",
  "não existe oferta clara",
  "não há capacidade de atender nova demanda",
  "não há disposição para produzir conteúdo especializado",
  "o objetivo é resultado garantido em poucos dias",
  "a intenção é apenas “encher o site de palavras-chave”",
];

const mercados = [
  { title: "SEO Local", text: "Empresas que dependem de buscas regionais, unidades físicas ou áreas específicas de atendimento." },
  { title: "SEO Nacional", text: "Empresas que atendem clientes em diferentes regiões do Brasil." },
  { title: "SEO B2B", text: "Ciclo comercial longo, ticket elevado e pesquisas altamente específicas." },
  { title: "SaaS e Tecnologia", text: "Autoridade em categorias, problemas, integrações, comparativos e casos de uso." },
  { title: "Serviços Especializados", text: "Vendem conhecimento e precisam demonstrar profundidade antes do contato." },
];

const stackSoluna = ["SEO", "GEO", "LLM SEO", "Desenvolvimento", "Performance", "Dados", "UX/UI", "Conversão", "IA", "Automações"];

const faq = [
  { q: "Minha empresa já tem site. Preciso criar outro para fazer SEO?", a: "Não. Na maioria dos casos começamos avaliando o site existente. Se a base técnica é adequada, podemos corrigir, reorganizar, expandir e otimizar o que já existe. Um redesign ou migração só é recomendado quando limitações reais justificarem." },
  { q: "O que é SEO?", a: "SEO é o conjunto de estratégias para melhorar a capacidade de mecanismos de busca encontrarem, compreenderem, indexarem e apresentarem páginas relevantes. Envolve aspectos técnicos, conteúdo, arquitetura, autoridade e experiência." },
  { q: "O que é GEO?", a: "GEO significa Generative Engine Optimization — estratégias para melhorar a presença e compreensão de uma empresa em experiências de busca baseadas em IA e mecanismos generativos. Na Soluna, GEO é trabalhado sobre uma base sólida de SEO, conteúdo, entidades e estrutura técnica." },
  { q: "O que é LLM SEO?", a: "É um termo para a otimização da presença digital visando facilitar a descoberta, compreensão e recuperação de informações por sistemas baseados em modelos de linguagem: conteúdo, arquitetura semântica, entidades, autoria, dados estruturados, fontes e rastreabilidade." },
  { q: "GEO substitui SEO?", a: "Não. SEO continua sendo a base. Boa parte das experiências generativas depende de sistemas de busca, índices, rastreamento, relevância e qualidade. Tratamos SEO e GEO como partes complementares da mesma estratégia." },
  { q: "É possível garantir que minha empresa apareça no ChatGPT?", a: "Não. Nenhuma agência controla quais fontes serão usadas em uma resposta específica. Trabalhamos acessibilidade, clareza, autoridade e estrutura para aumentar a capacidade de ser descoberto e utilizado quando relevante — sem prometer citações." },
  { q: "É possível garantir primeira posição no Google?", a: "Não. Posições dependem de diversos fatores e dos próprios sistemas dos mecanismos. O trabalho de SEO aumenta a competitividade do site, mas não existe garantia legítima de posição específica." },
  { q: "Quanto tempo o SEO leva para gerar resultado?", a: "Depende do estado atual do site, concorrência, autoridade, demanda, histórico e ritmo de implementação. Algumas correções geram impacto mais rápido; construção de autoridade normalmente exige trabalho contínuo." },
  { q: "Vocês corrigem os problemas ou só entregam a auditoria?", a: "Os dois modelos. A Soluna pode entregar somente o diagnóstico ou assumir a implementação das correções e a evolução, dependendo do projeto." },
  { q: "Vocês produzem conteúdo?", a: "Sim. O projeto pode incluir estratégia, topical map, briefs, atualização de páginas, copywriting e produção de conteúdo especializado, combinando pesquisa com o conhecimento real da empresa." },
  { q: "Vocês atualizam conteúdos antigos?", a: "Sim. Conteúdos existentes podem ter grande potencial. Analisamos quais devem ser atualizados, consolidados, expandidos, redirecionados ou removidos." },
  { q: "Vocês trabalham com sites WordPress e Next.js?", a: "Sim. Executamos SEO técnico, conteúdo, performance e otimizações em WordPress, respeitando a implementação existente, e também atuamos em projetos Next.js e outras arquiteturas web modernas." },
  { q: "Vocês configuram Search Console, Analytics e Bing?", a: "Sim, quando contemplado no escopo. Revisamos configurações existentes e integramos Search Console, Analytics, Tag Manager, Bing Webmaster Tools e IndexNow quando aplicável." },
  { q: "Vocês analisam visibilidade em buscas com IA?", a: "Sim. Analisamos dados disponíveis nas plataformas, tráfego referenciado e sinais de descoberta, evitando transformar testes isolados em métricas conclusivas." },
  { q: "Vocês usam llms.txt?", a: "Podemos implementar ou manter o arquivo de forma experimental quando fizer sentido, mas não o tratamos como requisito ou solução principal. Para o Google Search, a base continua sendo SEO, rastreabilidade, conteúdo útil e arquitetura consistente." },
  { q: "A Soluna atende empresas de todo o Brasil?", a: "Sim. O trabalho é conduzido online e podemos atender empresas de diferentes regiões do país." },
];

/* ── Página ──────────────────────────────────────────────────────── */

export default function SeoGeoPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "SEO e GEO", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "SEO, GEO e LLM SEO", description: answer, path }), faqSchema(faq), breadcrumbSchema(crumbs))} />

      <PageHero
        crumbs={crumbs}
        eyebrow="SEO · GEO · LLM SEO"
        title="Seu site já existe. Agora ele precisa ser encontrado, compreendido e escolhido."
        answer={answer}
        actions={
          <>
            <ButtonLink href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" size="lg">
              Solicitar auditoria estratégica
            </ButtonLink>
            <ButtonLink href="#como-funciona" size="lg" variant="ghost-light">
              Entender como funciona
            </ButtonLink>
          </>
        }
        aside={
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="flex flex-wrap gap-x-2.5 gap-y-1 text-sm text-white/55">
              {["SEO Técnico", "Conteúdo", "GEO", "LLM SEO", "Autoridade", "Performance", "Analytics", "CRO"].map((t, i, a) => (
                <span key={t} className="inline-flex items-center gap-2.5">
                  {t}
                  {i < a.length - 1 && <span aria-hidden className="text-white/25">·</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-white/45">Atendimento online para empresas em todo o Brasil.</p>
          </div>
        }
      />

      {/* §3 — Você já tem um site */}
      <Section tone="white" labelledBy="ja-tem-site">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <SectionHeading
            id="ja-tem-site"
            eyebrow="O próximo nível"
            title="Criar o site foi o primeiro passo. Fazer esse ativo trabalhar pelo negócio é o próximo."
            text="Muitas empresas investem em design, desenvolvimento e conteúdo inicial — mas depois da publicação o site permanece parado. Com o tempo, os problemas se acumulam:"
          />
          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "novos concorrentes aparecem",
                "o comportamento de busca muda",
                "os serviços evoluem",
                "surgem novas intenções de pesquisa",
                "conteúdos ficam desatualizados",
                "páginas deixam de representar a marca",
                "problemas técnicos se acumulam",
                "a arquitetura cresce sem estratégia",
                "o site recebe tráfego, mas converte pouco",
              ].map((g) => (
                <li key={g} className="flex gap-3 text-[0.95rem] text-ink/85">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl border border-line-strong bg-mist p-5 text-[0.95rem] text-slate">
              Nosso trabalho é analisar o ativo que sua empresa já possui e descobrir <strong className="text-ink">como aumentar o retorno que ele pode gerar</strong> — sem recomendar um novo site quando o atual pode ser evoluído.
            </p>
          </div>
        </div>
      </Section>

      {/* §4 — Quando faz sentido */}
      <Section tone="mist" labelledBy="sinais">
        <SectionHeading
          id="sinais"
          eyebrow="Sinais de oportunidade"
          title="Seu site pode estar deixando demanda na mesa."
          text="Este serviço é indicado quando sua empresa já possui um site e enfrenta situações como estas:"
        />
        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {sinais.map((s) => (
            <li key={s} className="flex gap-3 text-[0.95rem] text-ink/85">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/ferramentas/teste-visibilidade-ia/" variant="secondary" arrow>
            Quero avaliar meu site
          </ButtonLink>
        </div>
      </Section>

      {/* §5 + §6 + §7 — Estratégia e o que é SEO/GEO/LLM SEO */}
      <Section tone="white" id="como-funciona" labelledBy="estrategia">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="estrategia"
            eyebrow="Estratégia"
            title="Antes de otimizar páginas, entendemos o negócio."
            text="SEO não deveria começar com uma planilha de palavras-chave. Começa entendendo:"
          />
          <ul className="grid gap-x-8 gap-y-3 self-center sm:grid-cols-2">
            {entendemos.map((e) => (
              <li key={e} className="flex gap-3 text-[0.95rem] text-ink/85">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {[
            { t: "SEO", d: "Trabalha a descoberta, compreensão, indexação, relevância e autoridade do site nos mecanismos de busca tradicionais." },
            { t: "GEO", d: "Generative Engine Optimization: clareza e estrutura para que mecanismos generativos encontrem, compreendam e usem as informações da empresa em buscas com IA." },
            { t: "LLM SEO", d: "Otimizações voltadas à compreensão e recuperação de informações por sistemas de linguagem: conteúdo claro, entidades consistentes e rastreabilidade." },
          ].map((c) => (
            <Card key={c.t}>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">{c.t}</h3>
              <p className="mt-3 text-[0.95rem] text-slate">{c.d}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-dashed border-line-strong bg-mist p-5 text-center text-[0.95rem] font-semibold text-ink">
          SEO constrói a base · GEO amplia a estratégia para experiências generativas · LLM SEO melhora a clareza para sistemas de IA. O melhor trabalho acontece quando tudo é uma única estratégia.
        </p>
      </Section>

      {/* §7 — Não existe GEO sem SEO */}
      <Section tone="navy" labelledBy="sem-atalhos">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Sem atalhos</Eyebrow>
            <h2 id="sem-atalhos" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
              Otimização para IA não substitui os fundamentos.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Não acreditamos em “hacks” que prometem colocar uma empresa nas respostas das IAs da noite para o dia. Para buscadores e sistemas generativos compreenderem uma empresa, primeiro é preciso uma base consistente. GEO é uma camada de evolução sobre uma estratégia digital sólida.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xl font-semibold text-white">A base que sustenta o GEO</h3>
            <Checklist dark className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 [&>li+li]:mt-0" items={baseSeo} />
          </div>
        </div>
      </Section>

      {/* §8 — Auditoria */}
      <Section tone="mist" labelledBy="auditoria">
        <SectionHeading
          id="auditoria"
          eyebrow="Diagnóstico"
          title="Antes de alterar o site, entendemos onde ele está perdendo potencial."
          text="Analisamos o ambiente atual para saber o que corrigir, preservar e expandir. O resultado é um plano priorizado de evolução — não uma lista genérica com centenas de erros."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {auditoria.map((a) => (
            <Card key={a.title}>
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{a.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §9 — SEO técnico */}
      <Section tone="white" labelledBy="seo-tecnico">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="seo-tecnico"
            eyebrow="Fundação"
            title="Se os mecanismos não conseguem rastrear e indexar, o resto perde força."
            text="O SEO técnico organiza a infraestrutura para o conteúdo competir de verdade. O objetivo não é “zerar erros numa ferramenta” — é remover barreiras que impedem buscadores e usuários de acessar e compreender o site."
          />
          <Checklist items={seoTecnico} className="grid gap-x-8 self-center sm:grid-cols-2 [&>li+li]:mt-0" />
        </div>
      </Section>

      {/* §10 + §11 — Arquitetura e intenção */}
      <Section tone="mist" labelledBy="arquitetura">
        <SectionHeading
          id="arquitetura"
          eyebrow="Estrutura e demanda"
          title="Cada página deve existir por um motivo — e responder a uma intenção real."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Arquitetura de informação</p>
            <h3 className="text-xl font-semibold">Deixar claro quais assuntos importam para a empresa.</h3>
            <ol className="mt-5 space-y-2">
              {["Home", "Serviços", "Soluções específicas", "Problemas atendidos", "Setores", "Cases", "Conteúdos especializados", "Perguntas e comparativos"].map((s, i, a) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-[0.7rem] font-semibold text-sky">{i + 1}</span>
                  <span className="text-[0.95rem] text-ink/85">{s}</span>
                  {i < a.length - 1 && <ChevronDown aria-hidden className="ml-auto size-4 text-line-strong" />}
                </li>
              ))}
            </ol>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Mapeamento de intenções</p>
            <h3 className="text-xl font-semibold">Clientes pesquisam problemas antes de fornecedores.</h3>
            <ul className="mt-5 space-y-4">
              {intencoes.map((it) => (
                <li key={it.stage}>
                  <p className="text-sm font-semibold text-ink">{it.stage}</p>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {it.ex.map((e) => (
                      <span key={e} className="rounded-full border border-line/70 bg-mist px-3 py-1 text-[0.82rem] text-slate">{e}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* §12 + §13 + §14 — Conteúdo e autoridade */}
      <Section tone="white" labelledBy="conteudo">
        <SectionHeading id="conteudo" eyebrow="Autoridade" title="Publicar mais não é construir autoridade." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {conteudoCards.map((c) => (
            <Card key={c.eyebrow}>
              <p className="eyebrow mb-3">{c.eyebrow}</p>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §15 + §16 — GEO e LLM SEO */}
      <Section tone="aurora" labelledBy="geo-llm">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-white/80">Busca generativa</Eyebrow>
          <h2 id="geo-llm" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
            Sua empresa também precisa ser compreendida quando a busca deixa de ser uma lista de links.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Em vez de digitar <span className="text-white">“software financeiro”</span>, o usuário pergunta: <span className="text-white">“Quais as melhores opções de software financeiro para uma empresa de serviços com 50 funcionários e integração com determinado ERP?”</span> A forma da consulta muda — e a necessidade de fontes claras e específicas aumenta.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.4rem] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">GEO — Generative Engine Optimization</h3>
            <p className="mt-3 text-[0.95rem] text-white/70">Fortalecemos a capacidade da presença digital ser descoberta, compreendida, relacionada aos temas corretos e utilizada como referência quando relevante — sem prometer citações ou posições que nenhum fornecedor garante.</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">LLM SEO — compreensão por IA</h3>
            <p className="mt-3 text-[0.95rem] text-white/70">Organizamos a presença para que sistemas de linguagem encontrem menos ambiguidade sobre quem é a empresa, o que oferece, para quem, como funciona, em quais assuntos tem experiência, quem produz o conteúdo e o que é atual.</p>
          </div>
        </div>

        <div className="mt-10 rounded-[1.4rem] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/55">Ecossistema de descoberta — o site no centro</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {ecossistemaDescoberta.map((e) => (
              <li key={e} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.85rem] font-medium text-white/85">{e}</li>
            ))}
          </ul>
          <p className="mt-5 text-[0.95rem] text-white/70">A presença da empresa precisa ser coerente em múltiplas superfícies.</p>
        </div>
      </Section>

      {/* §17 + §18 + §19 — Entidade, dados estruturados, conteúdo citável */}
      <Section tone="white" labelledBy="entidade">
        <SectionHeading id="entidade" eyebrow="Compreensão e evidência" title="Antes de confiar numa marca, os mecanismos precisam identificá-la corretamente." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {entidadeCards.map((c) => (
            <Card key={c.eyebrow}>
              <p className="eyebrow mb-3">{c.eyebrow}</p>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §20 + §21 + §22 — Autoridade */}
      <Section tone="mist" labelledBy="autoridade">
        <SectionHeading id="autoridade" eyebrow="E-E-A-T" title="Autoridade vem das pessoas e evidências por trás do domínio." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {autoridadeCards.map((c) => (
            <Card key={c.eyebrow}>
              <p className="eyebrow mb-3">{c.eyebrow}</p>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §23 + §24 + §25 + §58 — Da visita ao resultado */}
      <Section tone="white" labelledBy="cro">
        <SectionHeading
          id="cro"
          eyebrow="Performance, conversão e dados"
          title="Mais tráfego não é o objetivo final."
          text="O objetivo é aumentar a capacidade do site gerar resultado. SEO atrai, a experiência mantém, a conversão transforma atenção em oportunidade — e a mensuração tira a estratégia do campo da opinião."
        />
        <div className="mt-12 rounded-[1.5rem] border border-line bg-mist p-6 md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate">Como o valor é criado</p>
          <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {valorFlow.map((step, i, a) => (
              <li key={step} className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-2 lg:text-center">
                <span className="flex flex-1 items-center justify-center rounded-xl border border-line/70 bg-white px-3 py-3 text-center text-[0.85rem] font-semibold text-ink shadow-[var(--shadow-card)] lg:w-full lg:flex-none">
                  {step}
                </span>
                {i < a.length - 1 && <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90 text-signal lg:rotate-0" />}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[0.95rem] text-slate">
            Visibilidade é o início da jornada. O valor aparece quando as pessoas certas encontram a empresa, confiam no que veem e avançam para uma ação.
          </p>
        </div>
      </Section>

      {/* §26 + §27 + §28 — Busca com IA, com critério */}
      <Section tone="mist" labelledBy="busca-ia">
        <SectionHeading id="busca-ia" eyebrow="Novas superfícies, com critério técnico" title="A busca com IA é acompanhada com dados reais — não com promessas." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {buscaIaCards.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §29 + §30 — Evoluir sem destruir */}
      <Section tone="white" labelledBy="preservar">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Preserve o que já funciona</p>
            <h3 className="text-2xl font-semibold">Melhorar resultados não é começar do zero.</h3>
            <p className="mt-3 text-slate">Se o site tem uma boa base, trabalhamos sobre ela: correções técnicas, templates, arquitetura, atualização de páginas, novas landing pages, links internos, dados estruturados, performance, UX e conversão. Um redesign só é recomendado quando limitações reais justificarem.</p>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Preservação de SEO</p>
            <h3 className="text-2xl font-semibold">Uma migração não deveria apagar anos de autoridade.</h3>
            <p className="mt-3 text-slate">Quando a evolução exige troca de tecnologia, domínio ou arquitetura, o SEO participa da migração: inventário de URLs, páginas com tráfego, backlinks, mapa de redirecionamentos, canonicals, sitemap, metadata, dados estruturados e monitoramento pós-migração.</p>
          </Card>
        </div>
      </Section>

      {/* §31 — Método Soluna */}
      <Section tone="navy" labelledBy="metodo">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-sky">Da auditoria à evolução</Eyebrow>
          <h2 id="metodo" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.6rem]">
            Cinco etapas para transformar um site existente em um ativo mais competitivo.
          </h2>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {metodo.map((s) => (
            <li key={s.n} className="flex flex-col rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-sky">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 flex-1 text-[0.9rem] text-white/70">{s.text}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-[0.85rem] text-white/80">
                <span className="font-semibold text-white">Resultado:</span> {s.result}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center font-[family-name:var(--font-display)] text-lg font-semibold text-white">
          Auditar → Priorizar → Implementar → Medir → Evoluir
        </p>
      </Section>

      {/* §32 + §33 — Entregáveis + O que não fazemos */}
      <Section tone="mist" labelledBy="entregaveis">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <SectionHeading id="entregaveis" eyebrow="Entregáveis" title="Clareza sobre o que está sendo feito — e por quê." />
            <Checklist items={entregaveis} className="mt-6 grid gap-x-8 sm:grid-cols-2 [&>li+li]:mt-0" />
            <p className="mt-6 text-[0.95rem] text-slate">A composição exata depende do diagnóstico e do contrato.</p>
          </Card>
          <div className="rounded-[var(--radius-card)] bg-navy p-6 text-white shadow-[var(--shadow-card)] md:p-8">
            <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-sky">Sem promessas vazias</p>
            <h2 className="text-2xl font-semibold text-white">O que não fazemos.</h2>
            <p className="mt-3 text-white/70">Nenhuma agência controla os mecanismos de busca. Não prometemos:</p>
            <Checklist dark className="mt-5" items={naoFazemos} />
          </div>
        </div>
      </Section>

      {/* §34 + §35 — Aderência */}
      <Section tone="white" labelledBy="aderencia">
        <SectionHeading id="aderencia" eyebrow="Aderência" title="Para quem esse serviço é — e para quem talvez ainda não seja." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold">Faz sentido para empresas que:</h3>
            <Checklist items={paraQuem} className="mt-5" />
          </Card>
          <Card className="ring-1 ring-line/60">
            <h3 className="text-xl font-semibold">Pode não ser a prioridade quando:</h3>
            <ul className="mt-5 space-y-3.5">
              {naoSeja.map((n) => (
                <li key={n} className="flex gap-3 text-ink/85">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-slate/50" />
                  {n}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* §36 — Estratégia por mercado */}
      <Section tone="mist" labelledBy="mercados">
        <SectionHeading
          id="mercados"
          eyebrow="Estratégia de mercado"
          title="A estratégia muda de acordo com onde está a demanda."
          text="A arquitetura é definida conforme o mercado — não com um template único."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mercados.map((m) => (
            <div key={m.title} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60">
              <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-ink">{m.title}</h3>
              <p className="mt-2 text-[0.92rem] text-slate">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* §38 — Modelos de contratação */}
      <Section tone="white" labelledBy="modelos">
        <SectionHeading
          id="modelos"
          eyebrow="Como começar"
          title="Comece entendendo o que seu site realmente precisa."
          text="O ponto de entrada é uma auditoria estratégica — não um orçamento genérico. Ela reduz a fricção porque a maioria das empresas ainda não sabe onde está o problema."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Ponto de entrada</p>
            <h3 className="text-2xl font-semibold">Auditoria Estratégica</h3>
            <p className="mt-3 text-slate">Diagnóstico completo antes de decidir o próximo passo: auditoria técnica, de conteúdo, arquitetura, GEO/LLM SEO, mensuração, oportunidades e um roadmap priorizado.</p>
            <p className="mt-6 text-3xl font-semibold text-navy">Sob consulta</p>
            <p className="mt-1 text-sm text-slate">Valor creditável na contratação da implementação.</p>
            <div className="mt-6">
              <ButtonLink href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" arrow>
                Conhecer a auditoria
              </ButtonLink>
            </div>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Execução</p>
            <h3 className="text-2xl font-semibold">Projeto de Implementação</h3>
            <p className="mt-3 text-slate">Para quem já tem diagnóstico e precisa executar: correções técnicas, reestruturação, otimização, novas páginas, dados estruturados, analytics, performance, migração e CRO.</p>
            <p className="mt-6 text-lg font-semibold text-ink">Investimento conforme escopo.</p>
            <p className="mt-1 text-sm text-slate">Definido a partir do plano priorizado da auditoria.</p>
          </Card>
        </div>

        <div className="mt-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-slate">SEO/GEO contínuo · contrato mínimo de 6 meses</p>
          <OfferCards
            offers={[
              { name: "Presença", price: "Sob consulta", text: "Base técnica e medição.", features: ["Ajustes técnicos contínuos", "Google Business Profile", "Monitoramento de posições e citações", "Relatório mensal"] },
              { name: "Crescimento", price: "Sob consulta", text: "Conteúdo citável todo mês.", features: ["Tudo do Presença", "Produção de conteúdo citável", "Otimização das páginas de serviço", "Links internos e dados estruturados"], highlight: true, badge: "Recomendado" },
              { name: "Autoridade", price: "Sob consulta", text: "Presença da marca fora do site.", features: ["Tudo do Crescimento", "Comparativos e guias-pilar", "Autoridade fora do site (artigos, diretórios, LinkedIn)", "Reunião mensal de estratégia"] },
            ]}
          />
          <p className="mt-4 text-sm text-slate">Os modelos comerciais e o escopo definitivo são confirmados na proposta.</p>
        </div>
      </Section>

      {/* §39 — Por que Soluna */}
      <Section tone="navy" labelledBy="por-que">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Diferencial</Eyebrow>
            <h2 id="por-que" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
              SEO, conteúdo, desenvolvimento e IA no mesmo contexto.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Muitos projetos de SEO dependem de vários fornecedores: um encontra o problema técnico, outro corrige, outro produz conteúdo, outro cuida do site. Na Soluna, a estratégia é trabalhada considerando tudo ao mesmo tempo — o que reduz a distância entre recomendação e implementação.
            </p>
          </div>
          <div className="self-center">
            <ul className="flex flex-wrap gap-2.5">
              {stackSoluna.map((s) => (
                <li key={s} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.92rem] font-medium text-white/85">{s}</li>
              ))}
            </ul>
            <p className="mt-6 text-white/70">Não queremos apenas entregar uma auditoria dizendo o que está errado. Queremos transformar diagnóstico em evolução real.</p>
          </div>
        </div>
      </Section>

      {/* Saiba mais — links internos preservados */}
      <Section tone="white" labelledBy="saiba-mais">
        <h2 id="saiba-mais" className="text-2xl font-semibold md:text-3xl">Saiba mais</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <LinkCard href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" meta="Produto de entrada" title="Auditoria de Visibilidade em IA" text="Como sua marca aparece hoje nas IAs. Investimento sob consulta, creditável." />
          <LinkCard href="/conteudo/guias/geo-como-aparecer-nas-ias/" meta="Guia" title="GEO: como aparecer no ChatGPT, Gemini e Google AI Mode" />
          <LinkCard href="/ferramentas/teste-visibilidade-ia/" meta="Ferramenta gratuita" title="Teste de Visibilidade em IA" text="Um retrato rápido da prontidão técnica do seu site." />
        </div>
      </Section>

      {/* §40 — FAQ */}
      <FAQSection items={faq} title="O que empresas querem saber antes de começar" tone="mist" />

      {/* §41 — CTA final */}
      <Section tone="navy" labelledBy="cta-final">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 text-sky">Seu site já existe. O potencial dele talvez ainda não.</Eyebrow>
          <h2 id="cta-final" className="text-[2rem] font-bold leading-[1.1] text-white md:text-[2.7rem]">
            Descubra o que impede seu site de gerar mais visibilidade, autoridade e oportunidades.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Você não precisa começar outro site sem saber o que está errado. Primeiro analisamos o ativo existente — problemas técnicos, oportunidades de conteúdo, demanda, autoridade, SEO, GEO, LLM SEO, conversão e mensuração — e transformamos tudo isso em um plano de evolução.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/servicos/seo-e-geo/auditoria-visibilidade-ia/" size="lg">
              Solicitar auditoria estratégica
            </ButtonLink>
            <ButtonLink href={whatsappLink("Olá! Quero falar com um especialista sobre SEO, GEO e LLM SEO para o meu site.")} size="lg" variant="ghost-light">
              Falar com um especialista
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/45">
            SEO Técnico · Conteúdo · GEO · LLM SEO · Performance · Analytics · CRO — atendimento online para empresas em todo o Brasil.
          </p>
        </div>
      </Section>

      <Signature updatedAt="2026-09-26" />
    </>
  );
}
