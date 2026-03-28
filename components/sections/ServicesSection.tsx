"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { ServiceMenuService } from "@/lib/services/ServiceMenuService";

const CATEGORY_LABELS: Record<string, string> = {
  haircut: "Cắt Tóc",
  color:   "Nhuộm Tóc",
  perm:    "Uốn / Duỗi",
  tattoo:  "Tattoo",
  beard:   "Râu",
  care:    "Chăm Sóc",
};

export default function ServicesSection() {
  const featured = ServiceMenuService.getFeatured(6);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".svc-card");
            cards.forEach((card, i) => {
              (card as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${i * 0.1}s both`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: "#050505", position: "relative" }}>
      {/* Subtle glow */}
      <div style={{
        position: "absolute", top: "20%", left: "-10%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "clamp(2.5rem, 6vw, 4rem)" }}>
          <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Dịch Vụ</span>
          <div className="accent-line" style={{ margin: "16px 0 20px" }} />
          <h2 className="t-h2" style={{ maxWidth: 520 }}>
            Mọi Phong Cách.<br />
            <span className="gradient-text">Một Địa Chỉ.</span>
          </h2>
        </div>

        {/* Service grid – 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid-auto-3" style={{ marginBottom: 48 }}>
          {featured.map((svc, i) => (
            <div key={svc.id} className="card svc-card" style={{
              padding: "clamp(1.4rem, 3vw, 2rem)",
              display: "flex", flexDirection: "column", gap: 14,
              opacity: 0,
            }}>
              {/* Top row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  fontSize: "1.4rem",
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                }}>
                  {svc.icon}
                </span>
                <span className="t-label" style={{ color: "rgba(255,255,255,0.12)", fontSize: 9 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Content */}
              <div>
                <p className="t-label" style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, marginBottom: 6 }}>
                  {CATEGORY_LABELS[svc.category]}
                </p>
                <h3 className="t-h3" style={{ marginBottom: 0 }}>{svc.name}</h3>
              </div>
              {/* Price */}
              <div style={{ marginTop: "auto" }}>
                <span className="t-price">{svc.price}</span>
              </div>
              {/* Border accent on hover */}
              <div style={{
                position: "absolute", bottom: 0, left: 0,
                width: "0%", height: 2,
                background: "linear-gradient(90deg, #fff, transparent)",
                transition: "width 0.5s ease",
              }}
                className="card-accent-bar"
              />
            </div>
          ))}
        </div>

        <Link href={ROUTES.price} className="btn btn-outline">
          Xem Bảng Giá Đầy Đủ
        </Link>
      </div>

      <style>{`
        .card:hover .card-accent-bar {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}
