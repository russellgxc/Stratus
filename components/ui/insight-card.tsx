import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type InsightCardProps = {
  title: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
  variant?: "gold" | "muted";
  /** Overrides the default category dot color */
  dotClassName?: string;
  className?: string;
};

/**
 * Figma Card (88:1052)
 * Default = muted, compact corner arcs
 * Variant2 (hover) = gold fill + arcs shift up/left (~30px) so more of the circle shows
 */
export function InsightCard({
  title,
  category,
  href,
  image,
  imageAlt,
  variant = "gold",
  dotClassName,
  className,
}: InsightCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded transition-colors duration-500 ease-in-out",
        "h-auto md:h-[550px]",
        variant === "gold"
          ? "bg-brand-gold"
          : "bg-brand-muted hover:bg-brand-gold",
        className,
      )}
    >
      <div className="relative aspect-[465/256] h-auto w-full shrink-0 overflow-hidden rounded-t md:aspect-auto md:h-[256px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 465px"
          className="object-cover object-center"
        />
      </div>

      {/* Arcs — absolute to full card (Figma 88:1076/1077 → 88:1062/1063) */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-[217.74px] top-[458.56px] h-[281.5px] w-[422px]",
          "rounded-tl-[348.66px] bg-black/[0.03] opacity-90",
          "transition-[transform,background-color,opacity] duration-500 ease-in-out",
          "motion-safe:group-hover:-translate-x-[30px] motion-safe:group-hover:-translate-y-[29.55px]",
          "motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-[0.21]",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-[166.23px] top-[458.56px] h-[281.5px] w-[422px]",
          "rounded-tl-[348.66px] bg-black/[0.05] opacity-90",
          "transition-[transform,background-color,opacity] duration-500 ease-in-out",
          "motion-safe:group-hover:-translate-x-[30px] motion-safe:group-hover:-translate-y-[29.55px]",
          "motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-40",
        )}
      />

      <div className="relative z-10 flex w-full flex-col px-[24.5px] pb-[19.6px] pt-[13.3px] md:min-h-0 md:flex-1">
        <span
          aria-hidden
          className={cn(
            "mb-[13px] block size-[14px] rounded-full transition-colors duration-500 ease-in-out",
            "group-hover:bg-brand-black",
            dotClassName ??
              (variant === "gold" ? "bg-brand-black" : "bg-brand-gold"),
          )}
        />

        <div className="flex w-full min-w-0 flex-col gap-[11px]">
          <h3 className="w-full font-sans text-[30px] font-normal leading-[1.1] tracking-[-0.02em] text-brand-black">
            {title}
          </h3>
          <p className="font-sans text-sm font-normal leading-[25px] text-brand-black underline underline-offset-2">
            {category}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 md:mt-auto">
          <span className="link-underline font-sans text-lg font-normal leading-5 text-brand-black">
            Read more
          </span>
          <ArrowRight
            aria-hidden
            className={cn(
              "size-[38px] shrink-0 stroke-[1.5] text-brand-black",
              "transition-transform duration-300 ease-in-out",
              "motion-safe:group-hover:translate-x-2",
            )}
          />
        </div>
      </div>
    </Link>
  );
}
