import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import { Checklist, FAQSection, LinkCard, PageHero, Signature } from "@/components/sections";
import { OfferCards } from "@/components/OfferCards";
import { WhatsAppMock } from "@/components/visuals";
import { whatsappLink } from "@/lib/site";

const path = "/servicos/desenvolvimento-de-aplicativos/";
const answer =
  "A Soluna IA cria aplicativos iOS e Android sob medida para colocar serviços, processos e experiências nas mãos de clientes, equipes e parceiros. Do Discovery à publicação nas lojas, unimos estratégia de produto, UX/UI, React Native, Expo, backend, integrações, IA, segurança e analytics — com tecnologia aplicada de acordo com o problema.";

export const metadata: Metadata = pageMetadata({
  title: "Desenvolvimento de Aplicativos iOS e Android",
  description:
    "Criamos aplicativos iOS e Android com UX/UI, React Native, Expo, backend, IA, integrações, segurança e publicação nas lojas. Do Discovery à evolução.",
  path,
});

/* ── Dados ───────────────────────────────────────────────────────── */

const acoes = ["compre", "agende", "consulte", "acompanhe", "pague", "envie informações", "receba alertas", "converse", "aprove", "registre", "execute tarefas", "acesse um serviço em segundos"];

const quandoFazSentido = [
  "usuários acessam o serviço com frequência",
  "a experiência precisa estar sempre no celular",
  "notificações geram valor",
  "localização é relevante",
  "câmera ou documentos fazem parte do processo",
  "biometria melhora a experiência",
  "existe necessidade de uso offline",
  "clientes acompanham pedidos e solicitações",
  "equipes trabalham em campo",
  "o processo exige mobilidade",
  "existe recorrência de uso",
  "o negócio depende de agendamentos",
  "pagamentos acontecem com frequência",
  "uma plataforma web precisa de experiência mobile",
  "IA pode tornar a interação mais rápida",
];

const tiposApp = [
  { title: "Aplicativos para clientes", text: "Experiências que aproximam a empresa do consumidor.", tags: ["Agendamentos", "Pedidos", "Fidelidade", "Pagamentos", "Suporte"] },
  { title: "Aplicativos B2B", text: "Produtos usados por empresas, parceiros ou clientes corporativos.", tags: ["Dashboards", "Aprovações", "Documentos", "Relatórios", "Workflows"] },
  { title: "Aplicativos para equipes", text: "Ferramentas internas para operações fora do escritório.", tags: ["Campo", "Checklists", "Coleta de dados", "Vendas externas", "Logística"] },
  { title: "Marketplaces e plataformas", text: "Aplicativos que conectam diferentes perfis de usuários.", tags: ["Clientes e prestadores", "Pagamentos", "Avaliações", "Geolocalização"] },
  { title: "Aplicativos de assinatura", text: "Planos recorrentes, conteúdo premium e serviços digitais.", tags: ["Planos", "Recorrência", "Acesso premium"] },
  { title: "Aplicativos com IA", text: "Produtos que usam IA como parte da experiência.", tags: ["Assistentes", "Busca inteligente", "Leitura de documentos", "Agentes"] },
];

const discoveryPerguntas = [
  "Quem vai usar?",
  "Que problema o app resolve?",
  "Com que frequência será usado?",
  "Por que alguém instalaria — e continuaria usando?",
  "Qual é a ação mais importante?",
  "O que precisa funcionar na primeira versão?",
  "Quais integrações e dados existem?",
  "Quais recursos do celular são necessários?",
  "Como o produto será medido?",
];

const discoveryInclui = [
  "Entendimento do negócio e entrevistas",
  "Benchmarking, público e personas",
  "Jornada, funcionalidades e regras",
  "Integrações, dados e recursos nativos",
  "Riscos e requisitos",
  "Escopo do MVP e priorização",
  "Protótipo e arquitetura",
  "Roadmap e estimativa",
];

const jornadaMobile = ["Descoberta", "Download", "Onboarding", "Ativação", "Valor", "Reengajamento", "Retenção"];

const rnBeneficios = [
  "Desenvolvimento compartilhado",
  "Manutenção centralizada",
  "Acesso a recursos do dispositivo",
  "Integração com APIs",
  "Publicação em iOS e Android",
  "Atualizações coordenadas",
];

