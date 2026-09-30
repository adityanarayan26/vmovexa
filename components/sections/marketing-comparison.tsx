"use client";

import { EditorialLine } from "@/components/animations/editorial-text";
import { GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { FiCheckCircle, FiMinus } from "react-icons/fi";
import Image from "next/image";

const comparisonData = [
  { feature: "Targeting", traditional: "Broad audience", vmovexa: "Location + Route + Time + Context" },
  { feature: "Media", traditional: "Static placements", vmovexa: "Moving, connected media" },
  { feature: "Content", traditional: "Fixed campaigns", vmovexa: "Dynamic, context-aware content" },
  { feature: "Reach", traditional: "Location-by-location", vmovexa: "Single-click national reach" },
  { feature: "Manpower", traditional: "High", vmovexa: "Lower through automation" },
  { feature: "Scalability", traditional: "Physical & resource-heavy", vmovexa: "Cloud-to-edge scalable" },
  { feature: "Measurement", traditional: "Estimated exposure", vmovexa: "Real-time campaign & playback intelligence" },
  { feature: "Sustainability", traditional: "Material-dependent", vmovexa: "Digital-first infrastructure" },
  { feature: "Cost Efficiency", traditional: "Higher operational overhead", vmovexa: "Potentially more efficient at scale" },
  { feature: "Core Shift", traditional: "Buy attention", vmovexa: "Connect attention with context" },
];

export function MarketingComparisonSection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-white">
      {/* Cyber Grid Texture Overlay on Pure White */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <EditorialLine>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-[0.98] sm:leading-[1.02] mb-4 uppercase">
              Don't Just Reach People.<br />
              <span className="gradient-text">Reach The Right Context.</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <p className="text-lg sm:text-xl text-zinc-600 font-light max-w-3xl mx-auto leading-relaxed">
              <strong className="font-semibold text-zinc-900">VMOVEXA</strong> - Turning moving vehicles into intelligent, measurable media infrastructure.
            </p>
          </EditorialLine>
        </div>

        {/* Elegant Premium Table */}
        <GsapScrollReveal delay={0.2}>
          <div className="bg-white rounded-[2rem] border border-zinc-200/80 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="py-7 px-8 font-bold text-zinc-900 w-1/4 uppercase tracking-widest text-[11px] bg-white border-b border-zinc-100">
                      Major Difference
                    </th>
                    <th className="py-7 px-8 font-semibold text-zinc-400 w-1/3 uppercase tracking-widest text-[11px] bg-zinc-50/50 border-b border-zinc-100">
                      Traditional Marketing
                    </th>
                    <th className="py-7 px-8 font-bold text-white w-5/12 bg-[#020610] relative overflow-hidden border-b border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.15)]">
                      {/* Premium Top Gradient Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)] pointer-events-none" />
                      <div className="relative z-10 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                        <Image src="/logos/vmovexa-wordmark-light.svg" alt="VMOVEXA" width={120} height={24} className="h-4 sm:h-5 w-auto" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => {
                    const isLast = idx === comparisonData.length - 1;
                    return (
                      <tr 
                        key={idx} 
                        className="group"
                      >
                        <td className={`py-6 px-8 text-[15px] font-semibold text-zinc-900 bg-white group-hover:bg-zinc-50/30 transition-colors ${!isLast ? 'border-b border-zinc-100' : ''}`}>
                          {row.feature}
                        </td>
                        <td className={`py-6 px-8 text-[14px] text-zinc-500 bg-zinc-50/50 group-hover:bg-zinc-100/50 transition-colors ${!isLast ? 'border-b border-zinc-100' : ''}`}>
                          <div className="flex items-center gap-3">
                            <span className="text-zinc-300 shrink-0"><FiMinus size={14} /></span>
                            <span>{row.traditional}</span>
                          </div>
                        </td>
                        <td className={`py-6 px-8 text-[14px] sm:text-[15px] font-medium text-white bg-[#020610] relative shadow-[-20px_0_40px_rgba(0,0,0,0.06)] ${!isLast ? 'border-b border-white/5' : ''}`}>
                          <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative z-10 flex items-center gap-3.5">
                            <div className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                              <FiCheckCircle className="text-cyan-400" size={14} />
                            </div>
                            <span className="text-zinc-300 group-hover:text-white transition-colors">{row.vmovexa}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
