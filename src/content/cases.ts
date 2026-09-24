/**
 * Soluções em Ação — portfólio.
 *
 * Regra ética inegociável: o que é real é apresentado como real; o que é
 * demonstração é rotulado como demonstração (empresa fictícia declarada, sem
 * números apresentados como alcançados e sem depoimentos).
 *
 * Plano de substituição: cada case real substitui a demonstração equivalente.
 * Para publicar um case real, use status "real" e preencha `results` com números
 * de projeto (e o depoimento, se houver autorização do cliente).
 */

export type CaseType = "ia" | "automacao" | "seo" | "sites" | "apps" | "saas";

export const caseTypeLabels: Record<CaseType, string> = {
  ia: "IA & Agentes",
  automacao: "Automação",
  seo: "SEO/GEO",
  sites: "Sites",
  apps: "Apps",
  saas: "SaaS",
};

export type CaseStudy = {
  slug: string;
  status: "real" | "demo";
  type: CaseType;
  title: string;
  company: string;
  sector: string;
  summary: string;
  scenario: string;
  solution: string;
  how: string[];
  tech: string[];
  indicators: string[];
  /** Somente para cases reais, com números de projeto. */
  results?: { value: string; label: string }[];
  testimonial?: { quote: string; author: string; role: string };
  service?: string;
  /** Outros hubs de solução em que o case também serve de exemplo. */
  alsoFor?: string[];
  /** Cases reais sem página de detalhe ainda. */
  noDetail?: boolean;
};

