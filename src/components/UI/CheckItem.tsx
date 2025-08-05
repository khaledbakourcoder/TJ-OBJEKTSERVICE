import { CheckCircle } from "lucide-react";

type props= {
    title:string,
    description:string
}
export default function CheckItem({title,description}:props) {
    return <li  className="flex items-start gap-3">
        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
        <div>
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
    </li>
}