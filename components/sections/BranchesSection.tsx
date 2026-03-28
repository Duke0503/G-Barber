"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { BranchService } from "@/lib/services/BranchService";

export default function BranchesSection() {
  const featured = BranchService.getFeatured(6);
  const total    = BranchService.getCount();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".branch-card").forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${i * 0.08}s both`;
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
            <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Hệ Thống</span>
            <div className="accent-line" style={{ margin: "16px 0 20px" }} />
            <h2 className="t-h2">
              {total}+ Chi Nhánh<br />
              <span className="gradient-text">Khắp TP.HCM</span>
            </h2>
          </div>
          <Link href={ROUTES.branches} className="btn btn-outline btn-sm"
            style={{ alignSelf: "flex-end" }}>
            Xem Tất Cả →
          </Link>
        </div>

        {/* Branch cards – 1 col mobile, 2 col md, 3 col lg, 4 col xl */}
        <div className="grid-auto-4">
          {featured.map((b) => (
            <div key={b.id} className="card branch-card" style={{
              padding: "22px",
              opacity: 0,
            }}>
              {/* District */}
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 18,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.08em",
                marginBottom: 10,
              }}>
                {b.district}
              </div>
              {/* Address */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                marginBottom: 16,
              }}>
                📍 {b.address}
              </p>
              {/* Phone & Hours */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                paddingTop: 12,
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                <a href={`tel:${b.phone.replace(/\s/g, "")}`}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13, fontWeight: 600,
                    color: "#fff",
                    transition: "opacity 0.2s",
                  }}>
                  {b.phone}
                </a>
                <span style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {b.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
