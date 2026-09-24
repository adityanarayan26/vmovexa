"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiGlobe, FiMapPin, FiSearch } from "react-icons/fi";
import { useI18n, supportedLanguages, marketLocations } from "@/lib/i18n-context";

export function LanguageLocationModal() {
  const {
    currentLanguage,
    currentLocation,
    setLanguage,
    setLocation,
    isModalOpen,
    closeModal,
  } = useI18n();

  const [activeTab, setActiveTab] = useState<"language" | "location">("language");
  const [searchQuery, setSearchQuery] = useState("");

  if (!isModalOpen) return null;

  const filteredLanguages = supportedLanguages.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLocations = marketLocations.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#090b12] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Top Brand Horizon Glow Accent */}
          <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-7 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <FiGlobe className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                  Global Configuration
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Select Language &amp; Location
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal">
                Choose your preferred operating language and regional mobility market
              </p>
            </div>

            <button
              onClick={closeModal}
              className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Currently Active Selection Banner */}
          <div className="px-6 sm:px-7 py-3 bg-white/[0.02] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Active Language:</span>
              <span className="text-cyan-300 font-semibold flex items-center gap-1.5 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30">
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.nativeName}</span>
                <span className="text-zinc-400 font-normal">({currentLanguage.name})</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Market Zone:</span>
              <span className="text-pink-300 font-semibold flex items-center gap-1.5 bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/30">
                <span>{currentLocation.flag}</span>
                <span>{currentLocation.name}</span>
              </span>
            </div>
          </div>

          {/* Navigation Tabs & Search */}
          <div className="p-6 sm:px-7 pb-4 space-y-4">
            <div className="flex items-center justify-between gap-4">
              {/* Tabs */}
              <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10">
                <button
                  onClick={() => setActiveTab("language")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    activeTab === "language"
                      ? "bg-white text-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <FiGlobe className="w-3.5 h-3.5" />
                  <span>Languages ({supportedLanguages.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab("location")}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    activeTab === "location"
                      ? "bg-white text-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <FiMapPin className="w-3.5 h-3.5" />
                  <span>Markets ({marketLocations.length})</span>
                </button>
              </div>

              {/* Search Box */}
              <div className="relative flex-1 max-w-xs hidden sm:block">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
                <input
                  type="text"
                  placeholder={activeTab === "language" ? "Search languages..." : "Search locations..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-7 pb-6">
            {activeTab === "language" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredLanguages.map((lang) => {
                  const isSelected = currentLanguage.code === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group ${
                        isSelected
                          ? "bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl flex-shrink-0">{lang.flag}</span>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base group-hover:text-cyan-200 transition-colors">
                            {lang.nativeName}
                          </div>
                          <div className="text-xs text-zinc-400 font-normal">
                            {lang.name} • {lang.region}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-cyan-400 text-black flex items-center justify-center flex-shrink-0">
                          <FiCheck className="w-3.5 h-3.5 font-bold" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredLocations.map((loc) => {
                  const isSelected = currentLocation.code === loc.code;
                  return (
                    <button
                      key={loc.code}
                      onClick={() => setLocation(loc.code)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group ${
                        isSelected
                          ? "bg-gradient-to-r from-pink-950/40 to-indigo-950/40 border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl flex-shrink-0">{loc.flag}</span>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base group-hover:text-pink-200 transition-colors">
                            {loc.name}
                          </div>
                          <div className="text-xs text-zinc-400 font-normal">
                            {loc.region}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center flex-shrink-0">
                          <FiCheck className="w-3.5 h-3.5 font-bold" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-black/40 flex items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-zinc-500">
              Selections saved automatically across visits
            </span>

            <button
              onClick={closeModal}
              className="px-6 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider hover:bg-zinc-200 transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
