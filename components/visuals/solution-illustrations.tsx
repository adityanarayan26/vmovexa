"use client";

import React from "react";
import { 
  FiWifi, 
  FiCpu, 
  FiActivity, 
  FiMapPin, 
  FiShield, 
  FiRadio, 
  FiLayers, 
  FiServer,
  FiZap,
  FiCompass,
  FiLock,
  FiCheckCircle
} from "react-icons/fi";
import { RiBusLine, RiBuilding2Line, RiBroadcastLine } from "react-icons/ri";

// ============================================================================
// 1. FLEET OPERATORS ILLUSTRATION — Edge Mesh & Autonomous Fleet Topology
// ============================================================================
export function FleetOperatorsIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#0a0f1d] via-[#070b14] to-black/80 flex items-center justify-center p-4">
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Radial Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-cyan-400/70 border-b border-cyan-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          EDGE RUNTIME // 10K FLEET MESH
        </span>
        <span className="text-zinc-400">LATENCY: 1.8MS</span>
      </div>

      {/* SVG Topology Network */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Signal Wave Rings radiating from Central Edge */}
          <circle cx="180" cy="70" r="28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "12s" }} opacity="0.4" />
          <circle cx="180" cy="70" r="54" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
          <circle cx="180" cy="70" r="82" stroke="#3b82f6" strokeWidth="0.8" opacity="0.15" />

          {/* Connection Lines from Center to Endpoints */}
          <path d="M180 70 L60 35" stroke="url(#cyan-grad-1)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M180 70 L300 35" stroke="url(#cyan-grad-1)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M180 70 L75 110" stroke="url(#cyan-grad-1)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M180 70 L285 110" stroke="url(#cyan-grad-1)" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Central Edge Orchestrator Hub */}
          <rect x="156" y="46" width="48" height="48" rx="12" fill="#081026" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="180" cy="70" r="14" fill="#06b6d4" fillOpacity="0.15" />

          {/* Satellite Node 1: Left Top (OBD Telemetry) */}
          <rect x="34" y="20" width="52" height="28" rx="8" fill="#050a18" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="44" cy="34" r="3" fill="#38bdf8" className="animate-ping" style={{ animationDuration: "3s" }} />
          <text x="52" y="37" fill="#bae6fd" fontSize="8" fontFamily="monospace">OBD-II</text>

          {/* Satellite Node 2: Right Top (GPS Matrix) */}
          <rect x="274" y="20" width="52" height="28" rx="8" fill="#050a18" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="284" cy="34" r="3" fill="#38bdf8" />
          <text x="292" y="37" fill="#bae6fd" fontSize="8" fontFamily="monospace">GPS:3D</text>

          {/* Satellite Node 3: Left Bottom (Local Cache) */}
          <rect x="49" y="96" width="52" height="28" rx="8" fill="#050a18" stroke="#818cf8" strokeWidth="1" />
          <circle cx="59" cy="110" r="3" fill="#818cf8" />
          <text x="67" y="113" fill="#c7d2fe" fontSize="8" fontFamily="monospace">CACHE</text>

          {/* Satellite Node 4: Right Bottom (OTA Gateway) */}
          <rect x="259" y="96" width="52" height="28" rx="8" fill="#050a18" stroke="#818cf8" strokeWidth="1" />
          <circle cx="269" cy="110" r="3" fill="#818cf8" />
          <text x="277" y="113" fill="#c7d2fe" fontSize="8" fontFamily="monospace">OTA:OK</text>

          {/* Gradients */}
          <defs>
            <linearGradient id="cyan-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Core Icon overlay */}
        <div className="absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-cyan-400 pointer-events-none">
          <FiCpu className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-cyan-300">CORE ARCHITECTURE</span>
        <span className="text-emerald-400 font-semibold">100% OFFLINE RESILIENT</span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. MOBILITY MEDIA ILLUSTRATION — Programmatic Dual-Screen & Contextual DOOH
