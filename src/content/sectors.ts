import type { FAQ, IconName, VisualName } from "./types";

export type Sector = {
  slug: string;
  name: string;
  menuName: string;
  /** Frase curta para cards e menu. */
  cardText: string;
  icon: IconName;
  visual: VisualName;
  /** Título da janela ilustrativa, quando o padrão não combina com o setor. */
  visualTitle?: string;
  title: string;
  metaDescription: string;
  h1: string;
  answer: string;
  painsTitle: string;
  pains: { title: string; text: string }[];
  solutions: { service: string; why: string }[];
  compliance: { label: string; title: string; text: string; points: string[] };
  proofNote: string;
  demoCases: string[];
  /** Demonstração ao vivo no WhatsApp (ver liveDemos em cases.ts). */
  liveDemo?: { label: string; message: string };
  guide: { slug: string; title: string };
  faq: FAQ[];
  cta: string;
};

export const sectors: Sector[] = [
  {
    slug: "escritorios-de-advocacia",
    name: "Escritórios de Advocacia",
    menuName: "Advocacia",
    cardText: "Atendimento e triagem dentro das regras da OAB.",
    icon: "scale",
    visual: "leadscore",
    title: "IA e Automação para Escritórios de Advocacia",
    metaDescription:
      "IA para escritórios de advocacia: atendimento e triagem 24/7, automação de documentos e IA privada para o acervo, dentro das regras da OAB e da LGPD.",
    h1: "IA para escritórios de advocacia, dentro das regras da OAB.",
    answer:
      "Ajudamos escritórios de advocacia a atender e qualificar clientes 24/7, automatizar documentos e usar IA em pesquisa e peças, sempre respeitando o Código de Ética e as regras de publicidade da OAB, com os dados dos clientes sob total controle.",
    painsTitle: "O tempo do advogado é caro demais para triagem.",
    pains: [
      { title: "Triagem de casos sem perfil", text: "Advogados gastando horas em conversas iniciais com casos fora da área de atuação." },
      { title: "Atendimento fora do horário", text: "Quem busca um advogado à noite ou no fim de semana procura outro escritório se não recebe resposta." },
      { title: "Documentos repetitivos", text: "Contratos, procurações e peças padrão montados à mão, com risco de erro." },
      { title: "Acervo que não é reaproveitado", text: "Anos de peças e pareceres que ninguém consegue encontrar quando precisa." },
    ],
    solutions: [
      { service: "sdr-com-ia", why: "Triagem jurídica: entende o caso, verifica a área de atuação e agenda a consulta." },
      { service: "agente-ia-whatsapp", why: "Atendimento inicial 24/7, sem parecer jurídico e sem promessa de resultado." },
      { service: "automacao-de-documentos", why: "Contratos, procurações e peças padrão gerados a partir de modelos." },
      { service: "ia-privada", why: "IA sobre o acervo do escritório sem expor dados de clientes." },
    ],
    compliance: {
      label: "Como respeitamos a OAB",
      title: "Como respeitamos a OAB e a LGPD",
      text: "Tecnologia não muda as regras da profissão. Cada projeto jurídico é desenhado para cumprir o Código de Ética e Disciplina e o Provimento de publicidade da OAB.",
      points: [
        "Sem captação indevida: o agente acolhe quem procurou o escritório, não aborda terceiros.",
        "Sem promessa de resultado nem parecer jurídico automático.",
        "O assistente se apresenta como virtual; o advogado assume o caso.",
        "Um profissional do escritório valida os conteúdos e roteiros antes de irem ao ar.",
        "Dados de clientes sob sigilo, com controle de acesso, logs e opção de IA privada.",
      ],
    },
    proofNote: "Já atendemos escritórios de advocacia em projetos de site e sistemas. Os cenários abaixo são demonstrativos de como aplicamos IA no setor.",
    demoCases: ["sdr-juridico-trabalhista", "assistente-juridico-ia-privada", "onboarding-clientes-advocacia"],
    liveDemo: { label: "o Escritório Demo", message: "Quero testar o Escritório Demo" },
    guide: { slug: "ia-para-escritorios-de-advocacia", title: "IA para escritórios de advocacia: o que pode e o que não pode" },
    faq: [
      { q: "É permitido usar IA no atendimento de um escritório?", a: "Sim, desde que respeite as regras da OAB: sem captação indevida, sem promessa de resultado e com o advogado responsável pelo caso. O agente faz o acolhimento e a triagem; a orientação jurídica é do advogado." },
      { q: "A IA pode redigir peças?", a: "Pode gerar rascunhos a partir do acervo e de modelos, sempre com revisão do advogado. Para isso recomendamos IA privada, sem expor dados de clientes." },
      { q: "Os dados dos meus clientes ficam seguros?", a: "Sim. Contas e dados em nome do escritório, controle de acesso, logs e, quando necessário, IA privada com não retenção de dados." },
      { q: "Funciona com o meu sistema jurídico?", a: "Integramos com os sistemas jurídicos que oferecem API. Avaliamos o seu no Diagnóstico." },
      { q: "Quanto custa?", a: "Agente de WhatsApp a partir de R$ 7.500, SDR/triagem a partir de R$ 15.000, automação de documentos a partir de R$ 12.000 e IA privada a partir de R$ 20.000." },
    ],
    cta: "Vamos mapear onde a IA gera mais retorno no seu escritório?",
  },
  {
    slug: "clinicas-e-saude",
    name: "Clínicas e Saúde",
    menuName: "Saúde",
    cardText: "Agendamento e comunicação com LGPD.",
    icon: "stethoscope",
    visual: "calendar",
    title: "IA e Automação para Clínicas e Saúde",
    metaDescription:
      "IA para clínicas: agendamento, confirmação e redução de faltas pelo WhatsApp, atendimento 24/7 e automação de documentos, com LGPD para dados de saúde.",
    h1: "IA para clínicas, com agenda cheia e dados protegidos.",
    answer:
      "Implantamos agentes de IA que agendam, confirmam e reduzem faltas, além de atender pacientes 24/7 no WhatsApp, sempre com segurança de dados e conformidade com a LGPD. Sua recepção para de correr atrás e sua agenda para de ter buracos.",
    painsTitle: "Horário vazio é receita que não volta.",
    pains: [
      { title: "Faltas", text: "Consultas marcadas que viram horário vazio, sem tempo de oferecer a vaga para outro paciente." },
      { title: "Recepção sobrecarregada", text: "Telefone, WhatsApp e balcão ao mesmo tempo, com as mesmas perguntas o dia todo." },
      { title: "Mensagens sem resposta à noite", text: "Pacientes que escrevem fora do horário e marcam em outra clínica." },
      { title: "Papelada", text: "Guias, autorizações e documentos digitados à mão." },
    ],
    solutions: [
      { service: "agendamento-inteligente", why: "Marca, confirma, remarca e oferece encaixes, integrado à agenda." },
      { service: "agente-ia-whatsapp", why: "Responde sobre convênios, preparo e endereços 24/7, com transbordo para a recepção." },
      { service: "automacao-de-documentos", why: "Guias, autorizações e documentos processados sem digitação." },
      { service: "ia-privada", why: "IA sobre dados de pacientes sem expor informações sensíveis." },
    ],
    compliance: {
      label: "LGPD para dados de saúde",
      title: "LGPD para dados de saúde",
      text: "Dados de saúde são dados pessoais sensíveis na LGPD. Cada projeto é desenhado para tratar essas informações com o cuidado que a lei e os conselhos exigem.",
      points: [
        "O agente não faz diagnóstico nem orientação clínica: casos clínicos vão para a equipe.",
        "Base legal definida para cada tratamento de dados, com consentimento quando necessário.",
        "Controle de acesso, logs e sigilo sobre as informações de pacientes.",
        "Comunicação conforme as regras do conselho profissional (CFM, CFO e outros).",
        "Um profissional da clínica valida os conteúdos e roteiros antes de irem ao ar.",
      ],
    },
    proofNote: "Enquanto publicamos os primeiros cases de IA em saúde, mostramos como aplicamos cada solução em cenários demonstrativos — e você pode testar a Clínica Demo no WhatsApp.",
    demoCases: ["agendamento-clinica-odontologica", "cobranca-amigavel", "geo-clinica-estetica"],
    liveDemo: { label: "a Clínica Demo", message: "Quero testar a Clínica Demo" },
    guide: { slug: "ia-para-clinicas", title: "IA para clínicas: agendamento, WhatsApp e LGPD" },
    faq: [
      { q: "É seguro usar IA no atendimento de uma clínica?", a: "Sim, com API oficial do WhatsApp, dados em nome da clínica, controle de acesso e adequação à LGPD. O agente cuida do administrativo; o clínico fica com a equipe." },
      { q: "O agente responde dúvidas médicas?", a: "Não. Ele responde sobre agenda, convênios, preparo de exames e informações administrativas aprovadas pela clínica. Dúvidas clínicas vão para a equipe." },
      { q: "Funciona com o meu sistema de prontuário ou agenda?", a: "Se o sistema tem API, integramos direto; se não, usamos o Google Agenda como ponte. Avaliamos no Diagnóstico." },
      { q: "Vai reduzir as faltas?", a: "Confirmação ativa e lembretes são uma das formas mais simples de reduzir faltas. Medimos a sua taxa antes e depois." },
      { q: "Quanto custa?", a: "O módulo de Agendamento Inteligente parte de R$ 3.500 e o Agente de IA para WhatsApp de R$ 7.500, com sustentação mensal." },
    ],
    cta: "Vamos descobrir quantos horários sua clínica perde por mês?",
  },
  {
    slug: "imobiliarias",
    name: "Imobiliárias",
    menuName: "Imobiliárias",
    cardText: "Resposta imediata a cada anúncio e visitas agendadas.",
    icon: "house",
    visual: "kanban",
    title: "IA e Automação para Imobiliárias",
    metaDescription:
      "IA para imobiliárias: resposta imediata aos leads dos portais, qualificação do perfil, agendamento de visitas e follow-up automático no WhatsApp, integrados ao CRM.",
    h1: "IA para imobiliárias: nenhum lead de portal sem resposta.",
    answer:
      "Implantamos agentes de IA que respondem em segundos a quem chama pelos anúncios, tiram dúvidas sobre cada imóvel, entendem o perfil do interessado e agendam a visita com o corretor certo. O follow-up acontece sozinho e tudo fica registrado no CRM, com a conta e os dados em nome da imobiliária.",
    painsTitle: "Lead de portal esfria em minutos.",
    pains: [
      { title: "Demora na primeira resposta", text: "Quem pergunta sobre um imóvel costuma chamar várias imobiliárias. Quem responde primeiro leva a visita." },
      { title: "Corretor respondendo o básico", text: "Valor, condomínio, IPTU e disponibilidade repetidos o dia inteiro, em vez de tempo com quem vai comprar." },
      { title: "Follow-up que não acontece", text: "Interessados que somem depois do primeiro contato porque ninguém retomou a conversa." },
      { title: "Leads fora do CRM", text: "Conversas espalhadas no WhatsApp de cada corretor, sem histórico e sem visão da gestão." },
    ],
    solutions: [
      { service: "agente-ia-whatsapp", why: "Responde sobre cada anúncio 24/7, com os dados do catálogo, e transfere para o corretor na hora certa." },
      { service: "sdr-com-ia", why: "Qualifica região, faixa de preço, financiamento e prazo, e agenda a visita com o corretor responsável." },
      { service: "crm-e-pipeline", why: "Todo lead no CRM, distribuído por corretor, com etapas da visita à proposta." },
      { service: "reativacao-de-clientes", why: "Retoma interessados antigos quando entra um imóvel com o perfil deles." },
    ],
    compliance: {
      label: "Como tratamos os dados dos clientes",
      title: "LGPD e boas práticas no atendimento imobiliário",
      text: "Atendimento rápido não pode virar abordagem invasiva. Cada projeto respeita a LGPD e as regras de comunicação do mercado imobiliário.",
      points: [
        "O agente responde a quem procurou a imobiliária; mensagens ativas só para quem consentiu.",
        "Informações de valor e condições vêm do catálogo oficial, sem promessas fora do anúncio.",
        "O assistente se apresenta como virtual e o corretor assume a negociação.",
        "Anúncios e mensagens mantêm a identificação da imobiliária e do CRECI.",
        "Conta do WhatsApp, CRM e histórico em nome da imobiliária, com controle de acesso por corretor.",
      ],
    },
    proofNote: "Os cenários abaixo são demonstrativos de como aplicamos IA no atendimento imobiliário, e você pode testar a Imobiliária Demo no WhatsApp.",
    demoCases: ["pre-atendimento-imobiliario"],
    liveDemo: { label: "a Imobiliária Demo", message: "Quero testar a Imobiliária Demo" },
    guide: { slug: "ia-para-imobiliarias", title: "IA para imobiliárias: atendimento de leads, visitas e CRM" },
    faq: [
      { q: "O agente sabe responder sobre cada imóvel?", a: "Sim. Ele é conectado ao catálogo (site, CRM imobiliário ou planilha) e responde com os dados do anúncio. Quando a pergunta foge do catálogo, transfere para o corretor." },
      { q: "Funciona com os leads dos portais?", a: "Sim. Os leads que chegam pelos portais e pelo site podem ser encaminhados ao agente e ao CRM automaticamente, desde que o portal ou o CRM ofereçam integração." },
      { q: "O corretor perde o contato com o cliente?", a: "Não. O agente faz o primeiro atendimento e a qualificação; o corretor recebe o lead com o resumo da conversa e conduz visita e negociação." },
      { q: "Integra com o meu CRM imobiliário?", a: "Integramos com os CRMs que oferecem API. Se o seu não oferece, avaliamos alternativas no Diagnóstico." },
      { q: "Quanto custa?", a: "Agente de IA para WhatsApp a partir de R$ 7.500, SDR com IA a partir de R$ 15.000 e CRM e pipeline a partir de R$ 5.000, com sustentação mensal." },
    ],
    cta: "Vamos medir quantos leads sua imobiliária perde por demora?",
  },
  {
    slug: "contabilidade",
    name: "Escritórios de Contabilidade",
    menuName: "Contabilidade",
    cardText: "Documentos, obrigações e atendimento sem digitação.",
    icon: "receipt",
    visual: "document",
    title: "IA e Automação para Escritórios de Contabilidade",
    metaDescription:
      "IA para contabilidade: leitura de notas e documentos, cobrança de documentos dos clientes, agente de conhecimento para a equipe e atendimento no WhatsApp, com sigilo e LGPD.",
    h1: "IA para contabilidade: menos digitação, mais consultoria.",
    answer:
      "Automatizamos o que consome a equipe de um escritório contábil: leitura de notas e documentos, cobrança dos documentos que faltam, respostas às dúvidas repetidas dos clientes e consulta aos procedimentos internos. A equipe revisa as exceções e ganha tempo para a consultoria, com sigilo e dados sob controle do escritório.",
    painsTitle: "Fechamento não pode depender de digitação.",
    pains: [
      { title: "Documentos que chegam tarde", text: "Todo mês, a equipe corre atrás de notas, extratos e guias que os clientes esquecem de enviar." },
      { title: "Digitação e conferência", text: "Notas e documentos lançados à mão, com retrabalho e risco de erro perto dos prazos." },
      { title: "Mesmas dúvidas no WhatsApp", text: "Segunda via de guia, prazo de imposto e status de processo tomando o dia dos analistas." },
      { title: "Conhecimento na cabeça de poucos", text: "Procedimentos espalhados em pastas; colaboradores novos dependem dos mais experientes." },
    ],
    solutions: [
      { service: "automacao-de-documentos", why: "Lê notas, extratos e guias, extrai os campos e lança no sistema, com fila de revisão para exceções." },
      { service: "automacao-de-processos", why: "Cobra os documentos pendentes de cada cliente e avisa a equipe sobre o que falta antes do prazo." },
      { service: "agente-de-conhecimento", why: "Responde à equipe sobre procedimentos e obrigações, sempre citando o documento de origem." },
      { service: "agente-ia-whatsapp", why: "Envia segunda via, informa prazos e status e transfere para o analista quando é consultoria." },
    ],
    compliance: {
      label: "Sigilo e LGPD",
      title: "Sigilo profissional e LGPD",
      text: "Escritórios contábeis lidam com dados fiscais, financeiros e de funcionários dos clientes. A automação é desenhada para preservar o sigilo que a profissão exige.",
      points: [
        "Dados de clientes processados em provedores com contrato de não retenção ou em IA privada.",
        "Controle de acesso por carteira de clientes e registro de cada consulta.",
        "Nada é lançado sem regra clara: exceções vão para revisão humana.",
        "O agente de atendimento não dá parecer tributário; consultoria é do contador.",
        "Contas, integrações e automações em nome do escritório, com cláusula de saída.",
      ],
    },
    proofNote: "Os cenários abaixo são demonstrativos de como aplicamos IA e automação em escritórios contábeis.",
    demoCases: ["extracao-notas-fiscais", "conhecimento-interno-contabil", "relatorio-semanal-diretoria"],
    guide: { slug: "ia-para-contabilidade", title: "IA para contabilidade: documentos, obrigações e atendimento" },
    faq: [
      { q: "A IA substitui o sistema contábil?", a: "Não. Ela trabalha em volta do sistema que o escritório já usa: lê documentos, organiza e lança dados por integração, e cobra o que falta dos clientes." },
      { q: "A leitura de notas e documentos é confiável?", a: "A extração é validada por regras (CNPJ, valores, datas) e o que não fecha vai para uma fila de revisão. Nada incerto é lançado automaticamente." },
      { q: "Funciona com o meu sistema contábil?", a: "Integramos com sistemas que oferecem API ou importação de arquivos. Avaliamos o seu no Diagnóstico." },
      { q: "Os dados dos clientes ficam seguros?", a: "Sim. Provedores com não retenção de dados ou IA privada, controle de acesso por carteira e registro de uso." },
      { q: "Quanto custa?", a: "Automação de documentos a partir de R$ 12.000, agente de conhecimento a partir de R$ 10.000, automação de processos a partir de R$ 4.000 e agente de WhatsApp a partir de R$ 7.500." },
    ],
    cta: "Vamos calcular quantas horas de digitação seu escritório pode devolver à equipe?",
  },
  {
    slug: "e-commerce",
    name: "E-commerce e Varejo",
    menuName: "E-commerce",
    cardText: "Venda no WhatsApp, carrinho recuperado e pedido rastreado.",
    icon: "bag",
    visual: "inbox",
    title: "IA e Automação para E-commerce e Varejo",
    metaDescription:
      "IA para e-commerce: agente de vendas no WhatsApp, recuperação de carrinho com consentimento, status de pedido e integração de loja, estoque e ERP, dentro do CDC e da LGPD.",
    h1: "IA para e-commerce: atendimento que vende, inclusive às 23h.",
    answer:
      "Implantamos agentes de IA que tiram dúvidas de produto, calculam frete, informam o status do pedido e retomam carrinhos abandonados pelo WhatsApp, conectados à loja e ao estoque. Pedidos, estoque e ERP passam a conversar sozinhos, e trocas e reclamações seguem para a equipe com o histórico completo.",
    painsTitle: "Dúvida sem resposta é carrinho abandonado.",
    pains: [
      { title: "Perguntas antes da compra", text: "Tamanho, prazo, frete e troca: quem não recebe resposta rápida compra no concorrente." },
      { title: "\"Cadê meu pedido?\"", text: "Boa parte do atendimento é status de entrega, que o sistema já sabe responder." },
      { title: "Picos sazonais", text: "Black Friday e datas comemorativas multiplicam as conversas sem multiplicar a equipe." },
      { title: "Sistemas que não conversam", text: "Pedidos, estoque e nota fiscal sincronizados à mão entre loja, marketplace e ERP." },
    ],
    solutions: [
      { service: "agente-ia-whatsapp", why: "Responde sobre produtos, estoque e frete, envia o link de compra e informa o status do pedido." },
      { service: "funis-automatizados", why: "Recupera carrinhos e envia pós-venda para quem consentiu em receber mensagens." },
      { service: "integracao-de-sistemas", why: "Loja, marketplaces, estoque e ERP sincronizados, sem digitação." },
      { service: "reativacao-de-clientes", why: "Traz de volta quem comprou uma vez, com ofertas ligadas ao histórico de compras." },
    ],
    compliance: {
      label: "CDC e LGPD",
      title: "Código de Defesa do Consumidor e LGPD",
      text: "Vender mais não pode custar a confiança do cliente. As automações seguem o CDC, as regras do comércio eletrônico e a LGPD.",
      points: [
        "Mensagens ativas, como recuperação de carrinho, só para quem consentiu, com opção de sair.",
        "Preço, prazo e condições informados a partir da loja, sem promessa fora da oferta.",
        "Trocas, devoluções e reclamações transferidas para a equipe, com prazos do CDC respeitados.",
        "Uso da API oficial do WhatsApp, sem disparos em massa que colocam o número em risco.",
        "Dados de clientes e pedidos em nome da loja, com controle de acesso.",
      ],
    },
    proofNote: "Os cenários abaixo são demonstrativos de como aplicamos IA e integração em lojas on-line e operações de varejo.",
    demoCases: ["vendas-ecommerce", "integracao-pedidos-estoque"],
    guide: { slug: "ia-para-e-commerce", title: "IA para e-commerce: vendas no WhatsApp, carrinho e pós-venda" },
    faq: [
      { q: "Funciona com a minha plataforma de loja?", a: "Integramos com plataformas que oferecem API, como Shopify, WooCommerce, Nuvemshop e VTEX. Confirmamos a sua no Diagnóstico." },
      { q: "Posso mandar mensagem de carrinho abandonado para todo mundo?", a: "Não. Só para quem consentiu em receber mensagens no WhatsApp, e sempre com opção de sair. Isso protege a loja e o número." },
      { q: "O agente consegue fechar a venda?", a: "Ele tira as dúvidas, confere estoque e frete e envia o link de pagamento. O pagamento acontece no checkout da loja." },
      { q: "E as trocas e reclamações?", a: "O agente registra o pedido e transfere para a equipe com o histórico, respeitando os prazos do Código de Defesa do Consumidor." },
      { q: "Quanto custa?", a: "Agente de IA para WhatsApp a partir de R$ 7.500, funis automatizados a partir de R$ 4.000 e integração de sistemas a partir de R$ 4.000, com sustentação mensal." },
    ],
    cta: "Vamos ver quantas vendas sua loja perde por falta de resposta?",
  },
  {
    slug: "educacao",
    name: "Escolas e Educação",
    menuName: "Educação",
    cardText: "Matrículas, secretaria e cobrança com respeito.",
    icon: "graduation",
    visual: "calendar",
    visualTitle: "Agenda · Visitas de matrícula",
    title: "IA e Automação para Escolas e Instituições de Ensino",
    metaDescription:
      "IA para escolas e cursos: atendimento de matrículas 24/7, secretaria digital no WhatsApp, cobrança amigável e automação de documentos, com LGPD para dados de alunos e menores.",
    h1: "IA para escolas: mais matrículas, secretaria menos sobrecarregada.",
    answer:
      "Implantamos agentes de IA que atendem interessados em matrícula a qualquer hora, agendam visitas, respondem às dúvidas da secretaria e fazem a cobrança com tom respeitoso pelo WhatsApp. Os dados de alunos, inclusive de menores, são tratados com as regras mais rígidas da LGPD, e casos sensíveis ficam sempre com a equipe.",
    painsTitle: "Período de matrícula não espera a secretaria.",
    pains: [
      { title: "Interessados sem resposta", text: "Famílias pesquisam várias escolas à noite e no fim de semana; quem responde primeiro agenda a visita." },
      { title: "Secretaria sobrecarregada", text: "Declarações, boletos, calendário e horários pedidos um a um, o dia inteiro." },
      { title: "Cobrança desconfortável", text: "Inadimplência tratada por telefone, sem regularidade e com desgaste para a equipe e para as famílias." },
      { title: "Rematrícula no improviso", text: "Documentos, contratos e confirmações coletados manualmente todo fim de ano." },
    ],
    solutions: [
      { service: "agente-ia-whatsapp", why: "Atende interessados e famílias 24/7 sobre matrícula, valores, calendário e documentos." },
      { service: "agendamento-inteligente", why: "Agenda visitas e entrevistas de matrícula na agenda da coordenação." },
      { service: "automacao-de-processos", why: "Régua de cobrança amigável, segunda via e rematrícula com lembretes automáticos." },
      { service: "automacao-de-documentos", why: "Declarações, contratos e fichas gerados e coletados sem digitação." },
    ],
    compliance: {
      label: "LGPD para dados de alunos",
      title: "LGPD para dados de alunos e menores",
      text: "Escolas tratam dados de crianças e adolescentes, que a LGPD protege com regras específicas. Cada projeto é desenhado a partir do melhor interesse do aluno.",
      points: [
        "Dados de menores tratados no melhor interesse do aluno, com consentimento específico de um dos pais ou responsável quando exigido.",
        "O agente conversa com responsáveis; temas pedagógicos, disciplinares ou sensíveis vão para a equipe.",
        "Cobrança sem exposição nem constrangimento, dentro do Código de Defesa do Consumidor.",
        "Controle de acesso por função e registro de uso das informações dos alunos.",
        "Contas e dados em nome da instituição, com provedores sem retenção de dados.",
      ],
    },
    proofNote: "Os cenários abaixo são demonstrativos de como aplicamos IA e automação em escolas e cursos.",
    demoCases: ["matriculas-escola", "cobranca-amigavel"],
    guide: { slug: "ia-para-escolas", title: "IA para escolas: matrículas, secretaria e cobrança com LGPD" },
    faq: [
      { q: "O agente fala com os alunos?", a: "Em escolas de educação básica, o agente conversa com pais e responsáveis. Em cursos livres e ensino superior, pode atender o próprio aluno. Temas pedagógicos e sensíveis vão sempre para a equipe." },
      { q: "Funciona com o sistema de gestão escolar?", a: "Se o sistema tem API, integramos direto para consultar dados e boletos. Se não tem, começamos pelo atendimento de matrículas e pela cobrança com base em planilha." },
      { q: "A cobrança automática não desgasta a relação com as famílias?", a: "É o contrário: lembretes regulares e respeitosos antes do vencimento evitam a cobrança por telefone. Negociações seguem regras aprovadas pela escola e casos delicados vão para a secretaria." },
      { q: "Como fica a LGPD com dados de menores?", a: "Tratamos esses dados no melhor interesse do aluno, com base legal definida, consentimento de um dos pais ou responsável quando exigido, controle de acesso e registro de uso." },
      { q: "Quanto custa?", a: "Agente de IA para WhatsApp a partir de R$ 7.500, agendamento inteligente a partir de R$ 3.500 e automação de processos a partir de R$ 4.000, com sustentação mensal." },
    ],
    cta: "Vamos preparar sua escola para o próximo período de matrículas?",
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
