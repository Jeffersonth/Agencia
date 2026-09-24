import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/content/articles";
import { articleSchema, breadcrumbSchema, faqSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArticleView } from "@/components/ArticleView";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ tema: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conteudo/guias/[tema]">): Promise<Metadata> {
  const guide = getGuide((await params).tema);
  if (!guide) return {};
  return pageMetadata({ title: guide.metaTitle, description: guide.description, path: `/conteudo/guias/${guide.slug}/`, type: "article" });
}

export default async function GuidePage({ params }: PageProps<"/conteudo/guias/[tema]">) {
  const guide = getGuide((await params).tema);
  if (!guide) notFound();
  const path = `/conteudo/guias/${guide.slug}/`;
  const crumbs = [
    { name: "Conteúdo", path: "/conteudo/" },
    { name: guide.title, path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({ title: guide.title, description: guide.description, path, updatedAt: guide.updatedAt }),
          faqSchema(guide.faq),
          breadcrumbSchema(crumbs),
        )}
      />
      <ArticleView article={guide} crumbs={crumbs} />
    </>
  );
}
