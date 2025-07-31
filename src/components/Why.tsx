// src/components/WarumWirSection.tsx

'use client';

import React from 'react';
import { ShieldCheck, MapPin, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturesData from '@/data/features.data';


export default function WarumWirSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 md:px-10 text-center text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Warum TJ Objekt Services?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {FeaturesData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}