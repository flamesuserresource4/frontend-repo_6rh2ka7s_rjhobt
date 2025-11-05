import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-slate-900">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white/90">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 border-4 border-emerald-300 shadow-[4px_4px_0_0_rgba(16,185,129,1)] px-3 py-1 uppercase tracking-widest text-xs md:text-sm font-black">
            <Star className="w-4 h-4" />
            Pixel Art Crypto
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.05] drop-shadow-[3px_3px_0_rgba(0,0,0,0.35)]">
            Trade the markets with a retro twist
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-100/90">
            A clean, playful, and nostalgic trading terminal inspired by 8-bit and 16-bit era design.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-extrabold px-6 py-3 border-4 border-slate-900 shadow-[4px_4px_0_0_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#0f172a] transition-transform uppercase tracking-wider inline-flex items-center gap-2">
              <Rocket className="w-5 h-5" /> Start Trading
            </button>
            <a href="#market" className="bg-white/10 hover:bg-white/20 text-white font-extrabold px-6 py-3 border-4 border-white/60 shadow-[4px_4px_0_0_rgba(255,255,255,0.6)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_rgba(255,255,255,0.6)] transition-transform uppercase tracking-wider">
              View Markets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
