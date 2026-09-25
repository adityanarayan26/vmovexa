"use client";

import Image from "next/image";

interface EmergencyOp {
  id: string;
  title: string;
  desc: string;
  img: string;
}

export function EmergencyBroadcasting() {
  const emergencyOps: EmergencyOp[] = [
    {
      id: "broadcast",
      title: "Broadcast",
      desc: "Mass communication channels",
      img: "/images/emergency/broadcast.png",
    },
    {
      id: "flood",
      title: "Flood Alerts",
      desc: "Early warning systems",
      img: "/images/emergency/flood.png",
    },
    {
      id: "fire",
      title: "Fire Alerts",
      desc: "Rapid fire response alerts",
      img: "/images/emergency/fire.png",
    },
    {
      id: "earthquake",
      title: "Earthquake Alerts",
      desc: "Seismic activity warnings",
      img: "/images/emergency/earthquake.png",
    },
    {
      id: "missing",
      title: "Missing Person Alerts",
      desc: "Amber alert integration",
      img: "/images/emergency/missing.png",
    },
    {
      id: "security",
      title: "Security Alerts",
      desc: "National security notifications",
      img: "/images/emergency/security.png",
    },
  ];

  return (
    <div className="pt-4 pb-2">
      {/* 01 — Section Header (Identical to reference screenshot 2) */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
          Emergency <span className="gradient-text font-medium">Operations</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-normal mt-3 max-w-2xl mx-auto">
          When seconds count, our system delivers life-saving alerts
        </p>
      </div>

      {/* 02 — 6 Clean Emergency Cards Grid (2 rows of 3, identical to screenshot 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyOps.map((op) => {
          return (
            <div
              key={op.id}
              className="emergency-card cursor-pointer group"
            >
              <div className="emergency-card-image">
                <div className="emergency-pulse" />
                <Image
                  src={op.img}
                  alt={op.title}
                  width={56}
                  height={56}
                  className="object-contain relative z-10"
                />
              </div>

              <div className="emergency-card-content">
                <h3 className="text-white group-hover:text-[#d946ef] transition-colors">{op.title}</h3>
                <p className="text-zinc-400">{op.desc}</p>
              </div>

              <div className="emergency-border" />
            </div>
          );
        })}
      </div>

      {/* 03 — Full-Width Bottom Gradient Line (Identical to screenshot 2) */}
      <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 mt-16 sm:mt-20 opacity-90 shadow-[0_0_15px_rgba(236,72,153,0.3)]" />
    </div>
  );
}
