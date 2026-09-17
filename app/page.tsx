import { AboutSection } from "@/components/organism/about-section";
import { CounselSection } from "@/components/organism/counsel-section";
import { HeroSection } from "@/components/organism/hero-section";
import { PracticesSection } from "@/components/organism/practices-section";
import { getHomePage } from "@/sanity/queries";

export const revalidate = 0;

export default async function HomePage() {
  const home = await getHomePage();

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
      <CounselSection
        heading={home?.insightHeading}
        introTitle={home?.insightIntroTitle}
        introBody={home?.insightIntro}
        ctaLabel={home?.insightCtaLabel}
        accordionItems={home?.insightAccordion}
      />
    </main>
  );
}
