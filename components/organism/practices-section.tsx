import Image from "next/image";

import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";

const practices = [
  {
    title: "Stratus Advisory",
    description:
      "Strategic communications, narrative development, stakeholder engagement, and executive counsel.",
    image: "/practice-advisory.png",
    imageAlt: "People collaborating in a modern studio workspace",
  },
  {
    title: "Stratus PR™",
    description:
      "Media relations, public affairs, reputation management, and crisis communications.",
    image: "/practice-pr.png",
    imageAlt: "Grid of people representing media and public relations",
  },
  {
    title: "Stratus Forum™",
    description:
      "Events, speaker management, public dialogue, and convening.",
    image: "/practice-forum.png",
    imageAlt: "Speech bubbles representing public dialogue and forums",
  },
  {
    title: "Stratus Studio™",
    description:
      "Content production, creative strategy, storytelling, and multimedia.",
    image: "/practice-studio.png",
    imageAlt: "Lightbulb illustration representing creative studio work",
  },
] as const;

export function PracticesSection() {
  return (
    <section
      id="practices"
      className="site-section flex flex-col bg-brand-white text-brand-black"
      aria-labelledby="practices-heading"
    >
      {/* Figma: px ~194 / py 146, content rail max 1440 */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-[146px]">
        {/* Figma Frame 14: vertical auto-layout gap 140 */}
        <div className="flex w-full flex-col gap-[140px]">
          {/* Header row: title left, P1 right */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <Typography
              as="h2"
              variant="h2"
              id="practices-heading"
              className="max-w-[42rem] text-[clamp(3rem,7vw,5.625rem)] font-normal leading-[0.9] tracking-[-0.06em] text-brand-black"
            >
              Our Practices
            </Typography>

            <Typography
              variant="p1"
              className="max-w-[36.3rem] shrink-0 text-brand-black lg:pt-0"
            >
              We help organizations navigate complexity and strengthen
              reputation.
            </Typography>
          </div>

          {/* Practice cards: 100px column gap */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[100px]">
            {practices.map((practice) => (
              <article
                key={practice.title}
                className="flex w-full flex-col gap-[35px]"
              >
                <div className="relative aspect-[262/183] w-full overflow-hidden rounded-tl-[153px]">
                  <Image
                    src={practice.image}
                    alt={practice.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Title → description gap ~18px */}
                <div className="flex flex-col gap-[18px]">
                  <Typography
                    as="h3"
                    variant="p2"
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
            href="/#sectors"
            arrow="right"
            className="self-start text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black"
          >
            Explore our Sectors
          </TextLink>
        </div>
      </div>
    </section>
  );
}
