"use client";

import { useState } from "react";
import { CircleChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  defaultOpenId?: string | null;
};

export function Accordion({
  items,
  className,
  defaultOpenId = null,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  return (
    <div className={cn("w-full", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-b-2 border-brand-black">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="font-sans text-2xl font-normal leading-none tracking-[-0.02em] text-brand-black lg:leading-[1.86]">
                {item.title}
              </span>
              <CircleChevronDown
                aria-hidden
                strokeWidth={1.5}
                className={cn(
                  "mt-2 size-6 shrink-0 text-brand-black transition-[transform,opacity] duration-300 ease-in-out",
                  isOpen && "rotate-180 opacity-20",
                )}
              />
            </button>

            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[32.3rem] pb-6 font-sans text-lg font-normal leading-5 text-brand-black">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
