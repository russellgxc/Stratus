import {
  insightCategories,
  insights as fallbackInsights,
  type InsightCategory,
  type InsightItem,
} from "@/lib/insights";

import { client } from "./client";
import {
  HERO_CTA_LABEL_COPY,
  HERO_HEADING_COPY,
  LOREM_ACCORDION,
  LOREM_LONG,
  LOREM_MEDIUM,
  LOREM_SHORT,
} from "./defaults";
import { urlForImageWithRevision } from "./image";

type SanityInsight = {
  _id: string;
  title?: string;
  slug?: string;
  category?: string;
  image?: unknown;
  imageAlt?: string;
};

type SanitySiteSettings = {
  subscribeHeadline?: string;
  subscribeBody?: string;
  officeName?: string;
  officeAddress?: string;
  email?: string;
  phone?: string;
};

type SanityHomePageRaw = {
  heroHeading?: string;
  heroCtaLabel?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  aboutHeading?: string;
  aboutIntroTitle?: string;
  aboutIntroBody?: string;
  aboutImage?: unknown;
  aboutImageAlt?: string;
  aboutCtaLabel?: string;
  aboutAccordion?: Array<{ title?: string; content?: string }>;
  sectorsHeading?: string;
  sectorsIntro?: string;
  sectorsCards?: Array<{
    title?: string;
    description?: string;
    image?: unknown;
    imageAlt?: string;
  }>;
  sectorsCtaLabel?: string;
  insightHeading?: string;
  insightIntro?: string;
  insightCtaLabel?: string;
};

type LegacySiteSettingsHero = {
  heroHeading?: string;
  heroCtaLabel?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
};

