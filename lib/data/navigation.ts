import type { NavItem } from "@/lib/models";
import { ROUTES } from "@/lib/constants/routes";

export const NAV_DATA: NavItem[] = [
  { label: "Trang Chủ",   href: ROUTES.home },
  {
    label: "Về Chúng Tôi", href: ROUTES.about,
    children: [
      { label: "Người Sáng Lập",      href: ROUTES.founders },
      { label: "Câu Chuyện Thương Hiệu", href: ROUTES.about },
    ],
  },
  { label: "Bảng Giá",   href: ROUTES.price },
  { label: "Sản Phẩm",   href: ROUTES.products },
  { label: "Chi Nhánh",  href: ROUTES.branches },
  {
    label: "Tin Tức",     href: ROUTES.news,
    children: [
      { label: "Kiểu Tóc",     href: `${ROUTES.news}/kieu-toc` },
      { label: "Chăm Sóc Tóc", href: `${ROUTES.news}/cham-soc-toc` },
      { label: "Video",        href: `${ROUTES.news}/video` },
    ],
  },
  { label: "Đào Tạo",    href: ROUTES.training },
  { label: "Liên Hệ",   href: ROUTES.contact },
];
