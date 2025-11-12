import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    highlight: false,
    features: ['Unlimited drafts', 'Community support', 'Basic templates']
  },
  {
    name: 'Pro',
    monthly: 29,
    yearly: 290,
    highlight: true,
    features: ['Custom domains', 'AI workflows', 'Stripe payments', 'Analytics']
  },
  {
    name: 'Team',
    monthly: 79,
    yearly: 790,
    highlight: false,
    features: ['All Pro features', 'Seats & roles', 'Priority support']
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simple pricing</h2>
          <p className="mt-2 text-slate-400">Switch between monthly and annual billing.</p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 p-1 ring-1 ring-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-2 text-sm ${!annual ? 'bg-white/20' : ''}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-2 text-sm ${annual ? 'bg-white/20' : ''}`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-6 ring-1 ring-white/10 backdrop-blur ${p.highlight ? 'bg-gradient-to-b from-violet-600/20 to-indigo-600/10' : 'bg-white/5'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.highlight && <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-violet-200 ring-1 ring-white/20">Popular</span>}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={annual ? p.yearly : p.monthly}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-extrabold"
                  >
                    ${annual ? p.yearly : p.monthly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-slate-400">/{annual ? 'yr' : 'mo'}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-300" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/20">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
