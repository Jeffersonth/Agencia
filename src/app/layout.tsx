import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, sora } from "./fonts";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * Verificação de propriedade no Google Search Console e no Bing Webmaster
 * Tools: cole o código que cada ferramenta fornece (método "tag HTML") nas
 * variáveis de ambiente GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION.
 * Sem elas, nenhuma das duas meta tags é renderizada.
 */
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.founder.linkedin }],
  creator: site.name,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#181240",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-dvh overflow-x-clip">
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
