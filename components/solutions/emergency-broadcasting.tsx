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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
          Emergency <span className="gradient-text font-medium">Operations</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 font-normal mt-3 max-w-2xl mx-auto">
          When seconds count, our system delivers life-saving alerts
        </p>
      </div>

      {/* 02 — 6 Clean Emergency Cards Grid (2 rows of 3, identical to screenshot 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyOps.map((op) => {
          return (
            <div
              key={op.id}
              className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center gap-6 group hover:border-[#d946ef]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-[72px] h-[72px] flex-shrink-0 flex items-center justify-center p-3 rounded-2xl bg-transparent">
                <div className="absolute inset-0 border-2 border-[#d946ef] rounded-2xl opacity-0 group-hover:animate-[emergencyPulse_2s_infinite_ease-in-out]" />
                <Image
                  src={op.img}
                  alt={op.title}
                  width={56}
                  height={56}
                  className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#d946ef] transition-colors mb-1">{op.title}</h3>
                <p className="text-sm text-zinc-500">{op.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-[#d946ef] w-0 group-hover:w-full transition-all duration-300" />
            </div>
          );
        })}
      </div>

      {/* 03 — Full-Width Bottom Gradient Line (Identical to screenshot 2) */}
      <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 mt-16 sm:mt-20 opacity-90 shadow-[0_0_15px_rgba(236,72,153,0.3)]" />
    </div>
  );
}
