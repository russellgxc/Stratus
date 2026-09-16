import { defineField, defineType } from "sanity";

import { LOREM_MEDIUM } from "../defaults";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Global settings",
  type: "document",
  fields: [
    defineField({
      name: "subscribeHeadline",
      title: "Subscribe headline",
      type: "string",
      initialValue: "Lorem ipsum dolor sit amet",
    }),
    defineField({
      name: "subscribeBody",
      title: "Subscribe body",
      type: "text",
      rows: 2,
      initialValue: LOREM_MEDIUM,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global settings" }),
  },
});
