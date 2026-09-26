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
      num: "01",
      title: "Public Transport",
      desc: "City bus fleets, urban transit networks, municipal mobility, and passenger information systems.",
      icon: RiBusLine,
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/25 shadow-[0_0_15px_rgba(6,182,212,0.18)]",
    },
    {
      num: "02",
      title: "Private Bus & Coach Fleets",
      desc: "Intercity fleets, private bus operators, interstate lines, and luxury coach networks.",
      icon: FiCompass,
      color: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.18)]",
    },
    {
      num: "03",
      title: "Airport Mobility",
      desc: "Airside operations, passenger apron shuttle networks, and terminal connected mobility infrastructure.",
      icon: RiFlightTakeoffLine,
      color: "text-sky-400",
      badgeBg: "bg-sky-500/10 border-sky-500/25 shadow-[0_0_15px_rgba(56,189,248,0.18)]",
    },
    {
      num: "04",
      title: "Employee & Corporate Shuttles",
      desc: "Enterprise transport, tech campus transit networks, and internal corporate communication media.",
      icon: FiUsers,
      color: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.18)]",
    },
    {
      num: "05",
      title: "Electric Vehicle Fleets",
      desc: "Electric bus networks, smart charging corridor integration, and next-generation battery telemetry.",
      icon: FiZap,
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.18)]",
    },
    {
      num: "06",
      title: "Smart City Transit Networks",
      desc: "Urban infrastructure, civic messaging, real-time traffic broadcast, and municipal transit integration.",
      icon: RiBuilding4Line,
      color: "text-blue-400",
      badgeBg: "bg-blue-500/10 border-blue-500/25 shadow-[0_0_15px_rgba(59,130,246,0.18)]",
    },
    {
      num: "07",
      title: "Tourism & Sightseeing Fleets",
      desc: "Destination routes, tourist transport, cultural zones, and dynamic visitor information networks.",
      icon: RiGovernmentLine,
      color: "text-amber-400",
      badgeBg: "bg-amber-500/10 border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.18)]",
    },
    {
      num: "08",
      title: "Logistics & Delivery Fleets",
      desc: "Commercial vehicles, urban delivery fleets, route telemetry, and distributed mobile computing nodes.",
      icon: RiTruckLine,
      color: "text-orange-400",
      badgeBg: "bg-orange-500/10 border-orange-500/25 shadow-[0_0_15px_rgba(249,115,22,0.18)]",
    },
    {
      num: "09",
      title: "Specialized Commercial Vehicles",
      desc: "Utility fleets, municipal sanitation, maintenance vehicles, and emergency transit operations support.",
      icon: FiShield,
      color: "text-pink-400",
      badgeBg: "bg-pink-500/10 border-pink-500/25 shadow-[0_0_15px_rgba(236,72,153,0.18)]",
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
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 mb-3">
                Industry Sectors
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-zinc-900">
                Where movement meets <span className="gradient-text">intelligence.</span>
              </h2>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <GsapScrollReveal key={sec.title} delay={idx * 0.05}>
                  <MagneticElement strength={0.05}>
                    <div className="p-7 rounded-2xl bg-white border border-zinc-200 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-500 hover:bg-zinc-50 h-full flex flex-col justify-between group shadow-sm overflow-hidden relative">
                       <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">{sec.num}</span>
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
