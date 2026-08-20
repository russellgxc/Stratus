import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ArrowDirection = "down" | "left" | "right";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  arrow?: ArrowDirection | false;
  className?: string;
  external?: boolean;
};

const arrowIcons = {
  down: ArrowDown,
  left: ArrowLeft,
  right: ArrowRight,
} as const;

export function TextLink({
  href,
  children,
  arrow = "right",
  className,
  external = false,
}: TextLinkProps) {
  const ArrowIcon = arrow ? arrowIcons[arrow] : null;
  const sharedClassName = cn(
    "group inline-flex items-center gap-2 font-sans text-base font-normal text-brand-dark no-underline",
    "transition-colors duration-200 hover:text-brand-blue",
    className,
  );

  const content = (
    <>
      {ArrowIcon && arrow === "left" ? (
        <ArrowIcon
          aria-hidden
          className={cn(
            "size-4 shrink-0 transition-transform duration-200 ease-in-out",
            "group-hover:-translate-x-0.5",
          )}
        />
      ) : null}
      <span className="link-underline">{children}</span>
      {ArrowIcon && arrow !== "left" ? (
        <ArrowIcon
          aria-hidden
          className={cn(
            "size-4 shrink-0 transition-transform duration-200 ease-in-out",
            arrow === "right" && "group-hover:translate-x-0.5",
            arrow === "down" && "group-hover:translate-y-0.5",
          )}
        />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={sharedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {content}
    </Link>
  );
}
