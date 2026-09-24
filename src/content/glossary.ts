export type Term = {
  slug: string;
  term: string;
  definition: string;
  body: string[];
  related: string[];
};

export const glossary: Term[] = [
  {
    slug: "agente-de-ia",
    term: "Agente de IA",
    definition:
      "Software que entende linguagem natural, consulta informações e executa ações em outros sistemas para cumprir um objetivo, decidindo o próximo passo a partir do contexto.",
    body: [
      "Um agente de IA combina um modelo de linguagem, uma base de conhecimento e ferramentas de integração. Ele pode, por exemplo, responder a um cliente, consultar a agenda, marcar um horário e registrar a conversa no CRM.",
      "A diferença para um chatbot tradicional é que o agente não segue um roteiro fixo de menus: ele interpreta o pedido e escolhe a ação adequada, dentro das regras definidas pela empresa.",
    ],
    related: ["/conteudo/guias/agentes-de-ia-para-empresas/", "/conteudo/comparativos/agente-de-ia-vs-chatbot/", "/solucoes/atendimento-inteligente/agente-ia-whatsapp/"],
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "Técnica em que a IA busca trechos relevantes nos documentos da empresa antes de responder, para que a resposta se baseie nesse conteúdo e possa citar a fonte.",
    body: [
      "Em vez de depender só do que o modelo aprendeu no treinamento, o RAG consulta um índice com os documentos da empresa (manuais, contratos, políticas) e entrega ao modelo os trechos mais relevantes para cada pergunta.",
      "Isso reduz respostas inventadas, mantém o conhecimento atualizado sem retreinar o modelo e permite mostrar de qual documento veio cada resposta.",
    ],
    related: ["/solucoes/operacoes/agente-de-conhecimento/", "/solucoes/ia-corporativa/ia-privada/"],
  },
  {
    slug: "sdr-com-ia",
    term: "SDR com IA",
    definition:
      "Agente de pré-vendas que aborda cada lead em segundos, faz perguntas de qualificação, pontua o lead e agenda a reunião com o vendedor.",
    body: [
      "SDR (Sales Development Representative) é o profissional de pré-vendas. O SDR com IA assume essa função de forma automática, 24 horas por dia, registrando tudo no CRM.",
      "Ele não substitui o vendedor: entrega leads qualificados para que o time comercial dedique tempo a quem tem perfil.",
    ],
    related: ["/solucoes/vendas-e-receita/sdr-com-ia/", "/conteudo/glossario/pipeline/"],
  },
  {
    slug: "geo",
    term: "GEO (Generative Engine Optimization)",
    definition:
      "Conjunto de práticas para que uma empresa seja encontrada e citada nas respostas de assistentes de IA, como ChatGPT, Gemini, Claude, Perplexity e Google AI Mode.",
    body: [
      "Também chamado de LLM SEO ou AI SEO, o GEO se apoia no SEO tradicional e acrescenta foco em conteúdo citável (respostas diretas, escopo e preços claros), dados estruturados e autoridade de marca fora do site.",
      "Como as IAs variam as respostas, não existe citação garantida. A medição é feita por tendência, com um conjunto fixo de perguntas repetido mensalmente.",
    ],
    related: ["/conteudo/guias/geo-como-aparecer-nas-ias/", "/servicos/seo-e-geo/", "/conteudo/glossario/llms-txt/"],
  },
  {
    slug: "llms-txt",
    term: "llms.txt",
    definition:
      "Arquivo de texto publicado na raiz de um site com um resumo da empresa e links para as páginas principais, pensado para leitura por modelos de linguagem.",
    body: [
      "Proposto em 2024 como padrão comunitário, o llms.txt funciona como um índice legível por máquinas, em Markdown, que ajuda assistentes de IA a entender rapidamente do que trata o site.",
      "É uma boa prática de baixo custo, mas os grandes provedores de IA não garantem que o utilizam para ranquear ou citar.",
    ],
    related: ["/conteudo/glossario/geo/", "/servicos/seo-e-geo/"],
  },
  {
    slug: "multiagentes",
    term: "Multiagentes",
    definition:
      "Arquitetura em que vários agentes de IA especializados trabalham em conjunto, cada um responsável por uma parte do processo.",
    body: [
      "Em vez de um único agente fazer tudo, um sistema multiagentes divide o trabalho: um agente atende, outro qualifica, outro consulta documentos, outro revisa. Um orquestrador coordena a conversa entre eles.",
      "A abordagem facilita testar, auditar e evoluir cada parte, mas só se justifica em processos complexos.",
    ],
    related: ["/conteudo/glossario/agente-de-ia/", "/solucoes/operacoes/automacao-de-processos/"],
  },
  {
    slug: "transbordo",
    term: "Transbordo",
    definition:
      "Transferência de uma conversa do agente de IA para um atendente humano, com o histórico e o contexto completos.",
    body: [
      "Um bom transbordo acontece por regra: quando o cliente pede, quando o tema é sensível, quando o agente não tem certeza da resposta ou quando surge uma oportunidade quente de venda.",
      "O atendente recebe o resumo da conversa e continua de onde o agente parou, sem pedir que o cliente repita tudo.",
    ],
    related: ["/solucoes/atendimento-inteligente/", "/solucoes/atendimento-inteligente/agente-ia-whatsapp/"],
  },
  {
    slug: "pipeline",
    term: "Pipeline de vendas",
    definition:
      "Representação das etapas pelas quais uma oportunidade passa, do primeiro contato ao fechamento, geralmente organizada em um CRM.",
    body: [
      "Cada etapa (novo lead, qualificado, reunião, proposta, negociação, fechado) tem critérios de avanço. Um pipeline bem mantido mostra onde as vendas travam e permite prever a receita.",
      "Com automação, as oportunidades avançam de etapa com base no que acontece, e alertas avisam quando alguém precisa agir.",
    ],
    related: ["/solucoes/vendas-e-receita/crm-e-pipeline/", "/conteudo/glossario/sdr-com-ia/"],
  },
  {
    slug: "api-oficial-do-whatsapp",
    term: "API oficial do WhatsApp",
    definition:
      "Interface fornecida pela Meta para que empresas integrem o WhatsApp a sistemas e agentes de IA, com número verificado e mensagens cobradas diretamente pela Meta.",
    body: [
      "Faz parte da WhatsApp Business Platform. Permite várias pessoas atendendo pelo mesmo número, integração com CRM e agenda e envio de mensagens de modelo aprovadas.",
      "Diferente das ferramentas não oficiais, não viola os termos de uso e não coloca o número em risco de bloqueio.",
    ],
    related: ["/conteudo/comparativos/api-oficial-vs-nao-oficial-whatsapp/", "/conteudo/guias/ia-no-whatsapp/"],
  },
  {
    slug: "ia-privada",
    term: "IA privada",
    definition:
      "Uso de inteligência artificial em um ambiente controlado pela empresa, em que os dados não treinam modelos de terceiros nem saem do seu domínio.",
    body: [
      "Pode ser implantada em nuvem privada, com provedores corporativos e contrato de não retenção, ou em infraestrutura dedicada, com modelos abertos rodando em servidor próprio.",
      "É o caminho recomendado para escritórios de advocacia, clínicas e empresas que lidam com dados sensíveis.",
    ],
    related: ["/solucoes/ia-corporativa/ia-privada/", "/conteudo/guias/ia-e-lgpd/"],
  },
  {
    slug: "alucinacao",
    term: "Alucinação (IA)",
    definition:
      "Quando um modelo de IA gera uma informação incorreta ou inventada, apresentada com aparência de verdade.",
    body: [
      "A alucinação é reduzida com base de conhecimento curada (RAG), instruções para admitir quando não sabe, validação de dados e testes com cenários reais.",
      "Em processos críticos, uma fila de revisão humana garante que nada incerto seja lançado ou enviado.",
    ],
    related: ["/conteudo/glossario/rag/", "/conteudo/guias/agentes-de-ia-para-empresas/"],
  },
  {
    slug: "e-e-a-t",
    term: "E-E-A-T",
    definition:
      "Sigla para Experiência, Especialidade, Autoridade e Confiabilidade: critérios que o Google usa para avaliar a qualidade e a credibilidade de um conteúdo.",
    body: [
      "Sinais de E-E-A-T incluem conteúdo assinado por quem tem experiência real, página “Sobre” com a trajetória do autor, dados de contato, cases verificáveis e menções da marca em outros sites.",
      "Esses mesmos sinais ajudam assistentes de IA a entender quem é a empresa e se vale a pena citá-la.",
    ],
    related: ["/conteudo/glossario/geo/", "/servicos/seo-e-geo/", "/sobre/"],
  },
  {
    slug: "dados-estruturados",
    term: "Dados estruturados (Schema.org)",
    definition:
      "Marcações no código da página que descrevem, em formato padronizado, o que ela contém: uma empresa, um serviço, um preço, um artigo, perguntas frequentes.",
    body: [
      "O vocabulário mais usado é o Schema.org, geralmente em JSON-LD. Ele ajuda buscadores e modelos de linguagem a extrair informações sem ambiguidade.",
      "Nem toda marcação gera resultado visual no Google, mas todas contribuem para a compreensão da página.",
    ],
    related: ["/conteudo/guias/geo-como-aparecer-nas-ias/", "/conteudo/glossario/geo/"],
  },
  {
    slug: "janela-de-atendimento-24-horas",
    term: "Janela de atendimento de 24 horas (WhatsApp)",
    definition:
      "Período de 24 horas aberto quando o cliente envia uma mensagem à empresa no WhatsApp, durante o qual a empresa pode responder livremente.",
    body: [
      "Dentro da janela, as respostas não dependem de modelos pré-aprovados. Fora dela, a empresa só pode iniciar a conversa com mensagens de modelo, cobradas pela Meta conforme a categoria.",
      "Por isso, agentes que respondem rápido aproveitam melhor a janela e reduzem custo.",
    ],
    related: ["/conteudo/guias/ia-no-whatsapp/", "/conteudo/glossario/api-oficial-do-whatsapp/"],
  },
  {
    slug: "ocr",
    term: "OCR (reconhecimento óptico de caracteres)",
    definition:
      "Tecnologia que transforma texto em imagens ou PDFs digitalizados em texto que o computador consegue ler e processar.",
    body: [
      "Em automação de documentos, o OCR é o primeiro passo: depois dele, a IA identifica os campos (CNPJ, valores, datas) e valida os dados antes de lançá-los em outro sistema.",
    ],
    related: ["/solucoes/operacoes/automacao-de-documentos/"],
  },
  {
    slug: "base-de-conhecimento",
    term: "Base de conhecimento",
    definition:
      "Conjunto organizado de informações da empresa — serviços, preços, regras, perguntas frequentes, manuais — que um agente de IA usa para responder.",
    body: [
      "A qualidade de um agente depende mais da base de conhecimento do que do modelo de IA. Uma base curada, atualizada e com fontes claras reduz respostas erradas.",
      "A mesma base pode alimentar o agente de WhatsApp, o assistente do site e o agente interno da equipe.",
    ],
    related: ["/conteudo/glossario/rag/", "/solucoes/operacoes/agente-de-conhecimento/"],
  },
  {
    slug: "dado-pessoal-sensivel",
    term: "Dado pessoal sensível",
    definition:
      "Categoria da LGPD que inclui dados sobre saúde, origem racial ou étnica, religião, opinião política, filiação sindical, vida sexual, genética e biometria.",
    body: [
      "O tratamento de dados sensíveis tem bases legais mais restritas e exige cuidados extras de segurança, controle de acesso e transparência.",
      "Projetos de IA em clínicas e em muitas áreas do direito lidam com esse tipo de dado e costumam pedir IA privada.",
    ],
    related: ["/conteudo/guias/ia-e-lgpd/", "/seguranca-e-lgpd/", "/solucoes/ia-corporativa/ia-privada/"],
  },
];

export const getTerm = (slug: string) => glossary.find((t) => t.slug === slug);
