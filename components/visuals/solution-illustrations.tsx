"use client";

import React from "react";
import { FiCpu } from "react-icons/fi";

// ============================================================================
// 1. FLEET OPERATORS ILLUSTRATION — SHADE 1: ELECTRIC CYAN (#06b6d4)
// ============================================================================
export function FleetOperatorsIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#061826] via-[#040e17] to-black/95 flex items-center justify-center p-4">
      <style>{`
        @keyframes cyanDashStream {
          to { stroke-dashoffset: -24; }
        }
        @keyframes cyanSpinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cyanSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-cyan-dash {
          animation: cyanDashStream 1.5s linear infinite;
        }
        .animate-cyan-spin {
          transform-origin: 180px 70px;
          animation: cyanSpinSlow 16s linear infinite;
        }
        .animate-cyan-reverse {
          transform-origin: 180px 70px;
          animation: cyanSpinReverse 22s linear infinite;
        }
      `}</style>

      {/* Background Matrix Grid in Pure Cyan */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)",
          backgroundSize: "22px 22px"
        }}
      />
      {/* Radial Pure Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-cyan-400 border-b border-cyan-500/25 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          EDGE RUNTIME // 10K FLEET MESH
        </span>
        <span className="text-cyan-300 font-semibold">LATENCY: 1.8MS</span>
      </div>

      {/* SVG Topology Network */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Signal Wave Rings with Rotation */}
          <circle cx="180" cy="70" r="28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" className="animate-cyan-spin" opacity="0.45" />
          <circle cx="180" cy="70" r="54" stroke="#0891b2" strokeWidth="1" strokeDasharray="5 4" className="animate-cyan-reverse" opacity="0.3" />
          <circle cx="180" cy="70" r="82" stroke="#22d3ee" strokeWidth="0.8" opacity="0.18" />

          {/* Animated Streaming Connection Lines */}
          <path d="M180 70 L60 35" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" className="animate-cyan-dash" opacity="0.85" />
          <path d="M180 70 L300 35" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" className="animate-cyan-dash" opacity="0.85" />
          <path d="M180 70 L75 110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" className="animate-cyan-dash" opacity="0.85" />
          <path d="M180 70 L285 110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" className="animate-cyan-dash" opacity="0.85" />

          {/* Central Edge Orchestrator Hub */}
          <rect x="156" y="46" width="48" height="48" rx="12" fill="#082030" stroke="#06b6d4" strokeWidth="1.6" />
          <circle cx="180" cy="70" r="16" fill="#06b6d4" fillOpacity="0.2" className="animate-ping" style={{ animationDuration: "3s" }} />

          {/* Satellite Node 1: Left Top (OBD Telemetry) */}
          <rect x="34" y="20" width="52" height="28" rx="8" fill="#04141e" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="44" cy="34" r="3" fill="#22d3ee" className="animate-ping" style={{ animationDuration: "2.4s" }} />
          <circle cx="44" cy="34" r="2" fill="#22d3ee" />
          <text x="52" y="37" fill="#cffafe" fontSize="8" fontFamily="monospace">OBD-II</text>

          {/* Satellite Node 2: Right Top (GPS Matrix) */}
          <rect x="274" y="20" width="52" height="28" rx="8" fill="#04141e" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="284" cy="34" r="3" fill="#22d3ee" className="animate-ping" style={{ animationDuration: "2.8s" }} />
          <circle cx="284" cy="34" r="2" fill="#22d3ee" />
          <text x="292" y="37" fill="#cffafe" fontSize="8" fontFamily="monospace">GPS:3D</text>

          {/* Satellite Node 3: Left Bottom (Local Cache) */}
          <rect x="49" y="96" width="52" height="28" rx="8" fill="#04141e" stroke="#0891b2" strokeWidth="1.2" />
          <circle cx="59" cy="110" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "2.2s" }} />
          <circle cx="59" cy="110" r="2" fill="#06b6d4" />
          <text x="67" y="113" fill="#a5f3fc" fontSize="8" fontFamily="monospace">CACHE</text>

          {/* Satellite Node 4: Right Bottom (OTA Gateway) */}
          <rect x="259" y="96" width="52" height="28" rx="8" fill="#04141e" stroke="#0891b2" strokeWidth="1.2" />
          <circle cx="269" cy="110" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "2.6s" }} />
          <circle cx="269" cy="110" r="2" fill="#06b6d4" />
          <text x="277" y="113" fill="#a5f3fc" fontSize="8" fontFamily="monospace">OTA:OK</text>
        </svg>

        {/* Central Core Icon overlay */}
        <div className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-cyan-400 pointer-events-none">
          <FiCpu className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.04] border border-cyan-500/20 rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-cyan-300">CORE ARCHITECTURE</span>
        <span className="text-cyan-400 font-semibold">100% OFFLINE RESILIENT</span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. MOBILITY MEDIA ILLUSTRATION — SHADE 2: NEON MAGENTA / PINK (#ec4899)
// ============================================================================
export function MobilityMediaIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#26071b] via-[#14040e] to-black/95 flex items-center justify-center p-4">
      <style>{`
        @keyframes pinkEq1 { 0%, 100% { height: 10px; y: 52px; } 50% { height: 18px; y: 44px; } }
        @keyframes pinkEq2 { 0%, 100% { height: 18px; y: 44px; } 50% { height: 8px; y: 54px; } }
        @keyframes pinkEq3 { 0%, 100% { height: 12px; y: 50px; } 50% { height: 20px; y: 42px; } }
        @keyframes pinkEq4 { 0%, 100% { height: 16px; y: 46px; } 50% { height: 10px; y: 52px; } }
        .animate-pink-eq-1 { animation: pinkEq1 1.2s ease-in-out infinite; }
        .animate-pink-eq-2 { animation: pinkEq2 0.9s ease-in-out infinite; }
        .animate-pink-eq-3 { animation: pinkEq3 1.4s ease-in-out infinite; }
        .animate-pink-eq-4 { animation: pinkEq4 1.1s ease-in-out infinite; }
        @keyframes pinkSyncPulse {
          0%, 100% { opacity: 0.35; stroke-width: 1px; }
          50% { opacity: 1; stroke-width: 2.5px; }
        }
        .animate-pink-sync {
          animation: pinkSyncPulse 1.8s ease-in-out infinite;
        }
        @keyframes pinkDashStream {
          to { stroke-dashoffset: -20; }
        }
        .animate-pink-dash {
          animation: pinkDashStream 1.4s linear infinite;
        }
      `}</style>

      {/* Background Matrix Grid in Magenta/Pink */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #ec4899 1px, transparent 1px), linear-gradient(to bottom, #ec4899 1px, transparent 1px)",
          backgroundSize: "22px 22px"
        }}
      />
      {/* Radial Pure Magenta/Pink Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-pink-400 border-b border-pink-500/25 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          PROGRAMMATIC DSP // DUAL-ZONE DOOH
        </span>
        <span className="text-pink-300 font-semibold">VERIFIED PLAYBACK</span>
      </div>

      {/* Screen Orchestration Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Geofence Context Trigger Arc with Flow */}
          <path d="M40 100 Q180 20 320 100" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" className="animate-pink-dash" />

          {/* Exterior Display Frame (Window Display Simulation) */}
          <rect x="40" y="38" width="130" height="64" rx="10" fill="#200617" stroke="#ec4899" strokeWidth="1.5" />
          {/* LED Matrix Grid Inside */}
          <rect x="48" y="46" width="114" height="26" rx="4" fill="#ec4899" fillOpacity="0.18" />

          {/* Animated Equalizer Waveform in Magenta/Pink */}
          <rect x="55" y="52" width="3" height="10" rx="1.5" fill="#f472b6" className="animate-pink-eq-1" />
          <rect x="63" y="44" width="3" height="18" rx="1.5" fill="#ec4899" className="animate-pink-eq-2" />
          <rect x="71" y="50" width="3" height="12" rx="1.5" fill="#f472b6" className="animate-pink-eq-3" />
          <rect x="79" y="46" width="3" height="16" rx="1.5" fill="#fb7185" className="animate-pink-eq-4" />
          <rect x="87" y="52" width="3" height="10" rx="1.5" fill="#f472b6" className="animate-pink-eq-1" />
          <rect x="95" y="44" width="3" height="18" rx="1.5" fill="#ec4899" className="animate-pink-eq-2" />
          <rect x="103" y="50" width="3" height="12" rx="1.5" fill="#f472b6" className="animate-pink-eq-3" />
          <rect x="111" y="46" width="3" height="16" rx="1.5" fill="#fb7185" className="animate-pink-eq-4" />

          {/* Label: EXTERIOR: WINDOW DISPLAY */}
          <text x="46" y="86" fill="#fce7f3" fontSize="7" fontFamily="monospace">EXTERIOR: WINDOW DISPLAY</text>
          <circle cx="156" cy="84" r="2.5" fill="#f43f5e" className="animate-pulse" />

          {/* Interior Display Frame (Split-Zone Passenger Monitor) */}
          <rect x="190" y="38" width="130" height="64" rx="10" fill="#200617" stroke="#db2777" strokeWidth="1.5" />
          {/* Left Zone: Dynamic Brand Creative */}
          <rect x="198" y="46" width="56" height="48" rx="6" fill="#ec4899" fillOpacity="0.22" stroke="#f472b6" strokeWidth="0.8" />
          <text x="204" y="66" fill="#fbcfe8" fontSize="7" fontFamily="monospace">CREATIVE</text>
          <text x="204" y="76" fill="#f472b6" fontSize="6" fontFamily="monospace">TARGETED</text>
          {/* Right Zone: Passenger Route Context */}
          <rect x="258" y="46" width="54" height="48" rx="6" fill="#180412" stroke="#f472b6" strokeWidth="0.8" />
          <text x="264" y="60" fill="#fce7f3" fontSize="6.5" fontFamily="monospace">NEXT STOP</text>
          <circle cx="266" cy="72" r="2" fill="#ec4899" />
          <line x1="266" y1="74" x2="266" y2="82" stroke="#ec4899" strokeWidth="1" />
          <circle cx="266" cy="82" r="2" fill="#f472b6" />
          <text x="274" y="74" fill="#fbcfe8" fontSize="6" fontFamily="monospace">AIRPORT</text>

          {/* Glowing Animated Sync Beam between Screens */}
          <path d="M170 70 L190 70" stroke="#f43f5e" strokeWidth="1.8" strokeDasharray="2 2" className="animate-pink-sync" />
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.04] border border-pink-500/20 rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-pink-300">GEOFENCE TRIGGERED</span>
        <span className="text-pink-400 font-semibold">PROOF-OF-PLAY CRYPTO HASH</span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. SMART CITIES ILLUSTRATION — SHADE 3: VIVID ROYAL COBALT BLUE (#2563eb)
// ============================================================================
export function SmartCitiesIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#081736] via-[#050e24] to-black/95 flex items-center justify-center p-4">
      <style>{`
        @keyframes blueRippleRing {
          0% { r: 10px; opacity: 0.85; }
          100% { r: 52px; opacity: 0; }
        }
        .animate-blue-ripple-1 { animation: blueRippleRing 3s ease-out infinite; }
        .animate-blue-ripple-2 { animation: blueRippleRing 3s ease-out 1.5s infinite; }
        @keyframes blueVehiclePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.35); }
        }
        .animate-blue-vehicle { transform-box: fill-box; transform-origin: center; animation: blueVehiclePulse 2s ease-in-out infinite; }
        @keyframes blueDashStream {
          to { stroke-dashoffset: -20; }
        }
        .animate-blue-dash {
          animation: blueDashStream 1.3s linear infinite;
        }
      `}</style>

      {/* Background Matrix Grid in Royal Cobalt Blue */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
          backgroundSize: "22px 22px"
        }}
      />
      {/* Radial Royal Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-blue-400 border-b border-blue-500/25 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          URBAN SPATIAL GRID // CIVIC RADAR
        </span>
        <span className="text-blue-300 font-semibold">SIGNAL PRIORITY: MAX</span>
      </div>

      {/* Urban Spatial Radar & Transit Vector Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric Urban Arteries Grid in Royal Blue */}
          <path d="M30 115 L180 30 L330 115" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
          <path d="M80 125 L180 65 L280 125" stroke="#2563eb" strokeWidth="1.2" opacity="0.45" />
          
          {/* Main Transit Corridor Highway (Glow Path - Royal Blue) */}
          <path d="M30 95 C110 50 250 140 330 75" stroke="#1d4ed8" strokeWidth="2.5" />
          <path d="M30 95 C110 50 250 140 330 75" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 6" className="animate-blue-dash" opacity="0.9" />

          {/* Moving Fleet Transit Endpoints along Highway */}
          <g>
            <circle cx="110" cy="74" r="5" fill="#3b82f6" className="animate-blue-vehicle" />
            <circle cx="110" cy="74" r="10" stroke="#60a5fa" strokeWidth="1" className="animate-ping" style={{ animationDuration: "2.5s" }} />
            <text x="100" y="60" fill="#bfdbfe" fontSize="7" fontFamily="monospace">VEHICLE 401</text>
          </g>

          <g>
            <circle cx="250" cy="100" r="5" fill="#3b82f6" className="animate-blue-vehicle" />
            <circle cx="250" cy="100" r="10" stroke="#60a5fa" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
            <text x="240" y="118" fill="#bfdbfe" fontSize="7" fontFamily="monospace">VEHICLE 812</text>
          </g>

          {/* Central Municipal Broadcast Tower Node in Royal Blue */}
          <rect x="156" y="24" width="48" height="42" rx="8" fill="#0f214a" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M166 40 L180 28 L194 40" stroke="#60a5fa" strokeWidth="1.5" />
          <line x1="180" y1="28" x2="180" y2="52" stroke="#60a5fa" strokeWidth="1.5" />
          <circle cx="180" cy="28" r="3" fill="#93c5fd" className="animate-pulse" />
          <text x="160" y="60" fill="#dbeafe" fontSize="6.5" fontFamily="monospace">CITY TOWER</text>

          {/* Animated Concentric Radar Ripple Circles in Royal Blue */}
          <circle cx="180" cy="28" r="16" stroke="#60a5fa" strokeWidth="1" fill="none" className="animate-blue-ripple-1" />
          <circle cx="180" cy="28" r="30" stroke="#3b82f6" strokeWidth="0.8" fill="none" className="animate-blue-ripple-2" />

          {/* Civic Emergency Alert Box on Right in Royal Blue */}
          <rect x="250" y="32" width="90" height="26" rx="6" fill="#0c1a3b" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="258" cy="45" r="2.5" fill="#60a5fa" className="animate-ping" style={{ animationDuration: "2s" }} />
          <text x="266" y="48" fill="#dbeafe" fontSize="7" fontFamily="monospace">CIVIC // ALERT</text>
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.04] border border-blue-500/20 rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-blue-300">REAL-TIME CIVIC RELAY</span>
        <span className="text-blue-400 font-semibold">SMART CITY PROTOCOL</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. ENTERPRISE MOBILITY ILLUSTRATION — SHADE 4: ELECTRIC VIOLET / PURPLE (#8b5cf6)
// ============================================================================
export function EnterpriseMobilityIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#1a0833] via-[#0f0420] to-black/95 flex items-center justify-center p-4">
      <style>{`
        @keyframes purpleTunnelFlow {
          to { stroke-dashoffset: -20; }
        }
        .animate-purple-tunnel {
          animation: purpleTunnelFlow 1.2s linear infinite;
        }
        @keyframes purpleShuttleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .animate-purple-shuttle {
          animation: purpleShuttleFloat 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Matrix Grid in Electric Purple */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "22px 22px"
        }}
      />
      {/* Radial Electric Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-purple-400 border-b border-purple-500/25 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          ENTERPRISE MESH // CORPORATE FLEETS
        </span>
        <span className="text-purple-300 font-semibold">AES-256 ENCRYPTED</span>
      </div>

      {/* Enterprise Route Synchronization & RFID Access Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Corporate Campus Loop Route in Pure Purple */}
          <rect x="50" y="34" width="260" height="74" rx="37" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5 3" className="animate-purple-tunnel" />

          {/* Campus Hub Node (HQ Tower) in Deep Violet */}
          <g>
            <rect x="36" y="52" width="46" height="38" rx="8" fill="#240c42" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="44" y="60" width="8" height="8" rx="1.5" fill="#e9d5ff" />
            <rect x="56" y="60" width="8" height="8" rx="1.5" fill="#e9d5ff" />
            <rect x="68" y="60" width="8" height="8" rx="1.5" fill="#e9d5ff" />
            <rect x="44" y="72" width="8" height="8" rx="1.5" fill="#e9d5ff" />
            <rect x="56" y="72" width="8" height="8" rx="1.5" fill="#e9d5ff" />
            <rect x="68" y="72" width="8" height="8" rx="1.5" fill="#e9d5ff" />
            <text x="36" y="102" fill="#e9d5ff" fontSize="7" fontFamily="monospace">CAMPUS HQ</text>
          </g>

          {/* Corporate Shuttle 1 (En Route Top) with Float Animation */}
          <g className="animate-purple-shuttle">
            <rect x="150" y="24" width="60" height="22" rx="6" fill="#1e0a38" stroke="#c084fc" strokeWidth="1.2" />
            <circle cx="160" cy="35" r="3" fill="#8b5cf6" className="animate-ping" style={{ animationDuration: "2s" }} />
            <circle cx="160" cy="35" r="2" fill="#a855f7" />
            <text x="168" y="38" fill="#f3e8ff" fontSize="7" fontFamily="monospace">SHUTTLE #01</text>
          </g>

          {/* Corporate Shuttle 2 (En Route Bottom) */}
          <g className="animate-purple-shuttle" style={{ animationDelay: "1.2s" }}>
            <rect x="150" y="96" width="60" height="22" rx="6" fill="#1e0a38" stroke="#c084fc" strokeWidth="1.2" />
            <circle cx="160" cy="107" r="3" fill="#8b5cf6" />
            <text x="168" y="110" fill="#f3e8ff" fontSize="7" fontFamily="monospace">SHUTTLE #02</text>
          </g>

          {/* Security Shield & RFID Terminal on Right in Purple */}
          <g>
            <rect x="278" y="52" width="46" height="38" rx="8" fill="#240c42" stroke="#c084fc" strokeWidth="1.5" />
            <circle cx="301" cy="71" r="9" fill="#7c3aed" fillOpacity="0.3" className="animate-pulse" />
            <path d="M298 71 L300 73 L304 69" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" />
            <text x="274" y="102" fill="#e9d5ff" fontSize="7" fontFamily="monospace">RFID ACCESS</text>
          </g>

          {/* Direct Encrypted Tunnel Vector between HQ and Access Node */}
          <line x1="82" y1="71" x2="278" y2="71" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" className="animate-purple-tunnel" />
          <circle cx="180" cy="71" r="10" fill="#240c42" stroke="#8b5cf6" strokeWidth="1" />
          <path d="M178 71 L182 71" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.04] border border-purple-500/20 rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-purple-300">CAMPUS SHUTTLE LOOP</span>
        <span className="text-purple-400 font-semibold">ZERO-TRUST TELEMETRY</span>
      </div>
    </div>
  );
}
