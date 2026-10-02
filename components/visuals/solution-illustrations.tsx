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
// 1. FLEET OPERATORS ILLUSTRATION — Cyan & Royal Blue (Logo Gradient Tones)
// ============================================================================
export function FleetOperatorsIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#0a1329] via-[#070e1e] to-black/90 flex items-center justify-center p-4">
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
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-cyan-400/80 border-b border-cyan-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          EDGE RUNTIME // 10K FLEET MESH
        </span>
        <span className="text-blue-300">LATENCY: 1.8MS</span>
      </div>

      {/* SVG Topology Network */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Signal Wave Rings radiating from Central Edge */}
          <circle cx="180" cy="70" r="28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "12s" }} opacity="0.4" />
          <circle cx="180" cy="70" r="54" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
          <circle cx="180" cy="70" r="82" stroke="#3b82f6" strokeWidth="0.8" opacity="0.15" />

          {/* Connection Lines from Center to Endpoints */}
          <path d="M180 70 L60 35" stroke="url(#fleet-cyan-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M180 70 L300 35" stroke="url(#fleet-cyan-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M180 70 L75 110" stroke="url(#fleet-cyan-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M180 70 L285 110" stroke="url(#fleet-cyan-grad)" strokeWidth="1.5" strokeDasharray="4 2" />

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
            <linearGradient id="fleet-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <span className="text-blue-400 font-semibold">100% OFFLINE RESILIENT</span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. MOBILITY MEDIA ILLUSTRATION — Purple, Indigo & Pink (Logo Gradient Tones)
