// src/app/leistungen/page.tsx

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

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
    <main className="bg-white text-gray-800 pb-20 px-4 sm:px-6 md:px-10">
      {/* Hero Banner */}
      <div className="w-full relative h-[300px] md:h-[400px] mb-16">
        <Image
          src="/hero-bg-services.png"
          alt="Dienstleistungen Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <p className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg max-w-4xl text-center">
            Für jede Immobilie die passende Lösung – erfahren Sie mehr über unsere professionellen Services.
          </p>
        </div>
      </div>

      {/* Leistungen Section */}
      <section className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Unsere Leistungen</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hausmeisterdienst */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
              <Image
                src="/Hausmeister-image.png"
                alt="Hausmeisterdienst"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Hausmeisterdienste</h2>
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Kleinreparaturen & Wartung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Objektkontrollen & Schließdienste
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Technischer Support
                </li>
              </ul>
            </div>
          </div>

          {/* Gartenpflege */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
              <Image
                src="/gartenpfelege-image.png"
                alt="Gartenpflege"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Gartenpflege</h2>
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Rasen mähen & Unkraut entfernen
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Hecken- & Baumschnitt
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Pflege von Außenanlagen
                </li>
              </ul>
            </div>
          </div>

          {/* Gebäudereinigung */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
              <Image
                src="/gebäudreinigung-image.png"
                alt="Gebäudereinigung"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Gebäudereinigung</h2>
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Treppenhäuser, Büros & Keller
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Glas- & Fensterreinigung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Sonderreinigung
                </li>
              </ul>
            </div>
          </div>
          {/* Winterdienst */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
              <Image
                src="/winterdienst-image.png"
                alt="Winterdienst"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Winterdienst</h2>
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Schneeräumung & Streudienst
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  Glättebeseitigung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  24h Bereitschaft bei Bedarf
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
