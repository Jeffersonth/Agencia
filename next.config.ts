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
