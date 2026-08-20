import type { Metadata } from "next";

import { PageHeader } from "@/components/organism/page-header";
import { Container } from "@/components/ui/container";
import { HalfPageCard } from "@/components/ui/half-page-card";
import { LOREM_MEDIUM } from "@/sanity/defaults";

export const metadata: Metadata = {
  title: "Services | Stratus Strategies",
  description: "Services from Stratus Strategies.",
};

const services = [
  {
    label: "Service 1",
    title: "Narrative strategy",
  },
  {
    label: "Service 2",
    title: "Reputation counsel",
  },
  {
    label: "Service 3",
    title: "Stakeholder messaging",
  },
  {
    label: "Service 4",
    title: "Campaign support",
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="services"
        description="Practical support for organizations whose work shapes how people live, decide, and trust."
      />
      <section
        className="bg-brand-white pt-[50px] pb-[102px] md:pt-[99px] md:pb-[134px]"
        aria-label="Services"
      >
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((service) => (
              <HalfPageCard
                key={service.label}
                label={service.label}
                title={service.title}
                description={LOREM_MEDIUM}
                cta="Get Started"
                href="/contact"
                className="lg:max-w-none"
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
