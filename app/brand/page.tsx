import type { Metadata } from "next";

import { BrandGuide } from "@/components/organism/brand-guide";
import { PageHeader } from "@/components/organism/page-header";

export const metadata: Metadata = {
  title: "Brand | Stratus Strategies",
  description:
    "Stratus Strategies brand system — logos, colour, and typefaces.",
};

export default function BrandPage() {
  return (
    <main>
      <PageHeader
        title="brand"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra."
      />
      <BrandGuide />
    </main>
  );
}
