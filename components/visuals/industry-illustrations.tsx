"use client";

import React from "react";
import { 
  FiMapPin, 
  FiActivity, 
  FiCompass, 
  FiBriefcase, 
  FiShield, 
  FiEye, 
  FiBatteryCharging, 
  FiTruck,
  FiZap,
  FiRadio,
  FiLock,
  FiCheckCircle
} from "react-icons/fi";
import { RiBusLine, RiFlightTakeoffLine, RiGraduationCapLine } from "react-icons/ri";

// Helper for blueprint background grid
function BlueprintBg({ stroke = "#ffffff", opacity = 0.08 }) {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, ${stroke} 1px, transparent 1px), linear-gradient(to bottom, ${stroke} 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        opacity
      }}
    />
  );
}

// ============================================================================
// 1. PUBLIC TRANSPORT ILLUSTRATION
// ============================================================================
export function PublicTransportIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#081226] via-[#050a16] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#06b6d4" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-cyan-400/80 border-b border-cyan-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          TRANSIT LINE // R-104
        </span>
        <span className="text-zinc-400">NEXT: 2 MIN</span>
      </div>

      {/* Schematic Graphic */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Transit Route Path */}
          <path d="M20 75 C60 20 160 85 200 30" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M20 75 C60 20 160 85 200 30" stroke="#38bdf8" strokeWidth="1" opacity="0.7" />

          {/* Station Stop 1 */}
          <circle cx="45" cy="46" r="4.5" fill="#082f49" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="45" cy="46" r="2" fill="#38bdf8" />
          <text x="32" y="34" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">STATION A</text>

          {/* Active Bus Node (Station Stop 2) */}
          <g>
            <circle cx="120" cy="56" r="8" fill="#06b6d4" fillOpacity="0.2" className="animate-ping" style={{ animationDuration: "3s" }} />
            <rect x="108" y="47" width="24" height="18" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="114" cy="56" r="2" fill="#fff" />
            <circle cx="126" cy="56" r="2" fill="#fff" />
            <text x="104" y="74" fill="#38bdf8" fontSize="6.5" fontFamily="monospace">BUS #104</text>
          </g>

          {/* Station Stop 3 */}
          <circle cx="180" cy="42" r="4.5" fill="#082f49" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="180" cy="42" r="2" fill="#38bdf8" />
          <text x="168" y="30" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">STATION B</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-cyan-300">PASSENGERS: 78%</span>
        <span className="text-emerald-400">ON-TIME</span>
      </div>
    </div>
  );
}

// ============================================================================
// 2. PRIVATE FLEETS ILLUSTRATION
// ============================================================================
export function PrivateFleetsIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#10102b] via-[#09091a] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#6366f1" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-indigo-400/80 border-b border-indigo-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          COMMERCIAL FLEET MESH
        </span>
        <span className="text-zinc-400">120 UNITS ACTIVE</span>
      </div>

      {/* Radar Matrix Graphic */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric Radar Rings */}
          <circle cx="110" cy="50" r="18" stroke="#6366f1" strokeWidth="0.8" opacity="0.5" />
          <circle cx="110" cy="50" r="36" stroke="#6366f1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="110" cy="50" r="54" stroke="#818cf8" strokeWidth="0.8" opacity="0.15" />

          {/* Central Fleet Ops Hub */}
          <circle cx="110" cy="50" r="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.2" />
          <circle cx="110" cy="50" r="2.5" fill="#a5b4fc" />

          {/* Fleet Vehicle Nodes */}
          <circle cx="80" cy="36" r="3" fill="#6366f1" />
          <line x1="110" y1="50" x2="80" y2="36" stroke="#6366f1" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
          <text x="64" y="28" fill="#c7d2fe" fontSize="6.5" fontFamily="monospace">VAN 04</text>

          <circle cx="145" cy="32" r="3" fill="#818cf8" />
          <line x1="110" y1="50" x2="145" y2="32" stroke="#818cf8" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
          <text x="150" y="30" fill="#c7d2fe" fontSize="6.5" fontFamily="monospace">TRUCK 12</text>

          <circle cx="70" cy="68" r="3" fill="#6366f1" />
          <line x1="110" y1="50" x2="70" y2="68" stroke="#6366f1" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
          <text x="56" y="80" fill="#c7d2fe" fontSize="6.5" fontFamily="monospace">BUS 08</text>

          <circle cx="150" cy="72" r="3" fill="#a5b4fc" />
          <line x1="110" y1="50" x2="150" y2="72" stroke="#a5b4fc" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
          <text x="154" y="80" fill="#c7d2fe" fontSize="6.5" fontFamily="monospace">CAR 21</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-indigo-300">DISPATCH SYNC</span>
        <span className="text-emerald-400">100% HEALTH</span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. AIRPORT MOBILITY ILLUSTRATION
