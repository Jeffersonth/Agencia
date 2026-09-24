import type { FAQ, IconName } from "./types";

export type Sector = {
  slug: string;
  name: string;
  menuName: string;
  icon: IconName;
  title: string;
  metaDescription: string;
  h1: string;
  answer: string;
  pains: { title: string; text: string }[];
  solutions: { service: string; why: string }[];
  compliance: { title: string; text: string; points: string[] };
  proofNote: string;
  demoCases: string[];
  faq: FAQ[];
  cta: string;
};

export const sectors: Sector[] = [
  {
    slug: "escritorios-de-advocacia",
    name: "Escritórios de Advocacia",
    menuName: "Advocacia",
    icon: "scale",
    title: "IA e Automação para Escritórios de Advocacia",
    metaDescription:
      "IA para escritórios de advocacia: atendimento e triagem 24/7, automação de documentos e IA privada para o acervo, dentro das regras da OAB e da LGPD.",
    h1: "IA para escritórios de advocacia, dentro das regras da OAB.",
    answer:
      "Ajudamos escritórios de advocacia a atender e qualificar clientes 24/7, automatizar documentos e usar IA em pesquisa e peças, sempre respeitando o Código de Ética e as regras de publicidade da OAB, com os dados dos clientes sob total controle.",
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
    icon: "stethoscope",
    title: "IA e Automação para Clínicas e Saúde",
    metaDescription:
      "IA para clínicas: agendamento, confirmação e redução de faltas pelo WhatsApp, atendimento 24/7 e automação de documentos, com LGPD para dados de saúde.",
    h1: "IA para clínicas, com agenda cheia e dados protegidos.",
    answer:
      "Implantamos agentes de IA que agendam, confirmam e reduzem faltas, além de atender pacientes 24/7 no WhatsApp, sempre com segurança de dados e conformidade com a LGPD. Sua recepção para de correr atrás e sua agenda para de ter buracos.",
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
    faq: [
      { q: "É seguro usar IA no atendimento de uma clínica?", a: "Sim, com API oficial do WhatsApp, dados em nome da clínica, controle de acesso e adequação à LGPD. O agente cuida do administrativo; o clínico fica com a equipe." },
      { q: "O agente responde dúvidas médicas?", a: "Não. Ele responde sobre agenda, convênios, preparo de exames e informações administrativas aprovadas pela clínica. Dúvidas clínicas vão para a equipe." },
      { q: "Funciona com o meu sistema de prontuário ou agenda?", a: "Se o sistema tem API, integramos direto; se não, usamos o Google Agenda como ponte. Avaliamos no Diagnóstico." },
      { q: "Vai reduzir as faltas?", a: "Confirmação ativa e lembretes são uma das formas mais simples de reduzir faltas. Medimos a sua taxa antes e depois." },
      { q: "Quanto custa?", a: "O módulo de Agendamento Inteligente parte de R$ 3.500 e o Agente de IA para WhatsApp de R$ 7.500, com sustentação mensal." },
    ],
    cta: "Vamos descobrir quantos horários sua clínica perde por mês?",
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
