"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck } from "react-icons/fi";
import { useI18n, supportedLanguages } from "@/lib/i18n-context";

export function LanguageLocationModal() {
  const {
    currentLanguage,
    setLanguage,
    isModalOpen,
    closeModal,
  } = useI18n();

  if (!isModalOpen) return null;

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
          className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[85vh]"
        >
          {/* Modal Header */}
          <div className="p-5 border-b border-white/5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-white tracking-tight">
                Language
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Select your preferred language
              </p>
            </div>

            <button
              onClick={closeModal}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {supportedLanguages.map((lang) => {
                const isSelected = currentLanguage.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      closeModal();
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center justify-between group ${
                      isSelected ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <div className="flex flex-col">
                        <span
                          className={`text-sm font-medium ${
                            isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                          }`}
                        >
                          {lang.nativeName}
                        </span>
                        <span className="text-xs text-zinc-500">{lang.name}</span>
                      </div>
                    </div>
                    {isSelected && <FiCheck className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
