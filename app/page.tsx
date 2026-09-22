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
} from "react-icons/fi";
import { RiCarLine, RiDashboard3Line } from "react-icons/ri";
import { EditorialMaskText, EditorialLine } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { TelemetryTicker } from "@/components/visuals/telemetry-ticker";
import { FleetConsoleSimulator } from "@/components/visuals/fleet-console-simulator";
import { SpotlightCard } from "@/components/visuals/spotlight-card";

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
  const capabilities = [
    {
      title: "Cloud Orchestration",
      desc: "Manage distributed mobility infrastructure through centralized software.",
      icon: FiCloud,
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.18)]",
      glow: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]",
    },
    {
      title: "Vehicle Edge Computing",
      desc: "Bring computing closer to the physical environment where mobility happens.",
      icon: FiCpu,
      color: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/25 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.18)]",
      glow: "group-hover:border-indigo-500/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]",
    },
    {
      title: "Location Intelligence",
      desc: "Turn geographic position and movement into programmable digital context.",
      icon: FiMapPin,
      color: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/25 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.18)]",
      glow: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
    },
    {
      title: "Multi-Screen Infrastructure",
      desc: "Coordinate multiple digital surfaces within a connected vehicle.",
      icon: FiMonitor,
      color: "text-sky-400",
      badgeBg: "bg-sky-500/10 border-sky-500/25 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.18)]",
      glow: "group-hover:border-sky-400/40 group-hover:shadow-[0_0_30px_rgba(103,232,249,0.12)]",
    },
    {
      title: "Fleet Intelligence",
      desc: "Create centralized visibility across vehicles, devices and connected infrastructure.",
      icon: RiCarLine,
      color: "text-blue-400",
      badgeBg: "bg-blue-500/10 border-blue-500/25 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.18)]",
      glow: "group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.12)]",
    },
    {
      title: "Telemetry",
      desc: "Capture and communicate operational states across the mobility network.",
      icon: FiRadio,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.18)]",
      glow: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.12)]",
    },
    {
      title: "Digital Media",
      desc: "Transform vehicle displays into remotely managed digital media infrastructure.",
      icon: FiZap,
      color: "text-amber-400",
      badgeBg: "bg-amber-500/10 border-amber-500/25 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.18)]",
      glow: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.12)]",
    },
    {
      title: "Offline Resilience",
      desc: "Maintain supported local operations during temporary connectivity interruptions.",
      icon: FiShield,
      color: "text-rose-400",
      badgeBg: "bg-rose-500/10 border-rose-500/25 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.18)]",
      glow: "group-hover:border-rose-500/40 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.12)]",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 01: HOME with Pure Black Poster Background) */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-36 pb-14 overflow-hidden border-b border-white/[0.08] bg-black">
        {/* Background Hero Poster Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
          <Image
            src="/images/vmovexa-bus-official.png"
            alt="VMOVEXA Flagship Intelligent Autonomous Transit Bus Poster"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] md:object-center brightness-[0.75] contrast-[1.1] scale-[1.02]"
          />
          {/* Pure Black cinematic scrims for flawless text contrast without gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent/40 md:from-black/95 md:via-black/75 md:to-transparent/20" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-6 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Vertical Index (01 02 03 04) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col gap-6 pt-16 font-mono text-xs text-white/30 tracking-widest">
              <span className="text-cyan-400 font-semibold">01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
            </div>

            {/* Main Header Copy */}
            <div className="lg:col-span-9">
              {/* Status Tracker Badge */}
              <EditorialLine delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span className="font-mono text-xs tracking-wider text-white/90">
                    The Intelligence Layer for Mobility
                  </span>
                </div>
              </EditorialLine>

              {/* Headline */}
              <EditorialLine delay={0.15}>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mb-8 drop-shadow-lg text-white">
                  Intelligence in Motion.
                </h1>
              </EditorialLine>

              {/* Subtitle */}
              <EditorialLine delay={0.3}>
                <p className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed max-w-3xl mb-10 drop-shadow-md">
                  A cloud-to-edge mobility intelligence platform connecting vehicles, people, places and possibilities.
                </p>
              </EditorialLine>

              {/* CTAs */}
              <EditorialLine delay={0.4}>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/platform"
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                      style={{ color: "#000000" }}
                    >
                      <span className="text-black font-semibold">Explore the Platform</span>
                      <FiArrowRight size={16} className="text-black" />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/videos/vmovexa-transit-demo.mp4"
                      target="_blank"
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/25 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/15 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      Watch Video
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            {/* Right Vertical Floating Tags */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/50 tracking-widest">
              <span className="hover:text-white transition-colors cursor-default">Cities</span>
              <span className="hover:text-white transition-colors cursor-default">Fleets</span>
              <span className="hover:text-white transition-colors cursor-default">People</span>
              <span className="hover:text-white transition-colors cursor-default">Possibilities</span>
            </div>
          </div>
        </div>

        {/* Bottom Hero HUD Telemetry Spec Bar */}
        <div className="container relative z-10 max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Platform Status</div>
                <div className="text-xs font-semibold text-white/90">Autonomous Level 4 Ready</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Edge Processing</div>
                <div className="text-xs font-semibold text-white/90">500+ TOPS Dual AI Compute</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Network Mesh</div>
                <div className="text-xs font-semibold text-white/90">5G + V2X Low-Latency &lt;2ms</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Powertrain</div>
                <div className="text-xs font-semibold text-white/90">800V Ultra-Fast Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND TRANSPORTATION: A VEHICLE CAN BE MORE (Mockup Screen 01 Section 2) */}
      <section className="py-20 border-b border-white/[0.08] relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <EditorialLine>
              <div className="font-mono text-xs tracking-widest text-white/60 mb-3">
                Beyond Transportation
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                A vehicle can be more.
              </h2>
            </EditorialLine>
          </div>

          {/* 5 Horizontal Feature Nodes Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { title: "Mobility Platform", icon: RiCarLine, color: "text-cyan-400", badgeBg: "bg-cyan-500/10 border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.2)]" },
              { title: "Digital Media Platform", icon: FiMonitor, color: "text-indigo-400", badgeBg: "bg-indigo-500/10 border-indigo-500/25 shadow-[0_0_20px_rgba(99,102,241,0.2)]" },
              { title: "IoT Edge Node", icon: FiCpu, color: "text-purple-400", badgeBg: "bg-purple-500/10 border-purple-500/25 shadow-[0_0_20px_rgba(168,85,247,0.2)]" },
              { title: "Data Generation", icon: FiActivity, color: "text-emerald-400", badgeBg: "bg-emerald-500/10 border-emerald-500/25 shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
              { title: "Commercial Opportunities", icon: FiZap, color: "text-amber-400", badgeBg: "bg-amber-500/10 border-amber-500/25 shadow-[0_0_20px_rgba(245,158,11,0.2)]" },
            ].map((node, i) => {
              const NodeIcon = node.icon;
              return (
                <GsapScrollReveal key={node.title} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center text-center group cursor-default shadow-lg">
                    <div className={`p-3.5 rounded-xl border ${node.badgeBg} ${node.color} group-hover:scale-110 transition-all duration-300 mb-4`}>
                      <NodeIcon size={24} />
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-white/90 transition-colors">
                      {node.title}
                    </div>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      {/* LIVE TELEMETRY TICKER */}
      <TelemetryTicker />

      {/* 03 — THE PLATFORM (SYSTEM TOPOLOGY) */}
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-4">
                System Topology
              </div>
            </EditorialLine>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-5">
              From Cloud to Moving Edge.
            </h2>
            <EditorialLine delay={0.2}>
              <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
                VMOVEXA connects centralized cloud infrastructure with computing capability inside the vehicle.
              </p>
            </EditorialLine>
          </div>

          {/* 4 Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "01",
                layer: "CLOUD",
                sub: "Centralized Orchestration",
                items: ["Fleet management", "Configuration", "Analytics", "Digital media management"],
                color: "border-cyan-500/30",
                badgeColor: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30",
                glow: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
                icon: FiCloud,
              },
              {
                step: "02",
                layer: "EDGE",
                sub: "Local Execution",
                items: ["Device coordination", "Geofencing", "Telemetry", "Offline operation"],
                color: "border-indigo-500/30",
                badgeColor: "text-indigo-400 bg-indigo-950/40 border-indigo-500/30",
                glow: "hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
                icon: FiCpu,
              },
              {
                step: "03",
                layer: "VEHICLE",
                sub: "Physical Hardware",
                items: ["Displays", "GPS", "Sensors", "Connectivity & Computing"],
                color: "border-purple-500/30",
                badgeColor: "text-purple-400 bg-purple-950/40 border-purple-500/30",
                glow: "hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
                icon: RiCarLine,
              },
              {
                step: "04",
                layer: "DATA",
                sub: "Operational Intelligence",
                items: ["Mobility information", "Device status", "Media performance", "Telemetry feed"],
                color: "border-pink-500/30",
                badgeColor: "text-pink-400 bg-pink-950/40 border-pink-500/30",
                glow: "hover:border-pink-400/50 hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]",
                icon: FiActivity,
              },
            ].map((col, idx) => {
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

          {/* Media Space for Cloud-to-Edge Architecture Visual */}
          <GsapScrollReveal delay={0.3}>
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
          </GsapScrollReveal>
        </div>
      </section>

      {/* 03.5 — INTERACTIVE LIVE FLEET CONSOLE & TELEMETRY SIMULATOR */}
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-14">
            <EditorialLine>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Interactive Console
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
                Experience the connected moving edge.
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal max-w-2xl">
                Switch connected vehicle presets, trigger real-time geofenced DOOH ad swaps, and simulate zero-loss edge caching during network dropouts.
              </p>
            </EditorialLine>
          </div>

          <GsapScrollReveal delay={0.25}>
            <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-1.5 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
              <FleetConsoleSimulator />
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 04 — PLATFORM CAPABILITIES */}
      <section className="py-28 border-b border-white/[0.08]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-4">
                Core Capabilities
              </div>
            </EditorialLine>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              One architecture. Multiple intelligence layers.
            </h2>
            <EditorialLine delay={0.2}>
              <p className="text-sm text-white/55 font-mono leading-relaxed">
                Separation between cloud control and vehicle-side execution, with CORE responsible for local network, media, campaign, geo, GPS, telemetry, security, OTA and offline-cache functions.
              </p>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <GsapScrollReveal key={cap.title} delay={idx * 0.04}>
                  <MagneticElement strength={0.1} className="w-full h-full block">
                    <SpotlightCard className="h-full p-6 backdrop-blur-sm group cursor-default">
                      <div className={`w-11 h-11 rounded-xl border ${cap.badgeBg} flex items-center justify-center mb-4 ${cap.color} group-hover:scale-110 transition-all duration-300`}>
                        <IconComp size={20} />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </SpotlightCard>
                  </MagneticElement>
                </GsapScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — THE DIFFERENCE (NOT DIGITAL SIGNAGE) */}
      <section className="py-28 border-b border-white/[0.08] relative">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider">
                  The Distinction
                </div>
              </EditorialLine>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Not digital signage.
              </h2>

              <EditorialLine delay={0.2}>
                <p className="text-lg text-white/75 leading-relaxed font-light">
                  Digital signage displays content.
                </p>
              </EditorialLine>

              {/* Interactive Matrix Box */}
              <GsapScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <div className="text-cyan-400 font-mono text-xs uppercase tracking-wider">
                    VMOVEXA is designed to connect:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
                    {["Content", "Location", "Vehicle", "Screen", "Cloud", "Data"].map((item, i, arr) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium">
                          {item}
                        </span>
                        {i < arr.length - 1 && <span className="text-cyan-400 font-bold">+</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapScrollReveal>

              <EditorialLine delay={0.4}>
                <p className="text-base text-white/70 leading-relaxed">
                  That changes the role of the screen. It becomes part of a programmable mobility infrastructure.
                </p>
                <div className="mt-6 p-5 rounded-2xl bg-white/[0.03] border border-white/10 font-medium text-base text-white/90 leading-snug">
                  &ldquo;The screen is only what you see. <br />
                  <span className="text-white font-semibold">
                    The intelligence is everything behind it.&rdquo;
                  </span>
                </div>
              </EditorialLine>
            </div>

            {/* Space for Digital OOH / Transit Screen Media */}
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

      {/* 06 — WHY NOW */}
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 text-center relative z-10">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-4">
              Market Macro Thesis
            </div>
          </EditorialLine>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight mb-8">
            The world is becoming software-defined.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {[
              { title: "Vehicles", desc: "Becoming increasingly connected", icon: RiCarLine, color: "text-cyan-400", badgeBg: "bg-cyan-500/10 border-cyan-500/25 shadow-[0_0_15px_rgba(6,182,212,0.2)]" },
              { title: "Cities", desc: "Becoming increasingly digital", icon: FiMapPin, color: "text-indigo-400", badgeBg: "bg-indigo-500/10 border-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.2)]" },
              { title: "Media", desc: "Becoming increasingly measurable", icon: FiMonitor, color: "text-purple-400", badgeBg: "bg-purple-500/10 border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.2)]" },
              { title: "Infrastructure", desc: "Becoming increasingly intelligent", icon: FiCpu, color: "text-emerald-400", badgeBg: "bg-emerald-500/10 border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.2)]" },
            ].map((item, idx) => {
              const CardIcon = item.icon;
              return (
                <GsapScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-left hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className={`p-3 rounded-xl border ${item.badgeBg} ${item.color} inline-block mb-3`}>
                        <CardIcon size={20} />
                      </div>
                      <div className="font-semibold text-white text-base mb-1">{item.title}</div>
                      <div className="text-xs text-white/55">{item.desc}</div>
                    </div>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>

          <EditorialLine delay={0.4}>
            <MagneticElement strength={0.1}>
              <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-white/[0.03] to-white/[0.06] border border-white/15 text-xs font-mono uppercase tracking-[0.2em] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Mobility × Edge Computing × Cloud × Data × Digital Media
              </div>
            </MagneticElement>
          </EditorialLine>
        </div>
      </section>

      {/* 07 — HOME FINAL CTA */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-white/80 font-mono text-xs tracking-wider mb-5">
              VMOVEXA Platform
            </div>
          </EditorialLine>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            The world moves. Intelligence should move with it.
          </h2>
          <EditorialLine delay={0.3}>
            <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              A cloud-to-edge mobility intelligence platform connecting vehicles, computing, digital infrastructure and the connected world.
            </p>
          </EditorialLine>
          <EditorialLine delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={0.3}>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                  style={{ color: "#000000" }}
                >
                  <span className="text-black font-semibold">Explore VMOVEXA</span>
                  <FiArrowRight size={16} className="text-black" />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.06] border border-white/20 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                >
                  Let&apos;s Build <FiArrowUpRight size={16} />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>
        </div>
      </section>
    </main>
  );
}
