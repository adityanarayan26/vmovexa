import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCloud,
  FiCpu,
  FiMonitor,
  FiWifiOff,
  FiMapPin,
  FiActivity,
  FiLayers,
  FiDatabase,
} from "react-icons/fi";
import { RiBusLine, RiMegaphoneLine } from "react-icons/ri";
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { FloatingElement } from "@/components/animations/image-reveal";
import { GridWaveBackground } from "@/components/visuals/grid-wave-background";
export const metadata: Metadata = {
  title: "VMOVEXA Platform | Connected Mobility & Edge Computing",
  description:
    "Explore the VMOVEXA cloud-to-edge mobility platform connecting fleet management, vehicle edge computing, GPS, displays, telemetry, geofencing and mobility data.",
  keywords: [
    "connected mobility platform",
    "fleet management platform",
    "VMOVEXA ONE",
    "VMOVEXA CORE",
    "vehicle edge computing",
    "cloud edge architecture",
  ],
};

export default function PlatformPage() {
  const unifiedPlatformCards = [
    { 
      title: "Fleet Management", 
      subtitle: "Centralized Fleet Control",
      desc: "Centralized fleet, device, and telemetry control across distributed assets.", 
      cta: "Explore Fleet Control",
      href: "#vmovexa-one",
      icon: RiBusLine, 
      color: "text-cyan-400", 
      badgeBg: "bg-cyan-500/15 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
      borderColor: "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      glowBg: "from-cyan-500/25 via-transparent to-transparent",
      accentBar: "bg-cyan-400",
    },
    { 
      title: "Digital Media Orchestration", 
      subtitle: "Contextual Screen Delivery",
      desc: "Software-defined contextual multi-screen campaigns and dynamic playback.", 
      cta: "Explore Media Engine",
      href: "/media",
      icon: RiMegaphoneLine, 
      color: "text-pink-400", 
      badgeBg: "bg-pink-500/15 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.25)]",
      borderColor: "border-pink-500/40 hover:border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
      glowBg: "from-pink-500/25 via-transparent to-transparent",
      accentBar: "bg-pink-400",
    },
    { 
      title: "Location Intelligence", 
      subtitle: "Real-Time Spatial Logic",
      desc: "Low-latency GPS geofencing, trigger-based zones, and real-time route logic.", 
      cta: "Explore Geo Logic",
      href: "#vmovexa-one",
      icon: FiMapPin, 
      color: "text-indigo-400", 
      badgeBg: "bg-indigo-500/15 border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.25)]",
      borderColor: "border-indigo-500/40 hover:border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
      glowBg: "from-indigo-500/25 via-transparent to-transparent",
      accentBar: "bg-indigo-400",
    },
    { 
      title: "Telemetry & Data", 
      subtitle: "Hardware Diagnostics & Health",
      desc: "Hardware diagnostics, health, sensor telemetry, and live event streaming.", 
      cta: "Explore Edge Telemetry",
      href: "#vmovexa-core",
      icon: FiActivity, 
      color: "text-purple-400", 
      badgeBg: "bg-purple-500/15 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
      borderColor: "border-purple-500/40 hover:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      glowBg: "from-purple-500/25 via-transparent to-transparent",
      accentBar: "bg-purple-400",
    },
    { 
      title: "Scalable Infrastructure", 
      subtitle: "Cloud-to-Edge Resilience",
      desc: "High-throughput cloud scale meets resilient, offline-capable edge speed.", 
      cta: "Explore Architecture",
      href: "/technology",
      icon: FiDatabase, 
      color: "text-fuchsia-400", 
      badgeBg: "bg-fuchsia-500/15 border-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.25)]",
      borderColor: "border-fuchsia-500/40 hover:border-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
      glowBg: "from-fuchsia-500/25 via-transparent to-transparent",
      accentBar: "bg-fuchsia-400",
    },
  ];

  const cloudItems = [
    "Fleets",
    "Vehicles",
    "Devices",
    "Displays",
    "Routes",
    "Trips",
    "Content",
    "Campaigns",
    "Geofences",
    "Analytics",
    "Users",
    "Configurations",
  ];

  const coreEngines = [
    { title: "Network Engine", desc: "Connectivity and communication management across cellular & eSIM gateways." },
    { title: "Media Engine", desc: "Digital content playback execution and hardware-accelerated video rendering." },
    { title: "Campaign Engine", desc: "Remote campaign execution, rules matching, and schedule enforcement." },
    { title: "Geo-Fence Engine", desc: "Real-time location-aware operational rules and spatial triggers." },
    { title: "GPS Positioning", desc: "Designed for continuous high-precision vehicle positioning and movement calculation." },
    { title: "Telemetry Engine", desc: "Operational data capture, device state recording, and event logging." },
    { title: "Multi-Screen Controller", desc: "Coordinated independent, mirrored, and synchronized multi-display management." },
    { title: "Security Fabric", desc: "Protected device authorization and authenticated cloud-to-edge communication." },
    { title: "OTA Management", desc: "Remote software lifecycle, verified firmware updates, and component upgrades." },
    { title: "Offline Storage Engine", desc: "Local disk caching preserving complete operation without internet access." },
  ];

  const visibilityStates = [
    "Vehicle status",
    "GPS availability",
    "Network condition",
    "Edge-system health",
    "Display status",
    "Campaign status",
    "Device state",
  ];

  const geoZones = [
    "Airport Corridor",
    "Business District",
    "Sports Stadium",
    "Transit Hub",
    "City Centre",
    "Tourism Zone",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 02: PLATFORM) */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    <TextDecrypt text="The VMOVEXA Platform" delay={150} />
                  </span>
                </div>
              </EditorialLine>

              <CubertoLines
                as="h1"
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] max-w-4xl mb-6 text-white"
                delay={0.15}
                lines={[
                  "One Platform.",
                  <span key="sub" className="gradient-text">Every Moving Edge.</span>
                ]}
              />

              <BlurReveal delay={0.25} blurAmount={10}>
                <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-3xl mb-8">
                  VMOVEXA creates a digital operating layer between centralized cloud infrastructure and physical mobility — designed for a more connected, intelligent and measurable world.
                </p>
              </BlurReveal>

              <EditorialLine delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#vmovexa-one"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-zinc-200 group uppercase"
                    >
                      <span>Explore VMOVEXA ONE</span>
                      <FiArrowRight size={15} className="text-black transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#vmovexa-core"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/20 text-white font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 uppercase"
                    >
                      <span>Discover VMOVEXA CORE</span>
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 02) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <FloatingElement duration={5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">SCALE</span>
              </FloatingElement>
              <FloatingElement duration={4.2} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">CONTROL</span>
              </FloatingElement>
              <FloatingElement duration={5.5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">INTELLIGENCE</span>
              </FloatingElement>
              <FloatingElement duration={4.7} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">IMPACT</span>
              </FloatingElement>
            </div>
          </div>

          {/* 3D Architecture Visual with Left Tag 'FROM CLOUD TO MOVING EDGE' - Right Shifted */}
          <GsapScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
              {/* Left Vertical Annotation */}
              <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 font-mono border-l-2 border-white/15 pl-6 py-6">
                <div className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em]">
                  <span className="text-white/40">From</span>
                  <span className="text-cyan-400 font-bold text-sm tracking-widest"><TextDecrypt text="Cloud" delay={300} /></span>
                  <span className="text-white/40">To Moving</span>
                  <span className="text-indigo-400 font-bold text-sm tracking-widest"><TextDecrypt text="Edge" delay={500} /></span>
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed pt-2">
                  Unified architectural stack orchestrating centralized systems with distributed in-vehicle computing, multi-screen control, and real-time telemetry.
                </p>
              </div>

              {/* Shifted to Right Side 3D Isometric Layers Visual */}
              <div className="lg:col-span-8 relative group flex justify-end">
                <MediaSlot
                  theme="transparent"
                  fade="none"
                  parallax={false}
                  type="image"
                  src="/images/vmovexa-platform-layers-3d-black.png"
                  alt="VMOVEXA 3D Platform Isometric Architecture: Cloud, Edge, Vehicle"
                  badge="3D Isometric Architecture • Multi-Layer Stack"
                  caption="From Cloud Orchestration to In-Vehicle Moving Edge"
                  aspectRatio="16/9"
                  objectFit="contain"
                  priority
                  scanline={true}
                  curtainReveal={true}
                  className="w-full max-w-3xl ml-auto"
                />
              </div>
            </div>
          </GsapScrollReveal>

          {/* 4 Core Architectural Capabilities */}
          <GsapScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-12 border-t border-white/10">
              {[
                { 
                  icon: FiCpu, 
                  tag: "Edge Computing", 
                  title: "Autonomous Edge Runtime", 
                  desc: "Vehicle-side local decisioning with zero latency and 100% offline continuity.",
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10 border-cyan-500/30"
                },
                { 
                  icon: FiCloud, 
                  tag: "Cloud Fabric", 
                  title: "Distributed Fleet Mesh", 
                  desc: "Centralized policy distribution, predictive routing, and fleet orchestration.",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10 border-indigo-500/30"
                },
                { 
                  icon: FiMapPin, 
                  tag: "Spatial Logic", 
                  title: "Geofenced Context Engine", 
                  desc: "Real-time polygon boundaries trigger contextual passenger messages.",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10 border-purple-500/30"
                },
                { 
                  icon: FiMonitor, 
                  tag: "Digital Media", 
                  title: "Multi-Screen Synchrony", 
                  desc: "Unified hardware bus powering dynamic exterior and interior display arrays.",
                  color: "text-pink-400",
                  bg: "bg-pink-500/10 border-pink-500/30"
                },
              ].map((feat) => {
                const Icon = feat.icon;
                return (
                  <TiltCard key={feat.title} maxTilt={6} className="h-full">
                    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#2f7bff]/30 via-[#6a4cff]/30 to-[#d946ef]/30 group-hover:from-[#2f7bff] group-hover:via-[#6a4cff] group-hover:to-[#d946ef] transition-all duration-300 h-full group">
                      <div className="p-6 rounded-[calc(1rem-1px)] bg-[#07090e] h-full flex flex-col justify-between group-hover:bg-[#0a0d16] transition-colors">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className={`p-2.5 rounded-xl border ${feat.bg} ${feat.color}`}>
                              <Icon size={18} />
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                              {feat.tag}
                            </span>
                          </div>
                          <h4 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-white/60 leading-relaxed font-light">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </GsapScrollReveal>

          {/* Subheading + 5 Feature Cards with Logo Gradient Borders */}
          <div id="connected-intelligence" className="pt-16 mt-16 border-t border-white/10 scroll-mt-24">
            <EditorialLine>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                  A Unified Platform For A Connected Tomorrow
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                  Connected Intelligence at Every Layer
                </h3>
              </div>
            </EditorialLine>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 xl:gap-3 items-stretch">
              {unifiedPlatformCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <GsapScrollReveal key={card.title} delay={idx * 0.07} className="h-full flex flex-col">
                    <TiltCard maxTilt={8} glare={true} className="w-full h-full flex flex-col">
                      <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#2f7bff]/30 via-[#6a4cff]/30 to-[#d946ef]/30 group-hover:from-[#2f7bff] group-hover:via-[#6a4cff] group-hover:to-[#d946ef] transition-all duration-300 h-full flex flex-col group">
                        <div className="p-5 sm:p-5.5 xl:p-4.5 2xl:p-5 rounded-[calc(1rem-1px)] bg-[#07090e] h-full flex flex-col justify-between relative overflow-hidden flex-1 group-hover:bg-[#0a0d16] transition-colors">
                          {/* Ambient top color accent with logo gradient */}
                          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#2f7bff]/40 via-[#6a4cff]/40 to-[#d946ef]/40 opacity-100 group-hover:h-[2px] group-hover:from-[#2f7bff] group-hover:via-[#6a4cff] group-hover:to-[#d946ef] transition-all" />
                          <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-b from-indigo-500/25 via-pink-500/15 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />

                          <div className="relative z-10 flex-1 flex flex-col">
                            <div className={`w-11 h-11 rounded-xl border ${card.badgeBg} flex items-center justify-center ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            {/* Heading in crisp white with gradient hover */}
                            <h4 className="text-[15px] sm:text-base xl:text-[14.5px] 2xl:text-[16px] font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-indigo-300 group-hover:to-pink-300 mb-2  tracking-tight leading-snug break-words transition-all">
                              {card.title}
                            </h4>
                            {/* Subtitle in Crisp Light Color */}
                            <p className="text-[11px] font-mono uppercase tracking-wider mb-3 !text-white/80 font-medium leading-relaxed">
                              {card.subtitle}
                            </p>
                            {/* Description in High Contrast Zinc */}
                            <p className="text-xs xl:text-[12.5px] 2xl:text-xs !text-zinc-200 leading-relaxed font-normal flex-1">
                              {card.desc}
                            </p>
                          </div>

                          <div className="pt-5 mt-5 border-t border-white/10 relative z-10">
                            <Link
                              href={card.href}
                              className="inline-flex items-center justify-between w-full text-[11px] xl:text-xs font-semibold !text-white hover:!text-cyan-300 uppercase tracking-wider transition-colors group/cta"
                            >
                              <span className="!text-white group-hover/cta:underline">{card.cta}</span>
                              <FiArrowRight className={`w-3.5 h-3.5 ${card.color} transition-transform group-hover/cta:translate-x-1.5`} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </GsapScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
        
      </section>

      {/* 02 — PLATFORM ARCHITECTURE & PRINCIPLE */}
      <section className="pt-24 pb-12 relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="flex flex-col h-full space-y-6">
                <EditorialLine>
                  <div className="font-mono text-xs uppercase tracking-widest text-cyan-600">
                    Platform Principle
                  </div>
                </EditorialLine>
                <EditorialLine delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight uppercase">
                    The Cloud Orchestrates. <span className="gradient-text">The Edge Executes.</span>
                  </h2>
                </EditorialLine>
                <EditorialLine delay={0.2}>
                  <p className="text-base text-zinc-600 leading-relaxed pt-2">
                    Centralized systems define configurations, rules and operational requirements. The vehicle-side edge environment executes supported functions locally.
                  </p>
                </EditorialLine>
                <div className="flex-1 flex flex-col pt-4">
                  <GsapScrollReveal delay={0.3} className="h-full">
                    <div 
                      className="p-7 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-indigo-400/50 space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] hover:-translate-y-1 transition-all duration-500 group h-full flex flex-col justify-center relative overflow-hidden"
                      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs uppercase tracking-wider group-hover:text-indigo-700 transition-colors">
                        <FiCpu size={16} /> Connected Vehicle
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900">The Physical Mobility Layer</h3>
                      <p className="text-sm text-zinc-600">
                        Connects <span className="text-cyan-600 font-medium">Compute + Screens + GPS + Sensors + Network</span> into one technology environment.
                      </p>
                    </div>
                  </GsapScrollReveal>
                </div>
              </div>


            </div>

            <div className="lg:col-span-6 space-y-6">
              <GsapScrollReveal delay={0.2}>
                <div 
                  className="p-7 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-cyan-400/50 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
                  style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider group-hover:text-cyan-700 transition-colors">
                    <FiCloud size={16} /> Cloud Control
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">Centralized Visibility and Orchestration</h3>
                  <p className="text-sm text-zinc-600">
                    The cloud/control layer is the environment responsible for these distributed mobility assets and operational functions:
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-2 text-xs font-mono text-zinc-800">
                    {cloudItems.map((item, i) => (
                      <span key={i} className="px-2.5 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm border border-zinc-200/70 text-center hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 transition-colors cursor-default shadow-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapScrollReveal>


            </div>
          </div>
        </div>
        
      </section>

      {/* 03 — VMOVEXA ONE (CENTRALIZED CONTROL LAYER) */}
      <section id="vmovexa-one" className="pt-12 pb-24 relative bg-black">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
                Centralized Control Layer
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-4 ">
                Command Mobility With <span className="gradient-text">VMOVEXA ONE.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base text-white/70 leading-relaxed">
                The centralized control layer for connected mobility. VMOVEXA ONE brings distributed mobility infrastructure into one software environment. From fleets and vehicles to screens, devices, routes and digital media — the platform provides centralized visibility and orchestration.
              </p>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">
            {/* Fleet Control Hierarchy */}
            <GsapScrollReveal>
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-5 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform">
                    <RiBusLine size={22} />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-white/50 mb-1">Fleet Control</div>
                  <h3 className="text-xl font-semibold text-white">See The Network. Not Just The Vehicle.</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed relative z-10">
                  A modern fleet can contain hundreds or thousands of connected devices. VMOVEXA ONE provides a structured way to represent and manage that distributed infrastructure:
                </p>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/90 overflow-x-auto relative z-10">
                  <span className="font-semibold text-white cursor-default">Organization</span>
                  <span className="text-cyan-400 font-bold">↓</span>
                  <span className="font-semibold text-white cursor-default">Fleet</span>
                  <span className="text-cyan-400 font-bold">↓</span>
                  <span className="font-semibold text-white cursor-default">Vehicle</span>
                  <span className="text-cyan-400 font-bold">↓</span>
                  <span className="font-semibold text-white cursor-default">Device</span>
                  <span className="text-cyan-400 font-bold">↓</span>
                  <span className="font-semibold text-white cursor-default">Screen</span>
                </div>

                <div className="pt-4 border-t border-white/10 relative z-10">
                  <h4 className="text-xs font-mono  tracking-widest text-cyan-400 mb-3">Vehicle Visibility — Know What Is Connected</h4>
                  <div className="grid grid-cols-2 gap-2.5 text-xs text-white/80">
                    {visibilityStates.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 group/item cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="group-hover/item:text-white transition-colors">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GsapScrollReveal>

            {/* Campaign & Geo Intelligence */}
            <div className="space-y-6">
              <GsapScrollReveal delay={0.2}>
                <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3.5 hover:border-white/20 transition-colors">
                  <div className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold mb-1">Campaign Orchestration</div>
                  <h3 className="text-lg font-semibold text-white">From Creative To Screen</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    A digital campaign can be structured around:
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] font-mono text-white/80 leading-relaxed">
                    Creative <span className="text-pink-400 font-bold">→</span> City <span className="text-pink-400 font-bold">→</span> Route <span className="text-pink-400 font-bold">→</span> Vehicle <span className="text-pink-400 font-bold">→</span> Screen <span className="text-pink-400 font-bold">→</span> Date <span className="text-pink-400 font-bold">→</span> Time <span className="text-pink-400 font-bold">→</span> Geographic context <span className="text-pink-400 font-bold">→</span> Distribution
                  </div>
                  <p className="text-[11px] text-white/50 font-mono">
                    Includes campaign creation, audience targeting, geographic scheduling, proof of play, and real-time measurement.
                  </p>
                </div>
              </GsapScrollReveal>

              <GsapScrollReveal delay={0.3}>
                <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3.5 hover:border-white/20 transition-colors">
                  <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">Geo Intelligence</div>
                  <h3 className="text-lg font-semibold text-white">Location Becomes Logic</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    A geographic zone can become more than a coordinate. It can become a programmable context:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {geoZones.map((z, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-default shadow-sm flex items-center gap-1.5 text-[11px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {z}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapScrollReveal>
            </div>
          </div>

          {/* VMOVEXA ONE Dashboard Video Demo (Loop with unmute, no pause) */}
          <GsapScrollReveal delay={0.4}>
             <div className="relative group overflow-hidden rounded-[2.5rem] bg-black shadow-2xl border border-white/10">
              <MediaSlot
                theme="dark"
                fade="none"
                type="video"
                src="/videos/big.MOV"
                badge="VMOVEXA ONE Dashboard Demo"
                caption="Interactive Fleet Operations Map & Centralized Device Control Stream"
                aspectRatio="21/9"
                allowPause={false}
                hudOverlay={true}
              />
            </div>
          </GsapScrollReveal>
        </div>

      </section>

      {/* 04 — VMOVEXA CORE (VEHICLE EDGE RUNTIME) */}
      <section id="vmovexa-core" className="py-24 relative overflow-hidden bg-white text-zinc-900">
        <GridWaveBackground variant="indigo" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-14">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-600 mb-3">
                In-Vehicle Edge Computing
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight mb-4 ">
                The intelligence inside <span className="gradient-text">the vehicle.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base text-zinc-600 leading-relaxed font-light">
                VMOVEXA CORE is the vehicle-side edge platform connecting cloud infrastructure with physical mobility systems. It is designed not simply as a media player, but as a computing and execution layer for connected vehicles.
              </p>
            </EditorialLine>
            <EditorialLine delay={0.3}>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono text-indigo-800 font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                Compute Where Motion Happens • Networks × Geographies × Routes × Operating Conditions
              </div>
            </EditorialLine>
          </div>

          {/* 10 CORE Engines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-14">
            {coreEngines.map((engine, i) => (
              <GsapScrollReveal key={engine.title} delay={i * 0.04}>
                <div 
                  className="p-4.5 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 hover:border-indigo-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group cursor-default shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden"
                  style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-2.5 group-hover:text-indigo-600 transition-colors font-medium">Engine {String(i + 1).padStart(2, "0")}</span>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 mb-1.5 group-hover:text-indigo-600 transition-colors">{engine.title}</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed group-hover:text-zinc-800 transition-colors font-light">{engine.desc}</p>
                  </div>
                </div>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Multi-Screen & Offline Resilience Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <GsapScrollReveal delay={0.2}>
              <div 
                className="p-7 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 h-full flex flex-col justify-between hover:border-cyan-400 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
                style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-widest font-semibold mb-3">
                    <FiMonitor size={17} className="text-cyan-600" /> Multi-Screen Intelligence
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2.5">One Vehicle. Multiple Digital Surfaces.</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 font-light">
                    A vehicle can contain multiple connected displays. VMOVEXA&apos;s architecture supports independent, mirrored, synchronized, split and multi-zone display operation.
                  </p>
                  <p className="text-xs font-mono text-zinc-700 bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-zinc-200/70 shadow-xs">
                    This creates a distributed digital environment inside a single mobility asset.
                  </p>
                </div>
              </div>
            </GsapScrollReveal>

            <GsapScrollReveal delay={0.3}>
              <div 
                className="p-7 rounded-2xl bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border border-zinc-200/70 h-full flex flex-col justify-between hover:border-indigo-400 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
                style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs uppercase tracking-widest font-semibold mb-3">
                    <FiWifiOff size={17} className="text-indigo-600" /> Offline Resilience
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2.5">Connectivity Can Disappear. The System Shouldn&apos;t.</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 font-light">
                    Vehicle connectivity is not guaranteed everywhere. VMOVEXA CORE is designed around local caching and synchronization.
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-zinc-200/70 font-mono text-xs flex flex-wrap items-center justify-between gap-2 shadow-xs">
                    <span className="px-2.5 py-1 bg-white/80 border border-zinc-200 text-zinc-800 font-medium rounded-lg shadow-xs">Cloud</span>
                    <span className="text-indigo-600 font-bold text-sm">→</span>
                    <span className="px-2.5 py-1 bg-white/80 border border-zinc-200 text-zinc-800 font-medium rounded-lg shadow-xs">Local Edge</span>
                    <span className="text-indigo-600 font-bold text-sm">→</span>
                    <span className="px-2.5 py-1 bg-white/80 border border-zinc-200 text-zinc-800 font-medium rounded-lg shadow-xs">Cached Op</span>
                    <span className="text-indigo-600 font-bold text-sm">→</span>
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium rounded-lg flex items-center gap-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                      Sync
                    </span>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>
          </div>
        </div>
      </section>

      {/* Full View of CORE Edge Device Mockup - Now with Black Background */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-black">
        <div className="container max-w-[1400px] mx-auto px-6 relative z-10">
          <GsapScrollReveal delay={0.4}>
             <div className="relative group overflow-hidden rounded-[2.5rem] bg-transparent shadow-2xl">
              <MediaSlot
                theme="dark"
                fade="none"
                parallax={false}
                type="image"
                src="/images/1784434406438-731883811.png"
                alt="VMOVEXA CORE In-Vehicle Edge Device Mockup"
                badge="Hardware & Edge Environment • VMOVEXA CORE"
                caption="In-Vehicle Edge Computing Runtime • Telemetry, Multi-Screen & Geo Synchronization"
                aspectRatio="3/2"
                objectFit="contain"
                scanline={true}
                curtainReveal={true}
              />
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
        <GridWaveBackground variant="cyan" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 text-zinc-900 ">
              Ready To Connect <span className="gradient-text">The Moving Edge?</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={0.3}>
                <Link
                  href="/technology"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black text-white font-semibold text-xs tracking-wider uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:bg-zinc-800"
                >
                  <span>Explore Technology</span>
                  <FiArrowRight size={15} className="text-white" />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-900 font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm"
                >
                  <span>Connect With Us</span>
                  <FiArrowUpRight size={15} className="text-zinc-900" />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>
        </div>
        
      </section>
    </main>
  );
}