// ============================================================================
export function MobilityMediaIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#140b24] via-[#0b0717] to-black/80 flex items-center justify-center p-4">
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Radial Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-purple-400/80 border-b border-purple-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          PROGRAMMATIC DSP // DUAL-ZONE DOOH
        </span>
        <span className="text-pink-400 font-semibold">VERIFIED PLAYBACK</span>
      </div>

      {/* Screen Orchestration Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Geofence Context Trigger Arc */}
          <path d="M40 100 Q180 20 320 100" stroke="url(#purple-grad)" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />

          {/* Exterior Display Frame (Rooftop LED Simulation) */}
          <rect x="40" y="38" width="130" height="64" rx="10" fill="#0f071f" stroke="#a855f7" strokeWidth="1.5" />
          {/* LED Matrix Grid Inside */}
          <rect x="48" y="46" width="114" height="26" rx="4" fill="#a855f7" fillOpacity="0.15" />
          {/* Simulated Equalizer / Campaign Waveform */}
          <line x1="56" y1="62" x2="56" y2="52" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="62" x2="64" y2="48" stroke="#e879f9" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="72" y1="62" x2="72" y2="56" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="80" y1="62" x2="80" y2="50" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="88" y1="62" x2="88" y2="54" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="96" y1="62" x2="96" y2="46" stroke="#e879f9" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="104" y1="62" x2="104" y2="52" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="112" y1="62" x2="112" y2="58" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="48" y="86" fill="#e9d5ff" fontSize="7.5" fontFamily="monospace">EXTERIOR: ROOFTOP 4K</text>
          <circle cx="156" cy="84" r="2.5" fill="#34d399" />

          {/* Interior Display Frame (Split-Zone Passenger Monitor) */}
          <rect x="190" y="38" width="130" height="64" rx="10" fill="#0f071f" stroke="#6366f1" strokeWidth="1.5" />
          {/* Left Zone: Dynamic Brand Creative */}
          <rect x="198" y="46" width="56" height="48" rx="6" fill="#6366f1" fillOpacity="0.2" stroke="#818cf8" strokeWidth="0.8" />
          <text x="204" y="66" fill="#c7d2fe" fontSize="7" fontFamily="monospace">CREATIVE</text>
          <text x="204" y="76" fill="#a5b4fc" fontSize="6" fontFamily="monospace">TARGETED</text>
          {/* Right Zone: Passenger Route Context */}
          <rect x="258" y="46" width="54" height="48" rx="6" fill="#0b1129" stroke="#38bdf8" strokeWidth="0.8" />
          <text x="264" y="60" fill="#7dd3fc" fontSize="6.5" fontFamily="monospace">NEXT STOP</text>
          <circle cx="266" cy="72" r="2" fill="#06b6d4" />
          <line x1="266" y1="74" x2="266" y2="82" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="266" cy="82" r="2" fill="#38bdf8" />
          <text x="274" y="74" fill="#bae6fd" fontSize="6" fontFamily="monospace">AIRPORT</text>

          {/* Sync Beam between Screens */}
          <path d="M170 70 L190 70" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />

          <defs>
            <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-purple-300">GEOFENCE TRIGGERED</span>
        <span className="text-pink-400 font-semibold">PROOF-OF-PLAY CRYPTO HASH</span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. SMART CITIES ILLUSTRATION — Urban Transit Grid & Civic Communication
// ============================================================================
export function SmartCitiesIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#081717] via-[#050e0f] to-black/80 flex items-center justify-center p-4">
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Radial Emerald Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-emerald-400/80 border-b border-emerald-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          URBAN SPATIAL GRID // CIVIC RADAR
        </span>
        <span className="text-cyan-400 font-semibold">SIGNAL PRIORITY: MAX</span>
      </div>

      {/* Urban Spatial Radar & Transit Vector Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric Urban Arteries Grid */}
          <path d="M30 115 L180 30 L330 115" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <path d="M80 125 L180 65 L280 125" stroke="#06b6d4" strokeWidth="1.2" opacity="0.4" />
          
          {/* Main Transit Corridor Highway (Glow Path) */}
          <path d="M30 95 C110 50 250 140 330 75" stroke="url(#emerald-grad)" strokeWidth="2.5" />

          {/* Moving Fleet Transit Endpoints along Highway */}
          <g>
            <circle cx="110" cy="74" r="5" fill="#10b981" />
            <circle cx="110" cy="74" r="10" stroke="#10b981" strokeWidth="1" className="animate-ping" style={{ animationDuration: "2.5s" }} />
            <text x="100" y="60" fill="#a7f3d0" fontSize="7" fontFamily="monospace">VEHICLE 401</text>
          </g>

          <g>
            <circle cx="250" cy="100" r="5" fill="#06b6d4" />
            <circle cx="250" cy="100" r="10" stroke="#06b6d4" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
            <text x="240" y="118" fill="#bae6fd" fontSize="7" fontFamily="monospace">VEHICLE 812</text>
          </g>

          {/* Central Municipal Broadcast Tower Node */}
          <rect x="156" y="24" width="48" height="42" rx="8" fill="#051c1a" stroke="#10b981" strokeWidth="1.5" />
          <path d="M166 40 L180 28 L194 40" stroke="#34d399" strokeWidth="1.5" />
          <line x1="180" y1="28" x2="180" y2="52" stroke="#34d399" strokeWidth="1.5" />
          <circle cx="180" cy="28" r="3" fill="#ec4899" className="animate-pulse" />
          <text x="160" y="60" fill="#a7f3d0" fontSize="6.5" fontFamily="monospace">CITY TOWER</text>

          {/* Concentric Emergency Broadcast Wave Arcs */}
          <path d="M140 28 A 40 40 0 0 1 220 28" stroke="#34d399" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
          <path d="M124 28 A 56 56 0 0 1 236 28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />

          {/* Civic Emergency Alert Box on Right */}
          <rect x="250" y="32" width="90" height="26" rx="6" fill="#05171e" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="258" cy="45" r="2.5" fill="#f59e0b" />
          <text x="266" y="48" fill="#fef3c7" fontSize="7" fontFamily="monospace">AMBER // ALERT</text>

          <defs>
            <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-emerald-300">REAL-TIME CIVIC RELAY</span>
        <span className="text-cyan-400 font-semibold">SMART CITY PROTOCOL</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. ENTERPRISE MOBILITY ILLUSTRATION — Campus Transit & Encrypted Telemetry
