// src/app/leistungen/page.tsx

import React from "react";
import Image from "next/image";
import ServicesData from "@/data/services.data";
import ServiceCardSection from "@/components/layout/ServiceCardSection.comp";

export const metadata = {
    title: "Leistungen – Gebäudeservice Flensburg | TJ Objekt Services",
    description:
        "Von Gebäudereinigung über Gartenpflege bis hin zum Winterdienst – unsere Leistungen im Überblick. Ihr starker Partner in Flensburg und Umgebung.",
    keywords: [
        "Hausmeisterservice",
        "Gebäudereinigung",
        "Gartenpflege",
        "Winterdienst",
        "Leistungen TJ Objekt Services",
        "Objektbetreuung Flensburg",
    ],
    openGraph: {
        title: "Leistungen – Gebäudeservice Flensburg | TJ Objekt Services",
        description:
            "Informieren Sie sich über unsere professionellen Dienstleistungen in den Bereichen Gebäudereinigung, Gartenpflege und Winterdienst.",
        url: "https://tj-objektservice-9dc1.vercel.app/leistungen",
        siteName: "TJ Objekt Services",
        images: [
            {
                url: "https://tj-objektservice-9dc1.vercel.app/logo.png",
                width: 1200,
                height: 630,
                alt: "TJ Objekt Services Logo",
            },
        ],
        locale: "de_DE",
        type: "website",
    },
};

export default function LeistungenPage() {
    return (
        <main className="bg-white text-gray-800 pb-20  sm:px-6 md:px-10">
            {/* Hero Banner */}
            <div className="w-full relative h-[300px] md:h-[400px] mb-16">
                <Image
                    src="/hero-bg-services.png"
                    alt="Dienstleistungen Banner"
                    fill
                    className="object-cover object-center w-full"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                    <p className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg max-w-4xl text-center">
                        Für jede Immobilie die passende Lösung – erfahren Sie mehr über unsere professionellen Services
                    </p>
                </div>
            </div>

            {/* Leistungen Section */}
            <section className="max-w-6xl mx-auto space-y-16 p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Unsere Leistungen</h1>
                </div>
                <ServiceCardSection parentPath="leistungen" data={ServicesData}/>
            </section>
        </main>
    );
}
