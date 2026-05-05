"use client";

import Link from "next/link";
import { HomeOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";

const TABS = [
  { icon: <HomeOutlined />, label: "Trang Chủ", href: ROUTES.home },
  { icon: <UserOutlined />, label: "Về Chúng Tôi", href: ROUTES.about },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav-bar" aria-label="Mobile navigation">
      {TABS.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link key={tab.href} href={tab.href} className={`mobile-nav-item ${active ? "active" : ""}`}>
            <span className="mobile-nav-icon">{tab.icon}</span>
            <span className="mobile-nav-label">{tab.label}</span>
            {active && <span className="mobile-nav-indicator" />}
          </Link>
        );
      })}
      <a href={`tel:${BRAND.phone}`} className="mobile-nav-item mobile-nav-call">
        <PhoneOutlined />
      </a>

      <style>{`
        .mobile-nav-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          height: 60px;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 16px;
          padding-bottom: env(safe-area-inset-bottom, 0);
          box-shadow: 0 -2px 16px rgba(26,26,24,0.05);
        }
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 6px 16px;
          border-radius: var(--radius-sm);
          color: var(--text-faint);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: all 0.2s var(--ease);
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          position: relative;
        }
        .mobile-nav-icon {
          font-size: 18px;
          line-height: 1;
        }
        .mobile-nav-label {
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .mobile-nav-indicator {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: var(--accent);
          border-radius: 1px;
        }
        .mobile-nav-item:active {
          transform: scale(0.88);
        }
        .mobile-nav-item.active {
          color: var(--accent);
        }
        .mobile-nav-call {
          background: var(--accent);
          color: #fff !important;
          border-radius: var(--radius-full);
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          box-shadow: 0 4px 12px rgba(201,169,110,0.3);
        }
        .mobile-nav-call .mobile-nav-label,
        .mobile-nav-call .mobile-nav-indicator { display: none; }
        .mobile-nav-call .mobile-nav-icon { font-size: 16px; }
        .mobile-nav-call:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
        }
        .mobile-nav-call:active {
          transform: scale(0.92);
        }
        @media (min-width: 768px) {
          .mobile-nav-bar { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