// ============================================================================
export function EnterpriseMobilityIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#191408] via-[#0f0c05] to-black/80 flex items-center justify-center p-4">
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Radial Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-amber-400/80 border-b border-amber-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          ENTERPRISE MESH // CORPORATE FLEETS
        </span>
        <span className="text-emerald-400 font-semibold">AES-256 ENCRYPTED</span>
      </div>

      {/* Enterprise Route Synchronization & RFID Access Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Corporate Campus Loop Route */}
          <rect x="50" y="34" width="260" height="74" rx="37" stroke="url(#amber-grad)" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* Campus Hub Node (HQ Tower) */}
          <g>
            <rect x="36" y="52" width="46" height="38" rx="8" fill="#1e1405" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="44" y="60" width="8" height="8" rx="1.5" fill="#fde68a" />
            <rect x="56" y="60" width="8" height="8" rx="1.5" fill="#fde68a" />
            <rect x="68" y="60" width="8" height="8" rx="1.5" fill="#fde68a" />
            <rect x="44" y="72" width="8" height="8" rx="1.5" fill="#fde68a" />
            <rect x="56" y="72" width="8" height="8" rx="1.5" fill="#fde68a" />
            <rect x="68" y="72" width="8" height="8" rx="1.5" fill="#fde68a" />
            <text x="36" y="102" fill="#fde68a" fontSize="7" fontFamily="monospace">CAMPUS HQ</text>
          </g>

          {/* Corporate Shuttle 1 (En Route Top) */}
          <g>
            <rect x="150" y="24" width="60" height="22" rx="6" fill="#171206" stroke="#fbbf24" strokeWidth="1.2" />
            <circle cx="160" cy="35" r="3" fill="#10b981" />
            <text x="168" y="38" fill="#fef3c7" fontSize="7" fontFamily="monospace">SHUTTLE #01</text>
          </g>

          {/* Corporate Shuttle 2 (En Route Bottom) */}
          <g>
            <rect x="150" y="96" width="60" height="22" rx="6" fill="#171206" stroke="#fbbf24" strokeWidth="1.2" />
            <circle cx="160" cy="107" r="3" fill="#10b981" />
            <text x="168" y="110" fill="#fef3c7" fontSize="7" fontFamily="monospace">SHUTTLE #02</text>
          </g>

          {/* Security Shield & RFID Terminal on Right */}
          <g>
            <rect x="278" y="52" width="46" height="38" rx="8" fill="#1e1405" stroke="#34d399" strokeWidth="1.5" />
            <circle cx="301" cy="71" r="9" fill="#10b981" fillOpacity="0.2" />
            <path d="M298 71 L300 73 L304 69" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
            <text x="274" y="102" fill="#a7f3d0" fontSize="7" fontFamily="monospace">RFID ACCESS</text>
          </g>

          {/* Direct Tunnel Vector between HQ and Access Node */}
          <line x1="82" y1="71" x2="278" y2="71" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="180" cy="71" r="10" fill="#1e1405" stroke="#f59e0b" strokeWidth="1" />
          <path d="M178 71 L182 71" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />

          <defs>
            <linearGradient id="amber-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-amber-300">CAMPUS SHUTTLE LOOP</span>
        <span className="text-emerald-400 font-semibold">ZERO-TRUST TELEMETRY</span>
      </div>
    </div>
  );
}
