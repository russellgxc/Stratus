import type { Metadata } from "next";

import { PageHeader } from "@/components/organism/page-header";

export const metadata: Metadata = {
  title: "Services | Stratus Strategies",
  description:
    "Services from Stratus Strategies.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra."
      />
    </main>
  );
}
