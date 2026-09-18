import type { Metadata } from "next";

import { PageHeader } from "@/components/organism/page-header";
import { ServicesFeatureSection } from "@/components/organism/services-feature-section";
import { getServicesPage } from "@/sanity/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Services | Stratus Strategies",
  description: "Services from Stratus Strategies.",
};

export default async function ServicesPage() {
  const servicesPage = await getServicesPage();

  return (
    <main>
      <PageHeader
        title="services"
        description={
          servicesPage?.headerDescription ??
          "Practical support for organizations whose work shapes how people live, decide, and trust."
        }
      />
      <ServicesFeatureSection
        heading={servicesPage?.featureHeading || undefined}
        intro={servicesPage?.featureIntro || undefined}
        body={servicesPage?.featureBody?.length ? servicesPage.featureBody : null}
        ctaLabel={servicesPage?.featureCtaLabel || undefined}
        ctaHref={servicesPage?.featureCtaHref || "/contact"}
      />
    </main>
  );
}
