import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import ScrollToTop from "@/shared/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} – Cắt Tóc Nam Chuyên Nghiệp`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "G - Barber Shop – Cắt tóc nam chuyên nghiệp tại Dĩ An, Bình Dương & Thủ Đức, TP.HCM. 3 chi nhánh phục vụ tận tâm. Hotline 0523 186 168.",
  keywords: "g barber shop, cắt tóc nam, barber bình dương, barber thủ đức, nhuộm tóc nam, uốn tóc nam",
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    locale: "vi_VN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
