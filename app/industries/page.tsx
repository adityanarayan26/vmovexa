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
      desc: "Modern connected fleets.",
      icon: RiBusLine,
      color: "text-blue-400",
      badgeBg: "bg-blue-500/10 border-blue-500/25 shadow-[0_0_15px_rgba(59,130,246,0.18)]",
    },
    {
      title: "Government",
      desc: "Citizen communication network.",
      icon: RiGovernmentLine,
      color: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.18)]",
    },
    {
      title: "Smart Cities",
      desc: "Digital urban infrastructure.",
      icon: RiBuilding4Line,
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/25 shadow-[0_0_15px_rgba(6,182,212,0.18)]",
    },
    {
      title: "Tourism",
      desc: "Destination promotion.",
      icon: FiCompass,
      color: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.18)]",
    },
    {
      title: "Retail",
      desc: "Location-based advertising.",
      icon: FiZap,
      color: "text-pink-400",
      badgeBg: "bg-pink-500/10 border-pink-500/25 shadow-[0_0_15px_rgba(236,72,153,0.18)]",
    },
    {
      title: "Education",
      desc: "Institution communication.",
      icon: FiUsers,
      color: "text-sky-400",
      badgeBg: "bg-sky-500/10 border-sky-500/25 shadow-[0_0_15px_rgba(56,189,248,0.18)]",
    },
    {
      title: "Healthcare",
      desc: "Emergency awareness.",
      icon: FiShield,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.18)]",
    },
    {
      title: "Airports",
      desc: "Premium advertising platform.",
      icon: RiFlightTakeoffLine,
      color: "text-amber-400",
      badgeBg: "bg-amber-500/10 border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.18)]",
    },
    {
      title: "Enterprise Brands",
      desc: "National brand campaigns.",
      icon: RiTruckLine,
      color: "text-orange-400",
      badgeBg: "bg-orange-500/10 border-orange-500/25 shadow-[0_0_15px_rgba(249,115,22,0.18)]",
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
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] max-w-4xl mb-6 text-white"
                delay={0.15}
                lines={[
                  "ONE TECHNOLOGY.",
                  <span key="sub" className="gradient-text">MANY MOBILITY ENVIRONMENTS.</span>
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

          {/* 8 Industry Visual Cards Grid from Mockup Screen 05 (2 rows x 4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                title: "Public Transport",
                img: "/images/industry-public-transport.png",
                id: "public-transport",
              },
              {
                title: "Private Fleets",
                img: "/images/industry-private-fleets.png",
                id: "private-fleets",
              },
              {
                title: "Airport Mobility",
                img: "/images/industry-airport-mobility.png",
                id: "airport-mobility",
              },
              {
                title: "Employee Transport",
                img: "/images/industry-employee-transport.png",
                id: "employee-transport",
              },
              {
                title: "School Transport",
                img: "/images/industry-school-transport.png",
                id: "school-transport",
              },
              {
                title: "Tourism Mobility",
                img: "/images/industry-tourism-mobility.png",
                id: "tourism",
              },
              {
                title: "Electric Mobility",
                img: "/images/industry-electric-mobility.png",
                id: "electric-mobility",
                active: true,
              },
              {
                title: "Logistics & Cargo",
                img: "/images/industry-logistics-cargo.png",
                id: "logistics",
              },
            ].map((ind, i) => (
              <GsapScrollReveal key={ind.title} delay={i * 0.05} className="h-full flex flex-col">
                <TiltCard maxTilt={6} className="h-full">
                  <MagneticElement strength={0.03} className="w-full h-full block">
                    <Link
                      href={`#${ind.id}`}
                      className={`group block rounded-2xl overflow-hidden border ${
                        ind.active
                          ? "border-cyan-500/80 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                          : "border-white/10 hover:border-cyan-500/40"
                      } bg-[#0c0d12] transition-all duration-300 shadow-lg h-full flex flex-col justify-between relative`}
                    >
                      <ImageCurtainReveal delay={i * 0.05} direction="up" className="relative h-48 w-full bg-black/40">
                        <Image
                          src={ind.img}
                          alt={ind.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                      </ImageCurtainReveal>
                      <div className="px-5 py-4 flex items-center justify-between relative z-20 bg-[#0c0d12]">
                        <h4
                          className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                            ind.active ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
                          }`}
                        >
                          {ind.title}
                        </h4>
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-md">
                          <FiArrowRight size={13} className="text-black" />
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

      {/* 02 — 9 SECTORS GRID */}
      <section className="py-28 relative overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Subtle Technical Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
           
           {/* Abstract Glowing Orbs */}
           <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-cyan-400/[0.04] blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.03] blur-[120px]" />
           <div className="absolute top-[40%] right-[20%] w-[500px] h-[500px] rounded-full bg-rose-400/[0.03] blur-[100px]" />

           {/* Conceptual Mobility Routes with Animated Data Packets (Buses) */}
           <svg className="absolute top-0 w-full h-[150%] opacity-40 pointer-events-none" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="route-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="route-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                
                <g id="micro-bus">
                  {/* Micro Bus Icon centered and scaled up for visibility */}
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" transform="scale(1.4) translate(-12, -12)" filter="url(#glow)" />
                </g>
              </defs>

              {/* Glowing Paths */}
              <path d="M-100,200 C300,400 500,50 900,200 C1300,350 1500,100 1600,150" fill="none" stroke="url(#route-gradient-1)" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M-100,400 C200,600 600,200 1000,400 C1400,600 1500,300 1600,350" fill="none" stroke="url(#route-gradient-2)" strokeWidth="1.5" />
              <path d="M-100,600 C400,800 700,400 1100,600 C1500,800 1500,500 1600,550" fill="none" stroke="url(#route-gradient-1)" strokeWidth="1" />
              <path d="M-100,800 C300,1000 800,600 1200,800 C1600,1000 1500,700 1600,750" fill="none" stroke="url(#route-gradient-2)" strokeWidth="2" strokeDasharray="12 6" />

              {/* Connected Hubs (Data Nodes) */}
              <circle cx="200" cy="320" r="4" fill="#06b6d4" opacity="0.6" />
              <circle cx="500" cy="50" r="6" fill="#8b5cf6" opacity="0.6" />
              <circle cx="900" cy="200" r="5" fill="#ec4899" opacity="0.6" />
              <circle cx="1500" cy="100" r="4" fill="#06b6d4" opacity="0.6" />
              
              <circle cx="600" cy="200" r="4" fill="#ec4899" opacity="0.5" />
              <circle cx="1000" cy="400" r="5" fill="#06b6d4" opacity="0.5" />
              
              <circle cx="700" cy="400" r="4" fill="#8b5cf6" opacity="0.5" />
              <circle cx="1100" cy="600" r="6" fill="#ec4899" opacity="0.5" />

              {/* Animated Buses along Routes */}
              <use href="#micro-bus" fill="#06b6d4">
                <animateMotion dur="25s" repeatCount="indefinite" path="M-100,200 C300,400 500,50 900,200 C1300,350 1500,100 1600,150" />
              </use>
              <use href="#micro-bus" fill="#8b5cf6">
                <animateMotion dur="25s" begin="8s" repeatCount="indefinite" path="M-100,200 C300,400 500,50 900,200 C1300,350 1500,100 1600,150" />
              </use>
              
              <use href="#micro-bus" fill="#ec4899">
                <animateMotion dur="35s" begin="2s" repeatCount="indefinite" path="M-100,400 C200,600 600,200 1000,400 C1400,600 1500,300 1600,350" />
              </use>
              <use href="#micro-bus" fill="#0ea5e9">
                <animateMotion dur="35s" begin="15s" repeatCount="indefinite" path="M-100,400 C200,600 600,200 1000,400 C1400,600 1500,300 1600,350" />
              </use>

              <use href="#micro-bus" fill="#8b5cf6">
                <animateMotion dur="30s" begin="5s" repeatCount="indefinite" path="M-100,600 C400,800 700,400 1100,600 C1500,800 1500,500 1600,550" />
              </use>

              <use href="#micro-bus" fill="#06b6d4">
                <animateMotion dur="40s" begin="0s" repeatCount="indefinite" path="M-100,800 C300,1000 800,600 1200,800 C1600,1000 1500,700 1600,750" />
              </use>
           </svg>
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16 text-center md:text-left">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 mb-3">
                Industry Sectors
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-zinc-900">
                Powering <span className="gradient-text">Every Industry Everywhere</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl">
                Empowering industries with intelligent mobility, targeted communication, digital engagement, and scalable advertising across connected ecosystems.
              </p>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {sectors.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <GsapScrollReveal key={sec.title} delay={idx * 0.05} className="h-full flex flex-col">
                  <MagneticElement strength={0.05} className="h-full block">
                    <div className="min-h-[220px] p-7 rounded-2xl bg-white border border-zinc-200 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-500 hover:bg-zinc-50 h-full flex flex-col justify-between group shadow-sm overflow-hidden relative">
                       <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                          <div className={`w-11 h-11 rounded-xl border ${sec.badgeBg} flex items-center justify-center ${sec.color} group-hover:scale-110 transition-all duration-500`}>
                             <IconComp className="w-5 h-5" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-cyan-700 transition-colors">{sec.title}</h3>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal group-hover:text-zinc-700 transition-colors">{sec.desc}</p>
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
              Deploy across your <span className="gradient-text">environment.</span>
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
