"use client";

import { useEffect, useState } from "react";
import { Image } from "antd";

import homeData from "@/data/home.json";
import type { HeroData } from "@/types";

const hero = homeData.hero as HeroData;

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero">
      {/* Background — use transform: none on mobile to reduce GPU layer cost */}
      <div className="hero-bg">
        <Image
          src={hero.backgroundImage}
          alt="Hero Background"
          preview={false}
          loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
          styles={{ root: { display: "block", width: "100%", height: "100%" } }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Text Content */}
      <div className="hero-content">
        {/* Tagline — clip reveal */}
        <div
          className={`hero-tagline ${loaded ? "visible" : ""}`}
          style={{ marginBottom: 12 }}
        >
          <span className="hero-tagline-text">
            ✦ {hero.tagline} ✦
          </span>
        </div>

        {/* Heading — dramatic reveal */}
        <div
          className={`hero-heading ${loaded ? "visible" : ""}`}
          style={{ marginBottom: 8 }}
        >
          <h1 className="t-display" style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            fontSize: "clamp(2rem, 6vw, 4.2rem)",
            whiteSpace: "nowrap",
          }}>
            <span style={{ color: "var(--accent)" }}>G</span>
            <span style={{ color: "#ffffff" }}>{hero.heading.slice(1)}</span>
          </h1>
        </div>

        {/* Description */}
        <div
          className={`hero-desc ${loaded ? "visible" : ""}`}
        >
          <p className="hero-desc-text">{hero.description}</p>
        </div>

      </div>

      <style>{`
        .hero-bg {
          position: absolute;
          inset: 0;
          transform: scale(1.03);
        }

        /* On mobile: disable transform scale to reduce compositing layer size */
        @media (max-width: 767px) {
          .hero-bg {
            transform: none;
          }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(250,248,245,0.85) 0%,
            rgba(250,248,245,0) 16%,
            rgba(10,8,6,0.38) 44%,
            rgba(10,8,6,0.76) 76%,
            #FAF8F5 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          padding-top: 12vh;
        }
        @media (min-width: 768px) {
          .hero-content { padding-top: 18vh; }
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
        }

        .hero-desc-text {
          font-family: var(--font-body);
          font-size: clamp(0.88rem, 2vw, 1.05rem);
          color: rgba(255,255,255,0.88);
          line-height: 1.75;
          max-width: 540px;
          margin: 0 auto;
          text-shadow: 0 1px 8px rgba(0,0,0,0.45);
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
          margin-bottom: 16px;
        }
        .hero-heading.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-desc {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s var(--ease) 0.38s, transform 0.7s var(--ease) 0.38s;
          margin-bottom: 28px;
        }
        .hero-desc.visible {
          opacity: 1;
          transform: translateY(0);
        }

      `}</style>
    </section>
  );
}
