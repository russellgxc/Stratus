import type { Metadata } from "next";

import { AboutPageContent } from "@/components/organism/about-page-content";
import { PageHeader } from "@/components/organism/page-header";

export const metadata: Metadata = {
  title: "About | Stratus Strategies",
  description:
    "We work with organizations whose missions influence how people live.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra."
      />
      <AboutPageContent />
    </main>
  );
}
