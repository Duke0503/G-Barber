/* ─── Home Page Data Types ─────────────────────────────────────────────────── */

export interface HeroData {
  tagline: string;
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  backgroundImage: string;
  stats: StatItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutData {
  tag: string;
  heading: string;
  description: string;
  description2: string;
  image: string;
  stats: StatItem[];
}

export interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesData {
  tag: string;
  heading: string;
  description: string;
  categories: ServiceCategory[];
}

export interface PricingItem {
  service: string;
  price: string;
}

export interface PricingCategory {
  name: string;
  items: PricingItem[];
}

export interface PricingData {
  tag: string;
  heading: string;
  description: string;
  image: string;
  categories: PricingCategory[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface HistoryData {
  tag: string;
  heading: string;
  milestones: Milestone[];
  closing: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface TeamData {
  tag: string;
  heading: string;
  description: string;
  members: TeamMember[];
  testimonials: Testimonial[];
}

export interface GalleryImage {
  src: string;
  label: string;
}

export interface GalleryData {
  tag: string;
  heading: string;
  description: string;
  images: GalleryImage[];
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  image: string;
}

export interface BranchesData {
  tag: string;
  heading: string;
  description: string;
  items: Branch[];
}

export interface CTAData {
  heading: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  backgroundImage: string;
}

export interface HomePageData {
  hero: HeroData;
  about: AboutData;
  services: ServicesData;
  pricing: PricingData;
  history: HistoryData;
  team: TeamData;
  gallery: GalleryData;
  branches: BranchesData;
  cta: CTAData;
}

/* ─── Navigation Types ─────────────────────────────────────────────────────── */

export interface NavItem {
  label: string;
  href: string;
}

/* ─── Brand Types ──────────────────────────────────────────────────────────── */

export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  hours: string;
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}
