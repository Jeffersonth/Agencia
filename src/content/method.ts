import type { IconName } from "./types";

export const methodSteps: { title: string; text: string; detail: string; icon: IconName }[] = [
  {
    title: "Diagnóstico",
    text: "Mapeamos processos, gargalos e potencial de ROI.",
    detail: "Entrevistas, análise de dados e registro do “antes” (tempo de resposta, faltas, horas gastas) para medir o resultado depois.",
    icon: "search",
  },
  {
    title: "Desenho",
    text: "Arquitetura da solução e fluxos aprovados com você.",
    detail: "Regras de negócio, transbordo, integrações e segurança definidos por escrito antes de qualquer linha de código.",
    icon: "compass",
  },
  {
    title: "Construção acelerada",
    text: "Engenharia com IA e revisão sênior em cada entrega.",
    detail: "Usamos IA para construir mais rápido, não para pular etapas. Cada entrega passa por revisão sênior e QA.",
    icon: "zap",
  },
  {
    title: "Validação",
    text: "Testes com cenários reais antes de ir ao ar.",
    detail: "Conversas, documentos e casos reais da sua operação — inclusive os difíceis — antes de liberar para os clientes.",
    icon: "check",
  },
  {
    title: "Operação contínua",
    text: "Monitoramento, ajustes e evolução mensal.",
    detail: "Acompanhamos os indicadores, ajustamos o que precisa e evoluímos a solução todo mês.",
    icon: "gauge",
  },
];
