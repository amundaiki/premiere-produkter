"use client";

import { useEffect } from "react";

export function NavScroll() {
  useEffect(() => {
    const nav = document.querySelector(".nav") as HTMLElement | null;
    if (!nav) return;
    const handler = () => {
      if (window.scrollY > 80) {
        nav.style.background = "rgba(26, 58, 42, 0.97)";
        nav.style.backdropFilter = "blur(12px)";
      } else {
        nav.style.background = "var(--green-deep)";
        nav.style.backdropFilter = "none";
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return null;
}
