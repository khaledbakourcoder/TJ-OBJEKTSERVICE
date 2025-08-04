import ServicesDetailTemplate from "@/components/Templates/ServicesDetailTemplate";
import services from "@/data/services.data";
import { notFound } from "next/navigation";

// ⛔ KEIN async hier!
export const dynamic = "force-static"; // oder "force-dynamic" zum Testen

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.path,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.path === params.slug);

  if (!service) {
    return { title: "Nicht gefunden" };
  }

  return {
    title: `${service.title} – Flensburg | TJ Objekt Services`,
    description: `Mehr über unseren Service ${service.title} erfahren.`,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const service = services.find((s) => s.path === slug);

  if (!service) return notFound();

  return <ServicesDetailTemplate slug={slug} />;
}
