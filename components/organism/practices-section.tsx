import Image from "next/image";

import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";

const defaultPractices = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra.",
    image: "/practice-advisory.png",
    imageAlt: "People collaborating in a modern studio workspace",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra.",
    image: "/hero-illustration.png",
    imageAlt: "Illustration of people collaborating to climb geometric steps",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra.",
    image: "/practice-forum.png",
    imageAlt: "Speech bubbles representing public dialogue and forums",
  },
] as const;

type PracticesSectionProps = {
  heading?: string;
  introText?: string;
  ctaLabel?: string;
  cards?: Array<{
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;
};

export function PracticesSection({
  heading = "sectors",
  introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ctaLabel = "See Our Services",
  cards,
}: PracticesSectionProps = {}) {
  const practices = cards?.length ? cards : defaultPractices;

  return (
    <section
      id="sectors"
      className="site-section flex flex-col bg-brand-white text-brand-black"
      aria-labelledby="sectors-heading"
    >
      {/* Figma: px ~194 / py 146, content rail max 1440 */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-[146px]">
        {/* Figma Frame 14: vertical auto-layout gap 140 */}
        <div className="flex w-full flex-col gap-[140px]">
          {/* Header row: title left, P2 right */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <Typography
              as="h2"
              variant="h2"
              id="sectors-heading"
              className="max-w-[42rem] text-[clamp(3rem,7vw,5.625rem)] font-normal leading-[0.9] tracking-[-0.06em] text-brand-black"
            >
              {heading}
            </Typography>

            <Typography
              variant="p2"
              className="max-w-[36.3rem] shrink-0 text-brand-black lg:pt-0"
            >
              {introText}
            </Typography>
          </div>

          {/* Practice cards: 100px column gap */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[100px]">
            {practices.map((practice, index) => (
              <article
                key={`${practice.title}-${index}`}
                className="flex w-full flex-col gap-[35px]"
              >
                <div className="relative aspect-[262/183] w-full overflow-hidden rounded">
                  <Image
                    src={practice.image}
                    alt={practice.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Title → description gap ~18px */}
                <div className="flex flex-col gap-[18px]">
                  <Typography
                    as="h3"
                    variant="h3"
                    className="text-brand-black"
                  >
                    {practice.title}
                  </Typography>

                  <Typography variant="body" className="text-brand-black">
                    {practice.description}
                  </Typography>
                </div>
              </article>
            ))}
          </div>

          <TextLink
            href="/services"
            arrow="right"
            className="self-start text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black"
          >
            {ctaLabel}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
