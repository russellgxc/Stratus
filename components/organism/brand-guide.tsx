import { ArrowRight } from "lucide-react";

import { CircleArrow } from "@/components/ui/circle-arrow";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const colors = [
  { name: "Blue", token: "brand-blue", hex: "#0582F4", className: "bg-brand-blue", onDark: true },
  { name: "Muted", token: "brand-muted", hex: "#F9F6F0", className: "bg-brand-muted", onDark: false },
  { name: "Green", token: "brand-green", hex: "#ACC261", className: "bg-brand-green", onDark: false },
  { name: "Gold", token: "brand-gold", hex: "#FAC840", className: "bg-brand-gold", onDark: false },
  { name: "Black", token: "brand-black", hex: "#000000", className: "bg-brand-black", onDark: true },
  { name: "Dark", token: "brand-dark", hex: "#111111", className: "bg-brand-dark", onDark: true },
  { name: "White", token: "brand-white", hex: "#FFFFFF", className: "bg-brand-white border border-black/10", onDark: false },
] as const;

const typeSamples = [
  {
    variant: "h1" as const,
    label: "H1 · Noto Serif Display",
    meta: "clamp 2.15–4.1rem · leading 1.05 · tracking −0.02em",
    sample: "Narrative clarity at altitude.",
  },
  {
    variant: "h2" as const,
    label: "H2 · Noto Serif Display",
    meta: "clamp 1.75–2.8125rem · leading 1.15 · tracking −0.02em",
    sample: "Strategy that holds under pressure.",
  },
  {
    variant: "p1" as const,
    label: "P1 · Inter",
    meta: "clamp 1.5–2.5rem · leading none · tracking −0.02em",
    sample: "We help organizations navigate complexity.",
  },
  {
    variant: "p2" as const,
    label: "P2 · Inter",
    meta: "clamp 1.375–1.875rem · leading none · tracking −0.02em",
    sample: "Stay ahead of the narrative.",
  },
  {
    variant: "p2Small" as const,
    label: "P2 Small · Inter",
    meta: "1.5rem / 24px · leading none · tracking −0.02em",
    sample: "141 Rosswell Dr. · Courtice, ON",
  },
  {
    variant: "body" as const,
    label: "Body · Inter",
    meta: "1.125rem / 18px · leading 1.25",
    sample:
      "Their team of experts brings a wealth of experience and a fresh perspective, ensuring that clients are equipped to thrive in a competitive landscape.",
  },
] as const;

const categoryDots = [
  { label: "Environment", className: "bg-brand-green" },
  { label: "Pop & Politics", className: "bg-brand-gold" },
  { label: "Industry Alerts", className: "bg-brand-blue" },
  { label: "News", className: "bg-brand-black" },
] as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-sans text-sm font-normal uppercase tracking-[0.14em] text-brand-black/50">
      {children}
    </p>
  );
}

function LogoOn({
  bg,
  label,
  invert = false,
}: {
  bg: string;
  label: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[220px] flex-col justify-between rounded-[10px] p-8",
        bg,
      )}
    >
      <SectionLabel>{label}</SectionLabel>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.svg"
            alt=""
            width={48}
            height={48}
            className={cn("size-12", invert && "brightness-0")}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-wordmark.svg"
            alt="Stratus"
            width={180}
            height={44}
            className={cn("h-11 w-auto", invert && "brightness-0")}
          />
        </div>
        <div className="flex items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.svg"
            alt="Mark"
            width={40}
            height={40}
            className={cn("size-10", invert && "brightness-0")}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/footer-logo-mark.svg"
            alt="Footer mark"
            width={56}
            height={56}
            className={cn("size-14", !invert && "brightness-0 invert")}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Internal brand / style guide — logos, colour, type, UI language.
 */
