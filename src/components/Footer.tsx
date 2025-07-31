import React from 'react';
import Link from 'next/link';
import NavLinksData from '@/data/navLinks.data';
export default function Footer() {
  return (
    <footer className="bg-[#002B45] text-white py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">TJ Objekt Services</h3>
          <p>Professioneller Hausmeisterservice in Flensburg und Umgebung.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Navigation</h3>
          <ul className="space-y-1">
            {NavLinksData.map((link,i)=>      <li key={i} ><Link href={link.path}>{link.label}</Link></li>)}
           
          </ul>
        </div>

        <div>
          
          <p>Telefon: 0151 23456789</p>
          <p>Flensburg & Umgebung</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} TJ Objekt Services. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
