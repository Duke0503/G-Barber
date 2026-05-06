"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Props {
  itemCount: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  autoScrollInterval?: number;
  darkDots?: boolean;
}

export default function HorizontalScrollCards({
  itemCount,
  children,
  className = "",
  style,
  autoScrollInterval = 3200,
  darkDots = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scrollDebounce = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cardWidthRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(false);

  // Cache card width once on mount + on resize — avoids getComputedStyle on every scroll
  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el || !el.firstElementChild) return;
      const card = el.firstElementChild as HTMLElement;
      const gap = parseFloat(getComputedStyle(el).columnGap || "12") || 12;
      cardWidthRef.current = card.offsetWidth + gap;
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  // IntersectionObserver — pause auto-scroll when section is off-screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((i: number) => {
    const el = ref.current;
    if (!el || !cardWidthRef.current) return;
    el.scrollTo({ left: cardWidthRef.current * i, behavior: "smooth" });
  }, []);

  // Auto-scroll — only fires when section is visible and container actually overflows
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      if (!isVisibleRef.current) return;
      const el = ref.current;
      if (!el || el.scrollWidth <= el.clientWidth) return;
      setActive((prev) => {
        const next = prev >= itemCount - 1 ? 0 : prev + 1;
        scrollTo(next);
        return next;
      });
    }, autoScrollInterval);
    return () => clearInterval(t);
  }, [paused, itemCount, scrollTo, autoScrollInterval]);

  const resumeAfterDelay = useCallback(() => {
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 5000);
  }, []);

  // Debounced scroll handler — 50ms throttle, no reflow on every event
  const handleScroll = useCallback(() => {
    clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      const el = ref.current;
      if (!el || !cardWidthRef.current) return;
      setActive(Math.min(Math.round(el.scrollLeft / cardWidthRef.current), itemCount - 1));
    }, 50);
    setPaused(true);
    resumeAfterDelay();
  }, [itemCount, resumeAfterDelay]);

  const goTo = (i: number) => {
    scrollTo(i);
    setActive(i);
    setPaused(true);
    resumeAfterDelay();
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="swipe-hint" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Vuốt xem thêm
      </div>

      <div
        ref={ref}
        className={`scroll-snap-x ${className}`}
        style={style}
        onScroll={handleScroll}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={resumeAfterDelay}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { clearTimeout(pauseTimer.current); setPaused(false); }}
      >
        {children}
      </div>

      <div className={`scroll-indicator${darkDots ? " scroll-indicator--dark" : ""}`}>
        {Array.from({ length: itemCount }).map((_, i) => (
          <button
            key={i}
            className={`scroll-indicator-dot${i === active ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Mục ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
