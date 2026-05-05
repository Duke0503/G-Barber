"use client";

import { useEffect, useState } from "react";
import { UpOutlined } from "@ant-design/icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`scroll-top-btn ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Cuộn lên đầu trang"
    >
      <UpOutlined />
      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 80;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 16px rgba(201,169,110,0.35);
          opacity: 0;
          transform: translateY(16px) scale(0.9);
          pointer-events: none;
          transition: all 0.4s var(--ease);
        }
        .scroll-top-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .scroll-top-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 24px rgba(201,169,110,0.45);
        }
        @media (min-width: 768px) {
          .scroll-top-btn { bottom: 32px; right: 32px; }
        }
      `}</style>
    </button>
  );
}