const ecossistema = ["Aplicativo iOS / Android", "Backend · IA · Integrações", "Dados · CRM / ERP / Pagamentos", "Painel web da empresa", "Analytics + monitoramento"];

const integracoes = ["CRM", "ERP", "WhatsApp", "E-mail", "Gateways", "Mapas", "Agendas", "Assinatura eletrônica", "Storage", "APIs", "Sistemas internos"];

const capacidades = [
  { title: "Autenticação e conta", text: "E-mail, magic link, login social, Sign in with Apple, Google, OTP, biometria e MFA quando necessário — simples para o usuário, seguro para a operação." },
  { title: "Perfis e permissões", text: "Cliente, gestor, profissional, colaborador, parceiro, entregador. Cada perfil acessa apenas as funções e informações necessárias." },
  { title: "Notificações push", text: "Lembretes, atualizações, agendamentos, pedidos e alertas — mensagens úteis, no momento certo, com contexto. Sem virar spam." },
  { title: "Recursos nativos", text: "Câmera, galeria, GPS, mapas, biometria, arquivos, microfone, QR Code, contatos, calendário, deep links e armazenamento local — cada permissão com razão clara." },
  { title: "Geolocalização e mapas", text: "Busca por proximidade, rotas, unidades, acompanhamento, regiões de atendimento, check-in e geofencing quando aplicável, respeitando privacidade." },
  { title: "Offline e sincronização", text: "Cache local, filas de sincronização, formulários offline, reenvio e tratamento de conflito — pensado desde o início para operações de campo." },
  { title: "Pagamentos", text: "PIX, cartão, gateways, checkout, cupons, histórico e comprovantes, conforme o modelo de negócio e as regras da Apple e do Google." },
  { title: "Assinaturas", text: "Planos, período de teste, mensal/anual, upgrade, downgrade, cancelamento, restauração de compra e acesso premium — dentro das regras de distribuição." },
  { title: "Deep links", text: "Campanhas, e-mails, notificações e QR Codes levam o usuário direto à tela certa, reduzindo etapas na aquisição, ativação e reengajamento." },
];

const qualidadeCards = [
  { title: "Analytics de produto", text: "Instalações, cadastro, ativação, funis, retenção e abandono. Respondemos onde os usuários desistem, o que é realmente usado e o que se relaciona à retenção." },
  { title: "Crash reporting e observabilidade", text: "Monitoramos crashes, erros, falhas de API, performance, versões e dispositivos — reduzindo o tempo entre problema e diagnóstico antes que vire avaliação negativa." },
  { title: "Performance", text: "Um app lento parece quebrado mesmo quando não está. Reduzimos carregamentos, imagens pesadas, listas lentas e bloqueios de interface — desde a arquitetura." },
  { title: "Acessibilidade", text: "Boas práticas conforme o contexto: contraste, tamanhos, labels, áreas de toque, leitura por tecnologias assistivas e feedback visual." },
];

const publicacaoCards = [
  { title: "Testes em dispositivos reais", text: "O simulador não representa todos os celulares. Testamos fluxos importantes em iOS e Android, tamanhos de tela, rede lenta, perda de conexão, notificações, câmera, pagamentos e integrações." },
  { title: "Ambientes e beta", text: "Desenvolvimento, homologação e produção, com builds de teste, distribuição interna, TestFlight e grupos beta — validando versões com pessoas reais antes do lançamento amplo." },
  { title: "Publicação nas lojas", text: "Conduzimos a preparação e a submissão à App Store e ao Google Play: identificadores, certificados, builds, listing, políticas e envio para revisão. A aprovação final depende das lojas." },
  { title: "ASO", text: "Nome, subtítulo, descrição, ícone, screenshots e proposta de valor para melhorar a descoberta nas lojas. ASO não substitui um bom produto — ajuda a entender por que instalá-lo." },
];