export type SanityHomePage = {
  heroHeading?: string;
  heroCtaLabel?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  aboutHeading?: string;
  aboutIntroTitle?: string;
  aboutIntroBody?: string;
  aboutImageUrl?: string;
  aboutImageAlt?: string;
  aboutCtaLabel?: string;
  aboutAccordion?: Array<{ title: string; content: string }>;
  sectorsHeading?: string;
  sectorsIntro?: string;
  sectorsCards?: Array<{
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;
  sectorsCtaLabel?: string;
  insightHeading?: string;
  insightIntro?: string;
  insightCtaLabel?: string;
};

const HOME_PAGE_DEFAULTS: Required<
  Pick<
    SanityHomePage,
    | "heroHeading"
    | "heroCtaLabel"
    | "heroImageAlt"
    | "aboutHeading"
    | "aboutIntroTitle"
    | "aboutIntroBody"
    | "aboutImageAlt"
    | "aboutCtaLabel"
    | "aboutAccordion"
    | "sectorsHeading"
    | "sectorsIntro"
    | "sectorsCtaLabel"
    | "insightHeading"
    | "insightIntro"
    | "insightCtaLabel"
  >
> = {
  heroHeading: HERO_HEADING_COPY,
  heroCtaLabel: HERO_CTA_LABEL_COPY,
  heroImageAlt: "Hero image",
  aboutHeading: "about us",
  aboutIntroTitle:
    "We help organizations navigate complexity and strengthen reputation.",
  aboutIntroBody: LOREM_LONG,
  aboutImageAlt: "About section illustration",
  aboutCtaLabel: "More about us",
  aboutAccordion: LOREM_ACCORDION.map((item) => ({
    title: item.title,
    content: item.content,
  })),
  sectorsHeading: "sectors",
  sectorsIntro: LOREM_SHORT,
  sectorsCtaLabel: "See Our Services",
  insightHeading: "insight",
  insightIntro: LOREM_MEDIUM,
  insightCtaLabel: "View all",
};

function mapHomePage(
  home: SanityHomePageRaw | null,
  legacyHero: LegacySiteSettingsHero | null,
): SanityHomePage {
  const heroImage = home?.heroImage ?? legacyHero?.heroImage;
  const aboutAccordion =
    home?.aboutAccordion
      ?.filter((item) => item.title && item.content)
      .map((item) => ({
        title: item.title!,
        content: item.content!,
      })) ?? HOME_PAGE_DEFAULTS.aboutAccordion;

  const sectorsCards = home?.sectorsCards
    ?.map((card) => {
      const image = urlForImageWithRevision(card.image);
      if (!card.title || !image) return null;

      return {
        title: card.title,
        description: card.description ?? LOREM_MEDIUM,
        image,
        imageAlt: card.imageAlt ?? card.title,
      };
    })
    .filter(
      (
        card,
      ): card is {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
      } => Boolean(card),
    );

  return {
    heroHeading:
      home?.heroHeading ??
      legacyHero?.heroHeading ??
      HOME_PAGE_DEFAULTS.heroHeading,
    heroCtaLabel:
      home?.heroCtaLabel ??
      legacyHero?.heroCtaLabel ??
      HOME_PAGE_DEFAULTS.heroCtaLabel,
    heroImageUrl: urlForImageWithRevision(heroImage) || undefined,
    heroImageAlt:
      home?.heroImageAlt ??
      legacyHero?.heroImageAlt ??
      HOME_PAGE_DEFAULTS.heroImageAlt,
    aboutHeading: home?.aboutHeading ?? HOME_PAGE_DEFAULTS.aboutHeading,
    aboutIntroTitle:
      home?.aboutIntroTitle ?? HOME_PAGE_DEFAULTS.aboutIntroTitle,
    aboutIntroBody: home?.aboutIntroBody ?? HOME_PAGE_DEFAULTS.aboutIntroBody,
    aboutImageUrl: urlForImageWithRevision(home?.aboutImage) || undefined,
    aboutImageAlt: home?.aboutImageAlt ?? HOME_PAGE_DEFAULTS.aboutImageAlt,
    aboutCtaLabel: home?.aboutCtaLabel ?? HOME_PAGE_DEFAULTS.aboutCtaLabel,
    aboutAccordion,
    sectorsHeading: home?.sectorsHeading ?? HOME_PAGE_DEFAULTS.sectorsHeading,
    sectorsIntro: home?.sectorsIntro ?? HOME_PAGE_DEFAULTS.sectorsIntro,
    sectorsCards: sectorsCards?.length ? sectorsCards : undefined,
    sectorsCtaLabel:
      home?.sectorsCtaLabel ?? HOME_PAGE_DEFAULTS.sectorsCtaLabel,
    insightHeading: home?.insightHeading ?? HOME_PAGE_DEFAULTS.insightHeading,
    insightIntro: home?.insightIntro ?? HOME_PAGE_DEFAULTS.insightIntro,
    insightCtaLabel:
      home?.insightCtaLabel ?? HOME_PAGE_DEFAULTS.insightCtaLabel,
  };
}

function isInsightCategory(value: string | undefined): value is InsightCategory {
  return Boolean(value && insightCategories.includes(value as InsightCategory));
}

function mapInsight(doc: SanityInsight): InsightItem | null {
  if (!doc.title || !doc.slug || !isInsightCategory(doc.category)) {
    return null;
  }

  const image = urlForImageWithRevision(doc.image);
  if (!image) return null;

  return {
    id: doc.slug,
    title: doc.title,
    category: doc.category,
    href: `/insight/${doc.slug}`,
    image,
    imageAlt: doc.imageAlt || doc.title,
  };
}

export async function getInsights(): Promise<InsightItem[]> {
  if (!client) return fallbackInsights;

  try {
    const docs = await client.fetch<SanityInsight[]>(
      `*[_type == "insight" && defined(slug.current)] | order(order asc, _createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        category,
        image,
        "imageAlt": coalesce(image.alt, title)
      }`,
    );

    const mapped = docs.map(mapInsight).filter((item): item is InsightItem => Boolean(item));
    return mapped.length > 0 ? mapped : fallbackInsights;
  } catch {
    return fallbackInsights;
  }
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  if (!client) return null;

  try {
    return await client.fetch<SanitySiteSettings | null>(
      `*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
        subscribeHeadline,
        subscribeBody,
        officeName,
        officeAddress,
        email,
        phone
      }`,
      {},
      { cache: "no-store" },
    );
  } catch {
    return null;
  }
}

export async function getHomePage(): Promise<SanityHomePage> {
  if (!client) return HOME_PAGE_DEFAULTS;

  try {
    const [home, legacyHero] = await Promise.all([
      client.fetch<SanityHomePageRaw | null>(
        `*[_type == "homePage"][0]{
          heroHeading,
          heroCtaLabel,
          heroImage,
          "heroImageAlt": coalesce(heroImage.alt, "Hero image"),
          aboutHeading,
          aboutIntroTitle,
          aboutIntroBody,
          aboutImage,
          "aboutImageAlt": coalesce(aboutImage.alt, "About section illustration"),
          aboutCtaLabel,
          aboutAccordion[]{ title, content },
          sectorsHeading,
          sectorsIntro,
          sectorsCards[]{
            title,
            description,
            image,
            "imageAlt": coalesce(image.alt, title)
          },
          sectorsCtaLabel,
          insightHeading,
          insightIntro,
          insightCtaLabel
        }`,
        {},
        { cache: "no-store" },
      ),
      client.fetch<LegacySiteSettingsHero | null>(
        `*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
          heroHeading,
          heroCtaLabel,
          heroImage,
          "heroImageAlt": coalesce(heroImage.alt, "Hero image")
        }`,
        {},
        { cache: "no-store" },
      ),
    ]);

    return mapHomePage(home, legacyHero);
  } catch {
    return HOME_PAGE_DEFAULTS;
  }
}

export type SanityAboutPage = {
  introHeading?: string;
  introBody?: string;
  introImage?: unknown;
  introImageAlt?: string;
  founderName?: string;
  founderBio?: string;
  founderImage?: unknown;
  founderImageAlt?: string;
  storyHeading?: string;
  storyBody?: unknown[];
  missionStatement?: string;
};

export async function getAboutPage(): Promise<SanityAboutPage | null> {
  if (!client) return null;
  try {
    return await client.fetch<SanityAboutPage | null>(
      `*[_id == "aboutPage"][0]{
        introHeading,
        introBody,
        introImage,
        "introImageAlt": coalesce(introImage.alt, "About illustration"),
        founderName,
        founderBio,
        founderImage,
        "founderImageAlt": coalesce(founderImage.alt, "Founder portrait"),
        storyHeading,
        storyBody,
        missionStatement
      }`,
    );
  } catch {
    return null;
  }
}

export type SanityContactPage = {
  heading?: string;
  body?: string;
  cardLabel?: string;
  cardTitle?: string;
};

export async function getContactPage(): Promise<SanityContactPage | null> {
  if (!client) return null;
  try {
    return await client.fetch<SanityContactPage | null>(
      `*[_id == "contactPage"][0]{
        heading, body, cardLabel, cardTitle
      }`,
    );
  } catch {
    return null;
  }
}

export type SanityServiceSection = {
  title?: string;
  description?: string;
  image?: unknown;
  imageAlt?: string;
};

export type SanityServicesPage = {
  headerDescription?: string;
  sections?: SanityServiceSection[];
};

export async function getServicesPage(): Promise<SanityServicesPage | null> {
  if (!client) return null;
  try {
    return await client.fetch<SanityServicesPage | null>(
      `*[_id == "servicesPage"][0]{
        headerDescription,
        sections[]{
          title,
          description,
          image,
          "imageAlt": coalesce(image.alt, title)
        }
      }`,
    );
  } catch {
    return null;
  }
}

export type SanitySectorCard = {
  title?: string;
  description?: string;
  image?: unknown;
  imageAlt?: string;
};

export type SanitySectors = {
  heading?: string;
  introText?: string;
  cards?: SanitySectorCard[];
};

export async function getSectors(): Promise<SanitySectors | null> {
  if (!client) return null;
  try {
    return await client.fetch<SanitySectors | null>(
      `*[_id == "sectors"][0]{
        heading,
        introText,
        cards[]{
          title,
          description,
          image,
          "imageAlt": coalesce(image.alt, title)
        }
      }`,
    );
  } catch {
    return null;
  }
}
