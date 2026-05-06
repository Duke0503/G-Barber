"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { PhoneOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Trang Chủ", href: ROUTES.home },
  { label: "Về Chúng Tôi", href: ROUTES.about },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header" style={{ justifyContent: "space-between" }}>
        {/* Mobile: burger left */}
        <Button
          type="text"
          className="mobile-burger"
          onClick={() => setMenuOpen(true)}
          icon={<MenuOutlined />}
          style={{ fontSize: 18 }}
        />

        {/* Logo — centered on mobile, left on desktop */}
        <Link href="/" className="header-logo-link">
          <img
            src="/assets/logo/logo_g.png"
            alt="G - Barbershop Logo"
            className="header-logo"
          />
          <span className="header-brand-text">
            <span className="header-brand-g">G </span>
            <span className="header-brand-dash"> - </span>
            <span className="header-brand-rest">BARBERSHOP</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ gap: 40, alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <Button
            type="primary"
            icon={<PhoneOutlined />}
            href={`tel:${BRAND.phone}`}
            style={{
              background: "var(--accent)",
              borderRadius: "var(--radius-full)",
              height: 44,
              padding: "0 24px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            {BRAND.phoneDisplay}
          </Button>
        </div>

        {/* Mobile: phone CTA right */}
        <Button
          type="primary"
          shape="circle"
          icon={<PhoneOutlined />}
          href={`tel:${BRAND.phone}`}
          className="mobile-phone-btn"
          style={{
            background: "var(--accent)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            minWidth: 38,
          }}
        />
      </header>

      {/* Mobile menu using Antd Drawer */}
      <Drawer
        title={null}
        placement="left"
        closable={true}
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        closeIcon={<CloseOutlined style={{ fontSize: 24 }} />}
        styles={{
          wrapper: { width: "100%" },
          body: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            padding: "20px",
          },
        }}
      >
        <div className="mobile-menu-logo">
          <img
            src="/assets/logo/logo_g.png"
            alt="G - Barbershop"
            style={{ height: 100, width: "auto" }}
          />
        </div>

        <div className="mobile-menu-links">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
              style={{ animationDelay: `${0.08 + i * 0.08}s` }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          className="mobile-menu-cta"
          style={{ width: "100%", maxWidth: 320 }}
        >
          <Button
            type="primary"
            block
            size="large"
            icon={<PhoneOutlined />}
            href={`tel:${BRAND.phone}`}
            style={{
              background: "var(--accent)",
              height: 48,
              borderRadius: "var(--radius-full)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            {BRAND.phoneDisplay}
          </Button>
        </div>

        {/* Social / hours info */}
        <div className="mobile-menu-info">
          <p>{BRAND.hours}</p>
          <p>{BRAND.address}</p>
        </div>
      </Drawer>

      <style>{`
        /* ─── Mobile header layout ───────────────────────── */
        .header-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
        }
        .header-logo {
          height: 120%;
          width: auto;
          max-width: none;
          transition: transform 0.3s var(--ease);
        }
        .header-brand-text {
          display: none;
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          white-space: nowrap;
          line-height: 1;
        }
        .header-brand-g {
          color: var(--accent);
          font-size: 1.25rem;
          font-weight: 600;
        }
        .header-brand-dash {
          white-space: pre;
          color: var(--text-muted);
        }
        .header-brand-rest {
          color: var(--text-muted);
        }

        .mobile-burger {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          font-size: 18px;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          transition: background 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-burger:active {
          background: rgba(0,0,0,0.05);
        }



        .desktop-nav { display: none; }
        .desktop-cta { display: none; }

        /* ─── Desktop header ─────────────────────────────── */
        @media (min-width: 1024px) {
          .header-logo-link {
            position: static;
            transform: none;
            height: 100%;
          }
          .header-logo {
            height: 130%;
          }
          .header-brand-text {
            display: inline-flex;
            align-items: center;
          }
          .mobile-burger { display: none !important; }
          .mobile-phone-btn { display: none !important; }
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
            align-items: center;
            gap: 20px;
          }
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 14px;
          font-family: var(--font-body);
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .header-phone:hover { color: var(--accent); }

        /* ─── Mobile menu overlay ────────────────────────── */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.25s var(--ease);
        }

        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          padding: 20px;
          width: 100%;
          max-width: 320px;
        }

        .mobile-menu-logo {
          opacity: 0;
          transform: scale(0.9);
          animation: scaleUpFade 0.5s var(--ease) 0.05s forwards;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          opacity: 0;
          transform: translateY(16px);
          animation: slideUpFade 0.5s var(--ease) forwards;
          transition: color 0.2s;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          color: var(--accent);
        }

        .mobile-menu-cta {
          width: 100%;
          opacity: 0;
          transform: translateY(12px);
          animation: slideUpFade 0.5s var(--ease) 0.28s forwards;
        }

        .mobile-menu-info {
          text-align: center;
          opacity: 0;
          animation: slideUpFade 0.5s var(--ease) 0.36s forwards;
        }
        .mobile-menu-info p {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--text-muted);
          line-height: 1.8;
          letter-spacing: 0.04em;
        }

        @keyframes slideUpFade {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUpFade {
          to { opacity: 1; transform: scale(1); }
        }

        /* Hide menu on desktop */
        @media (min-width: 1024px) {
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