const metodo = [
  { n: "01", title: "Discovery e Estratégia", text: "Entendemos usuários, problema, jornada, funcionalidades, integrações, riscos e objetivos.", result: "Escopo priorizado e direção de produto." },
  { n: "02", title: "UX/UI e Protótipo", text: "Desenhamos os fluxos e criamos uma experiência navegável antes do desenvolvimento completo.", result: "Produto visualmente validado e pronto para construção." },
  { n: "03", title: "Desenvolvimento e Integrações", text: "Construímos aplicativo, backend, painel e integrações por fases.", result: "Versões funcionais validadas durante o projeto." },
  { n: "04", title: "Testes e Publicação", text: "Validamos fluxos, dispositivos e integrações e preparamos o app para App Store e Google Play.", result: "Produto preparado para chegar aos usuários." },
  { n: "05", title: "Monitoramento e Evolução", text: "Acompanhamos erros, comportamento e novas oportunidades de melhoria.", result: "Aplicativo que continua evoluindo após o lançamento." },
];

const entregaveis = [
  "Discovery, requisitos e jornada",
  "Protótipo, UX/UI e design system",
  "Aplicativo iOS e Android",
  "Backend, banco de dados e APIs",
  "Painel administrativo",
  "Integrações, IA e notificações",
  "Analytics e crash reporting",
  "Infraestrutura e builds",
  "Código-fonte e repositório",
  "Configuração de lojas e publicação",
  "Documentação e treinamento",
  "Suporte de lançamento",
];

const porQue = [
  { title: "Discovery antes do código", text: "Entendemos o problema antes de investir em desenvolvimento." },
  { title: "UX/UI antes da complexidade", text: "Validamos fluxos e experiência cedo." },
  { title: "iOS e Android", text: "Construímos para as duas principais plataformas móveis." },
  { title: "React Native + Expo", text: "Stack moderna, com flexibilidade quando o projeto exige especificidades." },
  { title: "Backend e sistema web", text: "Podemos construir a operação completa por trás do app." },
  { title: "IA quando gera valor", text: "Aplicada quando melhora a experiência, a operação ou a proposta de valor." },
];

const stackSoluna = ["Estratégia", "UX/UI", "Aplicativos", "Sistemas web", "Backend", "IA", "Agentes", "Automação", "Integrações", "Cloud"];

const faq = [
  { q: "Vocês desenvolvem aplicativos para iPhone e Android?", a: "Sim. Desenvolvemos para iOS e Android, usando principalmente React Native e Expo quando essa arquitetura é adequada ao projeto." },
  { q: "Vocês usam uma única base de código?", a: "Em projetos React Native, grande parte do código pode ser compartilhada entre iOS e Android. Quando existem diferenças específicas de plataforma, implementamos os ajustes necessários para cada ambiente." },
  { q: "O desempenho é bom?", a: "React Native é usado em diversos produtos mobile de grande escala e permite experiências de alto desempenho quando a arquitetura e a implementação são adequadas. O desempenho final depende das funcionalidades, integrações, bibliotecas e backend." },
  { q: "Posso contratar apenas o design e o protótipo?", a: "Sim. Design e protótipo podem ser contratados como uma etapa independente para validar a ideia antes de investir no desenvolvimento completo." },
  { q: "Vocês desenvolvem o backend?", a: "Sim. Quando o app exige usuários, dados, regras, integrações, pagamentos ou administração, podemos desenvolver também a estrutura de backend." },
  { q: "Vocês criam painel administrativo?", a: "Sim. O projeto pode incluir um sistema web para a equipe administrar usuários, conteúdo, pedidos, pagamentos, agendamentos e outras informações." },
  { q: "Vocês publicam na App Store e Google Play?", a: "Sim. Apoiamos a preparação e a submissão do aplicativo às lojas. A aprovação final depende das políticas e processos da Apple e do Google." },
  { q: "As contas das lojas ficam em nome de quem?", a: "Recomendamos que as contas de desenvolvedor sejam controladas pela própria empresa quando o app pertence ao cliente. Isso facilita propriedade e continuidade do produto." },
  { q: "Vocês configuram notificações push?", a: "Sim. Podemos implementar notificações para lembretes, atualizações, mensagens e outros eventos relevantes ao produto." },
  { q: "O aplicativo pode funcionar offline?", a: "Dependendo do projeto, sim. Aplicações de campo ou processos específicos podem ser estruturados com armazenamento local e sincronização quando a conexão estiver disponível." },
  { q: "Vocês implementam pagamentos e assinaturas?", a: "Sim. Podemos integrar gateways, PIX, cartões, assinaturas e outros meios conforme o modelo do produto e as regras aplicáveis da App Store e do Google Play." },
  { q: "O app pode usar câmera, GPS e biometria?", a: "Sim. Aplicativos podem utilizar recursos nativos como câmera, localização, mapas, biometria, arquivos, QR Code e outros, conforme os requisitos e permissões necessários." },
  { q: "Todo aplicativo precisa ter IA?", a: "Não. Utilizamos IA quando ela melhora a experiência, a operação ou a proposta de valor do produto. Não adicionamos IA apenas como recurso decorativo." },
  { q: "Vocês integram o app aos sistemas que a empresa já usa?", a: "Sim, desde que existam meios técnicos de integração. Podemos conectar APIs, CRMs, ERPs, gateways, sistemas internos e outros serviços." },
  { q: "Quanto custa desenvolver um aplicativo?", a: "Investimento sob consulta. Depende de funcionalidades, backend, integrações, IA, pagamentos, perfis e painel administrativo — o valor definitivo é definido após o Discovery." },
  { q: "Quanto tempo leva?", a: "Depende do escopo. Projetos menores podem ser divididos em fases mais curtas; produtos complexos exigem um roadmap maior. O cronograma é definido após o Discovery." },
  { q: "O código fica comigo?", a: "As condições de propriedade são definidas em contrato. Quando o modelo prevê propriedade pelo cliente, repositório e ativos podem ser estruturados sob controle da empresa contratante." },
  { q: "Vocês dão suporte após o lançamento?", a: "Sim. Podemos oferecer sustentação, monitoramento, correções e evolução contínua." },
  { q: "A Soluna atende empresas de todo o Brasil?", a: "Sim. Discovery, design, desenvolvimento e acompanhamento podem ser realizados integralmente online." },
];

