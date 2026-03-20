"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  House, 
  User, 
  FolderOpen, 
  Translate, 
  XLogo,
  Intersect
} from "@phosphor-icons/react";

/**
 * Global Sidebar Navigation component.
 * Features phosphor icons with tooltips and active state styling.
 */
export default function SidebarNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: House, iconFill: House },
    { name: "About", href: "/about", icon: User, iconFill: User },
    { name: "Projects", href: "/projects", icon: FolderOpen, iconFill: FolderOpen },
    { name: "Lexicon", href: "/lexicon", icon: Translate, iconFill: Translate },
  ];

  return (
    <nav 
      id="nav-panel" 
      className="panel boot flex md:flex-col items-center justify-between p-3 md:py-7 md:px-3 w-full md:w-[60px] md:h-full shrink-0 z-10"
      style={{ animationDelay: "0.05s" }}
    >
      {/* Logo */}
      <Link href="/" className="text-lazurite-400 flex items-center md:flex-col gap-2 group cursor-pointer">
        <Intersect 
          weight="fill" 
          className="text-2xl group-hover:text-lazurite-300 transition-colors duration-200" 
        />
      </Link>

      {/* Nav links */}
      <ul className="flex md:flex-col gap-5 md:gap-6 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          
          return (
            <li key={link.name} className="nav-item relative group">
              <Link 
                href={link.href} 
                className={`p-2 block transition-colors ${
                  isActive ? "text-lazurite-400" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <Icon weight={isActive ? "fill" : "regular"} className="text-xl" />
              </Link>
              <span className="tip">{link.name}</span>
            </li>
          );
        })}
      </ul>

      {/* X link bottom */}
      <div className="hidden md:block">
        <a 
          href="https://x.com/kurouzagin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-slate-300 transition-colors p-1 block"
        >
          <XLogo className="text-lg" />
        </a>
      </div>
    </nav>
  );
}
