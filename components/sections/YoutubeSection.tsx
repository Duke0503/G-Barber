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
            entry.target.querySelectorAll(".yt-card").forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${i * 0.1}s both`;
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
    <section ref={sectionRef} className="section" style={{ background: "#050505", position: "relative" }}>
      <div className="container">
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
          marginBottom: "clamp(2.5rem, 6vw, 4rem)",
        }}>
          <div>
            <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Kênh YouTube</span>
            <div className="accent-line" style={{ margin: "16px 0 20px" }} />
            <h2 className="t-h2">
              Video<br />
              <span className="gradient-text">Mới Nhất</span>
            </h2>
          </div>
          <a href="https://youtube.com/@gbarbershop" target="_blank" rel="noopener noreferrer"
            className="btn btn-outline btn-sm" style={{ alignSelf: "flex-end" }}>
            Subscribe →
          </a>
        </div>

        {/* Mobile-first grid */}
        <div className="grid-auto-3">
          {VIDEOS.map((v, i) => (
            <a
              key={i}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank" rel="noopener noreferrer"
              className="card yt-card"
              style={{ display: "block", textDecoration: "none", overflow: "hidden", opacity: 0 }}
            >
              {/* Thumbnail */}
              <div style={{
                position: "relative", aspectRatio: "16/9",
                background: "#111", overflow: "hidden",
                borderRadius: "var(--radius, 14px) var(--radius, 14px) 0 0",
              }}>
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s",
                    filter: "grayscale(40%)",
                  }}
                />
                {/* Play button */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(0,0,0,0.2)",
                  transition: "background 0.3s",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ padding: "14px" }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(11px, 2.5vw, 13px)",
                  fontWeight: 600, color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {v.title}
                </p>
              </div>
            </a>
          ))}
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
