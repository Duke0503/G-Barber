import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { ANT_THEME } from "@/lib/constants/theme";
import { BRAND } from "@/lib/constants/brand";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FabCall from "@/components/ui/FabCall";
import MobileNav from "@/components/ui/MobileNav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} – Cắt Tóc Nam Chuyên Nghiệp TP.HCM`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "G Barber Shop – Cắt tóc nam, nhuộm tóc, uốn xoăn, tattoo hair. 17+ chi nhánh tại TP.HCM. Đặt lịch nhanh, phục vụ tận tâm. Hotline 0523 186 168.",
  keywords: "g barber shop, cắt tóc nam, barber tphcm, nhuộm tóc nam, uốn tóc nam",
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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider theme={ANT_THEME}>
          <Header />
          <main>{children}</main>
          <Footer />
          <FabCall />
          <MobileNav />
        </ConfigProvider>
      </body>
    </html>
  );
}
