import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

/**
 * Internal page header — Figma 307:1336
 * Blue 400px banner with serif title and optional body intro.
 * Nav is global/fixed in the root layout.
 */
export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header
      className={cn(
        "relative flex min-h-[400px] flex-col overflow-hidden bg-brand-blue text-brand-white",
        className,
      )}
    >
      <div
        aria-hidden
        className="page-header-arc pointer-events-none absolute -bottom-[25px] right-0 z-0 h-[184%] w-[145%]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand-arc.svg"
          alt=""
          className="size-full object-contain object-right-bottom"
        />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-[76px] pt-[7.5rem] lg:pt-[8.5rem]">
        <Typography
          as="h1"
          variant="h1"
          className="max-w-[632px] text-[clamp(3rem,6vw,5rem)] font-normal leading-[60px] tracking-normal text-brand-white lg:text-[80px]"
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            variant="body"
            className="mt-[41px] max-w-[476px] text-lg leading-5 text-brand-white"
          >
            {description}
          </Typography>
        ) : null}
      </Container>
    </header>
  );
}
