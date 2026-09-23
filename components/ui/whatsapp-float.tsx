"use client";

import { motion } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/919999999999?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20VMOVEXA.";

  return (
    <motion.aside
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 flex items-center group"
      aria-label="Contact options"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-black/90 border border-white/15 text-[11px] font-mono font-medium text-white shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with VMOVEXA
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
      >
        {/* Subtle pulsing beacon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />
        <RiWhatsappLine className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </motion.aside>
  );
}
