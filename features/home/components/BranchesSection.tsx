"use client";

import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { Button, Image } from "antd";
import homeData from "@/data/home.json";
import type { BranchesData } from "@/types";
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import HorizontalScrollCards from "@/shared/components/HorizontalScrollCards";

const branches = homeData.branches as BranchesData;

function BranchCard({ b, i, style }: {
  b: typeof branches.items[0];
  i: number;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`branch-card card reveal reveal-delay-${i + 1}`}
      style={{
        padding: 0, overflow: "hidden",
        display: "flex", flexDirection: "column",
        ...style,
      }}>
      <div style={{ position: "relative", width: "100%", height: 140, overflow: "hidden" }}>
        <Image
          src={`/assets/branches/cn${i + 1}.jpg`}
          alt={b.name}
          preview={false}
          loading="lazy"
          style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
          styles={{ root: { display: "block", width: "100%", height: "100%" } }}
        />
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(4px)",
          padding: "3px 8px", borderRadius: "100px",
          fontSize: 10, fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "0.05em",
        }}>
          CS {i + 1}
        </div>
      </div>
      <div style={{ padding: "clamp(12px, 2.5vw, 22px)", display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 style={{
          fontFamily: "var(--font-body)",
          fontSize: 15, fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.3,
        }}>{b.name}</h3>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 12, fontWeight: 400,
          color: "var(--text-secondary)", lineHeight: 1.6,
          display: "flex", alignItems: "flex-start", gap: 5,
        }}><EnvironmentOutlined style={{ marginTop: 3, flexShrink: 0 }} /> {b.address}</p>
        <div style={{
          paddingTop: 10, borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <Button 
            type="link"
            href={`tel:${b.phone.replace(/\s/g, "")}`}
            icon={<PhoneOutlined />}
            style={{
              padding: 0,
              fontFamily: "var(--font-body)",
              fontSize: 13, fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {b.phone}
          </Button>
          <span style={{
            fontSize: 10, color: "var(--text-muted)", fontWeight: 500,
            display: "flex", alignItems: "center", gap: 3,
          }}><ClockCircleOutlined /> {b.hours}</span>
        </div>
        <Button 
          type="link"
          href={b.mapUrl} 
          target="_blank"
          style={{
            padding: 0,
            justifyContent: "flex-start",
            fontFamily: "var(--font-body)",
            fontSize: 10, fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.05em", textTransform: "uppercase",
            marginTop: 2, display: "flex", alignItems: "center", gap: 4,
          }}
        >
          Xem bản đồ <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
}

export default function BranchesSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section no-cv" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal text-center" style={{ maxWidth: 480, margin: "0 auto" }}>
          <span className="tag" style={{ margin: "0 auto 12px", display: "inline-flex" }}>{branches.tag}</span>
          <div className="accent-line-center" />
          <h2 className="t-h2" style={{ marginTop: 14 }}>{branches.heading}</h2>
          <p className="t-body" style={{ marginTop: 10 }}>{branches.description}</p>
        </div>

        {/* Branch cards */}
        <div style={{ marginTop: "clamp(1.5rem, 4vw, 3rem)" }}>
          {/* Mobile: horizontal scroll with auto-scroll + dots */}
          <HorizontalScrollCards
            itemCount={branches.items.length}
            style={{ padding: "0 var(--container-px)" }}
          >
            {branches.items.map((b, i) => (
              <BranchCard key={b.id} b={b} i={i}
                style={{ width: "75vw", maxWidth: 280, flexShrink: 0 }} />
            ))}
          </HorizontalScrollCards>

          {/* Desktop: grid (shows at 768px+) */}
          <div className="branch-grid">
            {branches.items.map((b, i) => (
              <BranchCard key={b.id} b={b} i={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .branch-card:hover {
          border-color: rgba(185,28,28,0.3);
        }
        .branch-card img,
        .branch-card .ant-image-img {
          transition: transform 0.5s var(--ease);
        }
        .branch-card:hover img,
        .branch-card:hover .ant-image-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
