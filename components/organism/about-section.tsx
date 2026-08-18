import Image from "next/image";

import { Accordion } from "@/components/ui/accordion";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";

const aboutAccordionItems = [
  {
    id: "story",
    title: "Our Story",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra. Duis commodo ultrices interdum. Donec auctor congue auctor. Aliquam erat volutpat. Integer facilisis convallis orci at efficitur.",
  },
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra. Duis commodo ultrices interdum. Donec auctor congue auctor. Aliquam erat volutpat. Integer facilisis convallis orci at efficitur.",
  },
  {
    id: "experience",
    title: "Experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra. Duis commodo ultrices interdum. Donec auctor congue auctor. Aliquam erat volutpat. Integer facilisis convallis orci at efficitur.",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="site-section flex flex-col bg-brand-muted text-brand-black"
      aria-labelledby="about-heading"
    >
      {/* Centered 1440px content rail (non-hero sections) */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-20 lg:py-28">
        <Typography
          as="h2"
          variant="h2"
          id="about-heading"
          className="text-[clamp(3rem,7vw,5.625rem)] font-normal leading-[0.9] tracking-[-0.06em] text-brand-black"
        >
          about us
        </Typography>

        <div className="mt-12 grid w-full grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20">
          <div className="flex w-full flex-col gap-10 lg:gap-16">
            <div className="relative aspect-[696/486] w-full overflow-hidden rounded">
              <Image
                src="/about-illustration.png"
                alt="Illustration of people navigating abstract geometric forms"
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover object-top"
              />
            </div>

            <TextLink
              href="/about"
              arrow="right"
              className="hidden text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black lg:inline-flex"
            >
              More about us
            </TextLink>
          </div>

          <div className="flex w-full flex-col gap-8 lg:pt-2">
            <div className="flex w-full flex-col gap-6">
              <Typography variant="p2" className="text-brand-black">
                We help organizations navigate complexity and strengthen
                reputation.
              </Typography>
              <Typography
                variant="body"
                className="text-lg font-normal leading-5 text-brand-black"
              >
                With a focus on strategic planning and operational efficiency, we
                help organizations navigate complex challenges and achieve their
                goals. Their team of experts brings a wealth of experience and a
                fresh perspective, ensuring that clients are equipped to thrive
                in a competitive landscape.
              </Typography>
            </div>

            <Accordion items={[...aboutAccordionItems]} className="mt-4 w-full" />

            <TextLink
              href="/about"
              arrow="right"
              className="text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black lg:hidden"
            >
              More about us
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
