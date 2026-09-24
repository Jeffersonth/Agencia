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
  {
    slug: "llm",
    term: "LLM (modelo de linguagem)",
    definition:
      "Modelo de inteligência artificial treinado com grandes volumes de texto para entender e gerar linguagem natural. É o “motor” por trás de assistentes e agentes de IA.",
    body: [
      "LLM é a sigla de Large Language Model. Exemplos conhecidos são os modelos das famílias GPT, Claude, Gemini e Llama. Eles preveem a continuação mais provável de um texto, o que permite conversar, resumir, classificar e extrair informações.",
      "Sozinho, um LLM só conhece o que aprendeu no treinamento. Para responder sobre a sua empresa e agir em sistemas, ele precisa de uma base de conhecimento e de integrações, e é isso que forma um agente.",
    ],
    related: ["/conteudo/glossario/agente-de-ia/", "/conteudo/glossario/rag/", "/conteudo/guias/agentes-de-ia-para-empresas/"],
  },
  {
    slug: "prompt",
    term: "Prompt",
    definition:
      "Instrução em linguagem natural dada a um modelo de IA para orientar o que ele deve fazer, com que tom e dentro de quais regras.",
    body: [
      "Em um agente de empresa, o prompt principal descreve o papel do agente, as regras de negócio, o que ele pode e não pode responder e quando transferir para uma pessoa.",
      "Prompts são testados com cenários reais e ajustados ao longo do tempo. Mudanças pequenas podem alterar bastante o comportamento, por isso fazem parte da sustentação.",
    ],
    related: ["/conteudo/glossario/llm/", "/conteudo/glossario/guardrails/"],
  },
  {
    slug: "tokens",
    term: "Tokens",
    definition:
      "Pedaços de texto (partes de palavras, palavras ou sinais) em que os modelos de IA dividem o que leem e escrevem. O uso de IA costuma ser cobrado por tokens.",
    body: [
      "Em português, uma palavra costuma virar um ou mais tokens. Tanto a mensagem enviada ao modelo quanto a resposta gerada contam.",
      "Bases de conhecimento bem organizadas e respostas objetivas reduzem o consumo de tokens e, portanto, o custo de uso.",
    ],
    related: ["/conteudo/glossario/janela-de-contexto/", "/conteudo/guias/quanto-custa-um-agente-de-ia/"],
  },
  {
    slug: "janela-de-contexto",
    term: "Janela de contexto",
    definition:
      "Quantidade máxima de texto, medida em tokens, que um modelo de IA consegue considerar de uma só vez: instruções, histórico da conversa e documentos consultados.",
    body: [
      "Janelas maiores permitem analisar documentos longos e conversas extensas, mas aumentam o custo e nem sempre melhoram a resposta.",
      "Por isso, em vez de enviar todos os documentos ao modelo, agentes bem construídos buscam apenas os trechos relevantes para cada pergunta (RAG).",
    ],
    related: ["/conteudo/glossario/tokens/", "/conteudo/glossario/rag/"],
  },
  {
    slug: "embeddings",
    term: "Embeddings",
    definition:
      "Representações numéricas de textos que capturam o significado, permitindo encontrar trechos parecidos mesmo quando as palavras são diferentes.",
    body: [
      "Com embeddings, a pergunta “como troco minha senha?” encontra o trecho do manual que fala em “redefinição de acesso”, mesmo sem palavras em comum.",
      "Eles são a base da busca semântica usada em agentes de conhecimento e em técnicas de RAG.",
    ],
    related: ["/conteudo/glossario/banco-vetorial/", "/conteudo/glossario/rag/"],
  },
  {
    slug: "banco-vetorial",
    term: "Banco de dados vetorial",
    definition:
      "Banco de dados que armazena embeddings e encontra rapidamente os trechos mais parecidos com uma pergunta.",
    body: [
      "É o índice que um agente consulta antes de responder: a pergunta vira um embedding e o banco devolve os trechos de documentos mais relevantes.",
      "Pode rodar em serviços de nuvem ou em servidor próprio, o que importa para projetos de IA privada.",
    ],
    related: ["/conteudo/glossario/embeddings/", "/conteudo/glossario/rag/", "/solucoes/operacoes/agente-de-conhecimento/"],
  },
  {
    slug: "fine-tuning",
    term: "Fine-tuning (ajuste fino)",
    definition:
      "Treinamento adicional de um modelo de IA com exemplos próprios, para ajustar estilo, formato ou comportamento em uma tarefa específica.",
    body: [
      "O fine-tuning muda o modelo; o RAG muda a informação que o modelo recebe. Para responder sobre dados da empresa que mudam com frequência, o RAG costuma ser mais barato e fácil de manter.",
      "O ajuste fino faz sentido em tarefas muito repetitivas e padronizadas, quando há muitos exemplos de qualidade.",
    ],
    related: ["/conteudo/glossario/rag/", "/conteudo/glossario/llm/"],
  },
  {
    slug: "chatbot",
    term: "Chatbot",
    definition:
      "Programa que conversa com usuários por texto. Os tradicionais seguem menus e roteiros fixos; os baseados em IA entendem linguagem natural.",
    body: [
      "Chatbots de menu funcionam bem para opções simples e previsíveis, mas travam quando o cliente escreve algo fora do roteiro.",
      "Um agente de IA vai além: entende pedidos livres, consulta sistemas e executa ações, dentro das regras da empresa.",
    ],
    related: ["/conteudo/comparativos/agente-de-ia-vs-chatbot/", "/conteudo/glossario/agente-de-ia/"],
  },
  {
    slug: "guardrails",
    term: "Guardrails (limites de segurança)",
    definition:
      "Regras e verificações que mantêm um agente de IA dentro do escopo: o que ele pode responder, que dados pode usar e quando deve parar e chamar uma pessoa.",
    body: [
      "Incluem instruções no prompt, filtros de conteúdo, validação de dados antes de ações, limites de acesso a sistemas e regras de transbordo.",
      "Em setores regulados, os guardrails também traduzem regras da profissão, como não dar parecer jurídico ou orientação clínica.",
    ],
    related: ["/conteudo/glossario/human-in-the-loop/", "/conteudo/glossario/transbordo/", "/solucoes/ia-corporativa/governanca-ia-lgpd/"],
  },
  {
    slug: "human-in-the-loop",
    term: "Human-in-the-loop (revisão humana)",
    definition:
      "Desenho de processo em que uma pessoa revisa ou aprova as decisões da IA em pontos definidos, antes que algo seja enviado ou lançado.",
    body: [
      "Exemplos: um analista aprova campos extraídos de uma nota fiscal quando a validação falha, ou um advogado revisa o rascunho de uma peça antes do envio.",
      "A revisão humana permite automatizar processos críticos com segurança, concentrando as pessoas nos casos de exceção.",
    ],
    related: ["/conteudo/glossario/guardrails/", "/conteudo/glossario/alucinacao/", "/solucoes/operacoes/automacao-de-documentos/"],
  },
  {
    slug: "rpa",
    term: "RPA (automação robótica de processos)",
    definition:
      "Tecnologia que automatiza tarefas repetitivas imitando as ações de uma pessoa na tela: clicar, copiar, colar e preencher campos.",
    body: [
      "O RPA é útil para sistemas antigos sem API, mas quebra quando a tela muda e não lida bem com informação não estruturada.",
      "Agentes de IA e integrações por API complementam o RPA: entendem textos e documentos e se conectam aos sistemas de forma mais estável.",
    ],
    related: ["/solucoes/operacoes/automacao-de-processos/", "/conteudo/glossario/api/"],
  },
  {
    slug: "n8n",
    term: "n8n",
    definition:
      "Ferramenta de automação de fluxos que conecta sistemas e agentes de IA, podendo ser hospedada pela própria empresa.",
    body: [
      "Com o n8n, um fluxo pode receber um lead, consultar o CRM, chamar um modelo de IA e enviar uma mensagem no WhatsApp, tudo registrado e auditável.",
      "Por permitir hospedagem própria, dá controle sobre os dados e custo previsível em alto volume.",
    ],
    related: ["/conteudo/comparativos/n8n-vs-make-vs-zapier/", "/solucoes/operacoes/automacao-de-processos/"],
  },
  {
    slug: "webhook",
    term: "Webhook",
    definition:
      "Aviso automático que um sistema envia a outro, por meio de um endereço na internet, quando algo acontece: um lead novo, um pagamento, uma mensagem recebida.",
    body: [
      "Em vez de consultar um sistema a cada minuto, a automação é acionada no momento do evento, o que deixa as respostas mais rápidas.",
      "Os formulários de um site, por exemplo, podem enviar cada lead por webhook para um fluxo que registra no CRM e avisa a equipe no WhatsApp.",
    ],
    related: ["/conteudo/glossario/api/", "/solucoes/operacoes/integracao-de-sistemas/"],
  },
  {
    slug: "api",
    term: "API",
    definition:
      "Interface que permite que dois sistemas troquem informações e comandos de forma padronizada, sem intervenção humana.",
    body: [
      "Quando um agente de IA consulta a agenda ou registra um lead no CRM, ele usa a API desses sistemas.",
      "Sistemas com API bem documentada são mais rápidos e baratos de integrar. Sem API, a integração pode exigir importação de arquivos ou RPA.",
    ],
    related: ["/solucoes/operacoes/integracao-de-sistemas/", "/conteudo/glossario/webhook/", "/conteudo/glossario/api-oficial-do-whatsapp/"],
  },
  {
    slug: "crm",
    term: "CRM",
    definition:
      "Sistema que organiza os contatos, as oportunidades e o histórico de relacionamento com clientes, geralmente com um funil de vendas.",
    body: [
      "Sigla de Customer Relationship Management. Mostra em que etapa está cada negociação, quem é o responsável e qual é o próximo passo.",
      "Integrado a agentes de IA, o CRM recebe os leads já qualificados, com o resumo da conversa, e dispara alertas quando alguém precisa agir.",
    ],
    related: ["/solucoes/vendas-e-receita/crm-e-pipeline/", "/conteudo/glossario/pipeline/"],
  },
  {
    slug: "lead-qualificado",
    term: "Lead qualificado",
    definition:
      "Contato que demonstrou interesse e atende aos critérios de perfil da empresa, como necessidade, orçamento, prazo e poder de decisão.",
    body: [
      "Muitas empresas separam o lead qualificado pelo marketing (MQL), que tem perfil e interesse, do lead qualificado para vendas (SQL), pronto para uma conversa comercial.",
      "Um SDR com IA faz as perguntas de qualificação e entrega ao vendedor só os contatos com perfil, com a pontuação e o resumo no CRM.",
    ],
    related: ["/conteudo/glossario/sdr-com-ia/", "/solucoes/vendas-e-receita/sdr-com-ia/"],
  },
  {
    slug: "opt-in",
    term: "Opt-in",
    definition:
      "Consentimento dado pelo contato para receber mensagens de uma empresa, como promoções, lembretes ou novidades no WhatsApp e por e-mail.",
    body: [
      "No WhatsApp, as regras da Meta exigem opt-in para mensagens iniciadas pela empresa. Na LGPD, o consentimento é uma das bases legais possíveis para comunicação de marketing.",
      "Um bom opt-in é claro sobre o que a pessoa vai receber e sempre oferece uma forma simples de sair (opt-out).",
    ],
    related: ["/conteudo/glossario/mensagem-de-modelo/", "/solucoes/vendas-e-receita/funis-automatizados/", "/conteudo/guias/ia-e-lgpd/"],
  },
  {
    slug: "mensagem-de-modelo",
    term: "Mensagem de modelo (WhatsApp)",
    definition:
      "Mensagem pré-aprovada pela Meta que a empresa usa para iniciar conversas no WhatsApp fora da janela de 24 horas, como lembretes, avisos e ofertas.",
    body: [
      "Os modelos são classificados em categorias (como utilidade, autenticação e marketing) e cobrados pela Meta conforme a categoria e o país.",
      "Lembretes de consulta e avisos de pedido costumam ser de utilidade; ofertas e reativação, de marketing, e exigem opt-in.",
    ],
    related: ["/conteudo/glossario/janela-de-atendimento-24-horas/", "/conteudo/glossario/opt-in/", "/conteudo/guias/ia-no-whatsapp/"],
  },
  {
    slug: "dpo",
    term: "Encarregado de dados (DPO)",
    definition:
      "Pessoa ou empresa indicada para atuar como canal de comunicação entre a organização, os titulares dos dados e a ANPD, conforme a LGPD.",
    body: [
      "O encarregado orienta a equipe sobre boas práticas, recebe pedidos e reclamações dos titulares e responde à autoridade.",
      "Em projetos de IA, participa da definição das bases legais, da política de uso de IA e da avaliação de riscos.",
    ],
    related: ["/conteudo/guias/ia-e-lgpd/", "/solucoes/ia-corporativa/governanca-ia-lgpd/", "/conteudo/glossario/base-legal/"],
  },
  {
    slug: "base-legal",
    term: "Base legal (LGPD)",
    definition:
      "Hipótese prevista na LGPD que autoriza o tratamento de dados pessoais, como consentimento, execução de contrato, obrigação legal ou legítimo interesse.",
    body: [
      "Todo uso de dados pessoais precisa de uma base legal definida. Dados sensíveis, como os de saúde, têm um conjunto mais restrito de bases possíveis.",
      "Em um projeto de IA, cada finalidade (atender, agendar, enviar lembretes, fazer marketing) deve ter a sua base legal registrada.",
    ],
    related: ["/conteudo/guias/ia-e-lgpd/", "/conteudo/glossario/dado-pessoal-sensivel/", "/conteudo/glossario/dpo/"],
  },
  {
    slug: "roi",
    term: "ROI (retorno sobre o investimento)",
    definition:
      "Indicador que compara o ganho obtido com um investimento ao valor investido, mostrando se e em quanto tempo ele se paga.",
    body: [
      "Em projetos de IA, o ganho costuma vir de horas liberadas da equipe, vendas recuperadas fora do horário e erros evitados.",
      "O prazo de retorno (payback) é o tempo até que o ganho acumulado cubra o investimento inicial.",
    ],
    related: ["/ferramentas/calculadora-roi-atendimento/", "/conteudo/guias/quanto-custa-um-agente-de-ia/", "/diagnostico/"],
  },
  {
    slug: "taxa-de-faltas",
    term: "Taxa de faltas (no-show)",
    definition:
      "Percentual de agendamentos em que o cliente ou paciente não comparece nem avisa com antecedência.",
    body: [
      "Calcula-se dividindo o número de faltas pelo número de agendamentos no período. Cada falta é um horário que não gera receita.",
      "Confirmação ativa, lembretes na véspera e oferta rápida da vaga para a lista de espera estão entre as formas mais simples de reduzir as faltas.",
    ],
    related: ["/solucoes/atendimento-inteligente/agendamento-inteligente/", "/conteudo/guias/ia-para-clinicas/"],
  },
  {
    slug: "ai-overviews",
    term: "AI Overviews e AI Mode",
    definition:
      "Recursos do Google que mostram respostas geradas por IA no topo ou no lugar dos resultados tradicionais, citando os sites usados como fonte.",
    body: [
      "Com eles, parte das buscas é resolvida sem clique. Ser uma das fontes citadas passa a ser tão importante quanto aparecer na lista de links.",
      "Conteúdo com respostas diretas, dados estruturados e autoridade da marca aumenta a chance de citação, que é o foco do GEO.",
    ],
    related: ["/conteudo/glossario/geo/", "/conteudo/guias/geo-como-aparecer-nas-ias/", "/servicos/seo-e-geo/"],
  },
];

export const getTerm = (slug: string) => glossary.find((t) => t.slug === slug);
