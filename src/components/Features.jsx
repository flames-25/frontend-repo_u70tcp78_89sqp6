import React from 'react'
import { motion } from 'framer-motion'
import { FormInput, Bot, CreditCard, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: FormInput,
    title: 'Forms',
    desc: 'Build powerful forms with validation, logic, and database persistence in minutes.'
  },
  {
    icon: Bot,
    title: 'AI Integrations',
    desc: 'Plug in AI agents and workflows to automate onboarding, support, and more.'
  },
  {
    icon: CreditCard,
    title: 'Payments',
    desc: 'Accept one-time and subscription payments with Stripe, out of the box.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Ship with dashboards, funnels, and event tracking to understand users.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">All the building blocks</h2>
          <p className="mt-3 text-slate-400">Everything you need to go from idea to revenue.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-lg backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 ring-1 ring-white/10">
                <f.icon className="h-6 w-6 text-violet-300" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
