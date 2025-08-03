import { Wrench } from 'lucide-react';
import type { ServiceDataType } from '@/types/services.type';

const HausmeisterData: ServiceDataType = {
  icon: <Wrench className="w-10 h-10 mx-auto text-yellow-500" />,
  title: 'Hausmeisterdienste',
  text: 'Kleine Reparaturen, Objektkontrollen und technischer Service.',
  bg: 'bg-[#fff8e6]',
  button:{
    bg:"bg-yellow-400",
    text_color:"text-[#fff8e6]",
    hover_bg:"hover:bg-yellow-400/80"

  },
  border: 'border-yellow-400',
  Image: { path: "Hausmeister-image.png", alt: "Hausmeisterservice Bild" },
  path: "hausmeister",

  banner: {
    title: "Hausmeisterdienste in Flensburg",
    subtitle: "Technischer Service & Kontrolle für Ihre Immobilie",
    imagePath: "/Hausmeister-image.png",
    overlayColor: "bg-black/50",
  },

  sections: [
    {
      heading: "Zuverlässige Betreuung für Ihre Immobilie",
      content:
        "Unsere Hausmeisterdienste umfassen regelmäßige Objektkontrollen, technische Unterstützung sowie kleinere Reparaturen – alles aus einer Hand und stets zuverlässig.",
    },
    {
      heading: "Kompetenz trifft auf Flexibilität",
      content:
        "Ob Mietshaus, Gewerbeeinheit oder Wohnanlage – wir passen unseren Service an Ihre Anforderungen an. Mit schnellem Einsatz vor Ort sorgen wir für Sicherheit, Sauberkeit und Funktionalität.",
    },
  ],

  service_Overview: [
    {
      title: "Kleinreparaturen & Wartung",
      description:
        "Wir übernehmen kleine Instandsetzungen wie das Wechseln von Leuchtmitteln, Schlössern oder Dichtungen – schnell und unkompliziert.",
    },
    {
      title: "Objektkontrollen & Schließdienste",
      description:
        "Regelmäßige Kontrollgänge und zuverlässige Schließdienste zur Sicherung und Funktionsüberwachung Ihrer Immobilie.",
    },
    {
      title: "Technischer Support",
      description:
        "Unterstützung bei der Bedienung, Überwachung und Koordination von Heizungs-, Lüftungs- und Sicherheitstechnik.",
    },
  ],
};

export default HausmeisterData;
