'use client';

import Link from 'next/link';

type NavItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export default function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group block py-1 transition-colors duration-300 text-white hover:text-secondary"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
