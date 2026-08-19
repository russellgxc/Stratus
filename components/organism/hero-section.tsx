import Image from "next/image";

import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";

const HERO_HEADING_DEFAULT =
  "We work with organizations whose missions influence how people live.";
const HERO_CTA_DEFAULT = "More about us";

type HeroSectionProps = {
  heading?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroSection({
  heading = HERO_HEADING_DEFAULT,
  ctaLabel = HERO_CTA_DEFAULT,
  imageSrc = "/hero-illustration.png",
  imageAlt = "Illustration of people collaborating to climb geometric steps",
}: HeroSectionProps = {}) {
  return (
    <section
      id="hero"
      className="site-section site-section--hero relative flex flex-col overflow-hidden bg-brand-blue text-brand-white"
    >
      {/* Brand arc — Figma 350:1964 within 1920×1084 hero */}
      <div
        aria-hidden
        className="hero-arc pointer-events-none absolute bottom-0 left-[27.4%] right-0 top-[7.8%] z-0 max-md:left-[-35%] max-md:right-[-20%] max-md:top-[-20%]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand-arc.svg"
          alt=""
          className="size-full object-contain object-right-bottom"
        />
      </div>

      {/* Top padding clears the fixed navbar (expanded height) */}
      <Container className="relative z-10 grid max-w-[1800px] flex-1 grid-cols-1 items-stretch gap-8 px-6 pb-10 pt-[7.5rem] lg:grid-cols-2 lg:gap-10 lg:pb-16 lg:pt-[8.5rem]">
        <div className="hero-copy relative z-10 flex items-end self-stretch py-4 lg:pb-[clamp(2rem,7vh,5rem)] lg:pt-[12vh]">
          <div className="w-full max-w-[39.5rem]">
            <Typography
              as="h1"
              variant="h1"
              className="text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1] tracking-normal text-brand-white"
            >
              {heading}
            </Typography>

            <TextLink
              href="#about"
              arrow="down"
              className="mt-8 text-2xl leading-[1.85] tracking-[-0.02em] text-brand-white hover:text-brand-white"
            >
              {ctaLabel}
            </TextLink>
          </div>
        </div>

        <div className="hero-image relative flex min-h-0 w-full items-center self-center lg:justify-end">
          <div className="relative aspect-[696/486] w-full max-w-[700px] min-[2000px]:max-w-[900px] overflow-hidden rounded">
            <Image
              key={imageSrc}
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
