"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  Lock,
  Unlock,
  Eye,
  CheckCircle2,
  Play,
  RotateCcw,
  Zap,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
  Radio,
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

  // Auto-play cycle between normal and emergency every 9 seconds if autoPlay is enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setMode(mode === "normal" ? "emergency" : "normal");
    }, 9000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, mode]);

  // Handle phase steps when entering emergency
  useEffect(() => {
    if (mode === "emergency") {
      setStepPhase(1); // 0s: Emergency signal received
      const t1 = setTimeout(() => setStepPhase(2), 700); // 0.7s: Display transparent
      const t2 = setTimeout(() => setStepPhase(3), 1400); // 1.4s: Latch disengages
      const t3 = setTimeout(() => setStepPhase(4), 2200); // 2.2s: Door opens & egress
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      setStepPhase(1);
    }
  }, [mode]);

  return (
    <div className="w-full rounded-[2rem] bg-[#07090e] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative select-none">
      {/* Simulation Controls Header */}
      <div className="px-5 py-4 bg-[#0a0d14] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 relative z-30">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              mode === "normal" ? "bg-cyan-400 shadow-[0_0_10px_#06b6d4]" : "bg-rose-500 animate-ping shadow-[0_0_12px_#f43f5e]"
            }`}
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
            {mode === "normal" ? "STATE: COMMERCIAL REVENUE MODE" : "STATE: EMERGENCY FAILSAFE TRIGGERED"}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10">
            SIMULATION V4.2
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher Buttons */}
          <div className="inline-flex rounded-xl p-1 bg-black/60 border border-white/10">
            <button
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
              Normal Display
            </button>
            <button
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
              Trigger Emergency
            </button>
          </div>

          {/* Schematic Diagram Toggle */}
          <button
            onClick={() => setShowSchematic(!showSchematic)}
            title="Toggle between Live Simulation and Architecture Blueprint"
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              showSchematic
                ? "bg-purple-600 text-white border-purple-500"
                : "bg-white/[0.04] text-zinc-300 border-white/10 hover:bg-white/[0.08]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{showSchematic ? "Live Sim" : "Blueprint"}</span>
          </button>
        </div>
      </div>

      {/* Main Simulation Viewport */}
      {showSchematic ? (
        <div className="relative w-full h-[380px] sm:h-[440px] bg-black flex items-center justify-center p-4">
          <Image
            src="/images/2.jpg"
            alt="Smart Emergency Exit Architecture Blueprint"
            fill
            className="object-contain p-4"
          />
        </div>
      ) : (
        <div className="relative w-full h-[380px] sm:h-[440px] overflow-hidden bg-gradient-to-b from-[#06080e] via-[#090d16] to-[#04060a]">
          {/* Ambient Lighting Background: Changes dramatically based on mode */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              mode === "normal"
                ? "opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"
                : "opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.18)_0%,transparent_70%)]"
            }`}
          />

          {/* Emergency Alert Strobes along top & bottom */}
          {mode === "emergency" && (
            <>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 animate-pulse z-20 shadow-[0_0_20px_#f43f5e]" />
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 animate-pulse z-20 shadow-[0_0_20px_#f43f5e]" />
            </>
          )}

          {/* BACKGROUND LAYER: The Outside Street World / Rescue Team */}
          {/* In Normal mode, this is hidden by the opaque DOOH content. In Emergency mode, it becomes 100% visible through the transparent glass! */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            {/* Street / Road Horizon Backdrop */}
            <div className="absolute inset-0 bg-[#070b14] overflow-hidden">
              {/* Outside City Lights / Street Asphalt */}
              <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0e1726] to-transparent border-t border-cyan-500/20" />
              <div className="absolute bottom-12 inset-x-0 h-[2px] bg-dashed-line opacity-40 bg-[linear-gradient(90deg,#3b82f6_50%,transparent_50%)] bg-[size:24px_2px]" />

              {/* Outside Rescue Team / First Responders (Visible through transparent glass in emergency) */}
              <div
                className={`absolute bottom-16 right-16 sm:right-28 transition-all duration-700 flex items-end gap-3 ${
                  mode === "emergency" ? "opacity-90 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                {/* Emergency Response Vehicle with flashing beacon */}
                <div className="w-24 sm:w-32 h-14 rounded-lg bg-slate-900 border border-red-500/40 relative flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                  <div className="absolute -top-3 w-5 h-3 rounded-full bg-red-500 animate-ping shadow-[0_0_15px_#ef4444]" />
                  <div className="text-[9px] font-mono text-red-400 font-bold tracking-widest text-center">
                    RESCUE UNIT<br />
                    <span className="text-white text-[8px]">ACTIVE EGRESS</span>
                  </div>
                </div>

                {/* Responders Silhouette */}
                <div className="flex items-center gap-1.5 text-rose-400">
                  <div className="w-5 h-14 rounded-t-full bg-rose-500/70 shadow-[0_0_10px_#f43f5e]" />
                  <div className="w-5 h-16 rounded-t-full bg-rose-400/80 shadow-[0_0_12px_#f43f5e]" />
                </div>
              </div>

              {/* Inside Passengers waiting to evacuate (Visible through transparent glass in emergency) */}
              <div
                className={`absolute bottom-16 left-16 sm:left-24 transition-all duration-700 flex items-end gap-2 ${
                  mode === "emergency" ? "opacity-90 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="w-4 h-12 rounded-t-full bg-cyan-400/70 shadow-[0_0_8px_#06b6d4]" />
                <div className="w-4 h-15 rounded-t-full bg-indigo-400/80 shadow-[0_0_8px_#6366f1]" />
                <div className="w-4 h-11 rounded-t-full bg-purple-400/70 shadow-[0_0_8px_#a855f7]" />
              </div>
            </div>
          </div>

          {/* STAGE CENTER: The Bus Wall Frame & Smart Emergency Door Aperture */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-12">
            {/* Bus Wall Outer Chassis */}
            <div className="w-full max-w-xl h-[310px] sm:h-[350px] rounded-2xl bg-[#0b0f19] border-2 border-white/15 shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] relative flex items-center justify-center p-3 sm:p-5 overflow-hidden">
              {/* Bus Exterior Decal Details */}
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <span className="font-mono text-[9px] text-zinc-500 tracking-wider">TRANSIT VEHICLE // BAY-04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Door Frame Surround (Glows Red in Emergency) */}
              <div
                className={`w-[220px] sm:w-[260px] h-[270px] sm:h-[300px] rounded-xl border-2 transition-all duration-700 relative p-1.5 flex items-center justify-center ${
                  mode === "normal"
                    ? "border-cyan-500/40 bg-black/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                    : "border-red-500 bg-red-950/20 shadow-[0_0_35px_rgba(239,68,68,0.45)] ring-4 ring-red-500/20"
                }`}
              >
                {/* Emergency Sign Header on Top of Door */}
                <div
                  className={`absolute -top-3.5 px-3 py-0.5 rounded-full border text-[9px] font-mono tracking-widest font-bold uppercase transition-all duration-500 z-30 shadow-md flex items-center gap-1.5 ${
                    mode === "normal"
                      ? "bg-slate-900 border-cyan-500/40 text-cyan-400"
                      : "bg-red-600 border-red-400 text-white animate-bounce shadow-[0_0_15px_#ef4444]"
                  }`}
                >
                  {mode === "normal" ? (
                    <>
                      <Lock className="w-2.5 h-2.5 text-cyan-400" />
                      SMART EXIT • LOCKED
                    </>
                  ) : (
                    <>
                      <Unlock className="w-2.5 h-2.5 text-white" />
                      FAILSAFE OPEN • EVACUATION
                    </>
                  )}
                </div>

                {/* THE SMART DOOR LEAF (Physical Moving Glass Door) */}
                <div
                  className={`w-full h-full rounded-lg relative overflow-hidden transition-all duration-1000 ${
                    mode === "emergency" && stepPhase >= 3
                      ? "translate-x-6 sm:translate-x-10 -rotate-3 scale-[0.98] shadow-[-10px_0_30px_rgba(0,0,0,0.8)] border-2 border-red-400"
                      : "translate-x-0 rotate-0 border border-white/20"
                  }`}
                  style={{ transformOrigin: "right center" }}
                >
                  {/* GLASS LAYER 1: 100% Transparent Base Glass */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      mode === "normal"
                        ? "bg-black"
                        : "bg-cyan-500/[0.04] backdrop-blur-[0.5px] border border-cyan-400/30"
                    }`}
                  >
                    {/* Glass Reflection Sheen in Emergency Mode to show real glass clarity */}
                    {mode === "emergency" && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* GLASS LAYER 2: Commercial DOOH Video Content (ACTIVE in Normal Mode, OVERRIDDEN & DISSOLVED in Emergency Mode) */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 overflow-hidden flex flex-col justify-between p-3.5 z-10 ${
                      mode === "normal"
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                    style={{
                      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)",
                    }}
                  >
                    {/* High-Impact Commercial Display Visual simulation */}
                    <div className="absolute inset-0 opacity-80 mix-blend-screen overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-cyan-400/30 blur-2xl animate-pulse" />
                      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-pink-500/30 blur-2xl animate-pulse" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />
                    </div>

                    {/* Top Ad Ticker */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-black/60 border border-cyan-400/40 text-[9px] font-mono font-semibold text-cyan-300">
                        VMOVEXA DOOH
                      </span>
                      <span className="text-[8px] font-mono text-cyan-200/80 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/20">
                        LIVE 4K MATRIX
                      </span>
                    </div>

                    {/* Center Brand Advertisement Display */}
                    <div className="relative z-10 text-center my-auto py-2">
                      <div className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest text-pink-400 mb-1">
                        <Sparkles className="w-3 h-3 text-pink-400" /> SPONSORED CAMPAIGN
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-pink-300 uppercase tracking-tight leading-tight">
                        REVENUE GENERATING
                      </h4>
                      <p className="text-[10px] text-zinc-300 mt-1 font-mono">
                        Targeted Digital Advertising Playing on Emergency Glass
                      </p>
                    </div>

                    {/* Bottom Telemetry Bar */}
                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[8px] font-mono text-zinc-400">
                      <span>AUDIENCE: 28.4K IMP/H</span>
                      <span className="text-cyan-400">LOCKED & SECURED</span>
                    </div>
                  </div>

                  {/* EMERGENCY OVERLAY LAYER: Appears immediately upon trigger */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 flex flex-col justify-between p-3.5 z-20 pointer-events-none ${
                      mode === "emergency" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Top Emergency Status */}
                    <div className="flex items-center justify-between">
                      <div className="px-2 py-0.5 rounded bg-red-600/90 text-white text-[9px] font-mono font-bold tracking-widest flex items-center gap-1 shadow-md">
                        <AlertTriangle className="w-3 h-3 text-white" /> FAILSAFE ACTIVE
                      </div>
                      <span className="text-[9px] font-mono text-white bg-black/60 px-2 py-0.5 rounded border border-red-500/50">
                        DISPLAY: TRANSPARENT
                      </span>
                    </div>

                    {/* Center Clear Visual Guidance */}
                    <div className="text-center my-auto bg-black/60 backdrop-blur-md p-3 rounded-xl border border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                      <Eye className="w-6 h-6 text-cyan-300 mx-auto mb-1 animate-pulse" />
                      <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        100% CLEAR OPTICAL GLASS
                      </div>
                      <p className="text-[10px] text-zinc-300 mt-1 leading-snug">
                        Immediate bidirectional visibility: Passengers see escape route, First-responders see inside cabin.
                      </p>
                    </div>

                    {/* Evacuation Directional Arrow */}
                    <div className="flex items-center justify-center gap-2 py-1 bg-green-500/20 rounded border border-green-500/40 text-green-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                      <span>EGRESS ROUTE UNBLOCKED</span>
                      <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Mechanical Failsafe Latch Cylinder (Right Side of Door Frame) */}
                <div
                  className={`absolute right-1 top-1/2 -translate-y-1/2 w-4 h-16 rounded border transition-all duration-500 flex flex-col items-center justify-center gap-1 z-30 ${
                    mode === "normal"
                      ? "bg-slate-800 border-cyan-400 shadow-[0_0_10px_#06b6d4]"
                      : "bg-red-950 border-red-500 translate-x-2 shadow-[0_0_15px_#ef4444]"
                  }`}
                  title="Failsafe Mechanical Deadbolt / Solenoid"
                >
                  <div
                    className={`w-2 h-4 rounded-sm transition-all duration-300 ${
                      mode === "normal" ? "bg-cyan-400" : "bg-red-500 -translate-x-1"
                    }`}
                  />
                  <span className="text-[6px] font-mono text-zinc-300 -rotate-90">
                    {mode === "normal" ? "LOCK" : "FREE"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Overlay Status Toast */}
          <div className="absolute bottom-3 inset-x-4 sm:inset-x-8 z-20 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 font-bold">CORE PRINCIPLE:</span>
              <span className={mode === "normal" ? "text-cyan-400 font-semibold" : "text-rose-400 font-semibold"}>
                {mode === "normal"
                  ? "• 100% Commercial Monetization when closed & moving"
                  : "• Instant Failsafe Transparency & Unlock on Emergency Trigger"}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px] text-zinc-400">
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3 h-3 text-cyan-400" />
                Zero Power Dependency
              </span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Hardware Override Priority</span>
            </div>
          </div>
        </div>
      )}

      {/* 4-Step Technical Pipeline Indicators (Interactive Walkthrough) */}
      <div className="p-4 sm:p-6 bg-[#0a0e17] border-t border-white/[0.08]">
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center justify-between">
          <span>FAILSAFE PROTOCOL WORKFLOW</span>
          <span className="text-zinc-500">SYNCHRONIZED TIMELINE</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {[
            {
              step: "01",
              title: "Signal Override",
              desc: "Accident / crash sensors or manual lever overrides DOOH loop.",
              activeIn: mode === "emergency" && stepPhase >= 1,
              dotColor: "bg-red-500",
            },
            {
              step: "02",
              title: "Glass De-Energizes",
              desc: "Display panel turns 100% crystal-clear transparent in <30ms.",
              activeIn: mode === "emergency" && stepPhase >= 2,
              dotColor: "bg-cyan-400",
            },
            {
              step: "03",
              title: "Failsafe Unlocks",
              desc: "Pneumatic & magnetic latches disengage without electrical power.",
              activeIn: mode === "emergency" && stepPhase >= 3,
              dotColor: "bg-purple-400",
            },
            {
              step: "04",
              title: "Seamless Egress",
              desc: "Door opens wide; outside rescuers and inside passengers coordinate.",
              activeIn: mode === "emergency" && stepPhase >= 4,
              dotColor: "bg-green-400",
            },
          ].map((item, i) => (
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
