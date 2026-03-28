"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneOutlined, ScissorOutlined, EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";

const NAV_ITEMS = [
  { href: ROUTES.contact,  label: "Đặt Lịch",  icon: CalendarOutlined },
  { href: ROUTES.price,    label: "Bảng Giá",   icon: ScissorOutlined },
  { href: ROUTES.branches, label: "Chi Nhánh",  icon: EnvironmentOutlined },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation" style={{
      position: "fixed", bottom: "16px", left: "16px", right: "16px",
      height: "64px", zIndex: 150,
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      background: "rgba(10,10,10,0.85)",
      backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "32px",
      padding: "4px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
    }}>
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="mobile-nav-item"
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "4px",
              fontFamily: "var(--font-heading)",
              fontSize: "0.55rem", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: isActive ? "#fff" : "rgba(255,255,255,0.3)",
              background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
              borderRadius: "24px",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
          >
            <Icon style={{ fontSize: "20px" }} />
            {label}
          </Link>
        );
      })}

      {/* Call button */}
      <a
        href={`tel:${BRAND.phone}`}
        className="mobile-nav-item"
        style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "4px",
          fontFamily: "var(--font-heading)",
          fontSize: "0.55rem", fontWeight: 700,
          background: "#fff",
          color: "#050505",
          borderRadius: "24px",
          textDecoration: "none",
        }}
      >
        <PhoneOutlined style={{ fontSize: "20px" }} />
        Gọi Ngay
      </a>
    </nav>
  );
}
