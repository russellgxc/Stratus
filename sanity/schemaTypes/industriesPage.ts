import { defineField, defineType } from "sanity";

import { LOREM_MEDIUM } from "../defaults";

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
  ],
  preview: {
    prepare: () => ({ title: "Industries page" }),
  },
});
