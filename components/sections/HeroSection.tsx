"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";
import { BranchService } from "@/lib/services/BranchService";

const MARQUEE_ITEMS = [
  "CẮT TÓC NAM",
  "✦",
  "NHUỘM TÓC",
  "✦",
  "UỐN XOĂN",
  "✦",
  "TATTOO HAIR",
  "✦",
  "BARBER STYLE",
  "✦",
  "POMADE",
  "✦",
];

export default function HeroSection() {
  const branchCount = BranchService.getCount();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const glow = heroRef.current.querySelector(".hero-glow") as HTMLElement;
      if (glow) {
        glow.style.left = `${e.clientX - 200}px`;
        glow.style.top = `${e.clientY - 200}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* BG image with heavy dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=85')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
        filter: "grayscale(100%) contrast(1.1)",
      }} />

      {/* Gradient overlays for depth */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.4) 30%, rgba(5,5,5,0.95) 100%)",
      }} />

      {/* Subtle noise texture */}
      <div className="noise-overlay" />

      {/* Interactive glow following mouse */}
      <div className="hero-glow" style={{
        position: "absolute",
        width: 400, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
        transition: "left 0.3s ease-out, top 0.3s ease-out",
        filter: "blur(60px)",
      }} />

      {/* Large watermark text */}
      <div style={{
        position: "absolute", top: "50%", right: "-5%",
        transform: "translateY(-50%) rotate(-90deg)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(6rem, 15vw, 14rem)",
        color: "rgba(255,255,255,0.02)",
        letterSpacing: "0.2em",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
      }}>
        BARBER SHOP
      </div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Label */}
        <div className="fade-in-up" style={{ marginBottom: 24 }}>
          <span className="tag">
            ✦ {BRAND.tagline}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="t-hero fade-in-up delay-1" style={{ marginBottom: 28, maxWidth: 800 }}>
          G<br />
          <span className="gradient-text">BARBER</span><br />
          SHOP
        </h1>

        {/* Tagline */}
        <p className="t-body fade-in-up delay-2" style={{ maxWidth: 460, marginBottom: 40, color: "rgba(255,255,255,0.45)" }}>
          Cắt tóc không chỉ là làm đẹp — đó là thái độ sống. Phong cách của bạn bắt đầu từ đây.
        </p>

        {/* CTAs */}
        <div className="fade-in-up delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
          <Link href={ROUTES.contact} className="btn btn-primary btn-lg">
            Đặt Lịch Ngay
          </Link>
          <Link href={ROUTES.price} className="btn btn-outline btn-lg">
            Xem Bảng Giá
          </Link>
        </div>

        {/* Stats row */}
        <div className="fade-in-up delay-4" style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {[
            { v: `${branchCount}+`, l: "Chi Nhánh" },
            { v: "25+",  l: "Năm Kinh Nghiệm" },
            { v: "10K+", l: "Lượt Phục Vụ" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "0.05em",
              }}>
                {s.v}
              </div>
              <div className="t-label" style={{ marginTop: 6, color: "rgba(255,255,255,0.3)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 28, right: "1.25rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        color: "rgba(255,255,255,0.2)",
      }}>
        <div style={{
          width: 1, height: 56,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
        }} />
        <span className="t-label" style={{ fontSize: 8, writingMode: "vertical-rl", letterSpacing: "0.3em" }}>
          SCROLL
        </span>
      </div>

      {/* Bottom marquee */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "12px 0",
        background: "rgba(5,5,5,0.5)",
        backdropFilter: "blur(10px)",
      }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.15)",
              paddingRight: 24,
              whiteSpace: "nowrap",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
