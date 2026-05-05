"use client";

import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { Carousel } from "antd";
import homeData from "@/data/home.json";
import type { TeamData } from "@/types";

const team = homeData.team as TeamData;

function TeamCard({ m, i, style }: {
  m: typeof team.members[0];
  i: number;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`team-card card reveal reveal-delay-${i + 1}`}
      style={{ overflow: "hidden", textAlign: "center", ...style }}>
      <div className="team-img" style={{
        aspectRatio: "3/4", overflow: "hidden",
        borderRadius: "var(--radius) var(--radius) 0 0",
      }}>
        <img src={m.image}
          alt={m.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s var(--ease)",
          }} />
      </div>
      <div style={{ padding: "12px 10px 16px" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 600,
          fontSize: 15, color: "var(--text-primary)", marginBottom: 2,
        }}>{m.name}</p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 500,
          color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase",
        }}>{m.role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal text-center" style={{ maxWidth: 480, margin: "0 auto" }}>
          <span className="tag" style={{ margin: "0 auto 12px", display: "inline-flex" }}>{team.tag}</span>
          <div className="accent-line-center" />
          <h2 className="t-h2" style={{ marginTop: 14 }}>{team.heading}</h2>
          <p className="t-body" style={{ marginTop: 10 }}>{team.description}</p>
        </div>

        {/* Team members */}
        <div style={{ marginTop: "clamp(1.5rem, 4vw, 3rem)" }}>
          {/* Mobile: horizontal scroll */}
          <div className="scroll-snap-x"
            style={{ padding: "0 var(--container-px)" }}>
            {team.members.map((m, i) => (
              <TeamCard key={m.name} m={m} i={i}
                style={{ width: "42vw", maxWidth: 180, flexShrink: 0 }} />
            ))}
          </div>

          {/* Desktop: grid (shows at 768px+) */}
          <div className="team-grid"
            style={{ padding: "0 var(--container-px)" }}>
            {team.members.map((m, i) => (
              <TeamCard key={m.name} m={m} i={i} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonial-wrap reveal reveal-delay-3">
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <Carousel autoplay effect="fade" dots={true}>
            {team.testimonials.map((t, i) => (
              <div key={t.name} style={{ padding: '0 20px' }}>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <p className="testimonial-name">{t.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style>{`
        .team-card {
          cursor: pointer;
        }
        .team-img img {
          filter: grayscale(50%);
          transition: filter 0.5s var(--ease), transform 0.5s var(--ease);
        }
        .team-card:hover .team-img img {
          filter: grayscale(0%);
          transform: scale(1.06);
        }
        .team-card:hover {
          border-color: rgba(201,169,110,0.4);
        }

        /* Testimonial carousel */
        .testimonial-wrap {
          margin-top: clamp(2rem, 4vw, 4rem);
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .testimonial-stars {
          margin-bottom: 12px;
        }
        .star {
          color: var(--accent);
          font-size: 14px;
          letter-spacing: 3px;
        }
        @media (min-width: 768px) {
          .star { font-size: 16px; letter-spacing: 4px; }
        }
        /* Antd Carousel Overrides */
        .ant-carousel .slick-dots li button {
          background: var(--text-faint);
          height: 6px;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: var(--accent);
          width: 20px;
        }
      `}</style>
    </section>
  );
}
