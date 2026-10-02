"use client";

import React, { useState } from "react";
import { GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { SmartEmergencyDoorAnimation } from "@/components/visuals/smart-emergency-door-animation";
import { Zap, AlertTriangle, ArrowRight } from "lucide-react";

export function SmartEmergencyExitSection() {
  const [activeMode, setActiveMode] = useState<"normal" | "emergency">("normal");

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-black">
      <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
        <GsapScrollReveal delay={0.2}>
          <div className="rounded-[2.5rem] bg-[#0a0a0d] border border-white/10 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-8 lg:gap-12 items-center">
              {/* Left Column: Explanatory Copy & Interactive Mode Selectors */}
              <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-center relative z-10 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  SMART EMERGENCY EXIT
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.12]">
                  Revenue When Closed.<br />
                  <span className="bg-gradient-to-r from-[#3b9eff] via-[#8b5cf6] to-[#ec4899] text-transparent bg-clip-text">
                    Safety When Needed.
                  </span>
                </h3>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7 font-normal">
                  A first-of-its-kind concept that transforms the emergency exit into an intelligent digital revenue surface during transit, yet guarantees instant transparency and failsafe egress during any emergency.
                </p>

                {/* Interactive Mode Cards (Click to switch animation) */}
                <div className="space-y-3.5 mb-7">
                  {/* Normal Mode Button */}
                  <button
                    type="button"
                    onClick={() => setActiveMode("normal")}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeMode === "normal"
                        ? "bg-white/[0.07] border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.18)] ring-1 ring-cyan-400/40"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="font-mono text-[11px] text-cyan-400 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${activeMode === "normal" ? "bg-cyan-400 shadow-[0_0_8px_#06b6d4]" : "bg-cyan-400/40"}`} />
                        NORMAL OPERATION
                      </span>
                      {activeMode === "normal" && (
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-bold">
                          ACTIVE SIMULATION
                        </span>
                      )}
                    </div>
                    <div className="text-white/95 text-sm font-medium">
                      Premium content • Digital advertising • Contextual DOOH media
                    </div>
                    <div className="text-xs text-white/50 mt-1 font-mono">
                      Door is locked & exterior generates high-value commercial revenue.
                    </div>
                  </button>

                  {/* Emergency Mode Button */}
                  <button
                    type="button"
                    onClick={() => setActiveMode("emergency")}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeMode === "emergency"
                        ? "bg-rose-950/40 border-rose-500/80 shadow-[0_0_25px_rgba(244,63,94,0.3)] ring-1 ring-rose-500/50"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="font-mono text-[11px] text-rose-400 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${activeMode === "emergency" ? "bg-rose-500 animate-ping shadow-[0_0_10px_#f43f5e]" : "bg-rose-500/40"}`} />
                        EMERGENCY TRIGGERED
                      </span>
                      {activeMode === "emergency" && (
                        <span className="px-2 py-0.5 rounded bg-rose-500/30 text-rose-200 text-[9px] font-bold">
                          ACTIVE SIMULATION
                        </span>
                      )}
                    </div>
                    <div className="text-white/95 text-sm font-medium">
                      Display turns transparent • Exit unlocks • Passengers evacuate
                    </div>
                    <div className="text-xs text-white/50 mt-1 font-mono">
                      Failsafe disengages lock; bidirectional visibility allows instant rescue.
                    </div>
                  </button>
                </div>

                {/* Bottom Badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase text-white/70 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    ONE SURFACE. TWO PURPOSES.
                  </span>
                  <span className="font-mono text-[10px] uppercase text-white/70 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    PATENT-PROTECTED TECHNOLOGY
                  </span>
                  <span className="font-mono text-[10px] uppercase text-cyan-400 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                    VMOVEXA — REINVENTING THE EMERGENCY EXIT.
                  </span>
                </div>
              </div>

              {/* Right Column: Live Interactive Simulation Stage */}
              <div className="lg:col-span-7 w-full order-1 lg:order-2 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                <SmartEmergencyDoorAnimation
                  activeModeOverride={activeMode}
                  onModeChange={(m) => setActiveMode(m)}
                />
              </div>
            </div>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
