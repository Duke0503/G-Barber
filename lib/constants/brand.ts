import type { BrandConfig } from "@/types";

export const BRAND: BrandConfig = {
  name:         "G - Barber Shop",
  shortName:    "G - BARBER",
  tagline:      "FROM HEART TO HAIR",
  phone:        "0947947168",
  phoneDisplay: "0947 947 168",
  email:        "gbarber.hcm@gmail.com",
  address:      "Dĩ An, Bình Dương & Thủ Đức, TP.HCM",
  hours:        "8:00 – 21:00 | Thứ 2 – Chủ Nhật",
  social: {
    facebook:  "https://facebook.com/gbarbershop",
    instagram: "https://instagram.com/gbarbershop",
    youtube:   "https://youtube.com/@gbarbershop",
    tiktok:    "https://tiktok.com/@gbarbershop",
  },
} as const;
