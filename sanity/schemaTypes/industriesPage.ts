import { defineField, defineType } from "sanity";

import { LOREM_MEDIUM, LOREM_SHORT } from "../defaults";

export const industriesPageType = defineType({
  name: "industriesPage",
  title: "Industries page",
  type: "document",
  fields: [
    defineField({
      name: "headerDescription",
      title: "Page header description",
      type: "text",
      rows: 3,
      description: "Subtitle shown in the blue page header banner.",
      initialValue: LOREM_MEDIUM,
    }),
    defineField({
      name: "items",
      title: "Industry cards",
      type: "array",
      description: "Stacked image + text cards (up to 3).",
      of: [
        {
          type: "object",
          name: "industryItem",
          title: "Industry",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "blockContent",
            }),
            defineField({
              name: "image",
              title: "Image",
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
              name: "ctaLabel",
              title: "Link label",
              type: "string",
              initialValue: "Get Started",
            }),
            defineField({
              name: "ctaHref",
              title: "Link URL",
              type: "string",
              initialValue: "/contact",
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Industries page" }),
  },
});
