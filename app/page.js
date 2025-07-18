import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AcademicFeaturesSection } from "@/components/AcademicFeaturesSection";
import { NoticeEventsSection } from "@/components/NoticeEventsSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactCTASection } from "@/components/ContactCTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <AcademicFeaturesSection />
      <NoticeEventsSection />
      <GallerySection />
      <ContactCTASection />
    </main>
  );
}
