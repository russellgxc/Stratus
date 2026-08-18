"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { CircleArrow } from "@/components/ui/circle-arrow";
import { InsightCard } from "@/components/ui/insight-card";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";
import type { InsightItem } from "@/lib/insights";
import { cn } from "@/lib/utils";

const CARD_WIDTH = 465;
const SCROLL_DURATION_MS = Math.round(550 * 1.4);

type InsightSectionProps = {
  items: InsightItem[];
};

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function InsightSection({ items }: InsightSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrowState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  const cancelScrollAnimation = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    const el = scrollerRef.current;
    if (el) {
      el.style.scrollSnapType = "";
    }
  }, []);

  const animateScrollLeft = useCallback(
    (to: number, duration: number) => {
      const element = scrollerRef.current;
      if (!element) return;

      cancelScrollAnimation();

      const from = element.scrollLeft;
      const delta = to - from;
      if (Math.abs(delta) < 1) return;

      // Mandatory snap fights per-frame scrollLeft and makes the jump look instant.
      element.style.scrollSnapType = "none";

      const start = performance.now();

      function frame(now: number) {
        const progress = Math.min(1, (now - start) / duration);
        element!.scrollLeft = from + delta * easeInOutCubic(progress);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(frame);
          return;
        }

        element!.scrollLeft = to;
        animFrameRef.current = null;
        element!.style.scrollSnapType = "";
        updateArrowState();
      }

      animFrameRef.current = requestAnimationFrame(frame);
    },
    [cancelScrollAnimation, updateArrowState],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateArrowState();
    el.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);

    return () => {
      cancelScrollAnimation();
      el.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, [cancelScrollAnimation, updateArrowState]);

  function getCardStep() {
    const el = scrollerRef.current;
    const cards = el?.querySelectorAll<HTMLElement>("[data-insight-card]");
    if (cards && cards.length >= 2) {
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }
    const card = cards?.[0];
    const styles = el ? getComputedStyle(el) : null;
    const gap = styles ? Number.parseFloat(styles.columnGap || styles.gap) || 0 : 0;
    return (card?.offsetWidth ?? CARD_WIDTH) + gap;
  }

  function goPrev() {
    const el = scrollerRef.current;
    if (!el || !canPrev) return;
    const step = getCardStep();
    const currentIndex = Math.round(el.scrollLeft / step);
    const target = Math.max(0, (currentIndex - 1) * step);
    animateScrollLeft(target, SCROLL_DURATION_MS);
  }

  function goNext() {
    const el = scrollerRef.current;
    if (!el || !canNext) return;
    const step = getCardStep();
    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentIndex = Math.round(el.scrollLeft / step);
    const target = Math.min(maxScroll, (currentIndex + 1) * step);
    animateScrollLeft(target, SCROLL_DURATION_MS);
  }

  return (
    <section
      id="insight"
      className="site-section flex flex-col bg-brand-muted text-brand-black"
      aria-labelledby="insight-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-[146px]">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          <div className="flex w-full max-w-[343px] shrink-0 flex-col gap-12">
            <Typography
              as="h2"
              variant="h2"
              id="insight-heading"
              className="text-[clamp(3rem,7vw,5.625rem)] font-normal leading-[0.9] tracking-[-0.06em] text-brand-black"
            >
              insight
            </Typography>

            <Typography
              variant="body"
              className="text-lg leading-5 text-[#4a4a4a]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              varius tempus metus sed viverra. Duis commodo.
            </Typography>

            <TextLink
              href="/insight"
              arrow="right"
              className="text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black"
            >
              View all
            </TextLink>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-[60px]">
            <div
              ref={scrollerRef}
              className={cn(
                "flex overflow-x-auto pb-1",
                /* Two 465px cards share leftover space; never collapse below 32px */
                "gap-[max(32px,calc(100%-930px))]",
                "snap-x snap-mandatory",
                "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              )}
            >
              {items.map((insight) => (
                <div
                  key={insight.id}
                  data-insight-card
                  className="w-full shrink-0 snap-start sm:w-[465px]"
                >
                  <InsightCard
                    title={insight.title}
                    category={insight.category}
                    href={insight.href}
                    image={insight.image}
                    imageAlt={insight.imageAlt}
                    variant="gold"
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label="Previous insights"
                onClick={goPrev}
                disabled={!canPrev}
                className={cn(
                  "size-12 shrink-0",
                  !canPrev && "cursor-default",
                )}
              >
                <CircleArrow
                  direction="left"
                  variant={canPrev ? "default" : "muted"}
                />
              </button>
              <button
                type="button"
                aria-label="Next insights"
                onClick={goNext}
                disabled={!canNext}
                className={cn(
                  "size-12 shrink-0",
                  !canNext && "cursor-default",
                )}
              >
                <CircleArrow
                  direction="right"
                  variant={canNext ? "default" : "muted"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
