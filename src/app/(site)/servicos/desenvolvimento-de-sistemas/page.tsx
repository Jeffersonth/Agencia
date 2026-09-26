import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import { Checklist, FAQSection, LinkCard, PageHero, Signature } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { FlowMock } from "@/components/visuals";
import { whatsappLink } from "@/lib/site";

const path = "/servicos/desenvolvimento-de-sistemas/";
const answer =
  "A Soluna IA transforma processos, ideias e oportunidades em produtos SaaS e sistemas sob medida. Do Discovery ao lançamento, unimos estratégia de produto, UX/UI, engenharia, integrações, automação, dados e IA — com construção por fases, código seu e clareza sobre propriedade e continuidade.";

export const metadata: Metadata = pageMetadata({
  title: "Desenvolvimento de SaaS e Sistemas Sob Medida",
  description:
    "Desenvolvemos SaaS, MVPs e sistemas sob medida com UX/UI, APIs, IA, automação, cloud, segurança e integrações. Do Discovery à evolução do produto.",
  path,
});

/* ── Dados ───────────────────────────────────────────────────────── */

const sintomas = [
  "planilhas paralelas aparecem",
  "pessoas copiam informações entre sistemas",
  "processos dependem de e-mails e mensagens",
  "clientes enfrentam experiências fragmentadas",
  "regras importantes são executadas manualmente",
  "a equipe adapta o processo ao software",
];

const paraQuem = [
  "lançar um produto SaaS",
  "validar um novo produto digital",
  "criar um MVP",
  "transformar um serviço em plataforma",
  "digitalizar um processo interno",
  "substituir planilhas por um sistema",
  "criar um portal para clientes",
  "criar uma área do parceiro",
  "conectar vários sistemas em uma operação",
  "automatizar fluxos complexos",
  "construir software com regras próprias",
  "incorporar IA à operação",
  "desenvolver uma plataforma multiempresa",
  "criar um produto com planos e assinaturas",
  "modernizar um sistema legado",
  "desenvolver um produto que precisa escalar",
];

const oQueDesenvolvemos = [
  { title: "SaaS B2B", text: "Produtos vendidos por assinatura para empresas.", tags: ["Multi-tenant", "Planos e cobrança", "Controle de acesso", "Dashboards", "APIs", "IA"] },
  { title: "SaaS B2C", text: "Produtos digitais voltados ao consumidor final.", tags: ["Onboarding", "Assinatura", "Pagamentos", "Notificações", "Personalização", "Analytics"] },
  { title: "MVPs", text: "Primeira versão funcional que valida a hipótese central com o menor escopo responsável — não “o produto barato”, mas o suficiente para aprender com usuários reais.", tags: ["Escopo enxuto", "Aprendizado rápido"] },
  { title: "Sistemas corporativos", text: "Software construído em torno dos processos internos.", tags: ["Operações", "Comercial", "Financeiro", "Backoffice", "Workflows"] },
  { title: "Portais e áreas do cliente", text: "Ambientes para clientes, parceiros, fornecedores ou colaboradores.", tags: ["Autenticação", "Documentos", "Pagamentos", "Tickets", "Integrações"] },
  { title: "Plataformas e marketplaces", text: "Produtos com diferentes perfis de usuários e regras de interação.", tags: ["Fornecedores e compradores", "Comissões", "Pagamentos", "Reputação"] },
  { title: "Sistemas com IA", text: "Produtos nos quais a IA faz parte da operação.", tags: ["Copilotos", "Análise de documentos", "Busca semântica", "Agentes", "Automação inteligente"] },
];

const discoveryPerguntas = [
  "Quem vai usar?",
  "Qual problema será resolvido?",
  "Qual é o fluxo atual e o ideal?",
  "Quais regras existem?",
  "Quais integrações são necessárias?",
  "Quais dados serão armazenados?",
  "O que entra no MVP e o que pode esperar?",
  "Quais riscos existem?",
  "Como o produto será medido?",
];

const discoveryInclui = [
  "Entendimento do negócio e entrevistas",
  "Mapeamento do processo",
  "Personas e perfis",
  "Requisitos e regras de negócio",
  "Jornadas, fluxos e user stories",
  "Análise de riscos e integrações",
  "Dados, segurança e arquitetura inicial",
  "Escopo do MVP e priorização",
  "Protótipo navegável",
  "Estimativa e roadmap",
];

const saasArquitetura = ["Usuários", "Web / App", "Autenticação + permissões", "API / regras de negócio", "Dados"];
const saasCamadaFinal = ["Pagamentos", "Integrações", "IA / automação"];

