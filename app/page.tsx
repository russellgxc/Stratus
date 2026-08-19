import { AboutSection } from "@/components/organism/about-section";
import { HeroSection } from "@/components/organism/hero-section";
import { InsightSection } from "@/components/organism/insight-section";
import { PracticesSection } from "@/components/organism/practices-section";
import { getHomePage, getInsights } from "@/sanity/queries";

export const revalidate = 0;

export default async function HomePage() {
  const [items, home] = await Promise.all([getInsights(), getHomePage()]);

  return (
    <main>
      <HeroSection
        heading={home?.heroHeading}
        ctaLabel={home?.heroCtaLabel}
        imageSrc={home?.heroImageUrl}
        imageAlt={home?.heroImageAlt}
      />
      <AboutSection
        heading={home?.aboutHeading}
        introTitle={home?.aboutIntroTitle}
        introBody={home?.aboutIntroBody}
        imageSrc={home?.aboutImageUrl}
        imageAlt={home?.aboutImageAlt}
        ctaLabel={home?.aboutCtaLabel}
        accordionItems={home?.aboutAccordion}
      />
      <PracticesSection
        heading={home?.sectorsHeading}
        introText={home?.sectorsIntro}
        cards={home?.sectorsCards}
        ctaLabel={home?.sectorsCtaLabel}
      />
      <InsightSection
        items={items.slice(0, 4)}
        heading={home?.insightHeading}
        intro={home?.insightIntro}
        ctaLabel={home?.insightCtaLabel}
      />
    </main>
  );
}
