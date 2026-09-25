"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX, FiGlobe, FiHelpCircle, FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";
import { MegaMenu } from "./mega-menu";
import { megaMenuData } from "@/lib/mega-menu";
import { useI18n } from "@/lib/i18n-context";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { currentLanguage, currentLocation, openModal } = useI18n();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMenu(null);
    setOpen(false);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (megaMenuData[label]) {
      setActiveMenu(label);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMenuLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const links = navigation.map((item) => {
    const isActive = pathname === item.href;
    const isMenuOpen = activeMenu === item.label;

    let linkClasses = isActive || isMenuOpen
      ? "text-white bg-white/15 shadow-[0_0_15px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.25)] font-semibold"
      : "text-zinc-400 hover:text-white hover:bg-white/[0.07]";

    if (activeMenu) {
      linkClasses = isMenuOpen
        ? "text-black bg-black/5 font-semibold"
        : "text-zinc-500 hover:text-black hover:bg-black/5";
    }

    return (
      <Link
        className={`relative px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-300 ${linkClasses}`}
        href={item.href}
        key={item.href}
        onMouseEnter={() => handleMouseEnter(item.label)}
        onClick={() => {
          setActiveMenu(null);
          setOpen(false);
        }}
      >
        {item.label}
        {isActive && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
        )}
      </Link>
    );
  });

  return (
    <header
      className={`site-header transition-all duration-500 ease-in-out ${scrolled ? "site-header--scrolled" : ""} ${activeMenu ? "!bg-white !border-transparent !shadow-none" : ""}`}
      onMouseLeave={handleMouseLeave}
    >
      <nav aria-label="Main navigation" className="nav-shell container max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px] relative z-50">
        <Link
          aria-label="VMOVEXA Home"
          className="brand-link flex items-center group py-1"
          href="/"
          onClick={() => setActiveMenu(null)}
        >
          <div className="relative flex items-center w-[160px] sm:w-[195px] h-4 sm:h-[18px]">
            <Image
              alt="VMOVEXA"
              className={`absolute left-0 w-auto object-contain transition-opacity duration-500 ease-in-out group-hover:scale-105 h-4 sm:h-[18px] origin-left ${
                activeMenu ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              height={18}
              priority
              src="/logos/vmovexa-wordmark-dark.svg"
              width={213}
            />
            <Image
              alt="VMOVEXA"
              className={`absolute left-0 w-auto object-contain transition-opacity duration-500 ease-in-out group-hover:scale-105 h-4 sm:h-[18px] origin-left ${
                activeMenu ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              height={18}
              priority
              src="/logos/logo-hover-menu-cropped.png"
              width={213}
            />
          </div>
        </Link>
        
        {/* Sleek Centered Floating Pill Dock for Navigation with Tesla Mega Menu Triggers */}
        <div
          className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 ${
            activeMenu 
              ? "bg-zinc-100/50 border-zinc-200" 
              : "bg-white/[0.03] border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_25px_rgba(0,0,0,0.6)]"
          }`}
        >
          {links}
        </div>

        {/* Top Utility Icons (Tesla-style: Help ?, Globe 🌐 Language & Location, Account 👤) + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language & Location Selector (🌐) */}
          <button
            type="button"
            onClick={() => {
              setActiveMenu(null);
              openModal();
            }}
            aria-label="Select Language & Location"
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
              activeMenu ? "text-zinc-500 hover:text-black hover:bg-black/5" : "text-zinc-400 hover:text-white hover:bg-white/[0.08]"
            }`}
            title="Select Language & Market"
          >
            <FiGlobe className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </button>

          <Link
            className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs tracking-wider transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] group ${
              activeMenu 
                ? "bg-black text-white hover:shadow-lg" 
                : "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)]"
            }`}
            href="/contact"
            onClick={() => setActiveMenu(null)}
          >
            <span className={`font-semibold ${activeMenu ? "text-white" : "text-black"}`}>Let&apos;s Build</span>
            <FiArrowUpRight size={14} className={`${activeMenu ? "text-white" : "text-black"} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
          </Link>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="menu-toggle p-2 rounded-xl lg:hidden transition-colors bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08]"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Tesla-Style Mega Menu Component */}
      <AnimatePresence>
        {activeMenu && (
          <MegaMenu
            activeKey={activeMenu}
            onClose={() => setActiveMenu(null)}
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            className="mobile-nav"
            id="mobile-navigation"
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
          >
            <div className="mobile-nav__inner container text-white max-h-[85vh] overflow-y-auto">
              {/* Mobile Language & Location Selector */}
              <div className="pt-1 pb-4 border-b border-white/10 mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openModal();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FiGlobe className="text-cyan-400 w-4 h-4" />
                    <span className="text-sm font-medium">Language</span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold">
                    {currentLanguage.flag} {currentLanguage.nativeName}
                  </span>
                </button>
              </div>

              <div className="flex flex-col space-y-2 mb-6">
                {navigation.map((item) => {
                  const data = megaMenuData[item.label];
                  return (
                    <div key={item.href} className="border-b border-white/10 pb-3">
                      <Link
                        className="text-lg font-bold text-white hover:text-cyan-300 block py-1"
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {data && data.sectionLinks && (
                        <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                          {data.sectionLinks.slice(0, 4).map((sec, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sec.href}
                              onClick={() => setOpen(false)}
                              className="text-xs text-zinc-400 hover:text-cyan-300 py-0.5 truncate"
                            >
                              • {sec.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <Link
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide mt-2 bg-white text-black w-full"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                <span className="text-black font-semibold">Let&apos;s Build</span>
                <FiArrowUpRight size={16} className="text-black" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
