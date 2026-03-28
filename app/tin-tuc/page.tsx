import type { Metadata } from "next";
import { BRAND } from "@/lib/constants/brand";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "Tin Tức & Xu Hướng Tóc",
  description: `Tin tức, xu hướng tóc mới nhất, tips chăm sóc tóc từ ${BRAND.name}. Cập nhật liên tục.`,
};

export default function NewsPage() {
  return <NewsClient />;
}