const saasCapacidades = [
  { title: "Multi-tenant", text: "Cada cliente com a própria operação dentro do mesmo produto: organizações, dados, configurações, permissões, limites e planos corretamente isolados. É uma decisão de arquitetura, não de interface." },
  { title: "Autenticação e permissões", text: "A pessoa certa acessa a informação certa — e somente ela. Autenticação, recuperação, MFA quando necessário, papéis, RBAC, regras por organização, sessões e auditoria." },
  { title: "Assinaturas e pagamentos", text: "Se o produto é SaaS, a cobrança faz parte do produto: planos, trials, upgrades/downgrades, cobrança por uso, cupons, invoices, inadimplência e webhooks. O billing acompanha o modelo comercial." },
  { title: "Onboarding", text: "O usuário não deveria precisar de uma reunião para começar. Setup inicial, importação, checklist, templates e a primeira ação de valor — reduzindo o tempo até “entendi o valor deste produto”." },
  { title: "Painel administrativo", text: "Todo SaaS precisa de uma visão que o cliente não vê. Um backoffice para gerenciar usuários, empresas, assinaturas, planos, conteúdo, permissões, flags e suporte." },
  { title: "Analytics de produto", text: "O lançamento é o início da coleta de evidências. Instrumentamos ativação, uso, funis, retenção, churn e comportamento — para substituir opinião por dados." },
];

const automacaoFlow = ["Evento", "Validação", "Regra", "IA quando necessário", "Ação", "Integração", "Registro", "Notificação"];

const iaExemplos = [
  "analisar documentos",
  "classificar e extrair dados",
  "gerar relatórios",
  "recomendar ações",
  "resumir históricos",
  "busca semântica",
  "operar como copiloto",
  "coordenar workflows",
];

const agentesFazem = [
  "interpretar solicitações",
  "consultar dados",
  "executar ações e atualizar registros",
  "interagir com APIs",
  "gerar análises e documentos",
  "acionar workflows",
  "solicitar aprovação humana",
  "escalar exceções",
];

const integracoes = ["CRM", "ERP", "Gateways de pagamento", "Bancos", "WhatsApp", "E-mail", "Calendários", "Storage", "Assinatura eletrônica", "Logística", "Webhooks", "APIs de terceiros", "Sistemas legados"];

const dadosCards = [
  { title: "Arquitetura de dados", text: "Modelamos entidades, relacionamentos, histórico, auditoria, permissões, retenção, backup e privacidade. Em produtos com IA, avaliamos como os dados alimentam busca, RAG, recomendações e agentes." },
  { title: "Observabilidade", text: "Software em produção precisa ser observado: logs, métricas, erros, alertas, tracing, filas, jobs e health checks. Quando um fluxo falha, o sistema mostra o que aconteceu, onde, quando e se pode ser reprocessado." },
  { title: "Performance e escala", text: "Escalabilidade responsável prepara a arquitetura para o estágio real do produto — sem overengineering. Volume atual, crescimento esperado, uso simultâneo, cache, banco e custos de infraestrutura." },
];

const engenhariaCards = [
  { title: "Qualidade e QA", text: "“Funciona na minha máquina” não é critério de aceite. Testes de fluxos, permissões, integrações, cenários de erro, responsividade, performance e regressão — conforme a criticidade." },
  { title: "Ambientes e deploy", text: "Desenvolvimento → staging/homologação → produção. Mudanças chegam ao usuário de forma controlada, com deploys automatizados e integrados ao versionamento." },
  { title: "Feature flags", text: "Nem toda funcionalidade precisa ser liberada para todos de uma vez. Liberação por grupos, beta controlado e recursos ativados gradualmente — sem novo deploy." },
  { title: "Documentação", text: "O conhecimento do produto não deveria viver só na cabeça de quem programou. Arquitetura, setup, APIs, integrações, ambientes, deploy e procedimentos documentados." },
];

const metodo = [
  { n: "01", title: "Discovery", text: "Entendemos problema, usuários, fluxos, regras, integrações, riscos e objetivos.", result: "Escopo priorizado e direção clara." },
  { n: "02", title: "Produto, UX/UI e Arquitetura", text: "Desenhamos jornadas, protótipo, modelo de dados, arquitetura e plano de construção.", result: "Produto validado antes do desenvolvimento pesado." },
  { n: "03", title: "Construção por Fases", text: "Desenvolvemos módulos, integrações, automações e IA em ciclos incrementais.", result: "Entregas utilizáveis ao longo do projeto." },
  { n: "04", title: "Validação e Lançamento", text: "Testamos fluxos, permissões, integrações, dados e cenários reais antes do go-live.", result: "Software preparado para entrar em produção." },
  { n: "05", title: "Sustentação e Evolução", text: "Monitoramos, corrigimos, analisamos uso e desenvolvemos novas versões.", result: "Produto que continua evoluindo após o lançamento." },
];

