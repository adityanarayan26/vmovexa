import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCloud,
  FiCpu,
  FiRadio,
  FiMapPin,
  FiMonitor,
  FiShield,
  FiDatabase,
  FiLayers,
  FiCheckCircle,
  FiShare2,
  FiActivity,
} from "react-icons/fi";
import { EditorialMaskText, EditorialLine } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";

export const metadata: Metadata = {
  title: "VMOVEXA Technology | Edge Computing, IoT & Connected Mobility",
  description:
    "Discover VMOVEXA technology across vehicle edge computing, cloud infrastructure, GPS, geofencing, telemetry, multi-screen systems, APIs and offline computing.",
  keywords: [
    "vehicle edge computing",
    "edge computing for vehicles",
    "connected vehicle technology",
    "fleet edge computing",
    "vehicle IoT platform",
    "GPS fleet intelligence",
    "geofencing platform",
    "vehicle telemetry platform",
    "multi-screen vehicle technology",
    "cloud edge architecture",
  ],
};

export default function TechnologyPage() {
  const disciplines = [
    { title: "Cloud Computing", icon: FiCloud, desc: "Centralized coordination, multi-tenant fleet fabrics, and global analytics" },
    { title: "Edge Computing", icon: FiCpu, desc: "In-vehicle runtime, local execution, and low-latency microservices" },
    { title: "IoT & Hardware", icon: FiRadio, desc: "Automotive-grade bus interfaces, GPS sensors, and cellular gateways" },
    { title: "Connected Vehicles", icon: FiLayers, desc: "Multi-bus integration, real-time CAN bus telemetry, and display synchrony" },
    { title: "Digital Media", icon: FiMonitor, desc: "Hardware-accelerated dynamic DOOH playback and verified proof-of-play" },
    { title: "Location Intelligence", icon: FiMapPin, desc: "Sub-meter GPS positioning, polygon geofencing, and spatial logic" },
    { title: "Telemetry Infrastructure", icon: FiShare2, desc: "Real-time state telemetry, diagnostic pings, and event log streaming" },
    { title: "Data Fabric", icon: FiDatabase, desc: "Unified operational intelligence, travel patterns, and audit pipelines" },
  ];

  const telemetryMetrics = [
    "Device state & system health",
    "Network carrier & 5G/4G connectivity",
    "Screen runtime & display temperature",
    "Precise sub-meter vehicle location",
    "Real-time operational conditions",
    "Encrypted system events & alarms",
  ];

  const apiDomains = [
    { title: "Fleet Systems", desc: "CAD/AVL, dispatching, routing, and vehicle telematics engines" },
    { title: "Mobility Platforms", desc: "MaaS aggregators, urban transit applications, and ticketing services" },
    { title: "Mapping & GIS", desc: "High-definition vector polygons, road topology, and geospatial overlays" },
    { title: "Digital Media Systems", desc: "Programmatic DSPs, SSPs, ad exchanges, and media measurement" },
    { title: "Enterprise Applications", desc: "ERP, logistics scheduling, asset management, and analytics" },
    { title: "Data Platforms", desc: "Cloud data lakes, warehouse ingestion, and ML intelligence pipelines" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 03: TECHNOLOGY) */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    Our Technology
                  </span>
                </div>
              </EditorialLine>

              <EditorialLine delay={0.15}>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mb-8 text-white">
                  Built for the moving edge.
                </h1>
              </EditorialLine>

              <EditorialLine delay={0.3}>
                <p className="text-xl sm:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl mb-10">
                  A deep-tech architecture combining cloud, edge, connectivity, sensors and intelligent software — engineered for the real world.
                </p>
              </EditorialLine>

              <EditorialLine delay={0.4}>
                <div className="flex items-center gap-4 mb-10">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#disciplines"
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    >
                      Explore VMOVEXA CORE <FiArrowRight size={16} />
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 03) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <span className="hover:text-cyan-400 transition-colors cursor-default">ROBUST</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">SECURE</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">SCALABLE</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">FUTURE-READY</span>
            </div>
          </div>

          {/* Central Visual: Deep-Tech Bus Wireframe X-Ray with Callouts */}
          <GsapScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16">
              {/* Left Vertical Annotation */}
              <div className="hidden lg:flex lg:col-span-2 flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-white/50 border-l border-white/10 pl-4 py-6">
                <span className="text-white/30">Technology</span>
                <span className="text-cyan-400 font-semibold">That Moves</span>
                <span className="text-white/30">With</span>
                <span className="text-indigo-400 font-semibold">You.</span>
              </div>

              {/* Wireframe Bus Blueprint Showcase */}
              <div className="lg:col-span-10 relative group">
                {/* Visual Image */}
                <MediaSlot
                  type="image"
                  src="/images/vmovexa-technology-bus-xray.png"
                  alt="VMOVEXA Deep-Tech Smart Bus Blueprint & Architecture"
                  badge="Deep-Tech Bus Architecture • Wireframe Blueprint"
                  caption="Integrated Moving Edge System: Edge Computing, Sensors, Displays, Telemetry & 5G Gateway"
                  aspectRatio="16/9"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </GsapScrollReveal>

          {/* 4 Blue Technology Cards from Mockup Screen 03 */}
          <GsapScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-white/10">
              {[
                { title: "Edge Computing", icon: FiCpu, desc: "Local workload execution and low-latency in-vehicle processing" },
                { title: "Cloud Infrastructure", icon: FiCloud, desc: "Centralized fleet orchestration, telemetry sync and rule definitions" },
                { title: "Location Intelligence", icon: FiMapPin, desc: "Sub-meter GPS positioning, polygon geofencing and contextual triggers" },
                { title: "Multi-Screen Systems", icon: FiMonitor, desc: "Synchronized digital surfaces, smart DOOH, and real-time passenger info" },
              ].map((card, i) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/30 to-white/[0.02] border border-blue-500/20 hover:border-cyan-400/50 hover:bg-blue-950/40 transition-all duration-300 group flex flex-col items-center text-center shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <CardIcon size={22} />
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 02 — DETAILED ARCHITECTURE SPECIFICATIONS */}
      <section className="py-24 border-b border-white/[0.08]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {[
                { title: "Edge Computing", desc: "On-vehicle intelligence.", icon: FiCpu, color: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.12)]" },
                { title: "Cloud Infrastructure", desc: "Scale & orchestration.", icon: FiCloud, color: "text-indigo-400", badge: "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.12)]" },
                { title: "GPS & Geofencing", desc: "Location as logic.", icon: FiMapPin, color: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.12)]" },
                { title: "Multi-Screen Control", desc: "Independent or synchronized.", icon: FiMonitor, color: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.12)]" },
                { title: "Telemetry & Data", desc: "From mobility to insight.", icon: FiActivity, color: "text-amber-400", badge: "bg-amber-500/10 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.12)]" },
                { title: "Security & Resilience", desc: "Built for the real world.", icon: FiShield, color: "text-rose-400", badge: "bg-rose-500/10 border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.12)]" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <GsapScrollReveal key={item.title} delay={i * 0.05}>
                    <MagneticElement strength={0.1} className="w-full h-full block">
                      <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 h-full group cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                        <div className={`w-11 h-11 rounded-xl border ${item.badge} flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-cyan-100 transition-colors">{item.title}</h3>
                        <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{item.desc}</p>
                      </div>
                    </MagneticElement>
                  </GsapScrollReveal>
                );
              })}
            </div>

          {/* Cloud Scale. Edge Speed. Section with Motion Trails Visual */}
          <GsapScrollReveal delay={0.2}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 mb-12 hover:border-cyan-500/20 transition-colors group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block group-hover:text-cyan-300 transition-colors">Performance Benchmark</span>
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                    Cloud Scale. <br />
                    <span className="text-cyan-400">Edge Speed.</span>
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    The right intelligence. In the right place. At the right time. Synchronizing high-throughput centralized orchestration with sub-millisecond edge triggering directly on moving transit fleets.
                  </p>
                </div>
                <div className="lg:col-span-6 relative">
                  <MediaSlot
                    type="image"
                    src="/images/vmovexa-speed-trails.png"
                    alt="VMOVEXA Speed & Motion Blur"
                    badge="Motion Velocity • Low Latency"
                    caption="Ultra-Low Latency Edge Processing in Real-World Mobility Conditions"
                    aspectRatio="16/9"
                  />
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 02 — CLOUD + EDGE (TWO WORLDS. ONE ARCHITECTURE) */}
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <EditorialLine>
                <div className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                  Distributed Topology
                </div>
              </EditorialLine>
              <EditorialLine delay={0.1}>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Two worlds. One architecture.
                </h2>
              </EditorialLine>
              <EditorialLine delay={0.2}>
                <p className="text-lg text-white/70 leading-relaxed pt-2">
                  Cloud infrastructure provides centralized coordination. Edge infrastructure provides localized execution. Together they create a distributed computing model designed for mobility.
                </p>
              </EditorialLine>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <GsapScrollReveal delay={0.3}>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-colors h-full group">
                    <div className="font-semibold text-white text-sm mb-1 group-hover:text-indigo-200 transition-colors">Cloud Infrastructure</div>
                    <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">Centralized orchestration, global fleet policies, and deep intelligence analytics.</div>
                  </div>
                </GsapScrollReveal>
                <GsapScrollReveal delay={0.4}>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-colors h-full group">
                    <div className="font-semibold text-white text-sm mb-1 group-hover:text-indigo-200 transition-colors">Edge Infrastructure</div>
                    <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">Localized runtime, in-vehicle real-time compute, and offline fault-tolerance.</div>
                  </div>
                </GsapScrollReveal>
              </div>
            </div>

            {/* Reserved Space for Edge Node Visual / Mockup */}
            <div className="lg:col-span-6">
              <GsapScrollReveal delay={0.3}>
                <div className="relative group">
                  <MediaSlot
                    type="image"
                    src="/images/VMOVEXA FOLDER DESIGN MOCKUP4.PNG"
                    alt="VMOVEXA Edge Computing Node Setup"
                    badge="Edge Infrastructure • Hardware Runtime"
                    caption="Integrated Computing, Telemetry & Multi-Screen Controllers"
                    aspectRatio="16/9"
                  />
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — GPS & GEOFENCING (MAKE GEOGRAPHY PROGRAMMABLE) */}
      <section className="py-28 border-b border-white/[0.08] relative bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
                Spatial Logic
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
                Make geography programmable.
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Location can become an operational input. VMOVEXA can associate mobility infrastructure with defined geographic zones and use those contexts within platform operations.
              </p>
            </EditorialLine>
            <GsapScrollReveal delay={0.3}>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-sm inline-block shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-cyan-500/30 transition-colors">
                <span className="text-white/60">Coordinates become context. </span>
                <span className="text-cyan-400 font-semibold">Context becomes logic.</span>
              </div>
            </GsapScrollReveal>
          </div>

          {/* Reserved Space for Geofencing & Real-Time Map Video */}
          <GsapScrollReveal delay={0.4}>
            <div className="relative group overflow-hidden rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <MediaSlot
                type="placeholder"
                badge="Space Reserved • Programmable Geofencing & Map Video"
                caption="Sub-Meter GPS Trajectories & Real-Time Polygon Boundary Triggers"
                aspectRatio="21/9"
              />
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 04 — TELEMETRY & MULTI-SCREEN */}
      <section className="py-28 border-b border-white/[0.08]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Telemetry */}
            <GsapScrollReveal>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 h-full hover:bg-white/[0.03] hover:border-cyan-500/20 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <div className="relative z-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">Telemetry</div>
                  <h3 className="text-3xl font-semibold text-white mb-4">The vehicle speaks in data.</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Connected systems generate operational information continuously. VMOVEXA&apos;s architecture incorporates telemetry as a core part of the vehicle-edge environment.
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Continuous Visibility Into:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                      {telemetryMetrics.map((m, i) => (
                        <div key={i} className="flex items-start gap-2 group/item cursor-default">
                          <FiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="group-hover/item:text-white transition-colors">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>

            {/* Multi-Screen */}
            <GsapScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 h-full hover:bg-white/[0.03] hover:border-purple-500/20 transition-all duration-500 group relative overflow-hidden">
                 <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <div className="relative z-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2">Multi-Screen</div>
                  <h3 className="text-3xl font-semibold text-white mb-4">One edge. Many digital surfaces.</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    The vehicle can become a coordinated display environment rather than a collection of independent screens.
                  </p>
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-xs font-mono text-white/80 mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <div className="text-white font-semibold">Supported Display Modes:</div>
                    <div className="flex flex-wrap gap-2 text-cyan-400">
                      {['Independent', 'Mirrored', 'Synchronized', 'Split-Zone', 'Multi-Zone'].map(mode => (
                        <span key={mode} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 hover:bg-cyan-950/40 hover:border-cyan-500/30 transition-colors cursor-default">{mode}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-mono">
                    Coordinate passenger infotainment, exterior digital advertising, driver telemetry displays, and route mapping simultaneously.
                  </p>
                </div>
              </div>
            </GsapScrollReveal>
          </div>
        </div>
      </section>

      {/* 05 — API-READY ARCHITECTURE (BUILT TO CONNECT) */}
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
                Interoperability
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-4 text-white">
                Built to Connect.
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-lg text-white/70 leading-relaxed">
                VMOVEXA is designed to operate within broader enterprise and mobility ecosystems. The architecture anticipates APIs spanning fleet data, mobility data, screen availability, campaigns and analytics.
              </p>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {apiDomains.map((api, idx) => (
              <GsapScrollReveal key={api.title} delay={idx * 0.1}>
                <MagneticElement strength={0.05}>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 h-full group cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-3 opacity-70 group-hover:opacity-100 transition-opacity">Integration</span>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-100 transition-colors">{api.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{api.desc}</p>
                  </div>
                </MagneticElement>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Security & Resilience banner */}
          <GsapScrollReveal delay={0.3}>
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-white/20 transition-colors group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <div className="space-y-3 max-w-2xl relative z-10">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                  <FiShield size={16} className="group-hover:text-white transition-colors" /> Security + Resilience
                </div>
                <h4 className="text-2xl font-semibold text-white">Designed for Distributed Infrastructure</h4>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  Connected mobility operates across public environments, variable networks and geographically distributed endpoints. VMOVEXA incorporates security, OTA management, offline caching and controlled cloud-to-edge communication within the architecture.
                </p>
              </div>
              <MagneticElement strength={0.2} className="relative z-10">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex-shrink-0 hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(255,255,255,0.1)]"
                >
                  Explore VMOVEXA CORE <FiArrowRight size={14} />
                </Link>
              </MagneticElement>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">Engineered for Motion</div>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-8 text-white">
              Explore the Technology In Depth.
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={0.3}>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  View Solutions <FiArrowRight size={16} />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.06] border border-white/20 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 hover:border-white/30"
                >
                  Request Architecture Brief <FiArrowUpRight size={16} />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>
        </div>
      </section>
    </main>
  );
}
