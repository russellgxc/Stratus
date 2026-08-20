"use client";

import { useCallback, useState } from "react";
import { Facebook, Link2, Linkedin, Mail } from "lucide-react";

import { cn } from "@/lib/utils";

type ShareButtonsProps = {
  url: string;
  title: string;
  className?: string;
};

const iconClassName =
  "size-[22px] stroke-[1.5] transition-transform duration-200 ease-in-out group-hover:scale-110";

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable in some browsers or contexts.
    }
  }, [url]);

  const shareLinks = [
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: "Share on LinkedIn",
      icon: Linkedin,
      external: true,
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "Share on Facebook",
      icon: Facebook,
      external: true,
    },
    {
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      label: "Share by email",
      icon: Mail,
      external: true,
    },
  ] as const;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="sr-only">Share this article</span>
      {shareLinks.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group inline-flex size-10 items-center justify-center rounded-full text-brand-black transition-colors hover:bg-brand-muted"
        >
          <Icon aria-hidden className={iconClassName} />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
        className="group inline-flex size-10 items-center justify-center rounded-full text-brand-black transition-colors hover:bg-brand-muted"
      >
        <Link2 aria-hidden className={iconClassName} />
      </button>
    </div>
  );
}
