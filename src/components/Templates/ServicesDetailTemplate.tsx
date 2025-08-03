import Image from "next/image";
import { CheckCircle } from "lucide-react";
import ServicesData from "@/data/services.data";
import ServiceCardSection from "../layout/ServiceCardSection.comp";

interface Props {
  slug: string;
}

export default function ServicesDetailTemplate({ slug }: Props) {
  const currentService = ServicesData.find(service => service.path === slug);

  if (!currentService) {
    return <p className="text-center py-20">Service nicht gefunden.</p>;
  }

  return (
    <main className="bg-white text-gray-800 pb-20">
      {/* Hero-Banner */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={currentService.banner.imagePath}
          alt={currentService.Image.alt || currentService.title}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 ${currentService.banner.overlayColor} flex items-center justify-center px-4`}>
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
              {currentService.banner.title}
            </h1>
            {currentService.banner.subtitle && (
              <p className="mt-2 text-lg md:text-xl font-medium drop-shadow-md">
                {currentService.banner.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Zwischenabschnitte */}
      {currentService.sections.map((section, index) => (
        <section key={index} className="max-w-4xl mx-auto px-4 py-12 text-center">
          {section.heading && <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.heading}</h2>}
          <p className="text-gray-700 text-base leading-relaxed md:text-lg md:leading-loose">
            {section.content}
          </p>
        </section>
      ))}

      {/* Leistungsübersicht */}
      <section className={`max-w-3xl mx-auto px-4 py-12 mt-6 rounded-md ${currentService.bg}`}> 
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Unsere Leistungen im Detail:</h3>
        <ul className="list-none space-y-6 text-gray-700 text-base leading-relaxed">
          {currentService.service_Overview.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{point.title}</p>
                <p className="text-sm text-gray-700">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Weitere Leistungen */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <h3 className="text-2xl font-bold mb-6 text-center">Weitere Leistungen</h3>
        <ServiceCardSection parentPath="leistungen" data={ServicesData.filter(s => s.path !== slug)} />
      </section>
    </main>
  );
}