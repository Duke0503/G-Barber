"use client";

import { Image } from "antd";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import homeData from "@/data/home.json";
import type { PricingData } from "@/types";

const pricing = homeData.pricing as PricingData;

export default function PricingSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal text-center" style={{ maxWidth: 560, margin: "0 auto" }}>
          <span className="tag" style={{ margin: "0 auto 12px", display: "inline-flex" }}>{pricing.tag}</span>
          <div className="accent-line-center" />
          <h2 className="t-h2" style={{ marginTop: 14 }}>{pricing.heading}</h2>
          <p className="t-body" style={{ marginTop: 10 }}>{pricing.description}</p>
        </div>

        <div className="pricing-content">


          {/* Pricing Image */}
          <div className="pricing-image-wrap reveal">
            <Image 
              src={pricing.image} 
              alt="Bảng giá G - Barber Shop" 
              className="pricing-image"
              preview={{ mask: "Phóng to" }}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .pricing-content {
          margin-top: clamp(2rem, 5vw, 4rem);
        }


        .pricing-image-wrap {
          max-width: 800px;
          margin: 0 auto;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 1px solid var(--border);
        }
        
        .pricing-image {
          width: 100%;
          display: block;
          height: auto;
        }
      `}</style>
    </section>
  );
}
