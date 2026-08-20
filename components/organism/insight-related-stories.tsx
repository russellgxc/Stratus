"use client";

import { InsightCard } from "@/components/ui/insight-card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import {
  insightCategoryDotClass,
  type InsightItem,
} from "@/lib/insights";

type InsightRelatedStoriesProps = {
  items: InsightItem[];
};

export function InsightRelatedStories({ items }: InsightRelatedStoriesProps) {
  if (items.length === 0) return null;

  return (
    <section
      className="border-t border-brand-black/10 bg-brand-white py-16 md:py-24"
      aria-labelledby="related-stories-heading"
    >
      <Container>
        <Typography
          as="h2"
          variant="h2"
          id="related-stories-heading"
          className="mb-10 text-[clamp(2rem,4vw,3rem)] font-normal leading-none tracking-[-0.02em] text-brand-black"
        >
          More stories
        </Typography>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {items.map((insight) => (
            <div key={insight.id}>
              <InsightCard
                title={insight.title}
                category={insight.category}
                href={insight.href}
                image={insight.image}
                imageAlt={insight.imageAlt}
                variant="muted"
                dotClassName={insightCategoryDotClass[insight.category]}
                className="w-full max-w-none"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