const entregaveis = [
  "Discovery e mapeamento de processos",
  "Requisitos e protótipo navegável",
  "Design system e UX/UI",
  "Arquitetura e código-fonte",
  "Banco de dados e APIs",
  "Painel administrativo",
  "Integrações, IA e automações",
  "Infraestrutura e pipelines de deploy",
  "Analytics e logs",
  "Documentação e treinamento",
  "Ambiente de produção e suporte de lançamento",
  "Plano de evolução",
];

const evolucaoCards = [
  { eyebrow: "Produto vivo", title: "A primeira versão não precisa ser a final.", text: "Depois do lançamento, dados reais orientam prioridades: feedback, uso, retenção, novas integrações, oportunidades de automação e IA. Produtos melhores são construídos em ciclos." },
  { eyebrow: "Legado", title: "Nem sempre é preciso jogar tudo fora.", text: "Modernização gradual, nova interface, APIs, novos módulos, integração com o legado, cloud migration e inclusão de IA. Evoluir ou reescrever é decisão técnica e econômica — não emocional." },
  { eyebrow: "Continuidade", title: "Trocar o sistema não é perder a história.", text: "Planejamos migrações considerando origem, qualidade dos dados, transformação, validação, duplicidades, relacionamentos, segurança, rollback e testes. Parte do projeto — não detalhe de última hora." },
];

const porQue = [
  { title: "Começamos pelo problema", text: "O desenvolvimento vem depois do entendimento do negócio." },
  { title: "Construção por fases", text: "Reduzimos risco com entregas incrementais e validação ao longo do projeto." },
  { title: "IA quando gera valor", text: "Não adicionamos inteligência artificial apenas como decoração." },
  { title: "Integrações na arquitetura", text: "O produto é pensado para conversar com a operação existente." },
  { title: "Segurança desde o início", text: "Permissões, dados e infraestrutura entram na arquitetura." },
  { title: "Clareza sobre propriedade", text: "Código, infraestrutura e ativos definidos em contrato." },
];

const stackSoluna = ["Produto", "UX/UI", "Software", "IA", "Agentes", "Automação", "Integrações", "Dados", "Infraestrutura", "SEO/GEO quando público"];

