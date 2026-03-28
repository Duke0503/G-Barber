// ─── Domain Models ──────────────────────────────────────────────────────────

export interface Branch {
  id: number;
  district: string;
  address: string;
  phone: string;
  hours: string;
}

export interface Service {
  id: number;
  name: string;
  price: string;
  category: ServiceCategory;
  icon: string;
}

export type ServiceCategory =
  | "haircut"
  | "color"
  | "perm"
  | "tattoo"
  | "beard"
  | "care";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  tag: string;
  image: string;
  category: ProductCategory;
}

export type ProductCategory = "pomade" | "wax" | "tonic" | "beard";

export interface NavItem {
  label: string;
  href: string;
  children?: Pick<NavItem, "label" | "href">[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface VideoItem {
  youtubeId: string;
  title: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
