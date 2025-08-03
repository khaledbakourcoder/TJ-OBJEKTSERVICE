import { Snowflake } from 'lucide-react';
import type { ServiceDataType } from '@/types/services.type';

const WinterdienstData: ServiceDataType = {
    icon: <Snowflake className="w-10 h-10 mx-auto text-cyan-500" />,
    title: 'Winterdienst',
    text: 'Zuverlässiges Schneeräumen und Streuen für sichere Wege.',
    bg: 'bg-[#e6faff]',
    button: {
        bg: "bg-cyan-400",
        text_color: "text-[#e6faff]",
        hover_bg: "hover:bg-cyan-400/80"

    },
    border: 'border-cyan-400',
    Image: { path: "winterdienst-image.png", alt: "Winterdienst Bild" },
    path: "winterdienst",

    banner: {
        title: "Winterdienst in Flensburg",
        subtitle: "Sicher durch den Winter – rund um die Uhr",
        imagePath: "/winterdienst-image.png",
        overlayColor: "bg-black/50",
    },

    sections: [
        {
            heading: "Schnell & zuverlässig bei Schnee und Eis",
            content:
                "Unsere Einsatzkräfte stehen bereit, um Straßen, Gehwege und Zufahrten rechtzeitig und gründlich von Schnee und Glätte zu befreien.",
        },
        {
            heading: "Rundum-Betreuung in der kalten Jahreszeit",
            content:
                "Mit unserer 24h-Bereitschaft und modernen Räumfahrzeugen sorgen wir dafür, dass Ihre Flächen auch bei Schnee und Eis sicher begeh- und befahrbar bleiben.",
        },
    ],

    service_Overview: [
        {
            title: "Schneeräumung & Streudienst",
            description:
                "Zügiges Räumen von Gehwegen, Zufahrten und Parkplätzen inklusive Streuung mit Sand oder Salz für maximale Sicherheit.",
        },
        {
            title: "Glättebeseitigung",
            description:
                "Proaktive Maßnahmen gegen Glätte – wir streuen rechtzeitig und kontrollieren gefährliche Stellen regelmäßig.",
        },
        {
            title: "24h Bereitschaft bei Bedarf",
            description:
                "Unser Team steht im Winter rund um die Uhr bereit – auch bei Nacht oder am Wochenende – damit Ihre Immobilie sicher bleibt.",
        },
    ],
};

export default WinterdienstData;
