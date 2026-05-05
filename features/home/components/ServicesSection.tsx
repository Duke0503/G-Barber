"use client";

import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import homeData from "@/data/home.json";
import type { ServicesData } from "@/types";

const services = homeData.services as ServicesData;

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", // Cut
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80", // Perm
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80", // Color
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", // Straighten
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", // Care
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
        position: "relative", aspectRatio: "16/10", overflow: "hidden",
        borderRadius: "var(--radius) var(--radius) 0 0",
      }}>
        <img
          src={SERVICE_IMAGES[i] || SERVICE_IMAGES[0]}
          alt={svc.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.6s var(--ease)",
          }}
        />

      </div>
      <div style={{ padding: "14px 14px 18px" }}>
        <h3 className="t-h3" style={{ marginBottom: 6, color: "var(--text-primary)", fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>{svc.title}</h3>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 300,
          color: "var(--text-muted)", lineHeight: 1.7,
        }}>{svc.description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal text-center" style={{ maxWidth: 560, margin: "0 auto" }}>
          <span className="tag" style={{ margin: "0 auto 12px", display: "inline-flex" }}>{services.tag}</span>
          <div className="accent-line-center" />
          <h2 className="t-h2" style={{ marginTop: 14 }}>{services.heading}</h2>
          <p className="t-body" style={{ marginTop: 10 }}>{services.description}</p>
        </div>

        {/* Cards - Horizontal scroll for both Mobile and Desktop */}
        <div className="services-scroll-container" style={{ marginTop: "clamp(1.5rem, 4vw, 3.5rem)" }}>
          <div className="services-scroll-track">
            {services.categories.map((svc, i) => (
              <ServiceCard
                key={svc.title}
                svc={svc}
                i={i}
                className={`reveal reveal-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-scroll-container {
          width: 100%;
        }
        .services-scroll-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 16px;
          padding: 0 var(--container-px) 24px;
        }
        .services-scroll-track::-webkit-scrollbar { display: none; }
        
        .services-scroll-track > .svc-card {
          scroll-snap-align: start;
          flex-shrink: 0;
          width: 80vw;
          max-width: 320px;
        }

        @media (min-width: 768px) {
          .services-scroll-track {
            gap: 24px;
            padding-bottom: 32px;
          }
          .services-scroll-track > .svc-card {
            width: calc((100% - 48px) / 3);
            max-width: none;
          }
          /* Show custom scrollbar on desktop to indicate scrollability */
          .services-scroll-track::-webkit-scrollbar {
             display: block;
             height: 6px;
          }
          .services-scroll-track::-webkit-scrollbar-track {
             background: rgba(0,0,0,0.05);
             border-radius: 4px;
             margin: 0 var(--container-px);
          }
          .services-scroll-track::-webkit-scrollbar-thumb {
             background: var(--border-hover);
             border-radius: 4px;
          }
          .services-scroll-track::-webkit-scrollbar-thumb:hover {
             background: var(--text-muted);
          }
        }

        .svc-card {
          cursor: pointer;
        }
        .svc-card:hover {
          border-color: rgba(184,149,77,0.4);
        }
        .svc-img img {
          transition: transform 0.6s var(--ease);
        }
        .svc-card:hover .svc-img img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
