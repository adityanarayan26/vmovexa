"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCloud,
  FiCpu,
  FiActivity,
  FiCheckCircle,
  FiLayers,
  FiRadio,
} from "react-icons/fi";
import { RiBusLine } from "react-icons/ri";

type ExecutionMode = "sync" | "geofence" | "offline";

export function CloudEdgeArchitectureAnimation() {
  const [mode, setMode] = useState<ExecutionMode>("sync");

  return (
    <div className="relative w-full rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden p-6 sm:p-8 lg:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] group">
      {/* Ambient background glow grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Top Interactive Mode Controller */}
      <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-2.5 h-2.5">
            <span
              className={`w-2 h-2 rounded-full ${
                mode === "offline" ? "bg-amber-400" : "bg-cyan-400"
              }`}
            />
          </div>
          <span className="text-white/60 tracking-wider uppercase text-[11px]">
            {mode === "sync" && "Real-Time Fleet Mesh Architecture"}
            {mode === "geofence" && "Dynamic Spatial Context Engine"}
            {mode === "offline" && "Autonomous In-Vehicle Edge Runtime"}
          </span>
        </div>

        {/* Mode Selector Pill Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setMode("sync")}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
              mode === "sync"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
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
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]"
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
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                : "text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            Offline Autonomy
          </button>
        </div>
      </div>

      {/* Main Architecture Schematic: Cloud ↔ Conduit ↔ Edge */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        {/* LEFT NODE: THE CLOUD (THINKS AT SCALE) */}
        <div className="lg:col-span-5 relative">
          <div className="relative p-7 rounded-2xl bg-white/[0.02] border border-cyan-500/25 hover:border-cyan-400/50 transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.06)] group/cloud">
            {/* Concept Header */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <FiCloud size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight text-white ">The Cloud</h4>
                <div className="text-xs font-mono text-cyan-400 font-medium tracking-widest uppercase">
                  Thinks at Scale
                </div>
              </div>
            </div>

            {/* One Powerful Technical Statement */}
            <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
              Centralized orchestration engine that models global fleet dynamics, coordinates digital policies, and deploys intelligence across distributed mobility networks.
            </p>

            {/* Clean Capability Highlights */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Global Fleet Topology Modeling</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Dynamic Policy &amp; Campaign Orchestration</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Centralized Telemetry Aggregation</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER CONDUIT: ANIMATED SYNCHRONIZATION HIGHWAY */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 relative">
          <div className="w-full flex lg:flex-col items-center justify-center gap-4 relative">
            {/* Visual Highway Line */}
            <div className="relative w-full lg:w-[2px] h-[2px] lg:h-44 bg-gradient-to-r lg:bg-gradient-to-b from-cyan-400/40 via-white/20 to-indigo-500/40 rounded-full overflow-hidden">
              {/* Traveling Pulse (Downlink: Cloud to Edge) */}
              {mode !== "offline" && (
                <motion.div
                  className="absolute w-8 h-[2px] lg:w-[2px] lg:h-8 bg-cyan-400 shadow-[0_0_12px_#22d3ee] rounded-full"
                  animate={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: [-32, 176] }
                      : { x: [-32, 240] }
                  }
                  transition={{
                    duration: mode === "geofence" ? 0.9 : 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Traveling Pulse (Uplink: Edge to Cloud) */}
              {mode !== "offline" && (
                <motion.div
                  className="absolute w-8 h-[2px] lg:w-[2px] lg:h-8 bg-indigo-400 shadow-[0_0_12px_#818cf8] rounded-full"
                  animate={
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? { y: [176, -32] }
                      : { x: [240, -32] }
                  }
                  transition={{
                    duration: mode === "geofence" ? 1.0 : 1.7,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
              )}
            </div>

            {/* Central Status Indicator */}
            <div className="absolute px-3 py-1 rounded-full bg-black/95 border border-white/15 backdrop-blur-xl text-[10px] font-mono whitespace-nowrap shadow-xl flex items-center gap-1.5 z-20">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  mode === "offline" ? "bg-amber-400" : "bg-cyan-400"
                }`}
              />
              <span className="text-white/80">
                {mode === "offline" ? "Autonomous Cache" : "Live Synchronized"}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT NODE: THE EDGE (ACTS IN MOTION) */}
        <div className="lg:col-span-5 relative">
          <div className="relative p-7 rounded-2xl bg-white/[0.02] border border-indigo-500/25 hover:border-indigo-400/50 transition-all duration-500 shadow-[0_0_30px_rgba(99,102,241,0.06)] group/edge">
            {/* Concept Header */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <RiBusLine size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight text-white ">The Edge</h4>
                <div className="text-xs font-mono text-indigo-400 font-medium tracking-widest uppercase">
                  Acts in Motion
                </div>
              </div>
            </div>

            {/* One Powerful Technical Statement */}
            <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
              Vehicle-side runtime that evaluates spatial coordinates, synchronizes digital screens, and triggers local logic instantly—with 100% offline autonomy.
            </p>

            {/* Clean Capability Highlights */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Real-Time Spatial Context Engine</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Multi-Screen Display Synchronization</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Zero-Latency Offline Execution</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Axiom */}
      <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <span className="text-white/40 uppercase tracking-widest text-[11px]">
          Core Architectural Principle
        </span>
        <span className="text-white/75 font-normal text-center sm:text-right">
          The cloud orchestrates centralized rules. The edge executes them locally in motion.
        </span>
      </div>
    </div>
  );
}
