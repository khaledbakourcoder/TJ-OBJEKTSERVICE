import { BoomBox, Leaf, Wrench, Snowflake } from 'lucide-react';

const ServicesData = [
  {
    icon: <BoomBox className="w-10 h-10 mx-auto text-blue-500" />,
    title: 'Gebäudereinigung',
    text: 'Gründliche Reinigung für Treppenhäuser, Büros, Fenster & mehr.',
    desc: 'lormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlorm',
    bg: 'bg-[#e6f4ff]',
    border: 'border-blue-400',
  },
  {
    icon: <Leaf className="w-10 h-10 mx-auto text-green-600" />,
    title: 'Gartenpflege',
    text: 'Rasen, Hecken, Wege – gepflegte Außenanlagen vom Fach.',
    desc: 'lormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlorm',
    bg: 'bg-[#f3fbe6]',
    border: 'border-green-400',
  },
  {
    icon: <Wrench className="w-10 h-10 mx-auto text-yellow-500" />,
    title: 'Hausmeisterdienste',
    text: 'Kleine Reparaturen, Objektkontrollen und technischer Service.',
    desc: 'lormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlorm',
    bg: 'bg-[#fff8e6]',
    border: 'border-yellow-400',
  },
  {
    icon: <Snowflake className="w-10 h-10 mx-auto text-cyan-500" />,
    title: 'Winterdienst',
    text: 'Zuverlässiges Schneeräumen und Streuen für sichere Wege.',
    desc: 'lormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlormlorm',
    bg: 'bg-[#e6faff]',
    border: 'border-cyan-400',
  },
];

export default ServicesData;
