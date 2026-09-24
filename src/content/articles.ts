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
