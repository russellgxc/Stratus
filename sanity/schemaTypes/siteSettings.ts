import { defineArrayMember, defineField, defineType } from "sanity";

const footerLinkFields = [
  defineField({
    name: "label",
    title: "Label",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "href",
    title: "URL",
    type: "string",
    description:
      "Internal path (e.g. /about, /industries) or full URL / mailto:",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "external",
    title: "Open as external link",
    type: "boolean",
    description: "Turn on for LinkedIn, Facebook, email, etc.",
    initialValue: false,
  }),
];

const footerLinkMember = defineArrayMember({
  type: "object",
  name: "footerLink",
  title: "Link",
  fields: footerLinkFields,
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Global settings",
  type: "document",
  groups: [
    { name: "subscribe", title: "Subscribe", default: true },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "subscribeHeadline",
      title: "Subscribe headline",
      type: "string",
      group: "subscribe",
      initialValue: "Stay ahead of the narrative.",
    }),
    defineField({
      name: "subscribeBody",
      title: "Subscribe body",
      type: "blockContent",
      group: "subscribe",
    }),
    defineField({
      name: "footerCompanyLinks",
      title: "Company links",
      type: "array",
      group: "footer",
      description: "Matches the live website footer Company column.",
      of: [footerLinkMember],
      initialValue: [
        { _type: "footerLink", label: "About us", href: "/about", external: false },
        {
          _type: "footerLink",
          label: "Industries",
          href: "/industries",
          external: false,
        },
        {
          _type: "footerLink",
          label: "Services",
          href: "/services",
          external: false,
        },
        {
          _type: "footerLink",
          label: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    }),
    defineField({
      name: "footerResourceLinks",
      title: "Resource links",
      type: "array",
      group: "footer",
      description: "Matches the live website footer Resources column.",
      of: [footerLinkMember],
      initialValue: [
        {
          _type: "footerLink",
          label: "Insights",
          href: "/insight",
          external: false,
        },
        {
          _type: "footerLink",
          label: "News",
          href: "/insight?category=news",
          external: false,
        },
      ],
    }),
    defineField({
      name: "footerSocialLinks",
      title: "Social links",
      type: "array",
      group: "footer",
      description: "Matches the live website footer Social column.",
      of: [footerLinkMember],
      initialValue: [
        {
          _type: "footerLink",
          label: "Linkedin",
          href: "https://www.linkedin.com",
          external: true,
        },
        {
          _type: "footerLink",
          label: "Email",
          href: "mailto:Monifa.Miller@stratusstrategies.ca",
          external: true,
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global settings" }),
  },
});
