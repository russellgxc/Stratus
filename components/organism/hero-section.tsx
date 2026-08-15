import Image from "next/image";

import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="site-section site-section--hero relative flex flex-col overflow-hidden bg-brand-blue text-brand-white"
    >
      {/* Brand arc — Figma 350:1964 within 1920×1084 hero */}
      <div
        aria-hidden
        className="hero-arc pointer-events-none absolute bottom-0 left-[27.4%] right-0 top-[7.8%] z-0"
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
              We work with organizations whose missions influence how people
              live.
            </Typography>

            <TextLink
              href="#about"
              arrow="down"
              className="mt-8 text-2xl leading-[1.85] tracking-[-0.02em] text-brand-white hover:text-brand-white"
            >
              More about us
            </TextLink>
          </div>
        </div>

        <div className="hero-image relative flex min-h-0 w-full items-center self-center lg:justify-end">
          <div className="relative aspect-[696/486] w-full max-w-[700px] overflow-hidden rounded-tl-[clamp(4rem,14vw,12.5rem)]">
            <Image
              src="/hero-illustration.png"
              alt="Collage of people, places, and communities Stratus works with"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
