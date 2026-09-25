import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiBriefcase, FiShare2, FiCheckCircle } from "react-icons/fi";
import { RiBusLine, RiMegaphoneLine, RiBuilding4Line } from "react-icons/ri";
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { EmergencyBroadcasting } from "@/components/solutions/emergency-broadcasting";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { ImageCurtainReveal, FloatingElement } from "@/components/animations/image-reveal";
import { TiltCard } from "@/components/animations/tilt-card";

export const metadata: Metadata = {
  title: "VMOVEXA Mobility Solutions | Fleet, Media & Smart City Technology",
  description:
    "Explore VMOVEXA mobility solutions across Fleet Operators, Mobility Media, Smart Cities, Emergency Broadcasting, Enterprise Mobility, and Connected Infrastructure.",
  keywords: [
    "smart mobility solutions",
    "connected fleet technology",
    "fleet digital transformation",
    "mobility media solutions",
    "smart city mobility platform",
    "emergency broadcasting transit",
  ],
};

export default function SolutionsPage() {
  const smartCityApps = [
    "Emergency communication & public alerts",
    "Real-time traffic information & rerouting",
    "Public safety messaging & safe corridor advisories",
    "Transport schedule & transit disruption updates",
    "Civic information & municipal announcements",
    "Dynamic municipal & public service information",
  ];

  const enterpriseApps = [
    "Fleet operations & CAD/AVL telemetry",
    "Digital corporate communications",
    "Aggregated mobility data & analytics",
    "Connected interior passenger displays",
    "Location-aware route services",
    "Custom enterprise system integrations",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 04: SOLUTIONS) */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    <TextDecrypt text="Our Solutions" delay={0.1} />
                  </span>
                </div>
              </EditorialLine>

              <CubertoLines
                as="h1"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-6 text-white uppercase"
                delay={0.15}
                lines={[
                  "Technology that moves with",
                  <span key="sub" className="gradient-text">the world.</span>
                ]}
              />

              <BlurReveal delay={0.25}>
                <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-3xl mb-8">
                  VMOVEXA enables connected mobility solutions for fleets, brands, cities and enterprises — built for real-world impact.
                </p>
              </BlurReveal>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 04) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <FloatingElement y={6} duration={3.7}><span className="hover:text-cyan-400 transition-colors cursor-default">FLEETS</span></FloatingElement>
              <FloatingElement y={8} duration={4.3}><span className="hover:text-cyan-400 transition-colors cursor-default">BRANDS</span></FloatingElement>
              <FloatingElement y={6} duration={3.9}><span className="hover:text-cyan-400 transition-colors cursor-default">CITIES</span></FloatingElement>
              <FloatingElement y={7} duration={4.6}><span className="hover:text-cyan-400 transition-colors cursor-default">ENTERPRISES</span></FloatingElement>
            </div>
          </div>

          {/* 2x2 Visual Cards Grid from Mockup Screen 04 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: "Fleet Operators",
                desc: "Digitalize your fleet with a connected infrastructure.",
                img: "/images/solution-fleet-operators.png",
                href: "#fleet-operators",
              },
              {
                title: "Mobility Media",
                desc: "Turn moving screens into measurable digital inventory.",
                img: "/images/solution-mobility-media.png",
                href: "#mobility-media",
              },
              {
                title: "Smart Cities",
                desc: "Let the city communicate through mobility.",
                img: "/images/solution-smart-cities.png",
                href: "#smart-cities",
              },
              {
                title: "Enterprise Mobility",
                desc: "Connect people, places and operations.",
                img: "/images/solution-enterprise-mobility.png",
                href: "#enterprise-mobility",
              },
            ].map((card, i) => (
              <GsapScrollReveal key={card.title} delay={i * 0.1}>
                <TiltCard maxTilt={5} className="h-full">
                  <MagneticElement strength={0.03} className="w-full h-full block">
                    <Link
                      href={card.href}
                      className="group block relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]"
                    >
                      {/* Card Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                        style={{ backgroundImage: `url('${card.img}')` }}
                      />
                      {/* Clean subtle bottom scrim gradient for title legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-10" />

                      {/* Interactive overlay glow */}
                      <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none mix-blend-overlay z-10" />

                      {/* Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-semibold !text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                              {card.title}
                            </h3>
                            <p className="text-xs sm:text-sm !text-white/80 mt-1 max-w-sm group-hover:!text-white transition-colors duration-300">{card.desc}</p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center !text-white group-hover:bg-white group-hover:!text-black group-hover:scale-110 transition-all duration-300 shrink-0 shadow-md">
                            <FiArrowRight className="w-4 h-4 !text-white group-hover:!text-black" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </MagneticElement>
                </TiltCard>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Bottom Bar: WHAT WILL YOU BUILD ON THE MOVING EDGE? + Talk to VMOVEXA -> */}
          <GsapScrollReveal delay={0.4}>
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-md">
              <div className="font-mono text-sm sm:text-base tracking-wider text-zinc-800 font-bold text-center sm:text-left">
                What will you build on the moving edge?
              </div>
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:bg-zinc-800"
                >
                  <span className="text-white font-semibold">Talk to VMOVEXA</span>
                  <FiArrowRight size={16} className="text-white" />
                </Link>
              </MagneticElement>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* SOLUTION 01 — FLEET OPERATORS */}
      <section id="fleet-operators" className="py-20 border-b border-zinc-200 relative overflow-hidden bg-white">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <EditorialLine>
                <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider">
                  <RiBusLine size={17} /> Solution 01
                </div>
              </EditorialLine>
              <EditorialLine delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-tight uppercase">
                  Digitalize the <span className="gradient-text">fleet.</span>
                </h2>
              </EditorialLine>
              <EditorialLine delay={0.2}>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Connect vehicles, displays, edge computing, positioning, telemetry and centralized management through a common architecture.
                </p>
              </EditorialLine>
              <EditorialLine delay={0.3}>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Transform raw mechanical fleets into software-defined, connected networks with full operational observability.
                </p>
              </EditorialLine>
              <EditorialLine delay={0.4}>
                <div className="pt-2">
                  <MagneticElement strength={0.2}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform shadow-md hover:bg-zinc-800"
                    >
                      <span>Explore Fleet Technology</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            <div className="lg:col-span-6">
              <GsapScrollReveal delay={0.2}>
                <div className="relative group">
                  <MediaSlot
                    type="image"
                    src="/images/vmovexa-smart-bus-night.png"
                    alt="VMOVEXA Fleet Digitalization"
                    badge="Fleet Infrastructure • Connected Nodes"
                    caption="Real-Time Telemetry & Multi-Screen Fleet Management"
                    aspectRatio="16/9"
                  />
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 02 — MOBILITY MEDIA */}
      <section id="mobility-media" className="py-20 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-5">
              <EditorialLine>
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider">
                  <RiMegaphoneLine size={17} /> Solution 02
                </div>
              </EditorialLine>
              <EditorialLine delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight uppercase">
                  Turn moving screens into <span className="gradient-text">digital inventory.</span>
                </h2>
              </EditorialLine>
              <EditorialLine delay={0.2}>
                <p className="text-base text-white/70 leading-relaxed">
                  Transform vehicle displays into centrally managed, location-aware digital media infrastructure.
                </p>
              </EditorialLine>
              <EditorialLine delay={0.3}>
                <p className="text-xs text-white/50 leading-relaxed font-mono">
                  Move beyond static posters. Program dynamic campaigns triggered by geographic zones, time of day, passenger demographics, and road routes with verifiable proof-of-play.
                </p>
              </EditorialLine>
              <EditorialLine delay={0.4}>
                <div className="pt-2">
                  <MagneticElement strength={0.2}>
                    <Link
                      href="/media"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(255,255,255,0.1)] hover:bg-zinc-200"
                    >
                      <span>Explore Mobility Media</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            <div className="lg:col-span-6 lg:order-1 space-y-3">
              <GsapScrollReveal delay={0.2}>
                <div className="relative group">
                  <MediaSlot
                    type="video"
                    src="/videos/vmovexa-transit-demo.mp4"
                    poster="/images/VMOVEXA FOLDER DESIGN MOCKUP.PNG"
                    aspectRatio="16/9"
                    hideBadge
                  />
                </div>
              </GsapScrollReveal>

              {/* Separated & Compact Metadata displayed on the left side */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 px-1 border-t border-white/[0.08]">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-mono uppercase tracking-wider w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  Transit DOOH • Moving Inventory
                </div>
                <div className="text-[11px] sm:text-xs text-white/50 font-mono tracking-tight">
                  Location-Triggered Media Execution with Low-Latency Synchronization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 03 — SMART CITIES */}
      <section id="smart-cities" className="py-20 border-b border-zinc-200 relative overflow-hidden bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Smart Cities Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <EditorialLine>
                <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs uppercase tracking-wider font-semibold">
                  <RiBuilding4Line size={17} /> Solution 03
                </div>
              </EditorialLine>
              <EditorialLine delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-zinc-900 leading-tight uppercase">
                  Let the city communicate through <span className="gradient-text font-bold">mobility.</span>
                </h2>
              </EditorialLine>
              <EditorialLine delay={0.2}>
                <p className="text-base text-zinc-600 leading-relaxed font-normal">
                  Connected vehicles become distributed information endpoints across urban environments, linking government agencies with moving citizen channels.
                </p>
              </EditorialLine>
              <EditorialLine delay={0.3}>
                <p className="text-xs text-zinc-600 font-mono p-4 rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm leading-relaxed">
                  <span className="text-cyan-700 font-semibold block mb-1">Key Stakeholders:</span>
                  Municipalities, smart cities, transport departments, disaster-management authorities and tourism departments.
                </p>
              </EditorialLine>
            </div>

            <div className="lg:col-span-6">
              <GsapScrollReveal delay={0.2}>
                <div className="p-7 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3.5 hover:border-indigo-400 hover:bg-zinc-100/50 transition-all duration-500 group relative overflow-hidden shadow-sm">
                  <div className="relative z-10">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-semibold mb-4">Civic & Urban Applications</h4>
                    <div className="space-y-3">
                      {smartCityApps.map((app, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 group/item cursor-default">
                          <FiCheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 group-hover/item:scale-125 group-hover/item:text-cyan-600 transition-all" />
                          <span className="group-hover/item:text-zinc-900 font-medium transition-colors">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GsapScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY OPERATIONS & BROADCASTING COMPONENT */}
      <section id="emergency-operations" className="py-20 border-b border-white/[0.08] bg-black">
        <div className="container max-w-6xl mx-auto px-6">
          <GsapScrollReveal delay={0.2}>
            <EmergencyBroadcasting />
          </GsapScrollReveal>
        </div>
      </section>

      {/* SOLUTION 04 & 05 — ENTERPRISE MOBILITY & CONNECTED INFRASTRUCTURE */}
      <section id="enterprise-mobility" className="py-20 border-b border-white/[0.08] bg-black">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enterprise Mobility */}
            <GsapScrollReveal>
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 h-full flex flex-col justify-between space-y-5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 group relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2.5">
                    <FiBriefcase size={16} /> Solution 04
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-3 text-white uppercase">
                    Connect the Enterprise to <span className="gradient-text">the Moving World.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
                    Create technology infrastructure that connects enterprise operations with physical mobility. Applications span:
                  </p>
                  <div className="space-y-2.5">
                    {enterpriseApps.map((ea, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-white/75 font-mono group/item">
                        <span className="text-cyan-400 group-hover/item:translate-x-1 transition-transform">→</span>
                        <span className="group-hover/item:text-white transition-colors">{ea}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GsapScrollReveal>

            {/* Connected Infrastructure */}
            <GsapScrollReveal delay={0.2}>
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 h-full flex flex-col justify-between space-y-5 hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-500 group relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2.5">
                    <FiShare2 size={16} /> Solution 05
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-3 text-white uppercase">
                    The Vehicle as a <span className="gradient-text">Digital Endpoint.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
                    VMOVEXA creates an architecture where physical mobility assets can become software-addressable infrastructure.
                  </p>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 space-y-2 group-hover:bg-indigo-950/20 transition-colors">
                    <div className="text-white font-semibold flex items-center gap-2">
                      Physical Asset <FiArrowRight className="text-indigo-400" /> Software Node
                    </div>
                    <div className="text-white/60 leading-relaxed pt-1 text-[11px]">
                      Transform every rolling chassis into an IP-addressable, telemetry-emitting, content-rendering digital participant in the smart grid.
                    </div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden bg-white border-t border-zinc-100">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-white to-white pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 mb-3">Deployment & Implementation</div>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-zinc-900 uppercase">
              What Will You Build on <span className="gradient-text">the Moving Edge?</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:bg-zinc-800"
                >
                  <span>Talk to VMOVEXA</span>
                  <FiArrowRight size={15} />
                </Link>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-zinc-200 hover:border-zinc-300"
                >
                  <span>Explore Industries</span>
                  <FiArrowUpRight size={15} />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>
        </div>
      </section>
    </main>
  );
}
