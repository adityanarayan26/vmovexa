"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCloud, FiCpu, FiMonitor, FiShield, FiBarChart2, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

type FlowState = "SYNC" | "DISPLAY" | "EMERGENCY" | "VERIFY" | "ANALYZE";

export const BlueprintFlowAnimation = () => {
  const [activeState, setActiveState] = useState<FlowState>("SYNC");

  // Auto-play the states
  useEffect(() => {
    const sequence: FlowState[] = ["SYNC", "DISPLAY", "EMERGENCY", "VERIFY", "ANALYZE"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % sequence.length;
      setActiveState(sequence[idx]);
    }, 4500); // Change state every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-3xl bg-[#01080b] border border-cyan-900/40 relative overflow-hidden font-mono flex flex-col shadow-[0_0_50px_rgba(34,211,238,0.05)]">
      {/* Intricate Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "center center"
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "center center"
        }}
      />
      {/* Inner Vignette / Shadow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />

      {/* Header / HUD */}
      <div className="relative z-20 px-6 py-4 border-b border-cyan-900/40 bg-[#01080b]/90 backdrop-blur-md flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="text-cyan-300 text-xs sm:text-sm tracking-[0.2em] font-bold">VMOVEXA ARCHITECTURE</span>
        </div>
        <div className="text-cyan-600 text-[10px] sm:text-xs tracking-widest bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-900/50 hidden sm:block">
          STATE :: {activeState}
        </div>
      </div>

      {/* Main Blueprint Canvas (Flex Layout) */}
      <div className="relative flex-1 p-8 sm:p-16 flex flex-col items-center justify-center z-10 min-h-[500px] gap-8">
        
        {/* ==============================================
            LEVEL 1: VMOVEXA ONE (CLOUD)
        ============================================== */}
        <div className="relative flex flex-col items-center">
          <div className={`relative w-48 sm:w-56 p-4 rounded-xl border-2 transition-all duration-700 backdrop-blur-md flex flex-col items-center ${
            activeState === "SYNC" || activeState === "ANALYZE" 
              ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.2)]" 
              : "border-cyan-900 bg-[#021016]/80"
          }`}>
            <FiCloud className={`mb-2 transition-colors duration-500 ${activeState === "SYNC" || activeState === "ANALYZE" ? "text-cyan-300" : "text-cyan-700"}`} size={28} />
            <div className="text-cyan-300 text-sm font-bold tracking-widest mb-1">VMOVEXA ONE</div>
            <div className="text-cyan-600 text-[9px] uppercase tracking-wider">Cloud Orchestration</div>
          </div>

          {/* Vertical Connector Line 1 */}
          <div className="relative w-[2px] h-12 bg-cyan-900/50">
            <AnimatePresence>
              {activeState === "SYNC" && (
                <motion.div 
                  initial={{ top: 0, opacity: 0 }}
                  animate={{ top: "100%", opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-1.5 h-6 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] rounded-full"
                />
              )}
            </AnimatePresence>
            {activeState === "ANALYZE" && (
              <motion.div 
                initial={{ bottom: 0, opacity: 0 }}
                animate={{ bottom: "100%", opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-6 bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,1)] rounded-full"
              />
            )}
          </div>
        </div>

        {/* ==============================================
            LEVEL 2: VMOVEXA CORE (EDGE)
        ============================================== */}
        <div className="relative flex flex-col items-center w-full max-w-3xl">
          <div className={`relative w-56 sm:w-64 p-4 rounded-xl border-2 transition-all duration-700 backdrop-blur-md flex flex-col items-center z-10 ${
            activeState !== "SYNC" && activeState !== "ANALYZE"
              ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              : "border-cyan-800 bg-[#021016]/80"
          }`}>
            <FiCpu className={`mb-2 transition-colors duration-500 ${activeState !== "SYNC" && activeState !== "ANALYZE" ? "text-cyan-300" : "text-cyan-700"}`} size={32} />
            <div className="text-cyan-300 text-sm font-bold tracking-widest mb-1">VMOVEXA CORE</div>
            <div className="text-cyan-600 text-[9px] uppercase tracking-wider">In-Vehicle Edge Compute</div>
          </div>

          {/* Tree Distributors */}
          <div className="relative w-full flex flex-col items-center">
            {/* Short drop down from Core */}
            <div className="w-[2px] h-8 bg-cyan-900/50" />
            
            {/* Horizontal Line Spanning the 3 columns */}
            {/* We will use a relative flex layout for the bottom nodes and draw lines using absolute positioning */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-lg h-[2px] bg-cyan-900/50 hidden sm:block" />
            
            {/* 3 Bottom Nodes */}
            <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-4 mt-8 sm:mt-0 relative pt-0 sm:pt-8">
              
              {/* Node 1: Smart Glass */}
              <div className="flex flex-col items-center relative w-full sm:w-1/3">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-cyan-900/50 hidden sm:block" />
                <div className={`w-full max-w-[200px] p-4 rounded-xl border-2 transition-all duration-700 backdrop-blur-md flex flex-col items-center text-center ${
                  activeState === "EMERGENCY" 
                    ? "border-amber-400 bg-amber-400/10 shadow-[0_0_30px_rgba(251,191,36,0.2)]" 
                    : activeState === "DISPLAY"
                      ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                      : "border-cyan-900 bg-[#021016]/80"
                }`}>
                  <div className="mb-2">
                    {activeState === "EMERGENCY" ? (
                      <FiAlertTriangle className="text-amber-400 animate-pulse" size={28} />
                    ) : (
                      <FiMonitor className={`transition-colors duration-500 ${activeState === "DISPLAY" ? "text-cyan-300" : "text-cyan-700"}`} size={28} />
                    )}
                  </div>
                  <div className="text-cyan-300 text-[10px] sm:text-xs font-bold tracking-widest mb-2">SMART GLASS</div>
                  <div className={`text-[9px] px-2 py-1 rounded w-full ${
                    activeState === "EMERGENCY" ? "bg-amber-400/20 text-amber-300 border border-amber-400/30" : "bg-cyan-950 text-cyan-500 border border-cyan-900/50"
                  }`}>
                    {activeState === "EMERGENCY" ? "EMERGENCY: TRANSPARENT" : "MODE: DIGITAL DOOH"}
                  </div>
                </div>
              </div>

              {/* Node 2: Proof of Play */}
              <div className="flex flex-col items-center relative w-full sm:w-1/3">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-cyan-900/50 hidden sm:block" />
                <div className={`w-full max-w-[200px] p-4 rounded-xl border-2 transition-all duration-700 backdrop-blur-md flex flex-col items-center text-center ${
                  activeState === "VERIFY" 
                    ? "border-emerald-400 bg-emerald-400/10 shadow-[0_0_30px_rgba(52,211,153,0.2)]" 
                    : "border-cyan-900 bg-[#021016]/80"
                }`}>
                  <div className="mb-2">
                    {activeState === "VERIFY" ? (
                      <FiCheckCircle className="text-emerald-400 animate-pulse" size={28} />
                    ) : (
                      <FiShield className="text-cyan-700" size={28} />
                    )}
                  </div>
                  <div className="text-cyan-300 text-[10px] sm:text-xs font-bold tracking-widest mb-2">PROOF OF PLAY</div>
                  <div className={`text-[9px] px-2 py-1 rounded w-full ${
                    activeState === "VERIFY" ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30" : "bg-cyan-950 text-cyan-500 border border-cyan-900/50"
                  }`}>
                    {activeState === "VERIFY" ? "CRYPTOGRAPHIC HASH" : "VERIFICATION IDLE"}
                  </div>
                </div>
              </div>

              {/* Node 3: Analytics */}
              <div className="flex flex-col items-center relative w-full sm:w-1/3">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-cyan-900/50 hidden sm:block" />
                <div className={`w-full max-w-[200px] p-4 rounded-xl border-2 transition-all duration-700 backdrop-blur-md flex flex-col items-center text-center ${
                  activeState === "ANALYZE" 
                    ? "border-purple-400 bg-purple-400/10 shadow-[0_0_30px_rgba(168,85,247,0.2)]" 
                    : "border-cyan-900 bg-[#021016]/80"
                }`}>
                  <div className="mb-2">
                    <FiBarChart2 className={`transition-colors duration-500 ${activeState === "ANALYZE" ? "text-purple-400 animate-pulse" : "text-cyan-700"}`} size={28} />
                  </div>
                  <div className="text-cyan-300 text-[10px] sm:text-xs font-bold tracking-widest mb-2">ANALYTICS</div>
                  <div className={`text-[9px] px-2 py-1 rounded w-full ${
                    activeState === "ANALYZE" ? "bg-purple-400/20 text-purple-300 border border-purple-400/30" : "bg-cyan-950 text-cyan-500 border border-cyan-900/50"
                  }`}>
                    {activeState === "ANALYZE" ? "SENDING TELEMETRY" : "DWELL TIME LOGGED"}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Explanatory Footer Panel */}
      <div className="relative z-20 border-t border-cyan-900/40 bg-[#01080b] p-6 sm:p-8 min-h-[140px] flex items-center justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <AnimatePresence mode="wait">
          {activeState === "SYNC" && (
            <motion.div key="sync" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center max-w-2xl">
              <h4 className="text-cyan-300 font-bold text-base sm:text-lg tracking-wide mb-2">1. Central Orchestration</h4>
              <p className="text-cyan-600/80 text-xs sm:text-sm leading-relaxed">VMOVEXA ONE cloud platform synchronizes active ad campaigns, policies, and geo-fenced perimeters down to the local edge node.</p>
            </motion.div>
          )}
          {activeState === "DISPLAY" && (
            <motion.div key="display" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center max-w-2xl">
              <h4 className="text-cyan-300 font-bold text-base sm:text-lg tracking-wide mb-2">2. Digital DOOH Display</h4>
              <p className="text-cyan-600/80 text-xs sm:text-sm leading-relaxed">VMOVEXA CORE processes real-time context and plays high-yield dynamic advertisements on the Smart Glass windows.</p>
            </motion.div>
          )}
          {activeState === "EMERGENCY" && (
            <motion.div key="emergency" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center max-w-2xl">
              <h4 className="text-amber-400 font-bold text-base sm:text-lg tracking-wide mb-2">3. Emergency Override</h4>
              <p className="text-amber-400/70 text-xs sm:text-sm leading-relaxed">Upon emergency trigger, VMOVEXA CORE instantly drops voltage to the Smart Glass, making the screens 100% transparent for passenger safety and visibility.</p>
            </motion.div>
          )}
          {activeState === "VERIFY" && (
            <motion.div key="verify" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center max-w-2xl">
              <h4 className="text-emerald-400 font-bold text-base sm:text-lg tracking-wide mb-2">4. Proof of Play</h4>
              <p className="text-emerald-400/70 text-xs sm:text-sm leading-relaxed">The edge securely logs the exact frame, time, and GPS coordinate of the ad play, generating an immutable cryptographic hash.</p>
            </motion.div>
          )}
          {activeState === "ANALYZE" && (
            <motion.div key="analyze" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center max-w-2xl">
              <h4 className="text-purple-400 font-bold text-base sm:text-lg tracking-wide mb-2">5. Telemetry & Analytics</h4>
              <p className="text-purple-400/70 text-xs sm:text-sm leading-relaxed">Dwell time, impressions, contextual data, and hardware diagnostics are compressed and securely sent back to the Cloud dashboard.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
