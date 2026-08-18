import Link from "next/link";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/#sectors", label: "Sectors" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

const resourceLinks = [
  { href: "/insight", label: "Insights" },
  { href: "/insight?category=pop-politics", label: "Pop & Politics" },
  { href: "/insight?category=industry-alerts", label: "Industry Alerts" },
] as const;

const socialLinks = [
  {
    href: "https://www.linkedin.com",
    label: "Linkedin",
    external: true,
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    external: true,
  },
  {
    href: "mailto:hello@stratusstrategies.com",
    label: "Email",
    external: true,
  },
] as const;

type SiteFooterProps = {
  className?: string;
};

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="font-serif text-[22px] font-normal leading-[60px] text-[#dfdfdf]">
      {children}
    </h2>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  const className =
    "link-underline font-sans text-lg font-normal leading-normal tracking-[-0.02em] text-[#dfdfdf] opacity-70 transition-[color,opacity] duration-200 ease-in-out hover:text-brand-gold hover:opacity-100";

  if (external) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function FooterLinkList({
  links,
}: {
  links: ReadonlyArray<{ href: string; label: string; external?: boolean }>;
}) {
  return (
    <ul className="flex flex-col">
      {links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href} external={link.external}>
            {link.label}
          </FooterLink>
        </li>
      ))}
    </ul>
  );
}

/**
 * Global site footer — Figma 125:1736
 */
export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("bg-brand-black text-brand-white", className)}>
      <Container className="flex flex-col pt-[100px] pb-14 lg:pb-16">
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <Link
              href="/#hero"
              aria-label="Stratus Strategies home"
              className="inline-flex w-fit cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footer-logo-mark.svg"
                alt=""
                width={79}
                height={79}
                className="size-[79px]"
              />
            </Link>
            <p className="mt-6 font-sans text-sm font-normal tracking-[-0.02em] text-brand-white opacity-40">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <FooterLinkList links={companyLinks} />
          </div>

          <div>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinkList links={resourceLinks} />
          </div>

          <div>
            <FooterHeading>Social</FooterHeading>
            <FooterLinkList links={socialLinks} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
