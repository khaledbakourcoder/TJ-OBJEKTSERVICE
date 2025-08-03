import { BoomBox } from 'lucide-react';
import type { ServiceDataType } from '@/types/services.type';

const GebaeudereinigungData: ServiceDataType = {
  icon: <BoomBox className="w-10 h-10 mx-auto text-blue-500" />,
  title: 'Gebäudereinigung',
  text: 'Gründliche Reinigung für Treppenhäuser, Büros, Fenster & mehr.',
  bg: 'bg-[#e6f4ff]',
  border: 'border-blue-400',
  Image: { path: "gebäudreinigung-image.png", alt: "Gebäudereinigung Bild" },
  path: "gebeaudreinigung",

  banner: {
    title: "Gebäudereinigung in Flensburg",
    subtitle: "Sauberkeit, die Eindruck hinterlässt – innen wie außen",
    imagePath: "/gebäudreinigung-image.png",
    overlayColor: "bg-black/50",
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
};

export default GebaeudereinigungData;
