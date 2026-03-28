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
    <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="mobile-nav-item"
            style={{
              color: isActive ? "#fff" : "rgba(255,255,255,0.3)",
              borderTop: isActive ? "2px solid #fff" : "2px solid transparent",
              transition: "all 0.25s",
            }}
          >
            <Icon style={{ fontSize: 20 }} />
            {label}
          </Link>
        );
      })}

      {/* Call button */}
      <a
        href={`tel:${BRAND.phone}`}
        className="mobile-nav-item"
        style={{
          background: "#fff",
          color: "#050505",
          borderRadius: 0,
          fontWeight: 700,
        }}
      >
        <PhoneOutlined style={{ fontSize: 20 }} />
        Gọi Ngay
      </a>
    </nav>
  );
}
