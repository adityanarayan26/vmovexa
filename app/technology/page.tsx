import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal, ParallaxElement } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { FloatingElement } from "@/components/animations/image-reveal";
import { GridWaveBackground } from "@/components/visuals/grid-wave-background";
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
    { title: "Connected Vehicles", icon: FiLayers, desc: "Multi-bus integration, real-time vehicle telemetry, and display synchrony" },
    { title: "Digital Media", icon: FiMonitor, desc: "Hardware-accelerated dynamic DOOH playback and verified proof-of-play" },
    { title: "Location Intelligence", icon: FiMapPin, desc: "Designed for sub-meter positioning, polygon geofencing, and spatial logic" },
    { title: "Telemetry Infrastructure", icon: FiShare2, desc: "Real-time state telemetry, diagnostic pings, and event log streaming" },
    { title: "Data Fabric", icon: FiDatabase, desc: "Unified operational intelligence, travel patterns, and audit pipelines" },
  ];

  const telemetryMetrics = [
    "Device state & system health",
    "Network carrier & cellular connectivity",
    "Screen runtime & display temperature",
    "High-precision GNSS vehicle location",
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
      <section className="relative pt-36 pb-12 overflow-hidden bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    <TextDecrypt text="Our Technology" delay={150} />
                  </span>
                </div>
              </EditorialLine>

              <CubertoLines
                as="h1"
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] max-w-4xl mb-6 text-white"
                delay={0.15}
                lines={[
                  "BUILT FOR THE",
                  <span key="sub" className="gradient-text">MOVING EDGE.</span>
                ]}
              />

              <BlurReveal delay={0.25} blurAmount={10}>
                <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-2xl mb-8">
                  A deep-tech architecture combining cloud, edge, connectivity, sensors and intelligent software — engineered for the real world.
                </p>
              </BlurReveal>

              <EditorialLine delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#disciplines"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    >
                      Explore VMOVEXA CORE <FiArrowRight size={16} />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <a
                      href="/docs/VMOVEXA-Brochure.pdf"
                      download="VMOVEXA-Brochure.pdf"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-white/80 hover:text-white hover:border-white/30 text-xs font-mono tracking-wider transition-all duration-300"
                    >
                      Download Tech Brief
                    </a>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 03) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <FloatingElement duration={5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">ROBUST</span>
              </FloatingElement>
              <FloatingElement duration={4.2} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">SECURE</span>
              </FloatingElement>
              <FloatingElement duration={5.5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">SCALABLE</span>
              </FloatingElement>
              <FloatingElement duration={4.7} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">FUTURE-READY</span>
              </FloatingElement>
            </div>
          </div>

          {/* Central Visual: Deep-Tech Bus Wireframe X-Ray with Callouts */}
          <GsapScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
              {/* Left Vertical Annotation */}
              <div className="hidden lg:flex lg:col-span-2 flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-white/50 border-l border-white/10 pl-4 py-6">
                <span className="text-white/30">Technology</span>
                <span className="text-cyan-400 font-semibold"><TextDecrypt text="That Moves" delay={300} /></span>
                <span className="text-white/30">With</span>
                <span className="text-indigo-400 font-semibold"><TextDecrypt text="You." delay={450} /></span>
              </div>

              {/* Wireframe Bus Blueprint Showcase */}
              <div className="lg:col-span-10 relative group">
                <ParallaxElement offset={25}>
                  <MediaSlot
                    theme="transparent"
                    type="image"
                    src="/images/5.jpg"
                    alt="VMOVEXA Deep-Tech Smart Bus Blueprint & Architecture"
                    badge="Deep-Tech Bus Architecture • Wireframe Blueprint"
                    caption="Integrated Moving Edge System: Edge Computing, Sensors, Displays, Telemetry & 5G Gateway"
                    aspectRatio="16/9"
                    objectFit="contain"
                    priority
                    scanline={true}
                    curtainReveal={true}
                  />
                </ParallaxElement>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
        
      </section>

      {/* 02 — DETAILED ARCHITECTURE SPECIFICATIONS */}
      <section className="pt-12 pb-12 relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Edge Computing", desc: "On-vehicle intelligence.", icon: FiCpu, color: "text-cyan-600", badge: "bg-cyan-50 border-cyan-200" },
                { title: "Cloud Infrastructure", desc: "Scale & orchestration.", icon: FiCloud, color: "text-indigo-600", badge: "bg-indigo-50 border-indigo-200" },
                { title: "GPS & Geofencing", desc: "Location as logic.", icon: FiMapPin, color: "text-emerald-600", badge: "bg-emerald-50 border-emerald-200" },
                { title: "Multi-Screen Control", desc: "Independent or synchronized.", icon: FiMonitor, color: "text-purple-600", badge: "bg-purple-50 border-purple-200" },
                { title: "Telemetry & Data", desc: "From mobility to insight.", icon: FiActivity, color: "text-amber-600", badge: "bg-amber-50 border-amber-200" },
                { title: "Security & Resilience", desc: "Built for the real world.", icon: FiShield, color: "text-rose-600", badge: "bg-rose-50 border-rose-200" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <GsapScrollReveal key={item.title} delay={i * 0.05} className="h-full">
                    <TiltCard maxTilt={8} glare={true} className="w-full h-full block">
                      <div 
                        className="p-6 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-cyan-400/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 h-full group cursor-default relative overflow-hidden"
                        style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                      >
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className={`w-11 h-11 rounded-xl border ${item.badge} bg-white/60 backdrop-blur-sm flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-semibold text-zinc-900 mb-1.5 group-hover:text-cyan-700 transition-colors">{item.title}</h3>
                        <p className="text-xs text-zinc-600 group-hover:text-zinc-800 transition-colors font-light">{item.desc}</p>
                      </div>
                    </TiltCard>
                  </GsapScrollReveal>
                );
              })}
            </div>
        </div>
      </section>

      {/* SMART EMERGENCY EXIT SECTION */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="w-[95%] max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
          <GsapScrollReveal delay={0.2}>
            <div className="rounded-[2.5rem] bg-[#0a0a0d] overflow-hidden relative shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-8 lg:gap-12">
                <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center relative z-10 order-2 lg:order-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
                    SMART EMERGENCY EXIT
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
                    REVENUE WHEN CLOSED.<br />
                    <span className="gradient-text">SAFETY WHEN NEEDED.</span>
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                    A first-of-its-kind concept that transforms the emergency exit into an intelligent digital revenue surface.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-xl bg-white/[0.03]">
                      <div className="font-mono text-[11px] text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> NORMAL MODE
                      </div>
                      <div className="text-white/90 text-sm">Premium content • Digital advertising • Contextual media</div>
                    </div>
                    <div className="p-4 rounded-xl bg-rose-500/10">
                      <div className="font-mono text-[11px] text-rose-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" /> EMERGENCY MODE
                      </div>
                      <div className="text-white/90 text-sm">Display turns transparent • Exit unlocks • Passengers evacuate</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] uppercase text-white/60 px-2.5 py-1 rounded bg-white/5">
                      ONE SURFACE. TWO PURPOSES.
                    </span>
                    <span className="font-mono text-[10px] uppercase text-white/60 px-2.5 py-1 rounded bg-white/5">
                      PATENT-PROTECTED TECHNOLOGY
                    </span>
                    <span className="font-mono text-[10px] uppercase text-cyan-400/80 px-2.5 py-1 rounded bg-cyan-500/10">
                      VMOVEXA — REINVENTING THE EMERGENCY EXIT.
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 w-full h-80 lg:h-auto min-h-[500px] lg:min-h-[600px] order-1 lg:order-2 py-8 pr-4 lg:py-12 lg:pr-12 flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[400px]">
                    <Image
                      src="/images/2.jpg"
                      alt="Smart Emergency Exit"
                      fill
                      className="object-contain object-right lg:scale-105 origin-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* Cloud Scale. Edge Speed. Section with Motion Trails Visual */}
      <section className="py-24 relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <GsapScrollReveal delay={0.2}>
            <div className="relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-600 block group-hover:text-cyan-700 transition-colors">Performance Benchmark</span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    Cloud Scale. <br />
                    <span className="gradient-text">Edge Speed.</span>
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    The right intelligence. In the right place. At the right time. Synchronizing centralized orchestration with low-latency edge execution directly on moving transit fleets.
                  </p>
                </div>
                <div className="lg:col-span-6 relative">
                  <MediaSlot
                    theme="transparent"
                    type="image"
                    src="/images/2CCE68D8-4AEF-411F-83FA-39B05037DF94.PNG"
                    alt="VMOVEXA Speed & Motion Blur"
                    badge="Motion Velocity • Low Latency"
                    caption="Architecture Designed for Low-Latency Edge Processing in Real-World Mobility Conditions"
                    aspectRatio="16/9"
                    fade="none"
                  />
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 02 — CLOUD + EDGE (TWO WORLDS. ONE ARCHITECTURE) */}
      <section className="pt-24 pb-8 sm:pb-12 relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <EditorialLine>
                <div className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                  Distributed Topology
                </div>
              </EditorialLine>
              <EditorialLine delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Two worlds. <span className="gradient-text">One architecture.</span>
                </h2>
              </EditorialLine>
              <EditorialLine delay={0.2}>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed pt-2">
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

            {/* Visual: Hierarchical Topology Diagram (new2.PNG) */}
            <div className="lg:col-span-6">
              <GsapScrollReveal delay={0.3}>
                <div className="relative group rounded-3xl p-2 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                  <MediaSlot
                    theme="transparent"
                    type="image"
                    src="/images/new2.PNG"
                    alt="VMOVEXA Three-Tier Topology: Cloud Control, VMOVEXA CORE Edge Execution, and Moving Fleet Intelligence"
                    badge="Distributed Topology • Cloud to Moving Edge"
                    caption="Hierarchical Execution: Cloud Orchestration → VMOVEXA CORE Edge Runtime → Moving Fleets → Data Insights"
                    aspectRatio="3/2"
                    objectFit="contain"
                    fade="none"
                    scanline={true}
                    curtainReveal={true}
                  />
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — GPS & GEOFENCING (MAKE GEOGRAPHY PROGRAMMABLE) */}
      <section className="pt-8 sm:pt-12 pb-24 relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
                Spatial Logic
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
                Make geography <span className="gradient-text">programmable.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
                Location can become an operational input. VMOVEXA can associate mobility infrastructure with defined geographic zones and use those contexts within platform operations.
              </p>
            </EditorialLine>
            <GsapScrollReveal delay={0.3}>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-sm inline-block shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-cyan-500/30 transition-colors">
                <span className="text-white/60">Coordinates become context. </span>
                <span className="gradient-text font-semibold">Context becomes logic.</span>
              </div>
            </GsapScrollReveal>
          </div>

          {/* Visual: Satellite GPS & In-Vehicle Edge Architecture (new3.PNG) */}
          <GsapScrollReveal delay={0.4}>
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-2 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
              <MediaSlot
                theme="transparent"
                type="image"
                src="/images/new3.PNG"
                alt="VMOVEXA Satellite GPS & In-Chassis Edge Computing Architecture"
                badge="Dual-Satellite GPS & In-Vehicle Edge Processor"
                caption="Real-Time Orbital GPS Positioning, In-Chassis VMOVEXA Hardware & Dynamic Polygon Geofence Triggers"
                aspectRatio="16/9"
                objectFit="contain"
                fade="none"
                scanline={true}
                curtainReveal={true}
              />
            </div>
          </GsapScrollReveal>

          {/* Spatial Capabilities Specs below diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">High Precision</div>
              <div className="text-xs text-white/60">Designed for Sub-Meter Accuracy</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">Multi-Polygon</div>
              <div className="text-xs text-white/60">Spatial Boundary Logic</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Directional</div>
              <div className="text-xs text-white/60">Corridor Heading Triggers</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Low-Latency Edge</div>
              <div className="text-xs text-white/60">In-Vehicle Autonomous Cache</div>
            </div>
          </div>
        </div>

      </section>

      {/* 04 — TELEMETRY & MULTI-SCREEN */}
      <section className="py-28 relative overflow-hidden bg-white">
        <GridWaveBackground variant="indigo" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Telemetry */}
            <GsapScrollReveal>
              <div 
                className="p-8 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 space-y-6 h-full hover:border-cyan-500/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
                style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 mb-2">Telemetry</div>
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-3">The vehicle speaks in <span className="gradient-text">data.</span></h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-light">
                    Connected systems generate operational information continuously. VMOVEXA&apos;s architecture incorporates telemetry as a core part of the vehicle-edge environment.
                  </p>
                  <div className="pt-6 border-t border-zinc-200/70">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Continuous Visibility Into:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-700">
                      {telemetryMetrics.map((m, i) => (
                        <div key={i} className="flex items-start gap-2 group/item cursor-default">
                          <FiCheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="group-hover/item:text-zinc-900 transition-colors font-medium">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>

            {/* Multi-Screen */}
            <GsapScrollReveal delay={0.2}>
              <div 
                className="p-8 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 space-y-6 h-full hover:border-purple-500/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
                style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="font-mono text-xs uppercase tracking-widest text-purple-600 mb-2">Multi-Screen</div>
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-3">One edge. <span className="gradient-text">Many digital surfaces.</span></h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-light">
                    The vehicle can become a coordinated display environment rather than a collection of independent screens.
                  </p>
                  <div className="p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-zinc-200/70 space-y-3 text-xs font-mono text-zinc-800 mb-6 shadow-xs">
                    <div className="text-zinc-900 font-semibold">Supported Display Modes:</div>
                    <div className="flex flex-wrap gap-2 text-cyan-600">
                      {['Independent', 'Mirrored', 'Synchronized', 'Split-Zone', 'Multi-Zone'].map(mode => (
                        <span key={mode} className="px-3 py-1.5 rounded bg-white border border-zinc-200/70 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 transition-colors cursor-default shadow-xs">{mode}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                    Coordinate passenger infotainment, exterior digital advertising, driver telemetry displays, and route mapping simultaneously.
                  </p>
                </div>
              </div>
            </GsapScrollReveal>
          </div>
        </div>
      </section>

      {/* 04.B — FULL-STACK FLEET TELEMETRY & SERVICE FABRIC (new1.PNG) */}
      <section className="pt-24 pb-8 relative overflow-hidden bg-black border-t border-white/5">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <GsapScrollReveal delay={0.1}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                  End-to-End Synchronization
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  From Central Cloud to <span className="gradient-text">Moving Edge Fleets.</span>
                </h3>
                <p className="text-sm text-white/60 max-w-2xl mt-2 leading-relaxed font-normal">
                  A unified multi-tier operational stack connecting cloud data fabrics, containerized microservices, distributed edge racks, and high-frequency in-transit vehicle clusters.
                </p>
              </div>
              
              {/* Capability Indicators */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Near-Real-Time Event Triggering</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Offline-First Edge Resilience</span>
                </div>
              </div>
            </div>

            {/* Visual Container for new1.PNG */}
            <div className="relative group rounded-[2.5rem] p-2 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden mb-6 shadow-2xl">
              <MediaSlot
                theme="transparent"
                type="image"
                src="/images/new1.PNG"
                alt="VMOVEXA End-to-End Fleet Architecture: Cloud Datacenter, Microservice Tier, Edge Servers, and Connected Fleet"
                badge="Full-Stack Fleet Telemetry & Orchestration Fabric"
                caption="End-to-End Pipeline: Global & Regional Cloud Analytics ↔ Microservice Tier ↔ Edge Hardware ↔ High-Frequency Vehicle Bus Fleet"
                aspectRatio="3/2"
                objectFit="contain"
                fade="none"
                scanline={true}
                curtainReveal={true}
              />
            </div>

            {/* 4 Feature Spec Pillars below the diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group relative rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 transition-all duration-500">
                <div className="p-5 rounded-2xl bg-[#0a0a0a] h-full transition-colors">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5 font-semibold">01 • Cloud Orchestration</div>
                  <div className="text-xs text-white/60 leading-relaxed">Multi-tenant fleet management, campaign rules, and unified national telemetry aggregation.</div>
                </div>
              </div>
              <div className="group relative rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 transition-all duration-500">
                <div className="p-5 rounded-2xl bg-[#0a0a0a] h-full transition-colors">
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1.5 font-semibold">02 • Microservices Tier</div>
                  <div className="text-xs text-white/60 leading-relaxed">Decoupled APIs for real-time routing, DOOH playback logs, spatial queries, and security.</div>
                </div>
              </div>
              <div className="group relative rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 transition-all duration-500">
                <div className="p-5 rounded-2xl bg-[#0a0a0a] h-full transition-colors">
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1.5 font-semibold">03 • Distributed Edge</div>
                  <div className="text-xs text-white/60 leading-relaxed">Depot and in-vehicle edge nodes providing localized decisioning even during network loss.</div>
                </div>
              </div>
              <div className="group relative rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 transition-all duration-500">
                <div className="p-5 rounded-2xl bg-[#0a0a0a] h-full transition-colors">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5 font-semibold">04 • In-Transit Fleet</div>
                  <div className="text-xs text-white/60 leading-relaxed">Designed for sub-meter positioning, multi-screen sync, and vehicle telemetry integration.</div>
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 05 — API-READY ARCHITECTURE (BUILT TO CONNECT) */}
      <section className="pt-8 pb-28 relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3">
                Interoperability
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 text-white">
                Built to <span className="gradient-text">Connect.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
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

          {/* Visual: Central Fleet Network Operations & Command Grid (new.PNG) */}
          <GsapScrollReveal delay={0.2}>
            <div className="mb-16 relative group rounded-3xl p-2 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl overflow-hidden">
              <MediaSlot
                theme="transparent"
                type="image"
                src="/images/new.PNG"
                alt="VMOVEXA Network Operations Center (NOC) and Distributed Fleet Edge Network"
                badge="Centralized Fleet Network Operations & Command Grid"
                caption="Real-Time Network Operations: Multi-City Fleet Telemetry NOC ↔ Edge Gateway Communication ↔ Depot Hubs"
                aspectRatio="16/9"
                objectFit="contain"
                fade="none"
              />
            </div>
          </GsapScrollReveal>

          {/* Security & Resilience banner */}
          <GsapScrollReveal delay={0.3}>
            <div className="pt-12 mt-20 border-t border-zinc-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50/50 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <div className="space-y-3 max-w-2xl relative z-10">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                  <FiShield size={16} className="group-hover:text-cyan-300 transition-colors" /> Security + Resilience
                </div>
                <h4 className="text-2xl font-semibold text-white">Designed for Distributed Infrastructure</h4>
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  Connected mobility operates across public environments, variable networks and geographically distributed endpoints. VMOVEXA incorporates security, OTA management, offline caching and controlled cloud-to-edge communication within the architecture.
                </p>
              </div>
              <MagneticElement strength={0.2} className="relative z-10">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-xs uppercase tracking-wider flex-shrink-0 hover:scale-105 active:scale-95 transition-transform shadow-md"
                >
                  Explore VMOVEXA CORE <FiArrowRight size={14} />
                </Link>
              </MagneticElement>
            </div>
          </GsapScrollReveal>
        </div>
        
      </section>

      {/* CTA — Light / White Background */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 font-mono text-xs uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>Engineered for Motion</span>
            </div>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight mb-8 text-zinc-900 leading-tight">
              Explore the Technology <span className="gradient-text font-semibold">In Depth.</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={0.3}>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-black text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:bg-zinc-800"
                >
                  View Solutions <FiArrowRight size={16} />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white border border-zinc-300 text-zinc-900 font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-400 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
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
