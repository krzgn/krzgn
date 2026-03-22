"use client";

import { useState } from "react";
import { 
  Translate, 
  Quotes, 
  ArrowUpRight, 
  CircleDashed, 
  BookOpen, 
  IdentificationCard 
} from "@phosphor-icons/react";

/**
 * Lexicon page exploring Sumerian concepts.
 * Features a bento layout with cards for each word.
 */
export default function LexiconPage() {
  const words = [
    { word: "kur", def: "mountain · foreign land · netherworld", lang: "𒀭 Sumerian", cuneiform: "𒆳", note: "A place beyond the known boundaries." },
    { word: "za.gin", def: "lapis lazuli · brilliant · pure", lang: "𒀭 Sumerian", cuneiform: "𒍝𒆳", note: "Considered the most precious stone in Mesopotamia." },
    { word: "alan", def: "figure · image · statue", lang: "𒀭 Sumerian", cuneiform: "𒀭", note: "Used to describe visual representation of an entity." },
    { word: "dub", def: "tablet · clay tablet", lang: "𒀭 Sumerian", cuneiform: "𒍝", note: "The primary medium for recording and inscriptions." },
    { word: "me", def: "essence · divine law · power", lang: "𒀭 Sumerian", cuneiform: "𒈨", note: "The fundamental rules of the universe." }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="flex-1 md:h-full md:overflow-hidden z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-0 md:gap-4 h-full">
        
        {/* Header Panel */}
        <div 
          className="panel boot col-span-1 md:col-span-2 p-7 flex flex-col justify-between"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="cuneiform -right-4 -bottom-4 text-lazurite-400 group-hover:text-sumer-gold transition-colors duration-1000 opacity-[0.03]">𒀭</div>
          <div className="glow-blue w-64 h-64 -top-16 -right-16 opacity-10"></div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Translate weight="fill" className="text-lazurite-400 text-xl" />
              <h1 className="text-xl font-bold text-white uppercase tracking-[0.2em]">The Lexicon</h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[85%]">
              A curated collection of concepts that inspire the philosophy of this site. Each entry is a fragment of the Sumerian language, representing the root ideas of recording and creation.
            </p>
          </div>
          
          <div className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest pt-4 border-t border-slate-800/60 flex items-center gap-3">
             <span>ENTITY_ARCHIVE_SECURE</span>
          </div>
        </div>

        {/* Selected Word Detail */}
        <div 
          className="panel boot col-span-1 md:col-span-2 md:row-span-2 p-8 flex flex-col justify-center items-center relative group"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-lazurite-950/20 to-transparent"></div>
          <div className="text-[12rem] text-white/5 font-bold absolute pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            {words[activeIndex].cuneiform}
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-7xl font-bold text-sumer-gold tracking-tight mb-2 uppercase">{words[activeIndex].word}</h2>
            <p className="text-white italic text-xl mb-6">"{words[activeIndex].def}"</p>
            <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-800/70 rounded-lg text-slate-500 font-mono text-xs max-w-sm">
               {words[activeIndex].note}
            </div>
          </div>
        </div>

        {/* Word Grid / Tabs */}
        {words.map((w, idx) => (
          <div 
            key={w.word}
            className={`panel interactive boot col-span-1 p-5 flex flex-col justify-between group overflow-hidden ${activeIndex === idx ? 'border-lazurite-500/50 bg-lazurite-950/20' : ''}`}
            style={{ animationDelay: `${0.22 + idx * 0.06}s` }}
            onClick={() => setActiveIndex(idx)}
          >
             <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center justify-between">
                <span>{w.lang}</span>
                {activeIndex === idx && <CircleDashed className="text-lazurite-400 text-xs animate-spin-slow" />}
             </div>
             
             <div className="py-1">
                <h3 className={`text-2xl font-bold ${activeIndex === idx ? 'text-white' : 'text-slate-400 group-hover:text-white transition-colors'}`}>
                  {w.word}
                </h3>
                <p className="text-xs text-slate-600 font-mono line-clamp-1">{w.def}</p>
             </div>
             
             <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 font-mono text-[0.55rem] text-slate-600">
               <span>ID: {idx + 1}</span>
               <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
          </div>
        ))}

        {/* Footer/Inquiry Panel */}
        <div 
          className="panel boot col-span-1 p-6 flex flex-col justify-between"
          style={{ animationDelay: "0.46s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center gap-2">
            <BookOpen className="text-xs" /> Resources
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold mb-1 italic">"ePSD2 — Electronic Pennsylvania Sumerian Dictionary"</h3>
            <p className="text-xs text-slate-500 font-mono leading-relaxed">
              by ORACC / University of Pennsylvania Museum.
            </p>
            <p className="text-[0.55rem] text-slate-600 font-mono mt-2 uppercase tracking-widest">
              Licensed under CC BY-SA 3.0
            </p>
          </div>
          <a 
            href="https://oracc.museum.upenn.edu/epsd2"
            target="_blank"
            className="font-mono text-[0.65rem] text-lazurite-400 hover:text-lazurite-300 transition-colors uppercase flex items-center gap-1"
          >
            Visit ePSD2 <ArrowUpRight className="text-xs" />
          </a>
        </div>

      </div>
    </main>
  );
}
