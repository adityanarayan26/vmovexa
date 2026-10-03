"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Radio,
  MapPin,
  AlertTriangle,
  ShieldCheck,
  Play,
  Pause,
  Navigation,
  ArrowRight,
  Eye,
  Check,
  HardDrive,
  Cpu,
} from "lucide-react";

export type EcosystemPhase = "PUSH" | "GEOFENCE" | "EMERGENCY" | "PROOF_OF_PLAY";
export type GeofenceZone = "financial" | "luxury" | "tech";
export type EmergencyVisualMode = "broadcast" | "transparent";

interface ZoneData {
  id: GeofenceZone;
  name: string;
  tag: string;
  coordinates: string;
  destinationSign: string;
  adBrand: string;
  adTagline: string;
  adCategory: string;
  adHighlight: string;
  themeColor: string;
  accentColor: string;
  bgGradient: string;
  targetAudience: string;
  dwellAvg: string;
}

const ZONES: Record<GeofenceZone, ZoneData> = {
  financial: {
    id: "financial",
    name: "Financial District Corridor",
    tag: "ZONE A // POLYGON #801",
    coordinates: "37.7749° N, 122.4194° W",
    destinationSign: "17X METRO // FINANCIAL CTR",
    adBrand: "NEXUS GLOBAL CAPITAL",
    adTagline: "Algorithmic Wealth & Zero-Friction Enterprise Liquidity",
    adCategory: "B2B FINTECH",
    adHighlight: "8.42% APY • INSTANT SETTLEMENT",
    themeColor: "from-cyan-500 to-blue-600",
    accentColor: "text-cyan-400",
    bgGradient: "from-cyan-950 via-blue-950/80 to-slate-950",
    targetAudience: "Executive Commuters • C-Suite • Fund Managers",
    dwellAvg: "18.4s Dwell Time",
  },
  luxury: {
    id: "luxury",
    name: "Luxury Promenade & Retail",
    tag: "ZONE B // POLYGON #802",
    coordinates: "37.7833° N, 122.4167° W",
    destinationSign: "17X METRO // LUXURY BLVD",
    adBrand: "AURA HAUTE COUTURE",
    adTagline: "The Solstice Summer Fragrance & Runway Collection",
    adCategory: "LUXURY RETAIL",
    adHighlight: "FLAGSHIP BOUTIQUE • 5TH AVENUE",
    themeColor: "from-amber-400 to-rose-500",
    accentColor: "text-rose-400",
    bgGradient: "from-rose-950 via-amber-950/80 to-stone-950",
    targetAudience: "Shoppers • Tourists • Retail Footfall",
    dwellAvg: "24.2s Dwell Time",
  },
  tech: {
    id: "tech",
    name: "Silicon & AI Innovation Hub",
    tag: "ZONE C // POLYGON #803",
    coordinates: "37.7891° N, 122.4014° W",
    destinationSign: "17X METRO // TECH CAMPUS",
    adBrand: "HYPERION QUANTUM",
    adTagline: "Autonomous Distributed Edge Inference at Light-Speed",
    adCategory: "ENTERPRISE AI",
    adHighlight: "0.2ms LATENCY • 100K TOKENS/SEC",
    themeColor: "from-purple-500 to-indigo-600",
    accentColor: "text-purple-400",
    bgGradient: "from-purple-950 via-indigo-950/80 to-zinc-950",
    targetAudience: "Engineers • Founders • Tech Commuters",
    dwellAvg: "21.0s Dwell Time",
  },
};

