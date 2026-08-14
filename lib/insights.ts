export const insightCategories = [
  "Pop & Politics",
  "Industry Alerts",
  "News",
  "Environment",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export const insightCategoryDotClass: Record<InsightCategory, string> = {
  "Pop & Politics": "bg-brand-gold",
  "Industry Alerts": "bg-brand-blue",
  News: "bg-brand-black",
  Environment: "bg-brand-green",
};

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
    title: "Trust is a lagging indicator until it isn't anymore",
    category: "Pop & Politics",
    href: "/insight/trust-lagging-indicator",
    image: "/insight-1.png",
    imageAlt: "Professionals in conversation at an event",
  },
  {
    id: "syria",
    title: "The humanitarian paradox in Syria",
    category: "Environment",
    href: "/insight/humanitarian-paradox-syria",
    image: "/insight-2.png",
    imageAlt: "Hillside cityscape at dusk",
  },
  {
    id: "france-nuclear",
    title: "France Shuts Off More Nuclear Power as Heat Builds",
    category: "Industry Alerts",
    href: "/insight/france-nuclear-heat",
    image: "/insight-3.png",
    imageAlt: "Industrial steam rising against the sky",
  },
  {
    id: "syria-b",
    title: "The humanitarian paradox in Syria",
    category: "Environment",
    href: "/insight/humanitarian-paradox-syria",
    image: "/insight-4.png",
    imageAlt: "Wind turbines on a coastal ridge",
  },
  {
    id: "ed-sheeran",
    title:
      "Ed Sheeran inspires government-backed 'music in libraries' scheme",
    category: "Pop & Politics",
    href: "/insight/music-in-libraries",
    image: "/insight-5.png",
    imageAlt: "Portrait of a man outdoors",
  },
  {
    id: "france-nuclear-b",
    title: "France Shuts Off More Nuclear Power as Heat Builds",
    category: "Industry Alerts",
    href: "/insight/france-nuclear-heat",
    image: "/insight-6.png",
    imageAlt: "City skyline at sunset",
  },
];
