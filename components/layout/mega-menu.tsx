"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { megaMenuData } from "@/lib/mega-menu";
import { navigation } from "@/lib/site";

interface MegaMenuProps {
  activeKey: string | null;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({ activeKey, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const prevKeyRef = useRef<string | null>(null);
  
  useEffect(() => {
    prevKeyRef.current = activeKey;
  }, [activeKey]);

  if (!activeKey || !megaMenuData[activeKey]) return null;

  const data = megaMenuData[activeKey];
  const mainVisual = data.visualItems[0];

  // Determine sliding direction (Inverted as per user feedback)
  let xOffset = 0;
  if (prevKeyRef.current && prevKeyRef.current !== activeKey) {
    const prevIdx = navigation.findIndex((n) => n.label === prevKeyRef.current);
    const currIdx = navigation.findIndex((n) => n.label === activeKey);
    if (prevIdx !== -1 && currIdx !== -1) {
      // If moving left-to-right (curr > prev), animation slides left-to-right (starts at -60)
      xOffset = currIdx > prevIdx ? -60 : 60;
    }
  }

  // If opening for the first time, drop from top, otherwise slide horizontally
  const initialY = prevKeyRef.current ? 0 : 8;
  const exitY = 0;

  return (
    <>
      {/* Background Dim Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm z-30"
      />

      {/* Tesla-Style Clean White Mega Menu Panel */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="fixed top-[72px] inset-x-0 bg-white z-40 shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden"
      >
        <div className="container max-w-[1400px] mx-auto px-8 py-8 min-h-[350px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: initialY, x: xOffset, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: exitY, x: -xOffset, filter: "blur(4px)" }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 will-change-transform will-change-filter translate-z-0 w-full"
            >
              {/* Left: Product Visuals */}
              <div className="flex flex-col items-center justify-center w-full lg:w-3/5">
                <Link
                  href={mainVisual.primaryLink.href}
                  onClick={onClose}
                  className="relative w-full max-w-[450px] h-[180px] sm:h-[250px] flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-[1.02] will-change-transform translate-z-0"
                >
                  <Image
                    src={mainVisual.image}
                    alt={mainVisual.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-contain"
                  />
                </Link>

                <h4 className="text-xl font-bold text-zinc-900 text-center tracking-tight mb-3">
                  {mainVisual.title}
                </h4>

                {/* Tesla-style action links: Learn | Order */}
                <div className="flex items-center justify-center gap-4 text-sm font-medium tracking-wide">
                  <Link
                    href={mainVisual.primaryLink.href}
                    onClick={onClose}
                    className="text-zinc-500 hover:text-zinc-900 underline underline-offset-4 transition-colors"
                  >
                    {mainVisual.primaryLink.label}
                  </Link>
                  {mainVisual.secondaryLink && (
                    <Link
                      href={mainVisual.secondaryLink.href}
                      onClick={onClose}
                      className="text-zinc-500 hover:text-zinc-900 underline underline-offset-4 transition-colors"
                    >
                      {mainVisual.secondaryLink.label}
                    </Link>
                  )}
                </div>
              </div>

              {/* Right: Section Links List */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-zinc-200 pt-8 lg:pt-0 lg:pl-16">
                <div className="flex flex-col space-y-4">
                  {data.sectionLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      onClick={onClose}
                      className="text-[16px] font-semibold text-zinc-700 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
