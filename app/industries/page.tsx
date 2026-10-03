import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowUpRight, FiCompass, FiUsers, FiZap, FiShield } from "react-icons/fi";
import { RiBusLine, RiFlightTakeoffLine, RiBuilding4Line, RiGovernmentLine, RiTruckLine, RiToolsLine } from "react-icons/ri";
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { ImageCurtainReveal, FloatingElement } from "@/components/animations/image-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { GridWaveBackground } from "@/components/visuals/grid-wave-background";
import { 
  PublicTransportIllustration,
  PrivateFleetsIllustration,
  AirportMobilityIllustration,
  EmployeeTransportIllustration,
  SchoolTransportIllustration,
  TourismMobilityIllustration,
  ElectricMobilityIllustration,
  LogisticsCargoIllustration
} from "@/components/visuals/industry-illustrations";
export const metadata: Metadata = {
  title: "VMOVEXA Industries | Connected Mobility Across Sectors",
  description:
    "Explore how VMOVEXA mobility intelligence deploys across 9 operational sectors: Public Transport, Private Fleets, Airport Mobility, Corporate Shuttles, EV Fleets, and Smart Cities.",
  keywords: [
    "connected transportation technology",
    "smart transportation technology",
    "connected public transport",
    "urban mobility technology",
    "intelligent transportation infrastructure",
  ],
};

