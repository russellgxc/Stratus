import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const typographyVariants = {
  h1: "font-serif text-[clamp(2.15rem,4.2vw,4.1rem)] font-normal leading-[1.05] tracking-[-0.02em] text-brand-dark",
  h2: "font-serif text-[clamp(1.75rem,3vw,2.8125rem)] font-normal leading-[1.15] tracking-[-0.02em] text-brand-dark",
  h3: "font-serif text-[clamp(1.375rem,2.5vw,1.875rem)] font-medium leading-none tracking-[-0.03em] text-brand-dark",
  p1: "font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-brand-dark",
  p2: "font-sans text-[clamp(1.375rem,2.5vw,1.875rem)] font-normal leading-[1.1] tracking-[-0.02em] text-brand-dark",
  /** Contact details / compact emphasis — Figma 24px Inter */
  p2Small:
    "font-sans text-2xl font-normal leading-[1.1] tracking-[-0.02em] text-brand-dark",
  body: "font-sans text-lg font-normal leading-[1.5rem] text-brand-dark",
  link: "link-underline font-sans text-base font-normal no-underline transition-colors hover:text-brand-blue",
} as const;

type TypographyVariant = keyof typeof typographyVariants;

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "label"
  | "a";

const defaultElement: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p1: "p",
  p2: "p",
  p2Small: "p",
  body: "p",
  link: "a",
};

type TypographyProps<T extends TypographyElement = TypographyElement> = {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Typography<T extends TypographyElement = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = (as ?? defaultElement[variant]) as ElementType;

  return (
    <Component
      className={cn(typographyVariants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
