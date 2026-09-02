import type { Metadata } from "next";

import { InsightsLandingContent } from "@/components/organism/insights-landing-content";
import { PageHeader } from "@/components/organism/page-header";
import { insightCategoryFromSlug } from "@/lib/insights";
import { getInsights } from "@/sanity/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Insight | Stratus Strategies",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra.",
};

export default async function InsightLandingPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = await getInsights();

  return (
    <main>
      <PageHeader
        title="insight"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra."
      />
      <InsightsLandingContent
        key={category ?? "all"}
        initialCategory={insightCategoryFromSlug(category)}
        items={items}
      />
    </main>
  );
}
