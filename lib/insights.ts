export const insightCategories = [
  "News",
  "Nuclear & Infrastructure",
  "Science & Tech",
  "Community & Culture",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export const insightCategoryDotClass: Record<InsightCategory, string> = {
  News: "bg-brand-black",
  "Nuclear & Infrastructure": "bg-brand-blue",
  "Science & Tech": "bg-brand-gold",
  "Community & Culture": "bg-brand-green",
};

export const insightCategorySlug: Record<InsightCategory, string> = {
  News: "news",
  "Nuclear & Infrastructure": "nuclear-infrastructure",
  "Science & Tech": "science-tech",
  "Community & Culture": "community-culture",
};

export function insightCategoryFromSlug(
  slug: string | undefined,
): InsightCategory | undefined {
  if (!slug) return undefined;
  return insightCategories.find(
    (category) => insightCategorySlug[category] === slug,
  );
}

export type InsightItem = {
  id: string;
  title: string;
  category: InsightCategory;
  href: string;
  image: string;
  imageAlt: string;
};

export const insights: InsightItem[] = [
  {
    id: "trust",
    title: "Trust looks solid until the moment it quietly collapses",
    category: "Community & Culture",
    href: "/insight/trust-lagging-indicator",
    image: "/insight-1.png",
    imageAlt: "Professionals in conversation at an event",
  },
  {
    id: "syria",
    title: "Aid still collides with conflict inside Syria's humanitarian paradox",
    category: "News",
    href: "/insight/humanitarian-paradox-syria",
    image: "/insight-2.png",
    imageAlt: "Hillside cityscape at dusk",
  },
  {
    id: "france-nuclear",
    title: "France is shutting more nuclear plants as heat rises",
    category: "Nuclear & Infrastructure",
    href: "/insight/france-nuclear-heat",
    image: "/insight-3.png",
    imageAlt: "Industrial steam rising against the sky",
  },
  {
    id: "syria-b",
    title: "Aid still collides with conflict inside Syria's humanitarian paradox",
    category: "News",
    href: "/insight/humanitarian-paradox-syria",
    image: "/insight-4.png",
    imageAlt: "Wind turbines on a coastal ridge",
  },
  {
    id: "ed-sheeran",
    title: "Ed Sheeran inspires new government-backed music in libraries scheme",
    category: "Community & Culture",
    href: "/insight/music-in-libraries",
    image: "/insight-ed-sheeran.jpg",
    imageAlt: "Portrait of a man outdoors",
  },
  {
    id: "france-nuclear-b",
    title: "Cities feel the heat as nuclear plants go offline",
    category: "Science & Tech",
    href: "/insight/france-nuclear-heat",
    image: "/insight-6.png",
    imageAlt: "City skyline at sunset",
  },
];
