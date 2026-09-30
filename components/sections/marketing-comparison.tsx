"use client";

import { EditorialLine } from "@/components/animations/editorial-text";
import { GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import Image from "next/image";
import {
  Target,
  MonitorPlay,
  Layers,
  Globe2,
  Users,
  Cpu,
  BarChart3,
  Leaf,
  TrendingUp,
  Compass,
  Check,
  Minus,
} from "lucide-react";

interface ComparisonRow {
  feature: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  traditional: string;
  vmovexa: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Targeting",
    icon: Target,
    traditional: "Broad, unsegmented audience",
    vmovexa: "Location + Route + Time + Context",
  },
  {
    feature: "Media",
    icon: MonitorPlay,
    traditional: "Static placements & fixed print",
    vmovexa: "Moving, connected digital media",
  },
  {
    feature: "Content",
    icon: Layers,
    traditional: "Fixed, static campaigns",
    vmovexa: "Dynamic, context-aware content",
  },
  {
    feature: "Reach",
    icon: Globe2,
    traditional: "Fragmented location-by-location",
    vmovexa: "Single-click national fleet reach",
  },
  {
    feature: "Manpower",
    icon: Users,
    traditional: "High manual coordination & labor",
    vmovexa: "Lower through cloud automation",
  },
  {
    feature: "Scalability",
    icon: Cpu,
    traditional: "Physical, slow & resource-heavy",
    vmovexa: "Cloud-to-edge instantly scalable",
  },
  {
    feature: "Measurement",
    icon: BarChart3,
    traditional: "Sampled, estimated exposure",
    vmovexa: "Real-time campaign & playback audit",
  },
  {
    feature: "Sustainability",
    icon: Leaf,
    traditional: "Material & vinyl waste dependent",
    vmovexa: "Digital-first clean infrastructure",
  },
  {
    feature: "Cost Efficiency",
    icon: TrendingUp,
    traditional: "Higher operational overhead",
    vmovexa: "Substantially more efficient at scale",
  },
  {
    feature: "Core Shift",
    icon: Compass,
    traditional: "Buying passive impressions",
    vmovexa: "Connect verified attention with context",
  },
];

