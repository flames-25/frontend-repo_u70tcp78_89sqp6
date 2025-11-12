import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'

const seedMessages = [
  { id: 1, name: 'Ava Stone', email: 'ava@example.com', body: 'Can I connect Stripe without code?', time: '2m ago' },
  { id: 2, name: 'Noah Reed', email: 'noah@company.com', body: 'Drafting onboarding flow with AI...', time: '5m ago' },
  { id: 3, name: 'Mia Chen', email: 'mia@startup.io', body: 'Importing users worked perfectly!', time: '9m ago' },
  { id: 4, name: 'Leo Park', email: 'leo@agency.studio', body: 'How do I add a pricing toggle?', time: '12m ago' },
]

function MessageCard({ m }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur ring-1 ring-white/10"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 rounded-md bg-violet-600/20 p-2 ring-1 ring-violet-400/30">
          <Mail className="h-4 w-4 text-violet-300" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">{m.name}</p>
            <span className="text-xs text-slate-400">{m.time}</span>
          </div>
          <p className="text-xs text-slate-400">{m.email}</p>
          <p className="mt-2 text-sm text-slate-200">{m.body}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function LiveDemo() {
  const [messages, setMessages] = useState(seedMessages)

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now()
      const names = ['Riley', 'Jordan', 'Kai', 'Zara', 'Ivy']
      const domains = ['mail.com', 'studio.io', 'company.com', 'dev.xyz']
      const texts = [
        'Just pushed a new feature!',
        'AI agent setup took 30 seconds 🤯',
        'Love the animations on the landing page.',
        'Can we invite collaborators?',
        'Exporting analytics looks slick.'
      ]
      const m = {
        id,
        name: `${names[Math.floor(Math.random()*names.length)]} ${['Lee','Patel','Diaz','Kim'][Math.floor(Math.random()*4)]}`,
        email: `${Math.random().toString(36).slice(2,7)}@${domains[Math.floor(Math.random()*domains.length)]}`,
        body: texts[Math.floor(Math.random()*texts.length)],
        time: 'just now'
      }
      setMessages(prev => [m, ...prev].slice(0, 5))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live" className="relative w-full bg-[#09090e] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Live demo</h2>
          <p className="mt-2 text-slate-400">A realtime inbox showing new activity.</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4">
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <MessageCard key={m.id} m={m} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
