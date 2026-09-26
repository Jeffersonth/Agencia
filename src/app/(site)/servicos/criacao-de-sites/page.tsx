import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import { Checklist, FAQSection, PageHero, Signature } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { SiteChatMock } from "@/components/visuals";
import { whatsappLink } from "@/lib/site";

const path = "/servicos/criacao-de-sites/";
const title = "Criação de Sites Profissionais para Empresas";
const description =
  "Criamos sites profissionais em WordPress e Next.js com estratégia, copy, UX/UI, SEO, GEO, performance, segurança e integrações para empresas em todo o Brasil.";
const answer =
  "A Soluna IA cria sites institucionais, landing pages, e-commerces e plataformas em WordPress e Next.js, unindo estratégia, copywriting, UX/UI, SEO, GEO, performance, segurança e integrações desde a arquitetura — para transformar a presença digital da empresa em um ativo de negócio.";

export const metadata: Metadata = pageMetadata({ title, description, path });

/* ── Dados da página ─────────────────────────────────────────────── */

const questions = [
  "Esta empresa entende meu problema?",
  "Parece profissional e confiável?",
  "Tem experiência no assunto?",
  "A solução faz sentido para mim?",
  "Por que devo escolher esta empresa?",
  "Qual é o próximo passo?",
];

const gargalos = [
  "A empresa parece menor no site do que realmente é.",
  "A proposta de valor não fica clara.",
  "Os serviços estão mal apresentados.",
  "O visual transmite uma imagem ultrapassada.",
  "A experiência no celular é ruim.",
  "O site demora para carregar.",
  "Os visitantes chegam, mas poucos entram em contato.",
  "Novas páginas dependem de improviso.",
  "A empresa praticamente não aparece no Google.",
  "Não existe uma estratégia consistente de SEO.",
  "Mecanismos de IA têm dificuldade para compreender a empresa.",
  "Não há arquitetura de conteúdo preparada para crescer.",
  "Formulários, CRM, WhatsApp e analytics não estão conectados.",
  "A equipe não sabe quais páginas realmente geram oportunidades.",
];

const padrao = [
  "Design e desenvolvimento de websites",
  "Conteúdo estratégico e persuasivo",
  "Copywriting para posicionamento e conversão",
  "Blog completo com mapeamento de tópicos",
  "Arquitetura de conteúdo preparada para SEO",
  "Otimização de velocidade e performance",
  "Responsividade total em todos os dispositivos",
  "Integração com redes sociais",
  "Conformidade com a LGPD",
  "Segurança e proteção avançada",
  "SEO estruturado e completo",
  "GEO para mecanismos generativos",
  "Auditoria técnica de SEO",
  "Estratégia de conversão (CRO)",
  "Experiência do usuário — UX/UI",
  "Search Console, Tag Manager e Analytics",
  "Painel administrativo fácil de gerenciar",
  "WordPress ou Next.js, conforme o projeto",
  "Configuração de servidor e hospedagem",
  "Apoio na gestão do domínio",
  "Infraestrutura web segura e otimizada",
  "Integrações com WhatsApp, CRM e APIs",
  "Entregáveis completos ao final do projeto",
  "Propriedade dos ativos conforme contrato",
];

const entender = [
  "quem é a empresa",
  "quem é o cliente ideal",
  "quais problemas ela resolve",
  "quais serviços oferece",
  "como funciona a solução",
  "quais são os diferenciais",
  "quais objeções aparecem na venda",
  "o que gera confiança",
  "o que precisa ser explicado antes do contato",
];

const seoTecnico = [
  "Titles e meta descriptions",
  "URLs e canonical",
  "Sitemap e robots.txt",
  "Headings e HTML semântico",
  "Links internos",
  "Dados estruturados e Open Graph",
  "Core Web Vitals e performance",
  "Indexação e Search Console",
  "Redirecionamentos e auditoria técnica",
];

const seoEstrategico = [
  "serviços e soluções",
  "problemas do cliente",
  "setores atendidos",
  "localidades relevantes",
  "cases e comparativos",
  "perguntas frequentes",
  "conteúdo educacional",
];

const geoItens = [
  "arquitetura semântica",
  "entidades bem definidas",
  "conteúdo especializado e original",
  "respostas objetivas e FAQs",
  "autores identificados",
  "dados institucionais consistentes",
  "dados estruturados",
  "páginas de serviço aprofundadas",
];

