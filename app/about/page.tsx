import type { Metadata } from "next";

import { AboutPageContent } from "@/components/organism/about-page-content";
import { PageHeader } from "@/components/organism/page-header";
import { LOREM_MEDIUM } from "@/sanity/defaults";
import { getAboutPage } from "@/sanity/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "About | Stratus Strategies",
  description:
    "We work with organizations whose missions influence how people live.",
};

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <main>
      <PageHeader
        title="about"
        description={about?.introBody ?? LOREM_MEDIUM}
      />
      <AboutPageContent about={about} />
    </main>
  );
}
