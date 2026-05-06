import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { BRAND } from "@/lib/constants/brand";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import ScrollToTop from "@/shared/components/ScrollToTop";
import "./globals.css";

const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

const interFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} – Cắt Tóc Nam Chuyên Nghiệp`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "G - Barbershop – Cắt tóc nam chuyên nghiệp tại Dĩ An, Bình Dương & Thủ Đức, TP.HCM. 3 chi nhánh phục vụ tận tâm. Hotline 0523 186 168.",
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
        <link rel="preload" as="image" href="/assets/team/1.jpg" />
      </head>
      <body className={`${oswaldFont.variable} ${interFont.variable}`}>
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
