
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import Link from "next/link";
import type { ServiceDataType } from "@/types/services.type";

type props = {
    data: ServiceDataType[]
}


export default function ServiceCardSection({ data }: props) {


    return <div className="grid md:grid-cols-2 gap-12">


        {data.map((service, i) =>
            <div key={i} className={`flex flex-col gap-4 ${service.border} ${service.bg} p-5 border-2 rounded `}>
                <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
                    <Image
                        src={`/${service.Image.path}`}
                        alt={service.Image.alt}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2"> {service.title} </h2>
                    <ul className="list-none space-y-1 text-sm text-gray-700">
                        {service.service_Overview.map((s_o, e) =>
                            <li key={e} className="flex items-start gap-2">
                                <CheckCircle className="text-green-500" size={18} />
                                {s_o.title}
                            </li>
                        )}
                    </ul>

                    <div className="mt-4 w-full flex justify-start sm:justify-center">
                        <Link
                            href={`leistungen/${service.path}`}
                            className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md transition hover:bg-primary/90 text-center block"
                        >
                            Jetzt mehr erfahren
                        </Link>
                    </div>
                </div>
            </div>
        )}
    </div>


}