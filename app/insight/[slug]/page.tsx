import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InsightPostContent } from "@/components/organism/insight-post-content";
import {
  getInsightBySlug,
  getInsightSlugs,
  getRelatedInsights,
} from "@/sanity/queries";
import { DEFAULT_INSIGHT_AUTHOR } from "@/sanity/defaults";

export const revalidate = 60;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stratus-strategies.vercel.app";

type InsightPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);

  if (!post) {
    return {
      title: "Insight | Stratus Strategies",
    };
  }

  return {
    title: `${post.title} | Stratus Strategies`,
    description: post.excerpt ?? post.title,
  };
}

export default async function InsightPostPage({ params }: InsightPostPageProps) {
  const { slug } = await params;
  const [post, relatedItems] = await Promise.all([
    getInsightBySlug(slug),
    getRelatedInsights(slug),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <InsightPostContent
        title={post.title}
        category={post.category}
        image={post.image}
        imageAlt={post.imageAlt}
        author={post.author ?? DEFAULT_INSIGHT_AUTHOR}
        shareUrl={`${SITE_URL}/insight/${slug}`}
        excerpt={post.excerpt}
        body={post.body}
        relatedItems={relatedItems}
      />
    </main>
  );
}
