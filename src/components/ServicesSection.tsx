"use client"
import { BoomBox, Leaf, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicesData from '@/data/services.data';
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function ServiceSection() {
  

  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-10 text-center text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Unsere Leistungen im Überblick
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ServicesData.map((item, i) => (
            <motion.div
              key={i}
              className={`${item.bg} p-6 rounded-xl shadow hover:shadow-md transition border-t-4 ${item.border}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}