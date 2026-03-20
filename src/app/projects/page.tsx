"use client";

import { 
  FolderOpen, 
  Archive, 
  Wrench, 
  EnvelopeSimple, 
  ArrowUpRight, 
  CircleDashed,
  Hammer
} from "@phosphor-icons/react";

/**
 * Projects page listing active and archived works.
 * Uses bento boxes to highlight key projects.
 */
export default function ProjectsPage() {
  const projects = [
    {
      id: "shimokitan",
      title: "Shimokitan",
      desc: "Japanese creative culture archive focusing on the indie music and art scene.",
      tag: "Cultural Archive",
      link: "https://shimokitan.live",
      icon: Archive,
      color: "text-lazurite-400",
      status: "Production"
    },
    {
      id: "alam",
      title: "Alam",
      desc: "Comprehensive asset workbench for illustrators & VTubers to manage workflows.",
      tag: "Asset Workbench",
      link: "https://alam.krzgn.xyz",
      icon: Wrench,
      color: "text-sumer-gold",
      status: "Live"
    },
    {
      id: "dub",
      title: "Dub",
      desc: "Privacy-first, self-hosted email client designed for complete inbox ownership.",
      tag: "SaaS / Tool",
      link: "#",
      icon: EnvelopeSimple,
      color: "text-lazurite-500",
      status: "WIP"
    }
  ];

  return (
    <main className="flex-1 md:h-full md:overflow-hidden z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-0 md:gap-4 h-full">
        
        {/* Header Panel */}
        <div 
          className="panel boot col-span-1 md:col-span-2 p-7 flex flex-col justify-between"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="cuneiform -right-4 -bottom-4"> έργον</div>
          <div className="glow-blue w-64 h-64 -top-16 -right-16 opacity-10"></div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FolderOpen weight="fill" className="text-lazurite-400 text-xl" />
              <h1 className="text-xl font-bold text-white uppercase tracking-[0.2em]">Project Archive</h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[85%]">
              A collection of digital artifacts, ranging from cultural archives to precision-based developer tools. 
              Each project is designed with a specific utility in mind, focusing on minimal friction and visual clarity.
            </p>
          </div>
          
          <div className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-widest pt-4 border-t border-slate-800/60 flex items-center gap-3">
            <span>TOTAL_ITEMS: {projects.length}</span>
            <span className="text-lazurite-400">• ALL_SYSTEMS_OPERATIONAL</span>
          </div>
        </div>

        {/* Project Grid */}
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div 
              key={project.id}
              className={`panel interactive boot col-span-1 p-6 flex flex-col justify-between group overflow-hidden`}
              style={{ animationDelay: `${0.16 + idx * 0.06}s` }}
              onClick={() => { if(project.link !== '#') window.open(project.link, '_blank')}}
            >
              <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center justify-between">
                <span className="flex items-center gap-1.5"><Icon className="text-xs" /> {project.tag}</span>
                {project.status === "WIP" && (
                  <span className="text-amber-400 border border-amber-500/30 rounded px-1.5 py-0.5 scale-[0.85] origin-right">WIP</span>
                )}
              </div>
              
              <div className="py-2">
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-lazurite-400 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-500 font-mono leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className={`font-mono text-[0.65rem] ${project.status === 'WIP' ? 'text-slate-600' : 'text-lazurite-400'}`}>
                  {project.status === 'WIP' ? 'NOT_VERIFIED' : 'SECURE_ACCESS'}
                </span>
                {project.link !== '#' ? (
                  <ArrowUpRight className="text-slate-700 text-xs group-hover:text-white transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                ) : (
                  <CircleDashed className="text-slate-700 text-xs animate-spin-slow" />
                )}
              </div>
            </div>
          );
        })}

        {/* Contribution Panel */}
        <div 
          className="panel boot col-span-1 p-6 flex flex-col justify-between"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center gap-2">
            <Hammer className="text-xs" /> Custom Build
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">Looking for a custom build?</h3>
            <p className="text-xs text-slate-500 font-mono leading-relaxed">
              I available for selected collaborations and tool-building missions.
            </p>
          </div>
          <a 
            href="https://x.com/kurouzagin" 
            target="_blank" 
            className="font-mono text-[0.65rem] text-lazurite-400 hover:text-lazurite-300 transition-colors uppercase flex items-center gap-1"
          >
            Inquire <ArrowUpRight className="text-xs" />
          </a>
        </div>

        {/* Large Visual project decoration */}
        <div 
          className="panel boot col-span-1 md:col-span-2 p-8 flex flex-col items-center justify-center relative overflow-hidden group"
          style={{ animationDelay: "0.46s" }}
        >
           <div className="cuneiform opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none text-9xl">έργον</div>
           <div className="relative z-10 text-center">
             <div className="text-white opacity-20 text-4xl font-bold tracking-[0.5em] uppercase">Development</div>
             <p className="text-slate-500 font-mono text-[0.6rem] uppercase tracking-widest mt-2 px-3 py-1 border border-slate-800/60 rounded">Status: All Active</p>
           </div>
           <div className="absolute inset-0 bg-gradient-to-br from-lazurite-900/10 via-transparent to-transparent"></div>
        </div>

      </div>
    </main>
  );
}
