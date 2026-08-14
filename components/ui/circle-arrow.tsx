import { cn } from "@/lib/utils";

type CircleArrowDirection = "right" | "left" | "up" | "down";
type CircleArrowVariant = "default" | "brand" | "muted";

type CircleArrowProps = {
  direction?: CircleArrowDirection;
  variant?: CircleArrowVariant;
  className?: string;
};

const directionClass: Record<CircleArrowDirection, string> = {
  right: "",
  left: "rotate-180",
  down: "rotate-90",
  up: "-rotate-90",
};

const nudgeClass: Record<CircleArrowDirection, string> = {
  right: "hover:translate-x-1",
  left: "hover:-translate-x-1",
  down: "hover:translate-y-1",
  up: "hover:-translate-y-1",
};

const fillClass: Record<CircleArrowVariant, string> = {
  default: "fill-brand-black",
  brand: "fill-brand-blue",
  muted: "fill-brand-black opacity-15",
};

/**
 * Figma Circle Arrow (84:1042)
 * Default = black, Variant2 = brand blue. White arrow glyph.
 * Hover (interactive): brand blue + slight nudge in arrow direction.
 */
export function CircleArrow({
  direction = "right",
  variant = "default",
  className,
}: CircleArrowProps) {
  const interactive = variant !== "muted";

  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0",
        interactive &&
          "group transition-transform duration-200 ease-in-out",
        interactive && nudgeClass[direction],
        className,
      )}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={cn("size-12", directionClass[direction])}
      >
        <circle
          cx="24"
          cy="24"
          r="24"
          className={cn(
            fillClass[variant],
            interactive &&
              "transition-colors duration-200 ease-in-out group-hover:fill-brand-blue",
          )}
        />
        {/* Bold white right-arrow — stem + chevron head */}
        <path
          d="M14 24H31.5M31.5 24L24.5 17M31.5 24L24.5 31"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
