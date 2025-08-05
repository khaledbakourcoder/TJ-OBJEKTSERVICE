import { BoomBox } from 'lucide-react';
import type { ServiceDataType } from '@/types/services.type';

const GebaeudereinigungData: ServiceDataType = {
  icon: <BoomBox className="w-10 h-10 mx-auto text-blue-700" />,
  title: 'Gebäudereinigung',
  text: 'Gründliche Reinigung für Treppenhäuser, Büros, Fenster & mehr.',
  bg: 'bg-[#e6f4ff]',
  button:{
    bg:"bg-blue-400",
    text_color:"text-[#e6f4ff]",
    hover_bg:"hover:bg-blue-400/80"
  },
  border: 'border-blue-400',
  Image: { path: "gebäudreinigung-image.png", alt: "Gebäudereinigung Bild" },
  path: "gebeaudreinigung",

  banner: {
    title: "Gebäudereinigung in Flensburg",
    subtitle: "Sauberkeit, die Eindruck hinterlässt – innen wie außen",
    imagePath: "/gebäudreinigung-image.png",
    overlayColor: "bg-black/50",
  },
  meta: {
    title: "Gebäudereinigung – Flensburg & Umgebung | TJ Objekt Services",
    description: "Zuverlässige Gebäudereinigung für Treppenhäuser, Büros, Fenster und mehr – professionell & diskret."
  },

  sections: [
    {
      heading: "Umfassende Reinigungslösungen für jede Immobilie",
      content:
        "Unsere Gebäudereinigung deckt sämtliche Bereiche Ihrer Immobilie ab – von stark frequentierten Eingangsbereichen bis zu sensiblen Büroflächen. Wir setzen auf umweltschonende Reinigungsmittel und modernste Technik.",
    },
    {
      heading: "Zuverlässigkeit, Gründlichkeit und Diskretion",
      content:
        "Unsere erfahrenen Reinigungskräfte arbeiten effizient, gründlich und diskret – auf Wunsch auch außerhalb Ihrer Geschäftszeiten. So bleibt Ihr Arbeitsalltag ungestört und Ihr Objekt stets in bestem Zustand.",
    },
  ],

  service_Overview: [
    {
      title: "Treppenhäuser, Büros & Keller",
      description:
        "Wir reinigen alle gemeinschaftlich genutzten Flächen – von Treppenhäusern über Keller bis hin zu Büroräumen – hygienisch, gründlich und regelmäßig.",
    },
    {
      title: "Glas- & Fensterreinigung",
      description:
        "Streifenfreie Reinigung von Glas- und Fensterflächen – auch in großen Höhen oder schwer zugänglichen Bereichen.",
    },
    {
      title: "Sonderreinigung",
      description:
        "Reinigungsdienste nach Umbauten, Renovierungen oder Mieterwechsel – inklusive Grund- und Bauendreinigung.",
    },
  ],
  callAction: {
    first: "Jetzt kostenloses Reinigungsangebot erhalten",
    second: {
      title: "Glänzende Räume. Zufriedene Kunden.",
      subtitle: "Fordern Sie jetzt Ihr unverbindliches Angebot an und überzeugen Sie sich von unserer makellosen Reinigung.",
    }
  }
  
  
};

export default GebaeudereinigungData;
