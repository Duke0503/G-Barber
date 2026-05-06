import Link from "next/link";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { BRAND } from "@/lib/constants/brand";
import { ROUTES } from "@/lib/constants/routes";

const SOCIAL_LINKS = [
  { label: "Facebook", href: BRAND.social.facebook },
  { label: "Instagram", href: BRAND.social.instagram },
  { label: "YouTube", href: BRAND.social.youtube },
  { label: "TikTok", href: BRAND.social.tiktok },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ padding: "48px var(--container-px) 32px" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span style={{ color: "var(--accent)" }}>G</span>
              <span style={{ color: "#ffffff" }}> - Barbershop</span>
            </div>
            <p className="footer-tagline">
              Đẳng cấp trong từng đường kéo.<br />
              Phong cách nam tính, chuyên nghiệp.
            </p>
            <div className="footer-social">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="footer-social-btn">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="footer-heading">Menu</h4>
            <ul className="footer-links">
              <li><Link href={ROUTES.home}>Trang Chủ</Link></li>
              <li><Link href={ROUTES.about}>Về Chúng Tôi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Liên Hệ</h4>
            <div className="footer-contact">
              <a href={`tel:${BRAND.phone}`} className="footer-phone">
                {BRAND.phoneDisplay}
              </a>
              <a href={`mailto:${BRAND.email}`} className="footer-email">
                {BRAND.email}
              </a>
              <p className="footer-info">
                <ClockCircleOutlined /> {BRAND.hours}
              </p>
              <p className="footer-info">
                <EnvironmentOutlined /> {BRAND.address}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Made with ♥ in Việt Nam</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-dark);
          position: relative;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 36px;
        }
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 36px; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1.5fr; gap: 60px; margin-bottom: 48px; }
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        @media (min-width: 768px) {
          .footer-logo { font-size: 32px; margin-bottom: 16px; }
        }
        .footer-tagline {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.8;
          margin-bottom: 20px;
          max-width: 280px;
        }
        @media (min-width: 768px) {
          .footer-tagline { font-size: 14px; margin-bottom: 24px; }
        }
        .footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-social-btn {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--radius-sm);
          padding: 6px 12px;
          letter-spacing: 0.05em;
          transition: all 0.3s;
        }
        @media (min-width: 768px) {
          .footer-social-btn { font-size: 12px; padding: 8px 14px; }
        }
        .footer-social-btn:hover {
          color: #ffffff;
          border-color: var(--accent);
          background: rgba(185, 28, 28, 0.15);
          transform: translateY(-2px);
        }
        .footer-heading {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 16px;
          font-family: var(--font-body);
        }
        @media (min-width: 768px) {
          .footer-heading { font-size: 11px; margin-bottom: 20px; }
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links li a {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.78);
          transition: color 0.2s;
        }
        @media (min-width: 768px) {
          .footer-links li a { font-size: 14px; }
          .footer-links { gap: 12px; }
        }
        .footer-links li a:hover {
          color: #ffffff;
        }
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        @media (min-width: 768px) {
          .footer-contact { gap: 14px; }
        }
        .footer-phone {
          font-family: var(--font-display);
          font-size: 20px;
          color: #ffffff;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        @media (min-width: 768px) {
          .footer-phone { font-size: 24px; }
        }
        .footer-phone:hover {
          color: var(--accent);
        }
        .footer-email {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
          word-break: break-all;
          transition: color 0.2s;
        }
        @media (min-width: 768px) {
          .footer-email { font-size: 13px; }
        }
        .footer-email:hover {
          color: #ffffff;
        }
        .footer-info {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
        @media (min-width: 768px) {
          .footer-info { font-size: 13px; gap: 8px; }
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: space-between;
            text-align: left;
          }
        }
        .footer-bottom p {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 0.05em;
        }
        @media (min-width: 768px) {
          .footer-bottom p { font-size: 12px; }
        }
      `}</style>
    </footer>
  );
}
