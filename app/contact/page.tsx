import type { Metadata } from "next";

import { ContactSection } from "@/components/organism/contact-section";
import { PageHeader } from "@/components/organism/page-header";
import { getContactPage } from "@/sanity/queries";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Contact | Stratus Strategies",
  description:
    "We help organizations navigate complexity and strengthen reputation. Get in touch with Stratus Strategies.",
};

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <main>
      <PageHeader title="contact" />
      <ContactSection contact={contact} />
    </main>
  );
}
