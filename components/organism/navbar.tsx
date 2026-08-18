"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insight", label: "Insight" },
  { href: "/contact", label: "Contact" },
] as const;

const COMPACT_AFTER_PX = 48;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCompact(window.scrollY > COMPACT_AFTER_PX);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Close the drawer when the slim/expanded chrome changes a lot (e.g. resize).
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-brand-white transition-[padding,background-color,box-shadow] duration-300 ease-in-out",
        compact || menuOpen
          ? "bg-brand-blue py-3 shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "bg-transparent py-6 lg:py-11",
        className,
      )}
    >
      <Container className="relative flex items-center justify-between gap-6">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-3 text-brand-white md:w-[190px]"
          aria-label="Stratus home"
          onClick={() => setMenuOpen(false)}
        >
          {/* Mark — SVG for crisp slim + mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.svg"
            alt=""
            width={40}
            height={40}
            className={cn(
              "shrink-0 transition-[width,height] duration-300 ease-in-out",
              compact ? "size-10" : "size-10 max-md:size-9",
            )}
          />

          {/* Wordmark — desktop only; stays visible on scroll */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-wordmark.svg"
            alt="stratus"
            width={158}
            height={39}
            className="hidden h-auto min-w-0 flex-1 md:block"
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul
            className={cn(
              "flex items-center justify-end gap-x-6 lg:gap-x-8",
              compact && "gap-x-5 lg:gap-x-6",
            )}
          >
            {navLinks.map((link) => {
              const isActive = isActivePath(pathname, link.href);

              return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "link-underline font-sans font-normal leading-5 text-brand-white transition-[font-size] duration-300 ease-in-out",
                    compact ? "text-base" : "text-lg",
                    isActive && "link-underline-active",
                  )}
                >
                  {link.label}
                </Link>
              </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="size-6" strokeWidth={1.75} />
          ) : (
            <Menu className="size-6" strokeWidth={1.75} />
          )}
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden bg-brand-blue transition-[max-height,opacity] duration-300 ease-in-out",
          menuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="pb-8 pt-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);

                return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "link-underline block py-3 font-sans text-2xl font-normal leading-none tracking-[-0.02em] text-brand-white",
                      isActive && "link-underline-active",
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
