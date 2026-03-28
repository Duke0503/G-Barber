import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import { BranchService } from "@/lib/services/BranchService";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description: `${BRAND.name} – Hệ thống barber shop chuyên nghiệp với ${BranchService.getCount()}+ chi nhánh tại TP.HCM. Sứ mệnh nâng tầm phong cách nam giới Việt Nam.`,
};

const STATS = [
  { num: "17+", label: "Chi Nhánh" },
  { num: "50K+", label: "Khách Hàng" },
  { num: "5+", label: "Năm Kinh Nghiệm" },
  { num: "100+", label: "Barber Chuyên Nghiệp" },
];

const VALUES = [
  {
    icon: "✂️",
    title: "Tay Nghề Đỉnh Cao",
    desc: "Mỗi barber được đào tạo bài bản, thực hành hàng nghìn giờ trước khi phục vụ khách.",
  },
  {
    icon: "🎯",
    title: "Tư Vấn Tận Tâm",
    desc: "Không chỉ cắt theo yêu cầu – chúng tôi tư vấn kiểu tóc phù hợp nhất với bạn.",
  },
  {
    icon: "🌟",
    title: "Trải Nghiệm Đẳng Cấp",
    desc: "Không gian barber shop cao cấp, sạch sẽ, âm nhạc cuốn. Đến một lần là ghiền.",
  },
  {
    icon: "💡",
    title: "Luôn Cập Nhật Trend",
    desc: "Đội ngũ theo dõi xu hướng tóc toàn cầu, mang về những kiểu tóc mới nhất cho khách.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        background: "#111",
        padding: "clamp(3rem, 8vw, 6rem) 0",
        position: "relative", overflow: "hidden",
      }}>
        <div className="container">
          <span className="t-label gold">Về Chúng Tôi</span>
          <div className="gold-line" style={{ margin: "12px 0 20px" }} />
          <h1 className="t-h1" style={{ maxWidth: 600 }}>
            Đẳng Cấp Trong<br />
            <span style={{ color: "#D4AF37" }}>Từng Đường Kéo.</span>
          </h1>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>

        {/* Story */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(2rem, 6vw, 5rem)",
          alignItems: "center",
          marginBottom: "clamp(3rem, 8vw, 6rem)",
        }}>
          <div>
            <span className="t-label gold">Câu Chuyện</span>
            <div className="gold-line" style={{ margin: "12px 0 24px" }} />
            <p className="t-body" style={{ lineHeight: 1.8, marginBottom: 20 }}>
              G Barber Shop ra đời từ niềm đam mê với nghề tóc và khát vọng nâng tầm phong cách
              nam giới Việt Nam. Chúng tôi không chỉ cắt tóc – chúng tôi xây dựng phong cách.
            </p>
            <p className="t-body text-muted" style={{ lineHeight: 1.8, marginBottom: 20 }}>
              Từ một cơ sở nhỏ, G Barber đã phát triển thành chuỗi barber shop với {BranchService.getCount()}+ chi nhánh
              trải dài khắp TP.HCM. Mỗi chi nhánh mang đến một không gian đồng nhất: chuyên nghiệp,
              hiện đại và đậm chất barber culture.
            </p>
            <p className="t-body text-muted" style={{ lineHeight: 1.8 }}>
              Sứ mệnh của chúng tôi: mỗi khách hàng rời khỏi G Barber đều cảm thấy tự tin và đẹp hơn.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
              alt="G Barber Shop"
              style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", bottom: -16, right: -16,
              width: "35%", height: "35%",
              border: "2px solid #D4AF37",
              pointerEvents: "none",
            }} />
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          marginBottom: "clamp(3rem, 8vw, 6rem)",
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background: "#111", textAlign: "center",
            }}>
              <div style={{
                fontSize: "clamp(32px, 7vw, 52px)", fontWeight: 900,
                color: "#D4AF37", lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: 9, fontWeight: 800, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
                marginTop: 8,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div style={{ marginBottom: "clamp(3rem, 8vw, 6rem)" }}>
          <span className="t-label gold">Giá Trị Cốt Lõi</span>
          <div className="gold-line" style={{ margin: "12px 0 32px" }} />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: 2,
          }}>
            {VALUES.map((v) => (
              <div key={v.title} className="card" style={{ padding: "clamp(1.5rem, 3vw, 2rem)" }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 16 }}>{v.icon}</span>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: "#111",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          textAlign: "center",
          border: "1px solid rgba(212,175,55,0.2)",
        }}>
          <h2 className="t-h2" style={{ marginBottom: 16 }}>Trải Nghiệm Ngay Hôm Nay</h2>
          <p className="t-body text-muted" style={{ marginBottom: 28, maxWidth: 440, margin: "0 auto 28px" }}>
            Đặt lịch cắt tóc hoặc ghé thẳng bất kỳ chi nhánh nào của G Barber Shop.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={ROUTES.contact} className="btn btn-gold btn-lg">
              Đặt Lịch Ngay
            </Link>
            <Link href={ROUTES.branches} className="btn btn-outline">
              Tìm Chi Nhánh
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
