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
    title: "Trust looks solid until the moment it quietly collapses",
    category: "Pop & Politics",
    href: "/insight/trust-lagging-indicator",
    image: "/insight-1.png",
    imageAlt: "Professionals in conversation at an event",
  },
  {
    id: "syria",
    title: "Aid still collides with conflict inside Syria's humanitarian paradox",
    category: "Environment",
    href: "/insight/humanitarian-paradox-syria",
    image: "/insight-2.png",
    imageAlt: "Hillside cityscape at dusk",
  },
  {
    id: "france-nuclear",
    title: "France is shutting more nuclear plants as heat rises",
    category: "Industry Alerts",
    href: "/insight/france-nuclear-heat",
    image: "/insight-3.png",
    imageAlt: "Industrial steam rising against the sky",
  },
  {
    id: "syria-b",
    title: "Aid still collides with conflict inside Syria's humanitarian paradox",
    category: "Environment",
    href: "/insight/humanitarian-paradox-syria",
    image: "/insight-4.png",
    imageAlt: "Wind turbines on a coastal ridge",
  },
  {
    id: "ed-sheeran",
    title: "Ed Sheeran inspires new government-backed music in libraries scheme",
    category: "Pop & Politics",
    href: "/insight/music-in-libraries",
    image: "/insight-ed-sheeran.jpg",
    imageAlt: "Portrait of a man outdoors",
  },
  {
    id: "france-nuclear-b",
    title: "Cities feel the heat as nuclear plants go offline",
    category: "News",
    href: "/insight/france-nuclear-heat",
    image: "/insight-6.png",
    imageAlt: "City skyline at sunset",
  },
];
