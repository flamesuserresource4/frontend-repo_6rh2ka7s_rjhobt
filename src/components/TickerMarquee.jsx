import React from 'react'

const items = [
  { s: 'BTC', p: '67,420', ch: '+2.4%' },
  { s: 'ETH', p: '3,120', ch: '+1.2%' },
  { s: 'SOL', p: '168.2', ch: '-0.8%' },
  { s: 'AVAX', p: '39.6', ch: '+0.5%' },
  { s: 'DOGE', p: '0.18', ch: '+5.1%' },
  { s: 'ARB', p: '1.32', ch: '+0.3%' },
]

function TickerMarquee() {
  return (
    <div className="w-full bg-slate-900 text-slate-100 border-y-4 border-slate-900">
      {/* Using <marquee> for a lightweight retro ticker effect */}
      <marquee behavior="scroll" direction="left" scrollamount="6" className="py-2">
        <div className="flex items-center gap-8">
          {items.concat(items).map((it, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-slate-800 px-3 py-1 border-4 border-slate-700 shadow-[3px_3px_0_0_#0f172a]"
            >
              <span className="font-black tracking-widest text-emerald-300">{it.s}</span>
              <span className="font-mono">${it.p}</span>
              <span className={it.ch.startsWith('-') ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>{it.ch}</span>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  )
}

export default TickerMarquee
