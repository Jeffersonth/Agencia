import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Termos de Uso",
  description: `Condições de uso do site da ${site.name}.`,
  path: "/termos/",
});

// TODO: revisar com o jurídico antes de publicar.
export default function TermosPage() {
  return (
    <LegalPage title="Termos de Uso" path="/termos/" updatedAt="2026-09-24">
      <p>
        Ao acessar este site, você concorda com estes Termos de Uso. Se não concordar, recomendamos não utilizar o site.
      </p>
      <h2>1. Conteúdo informativo</h2>
      <p>
        Os conteúdos deste site têm caráter informativo. Faixas de investimento são valores de referência (“a partir de”); preços, prazos e escopo
        definitivos constam apenas na proposta comercial.
      </p>
      <h2>2. Projetos demonstrativos</h2>
      <p>
        Projetos identificados como demonstrativos usam empresas fictícias e servem para ilustrar como aplicamos cada solução. Não representam
        resultados alcançados.
      </p>
      <h2>3. Ferramentas gratuitas</h2>
      <p>
        A Calculadora de ROI e o Teste de Visibilidade em IA fornecem estimativas e análises automatizadas, sem garantia de resultado. O Teste analisa
        apenas páginas públicas do endereço informado pelo usuário, que declara ter legitimidade para solicitá-lo.
      </p>
      <h2>4. Propriedade intelectual</h2>
      <p>
        Textos, marcas, layouts e demais elementos deste site pertencem à {site.legalName} ou a seus licenciantes e não podem ser reproduzidos sem
        autorização.
      </p>
      <h2>5. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a nossa <Link href="/privacidade/">Política de Privacidade</Link>.
      </p>
      <h2>6. Foro</h2>
      <p>Fica eleito o foro da comarca de {site.contact.city.split("/")[0].trim()}, {site.contact.state}, para dirimir questões relativas a estes Termos.</p>
    </LegalPage>
  );
}
