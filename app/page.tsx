import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VmovexaWebImage from "@/public/images/VMOVEXA_WEB_IMAGE.png";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCloud,
  FiCpu,
  FiMapPin,
  FiMonitor,
  FiRadio,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiServer,
  FiActivity,
  FiLayers,
  FiNavigation,
  FiClock,
  FiCrosshair,
  FiWifi,
  FiGlobe,
  FiAlertTriangle,
  FiUsers,
  FiMap,
  FiMessageCircle,
  FiHeart,
} from "react-icons/fi";
import {
  RiBusLine,
  RiFlightTakeoffLine,
  RiBuildingLine,
  RiTaxiWifiLine,
} from "react-icons/ri";
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal, ParallaxElement } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { CloudEdgeArchitectureAnimation } from "@/components/visuals/cloud-edge-architecture-animation";
import { SpotlightCard } from "@/components/visuals/spotlight-card";
import { HeroWatchVideoButton } from "@/components/ui/hero-watch-video-button";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { ImageCurtainReveal, ModernImageSheen, FloatingElement } from "@/components/animations/image-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { WhatIsVmovexaSection } from "@/components/sections/what-is-vmovexa";
import { WhyVmovexaSection } from "@/components/sections/why-vmovexa";
import { OurEcosystemSection } from "@/components/sections/our-ecosystem";
import { BlueprintFlowAnimation } from "@/components/visuals/blueprint-flow";
import { GridWaveBackground } from "@/components/visuals/grid-wave-background";
export const metadata: Metadata = {
  title: "VMOVEXA | Cloud-to-Edge Mobility Intelligence Platform",
  description:
    "VMOVEXA is a deep-tech mobility intelligence platform connecting vehicles, edge computing, cloud infrastructure, intelligent displays, GPS, telemetry, geofencing and mobility data.",
  keywords: [
    "mobility intelligence platform",
    "connected mobility platform",
    "vehicle edge computing",
    "cloud-to-edge mobility",
    "smart mobility technology",
    "connected vehicle platform",
    "fleet intelligence",
    "mobility technology",
  ],
};

