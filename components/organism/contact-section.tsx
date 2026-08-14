"use client";

import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { HalfPageCard } from "@/components/ui/half-page-card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const fieldClassName =
  "w-full border-0 border-b-2 border-brand-black bg-transparent pb-3 font-sans text-xl font-normal leading-5 text-brand-black placeholder:text-[#4a4a4a] placeholder:opacity-70 outline-none";

/**
 * Contact page body — Figma 320:1548
 * Left: intro + underline form. Right: HalfPageCard contact (339:1877).
 */
export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      className="bg-brand-white text-brand-black"
      aria-labelledby="contact-intro-heading"
    >
      <Container className="pb-[140px] pt-[99px]">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex w-full max-w-[581px] flex-col gap-[84px]">
            <div className="flex flex-col gap-8">
              <Typography
                as="h2"
                variant="p1"
                id="contact-intro-heading"
                className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-none tracking-[-0.02em] text-brand-black"
              >
                Get in touch. We’ll help you find the right next step.
              </Typography>
              <Typography
                variant="body"
                className="max-w-[539px] text-lg leading-5 text-brand-black"
              >
                Vivamus vehicula purus ligula, nec luctus risus placerat ac.
                Donec in lacus est. Nam eu dolor varius, finibus lorem in.
              </Typography>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-[66px]"
            >
              <label className="flex flex-col">
                <span className="sr-only">First name</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                  className={fieldClassName}
                />
              </label>

              <label className="flex flex-col">
                <span className="sr-only">Last name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  autoComplete="family-name"
                  required
                  className={fieldClassName}
                />
              </label>

              <label className="flex flex-col">
                <span className="sr-only">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="tel"
                  className={fieldClassName}
                />
              </label>

              <label className="flex flex-col">
                <span className="sr-only">Industry</span>
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  className={fieldClassName}
                />
              </label>

              <label className="flex flex-col">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className={cn(
                    fieldClassName,
                    "min-h-[140px] resize-y pt-1 leading-6",
                  )}
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 self-start font-sans text-[30px] font-normal leading-none tracking-[-0.02em] text-brand-black"
              >
                <span className="link-underline">Send Message</span>
                <ArrowRight
                  aria-hidden
                  className="size-[38px] shrink-0 stroke-[1.5] text-brand-black transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-x-2"
                />
              </button>
            </form>
          </div>

          <HalfPageCard
            variant="contact"
            label="Lorem ipsum"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="lg:ml-auto lg:max-w-[710px]"
          />
        </div>
      </Container>
    </section>
  );
}
