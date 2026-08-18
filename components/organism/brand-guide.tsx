import { ArrowDown } from "lucide-react";

import { Container } from "@/components/ui/container";
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

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-sans text-sm font-normal uppercase tracking-[0.14em] text-brand-black/50">
      {children}
    </p>
  );
}

/**
 * Internal brand / style guide — logos, colour, type.
 */
export function BrandGuide() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Logos */}
      <section
        className="border-b border-black/10 bg-brand-white py-[102px]"
        aria-labelledby="brand-logos"
      >
        <Container className="flex flex-col items-start gap-16">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>01 — Logos</SectionLabel>
            <Typography
              as="h2"
              variant="p1"
              id="brand-logos"
              className="text-brand-black"
            >
              logo assets
            </Typography>
          </div>

          <div className="w-full max-w-[700px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-assets.png"
              alt="Stratus primary logo, icon, and stacked lockup"
              width={1024}
              height={295}
              className="h-auto w-full bg-transparent"
            />
          </div>

          <div className="flex max-w-[640px] flex-col gap-3">
            <a
              href="/Stratus_Logos.zip"
              download="Stratus_Logos.zip"
              className="group inline-flex items-center gap-3 self-start text-brand-black"
            >
              <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
                Download all logos
              </span>
              <ArrowDown
                aria-hidden
                className="size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-1"
              />
            </a>
            <Typography variant="body" className="text-sm leading-5 text-black/40">
              The zip includes all three variants: primary, icon, and
              stacked, in blue, black, and white, as PNG and SVG. Use SVG for
              web and print at any size; use PNG when a raster file is
              required.
            </Typography>
          </div>
        </Container>
      </section>

      {/* Fonts */}
      <section
        className="border-b border-black/10 py-[102px]"
        aria-labelledby="brand-fonts"
      >
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>02 — Fonts</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-fonts" className="text-brand-black">
              typefaces
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

          <a
            href="https://fonts.google.com/share?selection.family=Inter|Noto+Serif+Display"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 self-start text-brand-black"
          >
            <span className="link-underline font-sans text-2xl font-normal leading-[44.6px] tracking-[-0.02em]">
              Download fonts
            </span>
            <ArrowDown
              aria-hidden
              className="size-[38px] shrink-0 stroke-[1.5] transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-1"
            />
          </a>
        </Container>
      </section>

      {/* Colour */}
      <section className="py-[102px]" aria-labelledby="brand-colour">
        <Container className="flex flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <SectionLabel>03 — Colour</SectionLabel>
            <Typography as="h2" variant="p1" id="brand-colour" className="text-brand-black">
              brand palette
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
    </div>
  );
}

