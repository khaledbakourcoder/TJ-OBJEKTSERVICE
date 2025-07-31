import KontaktFormCTA from "@/components/KontaktFormCTA";
import HeroSection from "@/components/Hero";
import WarumWirSection from "@/components/Why";
import { IntroTextLeistungen } from "@/components/IntroSection";
import ServiceSection from "@/components/servicesSection";

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