// ============================================================================
export function AirportMobilityIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#08182b] via-[#050e1a] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#0284c7" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,132,199,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-sky-400/80 border-b border-sky-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          AIRPORT TARMAC LOOP // T1-T3
        </span>
        <span className="text-zinc-400">GATE SYNC</span>
      </div>

      {/* Terminal Corridor & Flight Vector */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Runway / Terminal Loop Track */}
          <rect x="25" y="32" width="170" height="42" rx="21" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Terminal 1 */}
          <rect x="35" y="44" width="28" height="18" rx="4" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
          <text x="42" y="56" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">T-01</text>

          {/* Terminal 2 (Center) */}
          <rect x="96" y="44" width="28" height="18" rx="4" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
          <text x="103" y="56" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">T-02</text>

          {/* Terminal 3 */}
          <rect x="157" y="44" width="28" height="18" rx="4" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
          <text x="164" y="56" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">T-03</text>

          {/* Airport Flight Path Silhouette */}
          <path d="M140 18 L160 22 L152 26 L148 24 L142 27 L143 23 Z" fill="#38bdf8" />
          <path d="M80 20 Q120 16 140 18" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

          {/* Moving Airport Shuttle */}
          <circle cx="80" cy="32" r="3" fill="#38bdf8" />
          <circle cx="80" cy="32" r="6" stroke="#38bdf8" strokeWidth="0.8" className="animate-ping" style={{ animationDuration: "2s" }} />
          <text x="68" y="24" fill="#7dd3fc" fontSize="6" fontFamily="monospace">SHUTTLE</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-sky-300">FLIGHT DISPLAY API</span>
        <span className="text-emerald-400">PUNCTUAL</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. EMPLOYEE TRANSPORT ILLUSTRATION
// ============================================================================
export function EmployeeTransportIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#180e2b] via-[#0e071a] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#9333ea" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-purple-400/80 border-b border-purple-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          CAMPUS TRANSIT // SHIFT COMMUTE
        </span>
        <span className="text-zinc-400">ON-TIME: 99.4%</span>
      </div>

      {/* Corporate Campus Mesh */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Route Loop Path */}
          <path d="M30 65 Q60 25 110 35 T190 65" stroke="#9333ea" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Corporate Campus Building */}
          <rect x="25" y="52" width="34" height="26" rx="4" fill="#2e1065" stroke="#c084fc" strokeWidth="1.2" />
          <rect x="32" y="58" width="5" height="5" rx="1" fill="#e9d5ff" />
          <rect x="42" y="58" width="5" height="5" rx="1" fill="#e9d5ff" />
          <text x="26" y="86" fill="#e9d5ff" fontSize="6.5" fontFamily="monospace">OFFICE HQ</text>

          {/* RFID Checkpoint */}
          <circle cx="110" cy="35" r="7" fill="#3b0764" stroke="#c084fc" strokeWidth="1.2" />
          <circle cx="110" cy="35" r="3" fill="#e879f9" />
          <text x="96" y="24" fill="#f0abfc" fontSize="6.5" fontFamily="monospace">RFID SYNC</text>

          {/* Metro Drop-off Point */}
          <rect x="160" y="52" width="34" height="26" rx="4" fill="#2e1065" stroke="#c084fc" strokeWidth="1.2" />
          <rect x="168" y="58" width="5" height="5" rx="1" fill="#e9d5ff" />
          <rect x="178" y="58" width="5" height="5" rx="1" fill="#e9d5ff" />
          <text x="162" y="86" fill="#e9d5ff" fontSize="6.5" fontFamily="monospace">METRO HUB</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-purple-300">BADGE AUTH: 100%</span>
        <span className="text-emerald-400">TELEMETRY LIVE</span>
      </div>
    </div>
  );
}

