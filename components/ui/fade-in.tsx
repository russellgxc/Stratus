"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms once visible */
  delay?: number;
  /** Root margin for earlier/later trigger */
  rootMargin?: string;
  as?: "div" | "section" | "article" | "aside" | "li";
};

/**
 * Lazy-load style fade-up when the block enters the viewport.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  rootMargin = "0px 0px -8% 0px",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal-in", visible && "reveal-in--visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
