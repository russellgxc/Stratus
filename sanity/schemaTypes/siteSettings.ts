import { defineField, defineType } from "sanity";

import { LOREM_MEDIUM, LOREM_SHORT } from "../defaults";

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
    defineField({
      name: "officeName",
      title: "Office name",
      type: "string",
      initialValue: "Lorem ipsum",
    }),
    defineField({
      name: "officeAddress",
      title: "Office address",
      type: "text",
      rows: 4,
      initialValue: LOREM_SHORT,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "Monifa.Miller@stratusstrategies.ca",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      initialValue: "Lorem ipsum",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global settings" }),
  },
});
