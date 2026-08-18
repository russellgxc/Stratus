"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

/** 40% slower than a typical ~700ms page smooth scroll */
const SCROLL_DURATION_MS = Math.round(700 * 1.4);
const PENDING_HASH_KEY = "stratus-scroll-hash";
const CROSS_PAGE_KEY = "stratus-scroll-cross";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop;
}

function setScrollY(top: number) {
  window.scrollTo(0, top);
}

function getTargetY(target: HTMLElement) {
  return target.getBoundingClientRect().top + getScrollY();
}

let snapLocked = false;
let rafId: number | null = null;

function lockScrollSnap() {
  if (snapLocked) return;
  snapLocked = true;
  document.documentElement.style.scrollSnapType = "none";
  document.body.style.scrollSnapType = "none";
}

function unlockScrollSnap() {
  snapLocked = false;
  document.documentElement.style.scrollSnapType = "";
  document.body.style.scrollSnapType = "";
}

function cancelScrollAnimation() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  unlockScrollSnap();
}

function animateWindowScroll(
  to: number,
  duration = SCROLL_DURATION_MS,
  onUpdate?: (progress: number) => void,
) {
  cancelScrollAnimation();

  const from = getScrollY();
  const delta = to - from;

  if (prefersReducedMotion()) {
    setScrollY(to);
    onUpdate?.(1);
    return;
  }

  if (Math.abs(delta) < 1) {
    onUpdate?.(1);
    return;
  }

  // Mandatory scroll-snap fights per-frame window.scrollTo (same issue as insight cards).
  lockScrollSnap();
  const start = performance.now();

  function frame(now: number) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = easeInOutCubic(progress);
    setScrollY(from + delta * eased);
    onUpdate?.(eased);

    if (progress < 1) {
      rafId = requestAnimationFrame(frame);
      return;
    }

    setScrollY(to);
    rafId = null;
    unlockScrollSnap();
    onUpdate?.(1);
  }

  rafId = requestAnimationFrame(frame);
}

function scrollToHash(hash: string, options?: { crossPage?: boolean }) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const to = getTargetY(target);
  const crossPage = Boolean(options?.crossPage);

  if (!crossPage) {
    animateWindowScroll(to);
    return true;
  }

  // Jump to the section, then fade the content in.
  setScrollY(to);

  if (prefersReducedMotion()) {
    return true;
  }

  const previousTransition = target.style.transition;
  const previousOpacity = target.style.opacity;
  target.style.opacity = "0";
  target.style.transition = "none";
  void target.offsetHeight;
  target.style.transition = `opacity ${SCROLL_DURATION_MS}ms ease-in-out`;
  target.style.opacity = "1";

  window.setTimeout(() => {
    target.style.transition = previousTransition;
    target.style.opacity = previousOpacity;
  }, SCROLL_DURATION_MS);

  return true;
}

function scrollToHashWhenReady(
  hash: string,
  options?: { crossPage?: boolean },
  maxAttempts = 60,
) {
  let attempts = 0;

  function attempt() {
    if (scrollToHash(hash, options)) return;
    if (attempts++ < maxAttempts) {
      requestAnimationFrame(attempt);
    }
  }

  requestAnimationFrame(attempt);
}

/**
 * Timed ease-in-out smooth scroll for in-page anchors, including
 * hash links that arrive from other routes (e.g. /about → /#sectors).
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  // After any route change (or first paint), scroll to pending / URL hash.
  useEffect(() => {
    const pending = sessionStorage.getItem(PENDING_HASH_KEY);
    const crossPage = sessionStorage.getItem(CROSS_PAGE_KEY) === "1";
    const hash = pending || window.location.hash;
    if (!hash || hash === "#") return;

    // Only treat as cross-page arrival when we explicitly flagged it.
    const isCross = Boolean(pending) && crossPage;

    if (pending) {
      sessionStorage.removeItem(PENDING_HASH_KEY);
      sessionStorage.removeItem(CROSS_PAGE_KEY);
      if (window.location.hash !== hash) {
        history.replaceState(null, "", `${pathname}${hash}`);
      }
    }

    // Let layout settle after client navigation.
    const timer = window.setTimeout(() => {
      scrollToHashWhenReady(hash, { crossPage: isCross });
    }, isCross ? 40 : 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    function onHashChange() {
      if (window.location.hash) {
        scrollToHashWhenReady(window.location.hash);
      }
    }

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      cancelScrollAnimation();
    };
  }, []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest?.(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (!url.hash || url.hash === "#") return;

      const currentPath = pathnameRef.current;
      const samePage = url.pathname === currentPath;

      if (samePage) {
        const target = document.getElementById(
          decodeURIComponent(url.hash.slice(1)),
        );
        if (!target) return;

        event.preventDefault();
        event.stopPropagation();
        history.pushState(null, "", `${currentPath}${url.hash}`);
        scrollToHash(url.hash);
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      sessionStorage.setItem(PENDING_HASH_KEY, url.hash);
      sessionStorage.setItem(CROSS_PAGE_KEY, "1");
      router.push(`${url.pathname}${url.search}${url.hash}`, { scroll: false });
    }

    // Capture so we run before Next.js <Link> navigation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
