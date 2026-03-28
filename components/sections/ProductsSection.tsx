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

  const renderCard = (p: typeof products[0], i: number, isMobile = false) => (
    <Link
      key={`${p.id}-${isMobile ? 'm' : 'd'}`}
      href={`${ROUTES.products}/${p.slug}`}
      className={`product-card card reveal reveal-delay-${Math.min(i + 1, 4)}`}
      style={{ display: "block", ...(isMobile ? { width: "68vw", maxWidth: 260 } : {}) }}
    >
      <div className="product-img-wrap" style={{ aspectRatio: "1", background: "#080808" }}>
        <img src={p.image} alt={p.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: "grayscale(30%)",
            transition: "filter 0.5s, transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }} />
        {!isMobile && (
          <div className="product-overlay">
            <div style={{
              width: 44, height: 44,
              border: "1.5px solid rgba(255,255,255,0.5)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, color: "#fff",
              backdropFilter: "blur(8px)",
              background: "rgba(255,255,255,0.05)",
            }}>+</div>
          </div>
        )}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <span className="tag" style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            fontSize: "0.5rem",
          }}>
            {p.tag}
          </span>
        </div>
      </div>
      <div style={{ padding: "14px 14px 16px" }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600, fontSize: 13,
          letterSpacing: "0.01em", marginBottom: 4,
          color: "#fff", lineHeight: 1.3,
        }}>
          {p.name}
        </p>
        <p style={{
          fontSize: 11, color: "rgba(255,255,255,0.3)",
          marginBottom: 10, lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {p.description}
        </p>
        <div className="t-price" style={{ fontSize: 14 }}>{p.price}</div>
      </div>
    </Link>
  );

  return (
    <section ref={sectionRef} className="section" style={{ background: "#0a0a0a", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          marginBottom: "clamp(2rem, 5vw, 3.5rem)",
        }}>
          <div className="section-header reveal" style={{ marginBottom: 0 }}>
            <span className="tag">Sản Phẩm</span>
            <div className="accent-line" />
            <h2 className="t-h2">
              Tạo Kiểu.<br />
              <span className="gradient-text">Chất Riêng.</span>
            </h2>
          </div>
          <Link href={ROUTES.products} className="btn btn-outline btn-sm reveal reveal-delay-2"
            style={{ alignSelf: "flex-end" }}>
            Tất cả →
          </Link>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="scroll-snap-x mobile-only"
          style={{ margin: "0 calc(var(--container-px) * -1)", padding: "0 var(--container-px)" }}>
          {products.map((p, i) => renderCard(p, i, true))}
        </div>

        {/* Desktop: grid */}
        <div className="desktop-only grid-auto-4">
          {products.map((p, i) => renderCard(p, i, false))}
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
