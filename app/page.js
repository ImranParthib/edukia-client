import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { AcademicFeaturesSection } from "@/components/AcademicExcellence/AcademicFeaturesSection";
import { NoticeEventsSection } from "@/components/NoticeEvents/NoticeEventsSection";
import { GallerySection } from "@/components/Gallery/GallerySection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <AcademicFeaturesSection />
      <NoticeEventsSection />
      <GallerySection />
    </main>
  );
}