export default function IndustriesPage() {
  const sectors = [
    {
      title: "Public Transportation",
      desc: "Modern connected fleets & automated passenger telemetry.",
      icon: RiBusLine,
      color: "text-blue-500",
      badgeBg: "bg-blue-50 border-blue-200/80 shadow-sm",
    },
    {
      title: "Government",
      desc: "Citizen communication network & civic alert broadcasts.",
      icon: RiGovernmentLine,
      color: "text-indigo-600",
      badgeBg: "bg-indigo-50 border-indigo-200/80 shadow-sm",
    },
    {
      title: "Smart Cities",
      desc: "Digital urban infrastructure & spatial intelligence.",
      icon: RiBuilding4Line,
      color: "text-cyan-500",
      badgeBg: "bg-cyan-50 border-cyan-200/80 shadow-sm",
    },
    {
      title: "Tourism",
      desc: "Dynamic cultural discovery & location-aware guides.",
      icon: FiCompass,
      color: "text-purple-600",
      badgeBg: "bg-purple-50 border-purple-200/80 shadow-sm",
    },
    {
      title: "Retail",
      desc: "Contextual location-based advertising & verified footfall.",
      icon: FiZap,
      color: "text-pink-500",
      badgeBg: "bg-pink-50 border-pink-200/80 shadow-sm",
    },
    {
      title: "Education",
      desc: "Institution transit, student safety & campus mobility.",
      icon: FiUsers,
      color: "text-blue-600",
      badgeBg: "bg-blue-50 border-blue-200/80 shadow-sm",
    },
    {
      title: "Healthcare",
      desc: "Emergency corridor priority & health awareness relays.",
      icon: FiShield,
      color: "text-cyan-600",
      badgeBg: "bg-cyan-50 border-cyan-200/80 shadow-sm",
    },
    {
      title: "Airports",
      desc: "Airside ground fleet orchestration & gate synchronization.",
      icon: RiFlightTakeoffLine,
      color: "text-purple-600",
      badgeBg: "bg-purple-50 border-purple-200/80 shadow-sm",
    },
    {
      title: "Enterprise Brands",
      desc: "National brand campaigns & moving digital inventory.",
      icon: RiTruckLine,
      color: "text-pink-600",
      badgeBg: "bg-pink-50 border-pink-200/80 shadow-sm",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 05: INDUSTRIES) */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    <TextDecrypt text="Industries" delay={0.1} />
                  </span>
                </div>
              </EditorialLine>

              <CubertoLines
                as="h1"
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[0.98] sm:leading-[1.02] max-w-4xl mb-6 text-white"
                delay={0.15}
                lines={[
                  "One Technology.",
                  <span key="sub1" className="gradient-text">Many Mobility</span>,
                  <span key="sub2" className="gradient-text">Environments.</span>
                ]}
              />

              <BlurReveal delay={0.25}>
                <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-2xl mb-8">
                  VMOVEXA is designed for diverse mobility ecosystems — from public transport to airport mobility, from tourism to logistics.
                </p>
              </BlurReveal>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 05) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <FloatingElement y={6} duration={3.5}><span className="hover:text-cyan-400 transition-colors cursor-default">PUBLIC</span></FloatingElement>
              <FloatingElement y={8} duration={4.2}><span className="hover:text-cyan-400 transition-colors cursor-default">PRIVATE</span></FloatingElement>
              <FloatingElement y={6} duration={3.8}><span className="hover:text-cyan-400 transition-colors cursor-default">URBAN</span></FloatingElement>
              <FloatingElement y={7} duration={4.5}><span className="hover:text-cyan-400 transition-colors cursor-default">GLOBAL</span></FloatingElement>
            </div>
          </div>

          {/* 8 Industry Visual Cards Grid with Technical Illustrations (2 rows x 4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                title: "Public Transport",
                illustration: <PublicTransportIllustration />,
                id: "public-transport",
                tag: "TRANSIT NETWORK",
              },
              {
                title: "Private Fleets",
                illustration: <PrivateFleetsIllustration />,
                id: "private-fleets",
                tag: "COMMERCIAL FLEET",
              },
              {
                title: "Airport Mobility",
                illustration: <AirportMobilityIllustration />,
                id: "airport-mobility",
                tag: "CAMPUS & TARMAC",
              },
              {
                title: "Employee Transport",
                illustration: <EmployeeTransportIllustration />,
                id: "employee-transport",
                tag: "CORPORATE SHUTTLE",
              },
              {
                title: "School Transport",
                illustration: <SchoolTransportIllustration />,
                id: "school-transport",
                tag: "SAFETY GEOFENCE",
              },
              {
                title: "Tourism Mobility",
                illustration: <TourismMobilityIllustration />,
                id: "tourism",
                tag: "CULTURAL DISCOVERY",
              },
              {
                title: "Electric Mobility",
                illustration: <ElectricMobilityIllustration />,
                id: "electric-mobility",
                tag: "EV TELEMETRY",
              },
              {
                title: "Logistics & Cargo",
                illustration: <LogisticsCargoIllustration />,
                id: "logistics",
                tag: "FREIGHT MESH",
              },
            ].map((ind, i) => (
              <GsapScrollReveal key={ind.title} delay={i * 0.05} className="h-full flex flex-col">
                <TiltCard maxTilt={5} className="h-full">
                  <MagneticElement strength={0.03} className="w-full h-full block">
                    <Link
                      href={`#${ind.id}`}
                      className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] bg-[#0c0d14] transition-all duration-300 shadow-lg h-full flex flex-col justify-between relative"
                    >
                      {/* Technical Illustration Vector Canvas */}
                      {ind.illustration}

                      {/* Content Bottom Bar */}
                      <div className="px-5 py-3.5 flex items-center justify-between relative z-20 bg-[#0c0d14] border-t border-white/[0.06]">
                        <div>
                          <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-0.5 group-hover:text-cyan-400/80 transition-colors">
                            {ind.tag}
                          </div>
                          <h4 className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {ind.title}
                          </h4>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-black group-hover:scale-110 transition-all duration-300 shrink-0 shadow-md">
                          <FiArrowRight size={13} className="text-white group-hover:text-black transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </MagneticElement>
                </TiltCard>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Bottom Curved Earth Horizon Section (Mockup Screen 05) */}
          <GsapScrollReveal delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Earth Horizon Graphic Background with Vignette Fade */}
              <div
                className="absolute inset-0 bg-cover bg-bottom opacity-40 mix-blend-screen pointer-events-none"
                style={{ backgroundImage: `url('/images/vmovexa-earth-horizon.png')` }}
              />
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,1) 100%)",
                }}
              />

              <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="max-w-xl text-center sm:text-left">
                  <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan-300 font-medium leading-relaxed">
                    Wherever mobility moves, there is an opportunity for intelligence.
                  </div>
                </div>
                <MagneticElement strength={0.3}>
                  <Link
                    href="#sectors-detail"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white border border-white/30 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] shrink-0"
                  >
                    Explore All Industries <FiArrowRight size={16} />
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
        
      </section>

      {/* 02 — 9 SECTORS GRID (White Background with Interactive Mobility Mesh) */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-white text-zinc-900 border-t border-zinc-200">
        <style>{`
          @keyframes dashStreamLine {
            to { stroke-dashoffset: -32; }
          }
          .animate-dash-stream-line {
            animation: dashStreamLine 2s linear infinite;
          }
        `}</style>

        <GridWaveBackground variant="cyan" />
        
        {/* Dynamic Connected Mobility Network Background Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Ambient Radial Tints in Brand Colors */}
          <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-400/[0.05] blur-[100px]" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

          {/* Connected Vector Routes with Directional Shuttles & Particle Beams */}
          <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ind-route-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="ind-route-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
              </linearGradient>

              {/* Vector Smart Bus - Cyan Variant */}
              <g id="smart-bus-cyan">
                <rect x="-16" y="-8" width="32" height="16" rx="3" fill="#090e18" stroke="#06b6d4" strokeWidth="1.2" />
                <rect x="-6" y="-2.5" width="12" height="5" rx="1.5" fill="#06b6d4" fillOpacity="0.25" stroke="#06b6d4" strokeWidth="0.5" />
                <rect x="7" y="-6" width="6.5" height="12" rx="1.5" fill="#38bdf8" fillOpacity="0.9" />
                <rect x="-1" y="-6" width="6" height="12" rx="1" fill="#38bdf8" fillOpacity="0.45" />
                <rect x="-8.5" y="-6" width="6" height="12" rx="1" fill="#38bdf8" fillOpacity="0.45" />
                <rect x="-14.5" y="-5" width="3.5" height="10" rx="1" fill="#38bdf8" fillOpacity="0.3" />
                <circle cx="16" cy="-5.5" r="1.3" fill="#ffffff" />
                <circle cx="16" cy="5.5" r="1.3" fill="#ffffff" />
                <circle cx="-16" cy="-5.5" r="1.3" fill="#f43f5e" />
                <circle cx="-16" cy="5.5" r="1.3" fill="#f43f5e" />
              </g>

              {/* Vector Smart Bus - Purple Variant */}
              <g id="smart-bus-purple">
                <rect x="-16" y="-8" width="32" height="16" rx="3" fill="#140b25" stroke="#a855f7" strokeWidth="1.2" />
                <rect x="-6" y="-2.5" width="12" height="5" rx="1.5" fill="#a855f7" fillOpacity="0.25" stroke="#a855f7" strokeWidth="0.5" />
                <rect x="7" y="-6" width="6.5" height="12" rx="1.5" fill="#c084fc" fillOpacity="0.9" />
                <rect x="-1" y="-6" width="6" height="12" rx="1" fill="#c084fc" fillOpacity="0.45" />
                <rect x="-8.5" y="-6" width="6" height="12" rx="1" fill="#c084fc" fillOpacity="0.45" />
                <rect x="-14.5" y="-5" width="3.5" height="10" rx="1" fill="#c084fc" fillOpacity="0.3" />
                <circle cx="16" cy="-5.5" r="1.3" fill="#ffffff" />
                <circle cx="16" cy="5.5" r="1.3" fill="#ffffff" />
                <circle cx="-16" cy="-5.5" r="1.3" fill="#f43f5e" />
                <circle cx="-16" cy="5.5" r="1.3" fill="#f43f5e" />
              </g>

              {/* Vector Smart Bus - Indigo Variant */}
              <g id="smart-bus-indigo">
                <rect x="-16" y="-8" width="32" height="16" rx="3" fill="#0d1127" stroke="#6366f1" strokeWidth="1.2" />
                <rect x="-6" y="-2.5" width="12" height="5" rx="1.5" fill="#6366f1" fillOpacity="0.25" stroke="#6366f1" strokeWidth="0.5" />
                <rect x="7" y="-6" width="6.5" height="12" rx="1.5" fill="#818cf8" fillOpacity="0.9" />
                <rect x="-1" y="-6" width="6" height="12" rx="1" fill="#818cf8" fillOpacity="0.45" />
                <rect x="-8.5" y="-6" width="6" height="12" rx="1" fill="#818cf8" fillOpacity="0.45" />
                <rect x="-14.5" y="-5" width="3.5" height="10" rx="1" fill="#818cf8" fillOpacity="0.3" />
                <circle cx="16" cy="-5.5" r="1.3" fill="#ffffff" />
                <circle cx="16" cy="5.5" r="1.3" fill="#ffffff" />
                <circle cx="-16" cy="-5.5" r="1.3" fill="#f43f5e" />
                <circle cx="-16" cy="5.5" r="1.3" fill="#f43f5e" />
              </g>
            </defs>

            {/* Highway Routes with Active Animated Dashes */}
            <path id="ind-path-1" d="M-100,180 C300,320 600,60 1000,180 C1300,280 1500,120 1600,160" fill="none" stroke="url(#ind-route-grad-1)" strokeWidth="1.8" strokeDasharray="6 6" className="animate-dash-stream-line" />
            <path id="ind-path-2" d="M-100,420 C250,580 650,240 1050,420 C1350,540 1500,300 1600,340" fill="none" stroke="url(#ind-route-grad-2)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-dash-stream-line" />
            <path id="ind-path-3" d="M-100,640 C350,780 700,440 1100,600 C1400,720 1500,500 1600,540" fill="none" stroke="url(#ind-route-grad-1)" strokeWidth="1.5" />
            <path id="ind-path-4" d="M-100,820 C300,960 800,620 1200,760 C1500,900 1550,700 1600,720" fill="none" stroke="url(#ind-route-grad-2)" strokeWidth="1.8" strokeDasharray="8 8" className="animate-dash-stream-line" />

            {/* Active Moving Smart Buses Cruising along Routes (Zero Bubbles) */}
            <use href="#smart-bus-cyan">
              <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" path="M-100,180 C300,320 600,60 1000,180 C1300,280 1500,120 1600,160" />
            </use>
            <use href="#smart-bus-purple">
              <animateMotion dur="22s" begin="11s" repeatCount="indefinite" rotate="auto" path="M-100,180 C300,320 600,60 1000,180 C1300,280 1500,120 1600,160" />
            </use>

            <use href="#smart-bus-indigo">
              <animateMotion dur="26s" begin="3s" repeatCount="indefinite" rotate="auto" path="M-100,420 C250,580 650,240 1050,420 C1350,540 1500,300 1600,340" />
            </use>
            <use href="#smart-bus-cyan">
              <animateMotion dur="26s" begin="16s" repeatCount="indefinite" rotate="auto" path="M-100,420 C250,580 650,240 1050,420 C1350,540 1500,300 1600,340" />
            </use>

            <use href="#smart-bus-purple">
              <animateMotion dur="28s" begin="4s" repeatCount="indefinite" rotate="auto" path="M-100,640 C350,780 700,440 1100,600 C1400,720 1500,500 1600,540" />
            </use>
            <use href="#smart-bus-indigo">
              <animateMotion dur="30s" begin="8s" repeatCount="indefinite" rotate="auto" path="M-100,820 C300,960 800,620 1200,760 C1500,900 1550,700 1600,720" />
            </use>
          </svg>
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-10 text-center md:text-left">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50/90 border border-cyan-200 text-cyan-800 font-mono text-xs tracking-wider mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse" />
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em]">Industry Sectors</span>
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-950 uppercase">
                Powering <br />
                <span className="gradient-text">
                  Every Industry Everywhere
                </span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-normal">
                Empowering industries with intelligent mobility, targeted communication, digital engagement, and scalable advertising across connected ecosystems.
              </p>
            </EditorialLine>
          </div>

          {/* Compact, Sleek 3x3 Grid with Balanced Proportions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {sectors.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <GsapScrollReveal key={sec.title} delay={idx * 0.04} className="h-full flex flex-col">
                  <MagneticElement strength={0.03} className="h-full block">
                    <div 
                      className="p-5 sm:p-5.5 rounded-2xl bg-white/90 hover:bg-white backdrop-blur-md border border-zinc-200/80 hover:border-purple-300/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group overflow-hidden relative cursor-default"
                    >
                      <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Top Row: Number & Icon */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className={`w-9 h-9 rounded-xl border ${sec.badgeBg} flex items-center justify-center ${sec.color} group-hover:scale-110 transition-all duration-300`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Content: Title & Description with Tight, Balanced Hierarchy */}
                      <div>
                        <h3 className="text-[15px] sm:text-base font-bold text-zinc-900 mb-1 tracking-tight group-hover:text-indigo-600 transition-colors">
                          {sec.title}
                        </h3>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal group-hover:text-zinc-700 transition-colors">
                          {sec.desc}
                        </p>
                      </div>
                    </div>
                  </MagneticElement>
                </GsapScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">Architecture Deployment</div>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 text-white">
              Deploy Across Your <span className="gradient-text">Environment.</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Talk to VMOVEXA <FiArrowRight size={16} />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.06] border border-white/20 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 hover:border-white/30"
                >
                  Explore Platform <FiArrowUpRight size={16} />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>
        </div>
      </section>
    </main>
  );
}
