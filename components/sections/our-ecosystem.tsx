"use client";

import React from "react";
import Image from "next/image";
import { WavyDivider } from "@/components/ui/wavy-divider";
import { EditorialLine } from "@/components/animations/editorial-text";
import { FiShield, FiTrendingUp, FiCpu, FiCheckCircle } from "react-icons/fi";

interface EcosystemCard {
  id: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  layout: "text-top" | "image-top";
  subTag?: string;
  features?: string[];
}

// Row 1 Cards: Powered by images from "OUR ECOSYSTEM" folder
const row1Items: EcosystemCard[] = [
  {
    id: "set1-card-1",
    badge: "CORE ARCHITECTURE",
    title: "Unified Mobility Intelligence Stack",
    desc: "Security, analytics, AI telemetry, energy efficiency, cloud, and edge hardware in one unified runtime.",
    image: "/ecosystem-set1/1.jpg",
    layout: "text-top",
  },
  {
    id: "set1-card-2",
    badge: "APIS & COMMERCE",
    subTag: "ENTERPRISE APIS • PASSENGER COMMERCE",
    title: "Connected Fleet APIs & Monetization",
    desc: "Seamless developer interfaces connecting programmatic ad exchanges and contextual in-transit commerce.",
    image: "/ecosystem-set1/2.jpg",
    layout: "image-top",
  },
  {
    id: "set1-card-4",
    badge: "SPATIAL GEOFENCING",
    subTag: "AIRPORT • COMMERCIAL • EDUCATIONAL ZONES",
    title: "Corridor-Triggered Media Networks",
    desc: "Hyper-local brand narratives dynamically activated as vehicles enter high-value consumer polygons.",
    image: "/ecosystem-set1/4.jpg",
    layout: "image-top",
  },
  {
    id: "set1-card-5",
    badge: "EDGE COMPUTING",
    title: "VMOVEXA AI Edge Node",
    desc: "Industrial-grade edge computing hardware delivering real-time processing, AI telemetry, and fail-safe redundancy onboard.",
    image: "/ecosystem-set1/5.jpg",
    layout: "text-top",
  },
];

// Row 2 Cards: Powered by images from "OUR ECOSYSTEM1" folder
const row2Items: EcosystemCard[] = [
  {
    id: "set2-card-1",
    badge: "DUAL-MODE INNOVATION",
    title: "Revenue-Generating Emergency Exit Ecosystem",
    desc: "Safety first. Designed to save. Built to earn.",
    image: "/ecosystem/1.jpg",
    layout: "text-top",
    features: [
      "Enhances Safety",
      "Generates Revenue",
      "Smart Technology",
      "Fail-Safe Mechanism",
    ],
  },
  {
    id: "set2-card-2",
    badge: "ACTIVE TRANSIT DOOH",
    subTag: "REAR FLEET MEDIA MATRIX",
    title: "Safety When It Matters. Value Always",
    desc: "Turn every exit into opportunity, even in an emergency.",
    image: "/ecosystem/2.jpg",
    layout: "image-top",
  },
  {
    id: "set2-card-3",
    badge: "SUSTAINABLE MOBILITY",
    title: "Every Mile Earns More.",
    desc: "Lower emissions. Higher impact. Additional programmatic revenue.",
    image: "/ecosystem/3.jpg",
    layout: "text-top",
  },
  {
    id: "set2-card-4",
    badge: "CLOUD TELEMETRY",
    subTag: "REAL-TIME VEHICLE SYNC",
    title: "Always Connected. Always Safe.",
    desc: "Continuous cloud synchronization ensures every fleet vehicle is monitored, optimized, and secure.",
    image: "/ecosystem/4.jpg",
    layout: "image-top",
  },
  {
    id: "set2-card-5",
    badge: "TRANSPARENT OLED",
    subTag: "MORE VISIBILITY • MORE IMPACT • MORE VALUE",
    title: "Powered By Light. Driven By Intelligence.",
    desc: "Energy harvested. Energy stored. Energy always available.",
    image: "/ecosystem/5.jpg",
    layout: "text-top",
  },
  {
    id: "set2-card-6",
    badge: "SPATIAL INTELLIGENCE",
    subTag: "AUDIENCE INTELLIGENCE • ROUTE OPTIMIZATION",
    title: "AI Mobility Intelligence.",
    desc: "Smarter insights. Smoother journeys. Better cities.",
    image: "/ecosystem/6.jpg",
    layout: "image-top",
  },
];

