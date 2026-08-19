import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Client Editing")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .child(
          S.document()
            .schemaType("homePage")
            .documentId("homePage")
            .title("Home Page"),
        ),

      S.divider(),

      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .child(
          S.document()
            .schemaType("aboutPage")
            .documentId("aboutPage")
            .title("About Page"),
        ),
      S.listItem()
        .title("Contact Page")
        .id("contactPage")
        .child(
          S.document()
            .schemaType("contactPage")
            .documentId("contactPage")
            .title("Contact Page"),
        ),
      S.listItem()
        .title("Services Page")
        .id("servicesPage")
        .child(
          S.document()
            .schemaType("servicesPage")
            .documentId("servicesPage")
            .title("Services Page"),
        ),
      S.listItem()
        .title("Global Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Global Settings"),
        ),

      S.divider(),
      S.documentTypeListItem("insight").title("Blog Posts"),
    ]);
