import type { Product } from "@/lib/models";

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: "Grooming Tonic",
    slug: "grooming-tonic",
    description: "Dưỡng tóc & da đầu khỏe mạnh. Tóc bóng mượt suốt cả ngày.",
    price: "320.000đ",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    category: "tonic",
  },
  {
    id: 2,
    name: "Pomade Gốc Nước",
    slug: "pomade-goc-nuoc",
    description: "Giữ nếp cả ngày, dễ gội sạch, không nặng tóc.",
    price: "280.000đ",
    tag: "Phổ Biến",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600&q=80",
    category: "pomade",
  },
  {
    id: 3,
    name: "Pomade Gốc Dầu",
    slug: "pomade-goc-dau",
    description: "Bóng cao, giữ nếp cực lâu. Classic barber style.",
    price: "300.000đ",
    tag: "Classic",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    category: "pomade",
  },
  {
    id: 4,
    name: "Clay Wax Matte",
    slug: "clay-wax",
    description: "Tạo kiểu matte tự nhiên, phồng volume, không bóng nhờn.",
    price: "260.000đ",
    tag: "Mới",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    category: "wax",
  },
];
