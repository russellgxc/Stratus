"use client";

import type { FormEvent } from "react";
import { usePathname } from "next/navigation";

import { CircleArrow } from "@/components/ui/circle-arrow";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const SUBSCRIBE_ENABLED = false;

export function EmailSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  if (!SUBSCRIBE_ENABLED) {
    return null;
  }

  return (
    <section
      id="subscribe"
      className={cn(
        "text-brand-black",
        isHome ? "bg-brand-white" : "bg-brand-muted",
      )}
      aria-labelledby="subscribe-heading"
    >
      {/*
        Figma 287:801 spacing:
        - pt 74 / pb 138
        - content ~1415 within 1440 rail
        - title ↔ copy gap 263
        - copy stack ↔ form gap 66
        - fields ~371 wide, ~61 gap, submit 48
      */}
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-[138px] pt-[74px]">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-[263px]">
          <Typography
            as="h2"
            variant="h2"
            id="subscribe-heading"
            className="shrink-0 text-[clamp(3rem,7vw,5.625rem)] font-normal leading-[0.9] tracking-[-0.06em] text-brand-black"
          >
            Subscribe
          </Typography>

          <div className="flex w-full max-w-[803px] flex-col gap-[66px]">
            <div className="flex flex-col gap-0">
              <Typography
                variant="p2"
                className="leading-[1.43] text-brand-black"
              >
                Stay ahead of the narrative.
              </Typography>
              <Typography
                variant="body"
                className="mt-[0px] text-lg leading-5 text-brand-black"
              >
                Subscribe for updates on the latest trends and insights.
              </Typography>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8 sm:flex-row sm:items-end sm:gap-[61px]"
            >
              <label className="flex min-w-0 flex-1 flex-col gap-3">
                <span className="sr-only">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  autoComplete="name"
                  className="w-full border-0 border-b border-brand-black bg-transparent pb-3 font-sans text-xl font-normal leading-5 text-brand-black placeholder:text-[#4a4a4a] outline-none"
                />
              </label>

              <div className="flex min-w-0 flex-1 items-end gap-4">
                <label className="flex min-w-0 flex-1 flex-col gap-3">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="w-full border-0 border-b border-brand-black bg-transparent pb-3 font-sans text-xl font-normal leading-5 text-brand-black placeholder:text-[#4a4a4a] outline-none"
                  />
                </label>

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="mb-0.5 size-12 shrink-0"
                >
                  <CircleArrow direction="right" variant="default" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