const faq = [
  { q: "O que é um SaaS?", a: "SaaS significa Software as a Service — um modelo no qual usuários acessam um software como serviço, normalmente pela internet e por assinatura recorrente. Pode atender consumidores ou empresas e costuma incluir usuários, planos, permissões, cobrança, onboarding e administração." },
  { q: "A Soluna desenvolve SaaS do zero?", a: "Sim. Podemos participar desde o Discovery e protótipo até arquitetura, desenvolvimento, integrações, lançamento, infraestrutura e evolução." },
  { q: "Vocês desenvolvem MVP?", a: "Sim. O MVP é estruturado para validar a hipótese central do produto com um escopo responsável, evitando investir cedo demais em funcionalidades que ainda não foram validadas." },
  { q: "Vocês também criam sistemas internos?", a: "Sim. Além de SaaS, desenvolvemos sistemas corporativos, portais, áreas do cliente, dashboards e ferramentas internas sob medida." },
  { q: "Todo projeto começa com Discovery?", a: "Para projetos de software com escopo relevante, o Discovery é a etapa recomendada e pode ser obrigatória antes de um orçamento fechado. Ele reduz a incerteza sobre fluxos, requisitos, integrações e complexidade." },
  { q: "Quanto custa desenvolver um SaaS?", a: "Depende de escopo, regras, perfis, integrações, arquitetura, UX/UI, billing, IA e infraestrutura. A página apresenta faixas de referência, mas o valor definitivo é definido após o Discovery." },
  { q: "Quanto tempo leva para desenvolver?", a: "Depende do produto. MVPs menores podem ser entregues em fases mais curtas; plataformas com múltiplos módulos e integrações exigem cronogramas maiores. O roadmap é definido após o Discovery." },
  { q: "O código fica comigo?", a: "As condições de propriedade são definidas em contrato. Nos modelos em que o cliente possui o código, o repositório e demais ativos podem ficar sob controle da empresa contratante — na prática, o repositório Git fica em nome da sua empresa desde o início." },
  { q: "Posso trocar de fornecedor depois?", a: "A arquitetura, a documentação e a propriedade podem ser estruturadas para reduzir lock-in e permitir continuidade com outro time, conforme as condições contratuais." },
  { q: "Vocês trabalham com inteligência artificial?", a: "Sim. IA é uma das especialidades centrais da Soluna. Podemos incorporar agentes, copilotos, processamento de documentos, busca semântica, recomendação, classificação e automações inteligentes quando isso gera valor real." },
  { q: "Vocês integram sistemas externos?", a: "Sim. Podemos integrar CRMs, ERPs, gateways de pagamento, WhatsApp, e-mail, serviços financeiros, APIs e sistemas internos, conforme a disponibilidade técnica de cada plataforma." },
  { q: "Vocês implementam assinaturas e cobrança?", a: "Sim. Produtos SaaS podem incluir planos, trials, upgrades, downgrades, recorrência e integrações com plataformas de pagamento." },
  { q: "O SaaS pode atender várias empresas?", a: "Sim. Projetos B2B podem ser estruturados com arquitetura multi-tenant, organizações, usuários, permissões e isolamento adequado dos dados." },
  { q: "Vocês cuidam da infraestrutura?", a: "Podemos estruturar e gerenciar cloud, banco de dados, storage, deploy, backups, observabilidade e outros componentes conforme o escopo." },
  { q: "O produto atende à LGPD?", a: "Implementamos recursos técnicos relacionados à privacidade e proteção de dados conforme o projeto. Aspectos jurídicos e definição de bases legais devem ser validados com a assessoria responsável quando necessário." },
  { q: "Vocês dão suporte depois do lançamento?", a: "Sim. Podemos oferecer sustentação, monitoramento, correções e evolução contínua conforme o plano contratado." },
  { q: "Vocês atendem empresas de todo o Brasil?", a: "Sim. Discovery, desenvolvimento, acompanhamento e reuniões podem ser realizados de forma online." },
];

/* ── Página ──────────────────────────────────────────────────────── */

