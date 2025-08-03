"use client"
import ServicesData from "@/data/services.data"
import { motion } from 'framer-motion';
import Button from "./Button";

export default function ServiceCards() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {ServicesData.map((item, i) => (
        <motion.div
          key={i}
          className={`${item.bg} p-6 rounded-xl shadow hover:shadow-md transition border-t-4 ${item.border}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.text}</p>
          <Button
            className={`${item.button.bg} ${item.button.text_color} ${item.button.hover_bg}`}
            path={`/leistungen/${item.path}`} >
            Jetzt mehr erfahren
          </Button>
        </motion.div>
      ))}
    </div>

  )
}