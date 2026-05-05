"use client";

import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import homeData from "@/data/home.json";
import type { GalleryData } from "@/types";

const gallery = homeData.gallery as GalleryData;

export default function GallerySection() {
  const ref = useScrollReveal(0.05);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIdx, close]);

  return (
    <section ref={ref} className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header reveal text-center">
          <span className="tag" style={{ margin: "0 auto 12px", display: "inline-flex" }}>{gallery.tag}</span>
          <div className="accent-line-center" />
          <h2 className="t-h2" style={{ marginTop: 14 }}>{gallery.heading}</h2>
          <p className="t-body" style={{ marginTop: 10 }}>{gallery.description}</p>
        </div>

        <div className="gallery-grid">
          {gallery.images.map((img, i) => (
            <button
              type="button"
              key={img.label}
              className={`gallery-item reveal reveal-delay-${Math.min(i + 1, 6)} gallery-open-btn`}
              onClick={() => setLightboxIdx(i)}
              aria-label={`Xem ảnh ${img.label}`}
            >
              <img src={img.src} alt={img.label} />
              <div className="gallery-overlay">
                <span className="gallery-label">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Đóng">
            ✕
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + gallery.images.length) % gallery.images.length); }}
            aria-label="Ảnh trước"
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={gallery.images[lightboxIdx].src} alt={gallery.images[lightboxIdx].label} />
            <p className="lightbox-caption">{gallery.images[lightboxIdx].label}</p>
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % gallery.images.length); }}
            aria-label="Ảnh tiếp"
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        .gallery-open-btn {
          background: none;
          border: 1px solid var(--border);
          padding: 0;
          cursor: pointer;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-sm);
          aspect-ratio: 1;
          transition: all 0.4s var(--ease);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s var(--ease);
        }
        .gallery-item:hover img {
          transform: scale(1.06);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: background 0.4s;
        }
        .gallery-item:hover .gallery-overlay {
          background: rgba(255,255,255,0.75);
        }
        .gallery-label {
          font-family: var(--font-display);
          font-size: 14px;
          color: var(--text-primary);
          letter-spacing: 0.08em;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.3s;
        }
        @media (min-width: 768px) {
          .gallery-label { font-size: 16px; }
        }
        .gallery-item:hover .gallery-label {
          opacity: 1;
          transform: translateY(0);
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(26,26,24,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s var(--ease);
        }
        .lightbox-content {
          max-width: 92vw;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: scaleIn 0.35s var(--ease);
        }
        @media (min-width: 768px) {
          .lightbox-content {
            max-width: 90vw;
            max-height: 85vh;
            gap: 16px;
          }
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: var(--radius);
        }
        @media (min-width: 768px) {
          .lightbox-content img { max-height: 75vh; }
        }
        .lightbox-caption {
          font-family: var(--font-display);
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.08em;
        }
        @media (min-width: 768px) {
          .lightbox-caption { font-size: 18px; }
        }
        .lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 18px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        @media (min-width: 768px) {
          .lightbox-close { top: 20px; right: 20px; width: 44px; height: 44px; font-size: 20px; }
        }
        .lightbox-close:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.1);
        }
        .lightbox-prev,
        .lightbox-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        @media (min-width: 768px) {
          .lightbox-prev,
          .lightbox-next { font-size: 32px; width: 52px; height: 52px; }
        }
        .lightbox-prev { left: 12px; }
        .lightbox-next { right: 12px; }
        @media (min-width: 768px) {
          .lightbox-prev { left: 20px; }
          .lightbox-next { right: 20px; }
        }
        .lightbox-prev:hover,
        .lightbox-next:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-50%) scale(1.08);
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
