import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // As URLs do site seguem o padrão com barra final (/solucoes/, /diagnostico/…).
  trailingSlash: true,
  // Build autocontido para a imagem Docker (deploy na VPS).
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/conteudo/guias/", destination: "/conteudo/#guias", permanent: false },
      { source: "/conteudo/comparativos/", destination: "/conteudo/#comparativos", permanent: false },
      // Página de faixas de preço descontinuada: valores agora são sempre sob consulta.
      { source: "/investimento/", destination: "/contato/", permanent: true },
      // Serviços descontinuados: o site oferece só agentes de IA, automação e criação de sites.
      { source: "/servicos/", destination: "/servicos/criacao-de-sites/", permanent: true },
      { source: "/servicos/seo-e-geo/:path*", destination: "/servicos/criacao-de-sites/", permanent: true },
      { source: "/servicos/desenvolvimento-de-sistemas/", destination: "/solucoes/operacoes/", permanent: true },
      { source: "/servicos/desenvolvimento-de-aplicativos/", destination: "/solucoes/", permanent: true },
      { source: "/solucoes/ia-corporativa/:path*", destination: "/solucoes/", permanent: true },
      { source: "/ferramentas/teste-visibilidade-ia/", destination: "/ferramentas/", permanent: true },
      { source: "/conteudo/guias/geo-como-aparecer-nas-ias/", destination: "/conteudo/", permanent: true },
      { source: "/conteudo/comparativos/chatgpt-enterprise-vs-ia-privada/", destination: "/conteudo/", permanent: true },
      { source: "/conteudo/glossario/:termo(geo|llms-txt|ia-privada|e-e-a-t|ai-overviews)/", destination: "/conteudo/glossario/", permanent: true },
      { source: "/cases/:slug(assistente-juridico-ia-privada|geo-clinica-estetica|geo-advocacia-previdenciaria|geo-software-b2b|app-agendamento-rede-clinicas|app-campo-tecnicos-manutencao|sistema-gestao-clinicas-multiunidade|portal-fornecedores-industria)/", destination: "/cases/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
