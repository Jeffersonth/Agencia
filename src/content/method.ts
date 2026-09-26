import type { IconName } from "./types";

export const methodSteps: { title: string; text: string; detail: string; icon: IconName; duration: string; fromYou: string }[] = [
  {
    title: "Diagnóstico",
    text: "Mapeamos processos, gargalos e potencial de ROI.",
    detail: "Entrevistas, análise de dados e registro do “antes” (tempo de resposta, faltas, horas gastas) para medir o resultado depois.",
    icon: "search",
    duration: "até 7 dias",
    fromYou: "uma conversa inicial e acesso a quem conhece o processo.",
  },
  {
    title: "Estratégia e Arquitetura",
    text: "Arquitetura da solução e fluxos aprovados com você.",
    detail: "Regras de negócio, transbordo, integrações e segurança definidos por escrito antes de qualquer linha de código.",
    icon: "compass",
    duration: "1–2 semanas",
    fromYou: "aprovar fluxos, regras e escopo antes de construir.",
  },
  {
    title: "Construção e Integração",
    text: "Engenharia com IA e revisão sênior em cada entrega.",
    detail: "Usamos IA para construir mais rápido, não para pular etapas. Cada entrega passa por revisão sênior e QA.",
    icon: "zap",
    duration: "conforme escopo",
    fromYou: "acessos aos sistemas e um ponto focal para dúvidas.",
  },
  {
    title: "Validação e Implantação",
    text: "Testes com cenários reais antes de ir ao ar.",
    detail: "Conversas, documentos e casos reais da sua operação — inclusive os difíceis — antes de liberar para os clientes.",
    icon: "check",
    duration: "antes do go-live",
    fromYou: "casos reais para teste e o aval final para ir ao ar.",
  },
  {
    title: "Monitoramento e Evolução",
    text: "Monitoramento, ajustes e evolução mensal.",
    detail: "Acompanhamos os indicadores, ajustamos o que precisa e evoluímos a solução todo mês.",
    icon: "gauge",
    duration: "contínuo",
    fromYou: "revisões periódicas e novas ideias de automação.",
  },
];
