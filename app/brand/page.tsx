import type { Metadata } from "next";

import { BrandGuide } from "@/components/organism/brand-guide";
import { PageHeader } from "@/components/organism/page-header";

export const metadata: Metadata = {
  title: "Brand | Stratus Strategies",
  description:
    "Stratus Strategies brand system — logos, colour, typography, and UI language.",
};

export default function BrandPage() {
  return (
    <main>
      <PageHeader
        title="Brand"
        description="Logos, colour, typefaces, and the shared UI language for Stratus Strategies."
      />
      <BrandGuide />
    </main>
  );
}
