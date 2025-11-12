import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'

const items = [
  { q: 'Can I build without coding experience?', a: 'Yes. Our visual builder and AI guidance help you ship without writing code.' },
  { q: 'How do payments work?', a: 'Connect Stripe to accept subscriptions and one-off charges securely.' },
  { q: 'Is there a free plan?', a: 'Yes, the Starter plan lets you explore with generous limits.' },
  { q: 'Can I deploy to my domain?', a: 'Absolutely. Set custom domains on Pro and Team.' },
  { q: 'Do you offer analytics?', a: 'Built-in dashboards show usage, conversions, and events out of the box.' },
  { q: 'Can I integrate AI agents?', a: 'Yes, plug-in AI workflows to power onboarding, support, and automations.' },
]

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button onClick={onToggle} className="flex w-full items-center justify-between px-4 py-3 text-left">
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-4"
          >
            <div className="pb-4 text-slate-300">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState(0)
  const filtered = useMemo(() => items.filter(i => i.q.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <section id="faq" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-2 text-slate-400">Got more questions? We’re here to help.</p>
        </div>

        <div className="mx-auto mb-6 flex max-w-xl items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
          <Search className="h-4 w-4 text-slate-300" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs"
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((i, idx) => (
            <AccordionItem
              key={i.q}
              q={i.q}
              a={i.a}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
