"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
}

export interface MarketLocation {
  code: string;
  name: string;
  region: string;
  flag: string;
}

export const supportedLanguages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", region: "Global / North America" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", region: "Europe / DACH" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", region: "Europe" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", region: "Spain & Latin America" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", region: "India / South Asia" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", region: "Japan / East Asia" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", region: "South Korea / East Asia" },
  { code: "zh", name: "Chinese", nativeName: "中文 (简体)", flag: "🇨🇳", region: "Greater China / APAC" },
];

export const marketLocations: MarketLocation[] = [
  { code: "global", name: "Global Headquarters", region: "International", flag: "🌐" },
  { code: "us", name: "United States & Canada", region: "North America", flag: "🇺🇸" },
  { code: "eu", name: "European Union & UK", region: "Europe", flag: "🇪🇺" },
  { code: "de", name: "Germany (DACH)", region: "Europe", flag: "🇩🇪" },
  { code: "in", name: "India (T-Hub Technology Hub)", region: "Asia Pacific", flag: "🇮🇳" },
  { code: "jp", name: "Japan & East Asia", region: "Asia Pacific", flag: "🇯🇵" },
  { code: "kr", name: "South Korea", region: "Asia Pacific", flag: "🇰🇷" },
  { code: "cn", name: "China & APAC", region: "Asia Pacific", flag: "🇨🇳" },
  { code: "me", name: "Middle East (GCC / UAE)", region: "Middle East", flag: "🇦🇪" },
];

interface I18nContextType {
  currentLanguage: Language;
  currentLocation: MarketLocation;
  setLanguage: (code: string) => void;
  setLocation: (code: string) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>(supportedLanguages[0]);
  const [currentLocation, setCurrentLocationState] = useState<MarketLocation>(marketLocations[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("vmovexa_lang");
      if (savedLang) {
        const found = supportedLanguages.find((l) => l.code === savedLang);
        if (found) setCurrentLanguageState(found);
      }

      const savedLoc = localStorage.getItem("vmovexa_location");
      if (savedLoc) {
        const found = marketLocations.find((m) => m.code === savedLoc);
        if (found) setCurrentLocationState(found);
      }
    }
  }, []);

  const setLanguage = (code: string) => {
    const found = supportedLanguages.find((l) => l.code === code);
    if (found) {
      setCurrentLanguageState(found);
      if (typeof window !== "undefined") {
        localStorage.setItem("vmovexa_lang", code);
        document.documentElement.lang = code;
        if (code === "en") {
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        } else {
          document.cookie = `googtrans=/en/${code}; path=/;`;
        }
        window.location.reload();
      }
    }
  };

  const setLocation = (code: string) => {
    const found = marketLocations.find((m) => m.code === code);
    if (found) {
      setCurrentLocationState(found);
      if (typeof window !== "undefined") {
        localStorage.setItem("vmovexa_location", code);
      }
    }
  };

  return (
    <I18nContext.Provider
      value={{
        currentLanguage,
        currentLocation,
        setLanguage,
        setLocation,
        isModalOpen,
        openModal: () => setIsModalOpen(true),
        closeModal: () => setIsModalOpen(false),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return context;
}
