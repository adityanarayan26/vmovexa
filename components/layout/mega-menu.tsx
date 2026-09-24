"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { megaMenuData } from "@/lib/mega-menu";

interface MegaMenuProps {
  activeKey: string | null;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({ activeKey, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!activeKey || !megaMenuData[activeKey]) return null;

  const data = megaMenuData[activeKey];

  return (
    <>
      {/* Background Dim Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm z-30"
      />

      {/* Tesla-Style Mega Menu Panel */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="fixed top-[72px] inset-x-0 bg-[#060810]/95 backdrop-blur-2xl border-b border-white/10 z-40 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top Horizon Glow Accent */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 opacity-90 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

        <div className="container max-w-7xl mx-auto px-8 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Left / Center: Vector & 3D Render Product Visuals (Tesla-style) */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 items-center justify-items-center">
              {data.visualItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-full max-w-[280px] group cursor-pointer"
                >
                  <Link
                    href={item.primaryLink.href}
                    onClick={onClose}
                    className="relative w-full h-32 sm:h-36 flex items-center justify-center p-2 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="280px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                    />
                  </Link>

                  <h4 className="text-sm sm:text-base font-bold text-white text-center mt-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 text-center font-normal mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </p>

                  {/* Tesla-style action links: Learn | Order/Explore */}
                  <div className="flex items-center justify-center gap-3 mt-2.5 text-xs font-semibold tracking-wide">
                    <Link
                      href={item.primaryLink.href}
                      onClick={onClose}
                      className="text-zinc-300 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      {item.primaryLink.label}
                    </Link>
                    {item.secondaryLink && (
                      <>
                        <span className="text-zinc-600 font-light">•</span>
                        <Link
                          href={item.secondaryLink.href}
                          onClick={onClose}
                          className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                        >
                          {item.secondaryLink.label}
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Section Names List (Listed from Footer) */}
            <div className="w-full lg:w-72 lg:border-l border-white/10 lg:pl-10 pt-6 lg:pt-0 border-t lg:border-t-0 flex flex-col justify-center space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{data.navLabel} Sections</span>
              </div>

              <div className="flex flex-col space-y-1">
                {data.sectionLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={onClose}
                    className="text-xs sm:text-[13px] font-medium text-zinc-300 hover:text-white hover:translate-x-1.5 transition-all py-1.5 flex items-center justify-between group/link border-b border-white/[0.03] hover:border-white/10"
                  >
                    <span className="group-hover/link:text-cyan-300 transition-colors">
                      {link.label}
                    </span>
                    <FiArrowUpRight className="opacity-0 group-hover/link:opacity-100 text-cyan-400 w-3.5 h-3.5 transition-all -translate-x-1 group-hover/link:translate-x-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
