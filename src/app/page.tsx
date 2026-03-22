"use client";

import { useEffect, useState } from "react";
import { 
  House, 
  User, 
  FolderOpen, 
  Translate, 
  XLogo, 
  SealCheck, 
  Archive, 
  Wrench, 
  EnvelopeSimple, 
  ArrowUpRight, 
  CircleDashed, 
  Files, 
  Images, 
  Terminal, 
  GithubLogo,
  Intersect
} from "@phosphor-icons/react";

/**
 * Main landing page for krzgn.xyz
 * Features a bento grid layout with custom Mesopotamian aesthetics.
 */
export default function Home() {
  const [time, setTime] = useState("--:--:--");
  const [date, setDate] = useState("···");
  const [lexIdx, setLexIdx] = useState(0);
  const [isLexAnimating, setIsLexAnimating] = useState(false);
  const [stackVisible, setStackVisible] = useState(false);

  const lexEntries = [
    { word: "kur", def: '"mountain · foreign land · netherworld"', lang: "𒀭 Sumerian" },
    { word: "za.gin", def: '"lapis lazuli · brilliant · pure"', lang: "𒀭 Sumerian" },
  ];

  useEffect(() => {
    /**
     * Updates the clock every second using Asia/Baghdad timezone.
     */
    function updateClock() {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: "Asia/Baghdad" };

      setTime(
        now.toLocaleTimeString("en-US", {
          ...opts,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      setDate(
        now
          .toLocaleDateString("en-US", {
            ...opts,
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
          .toUpperCase()
      );
    }

    const timer = setInterval(updateClock, 1000);
    updateClock();

    // Small delay for stack animation
    const stackTimer = setTimeout(() => setStackVisible(true), 600);

    return () => {
      clearInterval(timer);
      clearTimeout(stackTimer);
    };
  }, []);

  /**
   * Cycles through lexicon entries with a fade animation.
   */
  const cycleLexicon = () => {
    setIsLexAnimating(true);
    setTimeout(() => {
      setLexIdx((prev) => (prev + 1) % lexEntries.length);
      setIsLexAnimating(false);
    }, 250);
  };

  return (
    <main className="flex-1 md:h-full md:overflow-hidden z-10">
      <div 
        id="main-grid" 
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-0 md:gap-4 h-full"
      >
        {/* ── HERO (2×2) ── */}
        <div 
          id="bento-hero" 
          className="panel boot col-span-1 md:col-span-2 md:row-span-2 p-6 md:p-7 flex flex-col justify-between"
          style={{ animationDelay: "0.10s" }}
        >
          <div className="cuneiform -right-3 -bottom-8">𒀭</div>
          <div className="glow-blue w-64 h-64 -top-16 -right-16"></div>

          {/* Header */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="avatar-ring">
                <div className="avatar-inner">𒍝</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2 leading-tight">
                  Kurou Zagin
                  <SealCheck weight="fill" className="text-lazurite-400 text-base" />
                </h1>
                <p className="font-mono text-xs text-lazurite-400 mt-0.5">@kurouzagin</p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-3">
              Solo developer. I build small, precise tools for creators —<br />
              focused on <span className="text-white font-medium">visuals</span>,{" "}
              <span className="text-white font-medium">workflows</span>, and reducing friction.
            </p>

            <p className="font-mono text-xs text-sumer-gold opacity-80">
              // Mesopotamian enthusiast · e/acc
            </p>
          </div>

          {/* Projects row */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-slate-600 font-mono text-[0.6rem] uppercase tracking-widest mb-1">
              Active Projects
            </div>
            <a 
              href="https://shimokitan.live" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-slate-900/60 hover:bg-lazurite-950/60 border border-slate-800 hover:border-lazurite-500/30 rounded-xl px-4 py-3 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Archive className="text-lazurite-400 text-lg" />
                <div>
                  <div className="text-white text-sm font-medium leading-none">Shimokitan</div>
                  <div className="text-slate-500 text-xs mt-0.5 font-mono">Japanese creative culture archive</div>
                </div>
              </div>
              <ArrowUpRight className="text-slate-600 group-hover:text-lazurite-400 transition-colors text-sm" />
            </a>
            <a 
              href="https://alan.krzgn.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-slate-900/60 hover:bg-lazurite-950/60 border border-slate-800 hover:border-lazurite-500/30 rounded-xl px-4 py-3 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Wrench className="text-sumer-gold text-lg" />
                <div>
                  <div className="text-white text-sm font-medium leading-none">Alan</div>
                  <div className="text-slate-500 text-xs mt-0.5 font-mono">Asset workbench for illustrators & VTubers</div>
                </div>
              </div>
              <ArrowUpRight className="text-slate-600 group-hover:text-lazurite-400 transition-colors text-sm" />
            </a>
            <div className="flex items-center justify-between bg-slate-900/60 border border-amber-500/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <EnvelopeSimple className="text-lazurite-400 text-lg" />
                <div>
                  <div className="text-white text-sm font-medium leading-none flex items-center gap-2">
                    Dub
                    <span className="font-mono text-[0.55rem] text-amber-400 border border-amber-500/30 rounded px-1.5 py-0.5">WIP</span>
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5 font-mono">Self-hosted email client</div>
                </div>
              </div>
              <CircleDashed className="text-amber-500/40 text-sm" />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-800/70">
            <div className="flex items-center gap-2">
              <div className="relative w-2 h-2">
                <div className="status-dot absolute inset-0 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-xs text-slate-500">Available for collabs</span>
            </div>
            <a 
              href="https://x.com/kurouzagin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-xs text-lazurite-400 hover:text-lazurite-300 transition-colors flex items-center gap-1"
            >
              Drop a line <ArrowUpRight className="text-xs" />
            </a>
          </div>
        </div>

        {/* ── DUB PROJECT (2×1) ── */}
        <div 
          id="bento-tools" 
          className="panel interactive boot col-span-1 md:col-span-2 p-6 relative group overflow-hidden"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]"></div>
          <EnvelopeSimple 
            className="absolute -right-4 -bottom-4 text-[7rem] text-white opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none" 
          />

          <div className="flex justify-between items-start mb-3 relative z-10">
            <div className="flex items-center gap-2 font-mono text-[0.62rem] text-slate-500 uppercase tracking-widest">
              <CircleDashed className="text-xs text-amber-400" />
              <span className="text-amber-400">In Development</span>
            </div>
            <div className="font-mono text-[0.6rem] text-slate-600 border border-slate-800 rounded px-2 py-0.5">v0.1</div>
          </div>

          <h2 className="text-xl font-bold text-white mb-1.5 relative z-10 flex items-center gap-2">
            Dub
            <EnvelopeSimple className="text-lazurite-400 text-lg" />
          </h2>
          <p className="text-sm text-slate-400 mb-4 relative z-10 leading-relaxed max-w-[80%]">
            A self-hosted email client built for people who want ownership over their inbox. Clean, fast, and yours.
          </p>

          <div className="flex gap-3 relative z-10 font-mono text-[0.65rem]">
            <span className="flex items-center gap-1 text-slate-500">
              <Archive className="text-lazurite-400" /> Self-host
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <EnvelopeSimple className="text-lazurite-400" /> Privacy-first
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <CircleDashed className="text-lazurite-400" /> Fast
            </span>
          </div>
        </div>

        {/* ── LEXICON (1×1) ── */}
        <div 
          id="bento-lex" 
          className="panel boot col-span-1 p-5 flex flex-col justify-between group cursor-pointer select-none"
          onClick={cycleLexicon}
          style={{ animationDelay: "0.22s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center justify-between">
            <span className="flex items-center gap-1.5"><Translate className="text-xs" /> Lexicon</span>
            <span id="lex-index" className="text-slate-700">{lexIdx + 1}/{lexEntries.length}</span>
          </div>
          <div 
            id="lex-body" 
            className={`transition-all duration-250 ${isLexAnimating ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}
          >
            <div id="lex-word" className="text-3xl font-bold text-sumer-gold leading-none mb-1.5 tracking-tight">
              {lexEntries[lexIdx].word}
            </div>
            <div id="lex-def" className="text-sm text-slate-400 italic leading-snug">
              {lexEntries[lexIdx].def}
            </div>
          </div>
          <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
            <div id="lex-lang" className="font-mono text-[0.6rem] text-slate-600">
              𒀭 {lexEntries[lexIdx].lang.split(" ").pop()}
            </div>
            <ArrowUpRight weight="bold" className="text-slate-700 text-xs group-hover:text-slate-500 transition-colors" />
          </div>
        </div>

        {/* ── IMAGE SORTER UTIL (1×1) ── */}
        <div 
          id="bento-util" 
          className="panel interactive boot col-span-1 p-5 flex flex-col justify-between group"
          style={{ animationDelay: "0.26s" }}
        >
          <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
            <Files className="text-xs" /> Util
          </div>
          <div>
            <Images 
              className="text-3xl text-slate-400 mb-2 block group-hover:-translate-y-0.5 transition-transform duration-200" 
            />
            <h3 className="text-white font-semibold text-sm">Image Sorter</h3>
            <p className="text-xs text-slate-500 mt-1 font-mono leading-snug">
              Rename, reorder,<br />export to PDF.
            </p>
          </div>
          <a 
            href="https://alan.krzgn.xyz/en/image-sorter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] text-lazurite-400 hover:text-lazurite-300 transition-colors flex items-center gap-1"
          >
            Open <ArrowUpRight className="text-xs" />
          </a>
        </div>

        {/* ── CLOCK (2×1) ── */}
        <div 
          id="bento-clock" 
          className="panel boot col-span-1 md:col-span-2 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
          style={{ animationDelay: "0.30s" }}
        >
          <div className="cuneiform absolute -right-2 -bottom-8" style={{ fontSize: "6rem" }}>𒆳</div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-lazurite-950/70 border border-lazurite-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg leading-none">𒀭</span>
            </div>
            <div>
              <div className="font-mono text-[0.6rem] text-slate-600 uppercase tracking-widest mb-0.5">Local System</div>
              <div className="text-white text-sm font-medium">Sumer, Mesopotamia</div>
              <div className="font-mono text-[0.6rem] text-slate-600 mt-0.5">UTC+3 · AST</div>
            </div>
          </div>
          <div className="text-right relative z-10">
            <div className="text-2xl font-mono text-white tracking-tight leading-none" id="live-time">
              {time}
            </div>
            <div className="font-mono text-[0.65rem] text-lazurite-400 mt-1.5 tracking-wide" id="live-date">
              {date}
            </div>
          </div>
        </div>

        {/* ── STACK (1×1) ── */}
        <div 
          id="bento-stack" 
          className="panel boot col-span-1 p-5 font-mono text-xs flex flex-col relative"
          style={{ animationDelay: "0.34s" }}
        >
          <div className="scanline"></div>

          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/60">
            <span className="text-slate-600 text-[0.6rem] uppercase tracking-widest">~/stack</span>
            <Terminal className="text-slate-600 text-sm" />
          </div>

          <div className="flex-1 flex flex-col justify-around gap-2">
            {[
              { name: "TypeScript", label: "primary", pct: 0.92 },
              { name: "Rust", label: "systems", pct: 0.85 },
              { name: "Python", label: "pipelines", pct: 0.88 },
              { name: "Next.js", label: "web", pct: 0.95 },
            ].map((item) => (
              <div key={item.name} className="stack-item">
                <div className="flex justify-between text-slate-400">
                  <span>&gt; {item.name}</span>
                  <span className="text-lazurite-400">{item.label}</span>
                </div>
                <div className="bar-track">
                  <div 
                    className="bar-fill" 
                    style={{ transform: `scaleX(${stackVisible ? item.pct : 0})` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-sumer-gold opacity-75 mt-1">
              <span>&gt; Cuneiform</span>
              <span>studying_</span>
            </div>
          </div>
        </div>

        {/* ── SOCIAL LINKS (1×1) ── */}
        <div 
          id="bento-links" 
          className="panel boot col-span-1 p-4 grid grid-cols-2 grid-rows-2 gap-2"
          style={{ animationDelay: "0.38s" }}
        >
          <a 
            href="https://github.com/krzgn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900/60 hover:bg-lazurite-950/80 hover:border-lazurite-500/30 border border-transparent rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group py-3"
          >
            <GithubLogo className="text-2xl text-slate-400 group-hover:text-white transition-colors" />
            <span className="font-mono text-[0.55rem] text-slate-600 group-hover:text-slate-400 tracking-wider">GITHUB</span>
          </a>
          <a 
            href="https://x.com/kurouzagin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900/60 hover:bg-slate-100 border border-transparent rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group py-3"
          >
            <XLogo className="text-2xl text-slate-400 group-hover:text-black transition-colors" />
            <span className="font-mono text-[0.55rem] text-slate-600 group-hover:text-black tracking-wider">X</span>
          </a>
          <a 
            href="mailto:kurouzagin@proton.me" 
            className="bg-slate-900/60 hover:bg-lazurite-950/80 hover:border-lazurite-500/30 border border-transparent rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group py-3"
          >
            <EnvelopeSimple className="text-2xl text-slate-400 group-hover:text-white transition-colors" />
            <span className="font-mono text-[0.55rem] text-slate-600 group-hover:text-slate-400 tracking-wider">MAIL</span>
          </a>
          <a 
            href="https://shimokitan.live" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900/60 hover:bg-lazurite-950/80 hover:border-lazurite-500/30 border border-transparent rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group py-3"
          >
            <Archive className="text-2xl text-slate-400 group-hover:text-lazurite-300 transition-colors" />
            <span className="font-mono text-[0.55rem] text-slate-600 group-hover:text-slate-400 tracking-wider uppercase">SHIMOKITAN</span>
          </a>
        </div>

      </div>
    </main>
  );
}
