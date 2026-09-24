"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCloud,
  FiCpu,
  FiTv,
  FiDatabase,
  FiActivity,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";
import { RiCarLine, RiBroadcastLine, RiBuilding4Line } from "react-icons/ri";
import { EditorialLine } from "@/components/animations/editorial-text";
import { GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";

const pillars = [
  {
    title: "Cloud intelligence.",
    desc: "Centralized fleet models, global coordination, and policy distribution at scale.",
    icon: FiCloud,
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    glow: "group-hover:border-cyan-400/50",
  },
  {
    title: "Edge computing.",
    desc: "Low-latency local execution directly on physical vehicles in motion.",
    icon: FiCpu,
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
    glow: "group-hover:border-indigo-400/50",
  },
  {
    title: "Connected vehicles.",
    desc: "Transforming public transit and fleets into programmable digital assets.",
    icon: RiCarLine,
    accent: "text-blue-400",
    border: "border-blue-500/20",
    glow: "group-hover:border-blue-400/50",
  },
  {
    title: "Contextual media.",
    desc: "Hyper-targeted, geofenced digital screens that adapt to urban location and time.",
    icon: FiTv,
    accent: "text-purple-400",
    border: "border-purple-500/20",
    glow: "group-hover:border-purple-400/50",
  },
  {
    title: "Real-world data.",
    desc: "Actionable movement telemetry, spatial density, and verified proof-of-performance.",
    icon: FiDatabase,
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "group-hover:border-emerald-400/50",
  },
];

const ecosystemOutputs = [
  {
    title: "Mobility Intelligence",
    desc: "Route optimization & transit insights",
    icon: FiActivity,
    color: "text-cyan-400",
  },
  {
    title: "Digital Media",
    desc: "Dynamic in-motion DOOH inventory",
    icon: RiBroadcastLine,
    color: "text-purple-400",
  },
  {
    title: "Real-World Data",
    desc: "Audited spatial & road telemetry",
    icon: FiDatabase,
    color: "text-emerald-400",
  },
  {
    title: "Enterprise SaaS",
    desc: "Centralized fleet management platform",
    icon: FiLayers,
    color: "text-blue-400",
  },
  {
    title: "Smart City Infrastructure",
    desc: "Civic communication & urban mobility",
    icon: RiBuilding4Line,
    color: "text-indigo-400",
  },
];

export function WhatIsVmovexaSection() {
  return (
    <section className="py-24 sm:py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header: 10-Second Clarity */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-4">
              <span className="text-cyan-400 font-bold">02</span>
              <span className="text-white/30">/</span>
              <span>THE INTELLIGENCE LAYER</span>
            </div>
          </EditorialLine>

          <EditorialLine delay={0.1}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium font-heading tracking-tight uppercase text-white leading-[1.08] mb-6">
              VMOVEXA. <br />
              <span className="gradient-text font-semibold">
                The intelligence layer for moving infrastructure.
              </span>
            </h2>
          </EditorialLine>

          <BlurReveal delay={0.2}>
            <p className="text-base sm:text-lg text-white/70 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              We connect physical vehicles, screens, edge computing, and centralized cloud systems into one unified mobility intelligence stack.
            </p>
          </BlurReveal>
        </div>

        {/* The 5 Core Dimensions Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <GsapScrollReveal key={pillar.title} delay={i * 0.08}>
                <TiltCard maxTilt={5} className="h-full">
                  <div
                    className={`p-6 rounded-2xl bg-white/[0.02] border ${pillar.border} ${pillar.glow} hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group cursor-default shadow-lg h-full`}
                  >
                    <div>
                      <div className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 ${pillar.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </GsapScrollReveal>
            );
          })}
        </div>

        {/* Visual Architecture Flow: VEHICLE → VMOVEXA CORE → CLOUD → ECOSYSTEM */}
        <GsapScrollReveal delay={0.25}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] via-black to-white/[0.02] border border-white/15 relative overflow-hidden shadow-2xl">
            {/* Flow Eyebrow */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 mb-8 border-b border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-1">
                  Ecosystem Architecture
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  How Intelligence Moves Through the Physical World
                </h4>
              </div>
              <span className="font-mono text-xs text-white/40">
                END-TO-END MOBILITY STACK
              </span>
            </div>

            {/* Step-by-Step Ecosystem Hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
              {/* Node 1: VEHICLE */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                    Level 01
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <RiCarLine size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white uppercase tracking-wide">
                      Vehicle
                    </h5>
                    <div className="text-xs text-white/50 font-mono">
                      Physical Moving Fleets
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Buses, shuttles, and commercial transit fleets traveling through urban corridors.
                </p>
              </div>

              {/* Node 2: VMOVEXA CORE */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-indigo-500/30 relative group hover:border-indigo-400/60 transition-colors shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest">
                    Level 02
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                    <FiCpu size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white uppercase tracking-wide">
                      VMOVEXA Core
                    </h5>
                    <div className="text-xs text-indigo-400 font-mono font-medium">
                      In-Vehicle Edge Compute
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Vehicle-side operating runtime that evaluates location logic and syncs digital screens locally.
                </p>
              </div>

              {/* Node 3: CLOUD */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-purple-500/30 relative group hover:border-purple-400/60 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                    Level 03
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <FiCloud size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white uppercase tracking-wide">
                      Cloud
                    </h5>
                    <div className="text-xs text-purple-400 font-mono font-medium">
                      Global Control &amp; Scale
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Centralized platform defining fleet policies, campaign rules, and telemetry models across the world.
                </p>
              </div>
            </div>

            {/* Connecting Transition Divider with Flow Pulse */}
            <div className="flex items-center justify-center py-2 mb-8">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 font-mono text-[11px] text-white/60">
                <span className="text-cyan-400">↓</span>
                <span>Powering Enterprise Mobility Dimensions</span>
                <span className="text-cyan-400">↓</span>
              </div>
            </div>

            {/* Output Dimensions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-left">
              {ecosystemOutputs.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors group cursor-default"
                  >
                    <div className={`${item.color} mb-2.5`}>
                      <ItemIcon size={18} />
                    </div>
                    <div className="text-xs font-semibold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-white/50 leading-snug font-light">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
