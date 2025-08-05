import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  path: string,
  children: string,
  icon?: ReactNode,
  className?: string,
};
export default function Button({ path, children, className, icon: Icon }: Props) {
  return (
    <div className="mt-4 w-full flex justify-start sm:justify-center">
      <Link
        href={path}
        className={`flex gap-4 justify-center items-center font-extrabold w-full sm:w-auto px-4 py-2 rounded-md transition text-center  cursor-pointer ${className}`}
      >
        {children}
        
         <span className="text-white ">{Icon && Icon}</span> 

      </Link>
    </div>
  );
}
