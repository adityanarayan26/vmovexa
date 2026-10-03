"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  Lock,
  Unlock,
  Eye,
  ShieldAlert,
  ArrowRight,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

interface SmartEmergencyDoorAnimationProps {
  initialMode?: "normal" | "emergency";
  onModeChange?: (mode: "normal" | "emergency") => void;
  activeModeOverride?: "normal" | "emergency";
}

export function SmartEmergencyDoorAnimation({
  initialMode = "normal",
  onModeChange,
  activeModeOverride,
}: SmartEmergencyDoorAnimationProps) {
  const [internalMode, setInternalMode] = useState<"normal" | "emergency">(initialMode);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [stepPhase, setStepPhase] = useState<number>(1);
  const [showSchematic, setShowSchematic] = useState<boolean>(false);

  const mode = activeModeOverride !== undefined ? activeModeOverride : internalMode;

  const setMode = (newMode: "normal" | "emergency") => {
    setInternalMode(newMode);
    if (onModeChange) onModeChange(newMode);
  };

  // Auto-play toggle: cycles smoothly between modes every 9 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setMode(mode === "normal" ? "emergency" : "normal");
    }, 9000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, mode]);

  // Sequenced technical progression when emergency is triggered
  useEffect(() => {
    if (mode === "emergency") {
      setStepPhase(1); // 0s: Sensor / Manual override signal
      const t1 = setTimeout(() => setStepPhase(2), 500); // 0.5s: Display de-energizes & turns 100% transparent
      const t2 = setTimeout(() => setStepPhase(3), 1100); // 1.1s: Mechanical & pneumatic latches release
      const t3 = setTimeout(() => setStepPhase(4), 1800); // 1.8s: Dual doors swing outward for egress
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      setStepPhase(1);
    }
  }, [mode]);

  const isDoorSwungOpen = mode === "emergency" && stepPhase >= 3;

  return (
    <div className="w-full rounded-[2rem] bg-[#07090e] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative select-none">
      <style>{`
        @keyframes adShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        .animate-ad-shimmer {
          animation: adShimmer 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes egressFlow {
          0% { opacity: 0.3; transform: translateX(0); }
          50% { opacity: 1; }
          100% { opacity: 0.3; transform: translateX(10px); }
        }
        .animate-egress-arrow {
          animation: egressFlow 1.1s ease-in-out infinite;
        }
      `}</style>

      {/* Top Simulation Control Bar */}
      <div className="px-5 py-3.5 bg-[#0a0d14] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 relative z-30">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              mode === "normal"
                ? "bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
                : "bg-rose-500 animate-ping shadow-[0_0_12px_#f43f5e]"
            }`}
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
            {mode === "normal" ? "Commercial Display Mode" : "Emergency Failsafe Active"}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10">
            {mode === "normal" ? "Dual-Leaf DOOH Active" : "Dual Outward Swing • 100% Clear"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switch Buttons */}
          <div className="inline-flex rounded-xl p-1 bg-black/70 border border-white/10">
            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setShowSchematic(false);
                setMode("normal");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === "normal" && !showSchematic
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Normal</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setShowSchematic(false);
                setMode("emergency");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === "emergency" && !showSchematic
                  ? "bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)] font-semibold animate-pulse"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Emergency</span>
            </button>
          </div>

          {/* Schematic Blueprint Toggle */}
          <button
            type="button"
            onClick={() => setShowSchematic(!showSchematic)}
            title="Toggle between Live Simulation and Architecture Blueprint"
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              showSchematic
                ? "bg-purple-600 text-white border-purple-500 shadow-md"
                : "bg-white/[0.04] text-zinc-300 border-white/10 hover:bg-white/[0.08]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{showSchematic ? "Live Sim" : "Blueprint"}</span>
          </button>
        </div>
      </div>

      {/* Main Simulation Stage Viewport */}
      {showSchematic ? (
        <div className="relative w-full h-[400px] sm:h-[450px] bg-black flex items-center justify-center p-4">
          <Image
            src="/images/2.jpg"
            alt="Smart Emergency Exit Architecture Blueprint"
            fill
            className="object-contain p-4"
          />
        </div>
      ) : (
        <div className="relative w-full h-[400px] sm:h-[450px] overflow-hidden bg-gradient-to-b from-[#05070c] via-[#080c15] to-[#040508] flex flex-col justify-between p-4 sm:p-5">
          {/* Ambient Lighting Background */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              mode === "normal"
                ? "opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]"
                : "opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.2)_0%,transparent_70%)]"
            }`}
          />

          {/* Emergency Alert Perimeter Flashes */}
          {mode === "emergency" && (
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 animate-pulse z-20 shadow-[0_0_20px_#f43f5e]" />
          )}

          {/* TOP HUD ROW: Status Indicators */}
          <div className="relative z-20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">BUS EXIT PORTAL:</span>
              <span
                className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                  mode === "normal"
                    ? "bg-cyan-950/60 border-cyan-500/40 text-cyan-300"
                    : "bg-red-950/60 border-red-500/50 text-red-300 animate-pulse"
                }`}
              >
                {mode === "normal" ? "DUAL-LEAF PLUG DOOR // SEALED" : "OUTWARD SWING // EVACUATION"}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span className="text-zinc-500">PNEUMATIC ACTUATOR:</span>
              <span
                className={`font-bold flex items-center gap-1 ${
                  mode === "normal" ? "text-cyan-400" : "text-emerald-400"
                }`}
              >
                {mode === "normal" ? (
                  <>
                    <Lock className="w-3 h-3 text-cyan-400" /> LOCKED
                  </>
                ) : (
                  <>
                    <Unlock className="w-3 h-3 text-emerald-400" /> DISENGAGED
                  </>
                )}
              </span>
            </div>
          </div>

          {/* CENTER STAGE: Bus Chassis with Real Dual-Leaf Transit Emergency Door Assembly */}
          <div className="relative z-10 w-full max-w-xl mx-auto h-[290px] sm:h-[320px] flex items-center justify-center my-auto">
            {/* Outside World visible behind the bus window in Emergency Mode */}
            <div className="absolute inset-x-2 inset-y-1 rounded-2xl bg-[#090e1a] border border-white/5 overflow-hidden flex items-end justify-between px-6 pb-4">
              {/* Road Asphalt & Distance Markers */}
              <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent border-t border-cyan-500/10" />

              {/* Inside Bus Cabin Silhouettes (Left side window) */}
              <div className="relative z-0 flex items-end gap-1.5 opacity-35">
                <div className="w-4 h-14 rounded-t-lg bg-cyan-600/50" />
                <div className="w-4 h-18 rounded-t-lg bg-indigo-600/50" />
                <span className="font-mono text-[8px] text-zinc-500 ml-1">CABIN</span>
              </div>

              {/* Outside Rescue Squad (Visible on right side in emergency) */}
              <div
                className={`relative z-0 flex items-end gap-2.5 transition-all duration-700 ${
                  mode === "emergency" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                }`}
              >
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-600/80 text-white text-[8px] font-mono font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> RESCUE SQUAD
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 mt-0.5">DIRECT LINE OF SIGHT</div>
                </div>
                <div className="w-5 h-20 rounded-t-lg bg-rose-500/80 shadow-[0_0_12px_#f43f5e]" />
              </div>
            </div>

            {/* THE TALL DUAL-LEAF TRANSIT BUS DOOR FRAME */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Door Surround Frame */}
              <div
                className={`w-[230px] sm:w-[260px] h-[280px] sm:h-[310px] rounded-2xl border-2 transition-all duration-700 relative p-2 flex flex-col justify-between ${
                  mode === "normal"
                    ? "border-cyan-500/40 bg-black/60 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                    : "border-red-500 bg-red-950/20 shadow-[0_0_35px_rgba(239,68,68,0.5)] ring-4 ring-red-500/20"
                }`}
              >
                {/* Door Frame Top Header Badge */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full border text-[8.5px] font-mono tracking-wider font-bold uppercase transition-all duration-500 z-40 shadow-md flex items-center gap-1.5 whitespace-nowrap ${
                    mode === "normal"
                      ? "bg-slate-900 border-cyan-500/40 text-cyan-400"
                      : "bg-red-600 border-red-400 text-white animate-bounce shadow-[0_0_15px_#ef4444]"
                  }`}
                >
                  {mode === "normal" ? (
                    <>
                      <Lock className="w-2.5 h-2.5 text-cyan-400" />
                      DUAL-LEAF SMART EXIT // LOCKED
                    </>
                  ) : (
                    <>
                      <Unlock className="w-2.5 h-2.5 text-white" />
                      FAILSAFE OUTWARD SWING // EGRESS
                    </>
                  )}
                </div>

                {/* TOP ROTARY MECHANISM (Mechanical arms & chassis mounts like in reference photo) */}
                <div className="w-full h-4 relative flex items-center justify-between px-1 z-30">
                  {/* Top Left Chassis Mount & Rotary Bracket */}
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2.5 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-sm shadow-sm" />
                    <div
                      className={`h-1 rounded-full bg-gradient-to-r from-zinc-200 via-white to-zinc-400 transition-all duration-700 origin-left ${
                        isDoorSwungOpen ? "w-10 -rotate-12" : "w-14 rotate-0"
                      }`}
                    />
                  </div>

                  {/* Top Right Chassis Mount & Rotary Bracket */}
                  <div className="flex items-center gap-1">
                    <div
                      className={`h-1 rounded-full bg-gradient-to-r from-zinc-400 via-white to-zinc-200 transition-all duration-700 origin-right ${
                        isDoorSwungOpen ? "w-10 rotate-12" : "w-14 rotate-0"
                      }`}
                    />
                    <div className="w-2 h-2.5 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-sm shadow-sm" />
                  </div>
                </div>

                {/* THE DUAL-LEAF SWINGING DOOR ASSEMBLY */}
                <div className="relative w-full flex-1 flex items-center justify-between gap-1 overflow-visible [perspective:900px]">
                  {/* Vertical Rotary Torque Shaft (Left Exterior) */}
                  <div className="absolute left-[-5px] inset-y-0 w-1.5 rounded-full bg-gradient-to-r from-zinc-400 via-slate-100 to-zinc-500 z-30 shadow-[0_0_4px_rgba(0,0,0,0.5)]" />

                  {/* Vertical Rotary Torque Shaft (Right Exterior) */}
                  <div className="absolute right-[-5px] inset-y-0 w-1.5 rounded-full bg-gradient-to-r from-zinc-400 via-slate-100 to-zinc-500 z-30 shadow-[0_0_4px_rgba(0,0,0,0.5)]" />

                  {/* Center Evacuation Corridor Guide (Visible when doors swing open) */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 z-10 pointer-events-none ${
                      isDoorSwungOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] text-center">
                      <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-mono text-[9px] font-bold tracking-widest uppercase">
                        <span>OPEN EVACUATION APERTURE</span>
                        <ArrowRight className="w-3 h-3 animate-egress-arrow" />
                      </div>
                      <div className="text-[8px] font-mono text-zinc-300 mt-0.5">
                        Clear Bidirectional Ground Egress
                      </div>
                    </div>
                  </div>

                  {/* ===== LEFT DOOR LEAF ===== */}
                  <div
                    className={`relative w-[48.5%] h-full rounded-lg bg-zinc-950 border transition-all duration-1000 overflow-hidden flex flex-col p-1.5 shadow-md ${
                      isDoorSwungOpen
                        ? "border-red-400 shadow-[-12px_0_25px_rgba(0,0,0,0.9)]"
                        : "border-zinc-700 shadow-none"
                    }`}
                    style={{
                      transformOrigin: "left center",
                      transform: isDoorSwungOpen
                        ? "perspective(800px) rotateY(-52deg) translateX(-6px)"
                        : "perspective(800px) rotateY(0deg) translateX(0)",
                    }}
                  >
                    {/* Leaf Glass Window Pane */}
                    <div className="relative w-full h-full rounded-md overflow-hidden bg-black/80 border border-white/10 flex flex-col justify-between p-2">
                      {/* Base Clear Optical Glass (Always present) */}
                      <div className="absolute inset-0 bg-cyan-400/[0.04] backdrop-blur-[0.5px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                      </div>

                      {/* DOOH Active Layer (Left Pane) */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 flex flex-col justify-between p-2.5 z-10 ${
                          mode === "normal" ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                        style={{
                          background: "linear-gradient(135deg, #090e18 0%, #15102a 60%, #1e0926 100%)",
                        }}
                      >
                        {/* Shimmer Light Bar */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] animate-ad-shimmer" />
                        </div>

                        <div className="flex items-center justify-between text-[7px] font-mono">
                          <span className="px-1.5 py-0.5 rounded bg-black/60 border border-cyan-400/40 text-cyan-300 font-bold">
                            DOOH L-PANEL
                          </span>
                        </div>

                        <div className="my-auto text-left py-1">
                          <div className="inline-flex items-center gap-1 text-[7.5px] font-mono text-cyan-300 uppercase tracking-wider mb-0.5">
                            <Sparkles className="w-2 h-2 text-cyan-300" />
                            DOOH ACTIVE
                          </div>
                          <div className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-tight leading-tight">
                            VMOVEXA <br />
                            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                              REVENUE
                            </span>
                          </div>
                        </div>

                        <div className="text-[7px] font-mono text-zinc-400 border-t border-white/10 pt-1">
                          TRANSIT MEDIA
                        </div>
                      </div>

                      {/* Emergency Clear Guidance (Left Pane) */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 flex flex-col justify-between p-2 z-20 pointer-events-none ${
                          mode === "emergency" ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="px-1.5 py-0.5 rounded bg-red-600/90 text-white text-[7.5px] font-mono font-bold tracking-wider">
                          100% CLEAR
                        </span>
                        <div className="my-auto text-center">
                          <Eye className="w-4 h-4 text-cyan-300 mx-auto mb-1 animate-pulse" />
                          <span className="text-[8px] font-mono text-white font-bold uppercase">
                            SEE OUTSIDE
                          </span>
                        </div>
                        <div className="text-[7px] font-mono text-emerald-400">
                          SWUNG OUT
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== RIGHT DOOR LEAF ===== */}
                  <div
                    className={`relative w-[48.5%] h-full rounded-lg bg-zinc-950 border transition-all duration-1000 overflow-hidden flex flex-col p-1.5 shadow-md ${
                      isDoorSwungOpen
                        ? "border-red-400 shadow-[12px_0_25px_rgba(0,0,0,0.9)]"
                        : "border-zinc-700 shadow-none"
                    }`}
                    style={{
                      transformOrigin: "right center",
                      transform: isDoorSwungOpen
                        ? "perspective(800px) rotateY(52deg) translateX(6px)"
                        : "perspective(800px) rotateY(0deg) translateX(0)",
                    }}
                  >
                    {/* Leaf Glass Window Pane */}
                    <div className="relative w-full h-full rounded-md overflow-hidden bg-black/80 border border-white/10 flex flex-col justify-between p-2">
                      {/* Base Clear Optical Glass (Always present) */}
                      <div className="absolute inset-0 bg-cyan-400/[0.04] backdrop-blur-[0.5px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                      </div>

                      {/* DOOH Active Layer (Right Pane) */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 flex flex-col justify-between p-2.5 z-10 ${
                          mode === "normal" ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                        style={{
                          background: "linear-gradient(135deg, #15102a 0%, #1a0b27 50%, #280b2a 100%)",
                        }}
                      >
                        {/* Shimmer Light Bar */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] animate-ad-shimmer" />
                        </div>

                        <div className="flex items-center justify-end text-[7px] font-mono">
                          <span className="px-1.5 py-0.5 rounded bg-pink-950/60 border border-pink-500/30 text-pink-300 font-bold">
                            4K MATRIX
                          </span>
                        </div>

                        <div className="my-auto text-right py-1">
                          <div className="inline-flex items-center gap-1 text-[7.5px] font-mono text-pink-300 uppercase tracking-wider mb-0.5">
                            MONETIZED
                          </div>
                          <div className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-tight leading-tight">
                            TARGETED <br />
                            <span className="bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                              IN MOTION
                            </span>
                          </div>
                        </div>

                        <div className="text-[7px] font-mono text-cyan-400 text-right border-t border-white/10 pt-1">
                          LOCKED • SECURE
                        </div>
                      </div>

                      {/* Emergency Clear Guidance (Right Pane) */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 flex flex-col justify-between p-2 z-20 pointer-events-none ${
                          mode === "emergency" ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="text-right">
                          <span className="px-1.5 py-0.5 rounded bg-red-600/90 text-white text-[7.5px] font-mono font-bold tracking-wider">
                            TRANSPARENT
                          </span>
                        </div>
                        <div className="my-auto text-center">
                          <Eye className="w-4 h-4 text-cyan-300 mx-auto mb-1 animate-pulse" />
                          <span className="text-[8px] font-mono text-white font-bold uppercase">
                            RESCUE VISIBLE
                          </span>
                        </div>
                        <div className="text-[7px] font-mono text-emerald-400 text-right">
                          SWUNG OUT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM PNEUMATIC ACTUATOR CYLINDERS (Dual Piston Rods like in reference photo) */}
                <div className="w-full h-5 relative flex items-center justify-between px-1 z-30 mt-1">
                  {/* Left Pneumatic Piston Cylinder */}
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-3 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-sm shadow-sm" />
                    {/* Cylinder Body */}
                    <div className="w-12 h-2.5 rounded-sm bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-600 relative overflow-hidden flex items-center">
                      <div
                        className={`h-1.5 rounded-sm bg-gradient-to-r from-zinc-200 to-zinc-400 transition-all duration-700 ${
                          isDoorSwungOpen ? "w-8 translate-x-2" : "w-5 translate-x-0"
                        }`}
                      />
                    </div>
                    {/* Linkage Pin */}
                    <div
                      className={`h-1 bg-gradient-to-r from-zinc-300 to-zinc-500 transition-all duration-700 origin-left ${
                        isDoorSwungOpen ? "w-6 rotate-12" : "w-10 rotate-0"
                      }`}
                    />
                  </div>

                  {/* Right Pneumatic Piston Cylinder */}
                  <div className="flex items-center gap-1">
                    {/* Linkage Pin */}
                    <div
                      className={`h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 transition-all duration-700 origin-right ${
                        isDoorSwungOpen ? "w-6 -rotate-12" : "w-10 rotate-0"
                      }`}
                    />
                    {/* Cylinder Body */}
                    <div className="w-12 h-2.5 rounded-sm bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-600 relative overflow-hidden flex items-center justify-end">
                      <div
                        className={`h-1.5 rounded-sm bg-gradient-to-r from-zinc-400 to-zinc-200 transition-all duration-700 ${
                          isDoorSwungOpen ? "w-8 -translate-x-2" : "w-5 translate-x-0"
                        }`}
                      />
                    </div>
                    <div className="w-2.5 h-3 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-sm shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM HUD ROW: Clear Explanation Banner */}
          <div className="relative z-20 px-3.5 py-2 rounded-xl bg-black/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-zinc-500 font-bold">CORE CONCEPT:</span>
              <span className={mode === "normal" ? "text-cyan-400 font-medium" : "text-rose-400 font-medium"}>
                {mode === "normal"
                  ? "Revenue DOOH media while in motion & dual-doors sealed"
                  : "Dual leaves swing outward in 3D & de-energize to 100% transparent glass"}
              </span>
            </div>
            <div className="text-[10px] text-zinc-400 flex items-center gap-1.5">
              <ShieldAlert className="w-3 h-3 text-cyan-400" />
              <span>Zero-Power Pneumatic & Mechanical Release</span>
            </div>
          </div>
        </div>
      )}

      {/* 4-Step Technical Pipeline Indicators (Walkthrough Grid) */}
      <div className="p-4 sm:p-5 bg-[#0a0e17] border-t border-white/[0.08]">
        <div className="text-[10.5px] font-mono uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center justify-between">
          <span>FAILSAFE TIMELINE SEQUENCE</span>
          <span className="text-zinc-500">SYNCHRONIZED HARDWARE PROGRESSION</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {[
            {
              step: "01",
              title: "Signal Override",
              desc: "Accident / crash telemetry immediately overrides the DOOH loop.",
              activeIn: mode === "emergency" && stepPhase >= 1,
              dotColor: "bg-red-500",
            },
            {
              step: "02",
              title: "Glass De-Energizes",
              desc: "Dual display panels turn 100% crystal-clear transparent in <30ms.",
              activeIn: mode === "emergency" && stepPhase >= 2,
              dotColor: "bg-cyan-400",
            },
            {
              step: "03",
              title: "Pneumatics Release",
              desc: "Mechanical & pneumatic actuators disengage without battery power.",
              activeIn: mode === "emergency" && stepPhase >= 3,
              dotColor: "bg-purple-400",
            },
            {
              step: "04",
              title: "Dual Outward Swing",
              desc: "Both door leaves swing open outwards; full egress aperture opens.",
              activeIn: mode === "emergency" && stepPhase >= 4,
              dotColor: "bg-emerald-400",
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                item.activeIn
                  ? "bg-white/[0.06] border-white/25 shadow-sm -translate-y-0.5"
                  : "bg-white/[0.02] border-white/5 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] font-bold text-zinc-400">STAGE {item.step}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.activeIn ? `${item.dotColor} animate-pulse shadow-[0_0_8px_currentColor]` : "bg-zinc-700"
                  }`}
                />
              </div>
              <h5 className={`text-xs font-semibold tracking-tight ${item.activeIn ? "text-white" : "text-zinc-300"}`}>
                {item.title}
              </h5>
              <p className="text-[10px] text-zinc-400 leading-snug mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
