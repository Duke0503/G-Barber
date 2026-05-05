"use client";

import { useEffect, useRef, useState } from "react";

import homeData from "@/data/home.json";
import type { HeroData } from "@/types";

const hero = homeData.hero as HeroData;

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || window.innerWidth < 768) return;
      const y = window.scrollY;
      const bg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
      if (bg) bg.style.transform = `scale(1.08) translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-bg" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${hero.backgroundImage}')`,
        backgroundSize: "cover", backgroundPosition: "center 30%",
        filter: "brightness(1) contrast(1)",
        transform: "scale(1.08)",
        willChange: "transform",
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, var(--bg-primary) 0%, rgba(255,255,255,0) 25%, rgba(26,26,24,0.4) 60%, var(--bg-primary) 100%)",
      }} />

      <div className="noise-overlay" />

      {/* Text Content */}
      <div className="hero-content">
        {/* Tagline — clip reveal */}
        <div
          className={`hero-tagline ${loaded ? "visible" : ""}`}
          style={{
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          <span className="hero-tagline-text">
            ✦ {hero.tagline} ✦
          </span>
        </div>

        {/* Heading — dramatic reveal */}
        <div
          className={`hero-heading ${loaded ? "visible" : ""}`}
          style={{
            overflow: "hidden",
            marginBottom: 8,
          }}
        >
          <h1 className="t-display" style={{
            color: "#ffffff",
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}>
            {hero.heading}
          </h1>
        </div>

        {/* Subheading — fade up last */}
        <div
          className={`hero-sub ${loaded ? "visible" : ""}`}
          style={{
            overflow: "hidden",
          }}
        >
          <p className="hero-sub-text">
            {hero.subheading}
          </p>
        </div>
      </div>

      <style>{`
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding-top: 4vh;
        }

        .hero-tagline-text {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          color: #ffffff;
          font-weight: 700;
          text-shadow: 0 2px 12px rgba(0,0,0,0.5);
        }
        @media (min-width: 768px) {
          .hero-tagline-text {
            font-size: 0.8rem;
            letter-spacing: 0.4em;
          }
          .hero-content {
            padding-top: 8vh;
          }
        }

        .hero-sub-text {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 3.5vw, 2.5rem);
          font-style: italic;
          color: #ffffff;
          font-weight: 600;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        .hero-tagline {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
        }
        .hero-tagline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s var(--ease) 0.2s, transform 0.8s var(--ease) 0.2s;
        }
        .hero-heading.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-sub {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s var(--ease) 0.4s, transform 0.7s var(--ease) 0.4s;
        }
        .hero-sub.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-tagline.visible { transition-delay: 0.1s; }
        .hero-heading.visible { transition-delay: 0.2s; }
        .hero-sub.visible { transition-delay: 0.4s; }
      `}</style>
    </section>
  );
}
