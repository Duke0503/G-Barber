import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import { ProductService } from "@/lib/services/ProductService";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Sản Phẩm Tạo Kiểu",
  description: `Sản phẩm tạo kiểu tóc chính hãng tại ${BRAND.name}. Pomade, Clay Wax, Grooming Tonic. Mua trực tiếp tại shop.`,
};

export default function ProductsPage() {
  const products = ProductService.getAll();

  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "clamp(3rem, 8vw, 6rem) 0", textAlign: "center" }}>
        <div className="container">
          <span className="t-label gold">Sản Phẩm</span>
          <div className="gold-line" style={{ margin: "12px auto 20px" }} />
          <h1 className="t-h1">Tạo Kiểu.<br /><span style={{ color: "#D4AF37" }}>Chất Riêng.</span></h1>
          <p className="t-body text-muted" style={{ maxWidth: 480, margin: "16px auto 0" }}>
            Sản phẩm được lựa chọn kỹ lưỡng bởi đội ngũ Master Barber của G Barber Shop.
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}>
          {products.map((p) => (
            <Link
              key={p.id}
              href={`${ROUTES.products}/${p.slug}`}
              className="product-card card"
              style={{ display: "block", textDecoration: "none" }}
            >
              <div className="product-img-wrap" style={{ aspectRatio: "1", background: "#0a0a0a" }}>
                <img src={p.image} alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="product-overlay">
                  <div style={{
                    width: 56, height: 56, border: "1px solid #D4AF37",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 26, color: "#D4AF37",
                  }}>+</div>
                </div>
                <div style={{
                  position: "absolute", top: 10, left: 10,
                  background: "#D4AF37", color: "#000",
                  fontSize: 9, fontWeight: 800, letterSpacing: "0.15em",
                  textTransform: "uppercase", padding: "3px 8px",
                }}>
                  {p.tag}
                </div>
              </div>
              <div style={{ padding: "16px" }}>
                <p style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.05em",
                  marginBottom: 6, color: "#fff", lineHeight: 1.3 }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12, lineHeight: 1.5 }}>
                  {p.description}
                </p>
                <div className="t-price">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div style={{
          marginTop: "clamp(2.5rem, 6vw, 4rem)",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          background: "#111",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: 24,
        }}>
          {[
            { icon: "✓", label: "Chính hãng 100%", desc: "Cam kết sản phẩm chính hãng, có tem nhập khẩu" },
            { icon: "🚚", label: "Ship toàn quốc", desc: "Giao hàng nhanh, đóng gói cẩn thận" },
            { icon: "↩️", label: "Đổi trả 7 ngày", desc: "Không hài lòng đổi ngay trong 7 ngày" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <p style={{ fontSize: 12, fontWeight: 800, marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p className="t-body text-muted" style={{ marginBottom: 16 }}>
            Mua trực tiếp tại bất kỳ chi nhánh G Barber hoặc đặt hàng qua hotline.
          </p>
          <a href={`tel:${BRAND.phone}`} className="btn btn-gold">
            Đặt Hàng: {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
