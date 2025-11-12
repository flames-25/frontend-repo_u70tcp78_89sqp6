import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Sofia Mendes', role: 'Founder, Orbital', quote: 'We shipped our MVP in a weekend. The animations and polish impress investors.', rating: 5 },
  { name: 'Ethan Cole', role: 'PM, BrightApps', quote: 'The AI workflows save hours weekly. Our team loves building like this.', rating: 5 },
  { name: 'Lena Park', role: 'Maker', quote: 'The landing page templates are gorgeous and responsive out of the box.', rating: 4 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-[#09090e] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Loved by builders</h2>
          <p className="mt-2 text-slate-400">What our users say about the experience.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">
                <span className="font-medium text-white">{t.name}</span> • {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
