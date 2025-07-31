// src/components/HeroSection.tsx


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinksData from '@/data/navLinks.data';
export default function HeroSection() {
  return (
    <section className="relative text-white py-20 px-4 sm:px-6 lg:px-32 text-center overflow-hidden">

      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Hero Hintergrund"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#002B45]/60 mix-blend-multiply" />
      </div>


      {/* Inhalt */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Für Menschen, die Qualität spüren wollen – Hausservice mit Verantwortung
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90">
        Wir schaffen Sicherheit, Sauberkeit und Struktur – mit Leidenschaft für jedes Objekt
        </p>

        <Link href={NavLinksData[NavLinksData.length - 1].path}>
          <button className="mt-8 bg-secondary text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-400 transition-all duration-300 ease-in-out">
            Jetzt Kontakt aufnehmen
          </button>

        </Link>
      </div>
    </section>
  );
}
