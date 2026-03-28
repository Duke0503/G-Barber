"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { ProductService } from "@/lib/services/ProductService";

export default function ProductsSection() {
  const products = ProductService.getFeatured(4);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".prod-item");
            items.forEach((item, i) => {
              (item as HTMLElement).style.animation = `fadeInUp 0.7s ease-out ${i * 0.12}s both`;
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
        {/* Header row – label left, link right */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          marginBottom: "clamp(2.5rem, 6vw, 4rem)",
        }}>
          <div>
            <span className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Sản Phẩm</span>
            <div className="accent-line" style={{ margin: "16px 0 20px" }} />
            <h2 className="t-h2">
              Tạo Kiểu.<br />
              <span className="gradient-text">Chất Riêng.</span>
            </h2>
          </div>
          <Link href={ROUTES.products} className="btn btn-outline btn-sm"
            style={{ alignSelf: "flex-end" }}>
            Tất cả →
          </Link>
        </div>

        {/* Product grid – mobile-first responsive */}
        <div className="grid-auto-4">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`${ROUTES.products}/${p.slug}`}
              className="product-card card prod-item"
              style={{ display: "block", textDecoration: "none", opacity: 0 }}
            >
              {/* Image */}
              <div className="product-img-wrap" style={{
                aspectRatio: "1",
                background: "#050505",
              }}>
                <img src={p.image} alt={p.name}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: "grayscale(30%)",
                    transition: "filter 0.5s, transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                  }} />
                <div className="product-overlay">
                  <div style={{
                    width: 48, height: 48,
                    border: "1.5px solid rgba(255,255,255,0.6)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, color: "#fff",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,0.05)",
                  }}>+</div>
                </div>
                {/* Tag */}
                <div style={{
                  position: "absolute", top: 12, left: 12,
                }}>
                  <span className="tag" style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                  }}>
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "16px 16px 18px" }}>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: 14,
                  letterSpacing: "0.02em", marginBottom: 6,
                  color: "#fff", lineHeight: 1.3,
                }}>
                  {p.name}
                </p>
                <p style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 12,
                  lineHeight: 1.6,
                }}>
                  {p.description}
                </p>
                <div className="t-price" style={{ fontSize: 15 }}>{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .product-card:hover img {
          filter: grayscale(0%) !important;
        }
      `}</style>
    </section>
  );
}
