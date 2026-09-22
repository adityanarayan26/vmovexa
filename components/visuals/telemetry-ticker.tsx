"use client";

import { useEffect, useState } from "react";
import { FiActivity, FiCpu, FiWifi, FiGlobe, FiShield, FiMapPin } from "react-icons/fi";

export function TelemetryTicker() {
  const [latency, setLatency] = useState(12);
  const [nodeCount, setNodeCount] = useState(1428);

  // Subtle live ping simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.floor(10 + Math.random() * 5));
      if (Math.random() > 0.7) {
        setNodeCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: FiActivity, label: "Platform Status", val: "OPERATIONAL", status: "ok" },
    { icon: FiGlobe, label: "Connected Nodes", val: `${nodeCount.toLocaleString()} Fleets`, status: "neutral" },
    { icon: FiCpu, label: "Edge Sync Rate", val: "99.98%", status: "neutral" },
    { icon: FiWifi, label: "Global Edge Latency", val: `${latency}ms`, status: "ok" },
    { icon: FiMapPin, label: "Active Geofences", val: "840+ Corridors", status: "neutral" },
    { icon: FiShield, label: "Offline Cache", val: "100% Resilient", status: "ok" },
  ];

  return (
    <div className="w-full bg-[#010610]/90 border-y border-white/[0.08] backdrop-blur-md py-3 overflow-hidden select-none">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-mono">
        {/* Left Status Pulse */}
        <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0 pr-6 border-r border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-white/90 uppercase tracking-widest text-[11px] font-semibold">
            TELEMETRY LIVE
          </span>
        </div>

        {/* Scrolling / Flex Stats */}
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar scroll-smooth w-full justify-between sm:justify-start sm:px-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="flex items-center gap-2 flex-shrink-0 text-white/60">
                <Icon className={`w-3.5 h-3.5 ${s.status === "ok" ? "text-cyan-400" : "text-indigo-400"}`} />
                <span className="text-white/40 uppercase tracking-wider text-[10px] hidden md:inline">{s.label}:</span>
                <span className="text-white/90 font-medium text-[11px] tracking-wide">{s.val}</span>
              </div>
            );
          })}
        </div>

        {/* Right Protocol Badge */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0 pl-6 border-l border-white/10 text-white/40 text-[10px] tracking-widest">
          <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
            MQTT ↔ PROTOBUF
          </span>
        </div>
      </div>
    </div>
  );
}
