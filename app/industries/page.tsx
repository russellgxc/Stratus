import type { Metadata } from "next";

import { IndustriesPageContent } from "@/components/organism/industries-page-content";
import { PageHeader } from "@/components/organism/page-header";
import { LOREM_MEDIUM } from "@/sanity/defaults";
import { getHomePage, getIndustriesPage } from "@/sanity/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Industries | Stratus Strategies",
  description: "Industries we support at Stratus Strategies.",
};

export default async function IndustriesPage() {
  const [page, home] = await Promise.all([
    getIndustriesPage(),
    getHomePage(),
  ]);

  const fromIndustries = page?.items
    ?.filter(
      (item): item is typeof item & { image: string } => Boolean(item.image),
    )
    .map((item) => ({
      title: item.title,
      body: item.body,
      image: item.image,
      imageAlt: item.imageAlt,
      ctaLabel: item.ctaLabel,
      ctaHref: item.ctaHref,
    }));

  const fromHome = home.sectorsCards
    ?.filter(
      (card): card is typeof card & { image: string } => Boolean(card.image),
    )
    .slice(0, 3)
    .map((card) => ({
      title: card.title,
      body: card.description,
      image: card.image,
      imageAlt: card.imageAlt,
      ctaLabel: "Get Started",
      ctaHref: "/contact",
    }));

  return (
    <main>
      <PageHeader
        title="industries"
        description={page?.headerDescription ?? LOREM_MEDIUM}
      />
      <IndustriesPageContent
        items={fromIndustries?.length ? fromIndustries : fromHome}
      />
    </main>
  );
}
