import React from 'react'
import Hero from './components/Hero'
import TickerMarquee from './components/TickerMarquee'
import MarketTable from './components/MarketTable'
import TradePanel from './components/TradePanel'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />
      <TickerMarquee />
      <MarketTable />
      <TradePanel />
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-center text-slate-400">
        Built with love for retro games and modern markets.
      </footer>
    </div>
  )
}

export default App