const qualidade = [
  {
    eyebrow: "UX/UI e conversão",
    title: "Cada decisão visual ajuda o visitante a avançar.",
    text: "Definimos o que aparece primeiro, o que ganha destaque, quando mostrar prova e onde posicionar a chamada. Percepção premium e clareza, juntas.",
  },
  {
    eyebrow: "Design",
    title: "Sua empresa pode ser excelente e ainda parecer comum na internet.",
    text: "Construímos uma identidade digital coerente com o posicionamento desejado. Design não é efeito da moda — existe para valorizar a mensagem.",
  },
  {
    eyebrow: "Performance",
    title: "Cada segundo de espera cria atrito.",
    text: "Otimizamos carregamento, imagens, fontes, scripts, cache e servidor. Performance influencia experiência, SEO e conversão.",
  },
  {
    eyebrow: "Responsividade",
    title: "Seu cliente não escolhe o dispositivo antes de conhecer sua empresa.",
    text: "Adaptamos a experiência para celulares, tablets, notebooks e telas maiores — não reduzimos uma versão desktop.",
  },
];

const estruturaTecnica = [
  { title: "Painel administrativo", text: "Sua equipe edita textos, imagens, artigos e páginas sem depender da agência. WordPress é forte aqui; em outras arquiteturas usamos CMS ou painéis sob medida." },
  { title: "Infraestrutura", text: "Domínio, DNS, servidor, hospedagem, SSL, CDN, cache, backups, deploy e monitoramento — um ambiente organizado, seguro e pronto para operar." },
  { title: "Segurança e LGPD", text: "SSL, proteção de acesso e de formulários, gestão de credenciais, atualizações e minimização de dados, com os elementos necessários à adequação à LGPD." },
  { title: "Analytics e mensuração", text: "Analytics, Tag Manager, Search Console e eventos de conversão (WhatsApp, formulários, agendamentos) para embasar decisões futuras." },
  { title: "Integrações", text: "WhatsApp, CRM, ERP, agenda, e-mail marketing, automação, pagamento, frete, estoque e APIs — a ação no site continua dentro da operação." },
];

const iaCapabilities = [
  { title: "Assistente de IA", text: "Responde perguntas usando as informações da empresa." },
  { title: "Qualificação de leads", text: "Entende o contexto e identifica oportunidades." },
  { title: "Agendamento", text: "Ajuda o visitante a avançar para uma reunião." },
  { title: "Busca inteligente", text: "Encontra informações em linguagem natural." },
  { title: "Recomendações", text: "Orienta para produtos, serviços ou conteúdos relevantes." },
  { title: "Agente comercial", text: "Conduz as etapas iniciais e transfere para a equipe." },
];

const metodo = [
  { n: "01", title: "Diagnóstico", text: "Entendemos empresa, público, objetivos, serviços, concorrentes, site atual e oportunidades.", result: "Direção estratégica e escopo claro." },
  { n: "02", title: "Arquitetura e Copy", text: "Definimos páginas, hierarquia, jornada, SEO/GEO, mapeamento de conteúdo e mensagem.", result: "Estrutura e conteúdo antes do desenvolvimento." },
  { n: "03", title: "UX/UI e Desenvolvimento", text: "Transformamos a estratégia em interface e construímos em WordPress, Next.js ou arquitetura adequada.", result: "Experiência responsiva, funcional e alinhada à marca." },
  { n: "04", title: "SEO/GEO, Integrações e QA", text: "Implementamos otimizações técnicas, analytics, integrações e segurança, com revisão completa.", result: "Site validado e preparado para publicação." },
  { n: "05", title: "Publicação e Evolução", text: "Configuramos ambiente, domínio e publicação. Quando contratado, seguimos acompanhando e evoluindo.", result: "Um ativo digital preparado para crescer." },
];

const entregaveis = [
  "Código ou acesso à plataforma",
  "Credenciais e painel administrativo",
  "Acessos de hospedagem e domínio",
  "Google Search Console, Analytics e Tag Manager",
  "Documentação e mapa de páginas",
  "Orientações de uso e treinamento",
  "Informações de infraestrutura",
  "Backups iniciais",
];

