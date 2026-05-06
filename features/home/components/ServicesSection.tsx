"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Image } from "antd";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import homeData from "@/data/home.json";
import type { ServicesData } from "@/types";

const services = homeData.services as ServicesData;

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=75",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=500&q=75",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=75",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=75",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=75",
];

function ServiceCard({ svc, i, className, style }: {
  svc: typeof services.categories[0];
  i: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`svc-card card ${className || ""}`} style={{ overflow: "hidden", ...style }}>
      <div className="svc-img" style={{
        overflow: "hidden",
        borderRadius: "var(--radius) var(--radius) 0 0",
      }}>
        <Image
          src={SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0]}
          alt={svc.title}
          preview={false}
          loading="lazy"
          style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
          styles={{ root: { display: "block", width: "100%" } }}
        />
      </div>
      <div style={{ padding: "14px 14px 18px" }}>
        <h3 className="t-h3" style={{ marginBottom: 6, color: "var(--text-primary)", fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>
          {svc.title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7 }}>
          {svc.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const ref = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scrollDebounce = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cardWidthRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(false);

  // Cache card width — avoids getComputedStyle on every scroll event
  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el || !el.firstElementChild) return;
      cardWidthRef.current = (el.firstElementChild as HTMLElement).offsetWidth + 16;
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Pause auto-scroll when off-screen
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el || !cardWidthRef.current) return;
    el.scrollTo({ left: cardWidthRef.current * i, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      if (!isVisibleRef.current) return;
      const el = trackRef.current;
      if (!el || el.scrollWidth <= el.clientWidth) return;
      setActiveIdx((prev) => {
        const next = prev >= services.categories.length - 1 ? 0 : prev + 1;
        scrollTo(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(t);
  }, [paused, scrollTo]);

  const resumeAfterDelay = useCallback(() => {
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 5000);
  }, []);

  const handleTrackScroll = useCallback(() => {
    clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      const el = trackRef.current;
      if (!el || !cardWidthRef.current) return;
      setActiveIdx(Math.min(Math.round(el.scrollLeft / cardWidthRef.current), services.categories.length - 1));
    }, 50);
    setPaused(true);
    resumeAfterDelay();
  }, [resumeAfterDelay]);

  const goTo = (i: number) => {
    scrollTo(i);
    setActiveIdx(i);
    setPaused(true);
    resumeAfterDelay();
  };

  return (
    <section ref={ref} className="section no-cv" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header reveal text-center" style={{ maxWidth: 560, margin: "0 auto" }}>
          <span className="tag" style={{ margin: "0 auto 12px", display: "inline-flex" }}>{services.tag}</span>
          <div className="accent-line-center" />
          <h2 className="t-h2" style={{ marginTop: 14 }}>{services.heading}</h2>
          <p className="t-body" style={{ marginTop: 10 }}>{services.description}</p>
        </div>

        <div className="services-scroll-container" style={{ marginTop: "clamp(1.5rem, 4vw, 3.5rem)", position: "relative" }}>
          <div className="swipe-hint" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Vuốt xem thêm
          </div>

          <div
            ref={trackRef}
            className="services-scroll-track"
            onScroll={handleTrackScroll}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={resumeAfterDelay}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { clearTimeout(pauseTimer.current); setPaused(false); }}
          >
            {services.categories.map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} i={i} className={`reveal reveal-delay-${i + 1}`} />
            ))}
          </div>

          <div className="scroll-indicator svc-indicator">
            {services.categories.map((_, i) => (
              <button
                key={i}
                className={`scroll-indicator-dot${i === activeIdx ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Dịch vụ ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-scroll-container { width: 100%; }
        .services-scroll-track {
          display: flex; overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 16px;
          padding: 0 var(--container-px) 24px;
        }
        .services-scroll-track::-webkit-scrollbar { display: none; }
        .services-scroll-track > .svc-card {
          scroll-snap-align: start; flex-shrink: 0;
          width: 80vw; max-width: 320px;
        }
        @media (min-width: 768px) {
          .services-scroll-track { gap: 24px; padding-bottom: 32px; }
          .services-scroll-track > .svc-card {
            width: calc((100% - 48px) / 3); max-width: none;
          }
          .services-scroll-track::-webkit-scrollbar { display: block; height: 3px; }
          .services-scroll-track::-webkit-scrollbar-track { background: transparent; }
          .services-scroll-track::-webkit-scrollbar-thumb {
            background: var(--accent); border-radius: 4px;
          }
        }
        .svc-indicator { display: flex !important; }
        .svc-card { cursor: pointer; }
        .svc-card:hover { border-color: rgba(185,28,28,0.3); }
        .svc-img img,
        .svc-img .ant-image-img { transition: transform 0.6s var(--ease); }
        .svc-card:hover .svc-img img,
        .svc-card:hover .svc-img .ant-image-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
