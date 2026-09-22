"use client";

import { useState } from "react";
import {
  FiCpu,
  FiWifi,
  FiWifiOff,
  FiMapPin,
  FiMonitor,
  FiZap,
} from "react-icons/fi";

interface VehiclePreset {
  id: string;
  name: string;
  type: string;
  speed: number;
  battery: string;
  zone: string;
  zoneType: string;
  nextStop: string;
  eta: string;
  adCampaign: string;
  adCreative: string;
  cpmMultiplier: string;
  lat: string;
  lng: string;
}

const VEHICLES: VehiclePreset[] = [
  {
    id: "BUS-104",
    name: "Transit Bus #104",
    type: "Electric City Bus",
    speed: 44,
    battery: "88%",
    zone: "Central Business District",
    zoneType: "High Commercial Density",
    nextStop: "Metro Financial Towers",
    eta: "2 mins",
    adCampaign: "FinTech Prime • Platinum Card",
    adCreative: "Dynamic Digital 4K Billboard",
    cpmMultiplier: "2.4x CPM",
    lat: "28.6139° N",
    lng: "77.2090° E",
  },
  {
    id: "SHUTTLE-208",
    name: "Airport Shuttle #208",
    type: "Terminal Express Van",
    speed: 68,
    battery: "94%",
    zone: "Aerocity & Terminal Corridor",
    zoneType: "Premium Traveler Segment",
    nextStop: "Terminal 3 Departure Gate",
    eta: "4 mins",
    adCampaign: "Global Airline First Class",
    adCreative: "Targeted Transit Rotation",
    cpmMultiplier: "3.1x CPM",
    lat: "28.5562° N",
    lng: "77.1000° E",
  },
  {
    id: "METRO-312",
    name: "Feeder Bus #312",
    type: "Urban Last-Mile Hybrid",
    speed: 32,
    battery: "76%",
    zone: "Cyber City Tech Hub",
    zoneType: "Enterprise Audience",
    nextStop: "Innovation Boulevard",
    eta: "1 min",
    adCampaign: "Enterprise Cloud AI Summit",
    adCreative: "Real-Time Geofenced Asset",
    cpmMultiplier: "1.9x CPM",
    lat: "28.4950° N",
    lng: "77.0895° E",
  },
];

