import { defineField, defineType } from "sanity";

import {
  HERO_CTA_LABEL_COPY,
  HERO_CTA_LABEL_MAX,
  HERO_HEADING_COPY,
  HERO_HEADING_MAX,
  LOREM_ACCORDION,
  LOREM_LONG,
  LOREM_MEDIUM,
  LOREM_SECTOR_CARDS,
  LOREM_SHORT,
} from "../defaults";

const imageAltField = defineField({
  name: "alt",
  title: "Alt text",
  type: "string",
  initialValue: LOREM_SHORT,
});

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "about", title: "About Section" },
    { name: "sectors", title: "Sectors Section" },
    { name: "insight", title: "Insight Section" },
  ],
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero heading",
      type: "text",
      rows: 3,
      group: "hero",
      description: `Main headline in the blue hero area. Max ${HERO_HEADING_MAX} characters.`,
      initialValue: HERO_HEADING_COPY,
      validation: (rule) =>
        rule.max(HERO_HEADING_MAX).error(`Maximum ${HERO_HEADING_MAX} characters.`),
    }),
    defineField({
      name: "heroCtaLabel",
      title: "Hero button label",
      type: "string",
      group: "hero",
      description: `Link below the heading. Max ${HERO_CTA_LABEL_MAX} characters.`,
      initialValue: HERO_CTA_LABEL_COPY,
      validation: (rule) =>
        rule.max(HERO_CTA_LABEL_MAX).error(`Maximum ${HERO_CTA_LABEL_MAX} characters.`),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [imageAltField],
    }),

    defineField({
      name: "aboutHeading",
      title: "Section heading",
      type: "string",
      group: "about",
      initialValue: "about us",
    }),
    defineField({
      name: "aboutIntroTitle",
      title: "Intro title",
      type: "text",
      rows: 2,
      group: "about",
      initialValue:
        "We help organizations navigate complexity and strengthen reputation.",
    }),
    defineField({
      name: "aboutIntroBody",
      title: "Intro body",
      type: "text",
      rows: 4,
      group: "about",
      initialValue: LOREM_LONG,
    }),
    defineField({
      name: "aboutImage",
      title: "Section image",
      type: "image",
      group: "about",
      options: { hotspot: true },
      fields: [imageAltField],
    }),
    defineField({
      name: "aboutCtaLabel",
      title: "Link label",
      type: "string",
      group: "about",
      initialValue: "More about us",
    }),
    defineField({
      name: "aboutAccordion",
      title: "Accordion items",
      type: "array",
      group: "about",
      initialValue: [...LOREM_ACCORDION],
      of: [
        {
          type: "object",
          name: "aboutAccordionItem",
          title: "Item",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
              initialValue: "Lorem ipsum dolor sit amet",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "text",
              rows: 4,
              initialValue: LOREM_LONG,
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),

    defineField({
      name: "sectorsHeading",
      title: "Section heading",
      type: "string",
      group: "sectors",
      initialValue: "sectors",
    }),
    defineField({
      name: "sectorsIntro",
      title: "Intro text",
      type: "text",
      rows: 2,
      group: "sectors",
      initialValue: LOREM_SHORT,
    }),
    defineField({
      name: "sectorsCards",
      title: "Sector cards",
      type: "array",
      group: "sectors",
      initialValue: [...LOREM_SECTOR_CARDS],
      of: [
        {
          type: "object",
          name: "sectorCard",
          title: "Card",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
              initialValue: "Lorem ipsum dolor sit amet",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              initialValue: LOREM_MEDIUM,
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [imageAltField],
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "sectorsCtaLabel",
      title: "Link label",
      type: "string",
      group: "sectors",
      initialValue: "See Our Services",
    }),

    defineField({
      name: "insightHeading",
      title: "Section heading",
      type: "string",
      group: "insight",
      initialValue: "insight",
    }),
    defineField({
      name: "insightIntro",
      title: "Intro text",
      type: "text",
      rows: 3,
      group: "insight",
      initialValue: LOREM_MEDIUM,
    }),
    defineField({
      name: "insightCtaLabel",
      title: "Link label",
      type: "string",
      group: "insight",
      initialValue: "View all",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
