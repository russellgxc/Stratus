import { AboutSection } from "@/components/organism/about-section";
import { HeroSection } from "@/components/organism/hero-section";
import { InsightSection } from "@/components/organism/insight-section";
import { PracticesSection } from "@/components/organism/practices-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PracticesSection />
      <InsightSection />
    </main>
  );
}
