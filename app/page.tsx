import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
} from "react-icons/fi";
import {
  RiCarLine,
  RiDashboard3Line,
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
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { ImageCurtainReveal, ModernImageSheen, FloatingElement } from "@/components/animations/image-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { WhatIsVmovexaSection } from "@/components/sections/what-is-vmovexa";
import { BlueprintFlowAnimation } from "@/components/visuals/blueprint-flow";

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
      icon: RiCarLine,
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
      icon: RiCarLine,
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
      <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-36 pb-14 overflow-hidden border-b border-white/[0.08] bg-black">
        {/* Background Hero Poster Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
          {/* Constrained container to make the bus smaller and shifted right */}
          <div className="absolute right-[-5%] top-[10%] bottom-[10%] w-[100%] md:w-[85%] lg:w-[75%] xl:w-[65%] z-0">
            <Image
              src="/images/home-bus.png"
              alt="VMOVEXA Flagship Intelligent Autonomous Transit Bus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-contain object-right md:object-[90%_center] brightness-[0.95] contrast-[1.1] animate-hero-bus"
            />
          </div>
          {/* Subtle cinematic scrims since the image is a transparent PNG */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent md:from-black md:via-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
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

            {/* Main Header Copy */}
            <div className="lg:col-span-9 z-10">
              {/* Number Badge */}
              <EditorialLine delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                  <span className="font-mono text-xs font-bold text-cyan-400">01</span>
                  <span className="text-white/30 text-xs">/</span>
                  <TextDecrypt text="INTELLIGENCE IN MOTION" delay={0.2} className="text-white/90 text-xs" />
                </div>
              </EditorialLine>

              {/* Headline: Space Grotesk — 64–88px — Medium */}
              <EditorialLine delay={0.15}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-medium font-heading tracking-tight leading-[1.04] max-w-5xl mb-6 text-white uppercase drop-shadow-lg">
                  INTELLIGENCE IN <span className="gradient-text">MOTION.</span>
                </h1>
              </EditorialLine>

              {/* Subtitle: IBM Plex Sans — 20px — Regular */}
              <BlurReveal delay={0.3}>
                <p className="text-lg sm:text-[20px] font-sans text-white/80 font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-md">
                  A cloud-to-edge mobility intelligence platform connecting vehicles, people, places and possibilities.
                </p>
              </BlurReveal>

              {/* CTAs */}
              <EditorialLine delay={0.4}>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/platform"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                      style={{ color: "#000000" }}
                    >
                      <span className="text-black font-semibold">Explore Platform</span>
                      <FiArrowRight size={16} className="text-black" />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/videos/vmovexa-transit-demo.mp4"
                      target="_blank"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/25 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/15 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      Watch Video
                    </Link>
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
              </EditorialLine>
            </div>

            {/* Right Vertical Floating Tags */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/50 tracking-widest relative z-10">
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
                  <div className="text-sm font-semibold text-white tracking-wide flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
                    <span>Cloud</span>
                    <span className="text-cyan-400 font-light">→</span>
                  </div>
                  <div className="text-[10px] text-white/50 font-normal">Control &amp; Orchestration</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-indigo-400/70">Stage 02</div>
                  <div className="text-sm font-semibold text-white tracking-wide flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                    <span>Edge</span>
                    <span className="text-indigo-400 font-light">→</span>
                  </div>
                  <div className="text-[10px] text-white/50 font-normal">VMOVEXA CORE Compute</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-purple-400/70">Stage 03</div>
                  <div className="text-sm font-semibold text-white tracking-wide flex items-center gap-1.5 group-hover:text-purple-300 transition-colors">
                    <span>Vehicle</span>
                    <span className="text-purple-400 font-light">→</span>
                  </div>
                  <div className="text-[10px] text-white/50 font-normal">Moving Transit Fleet</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400/70">Stage 04</div>
                  <div className="text-sm font-semibold text-white tracking-wide flex items-center gap-1.5 group-hover:text-emerald-300 transition-colors">
                    <span>Data</span>
                  </div>
                  <div className="text-[10px] text-white/50 font-normal">Telemetry &amp; Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 // WHAT IS VMOVEXA — 10-SECOND CLARITY MOMENT                          */}
      {/* ========================================================================= */}
      <WhatIsVmovexaSection />

      {/* ========================================================================= */}
      {/* 03 // A VEHICLE CAN BE MORE.                                             */}
      {/* ========================================================================= */}
      <section className="py-12 border-b border-zinc-200 relative overflow-hidden bg-white">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
                <span className="text-cyan-600 font-bold">03</span>
                <span className="text-cyan-300">/</span>
                <span>BEYOND TRANSPORTATION</span>
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-900 leading-tight mb-4">
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
                    <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-cyan-400/40 hover:bg-zinc-50 transition-all duration-300 flex flex-col justify-between group cursor-default shadow-sm hover:shadow-md h-full">
                      <div>
                        <div className={`w-12 h-12 rounded-xl border ${node.badgeBg} ${node.color} bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-5 shadow-sm`}>
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
      <section className="py-12 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span className="text-cyan-400 font-bold">04</span>
                <span className="text-white/30">/</span>
                <span>ARCHITECTURAL PRINCIPLE</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">THE CLOUD <span className="gradient-text">ORCHESTRATES.</span></div>,
                <div key="l2" className="mt-1 sm:mt-2 text-white/95">THE EDGE <span className="text-cyan-400">EXECUTES.</span></div>,
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
                  src="/images/vmovexa-cloud-edge-architecture.png"
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
      <section className="py-12 border-b border-zinc-200 relative overflow-hidden bg-white">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
                <span className="text-cyan-600 font-bold">05</span>
                <span className="text-cyan-300">/</span>
                <span>IN-VEHICLE COMPUTING</span>
              </div>
            </EditorialLine>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-900 leading-tight mb-4">
              THE VEHICLE BECOMES <span className="text-cyan-600">THE EDGE.</span>
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
                    <SpotlightCard className="h-full p-5 backdrop-blur-sm group cursor-default bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 rounded-xl border ${pillar.badgeBg} bg-white flex items-center justify-center mb-3 ${pillar.color} group-hover:scale-110 transition-all duration-300 shadow-sm`}>
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
                    src="/images/vmovexa-technology-bus-xray.PNG"
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
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span className="text-cyan-400 font-bold">06</span>
                <span className="text-white/30">/</span>
                <span>SYSTEM BLUEPRINT</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.05] text-white"
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
      <section className="py-12 border-b border-zinc-200 relative overflow-hidden bg-white">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-4 shadow-sm">
                <span className="text-cyan-600 font-bold">07</span>
                <span className="text-cyan-300">/</span>
                <span>SPATIAL INTELLIGENCE</span>
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-900 leading-tight mb-4">
                MOVEMENT CREATES <span className="text-cyan-600">CONTEXT.</span>
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
                  <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-cyan-400/40 hover:bg-zinc-50 transition-all duration-300 flex flex-col justify-between group h-full shadow-sm hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl border border-zinc-200 bg-zinc-50 ${corridor.color} group-hover:scale-110 transition-transform shadow-sm`}>
                          <CorIcon size={22} />
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-200 bg-zinc-50">
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
                    <div className="mt-5 pt-3 border-t border-zinc-200 font-mono text-[10px] text-zinc-400 tracking-wider">
                      {corridor.tag}
                    </div>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>

          {/* Interactive Spatial Trigger HUD Terminal */}
          <GsapScrollReveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 backdrop-blur-md shadow-lg relative overflow-hidden">
              <div className="font-mono text-[10px] text-cyan-600/60 uppercase tracking-widest hidden sm:block text-right mb-6">
                LIVE SPATIAL LOGIC ENGINE
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="space-y-2">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                    <FiMapPin className="text-cyan-600" /> ACTIVE GEOFENCE COORDINATE
                  </div>
                  <div className="text-zinc-900 font-semibold text-sm">
                    <TextDecrypt text="28.5562° N, 77.1000° E" delay={0.2} />
                  </div>
                  <div className="text-zinc-500 text-[11px]">Polygon ID: DEL-T3-AIRPORT-EXPRESS</div>
                </div>

                <div className="space-y-2">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                    <FiNavigation className="text-indigo-600" /> DYNAMIC MOTION TELEMETRY
                  </div>
                  <div className="text-zinc-900 font-semibold text-sm">
                    <TextDecrypt text="48 KM/H • HEADING 082° ENE" delay={0.3} />
                  </div>
                  <div className="text-zinc-500 text-[11px]">Dwell Prediction: 4m 30s remaining</div>
                </div>

                <div className="space-y-2">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                    <FiZap className="text-amber-500" /> CONTEXTUAL SCREEN PAYLOAD
                  </div>
                  <div className="text-emerald-600 font-semibold text-sm">
                    <TextDecrypt text="AIRPORT-DEPARTURE-FEED-v4" delay={0.4} />
                  </div>
                  <div className="text-zinc-500 text-[11px]">Verified Proof-of-Play Signed at Edge</div>
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 // MEDIA THAT MOVES.                                                   */}
      {/* ========================================================================= */}
      <section className="py-12 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Distinction & Matrix */}
            <div className="lg:col-span-6 space-y-6">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider">
                  <span className="text-cyan-400 font-bold">08</span>
                  <span className="text-white/30">/</span>
                  <span>DYNAMIC TRANSIT MEDIA</span>
                </div>
              </EditorialLine>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-white leading-tight">
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
                    src="/videos/vmovexa-transit-demo.mp4"
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
      {/* 09 // ONE CLICK. AN ENTIRE NATION.                                        */}
      {/* ========================================================================= */}
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span className="text-cyan-400 font-bold">09</span>
                <span className="text-white/30">/</span>
                <span>GLOBAL ORCHESTRATION</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight uppercase leading-[1.05] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">ONE CLICK.</div>,
                <div key="l2" className="mt-1 sm:mt-2 gradient-text">AN ENTIRE NATION.</div>,
              ]}
            />
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mt-6 font-mono uppercase tracking-[0.25em] leading-relaxed">
                [ONE CAMPAIGN. MANY ROUTES.]
              </p>
            </EditorialLine>
          </div>

          <GsapScrollReveal delay={0.3}>
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 sm:p-4 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-black">
                <Image
                  src="/images/VMOVEXA_WEB_IMAGE.png"
                  alt="VMOVEXA Campaign Orchestration"
                  fill
                  sizes="100vw"
                  className="object-cover sm:object-contain object-center scale-[1.01] transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 // ONE PLATFORM. MANY MOBILITY ENVIRONMENTS.                           */}
      {/* ========================================================================= */}
      <section className="py-12 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span className="text-cyan-400 font-bold">10</span>
                <span className="text-white/30">/</span>
                <span>CROSS-SECTOR DEPLOYMENTS</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">ONE PLATFORM.</div>,
                <div key="l2" className="mt-1 sm:mt-2 gradient-text">MANY MOBILITY ENVIRONMENTS.</div>,
              ]}
            />
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
                A modular, hardware-agnostic architecture engineered to operate across public transit authorities, airport campuses, corporate shuttles, municipal fleets, and commercial taxi networks.
              </p>
            </EditorialLine>
          </div>

          {/* 5 Mobility Environments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobilityEnvironments.map((env, idx) => {
              const EnvIcon = env.icon;
              return (
                <GsapScrollReveal key={env.title} delay={idx * 0.08}>
                  <TiltCard maxTilt={5} className="h-full">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group h-full shadow-xl">
                      <div>
                        {/* Thumbnail Image Header */}
                        <ImageCurtainReveal delay={idx * 0.08} direction="up" className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10">
                          <Image
                            src={env.image}
                            alt={env.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <span className={`p-2 rounded-lg ${env.badgeBg} ${env.color} border border-white/20 backdrop-blur-md`}>
                              <EnvIcon size={18} />
                            </span>
                            <span className="font-mono text-[10px] text-white/90 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15">
                              {env.tag}
                            </span>
                          </div>
                        </ImageCurtainReveal>

                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {env.title}
                        </h3>
                        <div className="text-xs font-mono text-white/50 mb-3">{env.role}</div>
                        <p className="text-xs text-white/65 leading-relaxed font-light">
                          {env.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                        <span className="text-white/40">Deployment Ready</span>
                        <Link
                          href="/platform"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
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
      <section className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span className="text-cyan-400 font-bold">11</span>
                <span className="text-white/30">/</span>
                <span>BRAND IDENTITY</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.05] text-white"
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
                    <div className="font-bold text-white text-xl tracking-wider">VMOVEXA</div>
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
                    <div className="font-bold text-white text-xl tracking-wider"><span className="text-white">VMOVEXA</span> <span className="text-indigo-400">X</span></div>
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
      <section className="py-32 relative overflow-hidden text-center bg-white border-b border-zinc-200">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-50/50 via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          {/* Number Badge */}
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-6 shadow-sm">
              <span className="text-cyan-600 font-bold">12</span>
              <span className="text-cyan-300">/</span>
              <span>THE PLATFORM THESIS</span>
            </div>
          </EditorialLine>

          {/* Headline */}
          <CubertoLines
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-zinc-900 leading-tight mb-6"
            delay={0.1}
            stagger={0.1}
            lines={[
              <div key="l1">THE WORLD MOVES.</div>,
              <div key="l2" className="text-cyan-600 mt-1 sm:mt-2">INTELLIGENCE SHOULD MOVE WITH IT.</div>,
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
              { title: "Vehicles", desc: "Becoming software-defined & connected", icon: RiCarLine, color: "text-cyan-600", bg: "bg-cyan-50 border-cyan-200" },
              { title: "Cities", desc: "Becoming digital & sensor-instrumented", icon: FiMapPin, color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-200" },
              { title: "Media", desc: "Becoming contextual & measurable", icon: FiMonitor, color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
              { title: "Infrastructure", desc: "Becoming intelligent at the edge", icon: FiCpu, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`p-2 rounded-lg border ${item.bg} ${item.color} inline-block mb-2 shadow-sm`}>
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
