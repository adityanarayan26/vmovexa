"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCloud,
  FiCpu,
  FiActivity,
  FiWifi,
  FiWifiOff,
  FiZap,
  FiShield,
  FiRadio,
  FiCheckCircle,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";
import { RiCarLine } from "react-icons/ri";

type ExecutionMode = "sync" | "geofence" | "offline";

export function CloudEdgeArchitectureAnimation() {
  const [mode, setMode] = useState<ExecutionMode>("sync");
  const [pulseCount, setPulseCount] = useState(0);

  // Heartbeat pulse counter
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden p-6 sm:p-8 lg:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] group">
      {/* Ambient background glow grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Interactive Mode Controller */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span
              className={`absolute w-full h-full rounded-full animate-ping ${
                mode === "offline" ? "bg-amber-400 opacity-60" : "bg-cyan-400 opacity-75"
              }`}
            />
            <span
              className={`w-2 h-2 rounded-full ${
                mode === "offline" ? "bg-amber-400" : "bg-cyan-400"
              }`}
            />
          </div>
          <span className="text-white/60 tracking-wider uppercase text-[11px]">
            {mode === "sync" && "Continuous Fleet Mesh // Real-Time Bi-Directional Bus"}
            {mode === "geofence" && "Spatial Context Engine // Dynamic Polygon Trigger"}
            {mode === "offline" && "Autonomous Edge Runtime // Zero-Connectivity Local Cache"}
          </span>
        </div>

        {/* Mode Selector Pill Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setMode("sync")}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              mode === "sync"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            Continuous Sync
          </button>
          <button
            type="button"
            onClick={() => setMode("geofence")}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              mode === "geofence"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            Spatial Trigger
          </button>
          <button
            type="button"
            onClick={() => setMode("offline")}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              mode === "offline"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            Offline Mode
          </button>
        </div>
      </div>

      {/* Main Architecture Schematic: Cloud ↔ Conduit ↔ Edge */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        {/* LEFT / TOP NODE: THE CLOUD (THINKS AT SCALE) */}
        <div className="lg:col-span-5 relative">
          <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.08)] group/cloud">
            {/* Header info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                  TIER 01 // CENTRALIZED SCALE
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/40">GLOBAL CLOUD FABRIC</span>
            </div>

            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <FiCloud size={24} className="animate-pulse" />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight text-white uppercase">The Cloud</h4>
                <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  Thinks at Scale
                </div>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-light mb-5">
              Aggregates global fleet models, runs multi-tenant campaign pacing, coordinates policy deployment, and ingests telemetry at planetary throughput.
            </p>

            {/* Microservice Chips */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiLayers className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">Policy Orchestrator</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiDatabase className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">10k+ Fleet Fabric</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiActivity className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">ML Pacing Engine</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiShield className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">Cryptographic Proofs</span>
              </div>
            </div>

            {/* Live Cloud Stat Bar */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>CLOUD STATUS: ACTIVE</span>
              <span className="text-cyan-400 font-semibold">100,000+ EVENTS/S</span>
            </div>
          </div>
        </div>

        {/* CENTER CONDUIT: ANIMATED SYNCHRONIZATION HIGHWAY */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0 relative">
          {/* Animated Bi-directional Lines */}
          <div className="w-full flex lg:flex-col items-center justify-center gap-4 relative">
            {/* Visual Highway Line */}
            <div className="relative w-full lg:w-[3px] h-[3px] lg:h-48 bg-gradient-to-r lg:bg-gradient-to-b from-cyan-400/40 via-white/20 to-indigo-500/40 rounded-full overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              {/* Traveling Pulse 1 (Downlink: Cloud to Edge) */}
              {mode !== "offline" && (
                <motion.div
                  className="absolute w-8 h-[3px] lg:w-[3px] lg:h-8 bg-cyan-400 shadow-[0_0_15px_#22d3ee] rounded-full"
                  animate={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: [-32, 192] }
                      : { x: [-32, 280] }
                  }
                  transition={{
                    duration: mode === "geofence" ? 0.8 : 1.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Traveling Pulse 2 (Uplink: Edge Telemetry to Cloud) */}
              {mode !== "offline" && (
                <motion.div
                  className="absolute w-8 h-[3px] lg:w-[3px] lg:h-8 bg-indigo-400 shadow-[0_0_15px_#818cf8] rounded-full"
                  animate={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: [192, -32] }
                      : { x: [280, -32] }
                  }
                  transition={{
                    duration: mode === "geofence" ? 0.9 : 1.6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.4,
                  }}
                />
              )}
            </div>

            {/* Central Badge */}
            <div className="absolute px-3 py-1.5 rounded-full bg-black/90 border border-white/20 backdrop-blur-xl text-[10px] font-mono whitespace-nowrap shadow-2xl flex items-center gap-1.5 z-20">
              {mode === "offline" ? (
                <>
                  <FiWifiOff className="w-3 h-3 text-amber-400 animate-pulse" />
                  <span className="text-amber-300 font-semibold">CACHED MODE</span>
                </>
              ) : mode === "geofence" ? (
                <>
                  <FiZap className="w-3 h-3 text-indigo-400 animate-bounce" />
                  <span className="text-indigo-300 font-semibold">&lt; 8ms TRIGGER</span>
                </>
              ) : (
                <>
                  <FiWifi className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 font-semibold">5G / SAT SYNC</span>
                </>
              )}
            </div>
          </div>

          <div className="hidden lg:block text-[9px] font-mono text-white/30 uppercase tracking-widest mt-6 text-center">
            {mode === "offline" ? "Zero Network Drop" : "Bidirectional TLS 1.3"}
          </div>
        </div>

        {/* RIGHT / BOTTOM NODE: THE EDGE (ACTS IN MOTION) */}
        <div className="lg:col-span-5 relative">
          <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 shadow-[0_0_40px_rgba(99,102,241,0.08)] group/edge">
            {/* Header info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-400">
                  TIER 02 // IN-MOTION RUNTIME
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/40">VMOVEXA CORE EDGE</span>
            </div>

            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <RiCarLine size={24} className="animate-pulse" />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight text-white uppercase">The Edge</h4>
                <div className="text-xs font-mono text-indigo-400 font-semibold tracking-wider uppercase">
                  Acts in Motion
                </div>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-light mb-5">
              In-vehicle edge runtime operating directly on moving transit fleets. Evaluates spatial coordinates locally with low-latency execution and offline resilience.
            </p>

            {/* Edge Capabilities Chips */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiCpu className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">VMOVEXA CORE OS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiRadio className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">High-Precision GNSS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiZap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">DOOH Screen Sync</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 flex items-center gap-2">
                <FiCheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span className="text-white/80 text-[11px] truncate">Offline Cache 100%</span>
              </div>
            </div>

            {/* Live Edge Stat Bar */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>VEHICLE TELEMETRY: 44 KM/H</span>
              <span className="text-indigo-400 font-semibold">LATENCY: &lt; 10MS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Telemetry Spec Strip */}
      <div className="relative z-10 pt-6 mt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Architecture</div>
          <div className="font-semibold text-white/90">Decoupled Hierarchy</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Scale Dimension</div>
          <div className="font-semibold text-cyan-300">Centralized Cloud</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Motion Dimension</div>
          <div className="font-semibold text-indigo-300">In-Transit Moving Edge</div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Failure Tolerance</div>
          <div className="font-semibold text-emerald-400">Zero-Downtime Cache</div>
        </div>
      </div>
    </div>
  );
}
