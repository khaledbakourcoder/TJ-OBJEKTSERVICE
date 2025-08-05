import HeroSection from "@/components/layout/Hero";
import { IntroTextLeistungen } from "@/components/layout/IntroSection";
import ServiceSection from "@/components/layout/ServicesSection";
import type { Metadata } from "next";
import WaySection from "@/components/layout/WhySection";
import ContactFormCTA from "@/components/layout/ContactFormCTA";

export default function Home() {
  return (
   <main>
    <HeroSection />
    <IntroTextLeistungen />
    <ServiceSection />
    <WaySection />
    <ContactFormCTA subtitle="Nutzen Sie unser Kontaktformular – wir antworten schnell und zuverlässig." title="Bereit für professionelle Unterstützung?"/>
   </main>
  );
}   


export const metadata: Metadata = {
  title: "Startseite – TJ Objekt Services",
  description:
    "Willkommen bei TJ Objekt Services – Ihrem professionellen Hausmeisterservice für Flensburg und Umgebung.",
  keywords: [
    "Hausmeisterservice Flensburg",
    "Reinigung Flensburg",
    "TJ Objekt Services",
    "Winterdienst Flensburg",
    "Immobilienservice Flensburg",
  ],
  openGraph: {
    title: "Startseite – TJ Objekt Services",
    description:
      "Hausmeisterservice, Gebäudereinigung und Gartenpflege – alles aus einer Hand. Jetzt Kontakt aufnehmen!",
    url: "https://tj-objektservice-9dc1.vercel.app/",
    siteName: "TJ Objekt Services",
    images: [
      {
        url: "https://tj-objektservice-9dc1.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo TJ Objekt Services",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
};
