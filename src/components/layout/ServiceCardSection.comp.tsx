
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import Link from "next/link";
import type { ServiceDataType } from "@/types/services.type";
import Button from "../UI/Button";

type props = {
    data: ServiceDataType[]
    parentPath: string
}


export default function ServiceCardSection({ data, parentPath }: props) {

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
                    <Button
                        className={`${service.button.bg} ${service.button.text_color} ${service.button.hover_bg}`}
                        path={`/${[parentPath, service.path].filter(Boolean).join("/")}`}
                        >
                        Jetzt mehr erfahren
                    </Button>
                    
                </div>
            </div>
        )}
    </div>


}