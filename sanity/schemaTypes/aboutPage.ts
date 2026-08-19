import { defineField, defineType } from "sanity";

import { LOREM_LONG, LOREM_MEDIUM, LOREM_SHORT } from "../defaults";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "introHeading",
      title: "Intro heading",
      type: "text",
      rows: 3,
      description: "Main headline at the top of the About page.",
      initialValue:
        "we work with organizations whose missions influence how people live.",
    }),
    defineField({
      name: "introBody",
      title: "Intro body",
      type: "text",
      rows: 3,
      initialValue: LOREM_MEDIUM,
    }),
    defineField({
      name: "introImage",
      title: "Intro image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          initialValue: LOREM_SHORT,
        }),
      ],
    }),
    defineField({
      name: "founderName",
      title: "Founder name",
      type: "string",
      initialValue: "Monifa Miller",
    }),
    defineField({
      name: "founderBio",
      title: "Founder short bio",
      type: "text",
      rows: 2,
      initialValue: LOREM_SHORT,
    }),
    defineField({
      name: "founderImage",
      title: "Founder portrait",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          initialValue: LOREM_SHORT,
        }),
      ],
    }),
    defineField({
      name: "storyHeading",
      title: "Story section heading",
      type: "text",
      rows: 3,
      initialValue:
        "we help organizations navigate complexity and strengthen reputation.",
    }),
    defineField({
      name: "storyBody",
      title: "Story section body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "missionStatement",
      title: "Mission statement",
      type: "text",
      rows: 3,
      description: 'Shown on the "Our Mission" card.',
      initialValue:
        "To help organizations navigate complexity and strengthen reputation.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "About page" }),
  },
});
