"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";
import { BranchService } from "@/lib/services/BranchService";

export default function HeroSection() {
  const branchCount = BranchService.getCount();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax on desktop only
    const handleScroll = () => {
      if (!heroRef.current || window.innerWidth < 768) return;
      const y = window.scrollY;
      const bg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
      if (bg) bg.style.transform = `scale(1.1) translateY(${y * 0.15}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* BG image */}
      <div className="hero-bg" style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=85')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
        filter: "grayscale(100%) contrast(1.1) brightness(0.7)",
        transform: "scale(1.1)",
        willChange: "transform",
      }} />

      {/* Gradient overlays */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.2) 40%, rgba(5,5,5,0.92) 85%, #050505 100%)",
      }} />

      {/* Side line decoration – desktop */}
      <div className="desktop-only-flex" style={{
        position: "absolute", top: "50%", right: 32,
        transform: "translateY(-50%)",
        flexDirection: "column", alignItems: "center", gap: 12,
        color: "rgba(255,255,255,0.1)",
      }}>
        <div style={{ width: 1, height: 64, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))" }} />
        <span style={{
          writingMode: "vertical-rl",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 9, fontWeight: 600,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
        }}>Scroll</span>
        <div style={{ width: 1, height: 64, background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)" }} />
      </div>

      {/* Noise */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Badge */}
        <div className="fade-in-up" style={{ marginBottom: 20, marginTop: "15vh" }}>
          <span className="tag">✦ {BRAND.tagline}</span>
        </div>

        {/* Main heading */}
        <h1 className="t-hero fade-in-up delay-1" style={{ marginBottom: 24, maxWidth: 800 }}>
          G<br />
          <span className="gradient-text">BARBER</span><br />
          SHOP
        </h1>

        {/* Tagline */}
        <p className="fade-in-up delay-2" style={{
          maxWidth: 420, marginBottom: 36,
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.5)",
        }}>
          Cắt tóc không chỉ là làm đẹp — đó là thái độ sống.
          Phong cách của bạn bắt đầu từ đây.
        </p>

        {/* CTAs */}
        <div className="fade-in-up delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
          <Link href={ROUTES.contact} className="btn btn-primary btn-lg">
            Đặt Lịch Ngay
          </Link>
          <Link href={ROUTES.price} className="btn btn-outline btn-lg">
            Xem Bảng Giá
          </Link>
        </div>

        {/* Stats */}
        <div className="fade-in-up delay-4" style={{
          display: "flex", gap: "clamp(24px, 4vw, 48px)", flexWrap: "wrap",
          paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { v: `${branchCount}+`, l: "Chi Nhánh" },
            { v: "25+", l: "Năm Kinh Nghiệm" },
            { v: "10K+", l: "Lượt Phục Vụ" },
          ].map((s) => (
            <div key={s.l} style={{ width: 140 }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "0.04em",
              }}>
                {s.v}
              </div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10, fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: 6,
                color: "rgba(255,255,255,0.25)",
              }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom marquee */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "10px 0",
        background: "rgba(5,5,5,0.6)",
        backdropFilter: "blur(8px)",
      }}>
        <div className="marquee-track">
          {[...Array(3)].map((_, r) => (
            <span key={r} style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(0.65rem, 1.8vw, 0.85rem)",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.08)",
              paddingRight: 28,
              whiteSpace: "nowrap",
            }}>
              CẮT TÓC NAM ✦ NHUỘM TÓC ✦ UỐN XOĂN ✦ TATTOO HAIR ✦ BARBER STYLE ✦ POMADE ✦&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
