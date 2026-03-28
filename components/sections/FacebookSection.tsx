"use client";

import { useEffect, useRef } from "react";
import { BRAND } from "@/lib/constants/brand";

const POSTS = [
  { id: 1, img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80", likes: "1.2K", label: "Kết quả tóc" },
  { id: 2, img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80", likes: "987", label: "Before & After" },
  { id: 3, img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&q=80", likes: "2.1K", label: "Bộ sưu tập" },
  { id: 4, img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80", likes: "754", label: "Không gian shop" },
  { id: 5, img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80", likes: "1.5K", label: "Master Barber" },
  { id: 6, img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80", likes: "890", label: "Phong cách" },
];

export default function FacebookSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: "#0a0a0a" }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
          marginBottom: "clamp(2rem, 5vw, 3.5rem)",
        }}>
          <div className="section-header reveal" style={{ marginBottom: 0 }}>
            <span className="tag">Cộng Đồng</span>
            <div className="accent-line" />
            <h2 className="t-h2">
              Follow<br />
              <span className="gradient-text">G Barber</span>
            </h2>
          </div>
          <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline btn-sm reveal reveal-delay-1" style={{ alignSelf: "flex-end" }}>
            Follow →
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid-social">
          {POSTS.map((p, i) => (
            <a
              key={p.id}
              href={BRAND.social.facebook}
              target="_blank" rel="noopener noreferrer"
              className={`fb-item reveal reveal-delay-${Math.min(i + 1, 6)}`}
              style={{
                position: "relative", display: "block",
                aspectRatio: "1", overflow: "hidden",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <img
                src={p.img} alt={p.label}
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s",
                  filter: "grayscale(40%)",
                }}
              />
              <div className="fb-overlay" style={{
                position: "absolute", inset: 0,
                background: "rgba(5,5,5,0)",
                transition: "background 0.4s",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 4,
              }}>
                <span className="fb-label" style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 14, color: "#fff",
                  letterSpacing: "0.1em",
                  opacity: 0, transform: "translateY(8px)",
                  transition: "all 0.3s",
                }}>{p.label}</span>
                <span className="fb-likes" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  opacity: 0, transform: "translateY(8px)",
                  transition: "all 0.3s 0.05s",
                }}>♥ {p.likes}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .fb-item:hover img {
          transform: scale(1.06) !important;
          filter: grayscale(0%) !important;
        }
        .fb-item:hover .fb-overlay {
          background: rgba(5,5,5,0.5) !important;
        }
        .fb-item:hover .fb-label,
        .fb-item:hover .fb-likes {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
