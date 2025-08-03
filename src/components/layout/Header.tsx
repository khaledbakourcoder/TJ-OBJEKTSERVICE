'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLinksData from '@/data/navLinks.data';
import NavItem from '../UI/NavItem';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md z-50 relative">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="TJ Objekt Services Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-24 h-auto md:w-32"
          />

        </Link>


        {/* Desktop Menü */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">


          {NavLinksData.map((link, i) => (
            <li key={i}>
              <NavItem href={link.path} label={link.label} />
            </li>
          ))}


        </ul>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menü (Overlay + Slide-In) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 w-3/4 h-full bg-[#002B45] p-6 flex flex-col space-y-6 text-lg font-medium"
              onClick={(e) => e.stopPropagation()} // verhindert, dass Klick auf Menü es schließt
            >
              {NavLinksData.map((link, i) => (
                <li key={i}>
                  <NavItem href={link.path} label={link.label} />
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
