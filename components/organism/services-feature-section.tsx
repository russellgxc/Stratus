import { FadeIn } from "@/components/ui/fade-in";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";
import { SanityPortableText } from "@/components/ui/sanity-portable-text";
import { cn } from "@/lib/utils";
import type { PortableTextBlock } from "@portabletext/types";

const DEFAULT_INTRO =
  "Organizations need more than visibility. They need to be understood. Stratus helps organizations define and communicate what they stand for, what they are doing and why it matters.";

type ServicesFeatureSectionProps = {
  heading?: string;
  intro?: string;
  body?: PortableTextBlock[] | null;
  ctaLabel?: string;
  ctaHref?: string;
};

function CardArcs() {
  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-[190px] -right-[175px] h-[281.5px] w-[422px]",
          "rounded-tl-[348.66px] bg-black/[0.03] opacity-90",
          "transition-[transform,background-color,opacity] duration-500 ease-in-out",
          "motion-safe:group-hover:-translate-x-[30px] motion-safe:group-hover:-translate-y-[29.55px]",
          "motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-[0.21]",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-[190px] -right-[123px] h-[281.5px] w-[422px]",
          "rounded-tl-[348.66px] bg-black/[0.05] opacity-90",
          "transition-[transform,background-color,opacity] duration-500 ease-in-out",
          "motion-safe:group-hover:-translate-x-[30px] motion-safe:group-hover:-translate-y-[29.55px]",
          "motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-40",
        )}
      />
    </>
  );
}

/**
 * Services feature block — Figma 424:432 (title with description)
 */
export function ServicesFeatureSection({
  heading = "Building Awareness",
  intro = DEFAULT_INTRO,
  body = null,
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: ServicesFeatureSectionProps) {
  return (
    <section
      className="bg-brand-white pb-[102px] pt-[50px] md:pb-[134px] md:pt-[99px]"
      aria-labelledby="services-feature-heading"
    >
      <Container>
        <FadeIn className="group relative overflow-hidden rounded bg-brand-muted px-6 py-12 md:px-12 md:py-[50px] lg:px-[72px]">
          <CardArcs />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[33px]">
            <div className="flex w-full max-w-[35rem] shrink-0 flex-col gap-4 lg:w-[min(39%,35rem)]">
              <p className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="size-[14px] shrink-0 rounded-full bg-brand-blue"
                />
                <Typography
                  as="span"
                  variant="p4"
                  className="text-brand-black"
                >
                  Client services
                </Typography>
              </p>
              <Typography
                as="h2"
                variant="h1"
                id="services-feature-heading"
                className="text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-none tracking-normal text-brand-black lg:text-[60px] lg:leading-[60px]"
              >
                {heading}
              </Typography>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-[33px]">
              <Typography
                variant="p2"
                className="text-[clamp(1.375rem,2.5vw,1.875rem)] font-normal leading-[1.1] tracking-[-0.02em] text-brand-black"
              >
                {intro}
              </Typography>

              <div
                aria-hidden
                className="h-0.5 w-full bg-brand-black md:hidden"
              />

              {body?.length ? (
                <SanityPortableText value={body} className="gap-5" />
              ) : (
                <div className="flex flex-col gap-5 font-sans text-lg font-normal leading-[1.5rem] text-brand-black">
                  <p>
                    <strong className="font-semibold">Strategic Positioning</strong>{" "}
                    Clarifying how an organization, initiative or idea should be
                    understood and differentiated.{" "}
                    <strong className="font-semibold">Narrative Development</strong>{" "}
                    Creating clear, credible narratives that connect an
                    organization&apos;s work with the interests and expectations of
                    the people who matter.{" "}
                    <strong className="font-semibold">
                      Strategic Communications
                    </strong>{" "}
                    Developing communications strategies that connect
                    organizational priorities with the audiences they need to
                    reach.
                  </p>
                  <p>
                    <strong className="font-semibold">Thought Leadership</strong>{" "}
                    Helping leaders and organizations contribute meaningfully to
                    the conversations shaping their industries and communities.{" "}
                    <strong className="font-semibold">
                      Executive Communications
                    </strong>{" "}
                    Helping leaders communicate with clarity, credibility and
                    purpose when their voice matters most.
                  </p>
                </div>
              )}

              <TextLink
                href={ctaHref}
                arrow="right"
                className="self-start text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black"
              >
                {ctaLabel}
              </TextLink>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
