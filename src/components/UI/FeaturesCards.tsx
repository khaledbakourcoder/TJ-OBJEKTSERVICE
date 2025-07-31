"use client"
import { motion } from 'framer-motion';
import FeaturesData from '@/data/features.data';
export default function FeaturesCards(){

    return(
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
      </div>)
}