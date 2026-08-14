import type { Metadata } from "next";

import { InsightsLandingContent } from "@/components/organism/insights-landing-content";
import { PageHeader } from "@/components/organism/page-header";

export const metadata: Metadata = {
  title: "Insight | Stratus Strategies",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra.",
};

export default function InsightLandingPage() {
  return (
    <main>
      <PageHeader
        title="Insight"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra."
      />
      <InsightsLandingContent />
    </main>
  );
}
