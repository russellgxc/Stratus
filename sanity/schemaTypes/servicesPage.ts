import { defineField, defineType } from "sanity";

import {
  LOREM_LONG,
  LOREM_MEDIUM,
  LOREM_SERVICE_SECTIONS,
  LOREM_SHORT,
} from "../defaults";

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
      name: "sections",
      title: "Service sections",
      type: "array",
      initialValue: [...LOREM_SERVICE_SECTIONS],
      of: [
        {
          type: "object",
          name: "serviceSection",
          title: "Service",
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
              rows: 4,
              initialValue: LOREM_LONG,
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
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services page" }),
  },
});
