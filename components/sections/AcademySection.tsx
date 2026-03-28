"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

const HIGHLIGHTS = [
  { num: "01", text: "Khóa học 6 tháng chuyên sâu" },
  { num: "02", text: "Thực hành trên tóc thật mỗi 2 tuần" },
  { num: "03", text: "Cấp chứng chỉ nghề sau tốt nghiệp" },
  { num: "04", text: "Ưu tiên làm việc tại hệ thống G Barber" },
];

export default function AcademySection() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: "#050505", overflow: "hidden" }}>
      <div className="container">
        <div className="academy-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}>
          {/* Image – stacked on mobile, left on desktop */}
          <div className="reveal" style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
              <img
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80"
                alt="G Barber Academy – Đào tạo thợ cắt tóc chuyên nghiệp"
                style={{
                  width: "100%", display: "block",
                  aspectRatio: "4/3", objectFit: "cover",
                  filter: "grayscale(50%)",
                  transition: "filter 0.5s",
                }}
              />
            </div>
            {/* Floating price badge */}
            <div className="glass reveal reveal-delay-2" style={{
              position: "absolute", top: 16, left: -8,
              padding: "12px 18px",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 28, lineHeight: 1,
                color: "#fff", letterSpacing: "0.04em",
              }}>25M</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 8, fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}>Học Phí Trọn Gói</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-header reveal reveal-delay-1">
              <span className="tag">G Barber Academy</span>
              <div className="accent-line" />
              <h2 className="t-h2" style={{ marginBottom: 16 }}>
                Học Nghề.<br />
                <span className="gradient-text">Thành Thợ.</span>
              </h2>
            </div>

            <p className="t-body reveal reveal-delay-2" style={{ marginBottom: 28 }}>
              Đào tạo Barber chuyên nghiệp từ cơ bản đến nâng cao trong 6 tháng.
              Giảng viên là các Master Barber nhiều năm kinh nghiệm.
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {HIGHLIGHTS.map((h, i) => (
                <li key={h.num} className={`reveal reveal-delay-${Math.min(i + 2, 6)}`}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 16,
                    color: "rgba(255,255,255,0.12)",
                    width: 28, flexShrink: 0,
                    letterSpacing: "0.04em",
                  }}>{h.num}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                  }}>{h.text}</span>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-5" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={ROUTES.training} className="btn btn-primary">
                Xem Khoá Học
              </Link>
              <a href="tel:0523186168" className="btn btn-outline">
                Gọi Tư Vấn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .academy-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
