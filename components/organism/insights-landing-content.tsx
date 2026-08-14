"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui/container";
import { InsightCard } from "@/components/ui/insight-card";
import {
  insightCategories,
  insightCategoryDotClass,
  insights,
  type InsightCategory,
} from "@/lib/insights";
import { cn } from "@/lib/utils";

type FilterId = "all" | InsightCategory;

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "View all" },
  ...insightCategories.map((category) => ({
    id: category as FilterId,
    label: category,
  })),
];

export function InsightsLandingContent() {
  const [active, setActive] = useState<FilterId>("all");

  const visible = useMemo(() => {
    if (active === "all") return insights;
    return insights.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="bg-brand-white py-[102px]" aria-label="Insight articles">
      <Container className="flex flex-col gap-[45px]">
        <div
          className="flex flex-wrap items-center gap-5"
          role="tablist"
          aria-label="Insight categories"
        >
          {filters.map((filter) => {
            const isActive = active === filter.id;
            const showDot = filter.id !== "all";

            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter.id)}
                className="inline-flex items-center gap-[10px] font-sans text-xl font-normal leading-[25.9px] text-brand-black"
              >
                {showDot ? (
                  <span
                    aria-hidden
                    className={cn(
                      "relative -top-[3px] size-[14.57px] shrink-0 rounded-full",
                      filter.id === "Environment" && "bg-brand-green",
                      filter.id === "Pop & Politics" && "bg-brand-gold",
                      filter.id === "Industry Alerts" && "bg-brand-blue",
                      filter.id === "News" && "bg-brand-black",
                    )}
                  />
                ) : null}
                <span
                  className={cn(
                    "link-underline transition-opacity",
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-100",
                  )}
                >
                  {filter.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-x-[22px] gap-y-[31px] md:grid-cols-2 xl:grid-cols-3">
          {visible.map((insight, index) => (
            <div
              key={`${active}-${insight.id}`}
              className="insight-filter-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
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
