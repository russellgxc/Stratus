"use client";

import { usePathname } from "next/navigation";

import { EmailSection } from "@/components/organism/email-section";
import { Navbar } from "@/components/organism/navbar";
import { SiteFooter } from "@/components/organism/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { SanityFooterLink } from "@/sanity/queries";

type SiteChromeProps = {
  children: React.ReactNode;
  subscribeHeadline?: string;
  subscribeBody?: string;
  footerCompanyLinks?: SanityFooterLink[];
  footerResourceLinks?: SanityFooterLink[];
  footerSocialLinks?: SanityFooterLink[];
};

export function SiteChrome({
  children,
  subscribeHeadline,
  subscribeBody,
  footerCompanyLinks,
  footerResourceLinks,
  footerSocialLinks,
}: SiteChromeProps) {
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
        <EmailSection headline={subscribeHeadline} body={subscribeBody} />
        <SiteFooter
          companyLinks={footerCompanyLinks}
          resourceLinks={footerResourceLinks}
          socialLinks={footerSocialLinks}
        />
      </div>
    </>
  );
}
