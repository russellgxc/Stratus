import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";

import { EmailSection } from "@/components/organism/email-section";
import { Navbar } from "@/components/organism/navbar";
import { SiteFooter } from "@/components/organism/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stratus Strategies",
  description:
    "Narrative consultancy for organizations whose missions influence society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SmoothScroll />
        <Navbar />
        <div className="flex-1">{children}</div>
        <div className="site-page-end">
          <EmailSection />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