// Continuous loops with duplicate sets
const row1Cards = [...row1Items, ...row1Items];
const row2Cards = [...row2Items, ...row2Items];

function CardItem({ card }: { card: EcosystemCard }) {
  return (
    <div className="w-full rounded-[24px] bg-[#050508]/80 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 flex flex-col group/card hover:shadow-[0_8px_40px_-12px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 relative overflow-hidden backdrop-blur-xl">
      {/* Corner Ambient Glow */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {card.layout === "text-top" ? (
        <>
          {/* Header text content */}
          <div className="p-6 sm:p-8 shrink-0 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-300 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {card.badge}
              </span>
            </div>
            
            <h3 className="text-[22px] sm:text-[26px] font-heading font-semibold text-white tracking-tight leading-snug mb-3 group-hover/card:text-cyan-50 transition-colors">
              {card.title}
            </h3>
            <p className="text-[13px] sm:text-[15px] text-zinc-400 font-light leading-relaxed">
              {card.desc}
            </p>

            {/* Optional Feature Badges */}
            {card.features && (
              <div className="flex flex-wrap gap-2 mt-5">
                {card.features.map((feat, i) => (
                  <div
                    key={feat}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]"
                  >
                    {i === 0 && <FiShield className="text-cyan-400 w-3 h-3 shrink-0" />}
                    {i === 1 && <FiTrendingUp className="text-purple-400 w-3 h-3 shrink-0" />}
                    {i === 2 && <FiCpu className="text-pink-400 w-3 h-3 shrink-0" />}
                    {i === 3 && <FiCheckCircle className="text-emerald-400 w-3 h-3 shrink-0" />}
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Seamless Media slot */}
          <div className="relative w-full aspect-[4/3] mt-auto">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover/card:scale-[1.03] transition-transform duration-700 ease-out z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent pointer-events-none z-10" />
          </div>
        </>
      ) : (
        <>
          {/* Seamless Media slot on top */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover/card:scale-[1.03] transition-transform duration-700 ease-out z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]/80 pointer-events-none z-10" />
          </div>

          {/* Bottom text content */}
          <div className="p-6 sm:p-8 shrink-0 flex flex-col justify-end relative z-10 mt-[-20px]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[9px] tracking-widest text-purple-300 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                {card.badge}
              </span>
            </div>

            {card.subTag && (
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em] mb-2">
                {card.subTag}
              </div>
            )}

            <h3 className="text-[22px] sm:text-[26px] font-heading font-semibold text-white tracking-tight leading-snug mb-3 group-hover/card:text-cyan-50 transition-colors">
              {card.title}
            </h3>
            <p className="text-[13px] sm:text-[15px] text-zinc-400 font-light leading-relaxed">
              {card.desc}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export function OurEcosystemSection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-black">
      {/* Background Lighting & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header Container */}
      <div className="container max-w-7xl mx-auto px-6 relative z-10 mb-10 sm:mb-12 text-center">
        {/* Subtle pill line above eyebrow with soft spread glow */}
        <div className="flex justify-center mb-3">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-6 rounded-full bg-gradient-to-r from-cyan-500/50 to-purple-500/50 blur-md pointer-events-none" />
            <div className="relative z-10 w-12 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          </div>
        </div>

        <EditorialLine>
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-white/70 uppercase font-semibold mb-2.5">
            OUR ECOSYSTEM
          </div>
        </EditorialLine>

        <EditorialLine delay={0.1}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-white leading-tight mb-2.5">
            One Platform. <span className="gradient-text">Infinite Possibilities.</span>
          </h2>
        </EditorialLine>

        <EditorialLine delay={0.2}>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-xl mx-auto">
            Intelligent Connected Technologies
          </p>
        </EditorialLine>
      </div>

      {/* Structured Grid */}
      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...row1Items, ...row2Items].map((card, idx) => (
            <div key={`card-${card.id}-${idx}`}>
              <CardItem card={card} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
