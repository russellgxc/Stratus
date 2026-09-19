import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { PortableTextBlock } from "@portabletext/types";

import { FadeIn } from "@/components/ui/fade-in";
import { Container } from "@/components/ui/container";
import { SanityPortableText } from "@/components/ui/sanity-portable-text";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { LOREM_MEDIUM } from "@/sanity/defaults";
import { urlForImageWithRevision } from "@/sanity/image";
import type { SanityAboutPage } from "@/sanity/queries";

/**
 * About page body — Figma 325:1690
 *
 * Intro rail (1440): copy 632 · gap 112 · image 696
 * Story block: image 465 · gap ~104 · copy 586 (inset ~143 from rail)
 * Section stack gap: 183
 * Closing feature: Figma 269:747 (image + text)
 */
export function AboutPageContent({
  about,
}: {
  about?: SanityAboutPage | null;
}) {
  const introHeading =
    about?.introHeading ??
    "we work with organizations whose missions influence how people live.";
  const introBody = (about?.introBody ?? LOREM_MEDIUM).trim();
  const introImage =
    urlForImageWithRevision(about?.introImage) || "/about-illustration.png";
  const introImageAlt =
    about?.introImageAlt ?? "Illustration of people building steps together";
  const founderName = about?.founderName ?? "Monifa Miller";
  const founderBio = (about?.founderBio ?? LOREM_MEDIUM).trim();
  const founderImage =
    urlForImageWithRevision(about?.founderImage) || "/about-page-portrait.png";
  const founderImageAlt =
    about?.founderImageAlt ?? "Wind turbines on a misty hillside";
  const storyHeading =
    about?.storyHeading ??
    "we help organizations navigate complexity and strengthen reputation.";
  const storyBody = about?.storyBody?.length
    ? (about.storyBody as PortableTextBlock[])
    : null;
  const closingBody = LOREM_MEDIUM.trim();

  return (
    <div className="bg-brand-white text-brand-black">
      {/* Intro */}
      <section
        className="pt-[50px] md:pt-[99px] lg:pt-[134px]"
        aria-labelledby="about-intro-heading"
      >
        <Container>
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-[112px]">
            <FadeIn
              className="flex w-full max-w-[632px] shrink-0 flex-col"
              delay={0}
            >
              <Typography
                as="h2"
                variant="h1"
                id="about-intro-heading"
                className="max-w-[632px] text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-none tracking-normal text-brand-black lg:text-[60px] lg:leading-[60px]"
              >
                {introHeading}
              </Typography>

              {introBody ? (
                <Typography
                  variant="body"
                  className="mt-[53px] max-w-[328px] text-lg leading-[1.5rem] text-brand-black"
                >
                  {introBody}
                </Typography>
              ) : null}

              <Link
                href="#about-story"
                className={cn(
                  "group inline-flex items-center gap-3 self-start text-brand-black",
                  introBody ? "mt-[45px]" : "mt-[53px]",
                )}
              >
                <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                  Read More
                </span>
                <ArrowDown
                  aria-hidden
                  className="size-4 shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-1"
                />
              </Link>
            </FadeIn>

            <FadeIn
              className="relative aspect-[696/486] w-full min-w-0 max-w-[696px] flex-1 overflow-hidden rounded lg:mt-[153px]"
              delay={120}
            >
              <Image
                src={introImage}
                alt={introImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 696px"
                className="object-cover object-top"
                priority
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Story / portrait */}
      <section
        id="about-story"
        className="pb-[100px] pt-[100px] lg:pb-[183px] lg:pt-[183px]"
        aria-labelledby="about-story-heading"
      >
        <Container>
          <div className="flex flex-col gap-12 lg:ml-[143px] lg:max-w-[1154px] lg:flex-row lg:items-start lg:gap-[104px]">
            <FadeIn
              className="flex w-full max-w-[465px] shrink-0 flex-col"
              delay={0}
            >
              <div className="relative aspect-[465/383] w-full overflow-hidden rounded">
                <Image
                  src={founderImage}
                  alt={founderImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 465px"
                  className="object-cover object-[30%_center]"
                />
              </div>
              <div className="mt-4">
                <p className="font-sans text-[30px] font-normal leading-[1.1] tracking-[-0.02em] text-brand-black">
                  {founderName}
                </p>
                {founderBio ? (
                  <p className="mt-[10px] max-w-[296px] font-sans text-lg font-normal leading-[1.5rem] text-brand-black">
                    {founderBio}
                  </p>
                ) : null}
                <ul className="mt-6 flex flex-col gap-1">
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      className="link-underline font-sans text-lg font-normal leading-5 tracking-[-0.02em] text-brand-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      className="link-underline font-sans text-lg font-normal leading-5 tracking-[-0.02em] text-brand-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:Monifa.Miller@stratusstrategies.ca"
                      className="link-underline font-sans text-lg font-normal leading-5 tracking-[-0.02em] text-brand-black"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn
              className="flex w-full max-w-[586px] flex-col lg:pt-[56px]"
              delay={140}
            >
              <Typography
                as="h2"
                variant="p1"
                id="about-story-heading"
                className="max-w-[586px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-brand-black lg:text-[40px]"
              >
                {storyHeading}
              </Typography>

              {storyBody ? (
                <SanityPortableText
                  value={storyBody}
                  className="mt-[21px] max-w-[586px] gap-5"
                />
              ) : (
                <div className="mt-[21px] flex max-w-[586px] flex-col gap-5 font-sans text-lg font-normal leading-[1.5rem] text-brand-black">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula purus ligula, nec luctus risus placerat ac.
                    Donec in lacus est. Nam eu dolor varius, finibus lorem in,
                    sodales risus. Donec arcu enim, tempor sit amet nisl eu,
                    fermentum elementum est. Ut non erat tortor. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Mauris sed
                    iaculis augue, vel tempus urna. Praesent maximus tempus felis
                    sit amet sagittis.
                  </p>
                  <p>
                    Sed eros lectus, accumsan vitae ultrices vitae, faucibus a
                    ligula. Phasellus ac faucibus elit, placerat sagittis diam.
                    Vestibulum eget purus a libero malesuada interdum. Nunc
                    ultricies vestibulum lacus a sagittis. Fusce vulputate
                    pulvinar mi maximus scelerisque. Sed suscipit tristique velit,
                    in dignissim diam tincidunt in.
                  </p>
                </div>
              )}

              <a
                href="#"
                className="group mt-[46px] inline-flex items-center gap-3 self-start text-brand-black"
              >
                <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                  Download Executive Summary
                </span>
                <ArrowDown
                  aria-hidden
                  className="size-4 shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-1"
                />
              </a>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Closing feature — Figma 269:747 */}
      <section
        className="bg-brand-muted pb-[134px] pt-[100px] text-brand-black lg:pt-[183px]"
        aria-labelledby="about-awareness-heading"
      >
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[72px]">
            <FadeIn
              className="relative aspect-[750/524] w-full max-w-[750px] shrink-0 overflow-hidden rounded"
              delay={0}
            >
              <Image
                src="/about-building-awareness.png"
                alt="Illustration of people collaborating in a bright office"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover"
              />
            </FadeIn>

            <FadeIn
              className="flex w-full max-w-[604px] flex-col gap-[33px]"
              delay={120}
            >
              <Typography
                as="h2"
                variant="h1"
                id="about-awareness-heading"
                className="max-w-[395px] text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-none tracking-normal text-brand-black lg:text-[60px] lg:leading-[60px]"
              >
                Lorem ipsum dolor
              </Typography>

              {closingBody ? (
                <Typography
                  variant="body"
                  className="text-lg font-normal leading-[1.5rem] text-brand-black"
                >
                  {closingBody}
                </Typography>
              ) : null}

              <Link
                href="#about-story"
                className="group inline-flex items-center gap-3 self-start text-brand-black"
              >
                <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                  Get Started
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-4 shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-x-1"
                />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
