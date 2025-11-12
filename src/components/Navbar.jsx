import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0f]/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-white">flames<span className="text-violet-400">.blue</span></a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#live" className="hover:text-white">Live</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="#pricing" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition hover:bg-white/20">Get started</a>
      </div>
    </header>
  )
}