/* ── Página ──────────────────────────────────────────────────────── */

export default function AplicativosPage() {
  const crumbs = [
    { name: "Serviços", path: "/servicos/" },
    { name: "Desenvolvimento de Aplicativos", path },
  ];
  return (
    <>
      <JsonLd data={graph(serviceSchema({ name: "Desenvolvimento de Aplicativos", description: answer, path }), faqSchema(faq), breadcrumbSchema(crumbs))} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Desenvolvimento de aplicativos iOS e Android"
        title="Aplicativos feitos para entrar na rotina — e gerar valor toda vez que são abertos."
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
              {["Discovery", "UX/UI", "iOS", "Android", "React Native", "Expo", "APIs", "IA", "Analytics"].map((t, i, a) => (
                <span key={t} className="inline-flex items-center gap-2.5">
                  {t}
                  {i < a.length - 1 && <span aria-hidden className="text-white/25">·</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-white/45">Protótipo navegável · desenvolvimento por fases · publicação nas lojas · atendimento em todo o Brasil.</p>
          </div>
        }
        visual={<WhatsAppMock actions={false} />}
      />

      {/* §3 — Não é apenas um app */}
      <Section tone="white" labelledBy="produto-mobile">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <SectionHeading
            id="produto-mobile"
            eyebrow="Produto mobile"
            title="Estar na tela do cliente cria uma relação diferente com a sua empresa."
            text="Um aplicativo reduz etapas, aumenta a frequência de uso e aproxima a empresa do usuário. Ele pode permitir que alguém:"
          />
          <div>
            <ul className="flex flex-wrap gap-2">
              {acoes.map((a) => (
                <li key={a} className="rounded-full border border-line/70 bg-mist px-3.5 py-1.5 text-[0.9rem] font-medium text-ink">{a}</li>
              ))}
            </ul>
            <p className="mt-6 text-slate">
              Mas, para funcionar, o produto precisa de uma razão clara para permanecer instalado. Não desenvolvemos apps apenas para “ter um app” — <strong className="text-ink">construímos produtos mobile quando existe uma experiência que realmente ganha valor no celular</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* §4 — Quando faz sentido */}
      <Section tone="mist" labelledBy="oportunidade">
        <SectionHeading
          id="oportunidade"
          eyebrow="Oportunidade"
          title="Nem toda empresa precisa de um app. Algumas operações funcionam muito melhor com um."
          text="Um aplicativo pode fazer sentido quando:"
        />
        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {quandoFazSentido.map((s) => (
            <li key={s} className="flex gap-3 text-[0.95rem] text-ink/85">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-slate">O Discovery ajuda a descobrir se um app é realmente a solução certa.</p>
        <div className="mt-6">
          <ButtonLink href="/contato/" variant="secondary" arrow>
            Quero avaliar minha ideia
          </ButtonLink>
        </div>
      </Section>

      {/* §5 — O que desenvolvemos */}
      <Section tone="white" id="o-que-desenvolvemos" labelledBy="desenvolvemos">
        <SectionHeading id="desenvolvemos" eyebrow="Aplicativos sob medida" title="Produtos mobile para diferentes modelos de negócio." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tiposApp.map((p) => (
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
            <h2 id="discovery" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
              Antes de desenvolver telas, entendemos por que o aplicativo deve existir.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Uma ideia costuma começar com “queremos criar um aplicativo para…”. O Discovery transforma essa ideia em um produto que pode ser construído. Buscamos responder:
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
              <span className="font-semibold text-white">Resultado:</span> o que construir, para quem, em qual ordem, com qual tecnologia, quais dependências existem e como validar o produto.
            </p>
          </div>
        </div>
      </Section>

      {/* §8 + §9 — UX/Protótipo e MVP */}
      <Section tone="mist" labelledBy="prototipo">
        <SectionHeading id="prototipo" eyebrow="Antes do código" title="A melhor hora para corrigir uma experiência ruim é antes de programá-la." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="eyebrow mb-3">UX/UI e protótipo navegável</p>
            <h3 className="text-xl font-semibold">Validar a experiência antes do desenvolvimento.</h3>
            <p className="mt-3 text-slate">Testamos navegação, onboarding, telas, fluxos, estados e erros — e usamos o protótipo para validar com usuários, alinhar stakeholders, apresentar a investidores e estimar o desenvolvimento.</p>
            <p className="mt-4 text-[0.95rem] font-semibold text-ink">Design &amp; Protótipo pode ser contratado como etapa independente.</p>
          </Card>
          <Card>
            <p className="eyebrow mb-3">MVP mobile</p>
            <h3 className="text-xl font-semibold">O primeiro app não precisa fazer tudo. Precisa provar que deveria existir.</h3>
            <p className="mt-3 text-slate">Priorizamos o menor conjunto de funcionalidades capaz de entregar valor real — para lançar mais cedo, observar usuários reais, validar demanda e priorizar o próximo ciclo. Não uma versão descartável: uma base responsável para aprender e evoluir.</p>
          </Card>
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate">A jornada mobile não termina na instalação</p>
          <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {jornadaMobile.map((step, i, a) => (
              <li key={step} className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-2 lg:text-center">
                <span className="flex flex-1 items-center justify-center rounded-xl bg-mist px-3 py-3 text-center text-[0.85rem] font-semibold text-ink lg:w-full lg:flex-none">{step}</span>
                {i < a.length - 1 && <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90 text-signal lg:rotate-0" />}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* §10 — React Native + Expo */}
      <Section tone="white" labelledBy="react-native">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              id="react-native"
              eyebrow="Tecnologia"
              title="Uma base compartilhada para iOS e Android — com adaptações específicas quando necessárias."
              text="React Native e Expo permitem compartilhar grande parte do desenvolvimento entre iOS e Android, reduzindo duplicação e facilitando manutenção. Mas “uma base de código” não significa ignorar as diferenças entre iPhone e Android: quando necessário, tratamos comportamentos, permissões e recursos específicos de cada plataforma. A stack é escolhida de acordo com o projeto."
            />
            <Checklist items={rnBeneficios} className="mt-8 grid gap-x-8 sm:grid-cols-2 [&>li+li]:mt-0" />
          </div>
          <div className="self-center rounded-[1.5rem] border border-line bg-mist p-8 text-center">
            <span className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white">Base compartilhada</span>
            <div className="mt-6 flex items-start justify-center gap-4">
              {["iOS", "Android"].map((p) => (
                <div key={p} className="flex flex-1 flex-col items-center">
                  <ArrowRight aria-hidden className="mb-3 size-4 rotate-90 text-signal" />
                  <span className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-ink shadow-[var(--shadow-card)]">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.9rem] text-slate">+ ajustes específicos de plataforma quando o projeto exige.</p>
          </div>
        </div>
      </Section>

      {/* §11 + §12 + §24 — Ecossistema do app */}
      <Section tone="aurora" labelledBy="ecossistema">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-white/80">O que existe por trás da tela</Eyebrow>
          <h2 id="ecossistema" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
            A maior parte do valor de um aplicativo não vive apenas no celular.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            O usuário está no app; sua equipe pode precisar de um sistema web para operar tudo por trás. Aplicativo e painel trabalham sobre a mesma estrutura de dados e regras. Quando necessário, desenvolvemos app e backend como um único produto.
          </p>
        </div>
        <ol className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
          {ecossistema.map((tier, i, a) => (
            <li key={tier} className="flex flex-col items-center gap-3">
              <span className="w-full rounded-xl border border-white/12 bg-white/[0.06] px-5 py-3.5 text-center text-[0.95rem] font-semibold text-white backdrop-blur-sm">{tier}</span>
              {i < a.length - 1 && <ArrowRight aria-hidden className="size-4 rotate-90 text-white/40" />}
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-10 max-w-3xl rounded-[1.4rem] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/55">Integrações — o app não precisa ser uma ilha</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {integracoes.map((i) => (
              <li key={i} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.85rem] font-medium text-white/85">{i}</li>
            ))}
          </ul>
          <p className="mt-5 text-[0.95rem] text-white/70">
            <TextLink href="/servicos/desenvolvimento-de-sistemas/" className="text-sky">Conhecer Desenvolvimento de SaaS e Sistemas</TextLink>
          </p>
        </div>
      </Section>

      {/* §13–§21 — Capacidades mobile */}
      <Section tone="white" labelledBy="capacidades">
        <SectionHeading id="capacidades" eyebrow="Mobile de verdade" title="Recursos que só o celular entrega." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capacidades.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.92rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §22 + §23 — IA no app */}
      <Section tone="navy" labelledBy="ia-app">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Inteligência aplicada</Eyebrow>
            <h2 id="ia-app" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
              IA no aplicativo precisa melhorar a experiência — não apenas aparecer no menu.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              A IA pode aparecer na interface ou trabalhar silenciosamente no backend: atendimento, busca inteligente, recomendação, leitura de documentos, geração de conteúdo, classificação, resumo, copilotos, voz e personalização. O importante é gerar valor.
            </p>
            <p className="mt-5 text-white/85">
              <TextLink href="/solucoes/atendimento-inteligente/agente-ia-whatsapp/" className="text-sky">Ver Agentes de IA</TextLink>
              <span className="px-2 text-white/30">·</span>
              <TextLink href="/solucoes/operacoes/automacao-de-processos/" className="text-sky">Conhecer Automação com IA</TextLink>
            </p>
          </div>
          <div className="self-center rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xl font-semibold text-white">Agentes que executam</h3>
            <p className="mt-3 text-white/70">O usuário pede; o app entende e age. Conectados a ferramentas e dados, agentes podem:</p>
            <Checklist
              dark
              className="mt-5"
              items={["interpretar uma solicitação", "buscar informações e preencher dados", "agendar e gerar documentos", "atualizar sistemas e executar ações", "recomendar próximos passos", "transferir casos para humanos"]}
            />
            <p className="mt-5 text-[0.85rem] text-white/55">A autonomia é definida por regras, permissões e contexto.</p>
          </div>
        </div>
      </Section>

      {/* §25–§28 — Qualidade e confiabilidade */}
      <Section tone="mist" labelledBy="qualidade">
        <SectionHeading id="qualidade" eyebrow="Depois do lançamento" title="O usuário começa a mostrar o que realmente importa." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qualidadeCards.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.92rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* §29 + §30 — Segurança e LGPD */}
      <Section tone="navy" labelledBy="seguranca">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Secure by design</Eyebrow>
            <h2 id="seguranca" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
              Aplicativos carregam dados, identidade e ações da operação dentro do dispositivo.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Segurança faz parte da arquitetura: autenticação, autorização, sessões, tokens, armazenamento seguro, APIs, criptografia, proteção de credenciais e permissões. A profundidade varia conforme os riscos do produto.
            </p>
            <TextLink href="/seguranca-e-lgpd/" className="mt-6 inline-flex text-sky">
              Entender Segurança e LGPD
            </TextLink>
          </div>
          <div className="self-center rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xl font-semibold text-white">LGPD e privacidade</h3>
            <p className="mt-3 text-white/70">Colete apenas o que o produto realmente precisa. Consideramos minimização, consentimento quando aplicável, finalidade, retenção, exclusão e transparência. Permissões como localização, câmera, microfone e contatos devem ter justificativa funcional clara.</p>
            <p className="mt-4 text-[0.9rem] text-white/55">Questões jurídicas e bases legais devem ser validadas pela assessoria competente quando necessário.</p>
          </div>
        </div>
      </Section>

      {/* §31–§34 — Da homologação às lojas */}
      <Section tone="white" labelledBy="publicacao">
        <SectionHeading id="publicacao" eyebrow="Go-live" title="Construir o app é uma parte. Publicá-lo corretamente é outra." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {publicacaoCards.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[0.92rem] text-slate">{c.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-line bg-mist p-5 text-[0.95rem] text-slate">
          As contas de desenvolvedor e as taxas das plataformas pertencem ao cliente e seguem as condições vigentes da Apple e do Google. Quando a arquitetura permite, parte das atualizações pode ser distribuída via OTA — mudanças nativas seguem o fluxo normal das lojas.
        </p>
      </Section>

      {/* §38 + §39 — Método Soluna */}
      <Section tone="navy" labelledBy="metodo">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-sky">Do protótipo às lojas</Eyebrow>
          <h2 id="metodo" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
            Cinco etapas para transformar uma ideia em um app pronto para usuários reais.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Dividimos o desenvolvimento em ciclos menores, cada um com objetivo e critério de aceite claros — você acompanha o produto sendo construído e reduz o risco de um “big bang” no final.
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
          Descobrir → Projetar → Construir → Publicar → Evoluir
        </p>
      </Section>

      {/* §40 + §41 + §42 — Entregáveis, propriedade, modernização */}
      <Section tone="mist" labelledBy="entregaveis">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading id="entregaveis" eyebrow="Entrega completa" title="Você recebe mais do que um arquivo instalado no celular." text="A composição final é definida no escopo e no contrato." />
            <Checklist items={entregaveis} className="mt-6 grid gap-x-8 sm:grid-cols-2 [&>li+li]:mt-0" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[var(--radius-card)] bg-navy p-6 text-white shadow-[var(--shadow-card)] md:p-8">
              <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-sky">O produto é seu</p>
              <h3 className="text-xl font-semibold text-white">Propriedade e controle.</h3>
              <p className="mt-3 text-white/75">Código, repositório, contas Apple e Google Play Console, backend, cloud, domínios, credenciais e condições de saída são definidos com transparência. Recomendamos que contas estratégicas de publicação e ativos críticos fiquem sob controle da empresa.</p>
            </div>
            <Card>
              <p className="eyebrow mb-3">App legado</p>
              <h3 className="text-xl font-semibold">Nem todo app precisa ser refeito do zero.</h3>
              <p className="mt-3 text-[0.95rem] text-slate">Se sua empresa já tem um app, avaliamos UX/UI, performance, arquitetura, dependências, segurança e avaliações — e recomendamos evolução gradual, modernização, reestruturação ou reescrita, somente quando realmente necessária.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* §46 + §47 + §48 — Investimento */}
      <Section tone="white" id="faixas" labelledBy="investimento">
        <SectionHeading
          id="investimento"
          eyebrow="Referências para planejar"
          title="Clareza antes do desenvolvimento."
          text="Cada aplicativo tem escopo próprio. Investimento sob consulta, definido após o Discovery."
        />
        <div className="mt-12">
          <OfferCards
            columns={4}
            offers={[
              { name: "Design & Protótipo", price: "Sob consulta", text: "Valide produto, fluxo e interface antes de construir. Escopo e valor definidos conforme o projeto." },
              { name: "App Mobile", price: "Sob consulta", text: "Aplicativo iOS e Android com base compartilhada e recursos definidos no projeto.", highlight: true, badge: "Mais pedido" },
              { name: "App + Sistema Web", price: "Sob consulta", text: "Aplicativo mobile e painel/sistema web integrados sobre a mesma base." },
              { name: "Apps complexos / plataformas", price: "Sob consulta", text: "Múltiplos perfis, pagamentos, integrações avançadas, IA ou regras mais complexas." },
            ]}
          />
        </div>
        <p className="mt-6 rounded-2xl border border-line bg-mist p-5 text-[0.95rem] text-slate">
          <strong className="text-ink">Sustentação (depois do lançamento):</strong> monitoramento, correções, atualizações, compatibilidade, novas versões, segurança e melhorias — o modelo é definido conforme criticidade, produto e SLA. As contas e serviços de terceiros seguem as condições das plataformas e não estão incluídos sem previsão contratual.
        </p>
      </Section>

      {/* §43 + §49 — Diferencial e por que Soluna */}
      <Section tone="navy" labelledBy="por-que">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-5 text-sky">Por que construir conosco</Eyebrow>
            <h2 id="por-que" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
              Produto mobile, software e IA no mesmo projeto.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              A Soluna combina capacidades que normalmente ficam separadas. Assim, o aplicativo não é apenas uma interface — pode ser a porta de entrada de uma operação muito mais inteligente.
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

      {/* §44 — Quando não criar um app */}
      <Section tone="white" labelledBy="quando-nao">
        <div className="rounded-[1.5rem] border border-dashed border-line-strong bg-mist p-8 md:p-12">
          <Eyebrow className="mb-4">Tecnologia com critério</Eyebrow>
          <h2 id="quando-nao" className="max-w-3xl text-[1.5rem] font-bold md:text-[2.125rem]">
            Nem toda ideia precisa virar aplicativo.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-slate">
            Talvez um site responsivo resolva. Talvez uma PWA faça sentido. Talvez um sistema web seja suficiente, ou uma automação resolva o problema, ou ainda seja cedo para investir no produto. O Discovery também existe para descobrir isso. Não queremos recomendar um aplicativo só porque sabemos desenvolvê-lo — queremos encontrar a solução correta para o problema.
          </p>
        </div>
      </Section>

      {/* §56 — Links internos */}
      <Section tone="mist" labelledBy="saiba-mais">
        <h2 id="saiba-mais" className="text-2xl font-semibold md:text-3xl">Serviços relacionados</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <LinkCard href="/servicos/desenvolvimento-de-sistemas/" meta="Serviço" title="Desenvolvimento de SaaS e Sistemas" text="Backend, painel web e plataformas sob medida por trás do app." />
          <LinkCard href="/solucoes/ia-corporativa/" meta="IA na operação" title="IA Corporativa" text="Agentes, copilotos e automação inteligente na operação." />
          <LinkCard href="/servicos/criacao-de-sites/" meta="Serviço" title="Criação de Sites" text="Presença pública de alta performance para o seu produto." />
          <LinkCard href="/solucoes/operacoes/automacao-de-processos/" meta="Solução" title="Automação de Processos" text="Fluxos automatizados com validação e rastreabilidade." />
          <LinkCard href="/seguranca-e-lgpd/" meta="Confiança" title="Segurança e LGPD" text="Como tratamos dados, acessos e privacidade nos projetos." />
          <LinkCard href="/cases/" meta="Projetos" title="Ver projetos" text="Como conduzimos produtos digitais do problema à operação." />
        </div>
      </Section>

      {/* §50 — FAQ */}
      <FAQSection items={faq} title="O que empresas e founders querem saber antes de começar" tone="white" />

      {/* §51 — CTA final */}
      <Section tone="navy" labelledBy="cta-final">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 text-sky">Da ideia à App Store e Google Play</Eyebrow>
          <h2 id="cta-final" className="text-[1.5rem] font-bold leading-[1.15] text-white md:text-[2.125rem]">
            Tem uma ideia de aplicativo? Valide o produto antes de investir no código.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Você pode chegar com uma ideia, um processo, um sistema existente, um protótipo, uma plataforma web, um app que precisa evoluir ou apenas um problema que acredita que o mobile pode resolver. O primeiro passo é entender se um aplicativo é a melhor solução — e qual deve ser a primeira versão.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contato/" size="lg">
              Agendar Discovery
            </ButtonLink>
            <ButtonLink href={whatsappLink("Olá! Quero falar com um especialista sobre o desenvolvimento de um aplicativo.")} size="lg" variant="ghost-light">
              Falar com um especialista
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/45">
            iOS · Android · React Native · Expo · Backend · IA · Integrações · Analytics — projetos para empresas em todo o Brasil.
          </p>
        </div>
      </Section>

      <Signature updatedAt="2026-09-26" />
    </>
  );
}
