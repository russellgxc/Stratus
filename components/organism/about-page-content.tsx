import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { HalfPageCard } from "@/components/ui/half-page-card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

/**
 * About page body — Figma 325:1690
 *
 * Intro rail (1440): copy 632 · gap 112 · image 696
 * Story block: image 465 · gap ~104 · copy 586 (inset ~143 from rail)
 * Section stack gap: 183
 * Cards: 710 + 20 + 710
 */
export function AboutPageContent() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Intro */}
      <section
        className="pt-[99px] lg:pt-[134px]"
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
                we work with organizations whose missions influence how people
                live.
              </Typography>

              <Typography
                variant="body"
                className="mt-[53px] max-w-[328px] text-lg leading-5 text-brand-black"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                varius tempus metus sed viverra.
              </Typography>

              <Link
                href="#about-story"
                className="group mt-[45px] inline-flex items-center gap-3 self-start text-brand-black"
              >
                <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                  Read More
                </span>
                <ArrowDown
                  aria-hidden
                  className="size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-1"
                />
              </Link>
            </FadeIn>

            <FadeIn
              className="relative aspect-[696/486] w-full min-w-0 max-w-[696px] flex-1 overflow-hidden rounded lg:mt-[153px]"
              delay={120}
            >
              <Image
                src="/about-illustration.png"
                alt="Illustration of people building steps together"
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
        className="pt-[100px] lg:pt-[183px]"
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
                  src="/about-page-portrait.png"
                  alt="Wind turbines on a misty hillside"
                  fill
                  sizes="(max-width: 1024px) 100vw, 465px"
                  className="object-cover object-[30%_center]"
                />
              </div>
              <div className="mt-4">
                <p className="font-sans text-[30px] font-normal leading-none tracking-[-0.02em] text-brand-black">
                  Monifa Miller
                </p>
                <p className="mt-[10px] max-w-[296px] font-sans text-lg font-normal leading-5 text-brand-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
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
                      href="mailto:hello@stratusstrategies.com"
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
                className="max-w-[586px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-none tracking-[-0.02em] text-brand-black lg:text-[40px]"
              >
                we help organizations navigate complexity and strengthen
                reputation.
              </Typography>

              <div className="mt-[21px] flex max-w-[586px] flex-col gap-5 font-sans text-lg font-normal leading-5 text-brand-black">
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

              <a
                href="#"
                className="group mt-[46px] inline-flex items-center gap-3 self-start text-brand-black"
              >
                <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                  Download Executive Summary
                </span>
                <ArrowDown
                  aria-hidden
                  className="size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-1"
                />
              </a>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Cards */}
      <section
        className="pb-[134px] pt-[100px] lg:pt-[183px]"
        aria-label="Mission and contact"
      >
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5">
            <FadeIn delay={0}>
              <HalfPageCard
                label="Our Mission"
                title="To help organizations navigate complexity and strengthen reputation."
                cta="Download report"
                href="#"
                arrow="down"
                className="lg:max-w-none"
              />
            </FadeIn>
            <FadeIn delay={120}>
              <HalfPageCard
                label="Connect with us"
                title="We help organizations navigate complexity and strengthen reputation."
                cta="Contact us"
                href="/contact"
                className="lg:max-w-none"
              />
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
