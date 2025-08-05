// src/components/KontaktFormCTA.tsx


import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import NavLinksData from '@/data/navLinks.data';

type props={
  title:string,
  subtitle:string
}
export default function ContactFormCTA({title,subtitle}:props) {
  return (
    <section className="bg-secondary/20 text-gray-800 py-20 px-4 sm:px-6 md:px-10 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {title}
         
        </h2>
        <p className="text-lg mb-6">
        {subtitle}
    
        </p>
        <Link href={NavLinksData[NavLinksData.length-1].path}>
          <button className="inline-flex items-center gap-2 bg-[#002B45] text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-[#014264] transition duration-300">
            <Mail className="w-5 h-5" /> Zum Kontaktformular
          </button>
        </Link>
      </div>
    </section>
  );
}