// ============================================================================
// 5. SCHOOL TRANSPORT ILLUSTRATION
// ============================================================================
export function SchoolTransportIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#241708] via-[#140c04] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#d97706" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-amber-400/80 border-b border-amber-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          GEOFENCE SAFETY ZONE
        </span>
        <span className="text-zinc-400">SPEED: &lt;40 KM/H</span>
      </div>

      {/* Safety Perimeter Shield Schematic */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Safety Shield Outline in Center */}
          <path d="M110 24 L142 36 V58 C142 74 110 88 110 88 C110 88 78 74 78 58 V36 Z" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M110 32 L134 42 V58 C134 70 110 80 110 80 C110 80 86 70 86 58 V42 Z" stroke="#fbbf24" strokeWidth="0.8" opacity="0.6" />
          
          {/* Checkmark in shield */}
          <path d="M102 54 L107 59 L118 48" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* School Geofence Ring */}
          <circle cx="110" cy="56" r="38" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />

          {/* School Icon on Left */}
          <rect x="25" y="44" width="26" height="20" rx="3" fill="#1c1917" stroke="#f59e0b" strokeWidth="1" />
          <path d="M23 44 L38 32 L53 44" stroke="#f59e0b" strokeWidth="1" />
          <text x="28" y="72" fill="#fde68a" fontSize="6.5" fontFamily="monospace">CAMPUS</text>

          {/* Real-time Telemetry on Right */}
          <circle cx="185" cy="54" r="10" fill="#1c1917" stroke="#34d399" strokeWidth="1" />
          <text x="178" y="57" fill="#86efac" fontSize="7" fontFamily="monospace">SAFE</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-amber-300">PARENT NOTIFICATION</span>
        <span className="text-emerald-400">SOS ACTIVE</span>
      </div>
    </div>
  );
}

// ============================================================================
// 6. TOURISM MOBILITY ILLUSTRATION
// ============================================================================
export function TourismMobilityIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#240817] via-[#14040d] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#db2777" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,39,119,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-pink-400/80 border-b border-pink-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          CULTURAL DISCOVERY // POI RADAR
        </span>
        <span className="text-zinc-400">AUDIO: READY</span>
      </div>

      {/* Landmark POI Radar Map */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Scenic Tour Track */}
          <path d="M20 50 C60 85 100 20 150 70 S200 40 200 40" stroke="#db2777" strokeWidth="1.8" strokeDasharray="4 2" />

          {/* Monument Pin 1 */}
          <g>
            <circle cx="65" cy="45" r="7" fill="#500724" stroke="#f472b6" strokeWidth="1.2" />
            <circle cx="65" cy="45" r="2.5" fill="#fbcfe8" />
            <text x="48" y="32" fill="#fbcfe8" fontSize="6.5" fontFamily="monospace">MUSEUM</text>
          </g>

          {/* Tourist Transit Bus */}
          <g>
            <circle cx="115" cy="46" r="6" fill="#db2777" fillOpacity="0.2" className="animate-ping" style={{ animationDuration: "2.5s" }} />
            <rect x="104" y="38" width="22" height="16" rx="3" fill="#be185d" stroke="#f472b6" strokeWidth="1" />
            <text x="96" y="62" fill="#f472b6" fontSize="6" fontFamily="monospace">TOUR BUS</text>
          </g>

          {/* Landmark Pin 2 */}
          <g>
            <circle cx="165" cy="48" r="7" fill="#500724" stroke="#f472b6" strokeWidth="1.2" />
            <circle cx="165" cy="48" r="2.5" fill="#fbcfe8" />
            <text x="150" y="36" fill="#fbcfe8" fontSize="6.5" fontFamily="monospace">MONUMENT</text>
          </g>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-pink-300">LOCATION CONTEXT</span>
        <span className="text-emerald-400">GUIDE SYNCED</span>
      </div>
    </div>
  );
}

