import { defineField, defineType } from "sanity";

import { LOREM_MEDIUM } from "../defaults";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services page",
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
      name: "featureHeading",
      title: "Feature heading",
      type: "string",
      description: "Large serif title on the left of the feature block.",
      initialValue: "Building Awareness",
    }),
    defineField({
      name: "featureIntro",
      title: "Feature intro",
      type: "text",
      rows: 3,
      description: "Larger intro paragraph on the right.",
      initialValue:
        "Organizations need more than visibility. They need to be understood. Stratus helps organizations define and communicate what they stand for, what they are doing and why it matters.",
    }),
    defineField({
      name: "featureBody",
      title: "Feature body",
      type: "blockContent",
      description: "Supporting copy under the intro.",
    }),
    defineField({
      name: "featureCtaLabel",
      title: "Feature link label",
      type: "string",
      initialValue: "Get Started",
    }),
    defineField({
      name: "featureCtaHref",
      title: "Feature link URL",
      type: "string",
      initialValue: "/contact",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services page" }),
  },
});
