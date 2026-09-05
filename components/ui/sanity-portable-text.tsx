import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlForImageWithRevision } from "@/sanity/image";
import { cn } from "@/lib/utils";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-sans text-lg font-normal leading-[1.5rem] text-brand-black">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-tight tracking-[-0.02em] text-brand-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl font-medium leading-tight tracking-[-0.03em] text-brand-black">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand-gold pl-6 font-sans text-xl font-normal leading-8 text-brand-black">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-6 font-sans text-lg leading-[1.5rem] text-brand-black">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 font-sans text-lg leading-[1.5rem] text-brand-black">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a
            href={href}
            className="link-underline text-brand-black transition-colors hover:text-brand-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="link-underline text-brand-black transition-colors hover:text-brand-blue"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }) => {
      const src = urlForImageWithRevision(value);
      if (!src) return null;

      return (
        <figure className="my-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px]">
            <Image
              src={src}
              alt={value.alt || ""}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>
          {value.caption ? (
            <figcaption className="mt-3 font-sans text-sm leading-5 text-brand-black/70">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

type SanityPortableTextProps = {
  value: PortableTextBlock[];
  className?: string;
};

export function SanityPortableText({
  value,
  className,
}: SanityPortableTextProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
}
