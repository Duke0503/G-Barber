import type { Service } from "@/lib/models";

export const SERVICES_DATA: Service[] = [
  { id: 1,  name: "Cắt tóc thường",              price: "60.000đ",  category: "haircut", icon: "✂️" },
  { id: 2,  name: "Cắt tóc + Gội",               price: "80.000đ",  category: "haircut", icon: "✂️" },
  { id: 3,  name: "Cắt tóc + Gội + Sấy",         price: "100.000đ", category: "haircut", icon: "✂️" },
  { id: 4,  name: "Barber Style",                 price: "120.000đ", category: "haircut", icon: "✂️" },
  { id: 5,  name: "VIP – Master Barber",          price: "200.000đ", category: "haircut", icon: "✂️" },
  { id: 6,  name: "Nhuộm 1 màu",                 price: "200.000đ", category: "color",   icon: "🎨" },
  { id: 7,  name: "Tẩy tóc",                     price: "300.000đ", category: "color",   icon: "🎨" },
  { id: 8,  name: "Tẩy + Nhuộm thời thượng",     price: "600.000đ", category: "color",   icon: "🎨" },
  { id: 9,  name: "Uốn xoăn Hàn Quốc",           price: "350.000đ", category: "perm",    icon: "〰️" },
  { id: 10, name: "Duỗi tóc thẳng",              price: "300.000đ", category: "perm",    icon: "〰️" },
  { id: 11, name: "Tattoo đơn giản",              price: "150.000đ", category: "tattoo",  icon: "✏️" },
  { id: 12, name: "Tattoo nghệ thuật",            price: "400.000đ", category: "tattoo",  icon: "✏️" },
  { id: 13, name: "Cạo râu truyền thống",         price: "50.000đ",  category: "beard",   icon: "🪒" },
  { id: 14, name: "Cạo râu + khăn nóng lạnh",    price: "80.000đ",  category: "beard",   icon: "🪒" },
  { id: 15, name: "Hấp dầu dưỡng tóc",           price: "100.000đ", category: "care",    icon: "💆" },
];