export const cases: CaseStudy[] = [
  // ───────────── Nível 1 — Cases reais e produtos próprios ─────────────
  // TODO: completar com dados reais (tráfego, presença nas IAs, prints) antes de publicar.
  {
    slug: "acertoclt",
    status: "real",
    type: "seo",
    title: "AcertoCLT: SEO e GEO em projeto próprio",
    company: "AcertoCLT (produto próprio)",
    sector: "Conteúdo e ferramentas trabalhistas",
    summary: "Projeto próprio construído com SEO técnico e conteúdo citável desde o primeiro dia. É o nosso case de visibilidade verificável.",
    scenario: "",
    solution: "",
    how: [],
    tech: ["Next.js", "SEO técnico", "Dados estruturados", "Conteúdo citável"],
    indicators: ["Tráfego orgânico", "Posições nos termos-alvo", "Citações em respostas de IA"],
    noDetail: true,
  },
  {
    slug: "prospector-cnpj",
    status: "real",
    type: "saas",
    title: "Prospector CNPJ: SaaS próprio de prospecção",
    company: "Prospector CNPJ (produto próprio)",
    sector: "Vendas B2B",
    summary: "Software próprio que construímos, operamos e mantemos. Prova de que entregamos produto, não só projeto.",
    scenario: "",
    solution: "",
    how: [],
    tech: ["SaaS", "Dados públicos de empresas", "Automação"],
    indicators: [],
    noDetail: true,
  },

  // ───────────── Nível 2 — Projetos demonstrativos: IA & Agentes ─────────────
  {
    slug: "agendamento-clinica-odontologica",
    status: "demo",
    type: "ia",
    title: "Agendamento por IA para clínica odontológica",
    company: "Clínica Sorriso Demo (fictícia)",
    sector: "Saúde",
    summary: "Agente de WhatsApp que agenda, confirma e remarca consultas, com lembretes e lista de espera.",
    scenario:
      "Clínica com três dentistas e uma recepcionista. As mensagens da noite e do fim de semana só são respondidas no dia seguinte, a recepção passa a manhã confirmando consultas por telefone e as faltas deixam buracos na agenda.",
    solution:
      "Agente de IA para WhatsApp com o módulo de Agendamento Inteligente, conectado à agenda de cada dentista. O agente responde dúvidas sobre tratamentos e convênios, marca, confirma e remarca, e oferece horários vagos para a lista de espera.",
    how: [
      "Paciente chama no WhatsApp a qualquer hora.",
      "O agente entende o pedido, consulta a agenda e oferece horários reais.",
      "Consulta confirmada na agenda do dentista, com lembrete automático na véspera.",
      "Desmarcação libera a vaga e o agente oferece para a lista de espera.",
      "Casos clínicos e reclamações vão para a recepção, com o histórico da conversa.",
    ],
    tech: ["WhatsApp Cloud API", "Google Agenda", "n8n", "LLM com base de conhecimento", "Painel de conversas"],
    indicators: ["Taxa de faltas", "Ocupação da agenda", "Tempo até a primeira resposta", "Agendamentos fora do horário comercial"],
    service: "/solucoes/atendimento-inteligente/agendamento-inteligente/",
  },
  {
    slug: "sdr-juridico-trabalhista",
    status: "demo",
    type: "ia",
    title: "Triagem com IA para escritório trabalhista",
    company: "Escritório Demo Advocacia (fictício)",
    sector: "Jurídico",
    summary: "SDR com IA que faz a triagem inicial dos contatos e agenda a consulta com o advogado, dentro das regras da OAB.",
    scenario:
      "Escritório trabalhista que recebe muitos contatos de pessoas com dúvidas sobre direitos. Os advogados gastam horas em conversas iniciais com casos fora da área de atuação, e contatos da noite ficam sem resposta.",
    solution:
      "SDR com IA que acolhe o contato, faz perguntas objetivas para entender a situação, identifica se o caso está na área de atuação do escritório e agenda a consulta. O agente não dá parecer jurídico nem promete resultado.",
    how: [
      "Contato chega pelo site ou pelo WhatsApp.",
      "O agente se apresenta como assistente virtual e faz a triagem.",
      "Casos dentro da área de atuação recebem opções de horário para consulta.",
      "Resumo estruturado da triagem vai para o advogado antes da consulta.",
      "Casos fora da área recebem orientação neutra, sem captação indevida.",
    ],
    tech: ["WhatsApp Cloud API", "CRM jurídico", "Google Agenda", "LLM com regras de conformidade"],
    indicators: ["Tempo até a primeira resposta", "% de contatos dentro do perfil", "Consultas agendadas", "Horas de triagem liberadas"],
    service: "/solucoes/vendas-e-receita/sdr-com-ia/",
  },
  {
    slug: "pre-atendimento-imobiliario",
    status: "demo",
    type: "ia",
    title: "Pré-atendimento com IA para imobiliária",
    company: "Imobiliária Demo (fictícia)",
    sector: "Imobiliário",
    summary: "Agente que responde sobre imóveis, entende o perfil do interessado e agenda visitas com o corretor.",
    scenario:
      "Imobiliária com dezenas de imóveis anunciados em portais. Os corretores recebem as mesmas perguntas sobre valor, condomínio e disponibilidade o dia inteiro, e visitas se perdem por demora na resposta.",
    solution:
      "Agente de IA conectado ao catálogo de imóveis que responde sobre cada anúncio, entende o perfil do interessado (região, faixa de preço, quartos), sugere opções parecidas e agenda a visita com o corretor responsável.",
    how: [
      "Interessado chama a partir do anúncio.",
      "O agente responde com os dados do imóvel e tira dúvidas.",
      "Qualifica o perfil e sugere imóveis semelhantes.",
      "Agenda a visita na agenda do corretor.",
      "Lead registrado no CRM com o histórico.",
    ],
    tech: ["WhatsApp Cloud API", "Catálogo de imóveis via API", "CRM", "Google Agenda"],
    indicators: ["Tempo até a primeira resposta", "Visitas agendadas", "Leads qualificados por corretor", "Conversas fora do horário"],
    service: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
    alsoFor: ["vendas-e-receita"],
  },
  {
    slug: "conhecimento-interno-contabil",
    status: "demo",
    type: "ia",
    title: "Agente de conhecimento para escritório contábil",
    company: "Contábil Demo (fictícia)",
    sector: "Contabilidade",
    summary: "Assistente interno que responde à equipe sobre procedimentos, obrigações e clientes, sempre citando a fonte.",
    scenario:
      "Escritório contábil com procedimentos espalhados em pastas e manuais. Colaboradores novos levam meses para ganhar autonomia e dependem dos mais experientes para cada dúvida.",
    solution:
      "Agente de Conhecimento Interno conectado ao acervo de procedimentos e às fichas dos clientes, com controle de acesso por equipe. Cada resposta cita o documento de origem.",
    how: [
      "Curadoria dos manuais e procedimentos oficiais.",
      "Indexação do acervo com permissões por equipe.",
      "Equipe pergunta pelo chat interno.",
      "Resposta com o trecho e o link do documento.",
      "Perguntas sem resposta viram pauta de documentação.",
    ],
    tech: ["RAG", "Google Drive", "Chat interno", "Provedor com não retenção de dados"],
    indicators: ["Tempo de busca por informação", "Tempo de integração de novos colaboradores", "Perguntas respondidas por semana"],
    service: "/solucoes/operacoes/agente-de-conhecimento/",
    alsoFor: ["ia-corporativa"],
  },
  {
    slug: "vendas-ecommerce",
    status: "demo",
    type: "ia",
    title: "Agente de vendas para e-commerce",
    company: "Loja Demo (fictícia)",
    sector: "Varejo on-line",
    summary: "Agente que tira dúvidas de produto, recupera carrinhos e acompanha pedidos pelo WhatsApp.",
    scenario:
      "E-commerce de médio porte com alto volume de perguntas sobre tamanho, prazo e troca, carrinhos abandonados sem contato e atendimento sobrecarregado em datas sazonais.",
    solution:
      "Agente de IA conectado ao catálogo e aos pedidos, que responde sobre produtos, calcula frete, informa status e retoma carrinhos abandonados de quem consentiu em receber mensagens.",
    how: [
      "Cliente pergunta sobre um produto.",
      "O agente consulta catálogo, estoque e frete.",
      "Envia o link de compra ou tira a dúvida final.",
      "Carrinho abandonado recebe uma mensagem de retomada (com consentimento).",
      "Trocas e reclamações vão para a equipe.",
    ],
    tech: ["WhatsApp Cloud API", "Shopify / WooCommerce", "n8n", "LLM"],
    indicators: ["Conversas que viram pedido", "Carrinhos recuperados", "Tempo de resposta em datas de pico"],
    service: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
    alsoFor: ["vendas-e-receita"],
  },
  {
    slug: "assistente-juridico-ia-privada",
    status: "demo",
    type: "ia",
    title: "Assistente jurídico em IA privada",
    company: "Escritório Demo Advocacia (fictício)",
    sector: "Jurídico",
    summary: "IA em nuvem privada conectada ao acervo de peças do escritório, sem expor dados de clientes.",
    scenario:
      "Escritório com anos de peças e pareceres que ninguém consegue reaproveitar. Os advogados querem usar IA em pesquisa e redação, mas não podem colar dados de clientes em ferramentas públicas.",
    solution:
      "IA em nuvem privada, com contrato de não retenção, conectada ao acervo do escritório. Controle de acesso por área e registro de uso para auditoria. Todo conteúdo gerado é revisado por um advogado.",
    how: [
      "Avaliação da sensibilidade do acervo.",
      "Ambiente privado com acesso por área de atuação.",
      "Indexação das peças e pareceres.",
      "Advogado pesquisa e gera rascunhos a partir do acervo.",
      "Logs de uso e revisão humana obrigatória.",
    ],
    tech: ["Nuvem privada com não retenção", "RAG", "SSO", "Logs de auditoria"],
    indicators: ["Tempo de pesquisa por demanda", "Reaproveitamento do acervo", "Adesão da equipe"],
    service: "/solucoes/ia-corporativa/ia-privada/",
  },

  // ───────────── Nível 2 — Projetos demonstrativos: Automação ─────────────
  {
    slug: "extracao-notas-fiscais",
    status: "demo",
    type: "automacao",
    title: "Extração automática de notas fiscais",
    company: "Contábil Demo (fictícia)",
    sector: "Contabilidade",
    summary: "IA que lê notas fiscais recebidas por e-mail, valida e lança no sistema contábil, com fila de exceções.",
    scenario:
      "Equipe que digita manualmente os dados de centenas de notas fiscais por mês, recebidas em PDF e em imagem, com retrabalho por erros de digitação.",
    solution:
      "Automação que captura as notas do e-mail, extrai os campos com IA, valida CNPJ, valores e impostos contra as regras do cliente e lança no sistema contábil. Só o que foge ao padrão vai para revisão.",
    how: [
      "Nota chega por e-mail ou pasta compartilhada.",
      "A IA lê o documento e extrai os campos.",
      "Validação contra regras e cadastros.",
      "Lançamento automático no sistema contábil.",
      "Exceções vão para a fila de revisão com o motivo.",
    ],
    tech: ["OCR + LLM", "n8n", "API do sistema contábil", "Google Drive"],
    indicators: ["Notas processadas por mês", "% sem revisão humana", "Horas devolvidas à equipe", "Erros de lançamento"],
    service: "/solucoes/operacoes/automacao-de-documentos/",
  },
  {
    slug: "onboarding-clientes-advocacia",
    status: "demo",
    type: "automacao",
    title: "Onboarding automatizado de clientes em escritório",
    company: "Escritório Demo Advocacia (fictício)",
    sector: "Jurídico",
    summary: "Da assinatura do contrato à pasta do cliente pronta: documentos, cadastro e boas-vindas sem trabalho manual.",
    scenario:
      "Cada cliente novo exige gerar contrato e procuração, coletar documentos, criar pastas e cadastrar no sistema. O processo leva dias e depende de lembretes manuais.",
    solution:
      "Fluxo que gera contrato e procuração a partir de modelos, envia para assinatura digital, coleta os documentos pelo WhatsApp, cria a estrutura de pastas e cadastra o cliente no sistema jurídico.",
    how: [
      "Advogado aprova a contratação.",
      "Contrato e procuração gerados e enviados para assinatura.",
      "Cliente envia os documentos pelo WhatsApp, com checklist.",
      "Pastas e cadastro criados automaticamente.",
      "Mensagem de boas-vindas com os próximos passos.",
    ],
    tech: ["Assinatura digital", "Geração de documentos por modelo", "WhatsApp Cloud API", "Sistema jurídico via API", "n8n"],
    indicators: ["Tempo do aceite ao cliente cadastrado", "Documentos pendentes", "Horas administrativas por cliente"],
    service: "/solucoes/operacoes/automacao-de-processos/",
    alsoFor: ["operacoes"],
  },
  {
    slug: "integracao-pedidos-estoque",
    status: "demo",
    type: "automacao",
    title: "Integração de pedidos e estoque para distribuidora",
    company: "Distribuidora Demo (fictícia)",
    sector: "Distribuição",
    summary: "Pedidos do e-commerce, do WhatsApp e dos vendedores caindo sozinhos no ERP, com estoque sincronizado.",
    scenario:
      "Distribuidora que recebe pedidos por três canais e redigita tudo no ERP. O estoque do site fica desatualizado e há vendas de produtos sem estoque.",
    solution:
      "Integração entre e-commerce, planilha dos vendedores e ERP, com sincronização de estoque em intervalos curtos, alertas de falha e reprocessamento.",
    how: [
      "Pedido entra por qualquer canal.",
      "Validação de cliente, preço e estoque.",
      "Lançamento automático no ERP.",
      "Estoque atualizado no e-commerce.",
      "Falhas geram alerta e são reprocessadas.",
    ],
    tech: ["ERP via API", "WooCommerce", "Google Sheets", "n8n", "Monitoramento"],
    indicators: ["Pedidos redigitados", "Vendas sem estoque", "Tempo do pedido ao faturamento"],
    service: "/solucoes/operacoes/integracao-de-sistemas/",
  },
  {
    slug: "relatorio-semanal-diretoria",
    status: "demo",
    type: "automacao",
    title: "Relatório semanal automático para a diretoria",
    company: "Serviços Demo (fictícia)",
    sector: "Serviços",
    summary: "Dados de vendas, financeiro e atendimento reunidos e comentados pela IA, toda segunda-feira às 8h.",
    scenario:
      "Uma analista gasta a sexta-feira inteira reunindo números de quatro sistemas para montar o relatório da diretoria.",
    solution:
      "Fluxo que coleta os dados dos sistemas, consolida os indicadores, gera gráficos e um resumo em linguagem natural com os destaques e alertas da semana, enviado por e-mail e WhatsApp.",
    how: [
      "Coleta automática dos dados de cada sistema.",
      "Consolidação e cálculo dos indicadores.",
      "A IA escreve o resumo com destaques e alertas.",
      "Envio para a diretoria no horário combinado.",
      "Histórico guardado para comparação.",
    ],
    tech: ["n8n", "APIs dos sistemas", "Google Sheets", "LLM", "E-mail e WhatsApp"],
    indicators: ["Horas por semana devolvidas", "Pontualidade do relatório", "Erros de consolidação"],
    service: "/solucoes/operacoes/automacao-de-processos/",
  },
  {
    slug: "cobranca-amigavel",
    status: "demo",
    type: "automacao",
    title: "Cobrança amigável automatizada",
    company: "Escola Demo (fictícia)",
    sector: "Educação e saúde",
    summary: "Lembretes antes do vencimento, segunda via e negociação simples pelo WhatsApp, com tom respeitoso.",
    scenario:
      "Escola com inadimplência recorrente e cobrança feita por telefone pela secretaria, de forma irregular e desconfortável.",
    solution:
      "Régua de cobrança automática: lembrete antes do vencimento, aviso no dia, segunda via e opções de negociação dentro de regras pré-aprovadas. Casos sensíveis vão para a secretaria.",
    how: [
      "Integração com o sistema financeiro.",
      "Lembrete amigável antes do vencimento.",
      "Segunda via e link de pagamento no WhatsApp.",
      "Negociação dentro de regras aprovadas.",
      "Casos sensíveis vão para uma pessoa.",
    ],
    tech: ["WhatsApp Cloud API", "Sistema financeiro via API", "Gateway de pagamento", "n8n"],
    indicators: ["Pagamentos em dia", "Inadimplência acima de 30 dias", "Horas da secretaria em cobrança"],
    service: "/solucoes/operacoes/automacao-de-processos/",
  },
  {
    slug: "matriculas-escola",
    status: "demo",
    type: "ia",
    title: "Atendimento de matrículas com IA para escola",
    company: "Escola Demo (fictícia)",
    sector: "Educação",
    summary: "Agente que atende famílias interessadas a qualquer hora, apresenta a escola e agenda a visita com a coordenação.",
    scenario:
      "Escola particular com picos de procura no período de matrículas. As famílias escrevem à noite e no fim de semana, a secretaria responde no dia seguinte e parte dos interessados agenda visita em outra escola.",
    solution:
      "Agente de IA no WhatsApp conectado às informações aprovadas pela escola (proposta, turnos, valores, documentos) e à agenda da coordenação. Ele conversa com os responsáveis, entende a série e o turno de interesse e agenda a visita.",
    how: [
      "Responsável chama pelo site, Instagram ou anúncio.",
      "O agente apresenta a escola com as informações aprovadas.",
      "Entende série, turno e data de início desejados.",
      "Agenda a visita na agenda da coordenação e envia lembrete.",
      "Interessado registrado no CRM, com follow-up após a visita.",
    ],
    tech: ["WhatsApp Cloud API", "Google Agenda", "CRM", "LLM com base de conhecimento"],
    indicators: ["Tempo até a primeira resposta", "Visitas agendadas", "Visitas que viram matrícula", "Conversas fora do horário"],
    service: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
    alsoFor: ["vendas-e-receita"],
  },
  {
    slug: "ordem-de-servico-oficina",
    status: "demo",
    type: "automacao",
    title: "Ordem de serviço automatizada para oficina",
    company: "Oficina Demo (fictícia)",
    sector: "Automotivo",
    summary: "Orçamento, aprovação pelo cliente e atualização de status da OS pelo WhatsApp.",
    scenario:
      "Oficina em que o cliente liga várias vezes para saber do carro, orçamentos são aprovados por telefone sem registro e as OS ficam em papel.",
    solution:
      "Fluxo que gera a OS digital, envia o orçamento para aprovação pelo WhatsApp, registra o aceite e avisa o cliente a cada mudança de status.",
    how: [
      "Entrada do veículo gera a OS.",
      "Orçamento enviado para aprovação pelo WhatsApp.",
      "Aceite registrado com data e hora.",
      "Cliente avisado a cada etapa.",
      "Pesquisa de satisfação na entrega.",
    ],
    tech: ["Sistema de OS", "WhatsApp Cloud API", "n8n"],
    indicators: ["Tempo de aprovação do orçamento", "Ligações de status recebidas", "Orçamentos aprovados"],
    service: "/solucoes/operacoes/automacao-de-processos/",
  },

  // ───────────── Nível 2 — Projetos demonstrativos: SEO/GEO ─────────────
  {
    slug: "geo-clinica-estetica",
    status: "demo",
    type: "seo",
    title: "SEO e GEO para clínica de estética",
    company: "Clínica Estética Demo (fictícia)",
    sector: "Saúde e estética",
    summary: "Site técnico, conteúdo citável por procedimento e perfil local para aparecer no Google e nas IAs.",
    scenario:
      "Clínica com site bonito e lento, sem páginas por procedimento, que não aparece quando pacientes perguntam ao Google ou ao ChatGPT por clínicas na cidade.",
    solution:
      "Reestruturação do site com uma página por procedimento, resposta direta no topo, dados estruturados, perfil no Google Business Profile e assistente de IA para converter o tráfego.",
    how: [
      "Auditoria de visibilidade no Google e nas IAs.",
      "Uma URL por procedimento, com resposta direta.",
      "Schema, performance e llms.txt.",
      "Google Business Profile e avaliações reais.",
      "Assistente de IA no site para converter.",
    ],
    tech: ["Next.js", "Schema.org", "Google Business Profile", "Search Console", "Assistente de IA"],
    indicators: ["Impressões e cliques orgânicos", "% de citações em perguntas-alvo nas IAs", "Leads orgânicos"],
    service: "/servicos/seo-e-geo/",
  },
  {
    slug: "geo-advocacia-previdenciaria",
    status: "demo",
    type: "seo",
    title: "SEO e GEO para advocacia previdenciária",
    company: "Escritório Previdenciário Demo (fictício)",
    sector: "Jurídico",
    summary: "Conteúdo educativo e citável sobre benefícios, dentro das regras de publicidade da OAB.",
    scenario:
      "Escritório que depende de indicação e não aparece nas buscas nem nas respostas das IAs sobre aposentadoria e benefícios.",
    solution:
      "Guias educativos sobre benefícios previdenciários, com linguagem clara, autoria do advogado, dados estruturados e sem promessa de resultado — conforme as regras de publicidade da OAB.",
    how: [
      "Mapeamento das perguntas que as pessoas fazem.",
      "Guias assinados pelo advogado responsável.",
      "Resposta direta e FAQ em cada guia.",
      "Revisão de conformidade com a OAB.",
      "Monitoramento de citações nas IAs.",
    ],
    tech: ["Next.js", "Schema Article + Person", "Search Console", "Monitoramento de citações"],
    indicators: ["Tráfego orgânico por guia", "Citações nas IAs", "Contatos qualificados"],
    service: "/servicos/seo-e-geo/",
  },
  {
    slug: "geo-software-b2b",
    status: "demo",
    type: "seo",
    title: "GEO para software B2B em comparativos",
    company: "SaaS Demo (fictício)",
    sector: "Software B2B",
    summary: "Páginas de comparação e de preço que fazem o produto aparecer quando o comprador pergunta às IAs.",
    scenario:
      "Software B2B que não é citado quando compradores pedem às IAs “as melhores ferramentas para…”, enquanto concorrentes aparecem.",
    solution:
      "Páginas de comparativo honestas, página de preços clara, glossário e presença em diretórios B2B com dados idênticos, reforçando a entidade da marca.",
    how: [
      "Levantamento das perguntas de decisão.",
      "Comparativos e página de preços citáveis.",
      "Glossário com termos do mercado.",
      "Consistência da entidade em diretórios.",
      "Medição mensal de citações.",
    ],
    tech: ["Schema.org", "llms.txt", "Diretórios B2B", "Search Console", "Bing Webmaster Tools"],
    indicators: ["% de citações em perguntas de decisão", "Tráfego de assistentes de IA", "Demonstrações solicitadas"],
    service: "/servicos/seo-e-geo/",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);

export const liveDemos = [
  { name: "Clínica Demo", text: "Peça um horário, pergunte sobre convênios e remarque uma consulta.", message: "Quero testar a Clínica Demo" },
  { name: "Escritório Demo", text: "Veja como funciona uma triagem inicial dentro das regras da OAB.", message: "Quero testar o Escritório Demo" },
  { name: "Imobiliária Demo", text: "Pergunte sobre um imóvel, informe seu perfil e agende uma visita.", message: "Quero testar a Imobiliária Demo" },
];
