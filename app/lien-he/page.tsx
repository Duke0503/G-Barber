import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Liên Hệ & Đặt Lịch",
  description: `Đặt lịch cắt tóc tại ${BRAND.name}. Hotline ${BRAND.phoneDisplay}. Phục vụ 8:00–21:00 mỗi ngày.`,
};

export default function ContactPage() {
  return <ContactClient />;
}
