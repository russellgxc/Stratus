import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";

import { SiteChrome } from "@/components/site-chrome";

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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
