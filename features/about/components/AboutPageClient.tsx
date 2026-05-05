"use client";

import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined } from "@ant-design/icons";
import homeData from "@/data/home.json";
import { BRAND } from "@/lib/constants/brand";

const history = homeData.history;
const branches = homeData.branches;

export default function AboutPageClient() {
  const heroRef = useScrollReveal(0.1);
  const timelineRef = useScrollReveal(0.05);
  const closingRef = useScrollReveal(0.15);

  return (
    <>
      {/* Hero banner */}
      <section ref={heroRef} style={{
        position: "relative",
        padding: "clamp(8rem, 18vw, 12rem) var(--container-px) clamp(4rem, 8vw, 6rem)",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 50%, var(--bg-primary) 100%)",
        }} />
        <div className="noise-overlay" />

        <div style={{
          position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto",
          textAlign: "center",
          paddingTop: "4vh",
        }}>
          <span className="tag reveal" style={{ 
            margin: "0 auto 18px", display: "inline-flex",
            background: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.2)",
            color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.5)"
          }}>
            Về Chúng Tôi
          </span>
          <h1 className="t-h1 reveal reveal-delay-1" style={{ 
            marginBottom: 16,
            color: "#ffffff",
            textShadow: "0 4px 16px rgba(0,0,0,0.6)"
          }}>
            Câu Chuyện <span style={{ color: "var(--accent)", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>G - Barber</span>
          </h1>
          <p className="t-body reveal reveal-delay-2" style={{ 
            fontWeight: 500, 
            color: "#ffffff",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)"
          }}>
            Từ một chi nhánh nhỏ đầy thử thách đến hệ thống 3 chi nhánh hôm nay — hành trình
            của sự kiên trì, đam mê và tận tâm.
          </p>
        </div>
      </section>

      {/* Timeline — zigzag */}
      <section ref={timelineRef} className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          {/* Section header */}
          <div className="section-header reveal text-center" style={{ maxWidth: 500, margin: "0 auto" }}>
            <span className="tag" style={{ margin: "0 auto 16px", display: "inline-flex" }}>
              {history.tag}
            </span>
            <div className="accent-line-center" />
            <h2 className="t-h2" style={{ marginTop: 18 }}>{history.heading}</h2>
          </div>

          {/* Milestones zigzag */}
          <div style={{ marginTop: "clamp(3rem, 7vw, 5rem)" }}>
            {history.milestones.map((m, i) => (
              <div
                key={m.year}
                className={`zigzag-row reveal reveal-delay-${Math.min(i + 1, 4)}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "clamp(1.5rem, 4vw, 3rem)",
                  alignItems: "center",
                  marginBottom: i < history.milestones.length - 1 ? "clamp(3rem, 7vw, 5rem)" : 0,
                }}
              >
                {/* Image */}
                <div style={{
                  position: "relative", overflow: "hidden",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border)",
                  order: 0,
                }}
                  className={`zigzag-img zigzag-img-${i}`}
                >
                  <img
                    src={m.image || `/assets/branches/cn${i + 1}.jpg`}
                    alt={`${BRAND.name} – ${m.title}`}
                    style={{
                      width: "100%", display: "block",
                      aspectRatio: "16/10", objectFit: "cover",
                      transition: "transform 0.6s var(--ease)",
                    }}
                  />
                  {/* Year overlay */}
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    background: "var(--bg-elevated)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(184,138,68,0.2)",
                    borderRadius: "var(--radius-sm)",
                    padding: "10px 20px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28, fontWeight: 600,
                      color: "var(--accent)",
                    }}>{m.year}</span>
                  </div>
                </div>

                {/* Text */}
                <div className={`zigzag-text zigzag-text-${i}`} style={{ order: 1 }}>
                  <h3 className="t-h3" style={{
                    color: "var(--accent)", marginBottom: 16,
                    fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                  }}>
                    {m.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    fontWeight: 300, lineHeight: 2,
                    color: "var(--text-secondary)",
                  }}>
                    {m.description}
                  </p>

                  {/* Branch info if exists */}
                  {branches.items[i] && (
                    <div style={{
                      marginTop: 20, paddingTop: 16,
                      borderTop: "1px solid var(--border)",
                      display: "flex", flexDirection: "column", gap: 6,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11, fontWeight: 600,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "var(--accent)",
                      }}>
                        {branches.items[i].name}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12, fontWeight: 300,
                        color: "var(--text-muted)",
                        display: "flex", alignItems: "flex-start", gap: 6,
                      }}>
                        <EnvironmentOutlined style={{ marginTop: 2 }} /> {branches.items[i].address}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12, fontWeight: 300,
                        color: "var(--text-muted)",
                        display: "flex", alignItems: "center", gap: 8,
                      }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><PhoneOutlined /> {branches.items[i].phone}</span>
                        <span>·</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><ClockCircleOutlined /> {branches.items[i].hours}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section ref={closingRef} className="section" style={{
        background: "var(--bg-secondary)",
        textAlign: "center",
      }}>
        <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="reveal" style={{
            padding: "clamp(2rem, 5vw, 3rem)",
            background: "rgba(184,138,68,0.04)",
            border: "1px solid rgba(184,138,68,0.1)",
            borderRadius: "var(--radius-lg)",
          }}>
            <div style={{ marginBottom: 20 }}>
              <div className="accent-line-center" />
            </div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
              fontStyle: "italic",
              lineHeight: 1.9,
              color: "var(--text-secondary)",
              marginBottom: 24,
            }}>
              &ldquo;{history.closing}&rdquo;
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--accent)",
            }}>
              — {BRAND.name}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .zigzag-row {
            grid-template-columns: 1fr 1fr !important;
          }
          /* Even rows: image left, text right (default) */
          /* Odd rows: image right, text left */
          .zigzag-img-1 { order: 2 !important; }
          .zigzag-text-1 { order: 1 !important; }
        }
        .zigzag-row:hover .zigzag-img img {
          transform: scale(1.03);
        }
      `}</style>
    </>
  );
}
