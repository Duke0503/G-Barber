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
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
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

  const renderCard = (svc: typeof featured[0], i: number, style?: React.CSSProperties) => (
    <div key={svc.id} className={`card reveal reveal-delay-${Math.min(i + 1, 6)}`} style={{
      padding: "clamp(1.2rem, 3vw, 1.8rem)",
      display: "flex", flexDirection: "column", gap: 12,
      ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "1.3rem", filter: "grayscale(100%)", opacity: 0.6 }}>
          {svc.icon}
        </span>
        <span className="t-label" style={{ color: "rgba(255,255,255,0.08)", fontSize: 9 }}>
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div>
        <p className="t-label" style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, marginBottom: 4 }}>
          {CATEGORY_LABELS[svc.category]}
        </p>
        <h3 className="t-h3" style={{ marginBottom: 0 }}>{svc.name}</h3>
      </div>
      <div style={{ marginTop: "auto" }}>
        <span className="t-price">{svc.price}</span>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="section" style={{ background: "#050505", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="tag">Dịch Vụ</span>
          <div className="accent-line" />
          <h2 className="t-h2" style={{ maxWidth: 480 }}>
            Mọi Phong Cách.<br />
            <span className="gradient-text">Một Địa Chỉ.</span>
          </h2>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="scroll-snap-x mobile-only"
          style={{ margin: "0 calc(var(--container-px) * -1)", padding: "0 var(--container-px)" }}>
          {featured.map((svc, i) => renderCard(svc, i, { width: "75vw", maxWidth: 280 }))}
        </div>

        {/* Desktop: grid */}
        <div className="desktop-only grid-auto-3" style={{ marginBottom: 40 }}>
          {featured.map((svc, i) => renderCard(svc, i))}
        </div>

        <div className="reveal reveal-delay-4" style={{ marginTop: 32 }}>
          <Link href={ROUTES.price} className="btn btn-outline">
            Xem Bảng Giá Đầy Đủ
          </Link>
        </div>
      </div>
    </section>
  );
}
