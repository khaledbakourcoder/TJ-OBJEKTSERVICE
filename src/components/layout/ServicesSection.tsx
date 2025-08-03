
import ServiceCards from '../UI/ServiceCards';


export default function ServiceSection() {
  

  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-10 text-center text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Unsere Leistungen im Überblick
        </h2>

     

       {/* ////////////////////////////////////////////////////////////////////////  */}
        <ServiceCards />
       {/* ////////////////////////////////////////////////////////////////////////  */}

    
      </div>
    </section>
  );
}