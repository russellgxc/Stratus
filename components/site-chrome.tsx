"use client";

import { usePathname } from "next/navigation";

import { EmailSection } from "@/components/organism/email-section";
import { Navbar } from "@/components/organism/navbar";
import { SiteFooter } from "@/components/organism/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return children;
  }

  const isInsightPost =
    pathname.startsWith("/insight/") && pathname !== "/insight/";

  return (
    <>
      <SmoothScroll />
      <Navbar variant={isInsightPost ? "slim" : "default"} />
      <div className="flex-1">{children}</div>
      <div className="site-page-end">
        <EmailSection />
        <SiteFooter />
      </div>
    </>
  );
}
