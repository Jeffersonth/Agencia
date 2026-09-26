import type { IconName } from "./types";

export const methodSteps: { title: string; text: string; result: string; detail: string; icon: IconName; duration: string; fromYou: string }[] = [
  {
    title: "Diagnóstico",
    text: "Entendemos processos, gargalos, sistemas, dados e oportunidades de automação.",
    result: "Escopo claro, prioridades definidas e oportunidades com maior potencial de impacto.",
    detail: "Entrevistas, análise de dados e registro do “antes” (tempo de resposta, faltas, horas gastas) para medir o resultado depois.",
    icon: "search",
    duration: "até 7 dias",
    fromYou: "uma conversa inicial e acesso a quem conhece o processo.",
  },
  {
    title: "Estratégia e Arquitetura",
    text: "Definimos como agentes, automações, integrações, dados, permissões e intervenção humana irão funcionar juntos.",
    result: "Arquitetura técnica, fluxos, integrações e indicadores definidos antes do desenvolvimento.",
    detail: "Regras de negócio, transbordo, integrações e segurança definidos por escrito antes de qualquer linha de código.",
    icon: "compass",
    duration: "1–2 semanas",
    fromYou: "aprovar fluxos, regras e escopo antes de construir.",
  },
  {
    title: "Construção e Integração",
    text: "Desenvolvemos agentes de IA, automações, integrações, bases de conhecimento e sistemas necessários ao projeto.",
    result: "Uma solução funcional conectada à operação da empresa.",
    detail: "Usamos IA para construir mais rápido, não para pular etapas. Cada entrega passa por revisão sênior e QA.",
    icon: "zap",
    duration: "conforme escopo",
    fromYou: "acessos aos sistemas e um ponto focal para dúvidas.",
  },
  {
    title: "Validação e Implantação",
    text: "Testamos fluxos, respostas, integrações, exceções e cenários reais antes da entrada em produção.",
    result: "Solução validada, documentada e preparada para operar com segurança e previsibilidade.",
    detail: "Conversas, documentos e casos reais da sua operação — inclusive os difíceis — antes de liberar para os clientes.",
    icon: "check",
    duration: "antes do go-live",
    fromYou: "casos reais para teste e o aval final para ir ao ar.",
  },
  {
    title: "Monitoramento e Evolução",
    text: "Acompanhamos desempenho, falhas, qualidade, custos e novas oportunidades de melhoria.",
    result: "Uma solução que continua evoluindo conforme a operação e as necessidades da empresa mudam.",
    detail: "Acompanhamos os indicadores, ajustamos o que precisa e evoluímos a solução todo mês.",
    icon: "gauge",
    duration: "contínuo",
    fromYou: "revisões periódicas e novas ideias de automação.",
  },
];
