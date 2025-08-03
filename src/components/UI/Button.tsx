import Link from "next/link";

type Props = {
  path: string;
  children: string;
  className?: string;
};

export default function Button({ path, children, className }: Props) {
  return (
    <div className="mt-4 w-full flex justify-start sm:justify-center">
      <Link
        href={path}
        className={`font-extrabold w-full sm:w-auto px-4 py-2 rounded-md transition text-center block cursor-pointer ${className}`}
      >
        {children}
      </Link>
    </div>
  );
}
