import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Typography } from "@/components/ui/typography";
import { LOREM_MEDIUM } from "@/sanity/defaults";
import { cn } from "@/lib/utils";

export type IndustryListItem = {
  title: string;
  body?: string;
  image: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULT_ITEMS: IndustryListItem[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    body: LOREM_MEDIUM,
    image: "/practice-advisory.png",
    imageAlt: "People collaborating in a modern studio workspace",
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    body: LOREM_MEDIUM,
    image: "/hero-illustration.png",
    imageAlt: "Illustration of people collaborating to climb geometric steps",
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    body: LOREM_MEDIUM,
    image: "/practice-forum.png",
    imageAlt: "Speech bubbles representing public dialogue and forums",
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },
];

type IndustriesPageContentProps = {
  items?: IndustryListItem[];
};

export function IndustriesPageContent({
  items,
}: IndustriesPageContentProps = {}) {
  const list = items?.length ? items.slice(0, 3) : DEFAULT_ITEMS;

  return (
    <section
      className="bg-brand-white pb-[102px] pt-8 text-brand-black md:pb-[134px] md:pt-12"
      aria-label="Industries"
    >
      <Container>
        <ul className="flex list-none flex-col p-0">
          {list.map((item, index) => {
            const body = item.body?.trim() ?? "";
            const ctaLabel = item.ctaLabel?.trim() || "Get Started";
            const ctaHref = item.ctaHref?.trim() || "/contact";
            const isLast = index === list.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={`${item.title}-${index}`}
                className={cn(
                  "pb-10 pt-10 md:pb-16 md:pt-16 lg:pb-[72px] lg:pt-[72px]",
                  isFirst && "pt-0 md:pt-0 lg:pt-0",
                  !isLast && "border-b border-brand-black/25",
                )}
              >
                <FadeIn delay={index * 80}>
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[72px]">
                    <div className="relative aspect-[750/524] w-full max-w-[750px] shrink-0 overflow-hidden rounded">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 750px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex w-full max-w-[604px] flex-col gap-[33px]">
                      <Typography
                        as="h2"
                        variant="h1"
                        className="max-w-[395px] text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-none tracking-normal text-brand-black lg:text-[60px] lg:leading-[60px]"
                      >
                        {item.title}
                      </Typography>

                      {body ? (
                        <Typography
                          variant="body"
                          className="text-lg font-normal leading-[1.5rem] text-brand-black"
                        >
                          {body}
                        </Typography>
                      ) : null}

                      <Link
                        href={ctaHref}
                        className="group inline-flex items-center gap-3 self-start text-brand-black"
                      >
                        <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                          {ctaLabel}
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="size-4 shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
