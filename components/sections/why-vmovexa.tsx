"use client";

import React from "react";
import { EditorialLine } from "@/components/animations/editorial-text";
import { GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";

interface PillarItem {
  number: string;
  title: string;
  desc: string;
  gradientId: string;
  glowColor: string;
  renderIcon: (gradientId: string) => React.ReactNode;
}

const pillars: PillarItem[] = [
  {
    number: "01",
    title: "Smarter Operations",
    desc: "Optimize fleets, reduce costs and improve efficiency.",
    gradientId: "grad-smarter-ops",
    glowColor: "rgba(56, 189, 248, 0.25)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Main lower gear */}
        <circle cx="22" cy="33" r="7" stroke={`url(#${gradId})`} strokeWidth="2.2" />
        <path
          d="M22 22v4M22 40v4M11 33h4M29 33h4M14.5 25.5l2.8 2.8M26.7 37.7l2.8 2.8M14.5 40.5l2.8-2.8M26.7 28.3l2.8-2.8"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Secondary upper gear */}
        <circle cx="34" cy="21" r="5" stroke={`url(#${gradId})`} strokeWidth="2" strokeDasharray="3 2" />
        <path
          d="M34 13v3M34 26v3M26 21h3M39 21h3M28.5 15.5l2 2M37.5 24.5l2 2M28.5 26.5l2-2M37.5 17.5l2-2"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Dynamic upward arrow */}
        <path
          d="M17 38 L39 16 M30 16 H39 V25"
          stroke={`url(#${gradId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Safer Journeys",
    desc: "Advanced safety systems ensuring passenger protection.",
    gradientId: "grad-safer-journeys",
    glowColor: "rgba(168, 85, 247, 0.25)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Dashed trajectory route */}
        <path
          d="M14 43 C 20 43, 24 38, 28 38 C 34 38, 38 41, 44 41"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeDasharray="2 3"
          strokeLinecap="round"
        />
        {/* Primary location pin */}
        <path
          d="M28 11 C 21 11, 16 16.5, 16 23.5 C 16 32, 28 41, 28 41 C 28 41, 40 32, 40 23.5 C 40 16.5, 35 11, 28 11 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Passenger silhouette inside pin */}
        <circle cx="28" cy="20" r="3.2" stroke={`url(#${gradId})`} strokeWidth="1.8" />
        <path
          d="M22 28 C 22 25, 25 24.5, 28 24.5 C 31 24.5, 34 25, 34 28"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Security badge at top-right */}
        <circle cx="39" cy="15" r="5" stroke={`url(#${gradId})`} strokeWidth="1.8" fill="#090a0f" />
        <path
          d="M37 15 L38.5 16.5 L41.5 13.5"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "New Revenue Streams",
    desc: "Unlock advertising and partnership opportunities at scale.",
    gradientId: "grad-new-revenue",
    glowColor: "rgba(236, 72, 153, 0.25)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(236,72,153,0.35)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Left coin stack */}
        <ellipse cx="20" cy="31" rx="6" ry="2.5" stroke={`url(#${gradId})`} strokeWidth="1.8" />
        <path d="M14 31v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke={`url(#${gradId})`} strokeWidth="1.8" />
        <path d="M14 35v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke={`url(#${gradId})`} strokeWidth="1.8" />

        {/* Right coin stack (higher) */}
        <ellipse cx="32" cy="26" rx="6" ry="2.5" stroke={`url(#${gradId})`} strokeWidth="1.8" />
        <path d="M26 26v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke={`url(#${gradId})`} strokeWidth="1.8" />
        <path d="M26 30v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke={`url(#${gradId})`} strokeWidth="1.8" />
        <path d="M26 34v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke={`url(#${gradId})`} strokeWidth="1.8" />

        {/* Dynamic rising growth chart */}
        <path
          d="M14 26 L22 20 L28 23 L39 12"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 12 H39 V19"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Connected Infrastructure",
    desc: "Seamless connectivity across vehicles, cities and systems.",
    gradientId: "grad-connected-infra",
    glowColor: "rgba(59, 130, 246, 0.25)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Radial connecting spokes */}
        <line x1="28" y1="28" x2="28" y2="13" stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="28" y1="28" x2="41" y2="19" stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="28" y1="28" x2="38" y2="39" stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="28" y1="28" x2="18" y2="39" stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="28" y1="28" x2="15" y2="19" stroke={`url(#${gradId})`} strokeWidth="1.8" strokeLinecap="round" />

        {/* Central Core Hub */}
        <circle cx="28" cy="28" r="5" stroke={`url(#${gradId})`} strokeWidth="2.4" fill="#090a0f" />
        <circle cx="28" cy="28" r="2" fill={`url(#${gradId})`} />

        {/* Satellite distributed nodes */}
        <circle cx="28" cy="13" r="3" stroke={`url(#${gradId})`} strokeWidth="2" fill="#090a0f" />
        <circle cx="41" cy="19" r="3" stroke={`url(#${gradId})`} strokeWidth="2" fill="#090a0f" />
        <circle cx="38" cy="39" r="3" stroke={`url(#${gradId})`} strokeWidth="2" fill="#090a0f" />
        <circle cx="18" cy="39" r="3" stroke={`url(#${gradId})`} strokeWidth="2" fill="#090a0f" />
        <circle cx="15" cy="19" r="3" stroke={`url(#${gradId})`} strokeWidth="2" fill="#090a0f" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Sustainable Future",
    desc: "Solar-powered mobility for a cleaner, greener planet.",
    gradientId: "grad-sustainable-future",
    glowColor: "rgba(52, 211, 153, 0.25)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Circular Eco Orbit Arrows */}
        <path
          d="M13 28 A 15 15 0 0 1 42 20"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M39 16 L43 20 L38 23"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43 28 A 15 15 0 0 1 14 36"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 40 L13 36 L18 33"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Ecological Leaf with Stem */}
        <path
          d="M21 34 C 21 23, 31 18, 35 18 C 35 29, 29 35, 21 34 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M23 31 C 26 28, 29 25, 33 21"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function WhyVmovexaSection() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-black border-b border-white/[0.08]">
      {/* Dynamic Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Cyber Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,#000_65%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5 shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
              <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-white/70">
                WHY VMOVEXA
              </span>
            </div>
          </EditorialLine>

          <EditorialLine delay={0.1}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Transportation <span className="gradient-text">deserves better.</span>
            </h2>
          </EditorialLine>

          {/* Sleek Brand Gradient Accent Divider */}
          <div className="flex justify-center mt-5">
            <div className="w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.45)]" />
          </div>
        </div>

        {/* 5 Pillars Layout */}
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] divide-dashed lg:divide-solid">
            {pillars.map((pillar, idx) => (
              <GsapScrollReveal key={pillar.title} delay={idx * 0.08}>
                <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:bg-white/[0.03] h-full justify-between">
                  {/* Subtle hover backlight glow */}
                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: pillar.glowColor }}
                  />

                  {/* Top Numeric Label */}
                  <div className="w-full flex items-center justify-between mb-6 opacity-40 group-hover:opacity-75 transition-opacity">
                    <span className="font-mono text-[10px] tracking-widest text-zinc-400">
                      SYS // {pillar.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors" />
                  </div>

                  {/* Icon with interactive scaling & glow */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" style={{ background: pillar.glowColor }} />
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                      {pillar.renderIcon(pillar.gradientId)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Subtle Expanding Bottom Accent Line on Hover */}
                  <div className="w-full flex justify-center pt-6">
                    <div className="h-[2px] w-0 group-hover:w-12 transition-all duration-300 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
                  </div>
                </div>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
