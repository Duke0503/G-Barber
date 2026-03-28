"use client";
import { useState } from "react";
import { Form, Input } from "antd";
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { BRAND } from "@/lib/constants/brand";

const { TextArea } = Input;

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "clamp(3rem, 8vw, 6rem) 0", textAlign: "center" }}>
        <div className="container">
          <span className="t-label gold">Liên Hệ</span>
          <div className="gold-line" style={{ margin: "12px auto 20px" }} />
          <h1 className="t-h1">Đặt Lịch Ngay</h1>
          <p className="t-body text-muted" style={{ maxWidth: 480, margin: "16px auto 0" }}>
            Điền form bên dưới hoặc gọi trực tiếp. Chúng tôi sẽ xác nhận lịch trong vòng 15 phút.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "start",
        }}>
          {/* Contact info */}
          <div>
            <span className="t-label gold">Thông Tin</span>
            <div className="gold-line" style={{ margin: "12px 0 24px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 40, height: 40, background: "#D4AF37",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <PhoneOutlined style={{ color: "#000", fontSize: 16 }} />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>
                    Hotline
                  </p>
                  <a href={`tel:${BRAND.phone}`} style={{ fontSize: 18, fontWeight: 900, color: "#D4AF37" }}>
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 40, height: 40, background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <ClockCircleOutlined style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }} />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>
                    Giờ Mở Cửa
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{BRAND.hours}</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 40, height: 40, background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <EnvironmentOutlined style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }} />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>
                    Khu Vực
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>17+ Chi Nhánh – TP.HCM</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div style={{ marginTop: 32 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 12 }}>
                Mạng Xã Hội
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { label: "FB", href: BRAND.social.facebook },
                  { label: "IG", href: BRAND.social.instagram },
                  { label: "YT", href: BRAND.social.youtube },
                  { label: "TK", href: BRAND.social.tiktok },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 36, height: 36,
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div>
            <span className="t-label gold">Đặt Lịch</span>
            <div className="gold-line" style={{ margin: "12px 0 24px" }} />

            {submitted ? (
              <div style={{
                padding: "clamp(2rem, 5vw, 3rem)",
                background: "#111",
                border: "1px solid rgba(212,175,55,0.3)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Đã nhận lịch!</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                  Chúng tôi sẽ gọi xác nhận trong vòng 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Họ Tên *
                  </label>
                  <input
                    required
                    placeholder="Nguyễn Văn A"
                    style={{
                      width: "100%", background: "#161616",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", padding: "10px 14px", fontSize: 13,
                      outline: "none", fontFamily: "inherit",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Số Điện Thoại *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="0900 000 000"
                    style={{
                      width: "100%", background: "#161616",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", padding: "10px 14px", fontSize: 13,
                      outline: "none", fontFamily: "inherit",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Dịch Vụ
                  </label>
                  <input
                    placeholder="Cắt tóc, nhuộm, uốn..."
                    style={{
                      width: "100%", background: "#161616",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", padding: "10px 14px", fontSize: 13,
                      outline: "none", fontFamily: "inherit",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                    Ghi Chú
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Chi nhánh mong muốn, thời gian..."
                    style={{
                      width: "100%", background: "#161616",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", padding: "10px 14px", fontSize: 13,
                      outline: "none", fontFamily: "inherit", resize: "vertical",
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-gold btn-lg" style={{ marginTop: 4 }}>
                  Xác Nhận Đặt Lịch
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