// ============================================================================
// 7. ELECTRIC MOBILITY ILLUSTRATION
// ============================================================================
export function ElectricMobilityIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#061e14] via-[#03120c] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#059669" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(5,150,105,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-emerald-400/80 border-b border-emerald-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          EV POWERTRAIN // CHARGING MESH
        </span>
        <span className="text-emerald-300 font-semibold">SOC: 88%</span>
      </div>

      {/* Battery Cell & Charging Flow Graphic */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main EV Battery Frame */}
          <rect x="40" y="32" width="130" height="38" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
          <rect x="170" y="44" width="8" height="14" rx="2" fill="#10b981" />

          {/* Battery Level Segments (88%) */}
          <rect x="48" y="38" width="24" height="26" rx="3" fill="#34d399" />
          <rect x="76" y="38" width="24" height="26" rx="3" fill="#34d399" />
          <rect x="104" y="38" width="24" height="26" rx="3" fill="#34d399" />
          <rect x="132" y="38" width="20" height="26" rx="3" fill="#10b981" fillOpacity="0.4" />

          {/* Lightning Bolt Bolt */}
          <path d="M104 22 L94 40 H106 L96 58" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Energy Telemetry */}
          <text x="44" y="82" fill="#a7f3d0" fontSize="7" fontFamily="monospace">150 KW FAST CHARGE</text>
          <text x="144" y="82" fill="#6ee7b7" fontSize="7" fontFamily="monospace">REGEN: +14%</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-emerald-300">THERMAL: OPTIMAL</span>
        <span className="text-emerald-400 font-semibold">RANGE: 320 KM</span>
      </div>
    </div>
  );
}

// ============================================================================
// 8. LOGISTICS & CARGO ILLUSTRATION
// ============================================================================
export function LogisticsCargoIllustration() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#061817] via-[#030e0e] to-[#0c0d14] flex items-center justify-center p-3">
      <BlueprintBg stroke="#0d9488" opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top HUD Line */}
      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-teal-400/80 border-b border-teal-500/20 pb-1 z-10">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          CARGO TELEMETRY // HIGHWAY MESH
        </span>
        <span className="text-zinc-400">SEAL: INTACT</span>
      </div>

      {/* Container Corridor & Tracking Grid */}
      <div className="relative z-10 w-full max-w-[220px] h-full flex items-center justify-center pt-3">
        <svg viewBox="0 0 220 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Highway Transit Corridor */}
          <line x1="20" y1="65" x2="200" y2="65" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Intermodal Cargo Container */}
          <rect x="55" y="32" width="90" height="34" rx="4" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1.2" />
          <line x1="75" y1="32" x2="75" y2="66" stroke="#14b8a6" strokeWidth="0.8" opacity="0.6" />
          <line x1="95" y1="32" x2="95" y2="66" stroke="#14b8a6" strokeWidth="0.8" opacity="0.6" />
          <line x1="115" y1="32" x2="115" y2="66" stroke="#14b8a6" strokeWidth="0.8" opacity="0.6" />
          <line x1="135" y1="32" x2="135" y2="66" stroke="#14b8a6" strokeWidth="0.8" opacity="0.6" />

          {/* Digital Security Seal */}
          <circle cx="160" cy="49" r="8" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1.2" />
          <path d="M157 49 L159 51 L163 47" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
          <text x="150" y="65" fill="#99f6e4" fontSize="5.5" fontFamily="monospace">LOCK</text>

          <text x="65" y="52" fill="#99f6e4" fontSize="7" fontFamily="monospace">CARGO ID #904</text>
        </svg>
      </div>

      {/* Micro Status Badge */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5 backdrop-blur-sm">
        <span className="text-teal-300">WEIGHT: 24.5 T</span>
        <span className="text-emerald-400">GPS TRACKING</span>
      </div>
    </div>
  );
}