export function VmovexaEcosystemAnimation() {
  const [phase, setPhase] = useState<EcosystemPhase>("PUSH");
  const [activeZone, setActiveZone] = useState<GeofenceZone>("financial");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [emergencyMode, setEmergencyMode] = useState<EmergencyVisualMode>("broadcast");
  const [showPoPModal, setShowPoPModal] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"simulation" | "blueprint">("simulation");
  const [progressTimer, setProgressTimer] = useState<number>(0);

  // Auto-cycle through the 4 phases
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setProgressTimer((prev) => {
        if (prev >= 100) {
          setPhase((current) => {
            if (current === "PUSH") return "GEOFENCE";
            if (current === "GEOFENCE") return "EMERGENCY";
            if (current === "EMERGENCY") return "PROOF_OF_PLAY";
            return "PUSH";
          });
          return 0;
        }
        return prev + 2;
      });
    }, 140);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSelectPhase = (newPhase: EcosystemPhase) => {
    setPhase(newPhase);
    setProgressTimer(0);
  };

  // Cycle zones when in geofence mode
  useEffect(() => {
    if (phase !== "GEOFENCE" || !isAutoPlaying) return;

    const zoneKeys: GeofenceZone[] = ["financial", "luxury", "tech"];
    let zoneIndex = zoneKeys.indexOf(activeZone);

    const zoneInterval = setInterval(() => {
      zoneIndex = (zoneIndex + 1) % zoneKeys.length;
      setActiveZone(zoneKeys[zoneIndex]);
    }, 3200);

    return () => clearInterval(zoneInterval);
  }, [phase, isAutoPlaying, activeZone]);

  const zone = ZONES[activeZone];

  return (
    <div className="w-full rounded-[2.5rem] bg-[#03060c] border border-cyan-500/25 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col relative select-none font-sans text-white">
      {/* 100% Mathematically Seamless Infinite Animations */}
      <style>{`
        /* SEAMLESS INFINITE ROAD: 0px to -120px exactly matches repeating background tile width */
        @keyframes infiniteRoadScroll {
          0% { background-position-x: 0px; }
          100% { background-position-x: -120px; }
        }
        .animate-seamless-road {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(34, 211, 238, 0.9) 0px,
            rgba(34, 211, 238, 0.9) 45px,
            transparent 45px,
            transparent 120px
          );
          background-size: 120px 3px;
          animation: infiniteRoadScroll 0.75s linear infinite;
        }
        @keyframes infiniteRoadTexture {
          0% { background-position-x: 0px; }
          100% { background-position-x: -60px; }
        }
        .animate-seamless-texture {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.04) 0px,
            rgba(255, 255, 255, 0.04) 1px,
            transparent 1px,
            transparent 60px
          );
          background-size: 60px 100%;
          animation: infiniteRoadTexture 0.75s linear infinite;
        }
        @keyframes busDriveBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-1.2px); }
        }
        .animate-bus-bob {
          animation: busDriveBob 1.6s ease-in-out infinite;
        }
        @keyframes wheelSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-wheel-spin {
          animation: wheelSpin 0.55s linear infinite;
        }
        @keyframes hazardStrobe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .animate-hazard-strobe {
          animation: hazardStrobe 0.7s ease-in-out infinite;
        }
        @keyframes adSheen {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        .animate-ad-sheen {
          animation: adSheen 4.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 01 // TOP HUD: CLEAN, WELL-SPACED CONTROL HEADER                          */}
      {/* ========================================================================= */}
      <div className="px-5 py-4 bg-[#060a14] border-b border-cyan-900/30 flex flex-wrap items-center justify-between gap-4 relative z-30">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex items-center justify-center shrink-0">
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                phase === "EMERGENCY"
                  ? "bg-rose-500 animate-ping shadow-[0_0_12px_#f43f5e]"
                  : phase === "PROOF_OF_PLAY"
                  ? "bg-emerald-400 shadow-[0_0_12px_#34d399]"
                  : "bg-cyan-400 shadow-[0_0_12px_#06b6d4] animate-pulse"
              }`}
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                VMOVEXA ECOSYSTEM SIMULATOR
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                CLOUD-TO-EDGE RUNTIME
              </span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 truncate mt-0.5">
              <span>ACTIVE STAGE: </span>
              <span className="text-cyan-300 font-medium">
                {phase === "PUSH" && "01. VMOVEXA ONE Cloud Campaign Push → Bus NVMe Storage"}
                {phase === "GEOFENCE" && `02. Spatial GNSS Geofencing → Dynamic Ad Switch (${zone.name})`}
                {phase === "EMERGENCY" && "03. Priority L0 Override → Emergency Alert & Clear Glass"}
                {phase === "PROOF_OF_PLAY" && "04. VMOVEXA CORE Hardware Proof of Play (PoP) Generation"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Auto-Play Toggle */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
              isAutoPlaying
                ? "bg-cyan-950/70 border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                : "bg-white/[0.04] border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAutoPlaying ? "Auto Run" : "Manual"}</span>
            {isAutoPlaying && (
              <div className="w-8 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-150"
                  style={{ width: `${progressTimer}%` }}
                />
              </div>
            )}
          </button>

          {/* Live Sim vs Blueprint */}
          <div className="inline-flex rounded-xl p-1 bg-black/70 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("simulation")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                viewMode === "simulation"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Sim View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("blueprint")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                viewMode === "blueprint"
                  ? "bg-purple-600 text-white font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Blueprint
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 02 // 4-PHASE TABS BAR                                                    */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08] bg-[#060a14]/90 backdrop-blur-md">
        {[
          {
            id: "PUSH" as EcosystemPhase,
            step: "01",
            title: "Cloud Push",
            subtitle: "VMOVEXA ONE → Bus",
            icon: Cloud,
          },
          {
            id: "GEOFENCE" as EcosystemPhase,
            step: "02",
            title: "Geofence Switch",
            subtitle: "Dynamic Spatial Corridors",
            icon: MapPin,
          },
          {
            id: "EMERGENCY" as EcosystemPhase,
            step: "03",
            title: "Emergency Override",
            subtitle: "Instant Preemption & Safety",
            icon: AlertTriangle,
          },
          {
            id: "PROOF_OF_PLAY" as EcosystemPhase,
            step: "04",
            title: "Proof of Play (PoP)",
            subtitle: "VMOVEXA CORE Hardware Hash",
            icon: ShieldCheck,
          },
        ].map((item) => {
          const isActive = phase === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectPhase(item.id)}
              className={`p-3.5 sm:p-4 text-left border-r border-white/[0.08] last:border-r-0 transition-all cursor-pointer relative group flex items-center gap-3 ${
                isActive
                  ? "bg-white/[0.07] text-white"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              {isActive && (
                <div
                  className={`absolute top-0 inset-x-0 h-0.5 ${
                    item.id === "EMERGENCY"
                      ? "bg-rose-500 shadow-[0_0_10px_#f43f5e]"
                      : item.id === "PROOF_OF_PLAY"
                      ? "bg-emerald-400 shadow-[0_0_10px_#34d399]"
                      : "bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
                  }`}
                />
              )}

              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform ${
                  isActive
                    ? item.id === "EMERGENCY"
                      ? "bg-rose-500/20 border-rose-500/50 text-rose-400 scale-105"
                      : item.id === "PROOF_OF_PLAY"
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 scale-105"
                      : "bg-cyan-500/20 border-cyan-500/50 text-cyan-300 scale-105"
                    : "bg-white/5 border-white/10 text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] font-bold text-zinc-400">{item.step}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold truncate leading-tight mt-0.5">
                  {item.title}
                </h4>
                <p className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">{item.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 03 // MAIN SIMULATION STAGE                                               */}
      {/* ========================================================================= */}
      {viewMode === "simulation" ? (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#02050b] via-[#050914] to-[#010307] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          {/* Ambient Lighting Background */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              phase === "EMERGENCY"
                ? "opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15)_0%,transparent_70%)]"
                : phase === "PROOF_OF_PLAY"
                ? "opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12)_0%,transparent_70%)]"
                : "opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12)_0%,transparent_70%)]"
            }`}
          />

          {/* Subdued Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* ===================================================================== */}
          {/* LAYER 1: VMOVEXA ONE CLOUD PLATFORM CARD (Spacious & Clean)           */}
          {/* ===================================================================== */}
          <div className="relative z-20 w-full max-w-4xl mx-auto mb-5">
            <div
              className={`p-4 rounded-2xl border transition-all duration-500 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg ${
                phase === "PUSH"
                  ? "bg-cyan-950/50 border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                  : phase === "PROOF_OF_PLAY"
                  ? "bg-emerald-950/50 border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                  : "bg-black/60 border-white/10"
              }`}
            >
              <div className="flex items-center gap-3.5 w-full sm:w-auto">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${
                    phase === "PUSH"
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_#06b6d4]"
                      : "bg-white/5 border-white/10 text-zinc-400"
                  }`}
                >
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white tracking-wide">
                      VMOVEXA ONE Cloud Platform
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                        phase === "PUSH"
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 animate-pulse font-bold"
                          : "bg-white/5 text-zinc-400 border-white/10"
                      }`}
                    >
                      {phase === "PUSH" ? "ACTIVE 5G OTA TRANSMIT" : "FLEET ORCHESTRATION"}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2 mt-1 flex-wrap">
                    <span>TARGET: UNIT #BUS-402X (ROUTE 17)</span>
                    <span>•</span>
                    <span>ENCRYPTION: AES-256 + TLS 1.3</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs w-full sm:w-auto justify-end">
                {phase === "PUSH" && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-900/40 border border-cyan-400/50 text-cyan-300">
                    <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                    <span>Pushing Campaign Payload (14.2 MB)</span>
                  </div>
                )}
                {phase === "GEOFENCE" && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-900/40 border border-blue-400/50 text-blue-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>3 Geofence Polygons Synced</span>
                  </div>
                )}
                {phase === "EMERGENCY" && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-900/40 border border-red-500/60 text-red-300 animate-pulse">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    <span>Priority Emergency Override</span>
                  </div>
                )}
                {phase === "PROOF_OF_PLAY" && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-900/40 border border-emerald-400/50 text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ingesting Signed PoP Hash Receipt</span>
                  </div>
                )}
              </div>
            </div>

            {/* Wireless Pulse Downlink / Uplink Beam */}
            <div className="relative w-full h-8 flex items-center justify-center overflow-hidden">
              {phase === "PUSH" && (
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 15, opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-[10px] font-mono shadow-[0_0_10px_#06b6d4]"
                >
                  <span>▼ OTA AD BUNDLE DOWNLINK</span>
                </motion.div>
              )}
              {phase === "PROOF_OF_PLAY" && (
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: -15, opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[10px] font-mono shadow-[0_0_10px_#34d399]"
                >
                  <span>▲ PROOF OF PLAY VERIFICATION UPLINK</span>
                </motion.div>
              )}
              {phase === "EMERGENCY" && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-500 text-red-300 text-[10px] font-mono shadow-[0_0_12px_#ef4444] animate-pulse">
                  <span>⚠️ PRIORITY L0 INTERRUPT SIGNAL TRANSMITTING</span>
                </div>
              )}
            </div>
          </div>

          {/* ===================================================================== */}
          {/* LAYER 2: SPATIAL CORRIDOR HUD (Clean & Non-overlapping)               */}
          {/* ===================================================================== */}
          <div className="relative z-20 w-full max-w-4xl mx-auto mb-3 flex flex-wrap items-center justify-between gap-3 px-1 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">CURRENT SPATIAL ZONE:</span>
              <span
                className={`font-bold px-2.5 py-0.5 rounded border transition-all ${
                  phase === "GEOFENCE"
                    ? "bg-cyan-950 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                    : "bg-black/60 border-white/10 text-zinc-300"
                }`}
              >
                {zone.tag}
              </span>
              <span className="hidden sm:inline text-zinc-400">({zone.coordinates})</span>
            </div>

            {/* Test Zone Quick Buttons */}
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500 mr-1 hidden sm:inline">TEST GEOFENCE:</span>
              {(["financial", "luxury", "tech"] as GeofenceZone[]).map((zKey) => {
                const isCur = activeZone === zKey;
                return (
                  <button
                    key={zKey}
                    type="button"
                    onClick={() => {
                      setActiveZone(zKey);
                      if (phase !== "GEOFENCE") setPhase("GEOFENCE");
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono capitalize transition-all cursor-pointer border ${
                      isCur
                        ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_10px_#06b6d4]"
                        : "bg-white/5 text-zinc-400 border-white/10 hover:text-white"
                    }`}
                  >
                    {zKey}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================================== */}
          {/* LAYER 3: TRUE TRANSIT BUS VISUAL & SEAMLESS MOVING ROAD               */}
          {/* ===================================================================== */}
          <div className="relative z-10 w-full max-w-4xl mx-auto my-3 flex flex-col items-center">
            {/* Forward Headlight Angled Light Beam (Projecting forward from front bumper) */}
            <div className="absolute right-[-40px] bottom-10 w-72 h-28 bg-gradient-to-r from-cyan-300/30 via-cyan-400/10 to-transparent blur-lg pointer-events-none transform translate-x-12 z-0" />

            {/* THE BUS ASSEMBLY (Unmistakable Transit Bus Side Profile) */}
            <div className="w-full relative z-10 animate-bus-bob">
              {/* Bus Exterior Chassis Body */}
              <div
                className={`w-full rounded-tr-[3.2rem] rounded-tl-2xl rounded-bl-xl rounded-br-2xl border-2 transition-all duration-700 relative bg-gradient-to-r from-[#0a0f1c] via-[#0f1628] to-[#0a101d] shadow-2xl flex flex-col justify-between ${
                  phase === "EMERGENCY"
                    ? "border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.45)] ring-4 ring-red-500/20"
                    : phase === "PROOF_OF_PLAY"
                    ? "border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.25)]"
                    : "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                }`}
              >
                {/* 1. TOP ROOF FAIRING & EQUIPMENT SHROUD */}
                <div className="w-full h-8 px-4 bg-gradient-to-r from-zinc-900 via-slate-800 to-zinc-900 border-b border-white/10 rounded-t-[1.8rem] flex items-center justify-between text-[9px] font-mono text-zinc-400">
                  {/* Roof AC & Battery Shrouds */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-12 h-3.5 rounded bg-zinc-800 border border-zinc-600 flex items-center justify-center shadow-inner">
                        <span className="text-[7px] text-zinc-300 font-bold">HVAC 01</span>
                      </div>
                      <div className="w-20 h-3.5 rounded bg-slate-900 border border-cyan-500/50 flex items-center justify-center shadow-inner">
                        <span className="text-[7px] text-cyan-300 font-bold">EV BATTERY SYSTEM</span>
                      </div>
                    </div>

                    {/* Roof GNSS Antenna with Pulse Ring */}
                    <div className="flex items-center gap-1.5 pl-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
                      <span className="text-zinc-300 font-bold hidden sm:inline">GNSS RTK (±0.2m)</span>
                    </div>
                  </div>

                  {/* Electronic Route Destination LED Display (Mounted in forehead above windshield) */}
                  <div className="px-3.5 py-0.5 rounded bg-black border border-amber-500/60 shadow-[0_0_10px_rgba(245,158,11,0.3)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-amber-400 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider">
                      {zone.destinationSign}
                    </span>
                  </div>

                  {/* Controller Status Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 hidden sm:inline">EDGE CORE:</span>
                    <span className="text-cyan-300 font-bold font-mono">ONLINE</span>
                  </div>
                </div>

                {/* 2. MAIN PASSENGER DECK: EXIT DOORS + LARGE SMART GLASS DISPLAY + FRONT DRIVER CAB */}
                <div className="w-full flex items-stretch p-2.5 sm:p-3 gap-2 sm:gap-2.5">
                  {/* REAR OF BUS: Flat transit tail + Rear Exit Double Doors */}
                  <div className="w-14 sm:w-16 rounded-xl bg-black/85 border border-white/20 p-1 flex flex-col justify-between items-center relative overflow-hidden shrink-0">
                    <div className="w-full text-center text-[7px] font-mono text-zinc-400 border-b border-white/10 pb-0.5">
                      EXIT
                    </div>
                    {/* Double glass doors with vertical partition */}
                    <div className="w-full flex-1 my-1 flex gap-0.5">
                      <div className="w-1/2 h-full rounded bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center">
                        <div className="w-0.5 h-12 bg-cyan-400/50 rounded-full" />
                      </div>
                      <div className="w-1/2 h-full rounded bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-center">
                        <div className="w-0.5 h-12 bg-cyan-400/50 rounded-full" />
                      </div>
                    </div>
                    {/* Rear Vertical Red LED Taillight */}
                    <div className="w-full h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                  </div>

                  {/* CENTER PANORAMIC SMART GLASS DOOH DISPLAY (The Core Innovation) */}
                  <div className="flex-1 rounded-2xl relative overflow-hidden bg-black border border-white/20 min-h-[200px] sm:min-h-[225px] flex flex-col justify-between p-3.5 sm:p-4 shadow-inner">
                    {/* Glass Specular Gloss Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none z-30" />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-ad-sheen" />
                    </div>

                    {/* ------------------------------------------------------------- */}
                    {/* SCENARIO 1: PHASE 1 // CLOUD CAMPAIGN PUSH & INGEST            */}
                    {/* ------------------------------------------------------------- */}
                    {phase === "PUSH" && (
                      <div className="relative z-20 w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="px-2.5 py-0.5 rounded bg-black/80 border border-cyan-400/50 text-cyan-300 font-bold flex items-center gap-1.5">
                            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                            5G OTA INGEST IN PROGRESS
                          </span>
                          <span className="text-zinc-400">DEST: IN-VEHICLE NVMe CACHE</span>
                        </div>

                        <div className="my-auto text-center px-2 py-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs mb-2">
                            <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                            <span>VMOVEXA CORE: Ingesting Campaign Bundle #{zone.id.toUpperCase()}</span>
                          </div>
                          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white uppercase">
                            Caching: <span className="gradient-text">{zone.adBrand}</span>
                          </h3>
                          <p className="text-xs text-zinc-300 max-w-md mx-auto mt-1 font-light leading-relaxed">
                            Creative assets, targeted geofence polygons, and play rules downloaded locally.
                            Guarantees 100% continuous playback without cellular buffering.
                          </p>

                          <div className="w-full max-w-sm mx-auto mt-3 h-2 rounded-full bg-white/10 overflow-hidden relative">
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                              animate={{ width: ["15%", "70%", "100%"] }}
                              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 border-t border-white/10 pt-1.5">
                          <span>SHA-256 CHECKSUM: VERIFIED</span>
                          <span className="text-emerald-400 font-bold">READY FOR LOCAL PLAYBACK</span>
                        </div>
                      </div>
                    )}

                    {/* ------------------------------------------------------------- */}
                    {/* SCENARIO 2: PHASE 2 // DYNAMIC GEOFENCE ADVERTISING          */}
                    {/* ------------------------------------------------------------- */}
                    {phase === "GEOFENCE" && (
                      <div className="relative z-20 w-full h-full flex flex-col justify-between">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${zone.bgGradient} opacity-95 transition-all duration-700 -z-10`}
                        />

                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold flex items-center gap-1.5 shadow-md">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            DOOH SMART GLASS // {zone.name.toUpperCase()}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-cyan-300 text-[9px]">
                            {zone.targetAudience}
                          </span>
                        </div>

                        <div className="my-auto px-2 sm:px-4 py-2 text-left">
                          <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-white/10 border border-white/20 text-white mb-1.5">
                            {zone.adCategory}
                          </div>
                          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                            {zone.adBrand}
                          </h2>
                          <p className="text-xs sm:text-sm text-white/90 max-w-lg mt-1 font-light leading-snug">
                            {zone.adTagline}
                          </p>
                          <div className="mt-2 text-[10px] font-mono font-semibold text-cyan-300">
                            ★ {zone.adHighlight}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-mono border-t border-white/20 pt-1.5 text-white/80 bg-black/40 backdrop-blur-sm px-2 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-300 font-bold">SPATIAL TRIGGER:</span>
                            <span>{zone.coordinates}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">LOCAL LATENCY:</span>
                            <span>&lt;8ms (FROM ONBOARD NVMe)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ------------------------------------------------------------- */}
                    {/* SCENARIO 3: PHASE 3 // EMERGENCY OVERRIDE & SAFETY MODE      */}
                    {/* ------------------------------------------------------------- */}
                    {phase === "EMERGENCY" && (
                      <div className="relative z-20 w-full h-full flex flex-col justify-between">
                        {emergencyMode === "broadcast" ? (
                          <>
                            <div className="absolute inset-0 bg-red-950/90 border-4 border-red-600 animate-hazard-strobe -z-10" />

                            <div className="flex items-center justify-between text-[10px] font-mono">
                              <span className="px-2.5 py-1 rounded bg-red-600 text-white font-extrabold flex items-center gap-1.5 shadow-[0_0_15px_#f43f5e] animate-pulse">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                PRIORITY L0 OVERRIDE ACTIVE
                              </span>
                              <button
                                type="button"
                                onClick={() => setEmergencyMode("transparent")}
                                className="px-2 py-0.5 rounded bg-black/70 border border-white/20 text-zinc-300 hover:text-white text-[9px] cursor-pointer"
                              >
                                View Clear Glass Mode →
                              </button>
                            </div>

                            <div className="my-auto text-center px-2 py-2">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/70 border border-red-500 text-red-200 font-mono text-xs mb-1.5 animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                                <span>CIVIL DEFENSE / MUNICIPAL DISPATCH</span>
                              </div>
                              <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                ⚠️ FLASH FLOOD ALERT: LOWER CORRIDOR CLOSED
                              </h3>
                              <p className="text-xs sm:text-sm text-red-100 max-w-lg mx-auto mt-1 font-medium leading-tight">
                                Transit Bus diverted to elevated corridor. Commercial advertising
                                suspended instantaneously. Emergency guidance broadcast active.
                              </p>
                            </div>

                            <div className="flex items-center justify-between text-[9px] font-mono bg-black/60 border-t border-red-500/40 p-1.5 text-red-300">
                              <span>HARDWARE PREEMPTION: &lt;10ms</span>
                              <span>ADVERTISER BILLING: MUTED / HALTED</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-cyan-400/[0.04] backdrop-blur-[0.5px] border-2 border-emerald-500/50 -z-10" />

                            <div className="flex items-center justify-between text-[10px] font-mono">
                              <span className="px-2.5 py-1 rounded bg-emerald-600/90 text-white font-extrabold flex items-center gap-1.5 shadow-[0_0_12px_#10b981]">
                                <Eye className="w-3.5 h-3.5" />
                                100% OPTICAL CLEAR GLASS
                              </span>
                              <button
                                type="button"
                                onClick={() => setEmergencyMode("broadcast")}
                                className="px-2 py-0.5 rounded bg-black/70 border border-white/20 text-zinc-300 hover:text-white text-[9px] cursor-pointer"
                              >
                                ← View Alert Broadcast
                              </button>
                            </div>

                            <div className="my-auto text-center px-2 py-2">
                              <h4 className="text-base sm:text-xl font-bold text-white uppercase tracking-wider">
                                ZERO-POWER FAILSAFE DISENGAGED
                              </h4>
                              <p className="text-xs text-zinc-300 max-w-md mx-auto mt-1 font-light">
                                Display de-energized into completely transparent window glass. Direct
                                line-of-sight for passengers inside and emergency rescue personnel.
                              </p>
                              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono">
                                <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                                <span>PASSENGER EGRESS WAYFINDING ACTIVE</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[9px] font-mono bg-black/60 p-1.5 text-emerald-300 border-t border-white/10">
                              <span>OPTICAL TRANSPARENCY: 100% CRYSTAL CLEAR</span>
                              <span>POWER DRAW: 0 WATTS (FAILSAFE PASSIVE)</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* ------------------------------------------------------------- */}
                    {/* SCENARIO 4: PHASE 4 // PROOF OF PLAY (PoP) GENERATION        */}
                    {/* ------------------------------------------------------------- */}
                    {phase === "PROOF_OF_PLAY" && (
                      <div className="relative z-20 w-full h-full flex flex-col justify-between">
                        <div className="absolute inset-0 bg-[#040e16]/95 border-2 border-emerald-400/60 -z-10" />

                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-extrabold flex items-center gap-1.5 shadow-[0_0_12px_#34d399]">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            VMOVEXA CORE // PROOF OF PLAY ENGINE
                          </span>
                          <span className="text-emerald-400 font-bold">RECEIPT #POP-8942-X7</span>
                        </div>

                        <div className="my-auto px-2 grid grid-cols-1 sm:grid-cols-3 gap-2 py-2">
                          <div className="p-2 rounded-xl bg-black/60 border border-emerald-500/30 text-left font-mono">
                            <div className="text-[9px] text-zinc-400">HARDWARE SENSORS</div>
                            <div className="text-xs font-bold text-white mt-0.5">2,450 NITS CONFIRMED</div>
                            <div className="text-[9px] text-emerald-400">✔ Optical Feedback Loop</div>
                          </div>
                          <div className="p-2 rounded-xl bg-black/60 border border-emerald-500/30 text-left font-mono">
                            <div className="text-[9px] text-zinc-400">SPATIAL TIMESTAMP</div>
                            <div className="text-xs font-bold text-white mt-0.5">15.00s EXACT DWELL</div>
                            <div className="text-[9px] text-emerald-400">✔ GPS {zone.coordinates}</div>
                          </div>
                          <div className="p-2 rounded-xl bg-black/60 border border-emerald-500/30 text-left font-mono">
                            <div className="text-[9px] text-zinc-400">TPM 2.0 CRYPTO SIGNATURE</div>
                            <div className="text-xs font-bold text-emerald-300 mt-0.5 truncate">
                              SHA256: 7f8a92b...
                            </div>
                            <div className="text-[9px] text-emerald-400">✔ Hardware Signed & Validated</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-mono bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30 text-emerald-300">
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>100% AUDIT-READY IMPRESSION LOGGED</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowPoPModal(true)}
                            className="px-2.5 py-1 rounded bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors cursor-pointer text-[9px]"
                          >
                            Inspect Receipt →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* FRONT OF BUS: AERODYNAMIC RAKED WINDSHIELD + DRIVER CAB + PASSENGER ENTRY DOOR */}
                  <div className="w-20 sm:w-28 rounded-r-3xl rounded-l-xl bg-black/85 border border-white/20 p-1.5 flex flex-col justify-between items-center relative overflow-hidden shrink-0">
                    {/* Top Aero Wing Mirror Camera */}
                    <div className="w-full flex items-center justify-between pb-1 border-b border-white/10">
                      <span className="text-[7px] font-mono text-cyan-300 font-bold">CABIN</span>
                      <div className="w-3 h-1 bg-cyan-400 rounded-full shadow-[0_0_6px_#06b6d4]" title="Digital Aero Mirror Camera" />
                    </div>

                    {/* Sweeping Raked Front Windshield with Driver Silhouette */}
                    <div className="w-full h-16 my-1 rounded-r-2xl rounded-l-md bg-gradient-to-br from-cyan-900/60 via-slate-900 to-black border border-cyan-400/40 relative flex flex-col justify-between p-1.5 overflow-hidden">
                      {/* Driver Silhouette & Steering Wheel */}
                      <div className="flex items-center justify-between">
                        <div className="w-3.5 h-3.5 rounded-full bg-cyan-300/40 border border-cyan-200 self-end shadow-[0_0_8px_#06b6d4]" />
                        <div className="w-2 h-4 border-r-2 border-cyan-400/60 rotate-12" />
                      </div>
                      <div className="w-full h-1 bg-cyan-400/40 rounded-full" />
                    </div>

                    {/* Front Bumper & Dual LED Projector Headlights */}
                    <div className="w-full flex items-center justify-between px-1 pt-1 border-t border-white/10">
                      <div className="w-3 h-2 rounded-sm bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
                      <div className="w-3 h-2 rounded-sm bg-white shadow-[0_0_12px_#ffffff]" />
                    </div>
                  </div>
                </div>

                {/* 3. LOWER CHASSIS SKIRT & WHEEL ARCH WELLS (The Definitive Bus Identifier) */}
                <div className="w-full relative px-6 pt-1 pb-0 flex items-end justify-between">
                  {/* REAR WHEEL ARCH CUTOUT (Cut into the body) */}
                  <div className="relative -mb-4 flex flex-col items-center">
                    {/* Semi-circular Arch Fender Mold */}
                    <div className="w-16 h-8 rounded-t-full bg-black/90 border-t-2 border-x-2 border-zinc-600 relative overflow-hidden flex items-end justify-center">
                      {/* Dark Inner Well Shadow */}
                      <div className="w-14 h-7 rounded-t-full bg-zinc-950 shadow-inner" />
                    </div>
                    {/* The Real Rotating Tire */}
                    <div className="w-14 h-14 rounded-full bg-zinc-900 border-4 border-zinc-700 shadow-2xl flex items-center justify-center relative overflow-hidden -mt-7 z-10">
                      {/* Alloy Rim Spokes with Spin Animation */}
                      <div className="w-full h-full absolute inset-0 flex items-center justify-center animate-wheel-spin">
                        <div className="w-10 h-0.5 bg-zinc-300 rounded-full" />
                        <div className="w-0.5 h-10 bg-zinc-300 rounded-full" />
                        <div className="w-8 h-8 rounded-full border border-zinc-500" />
                      </div>
                      {/* Center Hubcap with Cyan VMOVEXA Glow */}
                      <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_8px_#06b6d4] relative z-20" />
                    </div>
                  </div>

                  {/* CENTER UNDERBODY: Telemetry Computer & Fleet Decals */}
                  <div className="mb-2 flex items-center gap-3">
                    <div className="px-3.5 py-1 rounded-full bg-black/90 border border-cyan-500/40 font-mono text-[9px] text-cyan-300 flex items-center gap-2 shadow-md">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span>VMOVEXA CORE IN-VEHICLE EDGE RUNTIME</span>
                    </div>
                    <span className="hidden sm:inline text-[8px] font-mono text-zinc-500 tracking-wider">
                      UNIT #402X • 100% ELECTRIC
                    </span>
                  </div>

                  {/* FRONT WHEEL ARCH CUTOUT (Cut into the body) */}
                  <div className="relative -mb-4 flex flex-col items-center">
                    {/* Semi-circular Arch Fender Mold */}
                    <div className="w-16 h-8 rounded-t-full bg-black/90 border-t-2 border-x-2 border-zinc-600 relative overflow-hidden flex items-end justify-center">
                      <div className="w-14 h-7 rounded-t-full bg-zinc-950 shadow-inner" />
                    </div>
                    {/* The Real Rotating Tire */}
                    <div className="w-14 h-14 rounded-full bg-zinc-900 border-4 border-zinc-700 shadow-2xl flex items-center justify-center relative overflow-hidden -mt-7 z-10">
                      <div className="w-full h-full absolute inset-0 flex items-center justify-center animate-wheel-spin">
                        <div className="w-10 h-0.5 bg-zinc-300 rounded-full" />
                        <div className="w-0.5 h-10 bg-zinc-300 rounded-full" />
                        <div className="w-8 h-8 rounded-full border border-zinc-500" />
                      </div>
                      <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_8px_#06b6d4] relative z-20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Luminous Neon Chassis Underglow directly onto the road */}
              <div
                className={`w-3/4 mx-auto h-4 rounded-full blur-md transition-all duration-700 mt-2 ${
                  phase === "EMERGENCY"
                    ? "bg-rose-500/60 shadow-[0_0_30px_#f43f5e]"
                    : phase === "PROOF_OF_PLAY"
                    ? "bg-emerald-400/50 shadow-[0_0_25px_#34d399]"
                    : "bg-cyan-400/50 shadow-[0_0_25px_#06b6d4]"
                }`}
              />
            </div>

            {/* =================================================================== */}
            {/* THE ROADWAY (100% MATHEMATICALLY SEAMLESS INFINITE SCROLL)          */}
            {/* =================================================================== */}
            <div className="w-full mt-1 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-t border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col justify-between py-2 px-4 relative">
              {/* Subtle Road Asphalt Surface Texture Motion */}
              <div className="absolute inset-0 animate-seamless-texture pointer-events-none opacity-40" />

              {/* Highway Shoulder Top Line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              {/* Center Lane Dashes (Mathematically Seamless 120px Period) */}
              <div className="w-full h-2 my-1 animate-seamless-road" />

              {/* Highway Shoulder Bottom Line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </div>
          </div>

          {/* ===================================================================== */}
          {/* LAYER 4: INTERACTIVE ACTION BUTTONS (Neat, clean, no overlapping)     */}
          {/* ===================================================================== */}
          <div className="relative z-20 w-full max-w-4xl mx-auto mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-zinc-500 font-bold">INTERACTIVE TRIGGERS:</span>

              {/* Cycle Geofence */}
              <button
                type="button"
                onClick={() => {
                  setPhase("GEOFENCE");
                  setActiveZone(
                    activeZone === "financial" ? "luxury" : activeZone === "luxury" ? "tech" : "financial"
                  );
                }}
                className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Next Geofence Zone</span>
              </button>

              {/* Trigger Emergency */}
              <button
                type="button"
                onClick={() => {
                  setPhase("EMERGENCY");
                  setEmergencyMode("broadcast");
                }}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                  phase === "EMERGENCY"
                    ? "bg-rose-600 text-white border-rose-500 shadow-[0_0_15px_#f43f5e] font-bold"
                    : "bg-red-950/40 border-red-500/40 text-red-300 hover:bg-red-900/60"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Trigger Emergency Override</span>
              </button>

              {/* Proof of Play */}
              <button
                type="button"
                onClick={() => {
                  setPhase("PROOF_OF_PLAY");
                  setShowPoPModal(true);
                }}
                className="px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Generate Proof of Play</span>
              </button>
            </div>

            <div className="text-[11px] text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>VMOVEXA CORE: 100% OFFLINE CAPABLE</span>
            </div>
          </div>
        </div>
      ) : (
        /* ======================================================================= */
        /* BLUEPRINT ARCHITECTURE VIEW (3-Tier Node Topology)                     */
        /* ======================================================================= */
        <div className="relative w-full min-h-[500px] p-6 sm:p-10 bg-[#02050c] flex flex-col justify-between">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                DISTRIBUTED SYSTEM TOPOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Cloud Orchestration → Edge Execution
              </h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto font-light">
                The cloud orchestrates fleets, policies, and ad schedules. In-vehicle edge computers
                execute playback, dead-reckoning, and emergency protocols locally.
              </p>
            </div>

            <div className="space-y-6">
              {/* Tier 1 */}
              <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                      TIER 1 // CLOUD
                    </div>
                    <h4 className="text-lg font-bold text-white">VMOVEXA ONE Platform</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">
                      Ad campaign scheduler, corridor polygons, and Proof of Play compliance ingestion.
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-cyan-500/30 font-mono text-xs text-cyan-300">
                  5G OTA / MQTT
                </div>
              </div>

              {/* Connector */}
              <div className="w-full flex justify-center -my-3">
                <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-indigo-500 animate-pulse" />
              </div>

              {/* Tier 2 */}
              <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-indigo-400">
                      TIER 2 // IN-VEHICLE EDGE
                    </div>
                    <h4 className="text-lg font-bold text-white">VMOVEXA CORE Runtime</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">
                      Autonomous onboard computing. Dual-band GNSS dead-reckoning, local NVMe storage, and
                      sub-millisecond polygon execution.
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-indigo-500/30 font-mono text-xs text-indigo-300">
                  Hardware Irq &lt;10ms
                </div>
              </div>

              {/* Connector */}
              <div className="w-full flex justify-center -my-3">
                <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-emerald-400 animate-pulse" />
              </div>

              {/* Tier 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Smart Glass Window System</h5>
                    <p className="text-[11px] text-zinc-400">
                      High-brightness DOOH in normal mode; 100% transparent glass in emergency egress.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">TPM 2.0 Proof of Play</h5>
                    <p className="text-[11px] text-zinc-400">
                      Optical feedback confirmation + GPS coordinate stamp + SHA256 hardware signature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 04 // 4-STEP PIPELINE TIMELINE GRID                                       */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 bg-[#050913] border-t border-white/[0.08]">
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center justify-between">
          <span>THE 4-PILLAR ECOSYSTEM WORKFLOW</span>
          <span className="text-cyan-400 hidden sm:inline">CLOUD-TO-EDGE SYNCHRONIZATION</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              step: "01",
              title: "Cloud Campaign Push",
              desc: "VMOVEXA ONE packages ad creatives & target corridor polygons, dispatching them OTA over encrypted 5G to vehicle NVMe cache.",
              active: phase === "PUSH",
              color: "text-cyan-300",
              border: "border-cyan-500/50",
            },
            {
              step: "02",
              title: "Dynamic Spatial Geofence",
              desc: "As the bus traverses districts, VMOVEXA CORE GNSS detects polygon entry and swaps the window creative in <8ms with zero buffering.",
              active: phase === "GEOFENCE",
              color: "text-blue-300",
              border: "border-blue-500/50",
            },
            {
              step: "03",
              title: "Emergency L0 Override",
              desc: "Civil defense or accident sensors instantly preempt commercial DOOH. Screen broadcasts evacuation bulletins or de-energizes to 100% clear glass.",
              active: phase === "EMERGENCY",
              color: "text-rose-400",
              border: "border-rose-500/50",
            },
            {
              step: "04",
              title: "Proof of Play (PoP)",
              desc: "VMOVEXA CORE verifies optical lumens, GPS coordinates, and dwell time, signing an immutable SHA-256 receipt sent back to the cloud.",
              active: phase === "PROOF_OF_PLAY",
              color: "text-emerald-300",
              border: "border-emerald-500/50",
            },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => {
                if (item.step === "01") handleSelectPhase("PUSH");
                if (item.step === "02") handleSelectPhase("GEOFENCE");
                if (item.step === "03") handleSelectPhase("EMERGENCY");
                if (item.step === "04") handleSelectPhase("PROOF_OF_PLAY");
              }}
              className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                item.active
                  ? `bg-white/[0.08] ${item.border} shadow-lg -translate-y-1`
                  : "bg-white/[0.02] border-white/5 opacity-70 hover:opacity-100 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                <span className="font-bold text-zinc-400">STAGE {item.step}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.active ? "bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" : "bg-zinc-700"
                  }`}
                />
              </div>
              <h5 className={`text-xs sm:text-sm font-semibold tracking-tight ${item.color}`}>
                {item.title}
              </h5>
              <p className="text-[11px] text-zinc-400 leading-snug mt-1 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL: PROOF OF PLAY AUDIT RECEIPT                                        */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showPoPModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-xl rounded-3xl bg-[#070e17] border border-emerald-500/50 p-6 shadow-[0_20px_70px_rgba(16,185,129,0.3)] relative font-mono text-white"
            >
              <button
                type="button"
                onClick={() => setShowPoPModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 flex items-center justify-center cursor-pointer transition-colors text-sm"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_#34d399]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">VMOVEXA CORE Proof of Play (PoP)</h3>
                  <p className="text-[11px] text-emerald-400">Cryptographically Signed Audit Receipt</p>
                </div>
              </div>

              <div className="space-y-2 text-xs bg-black/60 rounded-2xl p-4 border border-white/10">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Receipt ID:</span>
                  <span className="text-white font-bold">#POP-2026-8942-X7</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Target Vehicle:</span>
                  <span className="text-cyan-300">Fleet Bus #402X (Route 17)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Active Campaign:</span>
                  <span className="text-white font-semibold">{zone.adBrand} ({zone.adCategory})</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Geofence Polygon:</span>
                  <span className="text-white">{zone.tag} - {zone.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">GNSS Coordinates:</span>
                  <span className="text-white">{zone.coordinates}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Dwell Render Time:</span>
                  <span className="text-emerald-400 font-bold">15.000 Seconds (100% Complete)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Optical Feedback Sensor:</span>
                  <span className="text-emerald-400 font-bold">✔ 2,450 Nits Verified Emitted</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-zinc-400">Display Hardware CRC:</span>
                  <span className="text-white">0x4E89B219 (Zero Drop Frames)</span>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-zinc-400 text-[10px] mb-1">TPM 2.0 Cryptographic Signature:</span>
                  <span className="text-[10px] text-cyan-300 bg-black/80 p-2 rounded-lg break-all border border-cyan-500/20">
                    sha256:7f8a92b1049c98ef231a48c909e2304918e9f29104c8104e71930284c0192847a9821
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-[10px] text-zinc-400">STATUS: VERIFIED &amp; BILLABLE</span>
                <button
                  type="button"
                  onClick={() => setShowPoPModal(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Receipt
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