export default function HomePage() {
  // 02 // A VEHICLE CAN BE MORE — 5 Feature Nodes
  const vehicleNodes = [
    {
      title: "Mobility Platform",
      desc: "Software-defined passenger and fleet management coordinating vehicle telemetry and route status.",
      icon: RiBusLine,
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    },
    {
      title: "Digital Media Platform",
      desc: "High-resolution exterior and interior displays transformed into programmable, context-aware digital media.",
      icon: FiMonitor,
      color: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/25 shadow-[0_0_20px_rgba(99,102,241,0.2)]",
    },
    {
      title: "IoT Edge Node",
      desc: "Autonomous local computing unit processing onboard sensor fusion, GPS telemetry, and safety-critical logic.",
      icon: FiCpu,
      color: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/25 shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    },
    {
      title: "Data Generation",
      desc: "Continuous spatial telemetry, dwell-time analytics, environmental parameters, and proof-of-play feeds.",
      icon: FiActivity,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/25 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
    {
      title: "Commercial Opportunities",
      desc: "Monetize vehicle surfaces through verified DOOH campaigns, civic sponsorships, and contextual activations.",
      icon: FiZap,
      color: "text-amber-400",
      badgeBg: "bg-amber-500/10 border-amber-500/25 shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
  ];

  // 03 // 4-Tier Architecture Layers
  const architectureLayers = [
    {
      step: "01",
      layer: "CLOUD",
      sub: "Centralized Orchestration",
      items: ["Fleet management", "Configuration & policies", "Predictive routing", "Digital media campaigns"],
      color: "border-cyan-500/30",
      badgeColor: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30",
      glow: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]",
      icon: FiCloud,
    },
    {
      step: "02",
      layer: "EDGE",
      sub: "Local Execution",
      items: ["VMOVEXA CORE runtime", "Low-latency edge execution", "Dynamic geofencing", "Resilient offline caching"],
      color: "border-indigo-500/30",
      badgeColor: "text-indigo-400 bg-indigo-950/40 border-indigo-500/30",
      glow: "hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]",
      icon: FiCpu,
    },
    {
      step: "03",
      layer: "VEHICLE",
      sub: "Physical Hardware",
      items: ["Exterior LED arrays", "Interior passenger displays", "CAN-bus & GPS antennas", "Onboard compute units"],
      color: "border-purple-500/30",
      badgeColor: "text-purple-400 bg-purple-950/40 border-purple-500/30",
      glow: "hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
      icon: RiBusLine,
    },
    {
      step: "04",
      layer: "DATA",
      sub: "Operational Intelligence",
      items: ["Cryptographic proof-of-play", "Vehicle state telemetry", "Spatial dwell analytics", "Hardware health diagnostics"],
      color: "border-emerald-500/30",
      badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
      glow: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
      icon: FiActivity,
    },
  ];

  // 04 // In-Vehicle Edge Compute Pillars
  const edgePillars = [
    {
      title: "VMOVEXA CORE Runtime",
      desc: "Industrial-grade onboard software daemon running directly on vehicle hardware, interfacing directly with vehicle power and CAN-bus telemetry.",
      icon: FiCpu,
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.18)]",
    },
    {
      title: "Low-Latency Edge Execution",
      desc: "Architecture designed for low-latency edge computing. Local logic evaluates geofences, speed thresholds, and passenger safety messages in real time.",
      icon: FiZap,
      color: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/25 shadow-[0_0_20px_rgba(99,102,241,0.18)]",
    },
    {
      title: "Autonomous Offline Resilience",
      desc: "100% operation through cellular dead zones, underground tunnels, and remote corridors via verified onboard encrypted caches.",
      icon: FiShield,
      color: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/25 shadow-[0_0_20px_rgba(168,85,247,0.18)]",
    },
    {
      title: "Multi-Screen Hardware Bus",
      desc: "Synchronized dual-zone control powering exterior rooftop LED displays for pedestrians and interior passenger information monitors.",
      icon: FiMonitor,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/25 shadow-[0_0_20px_rgba(16,185,129,0.18)]",
    },
  ];

  // 05 // MOVEMENT CREATES CONTEXT — Spatial Zones
  const spatialCorridors = [
    {
      title: "Airport & Transit Corridors",
      subtitle: "Arrivals, Departures & Ground Transit",
      desc: "Context triggers update dynamically as vehicles approach terminals—showing flight departures, baggage carousels, and express transfers.",
      icon: RiFlightTakeoffLine,
      color: "text-cyan-400",
      badge: "Air Transit Context",
      tag: "ZONE: AIRPORT TERMINAL 3",
    },
    {
      title: "Commercial & Shopping Corridors",
      subtitle: "High-Intent Retail & Urban Districts",
      desc: "Geofenced corridors trigger time-of-day promotions, store openings, and localized brand activations based on foot-traffic density.",
      icon: RiBuildingLine,
      color: "text-indigo-400",
      badge: "Commercial Corridor",
      tag: "ZONE: METRO CENTRAL COMMERCE",
    },
    {
      title: "Metropolitan Transit Routes",
      subtitle: "Municipal Commuter Arteries",
      desc: "Continuous passenger updates with next-station arrival estimates, multimodal connection alerts, and civic service notices.",
      icon: RiBusLine,
      color: "text-purple-400",
      badge: "Transit Route",
      tag: "CORRIDOR: ROUTE 404 EXPRESS",
    },
    {
      title: "Civic & Event Arenas",
      subtitle: "Stadiums, Conventions & City Hubs",
      desc: "Rapid-deployment geofences adapt to game schedules, concert exits, crowd egress management, and official municipal advisories.",
      icon: FiCrosshair,
      color: "text-amber-400",
      badge: "Dynamic Event Zone",
      tag: "ZONE: NATIONAL ARENA COMPLEX",
    },
  ];

  // 07 // ONE PLATFORM. MANY MOBILITY ENVIRONMENTS.
  const mobilityEnvironments = [
    {
      title: "Public Transit & City Buses",
      role: "High-Capacity Urban Transport",
      desc: "Connect municipal bus networks, tram corridors, and BRT systems with integrated passenger arrival systems and contextual exterior media.",
      icon: RiBusLine,
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/25",
      image: "/images/industry-public-transport.png",
      tag: "Metropolitan Fleets",
    },
    {
      title: "Airport Mobility & Shuttles",
      role: "Inter-Terminal & Airside Fleets",
      desc: "Tarmac passenger shuttles, parking express buses, and airport-to-hotel fleets synchronized with real-time flight manifests.",
      icon: RiFlightTakeoffLine,
      color: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/25",
      image: "/images/industry-airport-mobility.png",
      tag: "Airport Authorities",
    },
    {
      title: "Corporate & Employee Transit",
      role: "Enterprise & Campus Fleets",
      desc: "Private corporate campus shuttles, executive transit, and employee shuttle networks with verified tracking and secure passenger alerts.",
      icon: RiBuildingLine,
      color: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/25",
      image: "/images/industry-employee-transport.png",
      tag: "Enterprise Mobility",
    },
    {
      title: "Smart Cities & Municipal Fleets",
      role: "Civic Infrastructure & Public Works",
      desc: "Municipal utility vehicles, emergency services, and city fleets acting as mobile sensor networks capturing urban environmental data.",
      icon: FiMapPin,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/25",
      image: "/images/solution-smart-cities.png",
      tag: "Civic Operations",
    },
    {
      title: "Commercial Fleets & Rideshare",
      role: "Taxis, Shuttles & On-Demand",
      desc: "Equip taxi fleets and rideshare operators with smart rooftop digital screens and passenger displays for high-yield DOOH monetization.",
      icon: RiTaxiWifiLine,
      color: "text-amber-400",
      badgeBg: "bg-amber-500/10 border-amber-500/25",
      image: "/images/solution-fleet-operators.png",
      tag: "Commercial Operators",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* ========================================================================= */}
      {/* 01 // INTELLIGENCE IN MOTION. (Hero Section)                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-36 pb-14 overflow-hidden bg-black">
        {/* Background Base */}
        <div className="absolute inset-0 z-0 bg-black pointer-events-none" />

        {/* Bus Image Layer (Strictly z-0 to sit BEHIND text) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Large prominent bus positioned on the right */}
          <div className="absolute right-[-35%] md:right-[-28%] lg:right-[-22%] xl:right-[-18%] top-[0%] bottom-[0%] w-[130%] md:w-[110%] lg:w-[90%] xl:w-[85%] z-0">
            <Image
              src="/images/home-bus.png"
              alt="VMOVEXA Flagship Intelligent Autonomous Transit Bus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-contain object-right md:object-[95%_center] brightness-[0.98] contrast-[1.08] animate-hero-bus drop-shadow-2xl"
            />
          </div>
          {/* Strong gradient scrim to blend the bus and keep text razor sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-black from-10% via-black/80 via-30% to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[30vh] md:h-[45vh] bg-gradient-to-t from-black from-15% via-black/80 via-50% to-transparent pointer-events-none" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-6 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Vertical Feature Pillars */}
            <div className="hidden lg:flex lg:col-span-1 flex-col gap-4 pt-16 font-mono text-[11px] text-white/40 tracking-wider select-none">
              <span className="text-cyan-400 font-semibold border-l-2 border-cyan-400 pl-2">Cloud</span>
              <span className="pl-2.5 hover:text-white transition-colors cursor-default">Edge</span>
              <span className="pl-2.5 hover:text-white transition-colors cursor-default">Vehicle</span>
              <span className="pl-2.5 hover:text-white transition-colors cursor-default">Media</span>
              <span className="pl-2.5 hover:text-white transition-colors cursor-default">Data</span>
            </div>

            {/* Main Header Copy (Constrained to left side so it doesn't overlap the bus) */}
            <div className="lg:col-span-6 xl:col-span-6 z-10">
              {/* Number Badge */}
              <EditorialLine delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white/85 font-medium">
                    INTELLIGENCE IN MOTION
                  </span>
                </div>
              </EditorialLine>

              {/* Headline: Space Grotesk */}
              <EditorialLine delay={0.15}>
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[56px] xl:text-[66px] font-extrabold font-heading tracking-tight leading-[1.05] max-w-lg xl:max-w-xl mb-6 text-white drop-shadow-lg" style={{ WebkitTextStroke: "1px currentColor" }}>
                  INTELLIGENCE IN{" "}
                  <span className="inline-flex overflow-visible">
                    {"MOTION.".split("").map((letter, idx) => (
                      <span
                        key={idx}
                        className="inline-block gradient-text animate-wave-motion"
                        style={{ animationDelay: `${idx * 0.14}s` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </h1>
              </EditorialLine>

              {/* Subtitle: IBM Plex Sans */}
              <BlurReveal delay={0.3}>
                <p className="text-base sm:text-lg lg:text-[19px] font-sans text-white/80 font-normal leading-relaxed max-w-lg mb-8 drop-shadow-md">
                  A cloud-to-edge mobility intelligence platform connecting vehicles, people, places and possibilities.
                </p>
              </BlurReveal>

              {/* CTAs */}
              <GsapScrollReveal delay={0.35}>
                <div className="flex flex-wrap items-center gap-4 py-3 -my-3 overflow-visible">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/platform"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_24px_rgba(255,255,255,0.22)] hover:shadow-[0_0_32px_rgba(255,255,255,0.45)]"
                      style={{ color: "#000000" }}
                    >
                      <span className="text-black font-semibold">Explore Platform</span>
                      <FiArrowRight size={16} className="text-black" />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <HeroWatchVideoButton videoSrc="/videos/big.MOV" />
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <a
                      href="/docs/VMOVEXA-Brochure.pdf"
                      download="VMOVEXA-Brochure.pdf"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-white/80 hover:text-white hover:border-white/30 text-xs font-mono tracking-wider transition-all duration-300"
                    >
                      Download Brochure
                    </a>
                  </MagneticElement>
                </div>
              </GsapScrollReveal>

              {/* Added Tags */}
              <GsapScrollReveal delay={0.4}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-10 font-mono text-xs sm:text-[13px] tracking-[0.15em] uppercase text-white/60">
                  <span className="hover:text-cyan-400 transition-colors cursor-default">Smart Mobility</span>
                  <span className="text-white/20">|</span>
                  <span className="hover:text-purple-400 transition-colors cursor-default">Interactive Media</span>
                  <span className="text-white/20">|</span>
                  <span className="hover:text-emerald-400 transition-colors cursor-default">Safety First</span>
                </div>
              </GsapScrollReveal>
            </div>

            {/* Right Vertical Floating Tags */}
            <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/50 tracking-widest relative z-10">
              <FloatingElement y={6} duration={3.6}><span className="hover:text-white transition-colors cursor-default">Cities</span></FloatingElement>
              <FloatingElement y={8} duration={4.4}><span className="hover:text-white transition-colors cursor-default">Fleets</span></FloatingElement>
              <FloatingElement y={6} duration={3.9}><span className="hover:text-white transition-colors cursor-default">People</span></FloatingElement>
              <FloatingElement y={7} duration={4.8}><span className="hover:text-white transition-colors cursor-default">Possibilities</span></FloatingElement>
            </div>
          </div>
        </div>

        {/* Bottom Hero Architecture Pipeline: Cloud → Edge → Vehicle → Data */}
        <div className="container relative z-10 max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-cyan-400/70">Stage 01</div>
                  <div className="text-sm font-semibold tracking-wide flex items-center gap-1.5 transition-colors glow-shimmer-cyan">
                    <span>Cloud</span>
                    <span className="font-light">→</span>
                  </div>
                  <div className="text-[10px] font-normal glow-shimmer-cyan">Control &amp; Orchestration</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-indigo-400/70">Stage 02</div>
                  <div className="text-sm font-semibold tracking-wide flex items-center gap-1.5 transition-colors glow-shimmer-indigo">
                    <span>Edge</span>
                    <span className="font-light">→</span>
                  </div>
                  <div className="text-[10px] font-normal glow-shimmer-indigo">VMOVEXA CORE Compute</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-purple-400/70">Stage 03</div>
                  <div className="text-sm font-semibold tracking-wide flex items-center gap-1.5 transition-colors glow-shimmer-purple">
                    <span>Vehicle</span>
                    <span className="font-light">→</span>
                  </div>
                  <div className="text-[10px] font-normal glow-shimmer-purple">Moving Transit Fleet</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400/70">Stage 04</div>
                  <div className="text-sm font-semibold tracking-wide flex items-center gap-1.5 transition-colors glow-shimmer-emerald">
                    <span>Data</span>
                  </div>
                  <div className="text-[10px] font-normal glow-shimmer-emerald">Telemetry &amp; Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 // WHY VMOVEXA — TRANSPORTATION DESERVES BETTER.                        */}
      {/* ========================================================================= */}
      <WhyVmovexaSection />

      {/* ========================================================================= */}
      {/* 03 // WHAT IS VMOVEXA — 10-SECOND CLARITY MOMENT                          */}
      {/* ========================================================================= */}
      <WhatIsVmovexaSection />

      {/* ========================================================================= */}
      {/* 04 // OUR ECOSYSTEM — ONE PLATFORM. INFINITE POSSIBILITIES.                */}
      {/* ========================================================================= */}
      <OurEcosystemSection />

      {/* ========================================================================= */}
      {/* 05 // A VEHICLE CAN BE MORE.                                             */}
      {/* ========================================================================= */}
      <section className="py-12 relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
                <span>BEYOND TRANSPORTATION</span>
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight mb-4">
                A VEHICLE CAN BE <span className="gradient-text">MORE.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base text-zinc-600 font-light max-w-2xl mx-auto leading-relaxed">
                VMOVEXA unlocks latent capability in physical vehicles—transforming moving steel into intelligent, software-defined edge nodes and revenue-generating digital media infrastructure.
              </p>
            </EditorialLine>
          </div>

          {/* 5 Horizontal Feature Nodes Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {vehicleNodes.map((node, i) => {
              const NodeIcon = node.icon;
              return (
                <GsapScrollReveal key={node.title} delay={i * 0.08}>
                  <TiltCard maxTilt={6} className="h-full">
                    <div 
                      className="p-6 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between group cursor-default shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 h-full relative overflow-hidden"
                      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                    >
                      {/* Glowing Top Line */}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div>
                        <div className={`w-12 h-12 rounded-xl border ${node.badgeBg} ${node.color} bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-5 shadow-sm`}>
                          <NodeIcon size={24} />
                        </div>
                        <div className="text-base font-bold text-zinc-900 mb-2 group-hover:text-cyan-600 transition-colors">
                          {node.title}
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed font-light group-hover:text-zinc-800 transition-colors">
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </GsapScrollReveal>
              );
            })}
          </div>
        </div>
        
      </section>

      {/* ========================================================================= */}
      {/* 04 // THE CLOUD ORCHESTRATES. THE EDGE EXECUTES.                          */}
      {/* ========================================================================= */}
      <section className="py-12 relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span>ARCHITECTURAL PRINCIPLE</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">THE CLOUD <span className="gradient-text">ORCHESTRATES.</span></div>,
                <div key="l2" className="mt-1 sm:mt-2 text-white/95">THE EDGE <span className="gradient-text">EXECUTES.</span></div>,
              ]}
            />
          </div>

          {/* Architectural Animation */}
          <GsapScrollReveal delay={0.2}>
            <div className="mb-8">
              <CloudEdgeArchitectureAnimation />
            </div>
          </GsapScrollReveal>

          {/* 2-Line Explanation */}
          <GsapScrollReveal delay={0.25}>
            <div className="max-w-3xl mx-auto text-center space-y-2 mb-16 px-4">
              <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed">
                Centralized cloud intelligence orchestrates global fleet policies, predictive routing, and media campaigns at massive scale.
              </p>
              <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
                Localized in-vehicle edge compute executes low-latency decisions directly in motion—even during total network dropouts.
              </p>
            </div>
          </GsapScrollReveal>

          {/* 4 Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {architectureLayers.map((col, idx) => {
              const ColIcon = col.icon;
              return (
                <GsapScrollReveal key={col.layer} delay={idx * 0.1}>
                  <div className={`p-6 rounded-2xl bg-white/[0.02] border ${col.color} h-full flex flex-col justify-between ${col.glow} transition-all duration-500 group relative overflow-hidden backdrop-blur-sm`}>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-white/40">{col.step} / 04</span>
                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${col.badgeColor}`}>
                          Layer
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2.5 rounded-xl border ${col.badgeColor} shadow-sm`}>
                          <ColIcon size={18} />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                          {col.layer}
                        </h3>
                      </div>
                      <p className="text-xs font-mono text-white/50 mb-5">{col.sub}</p>
                      <ul className="space-y-2.5 text-sm text-white/70">
                        {col.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-cyan-400 text-xs mt-1">→</span>
                            <span className="group-hover:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>

          {/* 3D Architecture Diagram Visual */}
          <GsapScrollReveal delay={0.3}>
            <ParallaxElement offset={20}>
              <div className="relative group">
                <MediaSlot
                  type="image"
                  src="/images/platform-architecture-new.jpg"
                  alt="VMOVEXA Cloud-to-Edge Multi-Layer Architecture"
                  badge="3D Architecture • Cloud & Edge Hierarchy"
                  caption="Centralized Cloud Orchestration ↔ In-Vehicle Edge Runtime"
                  aspectRatio="21/9"
                />
              </div>
            </ParallaxElement>
          </GsapScrollReveal>
        </div>
        
      </section>

      {/* ========================================================================= */}
      {/* 05 // THE VEHICLE BECOMES THE EDGE.                                       */}
      {/* ========================================================================= */}
      <section className="py-12 relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
                <span>IN-VEHICLE COMPUTING</span>
              </div>
            </EditorialLine>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight mb-4">
              THE VEHICLE BECOMES <span className="gradient-text">THE EDGE.</span>
            </h2>
            <EditorialLine delay={0.2}>
              <p className="text-base text-zinc-600 font-light leading-relaxed">
                Rather than treating vehicles as passive mobile endpoints, VMOVEXA embeds an autonomous industrial compute engine directly into the vehicle architecture—fusing CAN-bus telemetry, screen buses, and localized geofencing logic into a single resilient runtime.
              </p>
            </EditorialLine>
          </div>

          {/* Grid: 4 Pillars & Hardware Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Edge Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {edgePillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <GsapScrollReveal key={pillar.title} delay={idx * 0.08}>
                    <SpotlightCard 
                      className="h-full p-5 backdrop-blur-[2px] group cursor-default bg-white/[0.12] hover:bg-white/[0.28] border border-zinc-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden rounded-2xl"
                      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className={`w-10 h-10 rounded-xl border ${pillar.badgeBg} bg-white/60 backdrop-blur-sm flex items-center justify-center mb-3 ${pillar.color} group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                        <PillarIcon size={20} />
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed font-light group-hover:text-zinc-800 transition-colors">
                        {pillar.desc}
                      </p>
                    </SpotlightCard>
                  </GsapScrollReveal>
                );
              })}
            </div>

            {/* Right Hardware X-Ray Visual */}
            <div className="lg:col-span-6">
              <GsapScrollReveal delay={0.2}>
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm">
                  <MediaSlot
                    type="image"
                    src="/images/5.jpg"
                    alt="VMOVEXA In-Vehicle Edge Compute Architecture"
                    badge="VMOVEXA CORE Hardware Runtime"
                    caption="In-Vehicle Sensor Bus • CAN-Bus Telemetry • Display Processor Array"
                    aspectRatio="16/9"
                    scanline={true}
                    className="!h-auto !rounded-b-none"
                  />
                  {/* Hardware Runtime Status Bar */}
                  <div className="px-6 py-4 bg-white/95 backdrop-blur-md border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs shadow-inner">
                    <div className="flex items-center gap-2.5 text-cyan-600">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      <span className="font-semibold tracking-wide">VMOVEXA CORE Active Runtime</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-zinc-500 text-[11px]">
                      <span>Real-Time Edge Processing</span>
                      <span className="text-zinc-300 hidden sm:inline">•</span>
                      <span>Zero-Latency Offline Cache</span>
                      <span className="text-zinc-300 hidden sm:inline">•</span>
                      <span>Multi-Display Bus Synchronized</span>
                    </div>
                  </div>
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
        
      </section>

      {/* ========================================================================= */}
      {/* 06 // SYSTEM BLUEPRINT: HOW IT WORKS                                      */}
      {/* ========================================================================= */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span>SYSTEM BLUEPRINT</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">HOW THE ENTIRE</div>,
                <div key="l2" className="mt-1 sm:mt-2 gradient-text">NETWORK FLOWS.</div>,
              ]}
            />
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
                From cloud orchestration down to edge execution. See exactly how VMOVEXA ONE controls the VMOVEXA CORE, manages the smart glass windows, generates proof-of-play, and sends analytics back.
              </p>
            </EditorialLine>
          </div>

          <GsapScrollReveal delay={0.3}>
            <BlueprintFlowAnimation />
          </GsapScrollReveal>
        </div>
        
      </section>

      {/* ========================================================================= */}
      {/* 07 // MOVEMENT CREATES CONTEXT.                                           */}
      {/* ========================================================================= */}
      <section className="py-12 relative overflow-hidden bg-white">
        <GridWaveBackground variant="blue" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
                <span>SPATIAL INTELLIGENCE</span>
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight mb-4">
                MOVEMENT CREATES <span className="gradient-text">CONTEXT.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                Unlike stationary billboards or fixed digital screens, a moving vehicle navigates living urban corridors. Speed, heading, time-of-day, and hyper-local geography merge to generate real-time programmatic context.
              </p>
            </EditorialLine>
          </div>

          {/* Spatial Corridors 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {spatialCorridors.map((corridor, idx) => {
              const CorIcon = corridor.icon;
              return (
                <GsapScrollReveal key={corridor.title} delay={idx * 0.1}>
                  <div 
                    className="p-6 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group h-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden cursor-default"
                    style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-sm ${corridor.color} group-hover:scale-110 transition-transform shadow-sm`}>
                          <CorIcon size={22} />
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm">
                          {corridor.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-zinc-900 mb-1 group-hover:text-cyan-600 transition-colors">
                        {corridor.title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-700/80 mb-3">{corridor.subtitle}</div>
                      <p className="text-xs text-zinc-600 leading-relaxed font-light group-hover:text-zinc-800 transition-colors">
                        {corridor.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-200/70 font-mono text-[10px] text-zinc-400 tracking-wider">
                      {corridor.tag}
                    </div>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>

        </div>
        
      </section>

      {/* ========================================================================= */}
      {/* 08 // MEDIA THAT MOVES.                                                   */}
      {/* ========================================================================= */}
      <section className="py-12 relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Distinction & Matrix */}
            <div className="lg:col-span-6 space-y-6">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider">
                  <span>DYNAMIC TRANSIT MEDIA</span>
                </div>
              </EditorialLine>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                MEDIA THAT <span className="gradient-text">MOVES.</span>
              </h2>

              <EditorialLine delay={0.2}>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                  Not digital signage. Digital signage displays repetitive loops on static, stationary walls. VMOVEXA transforms moving transit surfaces into intelligent, context-aware digital media infrastructure.
                </p>
              </EditorialLine>

              {/* The Distinction Matrix */}
              <GsapScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <div className="text-cyan-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    VMOVEXA Unifies The Entire Chain:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
                    {["Content", "Location", "Vehicle", "Screen", "Cloud", "Data"].map((item, i, arr) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:border-cyan-400/40 transition-colors">
                          {item}
                        </span>
                        {i < arr.length - 1 && <span className="text-cyan-400 font-bold">+</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapScrollReveal>

              {/* High-Impact Architectural Quote */}
              <EditorialLine delay={0.4}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 font-heading text-base sm:text-lg text-white/90 leading-snug">
                  &ldquo;The screen is only what you see. <br />
                  <span className="gradient-text font-bold">
                    The intelligence is everything behind it.&rdquo;
                  </span>
                </div>
              </EditorialLine>
            </div>

            {/* Right Column: In-Transit Video Showcase */}
            <div className="lg:col-span-6">
              <GsapScrollReveal delay={0.3}>
                <div className="relative group">
                  <MediaSlot
                    type="video"
                    src="/videos/small.MOV"
                    poster="/images/VMOVEXA FOLDER DESIGN MOCKUP.PNG"
                    badge="In-Transit Digital Screen"
                    caption="Contextual Where & When Delivery • Verifiable Proof-of-Play"
                    aspectRatio="16/9"
                    hudOverlay
                  />
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08.5 // GOVERNMENT & PUBLIC SECTOR                                        */}
      {/* ========================================================================= */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 relative overflow-hidden bg-white">
        <GridWaveBackground variant="blue" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12 md:mb-16 text-center md:text-left mx-auto md:mx-0">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-xs tracking-wider mb-6">
                <FiShield className="w-3 h-3" />
                <span>PUBLIC SECTOR & GOVERNANCE</span>
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-zinc-900 mb-6">
                Smarter Mobility.<br/>
                <span className="gradient-text">Stronger Governance.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Building intelligent mobility infrastructure that connects governments, protects passengers, and empowers smarter cities.
              </p>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Public Awareness", desc: "Reach millions of citizens instantly.", icon: FiGlobe, color: "text-blue-600", hoverText: "group-hover:text-blue-600", viaColor: "via-blue-500", bg: "bg-blue-50", border: "border-blue-100", hoverBorder: "hover:border-blue-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]" },
              { title: "Disaster Alerts", desc: "Real-time emergency notifications.", icon: FiAlertTriangle, color: "text-rose-600", hoverText: "group-hover:text-rose-600", viaColor: "via-rose-500", bg: "bg-rose-50", border: "border-rose-100", hoverBorder: "hover:border-rose-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(225,29,72,0.12)]" },
              { title: "Election Campaigns", desc: "Democratic engagement at scale.", icon: FiUsers, color: "text-indigo-600", hoverText: "group-hover:text-indigo-600", viaColor: "via-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100", hoverBorder: "hover:border-indigo-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)]" },
              { title: "Tourism Promotion", desc: "Showcase destinations to travellers.", icon: FiMap, color: "text-emerald-600", hoverText: "group-hover:text-emerald-600", viaColor: "via-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", hoverBorder: "hover:border-emerald-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)]" },
              { title: "Traffic Advisory", desc: "Smart route guidance for commuters.", icon: FiNavigation, color: "text-amber-600", hoverText: "group-hover:text-amber-600", viaColor: "via-amber-500", bg: "bg-amber-50", border: "border-amber-100", hoverBorder: "hover:border-amber-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(245,158,11,0.12)]" },
              { title: "Citizen Engagement", desc: "Two-way government communication.", icon: FiMessageCircle, color: "text-cyan-600", hoverText: "group-hover:text-cyan-600", viaColor: "via-cyan-500", bg: "bg-cyan-50", border: "border-cyan-100", hoverBorder: "hover:border-cyan-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)]" },
              { title: "Emergency Communication", desc: "Critical alerts when it matters.", icon: FiShield, color: "text-red-600", hoverText: "group-hover:text-red-600", viaColor: "via-red-500", bg: "bg-red-50", border: "border-red-100", hoverBorder: "hover:border-red-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(220,38,38,0.12)]" },
              { title: "Health Campaigns", desc: "Public health awareness drives.", icon: FiHeart, color: "text-pink-600", hoverText: "group-hover:text-pink-600", viaColor: "via-pink-500", bg: "bg-pink-50", border: "border-pink-100", hoverBorder: "hover:border-pink-200", hoverShadow: "hover:shadow-[0_8px_30px_rgb(219,39,119,0.12)]" },
            ].map((app, idx) => {
              const Icon = app.icon;
              return (
                <GsapScrollReveal key={app.title} delay={idx * 0.05} className="h-full">
                  <div 
                    className={`p-4 sm:p-5 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.02)] ${app.hoverBorder} ${app.hoverShadow} hover:-translate-y-1 transition-all duration-500 h-full flex flex-col group relative overflow-hidden cursor-default`}
                    style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                  >
                    {/* Glowing Top Line */}
                    <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent ${app.viaColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-4 ${app.bg} ${app.border} border group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${app.color}`} />
                    </div>
                    <h3 className={`text-zinc-900 font-semibold text-[15px] mb-1.5 ${app.hoverText} transition-colors duration-300`}>{app.title}</h3>
                    <p className="text-zinc-500 text-xs sm:text-[13px] leading-relaxed font-light">{app.desc}</p>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 // ONE CLICK. AN ENTIRE NATION.                                        */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>GLOBAL ORCHESTRATION</span>
                </div>
              </EditorialLine>
              
              <CubertoLines
                as="h2"
                className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-semibold tracking-tight leading-[1.05] text-white mb-8"
                delay={0.1}
                stagger={0.1}
                lines={[
                  <div key="l1">ONE CLICK.</div>,
                  <span key="l2" className="mt-1 sm:mt-2 gradient-text">AN ENTIRE</span>,
                  <span key="l3" className="mt-1 sm:mt-2 gradient-text">NATION.</span>,
                ]}
              />
              
              <EditorialLine delay={0.2}>
                <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
                  Deploy programmatic DOOH inventory, hyper-targeted campaigns, and digital mobility infrastructure instantly across the country from a single interface.
                </p>
                <div className="font-mono text-xs sm:text-sm text-cyan-500/80 uppercase tracking-[0.2em] border-l-2 border-cyan-500/30 pl-4 py-1">
                  [ONE CAMPAIGN. MANY ROUTES.]
                </div>
              </EditorialLine>
            </div>

            {/* Right: Full Image */}
            <div className="lg:col-span-7">
              <GsapScrollReveal delay={0.3}>
                <div className="relative group w-full rounded-3xl sm:rounded-[2rem] overflow-hidden border border-white/[0.05] shadow-2xl shadow-cyan-900/10 bg-[#030303] flex items-center justify-center p-2 sm:p-6 lg:p-8">
                  {/* Subtle ambient glow behind the image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-30 group-hover:opacity-60 transition-opacity duration-1000 z-0" />
                  
                  <div className="relative w-full h-auto z-10 mix-blend-screen overflow-hidden rounded-xl sm:rounded-2xl">
                    {/* Edge fade masks (very subtle, just to blend harsh edges) */}
                    <div className="absolute inset-0 pointer-events-none border-[10px] sm:border-[20px] border-[#030303]/50 blur-[10px] rounded-2xl z-20" />
                    
                    <Image
                      src={VmovexaWebImage}
                      alt="VMOVEXA Campaign Orchestration - One Click. An Entire Nation."
                      placeholder="blur"
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="w-full h-auto object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03] opacity-90"
                    />
                  </div>
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 // ONE PLATFORM. MANY MOBILITY ENVIRONMENTS.                           */}
      {/* ========================================================================= */}
      <section className="py-20 relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 mb-4">
                CROSS-SECTOR DEPLOYMENTS
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-zinc-900"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">ONE PLATFORM.</div>,
                <div key="l2" className="mt-1 sm:mt-2 gradient-text">MANY MOBILITY ENVIRONMENTS.</div>,
              ]}
            />
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mt-6 font-normal leading-relaxed">
                A modular, hardware-agnostic architecture engineered to operate across public transit authorities, airport campuses, corporate shuttles, municipal fleets, and commercial taxi networks.
              </p>
            </EditorialLine>
          </div>

          {/* 5 Mobility Environments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {mobilityEnvironments.map((env, idx) => {
              const EnvIcon = env.icon;
              return (
                <GsapScrollReveal key={env.title} delay={idx * 0.08} className={`h-full flex flex-col ${idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3 md:col-span-2 lg:col-start-auto'}`}>
                  <TiltCard maxTilt={5} className="h-full">
                    <div 
                      className="p-7 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group h-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden"
                      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div>
                        {/* Icon Header */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${env.badgeBg} ${env.color} bg-white/60 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                            <EnvIcon className="w-6 h-6" />
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600 px-3 py-1.5 rounded-full bg-white/50 border border-zinc-200 backdrop-blur-sm">
                            {env.tag}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-cyan-700 transition-colors">
                          {env.title}
                        </h3>
                        <div className="text-xs font-mono text-cyan-600 mb-4">{env.role}</div>
                        <p className="text-[15px] text-zinc-600 leading-relaxed font-normal">
                          {env.desc}
                        </p>
                      </div>

                      <div className="mt-8 pt-5 border-t border-zinc-200/70 flex items-center justify-between font-mono text-xs">
                        <span className="text-zinc-400">Deployment Ready</span>
                        <Link
                          href="/platform"
                          className="text-cyan-600 hover:text-cyan-500 flex items-center gap-1 transition-colors"
                        >
                          Explore <FiArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                </GsapScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11 // THE BRAND IDENTITY.                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span>BRAND IDENTITY</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">THE SOUL OF</div>,
                <div key="l2" className="mt-1 sm:mt-2 gradient-text">INTELLIGENT MOVEMENT.</div>,
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column: The Iconic V */}
            <GsapScrollReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/images/iconic-v.jpg"
                      alt="The Iconic V"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-4 px-4 sm:px-0">
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">THE ICONIC “V”</h3>
                  <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
                    Three ideas. One identity.
                  </div>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Velocity. Vision. Value.<br />
                    Move + Nexus.<br />
                    A symbol for the movement of what comes next.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white text-xl tracking-wider">
                      <Image src="/logos/vmovexa-wordmark-light.svg" alt="VMOVEXA" width={140} height={24} />
                    </div>
                    <div className="text-sm text-white/50">The Soul of Intelligent Movement.</div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>

            {/* Right Column: The Gradient X */}
            <GsapScrollReveal delay={0.3}>
              <div className="flex flex-col gap-6 md:mt-16">
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/images/gradient-x.jpg"
                      alt="The Gradient X"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-4 px-4 sm:px-0">
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase">AND “X”</h3>
                  <div className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
                    Digital Intelligent Media.
                  </div>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Media. With intelligence.<br />
                    It sees the moment.<br />
                    Understands the context.<br />
                    Moves with the world.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white text-xl tracking-wider flex items-center gap-2">
                      <Image src="/logos/vmovexa-wordmark-light.svg" alt="VMOVEXA" width={120} height={20} />
                      <span className="text-indigo-400">X</span>
                    </div>
                    <div className="text-sm text-white/50">Where movement becomes experience.</div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>
          </div>
        </div>
        
      </section>

      {/* ========================================================================= */}
      {/* 12 // THE WORLD MOVES. INTELLIGENCE SHOULD MOVE WITH IT. (Final Section)  */}
      {/* ========================================================================= */}
      <section className="py-32 relative overflow-hidden text-center bg-white">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          {/* Number Badge */}
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-6 shadow-sm">
              <span>THE PLATFORM THESIS</span>
            </div>
          </EditorialLine>

          {/* Headline */}
          <CubertoLines
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-tight mb-6"
            delay={0.1}
            stagger={0.1}
            lines={[
              <div key="l1">THE WORLD MOVES.</div>,
              <div key="l2" className="gradient-text mt-1 sm:mt-2 whitespace-nowrap text-[26px] sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight">INTELLIGENCE SHOULD MOVE WITH IT.</div>,
            ]}
          />

          {/* Subtitle */}
          <EditorialLine delay={0.2}>
            <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              A unified cloud-to-edge mobility intelligence platform connecting vehicles, computing, digital displays, and urban infrastructure into an active, programmable ecosystem.
            </p>
          </EditorialLine>

          {/* 4 Macro Thesis Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 text-left">
            {[
              { title: "Vehicles", desc: "Becoming software-defined & connected", icon: RiBusLine, color: "text-cyan-600", bg: "bg-cyan-50 border-cyan-200" },
              { title: "Cities", desc: "Becoming digital & sensor-instrumented", icon: FiMapPin, color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-200" },
              { title: "Media", desc: "Becoming contextual & measurable", icon: FiMonitor, color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
              { title: "Infrastructure", desc: "Becoming intelligent at the edge", icon: FiCpu, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                >
                  <div className={`p-2 rounded-lg border ${item.bg} ${item.color} inline-block mb-2 shadow-sm bg-white/60 backdrop-blur-sm`}>
                    <ItemIcon size={18} />
                  </div>
                  <div className="font-bold text-zinc-900 text-sm">{item.title}</div>
                  <div className="text-xs text-zinc-500 font-light mt-0.5">{item.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <EditorialLine delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <MagneticElement strength={0.3}>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg hover:bg-zinc-800"
                >
                  <span className="font-semibold">Explore VMOVEXA Platform</span>
                  <FiArrowRight size={16} />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white border border-zinc-300 text-zinc-800 font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-zinc-50 hover:border-zinc-400 shadow-sm"
                >
                  Schedule Architecture Demo <FiArrowUpRight size={16} />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>

          {/* Bottom Pill Badge */}
          <EditorialLine delay={0.4}>
            <MagneticElement strength={0.1}>
              <div className="inline-block px-8 py-3.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono uppercase tracking-[0.2em] text-cyan-700 shadow-sm">
                Mobility × Edge Computing × Cloud × Data × Digital Media
              </div>
            </MagneticElement>
          </EditorialLine>
        </div>
        
      </section>
    </main>
  );
}