const seoGeoJornada = ["Pesquisa / IA", "Página relevante", "Conteúdo + autoridade", "UX/UI + prova", "CTA", "Lead", "CRM / WhatsApp"];

const ecossistema = [
  { title: "Site + SEO/GEO", text: "Presença, autoridade e novas superfícies de aquisição.", href: "/servicos/seo-e-geo/", cta: "Conhecer SEO e GEO" },
  { title: "Site + Agente de IA", text: "Transforme visitantes em conversas e oportunidades.", href: "/solucoes/atendimento-inteligente/assistente-ia-para-site/", cta: "Ver Agentes de IA" },
  { title: "Site + SEO/GEO + IA", text: "Ser encontrado e oferecer uma experiência inteligente quando o visitante chega.", href: "/servicos/seo-e-geo/", cta: "Ver estratégia" },
  { title: "Site + CRM + Automação", text: "O lead segue automaticamente para o processo comercial.", href: "/solucoes/operacoes/automacao-de-processos/", cta: "Ver Automação" },
  { title: "Site + Sistema", text: "Conecte a presença institucional a portais, áreas logadas e software sob medida.", href: "/servicos/desenvolvimento-de-sistemas/", cta: "Conhecer Sistemas" },
];

const faq = [
  { q: "Vocês criam sites em WordPress?", a: "Sim. Desenvolvemos em WordPress quando essa arquitetura faz sentido para o cliente, especialmente em sites com forte autonomia editorial, publicação recorrente de conteúdo e um painel administrativo simples de operar." },
  { q: "Vocês também trabalham com Next.js?", a: "Sim. Next.js é utilizado em projetos que exigem maior flexibilidade técnica, experiências personalizadas, integrações avançadas ou arquiteturas sob medida. Não somos presos a uma única tecnologia." },
  { q: "Qual é melhor: WordPress ou Next.js?", a: "Depende do projeto. WordPress pode ser excelente para sites institucionais e operações com forte necessidade editorial; Next.js costuma ser mais adequado para customização, integrações e experiências específicas. A escolha é feita depois de entendermos os requisitos." },
  { q: "O site já possui SEO?", a: "O escopo pode contemplar SEO técnico e estratégico desde a arquitetura: estrutura das páginas, headings, metadados, links internos, indexação, performance, dados estruturados e integração com ferramentas de análise." },
  { q: "O serviço também inclui GEO?", a: "Sim, quando contratado dentro do escopo. Além do SEO tradicional, estruturamos conteúdo, entidades, dados, arquitetura e páginas para facilitar a compreensão da empresa por mecanismos generativos e sistemas de IA." },
  { q: "SEO/GEO pode gerar mais vendas?", a: "SEO e GEO ampliam as chances de descoberta por quem pesquisa soluções relacionadas ao negócio. Visibilidade sozinha não garante vendas — por isso combinamos SEO/GEO com copy, UX/UI, autoridade e estratégia de conversão." },
  { q: "Vocês desenvolvem o conteúdo do site?", a: "Sim. O projeto pode incluir estratégia de conteúdo e copywriting para páginas institucionais, serviços, soluções, FAQs, cases e demais áreas necessárias." },
  { q: "Vocês criam blog?", a: "Sim. Podemos estruturar o blog completo, incluindo categorias, arquitetura, mapeamento de tópicos e estratégia de clusters de conteúdo." },
  { q: "O site terá painel administrativo?", a: "Quando a operação exige atualização recorrente, estruturamos um painel apropriado. WordPress é uma das opções, justamente pela facilidade de gestão de conteúdo." },
  { q: "Vocês configuram hospedagem e servidor?", a: "Sim. O projeto pode incluir configuração de servidor, hospedagem, DNS, SSL, domínio, cache, CDN e outros elementos de infraestrutura necessários." },
  { q: "O site fica no meu nome?", a: "Buscamos manter ativos essenciais, como domínio e contas estratégicas, sob controle da empresa contratante sempre que aplicável. As condições são formalizadas no projeto e no contrato." },
  { q: "Vocês configuram Search Console e Tag Manager?", a: "Sim, quando contemplados no escopo. Também podemos configurar Analytics e os eventos de conversão mais importantes." },
  { q: "O site atende à LGPD?", a: "Estruturamos os aspectos técnicos e de interface necessários à adequação do projeto dentro do escopo contratado, incluindo formulários, consentimento, políticas e tratamento adequado de dados quando aplicável." },
  { q: "Vocês integram redes sociais?", a: "Sim. Podemos conectar o site aos principais canais sociais e configurar links, compartilhamentos, conteúdos incorporados, pixels e outras integrações necessárias." },
  { q: "O site funciona bem em todos os dispositivos?", a: "Sim. Responsividade faz parte do desenvolvimento. Projetamos a experiência para celulares, tablets, notebooks e desktops." },
  { q: "A Soluna atende empresas de todo o Brasil?", a: "Sim. Todo o processo pode ser realizado online e atendemos empresas em diferentes regiões do Brasil." },
];

