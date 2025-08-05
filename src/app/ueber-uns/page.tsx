import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ServiceCards from "@/components/UI/ServiceCards";
import ContactFormCTA from "@/components/layout/ContactFormCTA";
import CheckItem from "@/components/UI/CheckItem";
import AboutUsData from "@/data/aboutUs.data";


export const metadata: Metadata = {
    title: "Über uns – TJ Objekt Services",
    description:
        "Lernen Sie TJ Objekt Services kennen – Ihr zuverlässiger Partner für Gebäudereinigung, Gartenpflege und Hausmeisterdienste in Flensburg und Umgebung.",
};

  
export default function AboutPage() {
    const {banner,benefits_section,contact_action_form_section,services_section_title}=AboutUsData
    return (
        <main className="space-y-16">
            <section className="relative w-full h-72 md:h-96">
                <Image
                    src={banner.image.src}
                    alt={banner.image.alt}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                     {banner.title}
                    </h1>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 space-y-6">
                <h2 className="text-2xl font-semibold">Unser Anspruch</h2>
                <p className="text-gray-700">
                    Als junges, motiviertes Unternehmen stehen wir für Zuverlässigkeit,
                    Qualität und persönliche Betreuung. Unser Ziel ist es, jedes Objekt
                    mit höchster Sorgfalt zu pflegen – sei es durch Gebäudereinigung,
                    Gartenpflege oder technische Dienstleistungen.
                </p>
                <p className="text-gray-700">
                    Dabei setzen wir auf umweltfreundliche Mittel, moderne Geräte und ein
                    engagiertes Team. Unser Service ist flexibel, regional verankert und
                    stets kundenorientiert.
                </p>
            </section>

            <section className="bg-gray-50 py-12 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{benefits_section.title}</h3>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                         {benefits_section.benefits.map(({title,desc},i) => <CheckItem key={i} title={title} description={desc} />)}
                         
                        </ul>
                    </div>
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
                        <Image
                            src="/images/about-team.jpg"
                            alt="Unser Team bei der Arbeit"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="text-center  px-4 py-12">
                <h3 className="text-2xl font-bold mb-4"> {services_section_title}</h3>
                <ServiceCards />

            </section>
         <ContactFormCTA title={contact_action_form_section.title} subtitle={contact_action_form_section.subtitle} />
        </main>
    );
}
