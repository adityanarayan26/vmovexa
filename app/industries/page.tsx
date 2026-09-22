import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiCompass, FiUsers, FiZap, FiShield } from "react-icons/fi";
import { RiBusLine, RiFlightTakeoffLine, RiBuilding4Line, RiGovernmentLine, RiTruckLine, RiToolsLine } from "react-icons/ri";
import { EditorialMaskText, EditorialLine } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";

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
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    Industries
                  </span>
                </div>
              </EditorialLine>

              <EditorialLine delay={0.15}>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mb-6 text-white">
                  One technology. Many mobility environments.
                </h1>
              </EditorialLine>

              <EditorialLine delay={0.3}>
                <p className="text-xl sm:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl mb-10">
                  VMOVEXA is designed for diverse mobility ecosystems — from public transport to airport mobility, from tourism to logistics.
                </p>
              </EditorialLine>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 05) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <span className="hover:text-cyan-400 transition-colors cursor-default">PUBLIC</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">PRIVATE</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">URBAN</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">GLOBAL</span>
            </div>
          </div>

          {/* 8 Industry Visual Cards Grid from Mockup Screen 05 (2 rows x 4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                title: "Public Transport",
                desc: "Connected & efficient",
                img: "/images/vmovexa-fleet-twilight.png",
                id: "public-transport",
              },
              {
                title: "Private Fleets",
                desc: "Operate smarter",
                img: "/images/industry-private-fleets.png",
                id: "private-fleets",
              },
              {
                title: "Airport Mobility",
                desc: "The moving extension",
                img: "/images/industry-airport-mobility.png",
                id: "airport-mobility",
              },
              {
                title: "Employee Transport",
                desc: "Safer. Smarter. Connected.",
                img: "/images/industry-employee-transport.png",
                id: "employee-transport",
              },
              {
                title: "School Transport",
                desc: "Safety with intelligence",
                img: "/images/industry-school-transport.png",
                id: "school-transport",
              },
              {
                title: "Tourism Mobility",
                desc: "Journeys that inform",
                img: "/images/industry-tourism-mobility.png",
                id: "tourism",
              },
              {
                title: "Electric Mobility",
                desc: "Ready for tomorrow",
                img: "/images/industry-electric-mobility.png",
                id: "electric-mobility",
              },
              {
                title: "Logistics & Cargo",
                desc: "Intelligence beyond people",
                img: "/images/industry-logistics-cargo.png",
                id: "logistics",
              },
            ].map((ind, i) => (
              <GsapScrollReveal key={ind.title} delay={i * 0.05}>
                <MagneticElement strength={0.03} className="w-full h-full block">
                  <Link
                    href={`#${ind.id}`}
                    className="group block rounded-2xl overflow-hidden border border-white/10 bg-black hover:border-cyan-500/40 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)] h-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <div className="relative h-44 w-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url('${ind.img}')` }}
                      />
                      {/* Clean subtle bottom gradient for seamless card blend */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
                    </div>
                    <div className="p-4 flex items-center justify-between relative z-20 bg-black">
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {ind.title}
                        </h4>
                        <p className="text-[11px] text-white/50 mt-0.5 group-hover:text-white/80 transition-colors duration-300">{ind.desc}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                        <FiArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </MagneticElement>
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
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
                Industry Sectors
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
                Where movement meets intelligence.
              </h2>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <GsapScrollReveal key={sec.title} delay={idx * 0.05}>
                  <MagneticElement strength={0.05}>
                    <div className="p-7 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:bg-white/[0.04] h-full flex flex-col justify-between group shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] overflow-hidden relative">
                       <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <span className="font-mono text-xs text-white/30 group-hover:text-white/50 transition-colors">{sec.num}</span>
                          <div className={`w-11 h-11 rounded-xl border ${sec.badgeBg} flex items-center justify-center ${sec.color} group-hover:scale-110 transition-all duration-500`}>
                             <IconComp className="w-5 h-5" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">{sec.title}</h3>
                        <p className="text-xs text-white/50 leading-relaxed font-normal group-hover:text-white/70 transition-colors">{sec.desc}</p>
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
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-8 text-white">
              Deploy across your environment.
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
