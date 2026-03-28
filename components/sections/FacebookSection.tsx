"use client";

import { useEffect, useRef } from "react";
import { BRAND } from "@/lib/constants/brand";

const POSTS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
    likes: "1.2K",
    label: "Kết quả tóc",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
    likes: "987",
    label: "Before & After",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&q=80",
    likes: "2.1K",
    label: "Bộ sưu tập",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
    likes: "754",
    label: "Không gian shop",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
    likes: "1.5K",
    label: "Master Barber",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
    likes: "890",
    label: "Phong cách",
  },
];

export default function FacebookSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fb-item").forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeInUp 0.5s ease-out ${i * 0.08}s both`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: "#0c0c0c", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
          marginBottom: "clamp(2.5rem, 6vw, 4rem)",
        }}>
          <div>
            <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Facebook</span>
            <div className="accent-line" style={{ margin: "16px 0 20px" }} />
            <h2 className="t-h2">
              Cộng Đồng<br />
              <span className="gradient-text">G Barber</span>
            </h2>
          </div>
          <a
            href={BRAND.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            style={{ alignSelf: "flex-end" }}
          >
            Follow →
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid-social" style={{
          borderRadius: "var(--radius, 14px)",
          overflow: "hidden",
        }}>
          {POSTS.map((p) => (
            <a
              key={p.id}
              href={BRAND.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-item"
              style={{
                position: "relative", display: "block",
                aspectRatio: "1", overflow: "hidden",
                opacity: 0,
                borderRadius: "var(--radius-sm, 8px)",
              }}
            >
              <img
                src={p.img}
                alt={p.label}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s",
                  filter: "grayscale(50%)",
                }}
              />
              {/* Label overlay on hover */}
              <div style={{
                position: "absolute", inset: 0,
                background: "rgba(5,5,5,0)",
                transition: "background 0.4s",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 6,
              }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 16,
                  color: "#fff",
                  letterSpacing: "0.1em",
                  opacity: 0,
                  transform: "translateY(8px)",
                  transition: "all 0.3s",
                }}
                  className="fb-label"
                >
                  {p.label}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                  opacity: 0,
                  transform: "translateY(8px)",
                  transition: "all 0.3s 0.05s",
                }}
                  className="fb-likes"
                >
                  ♥ {p.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .fb-item:hover img {
          transform: scale(1.08) !important;
          filter: grayscale(0%) !important;
        }
        .fb-item:hover > div {
          background: rgba(5,5,5,0.55) !important;
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
