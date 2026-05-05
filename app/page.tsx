import HeroSection from "@/features/home/components/HeroSection";
import AboutSection from "@/features/home/components/AboutSection";
import ServicesSection from "@/features/home/components/ServicesSection";
import TeamSection from "@/features/home/components/TeamSection";
import GallerySection from "@/features/home/components/GallerySection";
import BranchesSection from "@/features/home/components/BranchesSection";
import PricingSection from "@/features/home/components/PricingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TeamSection />
      <GallerySection />
      <BranchesSection />
    </>
  );
}
