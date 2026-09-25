"use client";

import React from "react";
import Image from "next/image";
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
    id: "set1-card-3",
    badge: "DYNAMIC TRANSIT MEDIA",
    title: "The City Moves. So Do We.",
    desc: "High-impact panoramic transit displays capturing undivided attention across urban metropolitan corridors.",
    image: "/ecosystem-set1/3.jpg",
    layout: "text-top",
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
    badge: "FAIL-SAFE SAFETY",
    title: "Smart Emergency Exit Safety Infrastructure",
    desc: "Industrial fail-safe emergency exits with real-time telemetry, driver alerts, and cloud verification.",
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
    badge: "SMART SAFETY",
    subTag: "INTELLIGENT FLEET SURFACES",
    title: "Safety. Reimagined.",
    desc: "Smart emergency exits that think ahead, because every second matters.",
    image: "/ecosystem/4.jpg",
    layout: "image-top",
  },
  {
    id: "set2-card-5",
    badge: "TRANSPARENT OLED",
    subTag: "MORE VISIBILITY • MORE IMPACT • MORE VALUE",
    title: "Every Window. An Intelligent Display.",
    desc: "VMOVEXA transforms every glass surface into a dynamic, transparent display platform.",
    image: "/ecosystem/5.jpg",
    layout: "text-top",
  },
  {
    id: "set2-card-6",
    badge: "SPATIAL INTELLIGENCE",
    subTag: "AUDIENCE INTELLIGENCE • ROUTE OPTIMIZATION",
    title: "Spatial Intelligence & Corridor Monetization",
    desc: "Dynamic geofenced campaigns that trigger real-time brand narratives across living transit corridors.",
    image: "/ecosystem/6.jpg",
    layout: "image-top",
  },
];

// Continuous loops with duplicate sets
const row1Cards = [...row1Items, ...row1Items];
const row2Cards = [...row2Items, ...row2Items];

function CardItem({ card }: { card: EcosystemCard }) {
  return (
    <div className="w-[300px] sm:w-[360px] md:w-[400px] h-[340px] sm:h-[370px] shrink-0 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#08090e]/95 border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col justify-between group/card hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] hover:-translate-y-1 relative overflow-hidden backdrop-blur-md">
      {/* Corner Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {card.layout === "text-top" ? (
        <>
          {/* Header text content */}
          <div className="mb-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[9px] tracking-widest text-cyan-400/90 uppercase px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/40">
                {card.badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/card:bg-purple-400 transition-colors" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug line-clamp-1">
              {card.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed mt-0.5 line-clamp-2">
              {card.desc}
            </p>

            {/* Optional Feature Badges */}
            {card.features && (
              <div className="grid grid-cols-2 gap-1 mt-2 pt-1.5 border-t border-white/[0.06]">
                {card.features.map((feat, i) => (
                  <div
                    key={feat}
                    className="flex items-center gap-1 text-[9px] font-mono text-zinc-400"
                  >
                    {i === 0 && <FiShield className="text-cyan-400 w-2.5 h-2.5 shrink-0" />}
                    {i === 1 && <FiTrendingUp className="text-purple-400 w-2.5 h-2.5 shrink-0" />}
                    {i === 2 && <FiCpu className="text-pink-400 w-2.5 h-2.5 shrink-0" />}
                    {i === 3 && <FiCheckCircle className="text-emerald-400 w-2.5 h-2.5 shrink-0" />}
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Media slot */}
          <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-inner group-hover/card:border-white/20 transition-colors min-h-[160px] sm:min-h-[180px]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </>
      ) : (
        <>
          {/* Media slot on top */}
          <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-inner group-hover/card:border-white/20 transition-colors min-h-[160px] sm:min-h-[180px] mb-2.5">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Bottom text content */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[9px] tracking-widest text-purple-400/90 uppercase px-2 py-0.5 rounded-full bg-purple-950/40 border border-purple-800/40">
                {card.badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/card:bg-cyan-400 transition-colors" />
            </div>

            {card.subTag && (
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-0.5 line-clamp-1">
                {card.subTag}
              </div>
            )}

            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug line-clamp-1">
              {card.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed mt-0.5 line-clamp-2">
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
    <section className="relative py-16 sm:py-20 overflow-hidden bg-black border-b border-white/[0.08]">
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
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2.5">
            One Platform. <span className="gradient-text">Infinite Possibilities.</span>
          </h2>
        </EditorialLine>

        <EditorialLine delay={0.2}>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-xl mx-auto">
            Intelligent Connected Technologies
          </p>
        </EditorialLine>
      </div>

      {/* 2-Row Dual-Direction Moving Carousel with Unique Images Per Row */}
      <div className="relative w-full space-y-4 sm:space-y-5 overflow-hidden">
        {/* Edge Gradient Fades for Smooth Cinematic Dissolve */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 md:w-56 bg-gradient-to-r from-black via-black/85 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 md:w-56 bg-gradient-to-l from-black via-black/85 to-transparent z-20" />

        {/* Row 1: Left to Right movement (Images from 'OUR ECOSYSTEM') */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-ltr flex items-center gap-4 sm:gap-5">
            {row1Cards.map((card, idx) => (
              <CardItem key={`row1-${card.id}-${idx}`} card={card} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left / Ulta movement (Images from 'OUR ECOSYSTEM1') */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-rtl flex items-center gap-4 sm:gap-5">
            {row2Cards.map((card, idx) => (
              <CardItem key={`row2-${card.id}-${idx}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
