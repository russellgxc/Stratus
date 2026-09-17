import type { Metadata } from "next";

import { PageHeader } from "@/components/organism/page-header";
import { LOREM_MEDIUM } from "@/sanity/defaults";
import { getIndustriesPage } from "@/sanity/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Industries | Stratus Strategies",
  description:
    "Industries we support at Stratus Strategies.",
};

export default async function IndustriesPage() {
  const page = await getIndustriesPage();

  return (
    <main>
      <PageHeader
        title="industries"
        description={page?.headerDescription ?? LOREM_MEDIUM}
      />
    </main>
  );
}
