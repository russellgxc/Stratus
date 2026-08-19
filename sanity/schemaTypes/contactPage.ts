import { defineField, defineType } from "sanity";

import { LOREM_MEDIUM, LOREM_SHORT } from "../defaults";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      rows: 2,
      description: "Main heading above the contact form.",
      initialValue:
        "Get in touch. we'll help you find the right next step.",
    }),
    defineField({
      name: "body",
      title: "Body text",
      type: "text",
      rows: 3,
      description: "Short paragraph below the heading.",
      initialValue: LOREM_MEDIUM,
    }),
    defineField({
      name: "cardLabel",
      title: "Card label",
      type: "string",
      description: "Small label on the contact card (right side).",
      initialValue: "Lorem ipsum",
    }),
    defineField({
      name: "cardTitle",
      title: "Card title",
      type: "text",
      rows: 2,
      description: "Title text on the contact card.",
      initialValue: LOREM_SHORT,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact page" }),
  },
});
