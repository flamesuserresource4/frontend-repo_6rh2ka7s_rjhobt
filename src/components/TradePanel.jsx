import React, { useMemo, useState } from 'react'

const prices = {
  BTC: 67420,
  ETH: 3120,
  SOL: 168.2,
  DOGE: 0.18,
}

function TradePanel() {
  const [side, setSide] = useState('BUY')
  const [symbol, setSymbol] = useState('BTC')
  const [amount, setAmount] = useState('0')

  const price = prices[symbol]
  const total = useMemo(() => {
    const amt = parseFloat(amount || '0')
    return isNaN(amt) ? 0 : amt * price
  }, [amount, price])

  const handleQuick = (pct) => {
    const walletUsdt = 10000 // demo wallet value for UI
    const usdtToUse = (walletUsdt * pct) / 100
    const computedAmount = usdtToUse / price
    setAmount(computedAmount.toFixed(6))
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 text-slate-100 border-4 border-slate-800 shadow-[6px_6px_0_0_#0f172a]">
          <div className="px-4 py-3 border-b-4 border-slate-800 flex items-center gap-3">
            <button
              onClick={() => setSide('BUY')}
              className={`px-4 py-2 font-black uppercase tracking-widest border-4 shadow-[4px_4px_0_0_#0f172a] ${
                side === 'BUY' ? 'bg-emerald-400 text-slate-900 border-slate-900' : 'bg-slate-800 border-slate-700 text-slate-200'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setSide('SELL')}
              className={`px-4 py-2 font-black uppercase tracking-widest border-4 shadow-[4px_4px_0_0_#0f172a] ${
                side === 'SELL' ? 'bg-rose-400 text-slate-900 border-slate-900' : 'bg-slate-800 border-slate-700 text-slate-200'
              }`}
            >
              Sell
            </button>
            <div className="ml-auto text-xs uppercase tracking-widest text-slate-300">Demo Mode</div>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-1">Pair</label>
              <select
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="w-full bg-slate-800 border-4 border-slate-700 px-3 py-2 font-bold focus:outline-none"
              >
                {Object.keys(prices).map((s) => (
                  <option key={s} value={s}>{s}/USDT</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-1">Price (USDT)</label>
              <input
                type="number"
                value={price}
                readOnly
                className="w-full bg-slate-800 border-4 border-slate-700 px-3 py-2 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-1">Amount ({symbol})</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-800 border-4 border-slate-700 px-3 py-2 font-mono"
              />
            </div>

            <div className="flex items-center gap-2">
              {[25, 50, 75, 100].map((p) => (
                <button
                  key={p}
                  onClick={() => handleQuick(p)}
                  className="px-3 py-2 text-xs uppercase tracking-widest bg-slate-800 border-4 border-slate-700 text-slate-200 hover:bg-slate-700"
                >
                  {p}%
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between bg-slate-800 border-4 border-slate-700 px-3 py-2">
              <span className="text-xs uppercase tracking-widest">Total</span>
              <span className="font-mono font-bold">{total.toLocaleString(undefined, { maximumFractionDigits: 2 })} USDT</span>
            </div>

            <button
              className={`w-full mt-2 px-4 py-3 border-4 shadow-[4px_4px_0_0_#0f172a] font-extrabold uppercase tracking-widest ${
                side === 'BUY' ? 'bg-emerald-400 text-slate-900 border-slate-900' : 'bg-rose-400 text-slate-900 border-slate-900'
              }`}
            >
              {side === 'BUY' ? 'Place Buy Order' : 'Place Sell Order'}
            </button>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 border-4 border-slate-800 shadow-[6px_6px_0_0_#0f172a] p-4">
          <h3 className="text-lg font-black uppercase tracking-widest mb-3">Recent Activity</h3>
          <ul className="space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <li key={i} className="flex items-center justify-between bg-slate-800 border-4 border-slate-700 px-3 py-2">
                <span className="text-xs uppercase tracking-widest">Order #{1234 + i}</span>
                <span className="font-mono">Filled</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TradePanel
