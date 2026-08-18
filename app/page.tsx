import { AboutSection } from "@/components/organism/about-section";
import { HeroSection } from "@/components/organism/hero-section";
import { InsightSection } from "@/components/organism/insight-section";
import { PracticesSection } from "@/components/organism/practices-section";
import { getInsights, getSiteSettings } from "@/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [items, settings] = await Promise.all([
    getInsights(),
    getSiteSettings(),
  ]);

  return (
    <main>
      <HeroSection
        heading={settings?.heroHeading}
        ctaLabel={settings?.heroCtaLabel}
      />
      <AboutSection />
      <PracticesSection />
      <InsightSection items={items.slice(0, 4)} />
    </main>
  );
}
