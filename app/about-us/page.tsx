import type { Metadata } from "next";
import AboutPageClient from "@/features/about/components/AboutPageClient";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description: "Hành trình phát triển của G - Barber Shop từ chi nhánh đầu tiên năm 2021 đến hệ thống 3 chi nhánh tại Bình Dương & TP.HCM.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
