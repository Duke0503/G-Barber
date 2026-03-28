import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import { ServiceMenuService } from "@/lib/services/ServiceMenuService";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ",
  description: `Bảng giá dịch vụ cắt tóc, nhuộm, uốn, tattoo tại ${BRAND.name}. Giá rõ ràng, không phát sinh. Hotline ${BRAND.phoneDisplay}.`,
};

const CATEGORY_LABELS: Record<string, string> = {
  haircut: "Cắt Tóc",
  color:   "Nhuộm Tóc",
  perm:    "Uốn / Duỗi",
  tattoo:  "Tattoo",
  beard:   "Râu",
  care:    "Chăm Sóc",
};

const CATEGORY_ORDER = ["haircut", "color", "perm", "tattoo", "beard", "care"];

export default function PricePage() {
  const categories = CATEGORY_ORDER;
  const allServices = ServiceMenuService.getAll();

  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero banner */}
      <div style={{
        background: "#111", padding: "clamp(3rem, 8vw, 6rem) 0",
        textAlign: "center",
      }}>
        <div className="container">
          <span className="t-label gold">Dịch Vụ & Giá</span>
          <div className="gold-line" style={{ margin: "12px auto 20px" }} />
          <h1 className="t-h1">Bảng Giá</h1>
          <p className="t-body text-muted" style={{ maxWidth: 480, margin: "16px auto 0" }}>
            Giá niêm yết rõ ràng. Không phát sinh. Tất cả dịch vụ bao gồm gội đầu.
          </p>
        </div>
      </div>

      {/* Price tables */}
      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {categories.map((cat) => {
            const services = allServices.filter((s) => s.category === cat);
            if (!services.length) return null;
            return (
              <div key={cat}>
                {/* Category header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 16,
                  marginBottom: 16, paddingBottom: 12,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <span style={{ fontSize: "1.4rem" }}>{services[0].icon}</span>
                  <h2 style={{
                    fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 800,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#D4AF37", margin: 0,
                  }}>
                    {CATEGORY_LABELS[cat]}
                  </h2>
                </div>

                {/* Service rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {services.map((svc, i) => (
                    <div key={svc.id} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                    }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                        {svc.name}
                      </span>
                      <span className="t-price" style={{ fontSize: 15 }}>{svc.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "clamp(3rem, 7vw, 5rem)" }}>
          <p className="t-body text-muted" style={{ marginBottom: 24 }}>
            Muốn tư vấn thêm? Gọi ngay cho chúng tôi.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BRAND.phone}`} className="btn btn-gold">
              Gọi {BRAND.phoneDisplay}
            </a>
            <Link href={ROUTES.contact} className="btn btn-outline">
              Đặt Lịch Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
