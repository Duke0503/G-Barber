"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to reveal `.reveal` children
 * when the section scrolls into view. Also adds staggered delay classes.
 */
export function useScrollReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark all reveal children as hidden initially
    el.querySelectorAll(".reveal").forEach((child) => {
      child.classList.add("will-hide");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal children with stagger
            const children = entry.target.querySelectorAll(".reveal");
            children.forEach((child, i) => {
              const delay = Math.min(i * 0.08, 0.48);
              (child as HTMLElement).style.transitionDelay = `${delay}s`;
              child.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