export default function SistemasPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "Desenvolvimento de Sistemas", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Desenvolvimento de SaaS e Sistemas Sob Medida", description: answer, path, price: 25000 }), faqSchema(faq), breadcrumbSchema(crumbs))} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Desenvolvimento de SaaS e sistemas sob medida"
        title="Transformamos processos e ideias em software que funciona no mundo real."
        answer={answer}
        actions={
          <>
            <ButtonLink href="/contato/" size="lg">
              Agendar Discovery
            </ButtonLink>
            <ButtonLink href="#o-que-desenvolvemos" size="lg" variant="ghost-light">
              Conhecer os projetos
            </ButtonLink>
          </>
        }
        aside={
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="flex flex-wrap gap-x-2.5 gap-y-1 text-sm text-white/55">
              {["Discovery", "UX/UI", "SaaS", "Sistemas", "APIs", "IA", "Automação", "Cloud", "Segurança"].map((t, i, a) => (
                <span key={t} className="inline-flex items-center gap-2.5">
                  {t}
                  {i < a.length - 1 && <span aria-hidden className="text-white/25">·</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-white/45">Código e ativos definidos com transparência · desenvolvimento por fases · atendimento em todo o Brasil.</p>
          </div>
        }
        visual={<FlowMock />}
      />

      {/* §3 — Software sob medida */}
      <Section tone="white" labelledBy="sob-medida">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <SectionHeading
            id="sob-medida"
            eyebrow="Software sob medida"
            title="Sua operação não deveria ser limitada pelas regras de uma ferramenta genérica."
            text="Sistemas prontos resolvem bem problemas comuns. Mas chega um momento em que a empresa passa a operar em torno das limitações da ferramenta:"
          />
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {sintomas.map((s) => (
                <li key={s} className="flex gap-3 rounded-2xl bg-mist p-4 text-[0.95rem] text-ink/85">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate">
              A equipe adapta o processo ao software — quando deveria acontecer o contrário. É aí que um sistema ou SaaS sob medida começa a fazer sentido: <strong className="text-ink">construímos o software ao redor das regras, fluxos, usuários e objetivos reais da operação</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* §4 — Para quem é */}
      <Section tone="mist" labelledBy="para-quem">
        <SectionHeading
          id="para-quem"
          eyebrow="Quando software sob medida faz sentido"
          title="Existem problemas que uma assinatura pronta não resolve bem."
          text="Este serviço é indicado para empresas e empreendedores que precisam:"
        />
        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuem.map((p) => (
            <li key={p} className="flex gap-3 text-[0.95rem] text-ink/85">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/contato/" variant="secondary" arrow>
            Quero avaliar meu projeto
          </ButtonLink>
        </div>
      </Section>

      {/* §5 — O que desenvolvemos */}
      <Section tone="white" id="o-que-desenvolvemos" labelledBy="desenvolvemos">
        <SectionHeading id="desenvolvemos" eyebrow="Produtos digitais" title="Da ferramenta interna ao SaaS comercial." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {oQueDesenvolvemos.map((p) => (
            <Card key={p.title}>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{p.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line/70 bg-mist px-2.5 py-1 text-[0.8rem] font-medium text-ink">{t}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* §6 + §7 — Discovery */}
      <Section tone="navy" labelledBy="discovery">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Discovery</Eyebrow>
            <h2 id="discovery" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.5rem]">
              Não começamos programando. Primeiro descobrimos o que precisa ser construído.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Software é caro quando o problema ainda está mal definido. Por isso os projetos relevantes começam pelo Discovery, que reduz incerteza antes que ela vire código. Antes de desenvolver, respondemos:
            </p>
            <ul className="mt-6 grid gap-2.5">
              {discoveryPerguntas.map((q) => (
                <li key={q} className="flex gap-2.5 text-[0.95rem] text-white/85">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xl font-semibold text-white">O que o Discovery pode incluir</h3>
            <Checklist dark className="mt-5" items={discoveryInclui} />
            <p className="mt-6 border-t border-white/10 pt-5 text-[0.95rem] text-white/70">
              <span className="font-semibold text-white">Resultado:</span> o que será construído, para quem, em qual ordem, com quais integrações, quais riscos e qual é a próxima decisão de investimento.
            </p>
          </div>
        </div>
      </Section>

      {/* §8 + §9 — Protótipo e MVP */}
      <Section tone="mist" labelledBy="mvp">
        <SectionHeading id="mvp" eyebrow="UX/UI e foco" title="É mais barato corrigir uma tela antes de ela virar software." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Protótipo antes do código</p>
            <h3 className="text-xl font-semibold">Enxergar o produto antes de construí-lo.</h3>
            <p className="mt-3 text-slate">Antes de construir interfaces críticas, desenhamos e validamos a experiência com usuários e stakeholders — fluxos, navegação, permissões, formulários, dashboards, estados, exceções e experiência mobile/desktop. Menos retrabalho, expectativas alinhadas.</p>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Produto e MVP</p>
            <h3 className="text-xl font-semibold">O melhor MVP não é o com menos funcionalidades. É o com menos desperdício.</h3>
            <p className="mt-3 text-slate">Classificamos funcionalidades por impacto, dependências, risco técnico, esforço e aprendizado. Separar essencial de desejável coloca o produto em uso mais cedo — e faz o negócio aprender com dados reais.</p>
          </Card>
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate">Do MVP ao produto</p>
          <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {["Discovery", "MVP", "Usuários reais", "Dados", "Roadmap", "Versão 2", "Escala"].map((step, i, a) => (
              <li key={step} className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-2 lg:text-center">
                <span className="flex flex-1 items-center justify-center rounded-xl bg-mist px-3 py-3 text-center text-[0.85rem] font-semibold text-ink lg:w-full lg:flex-none">{step}</span>
                {i < a.length - 1 && <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90 text-signal lg:rotate-0" />}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[0.95rem] text-slate">Produto não é construído em uma única entrega. É evoluído com base em aprendizado.</p>
        </div>
      </Section>

      {/* §10–§15 — Arquitetura de SaaS */}
      <Section tone="white" labelledBy="saas-arq">
        <SectionHeading
          id="saas-arq"
          eyebrow="Arquitetura de produto"
          title="Um SaaS administra muito mais do que telas."
          text="Um SaaS é um sistema completo — não apenas uma interface. Esses elementos precisam conversar entre si desde a arquitetura."
        />
        <div className="mt-12 rounded-[1.5rem] border border-line bg-mist p-6 md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate">Arquitetura de um SaaS</p>
          <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
            {saasArquitetura.map((step, i, a) => (
              <li key={step} className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-2 lg:text-center">
                <span className="flex flex-1 items-center justify-center rounded-xl bg-white px-3 py-3 text-center text-[0.85rem] font-semibold text-ink shadow-[var(--shadow-card)] lg:w-full lg:flex-none">{step}</span>
                {i < a.length - 1 && <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90 text-signal lg:rotate-0" />}
              </li>
            ))}
          </ol>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            {saasCamadaFinal.map((c) => (
              <span key={c} className="flex-1 rounded-xl border border-dashed border-line-strong bg-white px-3 py-2.5 text-center text-[0.85rem] font-semibold text-ink">{c}</span>
            ))}
          </div>
          <p className="mt-4 text-center text-[0.85rem] text-slate">Tudo acompanhado por logs, analytics e monitoramento.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {saasCapacidades.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §16 + §17 + §18 — IA e automação */}
      <Section tone="aurora" labelledBy="ia-nucleo">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-white/80">AI-native, com critério</Eyebrow>
          <h2 id="ia-nucleo" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
            IA não precisa ser um chatbot colado no produto.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Quando a inteligência realmente melhora a solução, ela faz parte do fluxo central. A pergunta não é “como colocar IA no SaaS?”, e sim <span className="text-white">“onde a inteligência aumenta valor, velocidade ou capacidade?”</span>
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.4rem] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">IA no núcleo</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {iaExemplos.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-[0.9rem] text-white/85">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.4rem] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Agentes que agem</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {agentesFazem.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-[0.9rem] text-white/85">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lilac" />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.85rem] text-white/60">Sempre com regras, permissões e observabilidade adequadas ao contexto.</p>
          </div>
        </div>

        <div className="mt-8 rounded-[1.4rem] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/55">Automações nos bastidores — do evento à ação</p>
          <ol className="mt-6 flex flex-col gap-2.5 lg:flex-row lg:flex-wrap lg:items-center">
            {automacaoFlow.map((step, i, a) => (
              <li key={step} className="flex items-center gap-2.5">
                <span className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-[0.82rem] font-medium text-white">{step}</span>
                {i < a.length - 1 && <ArrowRight aria-hidden className="size-3.5 shrink-0 text-white/40" />}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[0.95rem] text-white/70">
            <TextLink href="/solucoes/atendimento-inteligente/agente-ia-whatsapp/" className="text-sky">Conhecer Agentes de IA</TextLink>
            <span className="px-2 text-white/30">·</span>
            <TextLink href="/solucoes/operacoes/automacao-de-processos/" className="text-sky">Ver Automação com IA</TextLink>
          </p>
        </div>
      </Section>

      {/* §19 + §20 — Integrações e APIs */}
      <Section tone="white" labelledBy="integracoes">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="integracoes"
            eyebrow="Ecossistema"
            title="Seu SaaS não precisa existir isolado."
            text="Integramos o produto aos sistemas da operação — e, quando uma API não existe ou tem limitações, isso é analisado ainda no Discovery. Produtos que crescem precisam conversar com outros produtos, e projetamos APIs pensando em autenticação, versionamento, limites, segurança, logs, idempotência e observabilidade."
          />
          <div className="self-center">
            <ul className="flex flex-wrap gap-2.5">
              {integracoes.map((i) => (
                <li key={i} className="rounded-full border border-line/70 bg-white px-4 py-2 text-[0.9rem] font-semibold text-ink shadow-[var(--shadow-card)]">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* §21 + §22 + §23 — Dados, observabilidade, escala */}
      <Section tone="mist" labelledBy="dados">
        <SectionHeading id="dados" eyebrow="Base do produto" title="Arquitetura de dados ruim vira dívida técnica rapidamente." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dadosCards.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §25 + §26 + §27 — Cloud, segurança, LGPD */}
      <Section tone="navy" labelledBy="seguranca">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Secure by design</Eyebrow>
            <h2 id="seguranca" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
              Segurança não entra na última semana do projeto.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Desde a arquitetura avaliamos riscos de autenticação, autorização, credenciais, APIs, dados, uploads, integrações e infraestrutura. Conforme o projeto: MFA, RBAC, criptografia, segregação de ambientes, secret management, rate limiting, logs de auditoria e backups. A profundidade acompanha o risco.
            </p>
            <TextLink href="/seguranca-e-lgpd/" className="mt-6 inline-flex text-sky">
              Entender Segurança e LGPD
            </TextLink>
          </div>
          <div className="self-center rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xl font-semibold text-white">Cloud, infraestrutura e LGPD</h3>
            <p className="mt-3 text-white/70">Ambientes, cloud, CI/CD, banco, storage, CDN, backups, secrets, filas e monitoramento — desenhados por segurança, custo e confiabilidade. Na privacidade, aplicamos princípios de minimização, finalidade, retenção e rastreabilidade.</p>
            <p className="mt-4 text-[0.9rem] text-white/55">A definição jurídica das bases legais e políticas deve ser validada pela assessoria competente da empresa quando necessário.</p>
          </div>
        </div>
      </Section>

      {/* §28 + §29 — Propriedade e versionamento */}
      <Section tone="white" labelledBy="propriedade">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">Propriedade</p>
            <h3 className="text-2xl font-semibold">Sem lock-in desnecessário.</h3>
            <p className="mt-3 text-slate">Você deve continuar com a Soluna porque o trabalho gera valor — não porque sair ficou impossível. Repositório, código, infraestrutura, banco, domínios, credenciais, documentação e condições de saída são tratados com clareza, e ativos críticos podem ficar sob controle da empresa contratante.</p>
          </Card>
          <Card>
            <p className="eyebrow mb-3">Engenharia</p>
            <h3 className="text-2xl font-semibold">Código seu, com histórico desde o dia 1.</h3>
            <p className="mt-3 text-slate">Usamos controle de versão para registrar a evolução do produto: histórico, revisão, branches, rastreabilidade, rollback e colaboração. Quando previsto no modelo comercial, o repositório Git fica sob a organização do cliente desde o início do projeto.</p>
          </Card>
        </div>
      </Section>

      {/* §30–§33 — Práticas de engenharia */}
      <Section tone="mist" labelledBy="engenharia">
        <SectionHeading id="engenharia" eyebrow="Da construção à produção" title="“Funciona na minha máquina” não é critério de aceite." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engenhariaCards.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.92rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §34 + §35 — Método Soluna */}
      <Section tone="navy" labelledBy="metodo">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-sky">Do Discovery à evolução</Eyebrow>
          <h2 id="metodo" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.6rem]">
            Cinco etapas para transformar uma ideia em software operando de verdade.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Projetos grandes são divididos em fases menores, cada uma com escopo, objetivo, entregável, critérios de aceite e validação — para revisar decisões ao longo do caminho e evitar um “big bang” no final.
          </p>
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
          Descobrir → Projetar → Construir → Validar → Evoluir
        </p>
      </Section>

      {/* §36 — Entregáveis */}
      <Section tone="mist" labelledBy="entregaveis">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="entregaveis"
            eyebrow="Entregáveis"
            title="Mais do que telas e código."
            text="A composição exata é definida no Discovery e no contrato."
          />
          <Checklist items={entregaveis} className="grid gap-x-8 self-center sm:grid-cols-2 [&>li+li]:mt-0" />
        </div>
      </Section>

      {/* §37 + §38 — Modelos de projeto */}
      <Section tone="white" id="faixas" labelledBy="modelos">
        <SectionHeading
          id="modelos"
          eyebrow="Como começar"
          title="Diferentes estágios exigem diferentes formas de construção."
          text="Faixas de referência para planejar. O valor real depende do Discovery — escopo, integrações, riscos, requisitos e complexidade."
        />
        <div className="mt-12">
          <OfferCards
            columns={4}
            offers={[
              { name: "Discovery + Protótipo", price: "R$ 6.000 – 12.000", text: "Transforme uma ideia ou processo em escopo validado antes de investir no desenvolvimento." },
              { name: "MVP / Sistema Inicial", price: "R$ 25.000 – 50.000", text: "Valide uma proposta, digitalize um processo principal ou lance uma primeira versão utilizável." },
              { name: "SaaS", price: "a partir de R$ 50.000", text: "Produto para múltiplos clientes, com arquitetura de produto, autenticação, planos, cobrança e evolução.", highlight: true, badge: "Mais completo" },
              { name: "Sistema Corporativo com IA", price: "R$ 60.000 – 150.000", text: "Múltiplos módulos, integrações, dados, agentes e automações dentro da operação." },
            ]}
          />
        </div>
        <p className="mt-6 rounded-2xl border border-line bg-mist p-5 text-[0.95rem] text-slate">
          <strong className="text-ink">Sustentação (depois do go-live):</strong> monitoramento, correções, atualizações, segurança e pequenas evoluções — cerca de 1,5% do valor do projeto por mês, com mínimo de R$ 1.500. Modelo, SLA e escopo confirmados na proposta.
        </p>
      </Section>

      {/* §39 + §40 + §41 — Evolução, legado, migração */}
      <Section tone="mist" labelledBy="evolucao">
        <SectionHeading id="evolucao" eyebrow="Produto vivo" title="Software não termina no dia do lançamento." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {evolucaoCards.map((c) => (
            <Card key={c.eyebrow}>
              <p className="eyebrow mb-3">{c.eyebrow}</p>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §42 — Quando não construir */}
      <Section tone="white" labelledBy="quando-nao">
        <div className="rounded-[1.5rem] border border-dashed border-line-strong bg-mist p-8 md:p-12">
          <Eyebrow className="mb-4">Tecnologia com critério</Eyebrow>
          <h2 id="quando-nao" className="max-w-3xl text-[1.6rem] font-bold md:text-[2.1rem]">
            Nem todo problema precisa de um sistema novo.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-slate">
            Às vezes uma ferramenta pronta resolve. Às vezes uma automação é suficiente. Às vezes o processo precisa ser corrigido primeiro, ou o volume ainda não justifica desenvolvimento próprio. O Discovery também serve para descobrir quando <strong className="text-ink">não construir</strong>. Nossa função não é vender código — é encontrar a solução mais adequada para o problema.
          </p>
        </div>
      </Section>

      {/* §43 + §45 — Diferencial Soluna */}
      <Section tone="navy" labelledBy="por-que">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Por que construir conosco</Eyebrow>
            <h2 id="por-que" className="text-[1.9rem] font-bold leading-[1.12] text-white md:text-[2.4rem]">
              Produto, engenharia e IA no mesmo contexto.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              A Soluna combina capacidades que normalmente ficam distribuídas entre vários fornecedores. Isso permite pensar o sistema inteiro — e não apenas a interface.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {stackSoluna.map((s) => (
                <li key={s} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.85rem] font-medium text-white/85">{s}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {porQue.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm">
                <h3 className="text-[1.02rem] font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-[0.9rem] text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* §52 — Links internos */}
      <Section tone="white" labelledBy="saiba-mais">
        <h2 id="saiba-mais" className="text-2xl font-semibold md:text-3xl">Serviços relacionados</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <LinkCard href="/solucoes/ia-corporativa/" meta="IA na operação" title="IA Corporativa" text="Agentes, copilotos e automação inteligente conectados aos sistemas da empresa." />
          <LinkCard href="/servicos/desenvolvimento-de-aplicativos/" meta="Serviço" title="Desenvolvimento de Aplicativos" text="Apps mobile conectados ao seu produto e à sua operação." />
          <LinkCard href="/servicos/criacao-de-sites/" meta="Serviço" title="Criação de Sites" text="Sites e páginas públicas de alta performance para o seu produto." />
          <LinkCard href="/solucoes/operacoes/automacao-de-processos/" meta="Solução" title="Automação de Processos" text="Fluxos automatizados com validação, regras e rastreabilidade." />
          <LinkCard href="/servicos/seo-e-geo/" meta="Serviço" title="SEO, GEO e LLM SEO" text="Quando o SaaS tem páginas públicas que precisam ser encontradas." />
          <LinkCard href="/cases/" meta="Projetos" title="Ver projetos" text="Como conduzimos produtos digitais do problema à operação." />
        </div>
      </Section>

      {/* §46 — FAQ */}
      <FAQSection items={faq} title="O que empresas e founders querem saber antes de começar" tone="mist" />

      {/* §47 — CTA final */}
      <Section tone="navy" labelledBy="cta-final">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 text-sky">Da ideia à operação</Eyebrow>
          <h2 id="cta-final" className="text-[2rem] font-bold leading-[1.1] text-white md:text-[2.7rem]">
            Se o seu processo não cabe em uma ferramenta pronta, talvez seja hora de construir a ferramenta certa.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Você pode chegar com uma ideia de SaaS, um processo manual, um sistema antigo, um protótipo, uma planilha ou apenas um problema que ainda não sabe como transformar em software. O primeiro passo não é programar — é entender.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contato/" size="lg">
              Agendar Discovery
            </ButtonLink>
            <ButtonLink href={whatsappLink("Olá! Quero falar com um especialista sobre desenvolvimento de um SaaS ou sistema sob medida.")} size="lg" variant="ghost-light">
              Falar com um especialista
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/45">
            SaaS · Sistemas · UX/UI · APIs · IA · Automação · Cloud · Segurança — projetos para empresas em todo o Brasil.
          </p>
        </div>
      </Section>

      <Signature updatedAt="2026-09-26" />
    </>
  );
}
