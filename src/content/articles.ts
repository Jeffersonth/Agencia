import type { FAQ } from "./types";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string };

export type Article = {
  slug: string;
  kind: "guia" | "comparativo";
  title: string;
  metaTitle: string;
  description: string;
  answer: string;
  updatedAt: string;
  readingMinutes: number;
  sections: { id: string; heading: string; blocks: Block[] }[];
  faq: FAQ[];
  related: string[];
};

const UPDATED = "2026-09-24";

export const guides: Article[] = [
  {
    slug: "agentes-de-ia-para-empresas",
    kind: "guia",
    title: "Agentes de IA para empresas: guia completo",
    metaTitle: "Agentes de IA para Empresas: o que são, como funcionam e quanto custam",
    description:
      "O que é um agente de IA, como ele se diferencia de um chatbot, onde gera retorno em atendimento, vendas e operações, quanto custa e como implantar com segurança.",
    answer:
      "Um agente de IA é um software que entende linguagem natural, consulta informações da empresa e executa ações em outros sistemas — agendar, registrar no CRM, gerar um documento — para cumprir um objetivo. Diferente de um chatbot de menu, ele decide o próximo passo a partir do contexto. Nas empresas, gera mais retorno em atendimento, pré-vendas e processos repetitivos.",
    updatedAt: UPDATED,
    readingMinutes: 9,
    sections: [
      {
        id: "o-que-e",
        heading: "O que é um agente de IA",
        blocks: [
          { type: "p", text: "Um agente de IA combina três coisas: um modelo de linguagem, que entende e escreve texto como uma pessoa; uma base de conhecimento, com as informações da sua empresa; e ferramentas, que permitem agir em outros sistemas. É essa terceira parte que transforma um “assistente que responde” em um “agente que faz”." },
          { type: "p", text: "Na prática, um agente de atendimento não só explica como funciona o agendamento: ele consulta a agenda, oferece horários reais, marca e envia a confirmação. Um agente de pré-vendas não só conversa: ele qualifica, pontua o lead e registra tudo no CRM." },
          { type: "callout", title: "Em uma frase", text: "Chatbot responde. Agente resolve — dentro das regras que você define." },
        ],
      },
      {
        id: "como-funciona",
        heading: "Como um agente de IA funciona por dentro",
        blocks: [
          { type: "ol", items: [
            "Recebe uma mensagem ou um evento (um lead novo, um e-mail com anexo, um formulário).",
            "Interpreta a intenção e o contexto, usando o histórico e a base de conhecimento da empresa.",
            "Decide o próximo passo: responder, perguntar algo, consultar um sistema ou chamar um humano.",
            "Executa a ação por meio de integrações (agenda, CRM, ERP, e-mail, WhatsApp).",
            "Registra o que fez, para auditoria e melhoria contínua.",
          ] },
          { type: "p", text: "A qualidade de um agente depende menos do modelo escolhido e mais da engenharia ao redor: a base de conhecimento bem curada, as regras de transbordo, os testes com cenários reais e o monitoramento depois que ele vai ao ar." },
        ],
      },
      {
        id: "onde-gera-retorno",
        heading: "Onde os agentes geram mais retorno",
        blocks: [
          { type: "table", head: ["Área", "O que o agente faz", "O que medir"], rows: [
            ["Atendimento", "Responde 24/7, agenda, envia documentos, transfere com contexto", "Tempo de primeira resposta, % resolvido sem humano"],
            ["Pré-vendas", "Aborda o lead em segundos, qualifica, agenda reunião", "Leads qualificados, reuniões agendadas"],
            ["Reativação", "Conversa com base parada e orçamentos perdidos", "Oportunidades e receita gerada"],
            ["Operações", "Lê documentos, extrai dados, lança em sistemas", "Horas devolvidas, erros de lançamento"],
            ["Conhecimento interno", "Responde à equipe citando a fonte", "Tempo de busca, tempo de integração"],
          ] },
        ],
      },
      {
        id: "custos",
        heading: "Quanto custa um agente de IA",
        blocks: [
          { type: "p", text: "O custo tem três partes: implantação (o projeto), sustentação mensal (monitoramento, ajustes e evolução) e consumo (mensagens do WhatsApp, uso do modelo de IA), que deve ser pago direto pela sua empresa aos provedores." },
          { type: "ul", items: [
            "Agente de IA para WhatsApp: implantação a partir de R$ 7.500.",
            "SDR com IA: implantação a partir de R$ 15.000.",
            "Automação de documentos: implantação a partir de R$ 12.000.",
            "Agente de conhecimento interno: implantação a partir de R$ 10.000.",
          ] },
          { type: "p", text: "O preço fechado depende das integrações e do volume, por isso todo projeto começa por um Diagnóstico, que mapeia os processos e estima o retorno." },
        ],
      },
      {
        id: "riscos",
        heading: "Riscos e como controlá-los",
        blocks: [
          { type: "ul", items: [
            "Respostas inventadas (alucinação): base de conhecimento curada, instrução para transferir quando não souber e testes antes de ir ao ar.",
            "Dados sensíveis: provedores com não retenção de dados ou IA privada, controle de acesso e LGPD.",
            "Dependência do fornecedor: contas, números e dados em nome da sua empresa, com cláusula de saída.",
            "Experiência ruim: transbordo claro para humano e monitoramento das conversas.",
          ] },
        ],
      },
      {
        id: "como-implantar",
        heading: "Como implantar em cinco etapas",
        blocks: [
          { type: "ol", items: [
            "Diagnóstico: onde está o gargalo e qual o retorno de resolvê-lo.",
            "Desenho: fluxos, regras de transbordo e integrações aprovados com você.",
            "Construção: agente, base de conhecimento e integrações.",
            "Validação: testes com cenários reais antes de ir ao ar.",
            "Operação contínua: monitoramento, ajustes e evolução mensal.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "Agente de IA e chatbot são a mesma coisa?", a: "Não. O chatbot tradicional segue um roteiro de menus; o agente entende linguagem natural, consulta informações e executa ações em outros sistemas." },
      { q: "Quanto tempo leva para implantar um agente?", a: "Um agente de WhatsApp leva de 2 a 3 semanas; projetos com mais integrações levam de 3 a 6 semanas." },
      { q: "Preciso ter uma equipe técnica?", a: "Não. A implantação e a sustentação ficam com a gente; sua equipe participa definindo regras e validando." },
    ],
    related: [
      "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
      "/solucoes/vendas-e-receita/sdr-com-ia/",
      "/solucoes/operacoes/automacao-de-documentos/",
      "/conteudo/comparativos/agente-de-ia-vs-chatbot/",
    ],
  },
  {
    slug: "ia-no-whatsapp",
    kind: "guia",
    title: "IA no WhatsApp: API oficial, custos e implantação",
    metaTitle: "IA no WhatsApp para Empresas: API Oficial, Custos e Implantação",
    description:
      "Como colocar um agente de IA no WhatsApp da sua empresa: API oficial, como a Meta cobra as mensagens, o que muda no seu número, prazos e cuidados com a LGPD.",
    answer:
      "Para colocar IA no WhatsApp de uma empresa com segurança, o caminho é a API oficial do WhatsApp Business (Meta). Ela permite conectar um agente de IA ao seu número, sem risco de banimento, com mensagens cobradas diretamente pela Meta. A implantação de um agente leva de 2 a 3 semanas e o número, a conta e os dados ficam em nome da empresa.",
    updatedAt: UPDATED,
    readingMinutes: 8,
    sections: [
      {
        id: "api-oficial",
        heading: "Por que usar a API oficial",
        blocks: [
          { type: "p", text: "Existem duas formas de automatizar o WhatsApp: pela API oficial da Meta ou por ferramentas não oficiais que simulam o aplicativo. As não oficiais violam os termos de uso e colocam o número em risco de bloqueio — justamente o canal pelo qual seus clientes falam com você." },
          { type: "p", text: "A API oficial é o caminho usado por empresas que não podem parar: número verificado, estabilidade, integração com CRM e agenda e conformidade com as regras da plataforma." },
        ],
      },
      {
        id: "custos",
        heading: "Como a Meta cobra as mensagens",
        blocks: [
          { type: "p", text: "A cobrança é feita pela Meta, direto à sua empresa, por mensagem de modelo enviada. Os modelos são classificados em categorias — marketing, utilidade e autenticação — com preços diferentes por categoria e por país, publicados pela própria Meta." },
          { type: "ul", items: [
            "Respostas do seu agente dentro da janela de atendimento de 24 horas, aberta quando o cliente escreve, não são cobradas.",
            "Mensagens de marketing (promoções, reativação) são as mais caras e exigem consentimento.",
            "Mensagens de utilidade (confirmação, lembrete) têm custo menor.",
          ] },
          { type: "callout", title: "Transparência", text: "Estimamos o custo mensal de mensagens com base no seu volume durante o Diagnóstico. Como o pagamento é feito direto à Meta, não há margem escondida." },
        ],
      },
      {
        id: "numero",
        heading: "O que acontece com o seu número",
        blocks: [
          { type: "p", text: "É possível migrar o número que você já usa para a API oficial. Depois da migração, o número passa a ser operado pela plataforma de atendimento, e não mais pelo aplicativo do celular. A equipe continua atendendo por um painel, com várias pessoas ao mesmo tempo." },
        ],
      },
      {
        id: "implantacao",
        heading: "Etapas da implantação",
        blocks: [
          { type: "ol", items: [
            "Verificação da empresa no Gerenciador de Negócios da Meta, em nome da sua empresa.",
            "Conexão do número à API oficial.",
            "Treinamento do agente com o conhecimento do seu negócio.",
            "Integração com CRM, agenda e sistemas.",
            "Testes com cenários reais e ida ao ar, com monitoramento.",
          ] },
        ],
      },
      {
        id: "lgpd",
        heading: "Cuidados com a LGPD",
        blocks: [
          { type: "ul", items: [
            "Conta, número e histórico em nome da sua empresa.",
            "Consentimento para mensagens ativas de marketing e opção de descadastro.",
            "Controle de acesso ao painel e registro de quem viu o quê.",
            "Para dados sensíveis (saúde, jurídico), provedores de IA com não retenção de dados ou IA privada.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "Posso usar o WhatsApp Business do celular junto com a API?", a: "O número migrado passa a funcionar pela API. Existe a coexistência em alguns casos, mas a recomendação depende do seu volume e é avaliada no Diagnóstico." },
      { q: "Quanto custa por mês?", a: "Depende do volume e do tipo de mensagem. Respostas dentro da janela de 24 horas não são cobradas; mensagens de modelo seguem a tabela da Meta." },
      { q: "Corro risco de ser banido?", a: "Com a API oficial e boas práticas (consentimento, mensagens relevantes), o risco é mínimo. O risco alto está nas ferramentas não oficiais." },
    ],
    related: [
      "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
      "/solucoes/atendimento-inteligente/agendamento-inteligente/",
      "/conteudo/comparativos/api-oficial-vs-nao-oficial-whatsapp/",
      "/seguranca-e-lgpd/",
    ],
  },
  {
    slug: "ia-e-lgpd",
    kind: "guia",
    title: "IA e LGPD: como usar inteligência artificial com segurança",
    metaTitle: "IA e LGPD: Como Usar Inteligência Artificial com Segurança na Empresa",
    description:
      "O que a LGPD exige quando a empresa usa IA: base legal, dados sensíveis, transferência internacional, decisões automatizadas, IA privada e governança.",
    answer:
      "Usar IA em conformidade com a LGPD exige definir a base legal de cada tratamento de dados, proteger especialmente os dados sensíveis (como saúde), escolher provedores que não usem seus dados para treinar modelos, controlar acessos, registrar o uso e garantir revisão humana em decisões automatizadas relevantes. Para dados muito sensíveis, a IA privada é o caminho mais seguro.",
    updatedAt: UPDATED,
    readingMinutes: 8,
    sections: [
      {
        id: "o-que-muda",
        heading: "O que muda quando a IA entra em cena",
        blocks: [
          { type: "p", text: "A LGPD (Lei nº 13.709/2018) vale para qualquer tratamento de dados pessoais, com ou sem IA. O que a IA traz de novo são três pontos de atenção: os dados podem ser enviados a provedores fora do Brasil, podem ser usados para treinar modelos de terceiros e podem alimentar decisões automatizadas." },
        ],
      },
      {
        id: "checklist",
        heading: "Checklist de conformidade",
        blocks: [
          { type: "ol", items: [
            "Base legal: defina por que cada dado é tratado (execução de contrato, consentimento, legítimo interesse, tutela da saúde…).",
            "Dados sensíveis: saúde, biometria e outros exigem cuidado redobrado e bases legais específicas.",
            "Provedores: contratos com não retenção de dados e sem uso para treinamento.",
            "Transferência internacional: verifique onde os dados são processados e se o contrato cobre isso.",
            "Acesso: cada pessoa acessa só o necessário, com registro de uso.",
            "Decisões automatizadas: o titular pode pedir revisão; mantenha um humano no circuito.",
            "Transparência: informe ao cliente que ele fala com um assistente virtual.",
          ] },
        ],
      },
      {
        id: "ia-privada",
        heading: "Quando usar IA privada",
        blocks: [
          { type: "table", head: ["Situação", "Caminho recomendado"], rows: [
            ["Atendimento com dados cadastrais comuns", "Provedor corporativo com não retenção"],
            ["Documentos com dados de clientes (jurídico, contábil)", "IA em nuvem privada"],
            ["Dados de saúde ou sigilo máximo", "IA em nuvem privada ou dedicada/on-premise"],
          ] },
        ],
      },
      {
        id: "governanca",
        heading: "Governança: as regras do jogo",
        blocks: [
          { type: "p", text: "Muitas empresas já usam IA de forma informal: colaboradores colando textos em ferramentas públicas. Uma política de uso, com ferramentas aprovadas, dados proibidos e registros, reduz o risco sem travar a produtividade." },
          { type: "callout", text: "Este guia é informativo e não substitui a orientação do seu jurídico ou DPO. Trabalhamos junto com eles na parte técnica e operacional." },
        ],
      },
    ],
    faq: [
      { q: "Meus dados treinam o modelo de IA?", a: "Não, se você usar provedores corporativos com contrato de não retenção ou IA privada. Ferramentas gratuitas e contas pessoais podem usar os dados — por isso a política de uso é importante." },
      { q: "Posso usar IA com dados de saúde?", a: "Sim, com base legal adequada, controle de acesso, sigilo e, preferencialmente, IA privada." },
      { q: "Preciso avisar o cliente que ele fala com uma IA?", a: "É a prática recomendada, por transparência, e evita frustração. O cliente deve poder falar com um humano." },
    ],
    related: ["/solucoes/ia-corporativa/ia-privada/", "/solucoes/ia-corporativa/governanca-ia-lgpd/", "/seguranca-e-lgpd/", "/setores/clinicas-e-saude/"],
  },
  {
    slug: "geo-como-aparecer-nas-ias",
    kind: "guia",
    title: "GEO: como aparecer no ChatGPT, Gemini e Google AI Mode",
    metaTitle: "GEO: Como Aparecer no ChatGPT, Gemini, Claude e Google AI Mode",
    description:
      "O que é GEO (Generative Engine Optimization), como as IAs escolhem quais empresas citar, o que fazer no site e fora dele, e como medir sem promessas vazias.",
    answer:
      "GEO (Generative Engine Optimization) é o conjunto de práticas para que uma empresa seja encontrada e citada nas respostas de assistentes de IA, como ChatGPT, Gemini, Claude, Perplexity e o Google AI Mode. Envolve conteúdo que responde diretamente às perguntas, base técnica impecável, dados estruturados e autoridade de marca fora do site. Não existe citação garantida — mas dá para medir e aumentar a presença.",
    updatedAt: UPDATED,
    readingMinutes: 9,
    sections: [
      {
        id: "o-que-e",
        heading: "O que é GEO e por que importa",
        blocks: [
          { type: "p", text: "Cada vez mais pessoas perguntam a um assistente de IA antes de pesquisar no Google: “qual a melhor clínica para…”, “quanto custa…”, “é seguro…”. Os assistentes montam uma resposta e citam algumas fontes. Quem é citado ganha a confiança e o clique; quem não é, não existe para aquela pergunta." },
          { type: "p", text: "SEO continua sendo a base: boa parte dos assistentes consulta índices de busca (Google, Bing) para montar as respostas. GEO acrescenta a preocupação com ser extraído e citado." },
        ],
      },
      {
        id: "pilares",
        heading: "Os cinco pilares",
        blocks: [
          { type: "ol", items: [
            "Uma intenção por URL: cada página responde a uma pergunta real.",
            "Resposta direta no topo: 40 a 60 palavras dizendo o que é, para quem e qual o resultado.",
            "Conteúdo citável: escopo, prazos e faixas de preço claros.",
            "Autoridade de entidade: quem é a empresa, quem é o fundador e onde mais a marca aparece.",
            "Base técnica: HTML renderizado no servidor, performance e dados estruturados.",
          ] },
        ],
      },
      {
        id: "tecnico",
        heading: "O que fazer no site",
        blocks: [
          { type: "ul", items: [
            "Liberar no robots.txt os robôs de busca das IAs (OAI-SearchBot, Claude-SearchBot, PerplexityBot), além de Googlebot e Bingbot.",
            "Decidir conscientemente sobre os robôs de treinamento (GPTBot, ClaudeBot, Google-Extended).",
            "Publicar dados estruturados (Organization, Service, FAQPage, Article, BreadcrumbList).",
            "Publicar um llms.txt com o resumo da empresa e links principais — boa prática, sem garantia de efeito.",
            "Garantir que o conteúdo esteja no HTML, sem depender de JavaScript para aparecer.",
            "Enviar o sitemap ao Google Search Console e ao Bing Webmaster Tools, com IndexNow.",
          ] },
        ],
      },
      {
        id: "fora-do-site",
        heading: "O que fazer fora do site",
        blocks: [
          { type: "ul", items: [
            "Google Business Profile completo, com avaliações reais de clientes.",
            "Perfis da empresa e do fundador no LinkedIn, com publicações consistentes.",
            "Presença em diretórios do setor com dados idênticos (nome, endereço, telefone).",
            "Menções em artigos, podcasts e eventos do setor.",
          ] },
        ],
      },
      {
        id: "medir",
        heading: "Como medir (e o que nunca prometer)",
        blocks: [
          { type: "p", text: "As IAs variam as respostas, então ninguém pode garantir posição ou citação. O que se mede é tendência: um conjunto fixo de perguntas, repetido todo mês, com a porcentagem de respostas que citam a marca." },
          { type: "ul", items: [
            "Impressões e cliques orgânicos (Search Console).",
            "Visitas vindas de assistentes de IA (GA4).",
            "% de citações em um conjunto fixo de perguntas.",
            "Leads orgânicos.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "GEO substitui o SEO?", a: "Não. GEO se apoia no SEO. Sem uma base técnica e de conteúdo sólida, dificilmente a marca é citada." },
      { q: "Em quanto tempo aparecem resultados?", a: "Os ajustes técnicos têm efeito em semanas; autoridade e conteúdo são trabalho de meses. Por isso os planos mensais têm contrato mínimo de 6 meses." },
      { q: "O llms.txt garante citação?", a: "Não. É uma boa prática de baixo custo, mas os grandes provedores não garantem que o utilizam." },
    ],
    related: ["/servicos/seo-e-geo/", "/servicos/seo-e-geo/auditoria-visibilidade-ia/", "/ferramentas/teste-visibilidade-ia/", "/conteudo/glossario/geo/"],
  },
  {
    slug: "ia-para-clinicas",
    kind: "guia",
    title: "IA para clínicas: agendamento, WhatsApp e LGPD",
    metaTitle: "IA para Clínicas: Agendamento no WhatsApp, Menos Faltas e LGPD",
    description:
      "Como clínicas e consultórios usam IA para agendar, confirmar e reduzir faltas pelo WhatsApp, o que a IA pode e não pode responder e como cumprir a LGPD com dados de saúde.",
    answer:
      "Clínicas usam IA principalmente para agendar, confirmar e remarcar consultas pelo WhatsApp, responder dúvidas administrativas 24 horas por dia e reduzir faltas com lembretes. A IA cuida do administrativo e nunca faz orientação clínica. Como dados de saúde são sensíveis na LGPD, o projeto precisa de base legal, controle de acesso, registro de uso e provedores que não retêm dados.",
    updatedAt: UPDATED,
    readingMinutes: 8,
    sections: [
      {
        id: "onde-ajuda",
        heading: "Onde a IA ajuda uma clínica",
        blocks: [
          { type: "ul", items: [
            "Agendamento e remarcação pelo WhatsApp, consultando a agenda real de cada profissional.",
            "Confirmação ativa e lembretes na véspera, com oferta da vaga para a lista de espera quando alguém desmarca.",
            "Respostas sobre convênios, preparo de exames, endereço, valores e documentos necessários.",
            "Atendimento à noite e no fim de semana, quando a recepção está fechada.",
            "Leitura de guias, autorizações e documentos, com lançamento no sistema.",
          ] },
          { type: "p", text: "O ganho mais rápido costuma estar no agendamento: é um processo repetitivo, de alto volume e com impacto direto na receita, porque cada horário vazio é faturamento perdido." },
        ],
      },
      {
        id: "limites",
        heading: "O que a IA não deve fazer",
        blocks: [
          { type: "p", text: "Um agente de atendimento de clínica é administrativo. Ele não diagnostica, não interpreta exames e não orienta tratamento. Quando a conversa entra em tema clínico, o agente transfere para a equipe, com o histórico completo." },
          { type: "callout", title: "Regra de ouro", text: "Tudo o que exige julgamento clínico vai para um profissional. A IA organiza a fila, não substitui o cuidado." },
        ],
      },
      {
        id: "lgpd",
        heading: "LGPD para dados de saúde",
        blocks: [
          { type: "p", text: "Dados de saúde são dados pessoais sensíveis na LGPD (Lei nº 13.709/2018), com regras mais rígidas de tratamento. Na prática, o projeto precisa de:" },
          { type: "ol", items: [
            "Base legal definida para cada uso dos dados, com consentimento quando necessário.",
            "Conta do WhatsApp, agenda e histórico em nome da clínica.",
            "Controle de acesso: cada pessoa vê só o que precisa.",
            "Registro de uso para auditoria.",
            "Provedores de IA com contrato de não retenção de dados ou IA privada.",
          ] },
        ],
      },
      {
        id: "comunicacao",
        heading: "Comunicação e regras do conselho",
        blocks: [
          { type: "p", text: "A comunicação da clínica, inclusive a feita pelo agente, segue as regras de publicidade do conselho profissional (CFM, CFO e outros). Por isso, os roteiros e as respostas do agente são validados por um profissional da clínica antes de irem ao ar." },
        ],
      },
      {
        id: "medir",
        heading: "Como medir o resultado",
        blocks: [
          { type: "table", head: ["Indicador", "Como medir"], rows: [
            ["Taxa de faltas", "Consultas não comparecidas ÷ consultas marcadas, antes e depois"],
            ["Ocupação da agenda", "Horários preenchidos ÷ horários disponíveis"],
            ["Agendamentos fora do horário", "Consultas marcadas à noite e no fim de semana"],
            ["Horas de recepção liberadas", "Tempo gasto com confirmações e dúvidas repetitivas"],
          ] },
        ],
      },
    ],
    faq: [
      { q: "O paciente sabe que fala com uma IA?", a: "Deve saber. O agente se apresenta como assistente virtual e o paciente pode pedir para falar com a recepção a qualquer momento." },
      { q: "Funciona com o meu sistema de agenda?", a: "Se o sistema tem API, a integração é direta. Se não tem, o Google Agenda pode servir de ponte. Isso é avaliado no Diagnóstico." },
      { q: "Quanto custa?", a: "O módulo de Agendamento Inteligente parte de R$ 3.500 e o Agente de IA para WhatsApp de R$ 7.500, com sustentação mensal." },
    ],
    related: [
      "/setores/clinicas-e-saude/",
      "/solucoes/atendimento-inteligente/agendamento-inteligente/",
      "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
      "/conteudo/guias/ia-e-lgpd/",
    ],
  },
  {
    slug: "ia-para-escritorios-de-advocacia",
    kind: "guia",
    title: "IA para escritórios de advocacia: o que pode e o que não pode",
    metaTitle: "IA para Escritórios de Advocacia: Atendimento, Documentos e Regras da OAB",
    description:
      "Como escritórios usam IA em atendimento, triagem, documentos e pesquisa, respeitando o Código de Ética e as regras de publicidade da OAB e protegendo os dados dos clientes.",
    answer:
      "Escritórios de advocacia usam IA para acolher e triar contatos 24 horas por dia, agendar consultas, gerar documentos padrão e pesquisar no próprio acervo. Pelas regras da OAB, o agente não pode captar clientes indevidamente, prometer resultado nem dar parecer jurídico: ele organiza o atendimento e o advogado assume o caso. Dados de clientes pedem IA privada ou provedores sem retenção.",
    updatedAt: UPDATED,
    readingMinutes: 8,
    sections: [
      {
        id: "usos",
        heading: "Onde a IA gera retorno no escritório",
        blocks: [
          { type: "ul", items: [
            "Acolhimento e triagem inicial de quem procura o escritório, inclusive à noite.",
            "Agendamento de consultas com o advogado da área certa.",
            "Geração de contratos, procurações e peças padrão a partir de modelos.",
            "Onboarding de clientes: coleta de documentos, pastas e cadastro automáticos.",
            "Pesquisa no acervo de peças e pareceres do próprio escritório.",
          ] },
        ],
      },
      {
        id: "oab",
        heading: "O que as regras da OAB exigem",
        blocks: [
          { type: "p", text: "O Código de Ética e Disciplina e o Provimento nº 205/2021, que trata da publicidade na advocacia, continuam valendo quando a comunicação é feita por um agente de IA. Na prática:" },
          { type: "ul", items: [
            "Sem captação indevida: o agente atende quem procurou o escritório; não aborda terceiros.",
            "Sem promessa de resultado e sem mercantilização da advocacia.",
            "Sem parecer jurídico automático: orientação é papel do advogado.",
            "Conteúdos e roteiros validados por um advogado do escritório antes de irem ao ar.",
          ] },
          { type: "callout", text: "Este guia é informativo e não substitui a análise do próprio escritório sobre as normas da OAB aplicáveis ao seu caso." },
        ],
      },
      {
        id: "sigilo",
        heading: "Sigilo e dados dos clientes",
        blocks: [
          { type: "p", text: "Colar dados de clientes em ferramentas públicas de IA expõe o escritório. O caminho seguro é usar provedores corporativos com contrato de não retenção ou IA privada, com controle de acesso por área e registro de uso." },
        ],
      },
      {
        id: "comecar",
        heading: "Por onde começar",
        blocks: [
          { type: "ol", items: [
            "Triagem e agendamento: libera horas dos advogados já no primeiro mês.",
            "Documentos padrão: contratos e procurações gerados a partir de modelos.",
            "Acervo: pesquisa com IA privada sobre peças e pareceres anteriores.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "Um agente de IA pode responder dúvidas jurídicas?", a: "Não deve dar parecer. Ele acolhe, organiza as informações e agenda; a orientação jurídica é do advogado." },
      { q: "A IA pode redigir peças?", a: "Pode gerar rascunhos a partir do acervo e de modelos, sempre revisados por um advogado, de preferência em ambiente de IA privada." },
      { q: "Quanto custa?", a: "Agente de WhatsApp a partir de R$ 7.500, automação de documentos a partir de R$ 12.000 e IA privada a partir de R$ 20.000." },
    ],
    related: [
      "/setores/escritorios-de-advocacia/",
      "/solucoes/vendas-e-receita/sdr-com-ia/",
      "/solucoes/operacoes/automacao-de-documentos/",
      "/solucoes/ia-corporativa/ia-privada/",
    ],
  },
  {
    slug: "ia-para-imobiliarias",
    kind: "guia",
    title: "IA para imobiliárias: atendimento de leads, visitas e CRM",
    metaTitle: "IA para Imobiliárias: Leads dos Portais, Visitas e Follow-up no WhatsApp",
    description:
      "Como imobiliárias usam IA para responder leads dos portais em segundos, qualificar o perfil do interessado, agendar visitas e manter o follow-up, com CRM e LGPD.",
    answer:
      "Imobiliárias usam IA principalmente para responder em segundos a quem chama pelos anúncios, tirar dúvidas sobre cada imóvel com dados do catálogo, qualificar o perfil do interessado e agendar a visita com o corretor. O agente cuida do primeiro atendimento e do follow-up; o corretor conduz visita e negociação. Tudo fica registrado no CRM, com mensagens ativas só para quem consentiu.",
    updatedAt: UPDATED,
    readingMinutes: 7,
    sections: [
      {
        id: "onde-ajuda",
        heading: "Onde a IA ajuda uma imobiliária",
        blocks: [
          { type: "ul", items: [
            "Primeira resposta imediata aos leads dos portais, do site e das redes sociais.",
            "Dúvidas sobre valor, condomínio, IPTU, metragem e disponibilidade, com dados do catálogo.",
            "Qualificação do perfil: região, faixa de preço, quartos, financiamento e prazo.",
            "Sugestão de imóveis parecidos quando o anunciado não serve.",
            "Agendamento da visita na agenda do corretor responsável, com lembrete.",
            "Follow-up depois da visita e reativação quando entra um imóvel com o perfil do cliente.",
          ] },
          { type: "p", text: "O ganho mais rápido costuma estar na velocidade da primeira resposta: quem pesquisa imóveis chama várias imobiliárias ao mesmo tempo, e a primeira a responder bem tende a levar a visita." },
        ],
      },
      {
        id: "corretor",
        heading: "O papel do corretor continua central",
        blocks: [
          { type: "p", text: "O agente não negocia nem fecha contrato. Ele organiza a fila: responde o básico, entende o que o cliente procura e entrega ao corretor um lead qualificado, com o resumo da conversa. O corretor passa a dedicar tempo a quem tem perfil e intenção." },
          { type: "callout", title: "Regra prática", text: "Pergunta com resposta no catálogo, o agente responde. Negociação, proposta e condição especial, o corretor assume." },
        ],
      },
      {
        id: "regras",
        heading: "LGPD e regras do mercado imobiliário",
        blocks: [
          { type: "ol", items: [
            "Atender quem procurou a imobiliária; mensagens ativas só para quem consentiu, com opção de sair.",
            "Informar valores e condições a partir do anúncio oficial, sem promessas fora dele.",
            "Manter a identificação da imobiliária e do registro no CRECI na comunicação.",
            "Usar a API oficial do WhatsApp, com a conta em nome da imobiliária.",
            "Guardar o histórico no CRM, com acesso controlado por corretor.",
          ] },
          { type: "callout", text: "Este guia é informativo e não substitui a orientação do CRECI da sua região nem a análise jurídica da imobiliária." },
        ],
      },
      {
        id: "medir",
        heading: "Como medir o resultado",
        blocks: [
          { type: "table", head: ["Indicador", "Como medir"], rows: [
            ["Tempo até a primeira resposta", "Minutos entre a chegada do lead e a primeira mensagem"],
            ["Visitas agendadas", "Visitas marcadas ÷ leads recebidos, antes e depois"],
            ["Leads qualificados por corretor", "Leads dentro do perfil entregues a cada corretor"],
            ["Atendimentos fora do horário", "Conversas iniciadas à noite e no fim de semana"],
          ] },
        ],
      },
    ],
    faq: [
      { q: "O agente sabe responder sobre cada imóvel?", a: "Sim, quando está conectado ao catálogo da imobiliária (site, CRM imobiliário ou planilha). Pergunta que foge do catálogo vai para o corretor." },
      { q: "Funciona com os leads dos portais?", a: "Sim, desde que o portal ou o CRM permitam encaminhar os leads por integração. Isso é avaliado no Diagnóstico." },
      { q: "Quanto custa?", a: "Agente de IA para WhatsApp a partir de R$ 7.500, SDR com IA a partir de R$ 15.000 e CRM e pipeline a partir de R$ 5.000." },
    ],
    related: [
      "/setores/imobiliarias/",
      "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
      "/solucoes/vendas-e-receita/sdr-com-ia/",
      "/solucoes/vendas-e-receita/crm-e-pipeline/",
    ],
  },
  {
    slug: "ia-para-contabilidade",
    kind: "guia",
    title: "IA para contabilidade: documentos, obrigações e atendimento",
    metaTitle: "IA para Contabilidade: Leitura de Documentos, Cobrança e Atendimento",
    description:
      "Como escritórios de contabilidade usam IA para ler notas e documentos, cobrar o que falta dos clientes, responder dúvidas repetidas e organizar o conhecimento da equipe, com sigilo e LGPD.",
    answer:
      "Escritórios de contabilidade usam IA para ler notas, extratos e guias e lançar os dados no sistema, cobrar dos clientes os documentos que faltam antes dos prazos, responder dúvidas repetidas pelo WhatsApp e dar à equipe acesso rápido aos procedimentos internos. Exceções vão para revisão humana, e dados fiscais pedem provedores sem retenção ou IA privada.",
    updatedAt: UPDATED,
    readingMinutes: 7,
    sections: [
      {
        id: "onde-ajuda",
        heading: "Onde a IA ajuda um escritório contábil",
        blocks: [
          { type: "ul", items: [
            "Leitura de notas fiscais, extratos, guias e recibos, com extração dos campos e lançamento no sistema.",
            "Cobrança automática dos documentos pendentes de cada cliente, com lembretes antes do prazo.",
            "Atendimento no WhatsApp para segunda via, prazos, status e envio de documentos.",
            "Agente de conhecimento interno: procedimentos, obrigações e particularidades de cada cliente, com a fonte citada.",
            "Relatórios periódicos para os clientes montados automaticamente.",
          ] },
          { type: "p", text: "O ganho mais rápido costuma estar na coleta de documentos: é o gargalo que atrasa todo o resto do fechamento." },
        ],
      },
      {
        id: "revisao",
        heading: "Automação com revisão, não no escuro",
        blocks: [
          { type: "p", text: "A extração de dados de documentos é validada por regras (CNPJ, valores, datas, totais). O que não fecha vai para uma fila de revisão da equipe, e nada incerto é lançado automaticamente. Assim, o escritório ganha velocidade sem abrir mão do controle." },
          { type: "callout", title: "Em uma frase", text: "A IA digita e confere; o contador decide e orienta." },
        ],
      },
      {
        id: "sigilo",
        heading: "Sigilo profissional e LGPD",
        blocks: [
          { type: "p", text: "O escritório lida com dados fiscais, financeiros e de funcionários dos clientes. Colar esses dados em ferramentas públicas de IA expõe o escritório. O caminho seguro inclui:" },
          { type: "ol", items: [
            "Provedores de IA com contrato de não retenção de dados, ou IA privada.",
            "Controle de acesso por carteira de clientes.",
            "Registro de quem consultou o quê.",
            "Contas e automações em nome do escritório, com cláusula de saída.",
          ] },
        ],
      },
      {
        id: "comecar",
        heading: "Por onde começar",
        blocks: [
          { type: "ol", items: [
            "Cobrança de documentos: reduz a correria antes de cada prazo.",
            "Leitura de documentos: devolve horas de digitação à equipe.",
            "Agente de conhecimento: acelera a integração de colaboradores novos.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "A IA substitui o sistema contábil?", a: "Não. Ela trabalha em volta do sistema que o escritório já usa, por integração ou importação de arquivos." },
      { q: "O agente pode responder dúvidas tributárias dos clientes?", a: "Ele responde sobre prazos, documentos e status. Orientação tributária é papel do contador, e o agente transfere a conversa." },
      { q: "Quanto custa?", a: "Automação de documentos a partir de R$ 12.000, agente de conhecimento a partir de R$ 10.000 e automação de processos a partir de R$ 4.000." },
    ],
    related: [
      "/setores/contabilidade/",
      "/solucoes/operacoes/automacao-de-documentos/",
      "/solucoes/operacoes/agente-de-conhecimento/",
      "/conteudo/glossario/ocr/",
    ],
  },
  {
    slug: "ia-para-e-commerce",
    kind: "guia",
    title: "IA para e-commerce: vendas no WhatsApp, carrinho e pós-venda",
    metaTitle: "IA para E-commerce: Vendas no WhatsApp, Carrinho Abandonado e Pós-venda",
    description:
      "Como lojas on-line usam IA para responder dúvidas de produto, recuperar carrinhos, informar o status dos pedidos e integrar loja, estoque e ERP, dentro do CDC e da LGPD.",
    answer:
      "Lojas on-line usam IA para responder dúvidas de produto, frete e troca em segundos, informar o status dos pedidos, recuperar carrinhos abandonados de quem consentiu em receber mensagens e sincronizar loja, marketplaces, estoque e ERP. O agente envia o link de compra e o pagamento acontece no checkout; trocas e reclamações seguem para a equipe dentro dos prazos do CDC.",
    updatedAt: UPDATED,
    readingMinutes: 7,
    sections: [
      {
        id: "onde-ajuda",
        heading: "Onde a IA ajuda uma loja on-line",
        blocks: [
          { type: "ul", items: [
            "Dúvidas antes da compra: tamanho, especificações, estoque, prazo e frete.",
            "Status do pedido e rastreio, consultados direto na plataforma.",
            "Recuperação de carrinho e pós-venda para quem consentiu em receber mensagens.",
            "Atendimento em picos sazonais sem ampliar a equipe na mesma proporção.",
            "Integração entre loja, marketplaces, estoque, ERP e emissão de nota.",
          ] },
          { type: "p", text: "O ganho mais rápido costuma estar nas perguntas de status de pedido, que ocupam boa parte do atendimento e têm resposta no próprio sistema." },
        ],
      },
      {
        id: "venda",
        heading: "O que o agente faz e o que fica com a equipe",
        blocks: [
          { type: "table", head: ["O agente de IA", "A equipe"], rows: [
            ["Responde dúvidas com dados da loja", "Casos fora da política"],
            ["Confere estoque e frete", "Negociações especiais e B2B"],
            ["Envia o link de compra", "Trocas, devoluções e reclamações"],
            ["Informa status e rastreio", "Problemas de entrega e extravio"],
          ] },
        ],
      },
      {
        id: "regras",
        heading: "CDC, comércio eletrônico e LGPD",
        blocks: [
          { type: "ol", items: [
            "Mensagens ativas, como carrinho abandonado, só com consentimento e opção de sair.",
            "Preço, prazo e condições informados a partir da loja, iguais aos do site.",
            "Trocas, arrependimento e reclamações respeitando os prazos do Código de Defesa do Consumidor.",
            "API oficial do WhatsApp, sem disparos em massa para listas compradas.",
            "Dados de clientes e pedidos em nome da loja, com acesso controlado.",
          ] },
          { type: "callout", text: "Este guia é informativo e não substitui a análise jurídica da sua operação." },
        ],
      },
      {
        id: "medir",
        heading: "Como medir o resultado",
        blocks: [
          { type: "table", head: ["Indicador", "Como medir"], rows: [
            ["Conversas que viram pedido", "Pedidos com origem no WhatsApp ÷ conversas de pré-venda"],
            ["Carrinhos recuperados", "Carrinhos retomados após a mensagem ÷ carrinhos contatados"],
            ["Tempo de resposta", "Minutos até a primeira resposta, inclusive em datas de pico"],
            ["Atendimentos resolvidos sem humano", "Conversas encerradas pelo agente ÷ total"],
          ] },
        ],
      },
    ],
    faq: [
      { q: "Funciona com a minha plataforma?", a: "Integramos com plataformas que oferecem API, como Shopify, WooCommerce, Nuvemshop e VTEX. Confirmamos a sua no Diagnóstico." },
      { q: "Posso mandar mensagem de carrinho abandonado para todos?", a: "Não. Só para quem consentiu em receber mensagens, sempre com opção de sair." },
      { q: "Quanto custa?", a: "Agente de IA para WhatsApp a partir de R$ 7.500, funis automatizados a partir de R$ 4.000 e integração de sistemas a partir de R$ 4.000." },
    ],
    related: [
      "/setores/e-commerce/",
      "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
      "/solucoes/vendas-e-receita/funis-automatizados/",
      "/solucoes/operacoes/integracao-de-sistemas/",
    ],
  },
  {
    slug: "ia-para-escolas",
    kind: "guia",
    title: "IA para escolas: matrículas, secretaria e cobrança com LGPD",
    metaTitle: "IA para Escolas: Matrículas no WhatsApp, Secretaria e Cobrança com LGPD",
    description:
      "Como escolas e cursos usam IA para atender interessados em matrícula, desafogar a secretaria e fazer cobrança respeitosa, com as regras da LGPD para dados de alunos e menores.",
    answer:
      "Escolas e cursos usam IA para atender famílias interessadas em matrícula a qualquer hora, agendar visitas, responder às dúvidas da secretaria (calendário, documentos, boletos) e fazer uma cobrança regular e respeitosa pelo WhatsApp. Como a LGPD protege de forma especial os dados de crianças e adolescentes, o projeto trata essas informações no melhor interesse do aluno, com consentimento dos responsáveis quando exigido.",
    updatedAt: UPDATED,
    readingMinutes: 7,
    sections: [
      {
        id: "onde-ajuda",
        heading: "Onde a IA ajuda uma escola",
        blocks: [
          { type: "ul", items: [
            "Atendimento de interessados em matrícula, inclusive à noite e no fim de semana.",
            "Agendamento de visitas e entrevistas com a coordenação.",
            "Secretaria no WhatsApp: calendário, horários, documentos, declarações e segunda via.",
            "Régua de cobrança amigável, com lembretes antes do vencimento e negociação dentro de regras aprovadas.",
            "Rematrícula com coleta de documentos e contratos automatizada.",
          ] },
          { type: "p", text: "O ganho mais rápido costuma estar no período de matrículas: as famílias pesquisam várias escolas ao mesmo tempo e a velocidade da resposta pesa na escolha da visita." },
        ],
      },
      {
        id: "limites",
        heading: "O que fica sempre com a equipe",
        blocks: [
          { type: "p", text: "Temas pedagógicos, disciplinares, de saúde ou de inclusão não são tratados pelo agente. Nessas situações, ele transfere a conversa para a coordenação ou a secretaria, com o histórico, para que a família não precise repetir tudo." },
          { type: "callout", title: "Regra de ouro", text: "A IA organiza a informação e a agenda. Tudo o que envolve o desenvolvimento e o bem-estar do aluno é conversa entre pessoas." },
        ],
      },
      {
        id: "lgpd",
        heading: "LGPD para dados de alunos e menores",
        blocks: [
          { type: "p", text: "A LGPD (Lei nº 13.709/2018) exige que dados de crianças e adolescentes sejam tratados no melhor interesse deles e, no caso de crianças, com consentimento específico de pelo menos um dos pais ou responsável quando o consentimento for a base legal. Na prática:" },
          { type: "ol", items: [
            "O agente conversa com os responsáveis, não com crianças.",
            "Base legal definida para cada uso dos dados, com consentimento quando exigido.",
            "Coleta só do necessário para cada finalidade.",
            "Controle de acesso por função e registro de uso.",
            "Provedores de IA com contrato de não retenção de dados.",
          ] },
          { type: "callout", text: "Este guia é informativo e não substitui a análise jurídica da instituição." },
        ],
      },
      {
        id: "cobranca",
        heading: "Cobrança sem constrangimento",
        blocks: [
          { type: "p", text: "O Código de Defesa do Consumidor proíbe expor ao ridículo ou constranger quem está em atraso. Uma régua automática ajuda justamente nisso: mensagens regulares, respeitosas e privadas, com segunda via e opções de negociação aprovadas pela escola. Casos delicados vão para a secretaria." },
        ],
      },
    ],
    faq: [
      { q: "O agente conversa com os alunos?", a: "Na educação básica, com pais e responsáveis. Em cursos livres e no ensino superior, pode atender o próprio aluno maior de idade." },
      { q: "Funciona com o sistema de gestão escolar?", a: "Se o sistema tem API, a integração é direta. Se não tem, dá para começar pelo atendimento de matrículas e pela cobrança com base em planilha." },
      { q: "Quanto custa?", a: "Agente de IA para WhatsApp a partir de R$ 7.500, agendamento inteligente a partir de R$ 3.500 e automação de processos a partir de R$ 4.000." },
    ],
    related: [
      "/setores/educacao/",
      "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
      "/solucoes/operacoes/automacao-de-processos/",
      "/conteudo/guias/ia-e-lgpd/",
    ],
  },
];

export const comparisons: Article[] = [
  {
    slug: "agente-de-ia-vs-chatbot",
    kind: "comparativo",
    title: "Agente de IA vs chatbot tradicional",
    metaTitle: "Agente de IA vs Chatbot Tradicional: Diferenças e Quando Usar Cada Um",
    description: "As diferenças entre um agente de IA e um chatbot de menu: como entendem o cliente, o que conseguem fazer, custos e quando cada um faz sentido.",
    answer:
      "O chatbot tradicional segue um roteiro fixo de menus e palavras-chave; o agente de IA entende linguagem natural, consulta a base de conhecimento da empresa e executa ações em outros sistemas. O chatbot serve para fluxos simples e previsíveis; o agente, para atendimento real, com perguntas variadas, agendamento, qualificação e integração.",
    updatedAt: UPDATED,
    readingMinutes: 5,
    sections: [
      {
        id: "tabela",
        heading: "Comparativo lado a lado",
        blocks: [
          { type: "table", head: ["Critério", "Chatbot tradicional", "Agente de IA"], rows: [
            ["Como entende o cliente", "Menus e palavras-chave", "Linguagem natural e contexto"],
            ["Perguntas fora do roteiro", "Trava ou repete o menu", "Responde com base no conhecimento da empresa"],
            ["Ações em sistemas", "Limitadas e pré-programadas", "Agenda, registra no CRM, gera documentos"],
            ["Transbordo para humano", "Geralmente por opção de menu", "Por regra: pedido, tema sensível, baixa confiança"],
            ["Manutenção", "Cada novo fluxo precisa ser desenhado", "Atualiza-se a base de conhecimento"],
            ["Experiência do cliente", "Previsível, porém engessada", "Conversa natural"],
          ] },
        ],
      },
      {
        id: "quando",
        heading: "Quando usar cada um",
        blocks: [
          { type: "ul", items: [
            "Chatbot: fluxos curtos e fechados, como emitir segunda via ou escolher um setor.",
            "Agente de IA: atendimento com perguntas variadas, vendas, agendamento e qualquer caso em que o cliente escreve do jeito dele.",
            "Os dois juntos: muitas operações usam botões para atalhos e o agente para todo o resto.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "O agente de IA é mais caro?", a: "A implantação costuma ser maior, mas a manutenção é mais simples e o retorno é maior porque resolve mais conversas sem humano." },
      { q: "Dá para migrar do chatbot para um agente?", a: "Sim, mantendo o número e aproveitando o conteúdo que já existe." },
    ],
    related: ["/solucoes/atendimento-inteligente/agente-ia-whatsapp/", "/conteudo/guias/agentes-de-ia-para-empresas/", "/conteudo/glossario/agente-de-ia/"],
  },
  {
    slug: "api-oficial-vs-nao-oficial-whatsapp",
    kind: "comparativo",
    title: "API oficial vs API não oficial do WhatsApp",
    metaTitle: "API Oficial vs Não Oficial do WhatsApp: Riscos, Custos e Diferenças",
    description: "Diferenças entre a API oficial do WhatsApp Business e as ferramentas não oficiais: risco de banimento, custos, estabilidade e LGPD.",
    answer:
      "A API oficial do WhatsApp Business é fornecida pela Meta, cobra por mensagem e oferece estabilidade, número verificado e segurança contra banimento. As APIs não oficiais simulam o aplicativo, parecem mais baratas, mas violam os termos de uso e colocam o número em risco de bloqueio. Para uma empresa que depende do WhatsApp, a oficial é o único caminho sustentável.",
    updatedAt: UPDATED,
    readingMinutes: 4,
    sections: [
      {
        id: "tabela",
        heading: "Comparativo lado a lado",
        blocks: [
          { type: "table", head: ["Critério", "API oficial (Meta)", "API não oficial"], rows: [
            ["Risco de banimento", "Mínimo, seguindo as regras", "Alto: viola os termos de uso"],
            ["Custo", "Por mensagem de modelo, pago à Meta", "Mensalidade menor, custo oculto do risco"],
            ["Estabilidade", "Infraestrutura da Meta", "Depende de sessão no celular ou navegador"],
            ["Várias pessoas atendendo", "Sim, por painel", "Limitado"],
            ["Integração com IA e CRM", "Nativa via API", "Instável"],
            ["LGPD e auditoria", "Conta e dados em nome da empresa", "Dados passam por terceiros sem garantia"],
          ] },
        ],
      },
      {
        id: "recomendacao",
        heading: "Nossa recomendação",
        blocks: [
          { type: "p", text: "Trabalhamos somente com a API oficial. O canal pelo qual seus clientes falam com você não pode depender de uma ferramenta que pode ser bloqueada a qualquer momento." },
        ],
      },
    ],
    faq: [
      { q: "A API oficial é muito mais cara?", a: "Respostas dentro da janela de atendimento de 24 horas não são cobradas. O custo aparece principalmente em mensagens ativas de marketing." },
      { q: "Consigo migrar sem perder o número?", a: "Sim, o número pode ser migrado para a API oficial." },
    ],
    related: ["/conteudo/guias/ia-no-whatsapp/", "/solucoes/atendimento-inteligente/agente-ia-whatsapp/", "/conteudo/glossario/api-oficial-do-whatsapp/"],
  },
  {
    slug: "plataforma-pronta-vs-agente-sob-medida",
    kind: "comparativo",
    title: "Plataforma pronta vs agente sob medida",
    metaTitle: "Plataforma de Chatbot Pronta vs Agente de IA Sob Medida: Qual Escolher",
    description: "Quando uma plataforma pronta de atendimento com IA basta e quando vale investir em um agente sob medida, integrado aos seus sistemas.",
    answer:
      "Plataformas prontas são rápidas de começar e custam uma mensalidade, mas limitam integrações e regras de negócio. Um agente sob medida custa uma implantação, se integra aos seus sistemas do jeito que eles são e segue as suas regras. A plataforma pronta serve para casos simples; o sob medida, quando o atendimento depende de agenda, CRM, ERP ou regras específicas.",
    updatedAt: UPDATED,
    readingMinutes: 4,
    sections: [
      {
        id: "tabela",
        heading: "Comparativo lado a lado",
        blocks: [
          { type: "table", head: ["Critério", "Plataforma pronta", "Agente sob medida"], rows: [
            ["Tempo para começar", "Dias", "2 a 3 semanas"],
            ["Custo", "Mensalidade por usuário ou conversa", "Implantação + sustentação"],
            ["Integrações", "As que a plataforma oferece", "Com os seus sistemas, inclusive legados"],
            ["Regras de negócio", "Genéricas", "As da sua empresa"],
            ["Propriedade", "Dados na plataforma", "Contas e dados em nome da empresa"],
          ] },
        ],
      },
      {
        id: "quando",
        heading: "Como decidir",
        blocks: [
          { type: "ul", items: [
            "Volume baixo, perguntas simples e nenhuma integração: comece por uma plataforma pronta.",
            "Atendimento que agenda, consulta sistemas ou qualifica leads: agente sob medida.",
            "Dúvida? O Diagnóstico compara o custo total das duas opções para o seu caso.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "Vocês trabalham com plataformas prontas?", a: "Sim, quando é a melhor opção para o cliente. Muitas vezes combinamos uma plataforma de atendimento com um agente sob medida." },
    ],
    related: ["/solucoes/atendimento-inteligente/agente-ia-whatsapp/", "/solucoes/atendimento-inteligente/central-multicanal/", "/diagnostico/"],
  },
  {
    slug: "n8n-vs-make-vs-zapier",
    kind: "comparativo",
    title: "n8n vs Make vs Zapier para empresas",
    metaTitle: "n8n vs Make vs Zapier: Qual Ferramenta de Automação Escolher",
    description: "Comparativo entre n8n, Make e Zapier para automação empresarial: modelo de cobrança, hospedagem, controle de dados e quando usar cada um.",
    answer:
      "Zapier é o mais simples e tem o maior catálogo de integrações, mas fica caro em volume. Make oferece fluxos visuais mais flexíveis a um custo menor por operação. O n8n pode ser hospedado pela própria empresa, o que dá controle total dos dados e custo previsível em alto volume, além de lidar bem com agentes de IA. Para empresas com dados sensíveis e automações críticas, o n8n costuma ser a melhor escolha.",
    updatedAt: UPDATED,
    readingMinutes: 5,
    sections: [
      {
        id: "tabela",
        heading: "Comparativo lado a lado",
        blocks: [
          { type: "table", head: ["Critério", "Zapier", "Make", "n8n"], rows: [
            ["Facilidade", "Muito alta", "Alta", "Média (ideal com apoio técnico)"],
            ["Cobrança", "Por tarefa", "Por operação/crédito", "Por execução na nuvem ou servidor próprio"],
            ["Hospedagem própria", "Não", "Não", "Sim"],
            ["Controle dos dados", "Na plataforma", "Na plataforma", "Total, se hospedado pela empresa"],
            ["Custo em alto volume", "Alto", "Médio", "Previsível"],
            ["Agentes de IA", "Recursos básicos", "Bons recursos", "Recursos avançados"],
          ] },
        ],
      },
      {
        id: "quando",
        heading: "Quando usar cada um",
        blocks: [
          { type: "ul", items: [
            "Zapier: automações simples, poucas execuções, equipe sem apoio técnico.",
            "Make: fluxos visuais mais elaborados com custo moderado.",
            "n8n: automações críticas, alto volume, dados sensíveis e agentes de IA.",
          ] },
          { type: "callout", text: "Preços e limites mudam com frequência. Consulte as páginas oficiais de cada ferramenta antes de decidir." },
        ],
      },
    ],
    faq: [
      { q: "Qual vocês usam?", a: "Principalmente n8n, pela flexibilidade e pelo controle dos dados. Usamos Make ou Zapier quando o cliente já tem os fluxos lá e faz sentido manter." },
      { q: "Em nome de quem fica a conta?", a: "Sempre da sua empresa, com cláusula de saída." },
    ],
    related: ["/solucoes/operacoes/automacao-de-processos/", "/solucoes/operacoes/integracao-de-sistemas/", "/conteudo/guias/agentes-de-ia-para-empresas/"],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const articleHref = (a: Pick<Article, "kind" | "slug">) =>
  a.kind === "guia" ? `/conteudo/guias/${a.slug}/` : `/conteudo/comparativos/${a.slug}/`;
