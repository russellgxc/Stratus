import type { Metadata } from "next";

import { InsightsLandingContent } from "@/components/organism/insights-landing-content";
import { PageHeader } from "@/components/organism/page-header";
import { insightCategoryFromSlug } from "@/lib/insights";

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

  return (
    <main>
      <PageHeader
        title="Insight"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra."
      />
      <InsightsLandingContent
        key={category ?? "all"}
        initialCategory={insightCategoryFromSlug(category)}
      />
    </main>
  );
}
