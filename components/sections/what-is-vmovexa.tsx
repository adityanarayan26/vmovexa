"use client";

import Link from "next/link";
import Image from "next/image";
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
import { RiBusLine, RiBroadcastLine, RiBuilding4Line } from "react-icons/ri";
import { EditorialLine } from "@/components/animations/editorial-text";
import { GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { WavyDivider } from "@/components/ui/wavy-divider";

const pillars = [
  {
    title: "Cloud intelligence.",
    desc: "Centralized fleet models, global coordination, and policy distribution at scale.",
    icon: FiCloud,
    accent: "text-cyan-600",
    border: "border-cyan-500/20",
    glow: "group-hover:border-cyan-400/50",
  },
  {
    title: "Edge computing.",
    desc: "Low-latency local execution directly on physical vehicles in motion.",
    icon: FiCpu,
    accent: "text-indigo-600",
    border: "border-indigo-500/20",
    glow: "group-hover:border-indigo-400/50",
  },
  {
    title: "Connected vehicles.",
    desc: "Transforming public transit and fleets into programmable digital assets.",
    icon: RiBusLine,
    accent: "text-blue-600",
    border: "border-blue-500/20",
    glow: "group-hover:border-blue-400/50",
  },
  {
    title: "Contextual media.",
    desc: "Hyper-targeted, geofenced digital screens that adapt to urban location and time.",
    icon: FiTv,
    accent: "text-purple-600",
    border: "border-purple-500/20",
    glow: "group-hover:border-purple-400/50",
  },
  {
    title: "Real-world data.",
    desc: "Actionable movement telemetry, spatial density, and verified proof-of-performance.",
    icon: FiDatabase,
    accent: "text-emerald-600",
    border: "border-emerald-500/20",
    glow: "group-hover:border-emerald-400/50",
  },
];

const ecosystemOutputs = [
  {
    title: "Mobility Intelligence",
    desc: "Route optimization & transit insights",
    icon: FiActivity,
    color: "text-cyan-600",
  },
  {
    title: "Digital Media",
    desc: "Dynamic in-motion DOOH inventory",
    icon: RiBroadcastLine,
    color: "text-purple-600",
  },
  {
    title: "Real-World Data",
    desc: "Audited spatial & road telemetry",
    icon: FiDatabase,
    color: "text-emerald-600",
  },
  {
    title: "Enterprise SaaS",
    desc: "Centralized fleet management platform",
    icon: FiLayers,
    color: "text-blue-600",
  },
  {
    title: "Smart City Infrastructure",
    desc: "Civic communication & urban mobility",
    icon: RiBuilding4Line,
    color: "text-indigo-600",
  },
];

export function WhatIsVmovexaSection() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/5 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header: 10-Second Clarity */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
              <span>THE INTELLIGENCE LAYER</span>
            </div>
          </EditorialLine>

          <EditorialLine delay={0.1}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium font-heading tracking-tight uppercase text-zinc-900 leading-[1.08] mb-6">
              <span className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src="/logos/logo-hover-menu-cropped.png"
                  alt="VMOVEXA Logo"
                  width={360}
                  height={30}
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </span>
              <span className="gradient-text font-semibold">
                The intelligence layer for moving infrastructure.
              </span>
            </h2>
          </EditorialLine>

          <BlurReveal delay={0.2}>
            <p className="text-base sm:text-lg text-zinc-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
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
                    className={`p-6 rounded-2xl bg-white border border-zinc-200 hover:border-cyan-400/40 hover:bg-zinc-50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-default shadow-sm h-full`}
                  >
                    <div>
                      <div className={`w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-200 ${pillar.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-tight group-hover:text-cyan-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed font-light group-hover:text-zinc-800">
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
          <div className="pt-12 mt-20 border-t border-zinc-200 relative">
            {/* Flow Eyebrow */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 mb-8 border-b border-zinc-200">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 block mb-1">
                  Ecosystem Architecture
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  How Intelligence Moves Through the Physical World
                </h4>
              </div>
              <span className="font-mono text-xs text-zinc-400">
                END-TO-END MOBILITY STACK
              </span>
            </div>

            {/* Step-by-Step Ecosystem Hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
              {/* Node 1: VEHICLE */}
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 relative group hover:border-cyan-400 hover:bg-zinc-50 transition-colors shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-cyan-600 uppercase tracking-widest font-semibold">
                    Level 01
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shadow-sm">
                    <RiBusLine size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-zinc-900 uppercase tracking-wide">
                      Vehicle
                    </h5>
                    <div className="text-xs text-zinc-500 font-mono">
                      Physical Moving Fleets
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Buses, shuttles, and commercial transit fleets traveling through urban corridors.
                </p>
              </div>

              {/* Node 2: VMOVEXA CORE */}
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 relative group hover:border-indigo-400 hover:bg-zinc-50 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-indigo-600 uppercase tracking-widest font-semibold">
                    Level 02
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-sm">
                    <FiCpu size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-zinc-900 uppercase tracking-wide">
                      VMOVEXA Core
                    </h5>
                    <div className="text-xs text-indigo-600 font-mono font-medium">
                      In-Vehicle Edge Compute
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Vehicle-side operating runtime that evaluates location logic and syncs digital screens locally.
                </p>
              </div>

              {/* Node 3: CLOUD */}
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 relative group hover:border-purple-400 hover:bg-zinc-50 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-purple-600 uppercase tracking-widest font-semibold">
                    Level 03
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shadow-sm">
                    <FiCloud size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-zinc-900 uppercase tracking-wide">
                      Cloud
                    </h5>
                    <div className="text-xs text-purple-600 font-mono font-medium">
                      Global Control &amp; Scale
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Centralized platform defining fleet policies, campaign rules, and telemetry models across the world.
                </p>
              </div>
            </div>

            {/* Connecting Transition Divider with Flow Pulse */}
            <div className="flex items-center justify-center py-2 mb-8">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 font-mono text-[11px] text-zinc-500 shadow-sm">
                <span className="text-cyan-600">↓</span>
                <span>Powering Enterprise Mobility Dimensions</span>
                <span className="text-cyan-600">↓</span>
              </div>
            </div>

            {/* Output Dimensions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-left">
              {ecosystemOutputs.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-cyan-200 hover:bg-zinc-50 transition-colors group cursor-default shadow-sm"
                  >
                    <div className={`${item.color} mb-2.5`}>
                      <ItemIcon size={18} />
                    </div>
                    <div className="text-xs font-semibold text-zinc-900 mb-1 group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-zinc-500 leading-snug font-light">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GsapScrollReveal>
      </div>
      
      {/* Wavy Transition to Black Section */}
      {/* Spacer to prevent wave from covering content */}
      <div className="w-full h-[30px] sm:h-[50px] lg:h-[70px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none translate-y-[1px] z-10">
        <WavyDivider fill="fill-black" variant={2} />
      </div>
    </section>
  );
}
