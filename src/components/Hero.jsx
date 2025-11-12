import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0b0b12] to-[#0a0a0f] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25),rgba(59,130,246,0.15)_50%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0f]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          <motion.span
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="bg-gradient-to-r from-violet-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            What will you build today?
          </motion.span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-300 sm:text-xl"
        >
          Build, deploy & monetize your app by chatting with AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a href="#pricing" className="group relative inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 opacity-70 blur-md transition-opacity group-hover:opacity-100" aria-hidden />
            <span className="relative z-10 rounded-full bg-white/10 px-7 py-3 ring-1 ring-white/20 backdrop-blur">
              Start Building Now
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-2 text-slate-400"
        >
          <div className="h-5 w-3 rounded-full border border-slate-600/60 p-0.5">
            <motion.div className="h-2 w-full rounded-full bg-slate-400" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
          <span className="text-sm">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
