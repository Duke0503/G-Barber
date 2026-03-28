"use client";

import { useEffect, useRef } from "react";

const VIDEOS = [
  { id: "Qh4aJHnwxmc", title: "Xử lý tóc nhuộm đen – lên màu nâu tây" },
  { id: "ScMzIvxBSi4", title: "BST Tóc Tết 2026 – Highlight bạch kim" },
  { id: "EkHTsc9Z-_0", title: "Series Tóc Tết 2026 | Nhuộm Half-Half" },
  { id: "hHW1oY26kxQ", title: "Tóc Tết 2026 | Xám Khói hay Đỏ Cherry?" },
  { id: "9bZkp7q19f0", title: "Central Cee Perm – Bắt trend mới nhất" },
  { id: "JGwWNGJdvx8", title: "Uốn Buddha – Tóc đẹp chơi Tết" },
];

export default function YoutubeSection() {
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

  const renderCard = (v: typeof VIDEOS[0], i: number, isMobile = false) => (
    <a
      key={`${v.id}-${isMobile ? 'm' : 'd'}`}
      href={`https://www.youtube.com/watch?v=${v.id}`}
      target="_blank" rel="noopener noreferrer"
      className={`card yt-card reveal reveal-delay-${Math.min(i + 1, 6)}`}
      style={{
        display: "block", textDecoration: "none", overflow: "hidden",
        ...(isMobile ? { width: "72vw", maxWidth: 300 } : {}),
      }}
    >
      <div style={{
        position: "relative", aspectRatio: "16/9",
        background: "#111", overflow: "hidden",
        borderRadius: "var(--radius) var(--radius) 0 0",
      }}>
        <img
          src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
          alt={v.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s",
            filter: "grayscale(30%)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.15)",
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ padding: "12px 14px" }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12, fontWeight: 600,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.5,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{v.title}</p>
      </div>
    </a>
  );

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
            <span className="tag">YouTube</span>
            <div className="accent-line" />
            <h2 className="t-h2">
              Video<br />
              <span className="gradient-text">Mới Nhất</span>
            </h2>
          </div>
          <a href="https://youtube.com/@gbarbershop" target="_blank" rel="noopener noreferrer"
            className="btn btn-outline btn-sm reveal reveal-delay-1" style={{ alignSelf: "flex-end" }}>
            Subscribe →
          </a>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="scroll-snap-x mobile-only"
          style={{ margin: "0 calc(var(--container-px) * -1)", padding: "0 var(--container-px)" }}>
          {VIDEOS.map((v, i) => renderCard(v, i, true))}
        </div>

        {/* Desktop: grid */}
        <div className="desktop-only grid-auto-3">
          {VIDEOS.map((v, i) => renderCard(v, i, false))}
        </div>
      </div>

      <style>{`
        .yt-card:hover img {
          transform: scale(1.05) !important;
          filter: grayscale(0%) !important;
        }
      `}</style>
    </section>
  );
}
