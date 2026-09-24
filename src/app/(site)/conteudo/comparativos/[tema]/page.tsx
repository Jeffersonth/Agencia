import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons, getComparison } from "@/content/articles";
import { articleSchema, breadcrumbSchema, faqSchema, graph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArticleView } from "@/components/ArticleView";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((c) => ({ tema: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conteudo/comparativos/[tema]">): Promise<Metadata> {
  const item = getComparison((await params).tema);
  if (!item) return {};
  return pageMetadata({ title: item.metaTitle, description: item.description, path: `/conteudo/comparativos/${item.slug}/`, type: "article" });
}

export default async function ComparisonPage({ params }: PageProps<"/conteudo/comparativos/[tema]">) {
  const item = getComparison((await params).tema);
  if (!item) notFound();
  const path = `/conteudo/comparativos/${item.slug}/`;
  const crumbs = [
    { name: "Conteúdo", path: "/conteudo/" },
    { name: item.title, path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({ title: item.title, description: item.description, path, updatedAt: item.updatedAt }),
          faqSchema(item.faq),
          breadcrumbSchema(crumbs),
        )}
      />
      <ArticleView article={item} crumbs={crumbs} />
    </>
  );
}
