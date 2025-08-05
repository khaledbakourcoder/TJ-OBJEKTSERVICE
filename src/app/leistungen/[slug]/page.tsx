import ServicesDetailTemplate from "@/components/Templates/ServicesDetailTemplate";
import services from "@/data/services.data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.path }));
}

export async function generateMetadata({ params }: Props) {
  const service = services.find((s) => s.path === params.slug);

  if (!service) {
    return {
      title: "Nicht gefunden | TJ Objekt Services",
      description: "Diese Seite existiert leider nicht.",
    };
  }

  return {
    title: service.meta?.title || `${service.title} – Flensburg | TJ Objekt Services`,
    description: service.meta?.description || `Erfahren Sie mehr über unseren Service ${service.title}.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const slug = params.slug;
  const service = services.find((s) => s.path === slug);

  if (!service) return notFound();

  return <ServicesDetailTemplate slug={slug} />;
}
