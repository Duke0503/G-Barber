"use client";
import Link from "next/link";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";

const FOOTER_LINKS = [
  { label: "Về Chúng Tôi",  href: ROUTES.about },
  { label: "Bảng Giá",      href: ROUTES.price },
  { label: "Sản Phẩm",      href: ROUTES.products },
  { label: "Chi Nhánh",     href: ROUTES.branches },
  { label: "Đào Tạo",       href: ROUTES.training },
  { label: "Tin Tức",       href: ROUTES.news },
  { label: "Liên Hệ",       href: ROUTES.contact },
];

const SOCIAL_LINKS = [
  { label: "FB", href: BRAND.social.facebook },
  { label: "IG", href: BRAND.social.instagram },
  { label: "YT", href: BRAND.social.youtube },
  { label: "TT", href: BRAND.social.tiktok },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#030303",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      paddingBottom: 80,
      position: "relative",
    }}>
      {/* Top marquee-style divider */}
      <div style={{
        overflow: "hidden",
        padding: "24px 0",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          color: "rgba(255,255,255,0.03)",
          whiteSpace: "nowrap",
          letterSpacing: "0.15em",
          textAlign: "center",
        }}>
          G BARBER SHOP • G BARBER SHOP • G BARBER SHOP •
        </div>
      </div>

      <div className="container" style={{ padding: "48px 1.25rem 32px" }}>
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 32,
              letterSpacing: "0.15em", marginBottom: 4,
              color: "#fff",
            }}>
              G <span style={{ color: "rgba(255,255,255,0.4)" }}>BARBER</span>
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.15)",
              textTransform: "uppercase", marginBottom: 20,
            }}>
              SHOP
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, color: "rgba(255,255,255,0.3)",
              lineHeight: 1.7, marginBottom: 24, maxWidth: 260,
            }}>
              Đẳng cấp trong từng đường kéo. Phong cách nam tính, chuyên nghiệp.
            </p>
            {/* Social row */}
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36,
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "var(--radius-sm, 8px)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10, fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.3)";
                    el.style.color = "#fff";
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.3)";
                    el.style.background = "transparent";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 10, fontWeight: 600, letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 24,
            }}>
              Menu
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, fontWeight: 500,
                    color: "rgba(255,255,255,0.3)",
                    transition: "all 0.25s",
                    display: "inline-block",
                  }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "#fff";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "rgba(255,255,255,0.3)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 10, fontWeight: 600, letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 24,
            }}>
              Liên Hệ
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href={`tel:${BRAND.phone}`} style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 22, color: "#fff",
                letterSpacing: "0.08em",
                transition: "opacity 0.2s",
              }}>
                {BRAND.phoneDisplay}
              </a>
              <a href={`mailto:${BRAND.email}`} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, color: "rgba(255,255,255,0.3)", wordBreak: "break-all",
              }}>
                {BRAND.email}
              </a>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, color: "rgba(255,255,255,0.25)", lineHeight: 1.6,
              }}>
                {BRAND.hours}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, color: "rgba(255,255,255,0.2)",
              }}>
                📍 {BRAND.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          paddingTop: 20,
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "space-between", alignItems: "center",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em",
          }}>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.1)",
          }}>
            Made with ♥ in Sài Gòn
          </p>
        </div>
      </div>
    </footer>
  );
}
