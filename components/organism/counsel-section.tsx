import { Accordion } from "@/components/ui/accordion";
import { TextLink } from "@/components/ui/text-link";
import { Typography } from "@/components/ui/typography";

const defaultAccordionItems = [
  {
    id: "counsel-1",
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra. Duis commodo ultrices interdum.",
  },
  {
    id: "counsel-2",
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra. Duis commodo ultrices interdum.",
  },
  {
    id: "counsel-3",
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius tempus metus sed viverra. Duis commodo ultrices interdum.",
  },
] as const;

type CounselSectionProps = {
  heading?: string;
  introTitle?: string;
  introBody?: string;
  ctaLabel?: string;
  accordionItems?: Array<{ title: string; content: string }>;
};

export function CounselSection({
  heading = "strategic counsel for consequential moments.",
  introTitle = "lorem ipsum dolor sit amet consectetur adipiscing elit veniam cillum.",
  introBody = "lorem ipsum dolor sit amet consectetur adipiscing elit veniam cillum ea possimus adipiscing est fugiat veniam eu soluta id ex eu labore atque quibusdam.",
  ctaLabel = "Here's how we help",
  accordionItems,
}: CounselSectionProps = {}) {
  const accordion = (accordionItems?.length
    ? accordionItems.map((item, index) => ({
        id: `counsel-${index}`,
        title: item.title,
        content: item.content,
      }))
    : defaultAccordionItems) as Array<{
    id: string;
    title: string;
    content: string;
  }>;

  return (
    <section
      id="counsel"
      className="site-section flex flex-col bg-brand-muted text-brand-black"
      aria-labelledby="counsel-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-20 lg:py-28">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-x-[clamp(4rem,14vw,17rem)]">
          <div className="flex w-full flex-col gap-10 lg:gap-16">
            <Typography
              as="h2"
              variant="h2"
              id="counsel-heading"
              className="max-w-[35rem] text-[clamp(3rem,7vw,5.625rem)] font-normal leading-[1] tracking-[-0.06em] text-brand-black"
            >
              {heading}
            </Typography>

            <TextLink
              href="/services"
              arrow="right"
              className="hidden text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black lg:inline-flex"
            >
              {ctaLabel}
            </TextLink>
          </div>

          <div className="flex w-full flex-col gap-8 lg:max-w-[36.5rem] lg:pt-2">
            <div className="flex w-full flex-col gap-6">
              <Typography variant="p2" className="text-brand-black">
                {introTitle}
              </Typography>
              {introBody ? (
                <Typography
                  variant="body"
                  className="text-lg font-normal leading-[1.5rem] text-brand-black"
                >
                  {introBody}
                </Typography>
              ) : null}
            </div>

            <Accordion items={accordion} className="mt-2 w-full" />

            <TextLink
              href="/services"
              arrow="right"
              className="text-2xl leading-[1.85] tracking-[-0.02em] text-brand-black hover:text-brand-black lg:hidden"
            >
              {ctaLabel}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