export function BrandGuide() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Logos */}
      <section className="border-b border-black/10 py-[102px]" aria-labelledby="brand-logos">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>01 — Logos</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-logos" className="text-brand-black">
              Mark & wordmark
            </Typography>
            <Typography variant="body" className="text-brand-black/70">
              White assets on brand blue for primary lockups. Invert for light
              surfaces. Footer uses a dedicated black mark.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <LogoOn bg="bg-brand-blue" label="Primary · on blue" />
            <LogoOn bg="bg-brand-black" label="On black" />
            <LogoOn bg="bg-brand-muted" label="On muted" invert />
            <LogoOn bg="bg-brand-gold" label="On gold" invert />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-[10px] bg-brand-muted p-8">
              <SectionLabel>Mark only</SectionLabel>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mark.svg"
                alt="Logo mark"
                width={79}
                height={79}
                className="size-[79px] brightness-0"
              />
              <p className="font-sans text-sm text-brand-black/60">
                /logo-mark.svg
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-[10px] bg-brand-muted p-8">
              <SectionLabel>Wordmark</SectionLabel>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-wordmark.svg"
                alt="Stratus wordmark"
                width={200}
                height={49}
                className="h-12 w-auto brightness-0"
              />
              <p className="font-sans text-sm text-brand-black/60">
                /logo-wordmark.svg
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-[10px] bg-brand-muted p-8">
              <SectionLabel>Footer mark</SectionLabel>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footer-logo-mark.svg"
                alt="Footer logo mark"
                width={79}
                height={79}
                className="size-[79px]"
              />
              <p className="font-sans text-sm text-brand-black/60">
                /footer-logo-mark.svg
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Colour */}
      <section className="border-b border-black/10 py-[102px]" aria-labelledby="brand-colour">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>02 — Colour</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-colour" className="text-brand-black">
              Brand palette
            </Typography>
            <Typography variant="body" className="text-brand-black/70">
              Tokens live under <code className="font-sans">brand.*</code> in
              Tailwind — use utilities like{" "}
              <code className="font-sans">bg-brand-blue</code>.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
              <div
                key={color.token}
                className="flex flex-col overflow-hidden rounded-[10px]"
              >
                <div className={cn("h-36 w-full", color.className)} />
                <div className="flex flex-col gap-1 bg-brand-muted px-5 py-4">
                  <p className="font-sans text-lg leading-5 text-brand-black">
                    {color.name}
                  </p>
                  <p className="font-sans text-sm text-brand-black/55">
                    {color.hex}
                  </p>
                  <p className="font-sans text-sm text-brand-black/40">
                    {color.token}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fonts */}
      <section className="border-b border-black/10 py-[102px]" aria-labelledby="brand-fonts">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>03 — Fonts</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-fonts" className="text-brand-black">
              Typefaces
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-[10px] bg-brand-muted p-8 lg:p-12">
              <SectionLabel>Display · font-serif</SectionLabel>
              <p className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-brand-black">
                Noto Serif Display
              </p>
              <p className="font-serif text-2xl leading-snug text-brand-black/70">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
                Ww Xx Yy Zz
              </p>
              <p className="font-sans text-sm text-brand-black/50">
                Weight 400 · CSS var --font-noto-serif
              </p>
            </div>

            <div className="flex flex-col gap-6 rounded-[10px] bg-brand-muted p-8 lg:p-12">
              <SectionLabel>UI / body · font-sans</SectionLabel>
              <p className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-brand-black">
                Inter
              </p>
              <p className="font-sans text-2xl leading-snug text-brand-black/70">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
                Ww Xx Yy Zz
              </p>
              <p className="font-sans text-sm text-brand-black/50">
                Default weight · CSS var --font-inter
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Typography scale */}
      <section className="border-b border-black/10 py-[102px]" aria-labelledby="brand-type">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>04 — Typography</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-type" className="text-brand-black">
              Scale & variants
            </Typography>
            <Typography variant="body" className="text-brand-black/70">
              Mapped in{" "}
              <code className="font-sans">Typography</code> —{" "}
              <code className="font-sans">h1</code>,{" "}
              <code className="font-sans">h2</code>,{" "}
              <code className="font-sans">p1</code>,{" "}
              <code className="font-sans">p2</code>,{" "}
              <code className="font-sans">p2Small</code>,{" "}
              <code className="font-sans">body</code>,{" "}
              <code className="font-sans">link</code>.
            </Typography>
          </div>

          <div className="flex flex-col">
            {typeSamples.map((item) => (
              <div
                key={item.variant}
                className="flex flex-col gap-4 border-t border-black/10 py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <SectionLabel>{item.label}</SectionLabel>
                  <span className="font-sans text-sm text-brand-black/40">
                    {item.meta}
                  </span>
                </div>
                <Typography variant={item.variant}>{item.sample}</Typography>
              </div>
            ))}

            <div className="flex flex-col gap-4 border-t border-black/10 py-10">
              <SectionLabel>Link · Inter</SectionLabel>
              <TextLink href="#" className="text-lg">
                Read more
              </TextLink>
            </div>
          </div>
        </Container>
      </section>

      {/* UI language */}
      <section className="py-[102px]" aria-labelledby="brand-ui">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>05 — UI language</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-ui" className="text-brand-black">
              Shared components
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-6 rounded-[10px] bg-brand-muted p-8">
              <SectionLabel>Circle arrow</SectionLabel>
              <div className="flex flex-wrap items-center gap-4">
                <CircleArrow />
                <CircleArrow variant="brand" />
                <CircleArrow variant="muted" />
                <CircleArrow direction="down" />
              </div>
              <p className="font-sans text-sm text-brand-black/50">
                default · brand · muted · directions
              </p>
            </div>

            <div className="flex flex-col gap-6 rounded-[10px] bg-brand-muted p-8">
              <SectionLabel>Category dots</SectionLabel>
              <ul className="flex flex-col gap-3">
                {categoryDots.map((dot) => (
                  <li
                    key={dot.label}
                    className="inline-flex items-center gap-[10px] font-sans text-lg font-normal leading-5"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "relative -top-[3px] size-[14.57px] shrink-0 rounded-full",
                        dot.className,
                      )}
                    />
                    {dot.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 rounded-[10px] bg-brand-muted p-8">
              <SectionLabel>CTA text + arrow</SectionLabel>
              <button
                type="button"
                className="group inline-flex items-center gap-3 self-start font-sans text-[30px] font-normal leading-none tracking-[-0.02em] text-brand-black"
              >
                <span className="link-underline">Send Message</span>
                <ArrowRight
                  aria-hidden
                  className="size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-x-2"
                />
              </button>
              <p className="font-sans text-sm text-brand-black/50">
                Underline draws L→R on hover
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative h-[280px] overflow-hidden rounded-[10px] bg-brand-gold">
              <span className="absolute left-[28px] top-[24px] size-[14px] rounded-full bg-brand-black" />
              <div
                aria-hidden
                className="pointer-events-none absolute left-[120px] top-[200px] h-[180px] w-[280px] rounded-tl-[220px] bg-black/[0.03] opacity-90 transition-[transform,background-color,opacity] duration-500 ease-in-out motion-safe:group-hover:-translate-x-[20px] motion-safe:group-hover:-translate-y-[20px] motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-[0.21]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-[80px] top-[200px] h-[180px] w-[280px] rounded-tl-[220px] bg-black/[0.05] opacity-90 transition-[transform,background-color,opacity] duration-500 ease-in-out motion-safe:group-hover:-translate-x-[20px] motion-safe:group-hover:-translate-y-[20px] motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-40"
              />
              <p className="relative z-10 px-7 pt-14 font-sans text-lg text-brand-black">
                Gold card · hover arcs
              </p>
            </div>
            <div className="group relative h-[280px] overflow-hidden rounded-[10px] bg-brand-muted">
              <span className="absolute left-[28px] top-[24px] size-[14px] rounded-full bg-brand-gold" />
              <div
                aria-hidden
                className="pointer-events-none absolute left-[120px] top-[200px] h-[180px] w-[280px] rounded-tl-[220px] bg-black/[0.03] opacity-90 transition-[transform,background-color,opacity] duration-500 ease-in-out motion-safe:group-hover:-translate-x-[20px] motion-safe:group-hover:-translate-y-[20px] motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-[0.21]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-[80px] top-[200px] h-[180px] w-[280px] rounded-tl-[220px] bg-black/[0.05] opacity-90 transition-[transform,background-color,opacity] duration-500 ease-in-out motion-safe:group-hover:-translate-x-[20px] motion-safe:group-hover:-translate-y-[20px] motion-safe:group-hover:bg-black/[0.11] motion-safe:group-hover:opacity-40"
              />
              <p className="relative z-10 px-7 pt-14 font-sans text-lg text-brand-black">
                Muted card · hover arcs
              </p>
            </div>
            <div className="flex h-[280px] flex-col justify-end rounded-[10px] bg-brand-blue p-8">
              <p className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none text-brand-white">
                Page header blue
              </p>
              <p className="mt-4 font-sans text-lg leading-5 text-brand-white/80">
                Internal page banners
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