export function FleetConsoleSimulator() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehiclePreset>(VEHICLES[0]);
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);
  const [isSimulatingEvent, setIsSimulatingEvent] = useState<boolean>(false);
  const [logMessage, setLogMessage] = useState<string>("System optimal • All 1,428 edge nodes synchronized");
  const [proofHash, setProofHash] = useState<string>("0x8f2c...41e9");

  const triggerGeofenceEvent = () => {
    setIsSimulatingEvent(true);
    setLogMessage("Geofence detected • Shifting dynamic ad inventory to high-value cluster...");

    setTimeout(() => {
      const randomHash = "0x" + Math.random().toString(16).substring(2, 6) + "..." + Math.random().toString(16).substring(2, 6);
      setProofHash(randomHash);
      setIsSimulatingEvent(false);
      setLogMessage(`Event committed: Proof-of-play hash ${randomHash} verified in 12ms`);
    }, 600);
  };

  const toggleOffline = () => {
    const nextState = !isOfflineMode;
    setIsOfflineMode(nextState);
    if (nextState) {
      setLogMessage("Offline resilience engaged: Local SQLite cache active. 0 frame drops.");
    } else {
      setLogMessage("Cloud reconnected: Differential telemetry delta uploaded (0 packet loss).");
    }
  };

  return (
    <div className="w-full rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Console Top Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-white font-medium tracking-wide">
                VMOVEXA ONE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                Live Console
              </span>
            </div>
            <p className="text-xs text-white/40 font-mono mt-0.5">
              Bidirectional Cloud-to-Edge Telemetry Stream
            </p>
          </div>
        </div>

        {/* Vehicle Preset Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVehicle(v);
                setLogMessage(`Switched to ${v.id} • ${v.name} telemetry stream loaded`);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedVehicle.id === v.id
                  ? "bg-white text-black font-medium shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {v.id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Console Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Left Column (7 cols): Vehicle Schematic & In-Cabin Displays */}
        <div className="lg:col-span-7 space-y-5">
          {/* Corridor & Position Status Bar */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-white">
              <FiMapPin className="w-3.5 h-3.5 text-white/70" />
              <span>{selectedVehicle.zone}</span>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span>LAT: {selectedVehicle.lat}</span>
              <span>LNG: {selectedVehicle.lng}</span>
              <span className="text-white font-medium">{selectedVehicle.speed} km/h</span>
            </div>
          </div>

          {/* Dual In-Vehicle Display Simulation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-white/50 px-1">
              <span className="flex items-center gap-1.5">
                <FiMonitor className="text-white/70" /> Connected Passenger Displays
              </span>
              <span className="text-[11px] text-white/40">VMOVEXA CORE Runtime</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Display A: Transit Information & Route Progress */}
              <div className="p-5 rounded-2xl bg-black border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-white/50 tracking-wider">
                    Screen 01 • Passenger HUD
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-white/40">Upcoming Station</div>
                  <div className="text-base font-medium text-white tracking-wide">
                    {selectedVehicle.nextStop}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/70">
                    <span>ETA: {selectedVehicle.eta}</span>
                    <span className="text-white/90">On Schedule</span>
                  </div>
                </div>
              </div>

              {/* Display B: Contextual Geofenced DOOH Media */}
              <div className="p-5 rounded-2xl bg-black border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-white/50 tracking-wider">
                    Screen 02 • Smart DOOH
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white border border-white/15">
                    {selectedVehicle.cpmMultiplier}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-white/40">Live Campaign Target</div>
                  <div className="text-base font-medium text-white tracking-wide line-clamp-1">
                    {selectedVehicle.adCampaign}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/60">
                    <span>Format: {selectedVehicle.adCreative}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={triggerGeofenceEvent}
              disabled={isSimulatingEvent}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all active:scale-95 shadow-md cursor-pointer disabled:opacity-50"
            >
              <FiZap className={`w-3.5 h-3.5 ${isSimulatingEvent ? "animate-spin" : ""}`} />
              {isSimulatingEvent ? "Triggering..." : "Simulate Geofence Trigger"}
            </button>

            <button
              onClick={toggleOffline}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium border transition-all active:scale-95 cursor-pointer ${
                isOfflineMode
                  ? "bg-white/20 border-white/40 text-white shadow-sm"
                  : "bg-white/[0.04] border-white/15 text-white/70 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {isOfflineMode ? <FiWifiOff className="w-3.5 h-3.5 text-amber-300" /> : <FiWifi className="w-3.5 h-3.5 text-white/70" />}
              {isOfflineMode ? "Offline Cache Active (0ms Latency)" : "Simulate Network Drop"}
            </button>
          </div>
        </div>

        {/* Right Column (5 cols): Real-Time Telemetry & Core Metrics */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
              <span className="text-white/50 tracking-wider">Edge Node Telemetry</span>
              <span className="text-white/80 flex items-center gap-1.5">
                <FiCpu /> CORE v2.8 Engine
              </span>
            </div>

            {/* Metrics List */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/50">Connectivity Mode:</span>
                <span className="font-medium text-white">
                  {isOfflineMode ? "Offline (Local Edge Buffer)" : "5G Cellular LTE • Mesh"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/50">Edge Latency to ONE:</span>
                <span className="text-white font-medium">{isOfflineMode ? "0ms (Local)" : "14ms"}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/50">Local Caching Resilience:</span>
                <span className="text-white font-medium">100% Zero-Loss SQLite</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/50">Cryptographic Proof:</span>
                <span className="text-white/70 font-mono text-[11px]">{proofHash}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/50">Multi-Screen Sync Drift:</span>
                <span className="text-white font-medium">&lt; 2ms (Sub-Frame)</span>
              </div>
            </div>

            {/* Simulated Live Console Log Bar */}
            <div className="mt-4 p-3 rounded-xl bg-black border border-white/10 text-xs font-mono leading-relaxed text-white/80">
              <div className="text-[10px] tracking-wider text-white/40 mb-1">Live Event Stream</div>
              <div className="flex items-start gap-2">
                <span className="text-white/50 animate-pulse">❯</span>
                <span className="line-clamp-2">{logMessage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
