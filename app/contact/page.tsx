import type { Metadata } from "next";

import { ContactSection } from "@/components/organism/contact-section";
import { PageHeader } from "@/components/organism/page-header";

export const metadata: Metadata = {
  title: "Contact | Stratus Strategies",
  description:
    "We help organizations navigate complexity and strengthen reputation. Get in touch with Stratus Strategies.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="contact" />
      <ContactSection />
    </main>
  );
}
