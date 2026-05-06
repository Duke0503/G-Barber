"use client";

import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { Image } from "antd";
import homeData from "@/data/home.json";
import type { GalleryData } from "@/types";

const gallery = homeData.gallery as GalleryData;

export default function GallerySection() {
  const ref = useScrollReveal(0.05);

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
          <Image.PreviewGroup>
            {gallery.images.map((img, i) => (
              <div
                key={img.label}
                className={`gallery-item reveal reveal-delay-${Math.min(i + 1, 6)}`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  preview={{
                    cover: (
                      <div className="gallery-overlay">
                        <span className="gallery-label">{img.label}</span>
                      </div>
                    ),
                  }}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>

      <style>{`
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-sm);
          aspect-ratio: 1;
          transition: all 0.4s var(--ease);
        }
        
        /* Override Antd Image wrapper to fill container */
        .gallery-item .ant-image {
          width: 100%;
          height: 100%;
          display: block;
        }

        .gallery-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .gallery-label {
          font-family: var(--font-display);
          font-size: 14px;
          color: #fff;
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
      `}</style>
    </section>
  );
}
