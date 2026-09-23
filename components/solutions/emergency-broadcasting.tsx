"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertTriangle, FiRadio, FiShield, FiNavigation, FiActivity, FiMapPin } from "react-icons/fi";
import { RiBroadcastLine, RiAlarmWarningLine } from "react-icons/ri";

interface EmergencyOp {
  id: string;
  title: string;
  desc: string;
  img: string;
  badge: string;
  severity: "CRITICAL" | "HIGH" | "ADVISORY";
  sampleNotice: string;
}

export function EmergencyBroadcasting() {
  const emergencyOps: EmergencyOp[] = [
    {
      id: "broadcast",
      title: "Broadcast",
      desc: "Mass civic communication channels and urgent citywide public notifications.",
      img: "/images/emergency/broadcast.png",
      badge: "Mass Dispatch",
      severity: "ADVISORY",
      sampleNotice: "MUNICIPAL NOTICE: ROUTE 42 DETOUR ACTIVE DUE TO CIVIC EVENT. FOLLOW DIGITAL BUS STOPS.",
    },
    {
      id: "flood",
      title: "Flood Alerts",
      desc: "Early warning systems, water-logging heatmaps, and real-time safe route guidance.",
      img: "/images/emergency/flood.png",
      badge: "Hydro Threat",
      severity: "CRITICAL",
      sampleNotice: "FLASH FLOOD RED ALERT: CAUTION ON LOW-LYING CORRIDORS. WATER LEVEL 3.2M. TAKE HIGHWAY EXIT 4.",
    },
    {
      id: "fire",
      title: "Fire Alerts",
      desc: "Rapid fire response notifications, smoke vector advisories, and zone evacuation directives.",
      img: "/images/emergency/fire.png",
      badge: "Evacuation",
      severity: "CRITICAL",
      sampleNotice: "FIRE EMERGENCY: SECTOR 7 INDUSTRIAL AREA. CLEAR RIGHT LANES FOR FIRST RESPONDER APPARATUS.",
    },
    {
      id: "earthquake",
      title: "Earthquake Alerts",
      desc: "Instant seismic sensor integration and immediate vehicle speed deceleration directives.",
      img: "/images/emergency/earthquake.png",
      badge: "Seismic 6.4M",
      severity: "CRITICAL",
      sampleNotice: "SEISMIC WAVE DETECTED: FLEET DIRECTIVE: REDUCE TRANSIT SPEED TO 20 KM/H. AVOID FLYOVERS.",
    },
    {
      id: "missing",
      title: "Missing Person Alerts",
      desc: "Amber alert integration and automated cross-network vehicle screen broadcasting.",
      img: "/images/emergency/missing.png",
      badge: "Amber Alert",
      severity: "HIGH",
      sampleNotice: "AMBER ALERT: SILVER SEDAN TS-09-EA-4412 // CONTACT CITY DISPATCH 112 IMMEDIATELY.",
    },
    {
      id: "security",
      title: "Security Alerts",
      desc: "Civic security notifications, perimeter alerts, and authorized public bulletins.",
      img: "/images/emergency/security.png",
      badge: "Perimeter",
      severity: "HIGH",
      sampleNotice: "CIVIC SECURITY ADVISORY: RESTRICTED ACCESS IN ZONE 3. MUNICIPAL ROUTE DETOUR IN EFFECT.",
    },
  ];

  const [activeAlert, setActiveAlert] = useState<EmergencyOp>(emergencyOps[1]); // Default to Flood Alert

  const advantages = [
    { title: "Emergency Communication", desc: "Architecture designed to broadcast verified civic alerts and public safety notices across transit corridors." },
    { title: "Traffic Information", desc: "Dynamic detours, road closures, and traffic management updates delivered to moving displays in real time." },
    { title: "Public Safety Messaging", desc: "Targeted public advisories and safe routing guidance for specific urban districts." },
    { title: "Transport & Civic Advisories", desc: "Timely municipal bulletins, transit disruptions, and official citizen updates." },
  ];

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Civic Protection • Public Information Channel
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase leading-tight">
            Public Information &amp; <span className="gradient-text">Civic Communication</span>
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mt-3 font-normal leading-relaxed">
            Connected mobility can become an additional channel for authorized public information. When authorized by municipal or transit authorities, digital transit surfaces can communicate critical advisories across urban routes.
          </p>
        </div>

        {/* Live Simulation Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 shrink-0 font-mono text-xs text-white/70">
          <FiRadio className="text-red-400 animate-pulse" />
          <span>Interactive Alert Test Console</span>
        </div>
      </div>

      {/* 6 Emergency Cards Grid as in vmovexa.com */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {emergencyOps.map((op) => {
          const isCurrent = activeAlert.id === op.id;
          return (
            <motion.div
              key={op.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveAlert(op)}
              className={`emergency-card cursor-pointer ${
                isCurrent
                  ? "!border-red-500/70 !bg-red-950/20 shadow-[0_0_30px_rgba(239,68,68,0.25)]"
                  : ""
              }`}
            >
              <div className="emergency-card-image">
                <Image
                  src={op.img}
                  alt={op.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
                <div className="emergency-pulse" />
              </div>

              <div className="emergency-card-content">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold text-white uppercase tracking-tight">
                    {op.title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 uppercase">
                    {op.badge}
                  </span>
                </div>
                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {op.desc}
                </p>
              </div>

              <div className="emergency-border" />
            </motion.div>
          );
        })}
      </div>

      {/* Live Interactive Emergency Broadcast Simulator Display */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#07090e] border border-red-500/30 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
        
        {/* Simulator Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
            <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest">
              SIMULATED ON-VEHICLE CIVIC BROADCAST
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-white/60">
            <span>Click any advisory category above to simulate authorized screen broadcast</span>
          </div>
        </div>

        {/* The Digital Vehicle Display Screen Simulation */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-black border-2 border-red-500/40 relative overflow-hidden shadow-[inset_0_0_40px_rgba(239,68,68,0.2)]">
          {/* Subtle Scanlines effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />

          {/* Screen HUD Top */}
          <div className="flex items-center justify-between text-[11px] font-mono text-red-400 border-b border-red-500/20 pb-3 mb-5">
            <div className="flex items-center gap-2">
              <RiAlarmWarningLine size={16} className="text-red-500 animate-bounce" />
              <span className="font-bold tracking-widest">AUTHORIZED CIVIC INFORMATION BROADCAST</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>CHANNEL: AUTHORIZED CIVIC FEED</span>
              <span>GEO-ZONE: TRANSIT CORRIDOR</span>
              <span>STATUS: BROADCASTING</span>
            </div>
          </div>

          {/* Alert Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAlert.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-3 flex justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-red-500/10 border-2 border-red-500 flex items-center justify-center p-4 relative shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                  <Image
                    src={activeAlert.img}
                    alt={activeAlert.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div className="emergency-pulse" />
                </div>
              </div>

              <div className="md:col-span-9 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <span>LEVEL: {activeAlert.severity}</span>
                  <span>•</span>
                  <span>{activeAlert.title}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight leading-snug">
                  {activeAlert.sampleNotice}
                </h4>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-white/70">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <FiMapPin size={13} /> GEOFENCE: ACTIVE TRANSIT ZONE
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <FiNavigation size={13} /> EVACUATION CORRIDOR: OPEN
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <FiActivity size={13} /> PASSENGER HUD: SYNCHRONIZED
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Advantage Badges from vmovexa.com */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
          {advantages.map((adv, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {adv.title}
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed font-sans">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
