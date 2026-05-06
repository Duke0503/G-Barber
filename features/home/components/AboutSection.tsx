"use client";

import { Image } from "antd";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import homeData from "@/data/home.json";
import type { AboutData } from "@/types";

const about = homeData.about as AboutData;

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section section-about" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrap reveal">
            <div className="about-image-inner">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=75"
                alt="G - Barbershop – Barbershop chuyên nghiệp"
                preview={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                styles={{ root: { display: "block", width: "100%", height: "100%" } }}
              />
            </div>
            <div className="about-badge reveal reveal-delay-3">
              <div className="about-badge-num">3</div>
              <div className="about-badge-label">Chi Nhánh</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-header reveal reveal-delay-1">
              <span className="tag">{about.tag}</span>
              <div className="accent-line" />
              <h2 className="t-h2">{about.heading}</h2>
            </div>

            <p className="t-body reveal reveal-delay-2" style={{ marginBottom: 12 }}>
              {about.description}
            </p>
            <p className="t-body reveal reveal-delay-3" style={{ marginBottom: 0 }}>
              {about.description2}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .section-about { overflow: hidden; }

        .about-image-wrap { position: relative; }

        .about-image-inner {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          transition: transform 0.5s var(--ease);
          transform-style: preserve-3d;
          perspective: 800px;
          position: relative;
          aspect-ratio: 4/3;
        }
        /* Scale the underlying <img> (next/image renders an <img>) on hover */
        .about-image-inner img {
          transition: transform 0.6s var(--ease) !important;
        }
        @media (min-width: 768px) {
          .about-image-inner:hover {
            transform: rotateY(-3deg) rotateX(3deg);
          }
          .about-image-inner:hover img {
            transform: scale(1.04);
          }
        }

        .about-badge {
          position: absolute;
          bottom: 16px; right: -4px;
          padding: 10px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          animation: bounceIn 0.8s var(--ease) 0.5s both;
        }
        @media (min-width: 768px) {
          .about-badge { bottom: 20px; right: -8px; padding: 14px 22px; }
        }
        @keyframes bounceIn {
          0%   { opacity: 0; transform: scale(0.6) translateY(10px); }
          70%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .about-badge-num {
          font-family: var(--font-display);
          font-size: 26px; line-height: 1;
          color: var(--accent);
        }
        @media (min-width: 768px) { .about-badge-num { font-size: 32px; } }
        .about-badge-label {
          font-family: var(--font-body);
          font-size: 8px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--text-muted);
        }
        @media (min-width: 768px) { .about-badge-label { font-size: 9px; } }
      `}</style>
    </section>
  );
}
