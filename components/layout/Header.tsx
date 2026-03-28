"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined, PhoneOutlined } from "@ant-design/icons";
import { NAV_DATA } from "@/lib/data/navigation";
import { BRAND } from "@/lib/constants/brand";

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      lastY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Logo = () => (
    <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: 1 }}>
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 24,
        color: "#fff", letterSpacing: "0.15em",
      }}>
        G <span style={{ color: "rgba(255,255,255,0.5)" }}>BARBER</span>
      </span>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 8, fontWeight: 500,
        letterSpacing: "0.35em",
        color: "rgba(255,255,255,0.2)",
        textTransform: "uppercase",
      }}>
        SHOP
      </span>
    </Link>
  );

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}
        style={{ justifyContent: "space-between" }}>

        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: 32, alignItems: "center" }}>
          {NAV_DATA.map((item) =>
            item.children ? (
              <div key={item.label} className="dropdown">
                <span className="nav-link" style={{ cursor: "pointer" }}>
                  {item.label} <span style={{ fontSize: 9, opacity: 0.4, marginLeft: 2 }}>▾</span>
                </span>
                <div className="dropdown-menu">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}>{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: 16 }}>
          <a href={`tel:${BRAND.phone}`} style={{
            display: "flex", alignItems: "center", gap: 6,
            color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: 13,
            fontFamily: "'Space Grotesk', sans-serif",
            transition: "color 0.2s",
          }}>
            <PhoneOutlined /> {BRAND.phoneDisplay}
          </a>
          <Link href="/lien-he" className="btn btn-primary btn-sm">
            Đặt Lịch
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden"
          onClick={() => setDrawerOpen(true)}
          style={{
            background: "none", border: "none",
            color: "#fff", cursor: "pointer",
            padding: 8, fontSize: 20,
            display: "flex", alignItems: "center",
          }}
          aria-label="Menu"
        >
          <MenuOutlined />
        </button>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        styles={{
          body: { padding: 0 },
          header: { display: "none" },
          wrapper: { width: "85vw" },
        }}
        style={{ background: "#0c0c0c" }}
      >
        {/* Drawer header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 22, color: "#fff", letterSpacing: "0.15em",
          }}>
            G <span style={{ color: "rgba(255,255,255,0.5)" }}>BARBER</span>
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            style={{
              background: "none", border: "none",
              color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 20,
            }}
          >
            <CloseOutlined />
          </button>
        </div>

        {/* Nav items */}
        <nav style={{ padding: "12px 0" }}>
          {NAV_DATA.map((item) => (
            <div key={item.label}>
              <div
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (item.children) {
                    setExpandedKey(expandedKey === item.label ? null : item.label);
                  } else {
                    setDrawerOpen(false);
                  }
                }}
              >
                {item.children ? (
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14, fontWeight: 600,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      color: "#fff", flex: 1,
                    }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14, fontWeight: 600,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      color: "#fff", flex: 1,
                    }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>
                    {expandedKey === item.label ? "−" : "+"}
                  </span>
                )}
              </div>

              {item.children && expandedKey === item.label && (
                <div style={{ background: "rgba(0,0,0,0.3)" }}>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}
                      style={{
                        display: "block", padding: "12px 24px 12px 40px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12, fontWeight: 500, letterSpacing: "0.06em",
                        color: "rgba(255,255,255,0.4)", textTransform: "uppercase",
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                        transition: "color 0.2s",
                      }}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer footer */}
        <div style={{ padding: "24px", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "auto" }}>
          <a href={`tel:${BRAND.phone}`} className="btn btn-primary"
            style={{ width: "100%", marginBottom: 10, justifyContent: "center" }}>
            <PhoneOutlined /> {BRAND.phoneDisplay}
          </a>
          <Link href="/lien-he" className="btn btn-outline"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setDrawerOpen(false)}>
            Đặt Lịch Ngay
          </Link>
        </div>
      </Drawer>
    </>
  );
}
