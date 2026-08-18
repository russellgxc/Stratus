import {
  insightCategories,
  insights as fallbackInsights,
  type InsightCategory,
  type InsightItem,
} from "@/lib/insights";

import { client } from "./client";
import { urlForImage } from "./image";

type SanityInsight = {
  _id: string;
  title?: string;
  slug?: string;
  category?: string;
  image?: unknown;
  imageAlt?: string;
};

type SanitySiteSettings = {
  heroHeading?: string;
  heroCtaLabel?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  subscribeHeadline?: string;
  subscribeBody?: string;
  officeName?: string;
  officeAddress?: string;
  email?: string;
  phone?: string;
};

function isInsightCategory(value: string | undefined): value is InsightCategory {
  return Boolean(value && insightCategories.includes(value as InsightCategory));
}

function mapInsight(doc: SanityInsight): InsightItem | null {
  if (!doc.title || !doc.slug || !isInsightCategory(doc.category)) {
    return null;
  }

  const image = urlForImage(doc.image);
  if (!image) return null;

  return {
    id: doc.slug,
    title: doc.title,
    category: doc.category,
    href: `/insight/${doc.slug}`,
    image,
    imageAlt: doc.imageAlt || doc.title,
  };
}

export async function getInsights(): Promise<InsightItem[]> {
  if (!client) return fallbackInsights;

  try {
    const docs = await client.fetch<SanityInsight[]>(
      `*[_type == "insight" && defined(slug.current)] | order(order asc, _createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        category,
        image,
        "imageAlt": coalesce(image.alt, title)
      }`,
    );

    const mapped = docs.map(mapInsight).filter((item): item is InsightItem => Boolean(item));
    return mapped.length > 0 ? mapped : fallbackInsights;
  } catch {
    return fallbackInsights;
  }
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  if (!client) return null;

  try {
    return await client.fetch<SanitySiteSettings | null>(
      `*[_id == "siteSettings"][0]{
        heroHeading,
        heroCtaLabel,
        heroImage,
        "heroImageAlt": coalesce(heroImage.alt, "Hero image"),
        subscribeHeadline,
        subscribeBody,
        officeName,
        officeAddress,
        email,
        phone
      }`,
    );
  } catch {
    return null;
  }
}
