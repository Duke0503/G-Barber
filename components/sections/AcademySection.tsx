"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

const HIGHLIGHTS = [
  { icon: "01", text: "Khóa học 6 tháng chuyên sâu" },
  { icon: "02", text: "Thực hành trên tóc thật mỗi 2 tuần" },
  { icon: "03", text: "Cấp chứng chỉ nghề sau tốt nghiệp" },
  { icon: "04", text: "Ưu tiên làm việc tại hệ thống G Barber" },
];

export default function AcademySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".anim-item").forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeInUp 0.7s ease-out ${i * 0.12}s both`;
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
    <section ref={sectionRef} className="section" style={{ background: "#050505", overflow: "hidden", position: "relative" }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", bottom: "-20%", right: "-10%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(2.5rem, 6vw, 5rem)",
          alignItems: "center",
        }}>
          {/* Left: image */}
          <div className="anim-item" style={{ position: "relative", opacity: 0 }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg, 20px)" }}>
              <img
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80"
                alt="G Barber Academy"
                style={{
                  width: "100%", display: "block",
                  aspectRatio: "4/3", objectFit: "cover",
                  filter: "grayscale(60%)",
                  transition: "filter 0.5s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(60%)")}
              />
              {/* Corner accent */}
              <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: "35%", height: "35%",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                pointerEvents: "none",
              }} />
            </div>
            {/* Floating stat */}
            <div className="glass" style={{
              position: "absolute", top: 20, left: -12,
              padding: "14px 22px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 32, fontWeight: 400, lineHeight: 1,
                color: "#fff", letterSpacing: "0.05em",
              }}>
                25M
              </div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 9, fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}>
                Học Phí Trọn Gói
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="anim-item" style={{ opacity: 0 }}>
              <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>G Barber Academy</span>
              <div className="accent-line" style={{ margin: "16px 0 24px" }} />
              <h2 className="t-h2" style={{ marginBottom: 20 }}>
                Học Nghề.<br />
                <span className="gradient-text">Thành Thợ.</span>
              </h2>
            </div>

            <p className="t-body anim-item" style={{ marginBottom: 32, opacity: 0 }}>
              Đào tạo Barber chuyên nghiệp từ cơ bản đến nâng cao trong 6 tháng. Giảng viên là
              các Master Barber nhiều năm kinh nghiệm. Thực hành thực tế mỗi 2 tuần.
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {HIGHLIGHTS.map((h) => (
                <li key={h.text} className="anim-item" style={{
                  display: "flex", alignItems: "center", gap: 16,
                  opacity: 0,
                }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 18,
                    color: "rgba(255,255,255,0.15)",
                    width: 32,
                    flexShrink: 0,
                    letterSpacing: "0.05em",
                  }}>
                    {h.icon}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14, fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "0.01em",
                  }}>
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="anim-item" style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: 0 }}>
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
    </section>
  );
}
