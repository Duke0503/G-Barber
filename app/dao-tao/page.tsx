import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "G Barber Academy – Học Nghề Cắt Tóc",
  description: `Đào tạo barber chuyên nghiệp 6 tháng tại ${BRAND.name}. Giảng viên Master Barber nhiều năm kinh nghiệm. Học phí 25 triệu trọn gói.`,
};

const MODULES = [
  {
    num: "01",
    title: "Nền Tảng",
    duration: "Tháng 1–2",
    topics: ["Lý thuyết cơ bản về tóc", "Kỹ thuật cầm kéo & tông đơ", "Các kiểu cắt cơ bản", "An toàn & vệ sinh dụng cụ"],
  },
  {
    num: "02",
    title: "Kỹ Thuật Nâng Cao",
    duration: "Tháng 3–4",
    topics: ["Fade & Taper nâng cao", "Barber Style – Men's Fashion Cut", "Nhuộm & Tẩy tóc", "Uốn xoăn Hàn Quốc"],
  },
  {
    num: "03",
    title: "Thực Hành & Thương Hiệu",
    duration: "Tháng 5–6",
    topics: ["Thực hành trên khách thật", "Xây dựng thương hiệu cá nhân", "Quản lý khách hàng", "Kỳ thi tốt nghiệp"],
  },
];

const HIGHLIGHTS = [
  { icon: "🎓", label: "Chứng chỉ nghề", desc: "Được cấp bởi G Barber Academy sau khi tốt nghiệp" },
  { icon: "✂️", label: "Thực hành thực tế", desc: "Thực hành trên tóc thật mỗi 2 tuần từ tháng 1" },
  { icon: "💼", label: "Cơ hội việc làm", desc: "Ưu tiên tuyển dụng vào hệ thống 17+ chi nhánh" },
  { icon: "👨‍🏫", label: "Master Barber", desc: "Học trực tiếp với các barber có 5–10 năm kinh nghiệm" },
];

export default function TrainingPage() {
  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        background: "#111",
        padding: "clamp(3rem, 8vw, 6rem) 0",
        position: "relative", overflow: "hidden",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="t-label gold">G Barber Academy</span>
          <div className="gold-line" style={{ margin: "12px 0 20px" }} />
          <h1 className="t-h1" style={{ maxWidth: 600 }}>
            Học Nghề.<br />
            <span style={{ color: "#D4AF37" }}>Thành Thợ.</span>
          </h1>
          <p className="t-body text-muted" style={{ maxWidth: 480, margin: "20px 0 32px" }}>
            Khóa học 6 tháng chuyên sâu. Từ cơ bản đến nâng cao. Giảng viên Master Barber.
            Thực hành ngay từ tháng đầu tiên.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`tel:${BRAND.phone}`} className="btn btn-gold btn-lg">
              Đăng Ký Ngay
            </a>
            <a href={`tel:${BRAND.phone}`} className="btn btn-outline">
              Tư Vấn Miễn Phí
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>

        {/* Price highlight */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 20,
          background: "#D4AF37", color: "#000",
          padding: "clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 4vw, 2.5rem)",
          marginBottom: "clamp(3rem, 7vw, 5rem)",
        }}>
          <div>
            <div style={{ fontSize: "clamp(32px, 7vw, 48px)", fontWeight: 900, lineHeight: 1 }}>25M</div>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Học Phí Trọn Gói
            </div>
          </div>
          <div style={{ width: 1, height: 48, background: "rgba(0,0,0,0.2)" }} />
          <p style={{ fontSize: 12, fontWeight: 600, maxWidth: 180, lineHeight: 1.5 }}>
            Bao gồm tất cả dụng cụ học tập & tài liệu
          </p>
        </div>

        {/* Highlights */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
          gap: 2,
          marginBottom: "clamp(3rem, 7vw, 5rem)",
        }}>
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="card" style={{ padding: "24px" }}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{h.icon}</span>
              <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6, letterSpacing: "0.05em" }}>
                {h.label}
              </h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div style={{ marginBottom: "clamp(3rem, 7vw, 5rem)" }}>
          <span className="t-label gold">Chương Trình Học</span>
          <div className="gold-line" style={{ margin: "12px 0 32px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {MODULES.map((mod) => (
              <div key={mod.num} className="card" style={{ padding: "clamp(1.2rem, 3vw, 2rem)" }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span style={{
                    fontSize: "clamp(28px, 6vw, 40px)", fontWeight: 900,
                    color: "rgba(212,175,55,0.2)", lineHeight: 1, flexShrink: 0,
                    fontVariantNumeric: "tabular-nums",
                  }}>
                    {mod.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "clamp(15px, 3vw, 18px)", fontWeight: 800 }}>{mod.title}</h3>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "#D4AF37", letterSpacing: "0.1em" }}>
                        {mod.duration}
                      </span>
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
                      {mod.topics.map((t) => (
                        <li key={t} style={{
                          fontSize: 12, color: "rgba(255,255,255,0.55)",
                          display: "flex", alignItems: "center", gap: 6,
                        }}>
                          <span style={{ color: "#D4AF37", fontSize: 10 }}>—</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
          <h2 className="t-h2" style={{ marginBottom: 16 }}>Sẵn Sàng Bắt Đầu?</h2>
          <p className="t-body text-muted" style={{ marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>
            Liên hệ ngay để được tư vấn miễn phí và nhận lịch khai giảng gần nhất.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BRAND.phone}`} className="btn btn-gold btn-lg">
              Gọi {BRAND.phoneDisplay}
            </a>
            <Link href={ROUTES.contact} className="btn btn-outline">
              Đặt Lịch Tư Vấn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
