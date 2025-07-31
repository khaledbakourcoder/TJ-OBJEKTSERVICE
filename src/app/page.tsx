import KontaktFormCTA from "@/components/KontaktFormCTA";
import HeroSection from "@/components/Hero";
import ServiceSection from "@/components/ServicesSection";
import WarumWirSection from "@/components/Why";
import { IntroTextLeistungen } from "@/components/IntroSection";

export default function Home() {
  return (
   <main>
    <HeroSection />
    <IntroTextLeistungen />

    <ServiceSection />
    <WarumWirSection />
    <KontaktFormCTA />
   </main>
  );
}   