// ============================================================================
export function MobilityMediaIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#180d2e] via-[#0d071a] to-black/90 flex items-center justify-center p-4">
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
          <path d="M40 100 Q180 20 320 100" stroke="url(#media-purple-grad)" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />

          {/* Exterior Display Frame (Rooftop LED Simulation) */}
          <rect x="40" y="38" width="130" height="64" rx="10" fill="#120726" stroke="#a855f7" strokeWidth="1.5" />
          {/* LED Matrix Grid Inside */}
          <rect x="48" y="46" width="114" height="26" rx="4" fill="#a855f7" fillOpacity="0.15" />
          {/* Equalizer / Campaign Waveform */}
          <line x1="56" y1="62" x2="56" y2="52" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="62" x2="64" y2="48" stroke="#e879f9" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="72" y1="62" x2="72" y2="56" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="80" y1="62" x2="80" y2="50" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="88" y1="62" x2="88" y2="54" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="96" y1="62" x2="96" y2="46" stroke="#e879f9" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="104" y1="62" x2="104" y2="52" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="112" y1="62" x2="112" y2="58" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="48" y="86" fill="#e9d5ff" fontSize="7.5" fontFamily="monospace">EXTERIOR: ROOFTOP 4K</text>
          <circle cx="156" cy="84" r="2.5" fill="#f43f5e" />

          {/* Interior Display Frame (Split-Zone Passenger Monitor) */}
          <rect x="190" y="38" width="130" height="64" rx="10" fill="#120726" stroke="#6366f1" strokeWidth="1.5" />
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
            <linearGradient id="media-purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
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
// 3. SMART CITIES ILLUSTRATION — Cobalt Blue & Cyan (NO GREEN, strictly logo shades)
// ============================================================================
export function SmartCitiesIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#081129] via-[#050b1a] to-black/90 flex items-center justify-center p-4">
      {/* Background Matrix Grid in Cyber Cyan */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Radial Blue / Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-cyan-400/90 border-b border-cyan-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          URBAN SPATIAL GRID // CIVIC RADAR
        </span>
        <span className="text-blue-300 font-semibold">SIGNAL PRIORITY: MAX</span>
      </div>

      {/* Urban Spatial Radar & Transit Vector Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric Urban Arteries Grid in Blue */}
          <path d="M30 115 L180 30 L330 115" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <path d="M80 125 L180 65 L280 125" stroke="#06b6d4" strokeWidth="1.2" opacity="0.4" />
          
          {/* Main Transit Corridor Highway (Glow Path - Cyan to Indigo to Purple) */}
          <path d="M30 95 C110 50 250 140 330 75" stroke="url(#city-blue-grad)" strokeWidth="2.5" />

          {/* Moving Fleet Transit Endpoints along Highway */}
          <g>
            <circle cx="110" cy="74" r="5" fill="#06b6d4" />
            <circle cx="110" cy="74" r="10" stroke="#06b6d4" strokeWidth="1" className="animate-ping" style={{ animationDuration: "2.5s" }} />
            <text x="100" y="60" fill="#bae6fd" fontSize="7" fontFamily="monospace">VEHICLE 401</text>
          </g>

          <g>
            <circle cx="250" cy="100" r="5" fill="#818cf8" />
            <circle cx="250" cy="100" r="10" stroke="#818cf8" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
            <text x="240" y="118" fill="#c7d2fe" fontSize="7" fontFamily="monospace">VEHICLE 812</text>
          </g>

          {/* Central Municipal Broadcast Tower Node */}
          <rect x="156" y="24" width="48" height="42" rx="8" fill="#0c1b38" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M166 40 L180 28 L194 40" stroke="#60a5fa" strokeWidth="1.5" />
          <line x1="180" y1="28" x2="180" y2="52" stroke="#60a5fa" strokeWidth="1.5" />
          <circle cx="180" cy="28" r="3" fill="#ec4899" className="animate-pulse" />
          <text x="160" y="60" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">CITY TOWER</text>

          {/* Concentric Emergency Broadcast Wave Arcs */}
          <path d="M140 28 A 40 40 0 0 1 220 28" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
          <path d="M124 28 A 56 56 0 0 1 236 28" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />

          {/* Civic Emergency Alert Box on Right in Pink/Magenta */}
          <rect x="250" y="32" width="90" height="26" rx="6" fill="#1e102d" stroke="#f43f5e" strokeWidth="1" />
          <circle cx="258" cy="45" r="2.5" fill="#ec4899" />
          <text x="266" y="48" fill="#fbcfe8" fontSize="7" fontFamily="monospace">CIVIC // ALERT</text>

          <defs>
            <linearGradient id="city-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-cyan-300">REAL-TIME CIVIC RELAY</span>
        <span className="text-indigo-400 font-semibold">SMART CITY PROTOCOL</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. ENTERPRISE MOBILITY ILLUSTRATION — Violet, Magenta & Cyan (NO ORANGE)
// ============================================================================
export function EnterpriseMobilityIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#1a0b2e] via-[#0f071c] to-black/90 flex items-center justify-center p-4">
      {/* Background Matrix Grid in Purple */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #9333ea 1px, transparent 1px), linear-gradient(to bottom, #9333ea 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Radial Magenta / Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Technical HUD Top Bar */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono tracking-wider text-purple-400/90 border-b border-purple-500/20 pb-1.5 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
          ENTERPRISE MESH // CORPORATE FLEETS
        </span>
        <span className="text-pink-400 font-semibold">AES-256 ENCRYPTED</span>
      </div>

      {/* Enterprise Route Synchronization & RFID Access Schematic */}
      <div className="relative z-10 w-full max-w-sm h-full flex items-center justify-center pt-5">
        <svg viewBox="0 0 360 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Corporate Campus Loop Route in Logo Gradient */}
          <rect x="50" y="34" width="260" height="74" rx="37" stroke="url(#enterprise-purple-grad)" strokeWidth="1.5" strokeDasharray="5 3" />

          {/* Campus Hub Node (HQ Tower) in Deep Violet */}
          <g>
            <rect x="36" y="52" width="46" height="38" rx="8" fill="#1c0b33" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="44" y="60" width="8" height="8" rx="1.5" fill="#f0abfc" />
            <rect x="56" y="60" width="8" height="8" rx="1.5" fill="#f0abfc" />
            <rect x="68" y="60" width="8" height="8" rx="1.5" fill="#f0abfc" />
            <rect x="44" y="72" width="8" height="8" rx="1.5" fill="#f0abfc" />
            <rect x="56" y="72" width="8" height="8" rx="1.5" fill="#f0abfc" />
            <rect x="68" y="72" width="8" height="8" rx="1.5" fill="#f0abfc" />
            <text x="36" y="102" fill="#f0abfc" fontSize="7" fontFamily="monospace">CAMPUS HQ</text>
          </g>

          {/* Corporate Shuttle 1 (En Route Top) */}
          <g>
            <rect x="150" y="24" width="60" height="22" rx="6" fill="#170929" stroke="#c084fc" strokeWidth="1.2" />
            <circle cx="160" cy="35" r="3" fill="#06b6d4" />
            <text x="168" y="38" fill="#f5d0fe" fontSize="7" fontFamily="monospace">SHUTTLE #01</text>
          </g>

          {/* Corporate Shuttle 2 (En Route Bottom) */}
          <g>
            <rect x="150" y="96" width="60" height="22" rx="6" fill="#170929" stroke="#c084fc" strokeWidth="1.2" />
            <circle cx="160" cy="107" r="3" fill="#06b6d4" />
            <text x="168" y="110" fill="#f5d0fe" fontSize="7" fontFamily="monospace">SHUTTLE #02</text>
          </g>

          {/* Security Shield & RFID Terminal on Right in Cyan/Blue */}
          <g>
            <rect x="278" y="52" width="46" height="38" rx="8" fill="#0c1833" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="301" cy="71" r="9" fill="#0284c7" fillOpacity="0.25" />
            <path d="M298 71 L300 73 L304 69" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            <text x="274" y="102" fill="#bae6fd" fontSize="7" fontFamily="monospace">RFID ACCESS</text>
          </g>

          {/* Direct Tunnel Vector between HQ and Access Node */}
          <line x1="82" y1="71" x2="278" y2="71" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="180" cy="71" r="10" fill="#1a0a2e" stroke="#a855f7" strokeWidth="1" />
          <path d="M178 71 L182 71" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />

          <defs>
            <linearGradient id="enterprise-purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Micro Status Pill */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
        <span className="text-purple-300">CAMPUS SHUTTLE LOOP</span>
        <span className="text-pink-400 font-semibold">ZERO-TRUST TELEMETRY</span>
      </div>
    </div>
  );
}