/* ── Página ──────────────────────────────────────────────────────── */

export default function CriacaoDeSitesPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "Criação de Sites", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Criação de Sites Profissionais para Empresas", description: answer, path, price: 3500 }), faqSchema(faq), breadcrumbSchema(crumbs))} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Design e desenvolvimento de websites"
        title="Sites de alta performance feitos para posicionar, convencer e converter."
        answer={answer}
        actions={
          <>
            <ButtonLink href="/contato/" size="lg">
              Solicitar um projeto
            </ButtonLink>
            <ButtonLink href="#formatos" size="lg" variant="ghost-light">
              Conhecer os formatos
            </ButtonLink>
          </>
        }
        aside={
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="flex flex-wrap gap-x-2.5 gap-y-1 text-sm text-white/55">
              {["Estratégia", "Copywriting", "UX/UI", "WordPress", "Next.js", "SEO/GEO", "Performance", "Analytics", "Integrações"].map((t, i, a) => (
                <span key={t} className="inline-flex items-center gap-2.5">
                  {t}
                  {i < a.length - 1 && <span aria-hidden className="text-white/25">·</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-white/45">Projetos para empresas em todo o Brasil.</p>
          </div>
        }
        visual={<SiteChatMock />}
      />

      {/* §2 — Não é apenas um site */}
      <Section tone="white" labelledBy="presenca">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <SectionHeading
            id="presenca"
            eyebrow="Presença digital"
            title="Seu site trabalha antes mesmo de alguém falar com sua empresa."
            text="Quando um potencial cliente pesquisa sua marca, compara fornecedores ou procura uma solução, o site costuma ser uma das primeiras evidências que encontra. Em poucos segundos, ele precisa responder:"
          />
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {questions.map((q) => (
                <li key={q} className="rounded-2xl bg-mist p-5 font-[family-name:var(--font-display)] text-[1.02rem] font-semibold leading-snug text-ink">
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate">
              Um site estratégico organiza essas respostas: posiciona a empresa, aumenta a percepção de valor, reduz dúvidas, cria confiança e conduz o visitante para uma ação. Por isso tratamos cada projeto como{" "}
              <strong className="text-ink">estratégia + conteúdo + design + tecnologia + SEO/GEO + conversão</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* §3 — Quando o site vira gargalo */}
      <Section tone="mist" labelledBy="gargalo">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="gargalo"
            eyebrow="O problema"
            title="Sua empresa evoluiu. Talvez o site não tenha acompanhado."
            text="Um novo site começa a fazer sentido quando o discurso da marca já não bate com o que aparece na tela."
          />
          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {gargalos.map((g) => (
                <li key={g} className="flex gap-3 text-[0.95rem] text-ink/85">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl border border-line-strong bg-white p-5 text-[0.95rem] text-slate">
              Se o site não acompanha a maturidade da empresa, ele deixa de aumentar valor e passa a <strong className="text-ink">limitar a percepção da marca</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* §4 — O que construímos (formatos) */}
      <Section tone="white" id="formatos" labelledBy="formatos-titulo">
        <SectionHeading
          id="formatos-titulo"
          eyebrow="Formatos"
          title="O site certo para o objetivo certo."
          text="Não existe um formato ideal para todas as empresas. A arquitetura depende do que sua empresa precisa comunicar, vender, captar ou operar."
        />
        <div className="mt-12">
          <OfferCards
            columns={4}
            offers={[
              { name: "Landing Page", price: "R$ 3.500", priceNote: "a partir de · 1 a 2 semanas", text: "Página focada em uma oferta, produto ou campanha — ideal para tráfego pago e geração de leads.", features: ["Copy orientada à conversão", "Formulário + WhatsApp + CRM", "Analytics e eventos de conversão", "SEO técnico e otimizações"] },
              { name: "Site Institucional", price: "R$ 7.500", priceNote: "a partir de · 3 a 5 semanas", text: "A principal presença digital da empresa, preparada para crescer.", features: ["Arquitetura de informação e copy", "Páginas de serviço, cases e blog", "SEO técnico + conteúdo + GEO", "Analytics, integrações e painel"], highlight: true, badge: "Mais pedido" },
              { name: "E-commerce", price: "R$ 18.000", priceNote: "a partir de · 6 a 10 semanas", text: "Lojas que unem experiência de compra, performance, aquisição e operação.", features: ["Catálogo, checkout e pagamento", "Frete, estoque e ERP", "SEO de produtos e recuperação de carrinho", "IA aplicada a vendas e atendimento"] },
              { name: "Portais e Sites Dinâmicos", price: "R$ 20.000", priceNote: "a partir de · prazo por escopo", text: "Áreas autenticadas, grande volume de conteúdo e integrações avançadas.", features: ["Área do cliente e área restrita", "Painel administrativo e APIs", "Busca avançada e conteúdo dinâmico", "Automação e IA aplicada ao produto"] },
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-slate">*Valores iniciais sujeitos ao escopo. Investimento e cronograma definitivos são apresentados após a análise do projeto.</p>
      </Section>

      {/* §5 — Padrão Soluna */}
      <Section tone="navy" labelledBy="padrao">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-sky">Um projeto completo</Eyebrow>
          <h2 id="padrao" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.6rem]">
            Não entregamos apenas páginas. Entregamos a estrutura para o site funcionar como um ativo de negócio.
          </h2>
          <p className="mt-5 text-lg text-white/70">Dependendo do escopo contratado, o projeto pode contemplar:</p>
        </div>
        <Checklist items={padrao} dark className="mt-10 grid gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3 [&>li+li]:mt-0" />
        <p className="mt-10 max-w-3xl text-white/70">
          O objetivo é reduzir dependências, improvisos e custos ocultos. Sua empresa recebe uma estrutura profissional, organizada e preparada para continuar evoluindo.
        </p>
      </Section>

      {/* §6 + §7 — Conteúdo, copy e autoridade */}
      <Section tone="mist" labelledBy="conteudo">
        <SectionHeading
          id="conteudo"
          eyebrow="Mensagem e autoridade"
          title="Um site bonito não converte se ninguém entende por que escolher sua empresa."
          text="Design chama atenção. Mas é a mensagem que constrói percepção de valor — e é o conteúdo que faz o site vender antes da primeira reunião comercial."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Conteúdo e copywriting</p>
            <h3 className="text-2xl font-semibold">Não esperamos um arquivo com textos prontos.</h3>
            <p className="mt-3 text-slate">Buscamos entender:</p>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {entender.map((e) => (
                <li key={e} className="flex gap-2.5 text-[0.92rem] text-ink/85">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5 text-sm font-semibold text-ink">
              {["Problema", "Solução", "Diferencial", "Prova", "Confiança", "Próximo passo"].map((s, i, a) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-white px-3 py-1 shadow-[var(--shadow-card)] ring-1 ring-line/60">{s}</span>
                  {i < a.length - 1 && <ArrowRight aria-hidden className="size-3.5 text-signal" />}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Blog e autoridade</p>
            <h3 className="text-2xl font-semibold">Seu blog não deveria ser uma coleção aleatória de artigos.</h3>
            <p className="mt-3 text-slate">Estruturamos o blog com mapeamento de tópicos e clusters de autoridade, organizando os temas em torno das áreas em que a empresa quer ser relevante:</p>
            <ol className="mt-5 space-y-2">
              {["Tema principal", "Página pilar", "Subtemas", "Perguntas específicas", "Cases", "Conteúdos relacionados", "Serviços"].map((s, i, a) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-[0.7rem] font-semibold text-sky">{i + 1}</span>
                  <span className="text-[0.95rem] text-ink/85">{s}</span>
                  {i < a.length - 1 && <ChevronDown aria-hidden className="ml-auto size-4 text-line-strong" />}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[0.92rem] text-slate">
              Assim o blog vira parte da estratégia de aquisição, autoridade e geração de demanda. <TextLink href="/conteudo/">Ver conteúdos</TextLink>
            </p>
          </Card>
        </div>
      </Section>

      {/* §8 + §9 — SEO + GEO completo */}
      <Section tone="white" labelledBy="seo-geo">
        <SectionHeading
          id="seo-geo"
          eyebrow="Visibilidade"
          title="Um site premium não deve apenas impressionar quem chega. Ele precisa ser encontrado por quem ainda não conhece sua empresa."
          text="SEO e GEO não entram no fim do projeto como um plugin. Eles influenciam a arquitetura desde o início, conectando visibilidade + autoridade + experiência + conversão."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Card>
            <p className="eyebrow mb-3">SEO técnico</p>
            <h3 className="text-xl font-semibold">Base para rastrear, indexar e compreender.</h3>
            <Checklist items={seoTecnico} className="mt-5 text-[0.92rem]" />
          </Card>
          <Card>
            <p className="eyebrow mb-3">SEO estratégico</p>
            <h3 className="text-xl font-semibold">Entender como o seu mercado pesquisa.</h3>
            <p className="mt-3 text-[0.95rem] text-slate">Em vez de uma única página genérica, uma arquitetura pode ter páginas específicas para:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {seoEstrategico.map((s) => (
                <li key={s} className="rounded-full border border-line/70 bg-mist px-3 py-1 text-[0.85rem] font-medium text-ink">{s}</li>
              ))}
            </ul>
            <p className="mt-4 text-[0.92rem] text-slate">Cada página tem um propósito. Juntas, constroem autoridade.</p>
          </Card>
          <Card>
            <p className="eyebrow mb-3">GEO e IAs</p>
            <h3 className="text-xl font-semibold">Ser compreendido pelos mecanismos generativos.</h3>
            <p className="mt-3 text-[0.95rem] text-slate">Clientes já perguntam a assistentes de IA quais empresas consideram. Para participar disso, estruturamos:</p>
            <ul className="mt-4 grid gap-2">
              {geoItens.map((g) => (
                <li key={g} className="flex gap-2.5 text-[0.9rem] text-ink/85">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet-400" />
                  {g}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="mt-8">
          <TextLink href="/servicos/seo-e-geo/">Conhecer SEO e GEO em detalhe</TextLink>
        </p>
      </Section>

      {/* §10 + §11 + §43 — Visibilidade com valor comercial */}
      <Section tone="aurora" labelledBy="jornada">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-white/80">Mais do que posicionamento</Eyebrow>
          <h2 id="jornada" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
            Um site que pode ser encontrado vale mais do que um site que apenas existe.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Tráfego sem conversão é apenas audiência. Por isso SEO/GEO e CRO trabalham juntos: o visitante certo encontra a página certa, entende a solução e sabe qual é o próximo passo.
          </p>
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/55">A mesma estratégia comercial</p>
          <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {seoGeoJornada.map((step, i, a) => (
              <li key={step} className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-2 lg:text-center">
                <span className="flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[0.9rem] font-semibold text-white lg:w-full lg:flex-none">
                  {step}
                </span>
                {i < a.length - 1 && (
                  <>
                    <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90 text-white/40 lg:rotate-0" />
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 max-w-3xl text-lg font-semibold text-white">
          Busca → Descoberta → Confiança → Interesse → Conversão. <span className="font-normal text-white/70">É assim que visibilidade passa a ter valor comercial.</span>
        </p>
      </Section>

      {/* §12–§15 — Qualidade */}
      <Section tone="mist" labelledBy="qualidade">
        <SectionHeading id="qualidade" eyebrow="Experiência e execução" title="Sofisticação percebida, clareza para converter." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {qualidade.map((q) => (
            <Card key={q.eyebrow}>
              <p className="eyebrow mb-3">{q.eyebrow}</p>
              <h3 className="text-xl font-semibold">{q.title}</h3>
              <p className="mt-3 text-slate">{q.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §16 + §44 — WordPress + Next.js */}
      <Section tone="white" labelledBy="tecnologia">
        <SectionHeading
          id="tecnologia"
          eyebrow="Tecnologia"
          title="Não somos presos a uma única tecnologia."
          text="Trabalhamos com WordPress, Next.js e outras tecnologias. Não escolhemos a tecnologia primeiro: entendemos os requisitos e depois definimos a arquitetura mais adequada."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-semibold">WordPress</h3>
            <p className="mt-2 text-slate">Excelente quando a empresa precisa de autonomia e publicação recorrente.</p>
            <Checklist items={["Autonomia editorial", "Blog e conteúdo", "Painel amigável", "Ecossistema consolidado"]} className="mt-5" />
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold">Next.js</h3>
            <p className="mt-2 text-slate">Indicado quando o projeto exige customização e integrações profundas.</p>
            <Checklist items={["Customização avançada", "Integrações e APIs", "Aplicações sob medida", "Arquitetura moderna"]} className="mt-5" />
          </Card>
        </div>
        <p className="mt-6 rounded-2xl border border-dashed border-line-strong bg-mist p-5 text-center text-[0.95rem] font-semibold text-ink">
          A tecnologia é escolhida de acordo com os requisitos do projeto.
        </p>
      </Section>

      {/* §17–§21 — Estrutura técnica */}
      <Section tone="mist" labelledBy="estrutura">
        <SectionHeading
          id="estrutura"
          eyebrow="Da aplicação ao servidor"
          title="Um site profissional também depende do que o visitante não vê."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {estruturaTecnica.map((e) => (
            <Card key={e.title}>
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{e.text}</p>
            </Card>
          ))}
          <Card className="bg-navy text-white [&_h3]:text-white">
            <h3 className="text-lg font-semibold">Segurança que continua sua</h3>
            <p className="mt-2 text-[0.95rem] text-white/75">Ativos essenciais sob controle da empresa e adequação à LGPD dentro do escopo.</p>
            <TextLink href="/seguranca-e-lgpd/" className="mt-4 inline-flex text-sky">
              Como tratamos seus dados
            </TextLink>
          </Card>
        </div>
      </Section>

      {/* §22 + §23 — IA aplicada + Redes sociais */}
      <Section tone="white" labelledBy="ia-site">
        <SectionHeading
          id="ia-site"
          eyebrow="Quando faz sentido"
          title="IA no site precisa resolver alguma coisa."
          text="Não colocamos IA apenas para dizer que o site “tem IA”. Ela precisa melhorar a experiência ou a operação. Se gera valor, aplicamos; se não gera, não adicionamos complexidade."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {iaCapabilities.map((c) => (
            <div key={c.title} className="rounded-2xl bg-mist p-6">
              <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-[0.92rem] text-slate">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Ecossistema</p>
            <p className="text-slate">Integramos o site aos canais sociais — WhatsApp, Instagram, LinkedIn, YouTube — com feeds, pixels, tags e links rastreáveis para uma experiência consistente.</p>
          </div>
          <ButtonLink href="/solucoes/atendimento-inteligente/assistente-ia-para-site/" variant="secondary" arrow className="shrink-0">
            Ver Agentes de IA
          </ButtonLink>
        </div>
      </Section>

      {/* §24 — Método Soluna */}
      <Section tone="navy" labelledBy="metodo">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-sky">Como construímos</Eyebrow>
          <h2 id="metodo" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.6rem]">
            Do posicionamento à publicação, em 5 etapas.
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
          Diagnosticar → Estruturar → Construir → Validar → Evoluir
        </p>
      </Section>

      {/* §25 + §26 — Entregáveis + Propriedade */}
      <Section tone="mist" labelledBy="entregaveis">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <SectionHeading id="entregaveis" eyebrow="Finalização profissional" title="Você recebe mais do que “o site está pronto”." />
            <Checklist items={entregaveis} className="mt-6 grid gap-x-8 sm:grid-cols-2 [&>li+li]:mt-0" />
            <p className="mt-6 text-[0.95rem] text-slate">O objetivo é que sua empresa tenha controle e clareza sobre aquilo que foi construído.</p>
          </Card>
          <Card className="bg-navy text-white [&_h2]:text-white">
            <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-sky">O projeto é seu</p>
            <h2 className="text-2xl font-semibold">Você não deveria ficar preso a uma agência.</h2>
            <p className="mt-4 text-white/75">
              Domínio, contas, ativos, código e condições de propriedade são definidos de forma transparente. Sempre que aplicável ao escopo, estruturamos os ativos essenciais sob controle da empresa contratante.
            </p>
            <p className="mt-4 font-semibold text-white">
              Você continua com a Soluna porque a parceria gera valor — não porque sair se tornou impossível.
            </p>
          </Card>
        </div>
      </Section>

      {/* §28 + §29 — Investimento + Manutenção */}
      <Section tone="white" labelledBy="investimento">
        <SectionHeading
          id="investimento"
          eyebrow="Faixas de projeto"
          title="Clareza antes da proposta."
          text="Cada projeto é orçado conforme escopo, número de páginas, estratégia de conteúdo, integrações e complexidade. Os valores e prazos definitivos são apresentados após a análise."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Landing Page", price: "R$ 3.500", prazo: "1 a 2 semanas" },
            { name: "Site Institucional", price: "R$ 7.500", prazo: "3 a 5 semanas" },
            { name: "E-commerce", price: "R$ 18.000", prazo: "6 a 10 semanas" },
            { name: "Portais e Sites Dinâmicos", price: "R$ 20.000", prazo: "prazo por escopo" },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl bg-mist p-6">
              <h3 className="text-[1.05rem] font-semibold text-ink">{p.name}</h3>
              <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                <span className="text-sm font-medium text-slate">a partir de </span>
                {p.price}
              </p>
              <p className="mt-2 text-sm text-slate">Prazo estimado: {p.prazo}.</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Depois do lançamento</p>
            <h3 className="text-2xl font-semibold">Site Gerenciado <span className="ml-1 text-signal">R$ 390/mês</span></h3>
            <Checklist items={["Hospedagem gerenciada", "Atualizações", "Backups", "Segurança", "Monitoramento"]} className="mt-5" />
          </Card>
          <Card className="ring-2 ring-violet-400/40">
            <p className="eyebrow mb-3">Evolução contínua</p>
            <h3 className="text-2xl font-semibold">Site Pro <span className="ml-1 text-signal">R$ 790/mês</span></h3>
            <p className="mt-3 text-[0.95rem] text-slate">Tudo do Site Gerenciado, além de:</p>
            <Checklist items={["Evolução contínua", "Ajustes de conteúdo", "Melhorias de conversão", "Pequenas evoluções recorrentes"]} className="mt-4" />
          </Card>
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate">Cada projeto é conduzido com estratégia e método — sem métricas fictícias como prova comercial.</p>
          <ButtonLink href="/cases/" variant="secondary" arrow className="shrink-0">
            Ver projetos
          </ButtonLink>
        </div>
      </Section>

      {/* §30 — Ecossistema Soluna */}
      <Section tone="mist" labelledBy="ecossistema">
        <SectionHeading
          id="ecossistema"
          eyebrow="Além do site"
          title="Seu site pode ser o centro de uma operação digital maior."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecossistema.map((e) => (
            <Link
              key={e.title}
              href={e.href}
              className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-line/60 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-violet-400/40"
            >
              <h3 className="font-[family-name:var(--font-display)] text-[1.1rem] font-semibold text-ink">{e.title}</h3>
              <p className="mt-2 flex-1 text-[0.95rem] text-slate">{e.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
                {e.cta}
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* §31 — FAQ */}
      <FAQSection items={faq} title="O que empresas querem saber antes de começar" tone="white" />

      {/* §32 — CTA final */}
      <Section tone="navy" labelledBy="cta-final">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 text-sky">Seu site representa a empresa que você construiu?</Eyebrow>
          <h2 id="cta-final" className="text-[2rem] font-bold leading-[1.1] text-white md:text-[2.7rem]">
            Transforme sua presença digital em um ativo de negócio.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Seu próximo site pode aumentar a percepção de valor da marca, ser encontrado por novas pessoas, construir autoridade antes da primeira reunião e transformar tráfego em oportunidades — acumulando valor conforme sua presença cresce.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contato/" size="lg">
              Solicitar um projeto
            </ButtonLink>
            <ButtonLink href={whatsappLink("Olá! Quero falar com um especialista sobre a criação de um site.")} size="lg" variant="ghost-light">
              Falar com um especialista
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/45">
            WordPress · Next.js · SEO/GEO · UX/UI · Performance · Integrações — atendimento online para empresas em todo o Brasil.
          </p>
        </div>
      </Section>

      <Signature updatedAt="2026-09-26" />
    </>
  );
}
