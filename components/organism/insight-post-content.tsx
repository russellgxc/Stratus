import Image from "next/image";
import Link from "next/link";
import type { PortableTextBlock } from "@portabletext/types";

import { InsightRelatedStories } from "@/components/organism/insight-related-stories";
import { Container } from "@/components/ui/container";
import { SanityPortableText } from "@/components/ui/sanity-portable-text";
import { ShareButtons } from "@/components/ui/share-buttons";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";
import {
  insightCategoryDotClass,
  insightCategorySlug,
  type InsightCategory,
  type InsightItem,
} from "@/lib/insights";
import { LOREM_LONG } from "@/sanity/defaults";
import { cn } from "@/lib/utils";

type InsightPostContentProps = {
  title: string;
  category: InsightCategory;
  image: string;
  imageAlt: string;
  author: string;
  shareUrl: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  relatedItems: InsightItem[];
};

export function InsightPostContent({
  title,
  category,
  image,
  imageAlt,
  author,
  shareUrl,
  excerpt,
  body,
  relatedItems,
}: InsightPostContentProps) {
  return (
    <>
      <article className="bg-brand-white pb-16 pt-[7.5rem] text-brand-black lg:pb-20 lg:pt-[5.5rem]">
        <Container>
          <div className="mx-auto max-w-[800px]">
            <Link
              href={`/insight?category=${insightCategorySlug[category]}`}
              className="mb-6 inline-flex items-center gap-3 transition-colors hover:text-brand-blue"
            >
              <span
                aria-hidden
                className={cn(
                  "size-[14px] shrink-0 rounded-full",
                  insightCategoryDotClass[category],
                )}
              />
              <Typography
                as="span"
                variant="body"
                className="text-brand-black underline underline-offset-2"
              >
                {category}
              </Typography>
            </Link>

            <Typography
              as="h1"
              variant="h1"
              className="max-w-[800px] text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-none tracking-normal text-brand-black lg:text-[60px] lg:leading-[60px]"
            >
              {title}
            </Typography>

            <div className="mt-8 flex flex-col gap-6 border-b border-brand-black/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
              <Typography
                as="p"
                variant="body"
                className="text-lg leading-[1.5rem] text-brand-black"
              >
                By {author}
              </Typography>
              <ShareButtons url={shareUrl} title={title} />
            </div>

            {excerpt ? (
              <Typography
                variant="body"
                className="mt-8 max-w-[632px] text-lg leading-[1.5rem] text-brand-black"
              >
                {excerpt}
              </Typography>
            ) : null}

            <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-12 lg:mt-16">
              {body?.length ? (
                <SanityPortableText value={body} />
              ) : (
                <Typography variant="body" className="text-lg leading-[1.5rem]">
                  {LOREM_LONG}
                </Typography>
              )}
            </div>

            <div className="mt-16 border-t border-brand-black/10 pt-10">
              <TextLink href="/insight" arrow="left">
                Back to insight
              </TextLink>
            </div>
          </div>
        </Container>
      </article>

      {relatedItems.length > 0 ? (
        <InsightRelatedStories items={relatedItems} />
      ) : null}
    </>
  );
}
