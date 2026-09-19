import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type HalfPageCardProps = {
  label: string;
  title: string;
  /** Optional body copy under the title rule */
  description?: string;
  /** Required for muted / blue CTA variants */
  cta?: string;
  href?: string;
  /**
   * muted = Figma Default
   * blue = Variant2
   * contact = Property 1=contact (office details, no CTA)
   */
  variant?: "muted" | "blue" | "contact";
  arrow?: "right" | "down";
  /** Contact card: office / email / phone (from Sanity Contact page) */
  officeName?: string;
  officeAddress?: string;
  email?: string;
  phone?: string;
  className?: string;
};

function CardArcs() {
  // Same glyphs as InsightCard (465×550), anchored to bottom-right
  // so they stay in the corner on the wider 710 half-page card.
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
 * Half-page card — Figma 339:1877
 * Default (muted) / Variant2 (blue) / contact.
 * Hover: muted→blue (CTA variants) + corner arc grow.
 */
export function HalfPageCard({
  label,
  title,
  description,
  cta,
  href = "#",
  variant = "muted",
  arrow = "right",
  officeName = "Stratus Strategies",
  officeAddress = "141 Rosswell Dr.\nCourtice, ON\nL1E 2A4",
  email = "Monifa.Miller@stratusstrategies.ca",
  phone = "416.404.5234",
  className,
}: HalfPageCardProps) {
  const isBlue = variant === "blue";
  const isContact = variant === "contact";
  const addressLines = officeAddress
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const phoneHref = `tel:+${phone.replace(/\D/g, "")}`;

  const shellClassName = cn(
    "group relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-[10px] transition-colors duration-500 ease-in-out lg:min-h-[582px] lg:max-w-[710px]",
    isContact
      ? "bg-brand-muted p-9 text-brand-dark"
      : cn(
          "p-[45px]",
          isBlue
            ? "bg-brand-blue text-brand-white"
            : "bg-brand-muted text-brand-dark hover:bg-brand-blue hover:text-brand-white",
        ),
    className,
  );

  const ruleClassName = cn(
    "relative z-10 block h-0.5 w-[188px] transition-colors duration-500 ease-in-out",
    isContact || isBlue
      ? isContact
        ? "bg-brand-black"
        : "bg-brand-white"
      : "bg-brand-black group-hover:bg-brand-white",
  );

  const body = isContact ? (
    <>
      <CardArcs />
      <div className="relative z-10 flex w-full max-w-[541px] flex-col gap-7">
        <p className="font-sans text-lg font-normal leading-5">{label}</p>
        <h3 className="max-w-[541px] font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
          {title}
        </h3>
        <span aria-hidden className={ruleClassName} />
        <div className="flex max-w-[405px] flex-col gap-5 font-sans text-lg font-normal leading-[1.5rem] text-brand-black">
          <div>
            <p>Main office:</p>
            <p>
              {officeName}
              {addressLines.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p>Email:</p>
            <a href={`mailto:${email}`} className="link-underline">
              {email}
            </a>
          </div>
          <div>
            <p>Phone:</p>
            <a href={phoneHref}>{phone}</a>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <CardArcs />
      <p className="relative z-10 font-sans text-lg font-normal leading-5">
        {label}
      </p>
      <h3 className="relative z-10 mt-6 max-w-[541px] font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-none tracking-[-0.03em] lg:mt-[26px]">
        {title}
      </h3>
      <span aria-hidden className={cn(ruleClassName, "mt-8 lg:mt-10")} />
      {description ? (
        <p className="relative z-10 mt-8 max-w-[405px] font-sans text-lg font-normal leading-[1.5rem] lg:mt-10">
          {description}
        </p>
      ) : null}
      <div className="relative z-10 mt-auto flex items-center justify-between gap-4 pt-16">
        <span className="link-underline font-sans text-xl font-normal leading-[44.6px] tracking-[-0.02em]">
          {cta}
        </span>
        {arrow === "down" ? (
          <ArrowDown
            aria-hidden
            className={cn(
              "size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out",
              "motion-safe:group-hover:translate-y-2",
            )}
          />
        ) : (
          <ArrowRight
            aria-hidden
            className={cn(
              "size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out",
              "motion-safe:group-hover:translate-x-2",
            )}
          />
        )}
      </div>
    </>
  );

  if (isContact) {
    return (
      <aside className={shellClassName} aria-label="Office contact details">
        {body}
      </aside>
    );
  }

  return (
    <Link href={href} className={shellClassName}>
      {body}
    </Link>
  );
}
