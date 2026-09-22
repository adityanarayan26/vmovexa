"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = navigation.map((item) => {
    const isActive = pathname === item.href;
    return (
      <Link
        className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
          isActive
            ? "text-white bg-white/15 shadow-[0_0_15px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.25)] font-semibold"
            : "text-zinc-400 hover:text-white hover:bg-white/[0.07]"
        }`}
        href={item.href}
        key={item.href}
        onClick={() => setOpen(false)}
      >
        {item.label}
        {isActive && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
        )}
      </Link>
    );
  });

  return (
    <header className={`site-header transition-all duration-300 ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav aria-label="Main navigation" className="nav-shell container max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link aria-label="VMOVEXA Home" className="brand-link flex items-center gap-3 group" href="/">
          <Image
            alt="VMOVEXA"
            className="brand-logo-full transition-transform duration-300 group-hover:scale-[1.03]"
            height={48}
            priority
            src="/logos/vmovexa-wordmark-dark.svg"
            width={180}
          />
        </Link>
        
        {/* Sleek Centered Floating Pill Dock for Navigation */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_25px_rgba(0,0,0,0.6)]">
          {links}
        </div>

        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] group"
            href="/contact"
          >
            <span className="text-black font-semibold">Let&apos;s Build</span>
            <FiArrowUpRight size={14} className="text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="menu-toggle p-2 rounded-xl bg-white/[0.04] border border-white/10 text-white lg:hidden hover:bg-white/[0.08] transition-colors"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            className="mobile-nav"
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
          >
            <div className="mobile-nav__inner container">
              {links}
              <Link
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide mt-4"
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

