import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Home hero heading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroCtaLabel",
      title: "Home hero CTA",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Home hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "subscribeHeadline",
      title: "Subscribe headline",
      type: "string",
    }),
    defineField({
      name: "subscribeBody",
      title: "Subscribe body",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "officeName",
      title: "Office name",
      type: "string",
    }),
    defineField({
      name: "officeAddress",
      title: "Office address",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
