"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { BranchService } from "@/lib/services/BranchService";

export default function BranchesSection() {
  const featured = BranchService.getFeatured(6);
  const total = BranchService.getCount();
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

  const renderCard = (b: typeof featured[0], i: number, isMobile = false) => (
    <div key={`${b.id}-${isMobile ? 'm' : 'd'}`}
      className={`card reveal reveal-delay-${Math.min(i + 1, 6)}`}
      style={{ padding: 18, ...(isMobile ? { width: "72vw", maxWidth: 280 } : {}) }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 17, color: "rgba(255,255,255,0.8)",
        letterSpacing: "0.08em", marginBottom: 8,
      }}>{b.district}</div>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 12, color: "rgba(255,255,255,0.35)",
        lineHeight: 1.6, marginBottom: 14,
      }}>📍 {b.address}</p>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <a href={`tel:${b.phone.replace(/\s/g, "")}`} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12, fontWeight: 600, color: "#fff",
        }}>{b.phone}</a>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>{b.hours}</span>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="section" style={{ background: "#050505" }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
          marginBottom: "clamp(2rem, 5vw, 3.5rem)",
        }}>
          <div className="section-header reveal" style={{ marginBottom: 0 }}>
            <span className="tag">Hệ Thống</span>
            <div className="accent-line" />
            <h2 className="t-h2">
              {total}+ Chi Nhánh<br />
              <span className="gradient-text">Khắp TP.HCM</span>
            </h2>
          </div>
          <Link href={ROUTES.branches} className="btn btn-outline btn-sm reveal reveal-delay-1"
            style={{ alignSelf: "flex-end" }}>
            Xem Tất Cả →
          </Link>
        </div>

        {/* Mobile: scroll snap */}
        <div className="scroll-snap-x mobile-only"
          style={{ margin: "0 calc(var(--container-px) * -1)", padding: "0 var(--container-px)" }}>
          {featured.map((b, i) => renderCard(b, i, true))}
        </div>

        {/* Desktop: grid */}
        <div className="desktop-only grid-auto-3">
          {featured.map((b, i) => renderCard(b, i, false))}
        </div>
      </div>
    </section>
  );
}
