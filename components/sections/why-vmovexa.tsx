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
    glowColor: "rgba(56, 189, 248, 0.28)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_16px_rgba(56,189,248,0.4)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Main lower gear */}
        <circle cx="22" cy="33" r="7.5" stroke={`url(#${gradId})`} strokeWidth="2.5" />
        <path
          d="M22 21v4.5M22 40.5v4.5M10.5 33h4.5M29.5 33h4.5M14 25l3 3M27 38l3 3M14 41l3-3M27 28l3-3"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Secondary upper gear */}
        <circle cx="35" cy="20" r="5.5" stroke={`url(#${gradId})`} strokeWidth="2.2" strokeDasharray="3.5 2" />
        <path
          d="M35 12v3.5M35 25v3.5M27 20h3.5M40 20h3.5M29 14l2.5 2.5M38.5 23.5l2.5 2.5M29 26l2.5-2.5M38.5 16.5l2.5-2.5"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Dynamic upward arrow */}
        <path
          d="M16 39 L40 15 M30 15 H40 V25"
          stroke={`url(#${gradId})`}
          strokeWidth="2.8"
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
    glowColor: "rgba(168, 85, 247, 0.28)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_16px_rgba(168,85,247,0.4)]"
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
          d="M13 44 C 19 44, 23 39, 28 39 C 33 39, 37 42, 43 42"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeDasharray="2.5 3.5"
          strokeLinecap="round"
        />
        {/* Primary location pin */}
        <path
          d="M28 10 C 20.5 10, 15 16, 15 23.5 C 15 32.5, 28 42, 28 42 C 28 42, 41 32.5, 41 23.5 C 41 16, 35.5 10, 28 10 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Passenger silhouette inside pin */}
        <circle cx="28" cy="19.5" r="3.5" stroke={`url(#${gradId})`} strokeWidth="2" />
        <path
          d="M21.5 28 C 21.5 24.5, 24.5 24, 28 24 C 31.5 24, 34.5 24.5, 34.5 28"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Security badge at top-right */}
        <circle cx="40" cy="14" r="5.5" stroke={`url(#${gradId})`} strokeWidth="2" fill="#090a0f" />
        <path
          d="M38 14 L39.5 15.5 L42.5 12.5"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
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
    glowColor: "rgba(236, 72, 153, 0.28)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_16px_rgba(236,72,153,0.4)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Left coin stack */}
        <ellipse cx="20" cy="31" rx="6.5" ry="2.8" stroke={`url(#${gradId})`} strokeWidth="2.2" />
        <path d="M13.5 31v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-4.5" stroke={`url(#${gradId})`} strokeWidth="2.2" />
        <path d="M13.5 35.5v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-4.5" stroke={`url(#${gradId})`} strokeWidth="2.2" />

        {/* Right coin stack (higher) */}
        <ellipse cx="33" cy="25" rx="6.5" ry="2.8" stroke={`url(#${gradId})`} strokeWidth="2.2" />
        <path d="M26.5 25v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-4.5" stroke={`url(#${gradId})`} strokeWidth="2.2" />
        <path d="M26.5 29.5v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-4.5" stroke={`url(#${gradId})`} strokeWidth="2.2" />
        <path d="M26.5 34v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-4.5" stroke={`url(#${gradId})`} strokeWidth="2.2" />

        {/* Dynamic rising growth chart */}
        <path
          d="M13 25 L22 18 L28 22 L40 10"
          stroke={`url(#${gradId})`}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 10 H40 V18"
          stroke={`url(#${gradId})`}
          strokeWidth="2.6"
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
    glowColor: "rgba(59, 130, 246, 0.28)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {/* Radial connecting spokes */}
        <line x1="28" y1="28" x2="28" y2="12" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="28" x2="42" y2="18" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="28" x2="39" y2="40" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="28" x2="17" y2="40" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="28" x2="14" y2="18" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />

        {/* Central Core Hub */}
        <circle cx="28" cy="28" r="5.5" stroke={`url(#${gradId})`} strokeWidth="2.6" fill="#090a0f" />
        <circle cx="28" cy="28" r="2.2" fill={`url(#${gradId})`} />

        {/* Satellite distributed nodes */}
        <circle cx="28" cy="12" r="3.5" stroke={`url(#${gradId})`} strokeWidth="2.2" fill="#090a0f" />
        <circle cx="42" cy="18" r="3.5" stroke={`url(#${gradId})`} strokeWidth="2.2" fill="#090a0f" />
        <circle cx="39" cy="40" r="3.5" stroke={`url(#${gradId})`} strokeWidth="2.2" fill="#090a0f" />
        <circle cx="17" cy="40" r="3.5" stroke={`url(#${gradId})`} strokeWidth="2.2" fill="#090a0f" />
        <circle cx="14" cy="18" r="3.5" stroke={`url(#${gradId})`} strokeWidth="2.2" fill="#090a0f" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Sustainable Future",
    desc: "Solar-powered mobility for a cleaner, greener planet.",
    gradientId: "grad-sustainable-future",
    glowColor: "rgba(52, 211, 153, 0.28)",
    renderIcon: (gradId) => (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_16px_rgba(52,211,153,0.4)]"
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
          d="M12 28 A 16 16 0 0 1 43 19"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 15 L44 19 L39 23"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 28 A 16 16 0 0 1 13 37"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 41 L12 37 L17 33"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Ecological Leaf with Stem */}
        <path
          d="M20 35 C 20 23, 31 17, 36 17 C 36 29, 29 36, 20 35 Z"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M22 32 C 26 28, 29 25, 34 20"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function WhyVmovexaSection() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-black">
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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white leading-tight mb-4 uppercase">
              Transportation <span className="gradient-text font-semibold">Deserves Better.</span>
            </h2>
          </EditorialLine>

          {/* Sleek Brand Gradient Accent Divider */}
          <div className="flex justify-center mt-5">
            <div className="w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.45)]" />
          </div>
        </div>

        {/* 5 Pillars Layout */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#07080d]/80 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {pillars.map((pillar, idx) => (
              <GsapScrollReveal key={pillar.title} delay={idx * 0.08}>
                <div className="relative py-10 px-5 sm:py-12 sm:px-6 flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:bg-white/[0.025] h-full justify-between">
                  {/* Subtle hover backlight glow */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: pillar.glowColor }}
                  />

                  {/* Icon with interactive scaling & glow */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                      style={{ background: pillar.glowColor }}
                    />
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/[0.045] border border-white/[0.12] group-hover:border-white/30 flex items-center justify-center transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:bg-white/[0.08]">
                      {pillar.renderIcon(pillar.gradientId)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 flex flex-col items-center justify-start max-w-[220px]">
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Subtle Expanding Bottom Accent Line on Hover */}
                  <div className="w-full flex justify-center pt-6 mt-2">
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