export function MarketingComparisonSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      {/* Cyber Grid Texture Overlay on Pure White */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200/80 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                CAPABILITY BENCHMARK
              </span>
            </div>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-zinc-900 leading-[0.98] sm:leading-[1.02] mb-4 uppercase">
              Don&apos;t Just Reach People.<br />
              <span className="gradient-text font-bold">Reach The Right Context.</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.2}>
            <p className="text-base sm:text-lg text-zinc-600 font-light max-w-3xl mx-auto leading-relaxed">
              <strong className="font-semibold text-zinc-900">VMOVEXA</strong> transforms static roadside visibility into a software-defined, context-aware intelligence network.
            </p>
          </EditorialLine>
        </div>

        {/* Elegant Enterprise Table Frame */}
        <GsapScrollReveal delay={0.25}>
          <div className="rounded-[2rem] sm:rounded-[2.4rem] p-1.5 sm:p-2 bg-gradient-to-b from-zinc-200/90 via-zinc-100/60 to-zinc-200/80 border border-zinc-200/90 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.07),0_0_1px_1px_rgba(0,0,0,0.02)] relative">
            <div className="rounded-[1.7rem] sm:rounded-[2.1rem] overflow-hidden bg-white border border-zinc-200/80 relative">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[780px]">
                  <thead>
                    <tr>
                      {/* Column 1: Dimension / Capability */}
                      <th className="py-6 px-6 sm:px-8 w-[28%] bg-white border-b border-zinc-200/70 align-bottom">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                            01 // DIMENSION
                          </span>
                          <span className="text-xs sm:text-[13px] font-bold text-zinc-900 tracking-wider uppercase">
                            Major Difference
                          </span>
                        </div>
                      </th>

                      {/* Column 2: Traditional Marketing */}
                      <th className="py-6 px-6 sm:px-8 w-[32%] bg-zinc-50/70 border-b border-zinc-200/70 border-l border-zinc-200/60 align-bottom">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                              02 // LEGACY
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium tracking-wide bg-zinc-200/60 text-zinc-600 border border-zinc-300/40">
                              STATUS QUO
                            </span>
                          </div>
                          <span className="text-xs sm:text-[13px] font-semibold text-zinc-600 tracking-wider uppercase">
                            Traditional Marketing
                          </span>
                        </div>
                      </th>

                      {/* Column 3: VMOVEXA (Elevated Highlighted Column) */}
                      <th className="py-6 px-6 sm:px-8 w-[40%] bg-gradient-to-b from-cyan-50/80 via-white to-purple-50/30 relative overflow-hidden border-b border-zinc-200/70 border-l-2 border-cyan-400/80 align-bottom shadow-[inset_0_0_20px_rgba(6,182,212,0.03)]">
                        {/* Top Brand Gradient Highlight Strip */}
                        <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_2px_10px_rgba(6,182,212,0.35)]" />

                        <div className="relative z-10 flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-700 font-semibold flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                              03 // NEXT-GEN
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-semibold tracking-wider bg-cyan-100 text-cyan-800 border border-cyan-300/80 shadow-xs">
                              INTELLIGENT EDGE
                            </span>
                          </div>
                          <div className="flex items-center gap-2.5 pt-0.5">
                            <Image
                              src="/logos/logo-hover-menu-cropped.png"
                              alt="VMOVEXA"
                              width={160}
                              height={22}
                              className="h-4 sm:h-[18px] w-auto object-contain"
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparisonData.map((row, idx) => {
                      const Icon = row.icon;
                      const isLast = idx === comparisonData.length - 1;

                      return (
                        <tr key={row.feature} className="group transition-colors duration-200">
                          {/* Col 1: Capability + Icon */}
                          <td
                            className={`py-4.5 px-6 sm:py-5 sm:px-8 bg-white group-hover:bg-zinc-50/80 transition-colors ${
                              !isLast ? "border-b border-zinc-100" : ""
                            }`}
                          >
                            <div className="flex items-center gap-3.5">
                              <div className="w-8 h-8 rounded-xl bg-zinc-100 group-hover:bg-cyan-50 border border-zinc-200/80 group-hover:border-cyan-300/50 flex items-center justify-center text-zinc-500 group-hover:text-cyan-600 transition-all duration-300 shrink-0 shadow-xs">
                                <Icon size={15} strokeWidth={2.2} />
                              </div>
                              <span className="text-[14px] sm:text-[14.5px] font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                                {row.feature}
                              </span>
                            </div>
                          </td>

                          {/* Col 2: Traditional Legacy Value */}
                          <td
                            className={`py-4.5 px-6 sm:py-5 sm:px-8 bg-zinc-50/40 group-hover:bg-zinc-100/60 border-l border-zinc-200/50 transition-colors ${
                              !isLast ? "border-b border-zinc-100" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-4 h-4 rounded-full bg-zinc-200/70 flex items-center justify-center text-zinc-400 shrink-0">
                                <Minus size={10} strokeWidth={2.5} />
                              </div>
                              <span className="text-[13.5px] sm:text-[14px] text-zinc-500 font-normal leading-normal">
                                {row.traditional}
                              </span>
                            </div>
                          </td>

                          {/* Col 3: VMOVEXA Elevated Value */}
                          <td
                            className={`py-4.5 px-6 sm:py-5 sm:px-8 bg-gradient-to-b from-cyan-50/50 via-white to-purple-50/20 group-hover:bg-cyan-50/80 border-l-2 border-cyan-400/80 transition-colors ${
                              !isLast ? "border-b border-zinc-100" : ""
                            }`}
                          >
                            <div className="relative z-10 flex items-center gap-3.5">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-transform duration-300">
                                <Check size={12} strokeWidth={3} />
                              </div>
                              <span className="text-[13.5px] sm:text-[14px] font-semibold text-zinc-900 group-hover:text-cyan-950 transition-colors">
                                {row.vmovexa}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Bottom Architectural Summary Bar */}
              <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-t border-zinc-800 px-6 py-4 sm:px-8 sm:py-4.5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="font-mono text-zinc-200 tracking-wider uppercase text-[11px] font-semibold">
                    Architectural Shift
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">•</span>
                  <span className="text-zinc-400 hidden sm:inline">
                    From static roadside impressions to dynamic, edge-orchestrated intelligence.
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400 font-semibold tracking-wider">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                    100% PROGRAMMATIC VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
