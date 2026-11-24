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

export type CaseType = "ia" | "automacao" | "sites";

export const caseTypeLabels: Record<CaseType, string> = {
  ia: "IA & Agentes",
  automacao: "Automação",
  sites: "Sites",
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
  /**
   * Somente para projetos demonstrativos: o que a solução muda, em termos
   * qualitativos — nunca números ou percentuais (isso seria um resultado
   * "alcançado", que só cabe em `results` de case real).
   */
  expectedOutcome?: { before: string; after: string }[];
  testimonial?: { quote: string; author: string; role: string };
  service?: string;
  /** Outros hubs de solução em que o case também serve de exemplo. */
  alsoFor?: string[];
  /** Cases reais sem página de detalhe ainda. */
  noDetail?: boolean;
};

export const cases: CaseStudy[] = [

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
    expectedOutcome: [
      { before: "Recepção passa a manhã ao telefone confirmando consultas.", after: "Confirmação e remarcação acontecem sozinhas, recepção livre para o presencial." },
      { before: "Mensagens da noite só são respondidas no dia seguinte.", after: "Paciente marca a qualquer hora, sem esperar a clínica abrir." },
      { before: "Desmarcação vira um buraco vazio na agenda.", after: "Vaga liberada é oferecida automaticamente para a lista de espera." },
    ],
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
    expectedOutcome: [
      { before: "Advogado gasta parte do dia em conversas iniciais fora da área de atuação.", after: "Só chega ao advogado quem já foi triado e tem fit com o escritório." },
      { before: "Contato da noite só é respondido no expediente seguinte.", after: "Acolhimento inicial acontece na hora, a qualquer horário." },
      { before: "Advogado chega à consulta sem contexto do caso.", after: "Resumo estruturado da triagem chega antes da reunião." },
    ],
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
    expectedOutcome: [
      { before: "Corretor responde a mesma pergunta sobre valor e condomínio o dia inteiro.", after: "Agente responde na hora, com os dados corretos do anúncio." },
      { before: "Visita se perde para a imobiliária que respondeu primeiro.", after: "Agendamento acontece dentro da mesma conversa, sem intervalo." },
      { before: "Lead chega ao corretor sem contexto de perfil ou preferência.", after: "Corretor recebe o lead já qualificado, com histórico no CRM." },
    ],
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
    expectedOutcome: [
      { before: "Colaborador novo interrompe um sênior para cada dúvida de procedimento.", after: "Pergunta ao assistente e recebe a resposta com a fonte, na hora." },
      { before: "Procedimento certo depende de saber quem perguntar.", after: "Acervo fica pesquisável por qualquer pessoa da equipe, com permissão." },
      { before: "Dúvida recorrente nunca vira documentação.", after: "Perguntas sem resposta boa viram pauta para atualizar o manual." },
    ],
    service: "/solucoes/operacoes/agente-de-conhecimento/",
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
    expectedOutcome: [
      { before: "Carrinho abandonado nunca mais recebe contato.", after: "Quem consentiu recebe uma retomada automática, no momento certo." },
      { before: "Atendimento trava em datas de pico, fila de espera cresce.", after: "Agente absorve o volume extra sem perder o tempo de resposta." },
      { before: "Dúvida de tamanho ou prazo espera na fila do atendimento humano.", after: "Agente responde consultando catálogo, estoque e frete em tempo real." },
    ],
    service: "/solucoes/atendimento-inteligente/agente-ia-whatsapp/",
    alsoFor: ["vendas-e-receita"],
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
    expectedOutcome: [
      { before: "Equipe digita cada nota manualmente, com erro de digitação recorrente.", after: "IA lê, valida contra as regras do cliente e lança sozinha." },
      { before: "Nota em imagem ou PDF trava o processo até alguém abrir e conferir.", after: "Só o que foge ao padrão cai numa fila de revisão, com o motivo." },
      { before: "Fechamento do mês vira corrida contra o volume acumulado.", after: "Volume processa continuamente, sem acumular no fim do mês." },
    ],
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
    expectedOutcome: [
      { before: "Contrato e procuração são montados um a um, manualmente.", after: "Documentos gerados a partir de modelo e enviados para assinatura na hora." },
      { before: "Coleta de documentos depende de lembrete manual por telefone.", after: "Cliente envia pelo WhatsApp, seguindo um checklist automático." },
      { before: "Pasta e cadastro do cliente levam dias para ficar prontos.", after: "Estrutura de pastas e cadastro no sistema saem no mesmo dia do aceite." },
    ],
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
    expectedOutcome: [
      { before: "Pedido de cada canal é redigitado manualmente no ERP.", after: "Pedido entra por qualquer canal e cai sozinho no ERP, validado." },
      { before: "Site vende produto que já saiu do estoque.", after: "Estoque sincroniza em intervalos curtos entre ERP e e-commerce." },
      { before: "Falha de integração só aparece quando o cliente reclama.", after: "Falha gera alerta e é reprocessada antes de virar problema." },
    ],
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
    expectedOutcome: [
      { before: "Sexta-feira inteira consumida reunindo números de quatro sistemas.", after: "Coleta e consolidação acontecem sozinhas, no horário combinado." },
      { before: "Números chegam sem contexto do que mudou na semana.", after: "IA escreve o resumo com os destaques e alertas em linguagem natural." },
      { before: "Comparar com semanas anteriores exige garimpar planilhas antigas.", after: "Histórico fica guardado e pronto para comparação." },
    ],
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
    expectedOutcome: [
      { before: "Cobrança é feita por telefone, de forma irregular e desconfortável.", after: "Régua automática avisa antes do vencimento, com tom respeitoso." },
      { before: "Segunda via depende de alguém buscar e enviar manualmente.", after: "Segunda via e link de pagamento chegam direto no WhatsApp." },
      { before: "Caso sensível é tratado do mesmo jeito que um esquecimento simples.", after: "Casos sensíveis saem da régua automática e vão para uma pessoa." },
    ],
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
    expectedOutcome: [
      { before: "Família escreve à noite e só recebe resposta no dia seguinte.", after: "Agente atende a qualquer hora, com as informações aprovadas pela escola." },
      { before: "Interessado agenda visita em outra escola por demora na resposta.", after: "Visita fica marcada na agenda da coordenação dentro da mesma conversa." },
      { before: "Pico de matrículas sobrecarrega a secretaria.", after: "Agente absorve o volume, secretaria foca em quem já visitou." },
    ],
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
    expectedOutcome: [
      { before: "Cliente liga várias vezes por dia para saber do carro.", after: "Cliente recebe aviso automático a cada mudança de status." },
      { before: "Orçamento aprovado por telefone, sem registro.", after: "Aprovação acontece pelo WhatsApp, com aceite registrado." },
      { before: "OS em papel, fácil de perder ou rasurar.", after: "OS digital, rastreável do início ao fim do serviço." },
    ],
    service: "/solucoes/operacoes/automacao-de-processos/",
  },


  // ───────────── Nível 2 — Projetos demonstrativos: Sites ─────────────
  {
    slug: "site-institucional-engenharia",
    status: "demo",
    type: "sites",
    title: "Site institucional para empresa de engenharia",
    company: "Engenharia Demo (fictícia)",
    sector: "Engenharia e construção",
    summary: "Site que organiza portfólio, especialidades e credenciais técnicas em uma arquitetura pensada para SEO desde o início.",
    scenario:
      "Empresa de engenharia com quinze anos de obras relevantes, mas um site institucional de uma única página, sem separação por especialidade, lento no celular e praticamente invisível no Google.",
    solution:
      "Site institucional em Next.js, com uma página por especialidade e por segmento de obra, portfólio de projetos organizado por categoria, formulário qualificado para orçamentos e base técnica pronta para SEO e GEO desde a arquitetura.",
    how: [
      "Levantamento de especialidades, diferenciais e projetos de referência.",
      "Arquitetura de páginas por especialidade e tipo de obra.",
      "Design e desenvolvimento com performance e SEO técnico como padrão.",
      "Portfólio com filtros por categoria e página de cada projeto.",
      "Analytics, Search Console e formulário de orçamento qualificado.",
    ],
    tech: ["Next.js", "Dados estruturados", "Google Business Profile", "Search Console", "Formulário qualificado"],
    indicators: ["Tempo de carregamento no celular", "Impressões e cliques orgânicos", "Orçamentos qualificados recebidos"],
    expectedOutcome: [
      { before: "Site de uma página só, sem separar as especialidades da empresa.", after: "Cada especialidade e tipo de obra ganha sua própria página, com SEO técnico." },
      { before: "Portfólio de obras relevantes não aparece em lugar nenhum.", after: "Projetos organizados por categoria, com página própria e fotos." },
      { before: "Formulário genérico gera contato sem informação nenhuma.", after: "Formulário qualificado já chega com escopo, prazo e tipo de obra." },
    ],
    service: "/servicos/criacao-de-sites/",
  },
  {
    slug: "ecommerce-moda-performance",
    status: "demo",
    type: "sites",
    title: "E-commerce de moda com foco em performance e SEO",
    company: "Loja de Moda Demo (fictícia)",
    sector: "Moda e varejo",
    summary: "Loja migrada para uma base rápida, com checkout simplificado, páginas de categoria otimizadas e recuperação de carrinho.",
    scenario:
      "E-commerce de moda em plataforma genérica, lento no celular, com checkout de várias etapas e páginas de produto fracas para SEO — a maior parte do tráfego pago converte mal e some do orgânico.",
    solution:
      "E-commerce reconstruído com arquitetura moderna, checkout simplificado, páginas de categoria e produto otimizadas para busca, dados estruturados de produto e automação de recuperação de carrinho para quem consentiu em receber contato.",
    how: [
      "Auditoria de performance, funil de checkout e estrutura de categorias.",
      "Migração do catálogo com URLs e SEO preservados.",
      "Checkout simplificado e responsivo, com menos etapas.",
      "Dados estruturados de produto e páginas de categoria otimizadas.",
      "Automação de carrinho abandonado integrada ao WhatsApp.",
    ],
    tech: ["Next.js", "Plataforma de e-commerce headless", "Schema Product", "Gateway de pagamento", "WhatsApp Cloud API"],
    indicators: ["Core Web Vitals no celular", "Taxa de conclusão do checkout", "Tráfego orgânico de categoria", "Carrinhos recuperados"],
    expectedOutcome: [
      { before: "Checkout de várias etapas faz o cliente desistir no caminho.", after: "Checkout simplificado, pensado primeiro para o celular." },
      { before: "Página de produto não diz nada para o Google sobre o que está vendendo.", after: "Dados estruturados e conteúdo técnico dão base para aparecer na busca." },
      { before: "Carrinho abandonado nunca mais recebe contato.", after: "Quem consentiu recebe uma retomada automática pelo WhatsApp." },
    ],
    service: "/servicos/criacao-de-sites/",
  },


];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);

/**
 * Demonstrações ao vivo no WhatsApp. Ficam vazias até existir um número próprio de
 * demonstração (não use o WhatsApp principal); a seção some da página de Cases.
 */
export const liveDemos: { name: string; text: string; message: string }[] = [];

// Para reativar, preencha liveDemos com um número próprio de demonstração, por exemplo:
// { name: "Clínica Demo", text: "Peça um horário, pergunte sobre convênios e remarque uma consulta.", message: "Quero testar a Clínica Demo" },
// { name: "Escritório Demo", text: "Veja como funciona uma triagem inicial dentro das regras da OAB.", message: "Quero testar o Escritório Demo" },
// { name: "Imobiliária Demo", text: "Pergunte sobre um imóvel, informe seu perfil e agende uma visita.", message: "Quero testar a Imobiliária Demo" },
