import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import { BranchService } from "@/lib/services/BranchService";

export const metadata: Metadata = {
  title: "Hệ Thống Chi Nhánh",
  description: `${BranchService.getCount()}+ chi nhánh ${BRAND.name} khắp TP.HCM. Tìm chi nhánh gần bạn nhất. Hotline ${BRAND.phoneDisplay}.`,
};

export default function BranchesPage() {
  const branches = BranchService.getAll();

  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "clamp(3rem, 8vw, 6rem) 0", textAlign: "center" }}>
        <div className="container">
          <span className="t-label gold">Hệ Thống</span>
          <div className="gold-line" style={{ margin: "12px auto 20px" }} />
          <h1 className="t-h1">{BranchService.getCount()}+ Chi Nhánh</h1>
          <p className="t-body text-muted" style={{ maxWidth: 480, margin: "16px auto 0" }}>
            Phủ sóng khắp TP.HCM – luôn có một G Barber gần bạn.
          </p>
        </div>
      </div>

      {/* Branch grid */}
      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}>
          {branches.map((b) => (
            <div key={b.id} className="card" style={{ padding: "20px" }}>
              <div style={{
                fontSize: 9, fontWeight: 800, letterSpacing: "0.2em",
                color: "#D4AF37", textTransform: "uppercase", marginBottom: 8,
              }}>
                {b.district}
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 14 }}>
                📍 {b.address}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  style={{ fontSize: 12, fontWeight: 700, color: "#D4AF37" }}
                >
                  {b.phone}
                </a>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{b.hours}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Map CTA */}
        <div style={{
          marginTop: "clamp(2.5rem, 6vw, 4rem)",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          background: "#111",
          border: "1px solid rgba(212,175,55,0.2)",
          textAlign: "center",
        }}>
          <h3 style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 800, marginBottom: 8 }}>
            Không tìm thấy chi nhánh phù hợp?
          </h3>
          <p className="t-body text-muted" style={{ marginBottom: 20 }}>
            Gọi hotline để được tư vấn chi nhánh gần nhất hoặc đặt lịch trực tiếp.
          </p>
          <a href={`tel:${BRAND.phone}`} className="btn btn-gold">
            Gọi {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
