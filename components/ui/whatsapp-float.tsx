"use client";

import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/919390393994?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20VMOVEXA.";

  return (
    <motion.aside
      initial={{ scale: 0.85, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-10 md:bottom-14 right-6 z-50 flex items-center"
      aria-label="Contact options"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with VMOVEXA"
        className="group relative flex items-center gap-3 p-1.5 pl-4 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 shadow-[0_12px_36px_rgba(0,0,0,0.85),0_0_24px_rgba(16,185,129,0.18)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.32)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
      >
        {/* Text Details with Status Dot */}
        <div className="hidden sm:flex flex-col text-left pr-1 py-0.5 select-none">
          <span className="text-[12px] font-sans font-medium text-white/90 group-hover:text-white leading-tight transition-colors">
            Chat with VMOVEXA
          </span>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 leading-tight pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            Online • Mobility Team
          </span>
        </div>

        {/* WhatsApp Icon Circle with Gradient & Specular Ring */}
        <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#075E54] via-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_2px_12px_rgba(37,211,102,0.4)] group-hover:shadow-[0_2px_18px_rgba(37,211,102,0.6)] group-hover:scale-105 transition-all duration-300">
          {/* Soft inner specular border */}
          <div className="absolute inset-0 rounded-full border border-white/25 pointer-events-none" />
          <RiWhatsappFill className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-6" />
        </div>
      </a>
    </motion.aside>
  );
}
