import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const data = [
  { symbol: 'BTC/USDT', price: 67420.12, change: 2.4, volume: '32.4B' },
  { symbol: 'ETH/USDT', price: 3120.55, change: 1.2, volume: '18.2B' },
  { symbol: 'SOL/USDT', price: 168.21, change: -0.8, volume: '3.4B' },
  { symbol: 'DOGE/USDT', price: 0.18, change: 5.1, volume: '1.1B' },
  { symbol: 'AVAX/USDT', price: 39.62, change: 0.5, volume: '870M' },
]

function MarketTable() {
  return (
    <section id="market" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-slate-900 text-slate-100 border-4 border-slate-800 shadow-[6px_6px_0_0_#0f172a]">
        <div className="px-4 py-3 border-b-4 border-slate-800 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-black tracking-wider">Markets</h2>
          <span className="text-xs md:text-sm uppercase tracking-widest text-slate-300">Pixel Mode</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-800/70">
              <tr className="text-left uppercase text-xs tracking-widest">
                <th className="px-4 py-3 border-b-4 border-slate-800">Pair</th>
                <th className="px-4 py-3 border-b-4 border-slate-800">Price</th>
                <th className="px-4 py-3 border-b-4 border-slate-800">24h</th>
                <th className="px-4 py-3 border-b-4 border-slate-800">Volume</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.symbol} className="odd:bg-slate-900 even:bg-slate-900/80">
                  <td className="px-4 py-4 font-bold">{row.symbol}</td>
                  <td className="px-4 py-4 font-mono">${row.price.toLocaleString()}</td>
                  <td className="px-4 py-4 font-bold">
                    <span className={row.change < 0 ? 'text-red-400 inline-flex items-center gap-1' : 'text-emerald-400 inline-flex items-center gap-1'}>
                      {row.change < 0 ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      {row.change}%
                    </span>
                  </td>
                  <td className="px-4 py-4">{row.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default MarketTable
