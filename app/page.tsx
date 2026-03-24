"use client";

import { useState } from 'react';
import { ArrowRight, Paperclip, Globe, Command, Plus, Minus, ArrowUpRight, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ADVANTAGES = [
  {
    title: "Real-Time Intelligence",
    description: "Claire scrapes live data from 50+ sources — reviews, forums, job boards, funding databases — delivering analysis grounded in what's happening right now, not 2023 training data."
  },
  {
    title: "Loophole Detection Engine",
    description: "Automatically identifies gaps in competitor offerings by analyzing negative reviews and feature requests across the web, giving you a clear roadmap for differentiation."
  },
  {
    title: "Automated Competitor Tracking",
    description: "Set up trackers for your top competitors and get instantly notified when they change pricing, launch new features, or receive a surge of negative feedback."
  },
  {
    title: "Actionable Insights Dashboard",
    description: "Stop drowning in raw data. Claire synthesizes thousands of data points into clear, prioritized action items for your product, marketing, and sales teams."
  }
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative z-0 selection:bg-blue-200">
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[900px] -z-10" 
        style={{
          background: 'radial-gradient(ellipse 140% 100% at 50% 0%, #02040a 0%, #0a1435 40%, #1e40af 70%, #ffffff 90%)'
        }}
      />

      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-8 py-4 text-white/70 text-[11px] font-semibold tracking-[0.2em] uppercase">
        <div className="flex items-center gap-2 text-white">
          {/* Logo */}
          <img 
            src="https://claire.edgeone.dev/Untitled%20design.png" 
            alt="Claire Logo" 
            className="h-12 w-auto object-contain sm:h-16 md:h-20"
          />
        </div>
        
        <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
          <a href="#why-claire" className="hover:text-white transition-colors">Why Claire</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#teams" className="hover:text-white transition-colors flex items-center gap-1.5">
            For Teams <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="pt-8 md:pt-12 pb-16 px-6 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-medium text-white text-center leading-[1.05] tracking-tight mb-10 md:mb-14">
          Find Competitor <span className="italic underline decoration-dotted underline-offset-[8px] md:underline-offset-[12px] decoration-white/30 decoration-2">Loopholes</span><br className="hidden sm:block" />
          Before They Find <span className="italic underline decoration-dotted underline-offset-[8px] md:underline-offset-[12px] decoration-white/30 decoration-2">You</span>
        </h1>

        {/* Search/Input Bar */}
        <div className="w-full max-w-[800px] bg-white rounded-[2rem] p-2 shadow-[0_20px_60px_-15px_rgba(30,58,138,0.3)] flex flex-col gap-2">
          <input 
            type="text" 
            placeholder="Describe your startup idea..." 
            className="w-full bg-transparent border-none outline-none px-4 md:px-6 py-4 md:py-5 text-base md:text-lg text-slate-800 placeholder:text-slate-300 font-medium"
          />
          <div className="flex flex-wrap items-center justify-between px-2 md:px-4 pb-2 gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <button className="p-2 md:p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors flex items-center justify-center">
                <Paperclip className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 text-blue-600 bg-blue-50/50 hover:bg-blue-50 rounded-full transition-colors flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-semibold">
                <Command className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Deep Scan
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-semibold">
                <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Analyze
              </button>
            </div>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors ml-auto">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Sub-hero */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 mt-8 md:mt-16">
        <div className="flex items-start gap-4 md:gap-6 max-w-2xl">
          <div className="mt-1 hidden sm:block">
            <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" strokeWidth={1.5} />
          </div>
          <p className="text-slate-400 text-xs md:text-[13px] leading-relaxed font-medium">
            Claire scans live competitor data — reviews, Reddit, app stores, and more —<br className="hidden sm:block" />
            to find exactly where your rivals are weak.
          </p>
        </div>
        <button className="px-4 md:px-5 py-2 md:py-2.5 border border-slate-200 rounded-full text-xs md:text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2 whitespace-nowrap">
          See How It Works <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24 mt-4 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase mb-8 md:mb-12">
              ( Advantages )
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-slate-900 leading-[1.1] tracking-tight mb-8 md:mb-12">
              Outsmart the<br />
              <span className="italic">competition</span><br />
              with Claire
            </h2>
            <button className="px-5 md:px-6 py-2.5 md:py-3 border border-slate-200 rounded-full text-[10px] md:text-xs font-bold text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-2 uppercase tracking-widest">
              Validate My Idea Free <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col pt-4 md:pt-8">
            {ADVANTAGES.map((adv, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="py-6 md:py-8 border-t border-slate-200 cursor-pointer group flex flex-col"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <div className="flex items-start justify-between w-full gap-4 md:gap-16">
                    <h3 className={`text-base md:text-lg font-semibold md:w-[200px] shrink-0 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                      {adv.title}
                    </h3>
                    
                    <div className="hidden md:block flex-1">
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium">
                              {adv.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={`relative w-8 h-8 md:w-10 md:h-10 shrink-0 flex items-center justify-center rounded-full transition-colors mt-0.5 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                      <Plus className={`absolute w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} strokeWidth={2} />
                      <Minus className={`absolute w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Mobile description */}
                  <div className="md:hidden w-full">
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium">
                            {adv.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
            
            {/* Bottom Border */}
            <div className="border-t border-slate-200"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

