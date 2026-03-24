"use client";

import { 
  User, 
  SealCheck, 
  IdentificationCard, 
  Quotes, 
  Compass, 
  Briefcase,
  Certificate
} from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <main className="flex-1 md:h-full md:overflow-hidden z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-0 md:gap-4 h-full">
        
        {/* Profile Card */}
        <div 
          className="panel boot col-span-1 md:col-span-2 p-7 flex flex-col justify-between"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="cuneiform -right-4 -bottom-4">𒈨</div>
          <div className="glow-blue w-64 h-64 -top-16 -right-16 opacity-10"></div>
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="avatar-ring">
                <div className="avatar-inner">𒍝</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2 leading-tight">
                  The Architect
                  <SealCheck weight="fill" className="text-lazurite-400 text-base" />
                </h1>
                <p className="font-mono text-xs text-lazurite-400 mt-0.5">EST. 2018</p>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold text-white mb-3">Crafting digital artifacts with precision.</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am a solo developer focused on the intersection of <span className="text-white">visual excellence</span> and <span className="text-white">utility</span>. 
              My work is driven by a deep fascination with ancient systems of recording information — specifically Mesopotamian Cuneiform — and how we can apply that same permanence and precision to modern software.
            </p>
          </div>
          
          <div className="flex gap-4 font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest pt-4 border-t border-slate-800/60">
            <span className="flex items-center gap-1.5"><IdentificationCard className="text-lazurite-400" /> Identity: Solo</span>
            <span className="flex items-center gap-1.5"><Compass className="text-lazurite-400" /> Focus: Tools</span>
          </div>
        </div>

        {/* Philosophy */}
        <div 
          className="panel boot col-span-1 p-6 flex flex-col justify-between group"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center gap-2">
            <Quotes className="text-xs" /> Philosophy
          </div>
          <div className="py-2">
            <p className="text-white italic text-base leading-relaxed group-hover:text-lazurite-300 transition-colors">
              "Build software that feels like it was etched into clay."
            </p>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            // Durable, precise, and meaningful.
          </div>
        </div>

        {/* Experience */}
        <div 
          className="panel boot col-span-1 p-6 flex flex-col justify-between"
          style={{ animationDelay: "0.22s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center gap-2">
            <Briefcase className="text-xs" /> Origin
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-white text-sm font-medium">Independent Dev</div>
              <div className="text-slate-500 text-xs font-mono">2023 - Present</div>
            </div>
            <div>
              <div className="text-white text-sm font-medium">Visual Systems Design</div>
              <div className="text-slate-500 text-xs font-mono">2020 - 2022</div>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-800/60">
             <div className="font-mono text-[0.6rem] text-lazurite-500 flex items-center gap-1">
               <Certificate /> VERIFIED_ORIGIN
             </div>
          </div>
        </div>

        {/* Large Aesthetic Panel */}
        <div 
          className="panel boot col-span-1 md:col-span-2 md:row-span-2 p-8 flex flex-col items-center justify-center relative overflow-hidden group"
          style={{ animationDelay: "0.28s" }}
        >
           <div className="cuneiform opacity-5 group-hover:scale-110 transition-transform duration-700 select-none pointer-events-none">𒆳</div>
           <div className="relative z-10 text-center">
             <div className="text-sumer-gold text-4xl font-bold mb-4 tracking-tighter uppercase">kurzagin</div>
             <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Building small, precise tools.</p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-lazurite-950/20 to-transparent"></div>
        </div>

        {/* Tech Stack Summary */}
        <div 
          className="panel boot col-span-1 p-6 flex flex-col justify-between"
          style={{ animationDelay: "0.34s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest">Toolkit</div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {["Next.js", "TypeScript", "Rust", "Tailwind"].map(tech => (
              <div key={tech} className="bg-slate-900/60 border border-slate-800 rounded-lg p-2 text-center text-[0.65rem] text-slate-400 font-mono">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Link back */}
        <div 
          className="panel boot col-span-1 p-6 flex flex-col justify-between group interactive"
          style={{ animationDelay: "0.4s" }}
          onClick={() => window.location.href = '/'}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest">Navigation</div>
          <div className="text-white text-sm font-medium flex items-center gap-2 group-hover:text-lazurite-400 transition-colors">
            Return to Nexus <i className="ph ph-arrow-left" />
          </div>
          <div className="text-xs text-slate-500 font-mono">~/home</div>
        </div>

      </div>
    </main>
  );
}
