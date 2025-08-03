import { Leaf } from "lucide-react";
import type { ServiceDataType } from "@/types/services.type";

const GartenpflegeData: ServiceDataType = {
  icon: <Leaf className="w-10 h-10 mx-auto text-green-600" />,
  title: "Gartenpflege",
  text: "Rasen, Hecken, Wege – gepflegte Außenanlagen vom Fach.",
  bg: "bg-[#f3fbe6]",
  button:{
    bg:"bg-green-400",
    text_color:"text-[#f3fbe6]",
    hover_bg:"hover:bg-green-400/80"
  },
  border: "border-green-400",
  Image: { path: "gartenpfelege-image.png", alt: "Gartenpflege Bild" },
  path: "gartenpfelege",

  banner: {
    title: "Gartenpflege in Flensburg",
    subtitle: "Gepflegte Außenanlagen – der erste Eindruck zählt",
    imagePath: "/gartenpfelege-image.png",
    overlayColor: "bg-black/50",
  },

  sections: [
    {
      heading: "Individuelle Gartenpflege für jede Jahreszeit",
      content:
        "Ein gepflegter Garten trägt wesentlich zum Erscheinungsbild Ihrer Immobilie bei. Ob regelmäßiges Rasenmähen oder saisonale Arbeiten – wir kümmern uns darum.",
    },
    {
      heading: "Verlässlicher Service vom Profi",
      content:
        "Unser Team arbeitet mit modernen Geräten, langjähriger Erfahrung und viel Liebe zum Detail. So bleibt Ihre Grünfläche ganzjährig ordentlich und gesund.",
    },
  ],

  service_Overview: [
    {
      title: "Rasen mähen & Unkraut entfernen",
      description:
        "Regelmäßiges Mähen und professionelle Unkrautentfernung sorgen für ein gepflegtes Gesamtbild Ihrer Außenanlagen.",
    },
    {
      title: "Hecken- & Baumschnitt",
      description:
        "Wir schneiden Hecken und Bäume fachgerecht zurück – für ein gesundes Wachstum und ein sauberes Erscheinungsbild.",
    },
    {
      title: "Pflege von Außenanlagen",
      description:
        "Von Laubbeseitigung bis Beetpflege – wir kümmern uns ganzjährig um Ihre Grünflächen, Wege und Pflanzbereiche.",
    },
  ],
};

export default GartenpflegeData;
