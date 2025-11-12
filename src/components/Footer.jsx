import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#09090e] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="text-xl font-bold">flames<span className="text-violet-400">.blue</span></div>
            <p className="mt-2 text-sm text-slate-400">Build modern apps with AI.</p>
          </div>
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-3 flex gap-2">
              <input placeholder="Your email" className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none" />
              <button className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium ring-1 ring-white/20 transition hover:bg-violet-500">Join</button>
            </form>
            <div className="mt-4 flex gap-3 text-slate-400">
              <a href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Flames Blue. All rights reserved.</div>
      </div>
    </footer>
  )
}
