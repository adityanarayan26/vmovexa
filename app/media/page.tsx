import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiMonitor, FiMapPin, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal, ParallaxElement } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { FloatingElement } from "@/components/animations/image-reveal";

export const metadata: Metadata = {
  title: "VMOVEXA Media | Dynamic Connected DOOH Infrastructure",
  description:
    "Discover VMOVEXA mobility media: the screen as an inventory object, contextual where & when targeting, and verifiable proof-of-play measurement.",
  keywords: [
    "mobility media platform",
    "digital OOH platform",
    "DOOH platform India",
    "vehicle digital advertising",
    "digital transit media",
    "intelligent DOOH",
    "geo-targeted DOOH",
    "connected digital screens",
  ],
};

export default function MediaPage() {
  const temporalWindows = [
    "Morning Commute",
    "Midday Enterprise",
    "Evening Rush",
    "Prime Nightlife",
    "Major Arena Events",
    "Dynamic Weekend Corridors",
  ];

  const advertiserCategories = [
    "Education & EdTech",
    "Healthcare & Wellness",
    "Real Estate & Development",
    "Travel & Hospitality",
    "Food & Beverage",
    "Finance & Banking",
    "Automotive & EV",
    "Consumer Technology",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 06: MEDIA) */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    <TextDecrypt text="Mobility Media" delay={150} />
                  </span>
                </div>
              </EditorialLine>

              <CubertoLines
                as="h1"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-6 text-white uppercase"
                delay={0.15}
                lines={[
                  "Media that",
                  <span key="sub" className="gradient-text">moves.</span>
                ]}
              />

              <BlurReveal delay={0.25} blurAmount={10}>
                <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-2xl mb-8">
                  A new era of Digital Out-of-Home — powered by movement, location and intelligence.
                </p>
              </BlurReveal>

              <EditorialLine delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#inventory-object"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    >
                      <span className="text-black font-semibold">Explore Mobility Media</span>
                      <FiArrowRight size={16} className="text-black" />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.08] border border-white/20 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/15 hover:border-cyan-400/40"
                    >
                      <span className="text-white font-semibold">For Brands</span>
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.3}>
                    <a
                      href="/docs/VMOVEXA-Brochure.pdf"
                      download="VMOVEXA-Brochure.pdf"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-white/80 hover:text-white hover:border-white/30 text-xs font-mono tracking-wider transition-all duration-300"
                    >
                      Media Kit PDF
                    </a>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 06) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <FloatingElement duration={5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">MOVING</span>
              </FloatingElement>
              <FloatingElement duration={4.2} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">MEASURABLE</span>
              </FloatingElement>
              <FloatingElement duration={5.5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">CONTEXTUAL</span>
              </FloatingElement>
              <FloatingElement duration={4.7} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">IMPACTFUL</span>
              </FloatingElement>
            </div>
          </div>

          {/* Central Visual: Black Transit Bus with Digital Wrap Displaying BRANDS TRAVEL FURTHER HERE. */}
          <GsapScrollReveal delay={0.3}>
            <div className="relative group mb-8">
              <MediaSlot
                type="image"
                src="/images/vmovexa-media-bus-banner.png"
                alt="VMOVEXA Mobility Media Smart Transit Bus - Brands Travel Further Here"
                badge="Digital Transit Media • Connected DOOH"
                caption="Dynamic Exterior Screen: Contextual, Location-Triggered & Verified Proof-of-Play"
                aspectRatio="21/9"
                priority
                curtainReveal={true}
              />
            </div>
          </GsapScrollReveal>

          {/* Floating Horizontal Pill Bar (Mockup Screen 06) */}
          <GsapScrollReveal delay={0.4}>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 shadow-2xl">
              {[
                { title: "Location-Aware Campaigns", icon: FiMapPin, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
                { title: "Route-Based Targeting", icon: FiMonitor, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
                { title: "Real-Time Context", icon: FiCheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                { title: "Measurable Performance", icon: FiBarChart2, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
              ].map((pill) => {
                const PillIcon = pill.icon;
                return (
                  <TiltCard key={pill.title} maxTilt={8} glare={true}>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.04] transition-colors cursor-default">
                      <div className={`p-2.5 rounded-xl border ${pill.bg} ${pill.color} shadow-sm`}>
                        <PillIcon size={18} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-white/90">
                        {pill.title}
                      </span>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </GsapScrollReveal>

          {/* Bottom Section: DON'T JUST BUY A SCREEN. BUY A MOMENT IN MOTION. + 10M+ Reach */}
          <GsapScrollReveal delay={0.5}>
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/50 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <div className="max-w-md text-center sm:text-left relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 leading-snug">
                  Don&apos;t just buy a screen. Buy a moment in motion.
                </h3>
              </div>
              <div className="text-center sm:text-right relative z-10">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
                  10M+
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-1">
                  Potential Daily Audience Reach
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 02 — THE SCREEN AS AN INVENTORY OBJECT & CONTEXTUAL TARGETING */}
      <section id="inventory-object" className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* The Screen as an Inventory Object */}
            <GsapScrollReveal className="h-full">
              <TiltCard maxTilt={7} glare={true} className="h-full">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 h-full hover:bg-white/[0.03] hover:border-cyan-500/20 transition-all duration-500 group relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                  <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
                      <FiMonitor size={16} /> Inventory Object
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold uppercase mb-4">The Screen as an <span className="gradient-text">Inventory Object</span></h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
                      In traditional media, screens are fixed in place. In connected mobility, the screen moves through the physical world.
                    </p>
                    <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono text-white/80">
                      <div className="text-cyan-400 font-semibold mb-3">Each screen becomes a software-addressable object with:</div>
                      {['Exact spatial location', 'Route trajectory', 'Operational status', 'Verified playback capacity'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                          <span className="text-cyan-400 group-hover/item:translate-x-1 transition-transform">→</span>
                          <span className="group-hover/item:text-white transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </GsapScrollReveal>

            {/* Contextual Where & When */}
            <GsapScrollReveal delay={0.2} className="h-full">
              <TiltCard maxTilt={7} glare={true} className="h-full">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 h-full hover:bg-white/[0.03] hover:border-purple-500/20 transition-all duration-500 group relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                   <div className="absolute -inset-x-full top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider mb-2">
                      <FiMapPin size={16} /> Contextual Delivery
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold uppercase mb-4">Where + When <span className="gradient-text">Targeting</span></h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
                      Contextual delivery happens at the intersection of geographical polygon rules and temporal dayparting:
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Temporal Windows:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono text-white/80">
                        {temporalWindows.map((tw, i) => (
                          <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center hover:bg-purple-950/20 hover:border-purple-500/30 transition-colors cursor-default">
                            {tw}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </GsapScrollReveal>
          </div>

          {/* Measurable Media & Proof of Play Banner */}
          <GsapScrollReveal delay={0.3}>
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-zinc-200 space-y-4 hover:border-zinc-300 transition-colors group shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-wider">
                  <FiBarChart2 size={16} className="group-hover:scale-110 transition-transform" /> Verifiable Measurement
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold uppercase mb-2 text-zinc-900">Display is <span className="gradient-text">Not Enough.</span></h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-3xl font-light">
                  VMOVEXA&apos;s architecture includes media analytics around playback, completion, campaign performance and location performance. This establishes a foundation for more measurable, audit-ready mobility media.
                </p>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 03 — DIGITAL OOH: THE ROAD IS YOUR MEDIA NETWORK */}
      <section className="py-28 border-b border-white/[0.08] relative bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <EditorialLine>
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
                09 — Digital Out-of-Home
              </div>
            </EditorialLine>
            <EditorialLine delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
                The road is your <span className="gradient-text">media network.</span>
              </h2>
            </EditorialLine>
            <EditorialLine delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                VMOVEXA provides a technology foundation for digital out-of-home media distributed across moving fleets, delivering high-impact programmatic exposure.
              </p>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              "Connected screens",
              "Digital orchestration",
              "Location context",
              "Remote management",
              "Telemetry analytics",
              "Programmatic scale",
            ].map((pillar, i) => (
              <GsapScrollReveal key={pillar} delay={i * 0.05}>
                <MagneticElement strength={0.1}>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center text-xs font-mono text-white/80 h-full flex items-center justify-center hover:bg-cyan-950/20 hover:border-cyan-500/30 hover:text-cyan-100 transition-colors cursor-default shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                    {pillar}
                  </div>
                </MagneticElement>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Reserved Space for DOOH Display Network Visual */}
          <GsapScrollReveal delay={0.3}>
            <div className="relative group overflow-hidden rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <MediaSlot
                type="image"
                src="/images/VMOVEXA BRAND MAIN BANNER .png"
                alt="VMOVEXA DOOH Media Network"
                badge="DOOH Network • Digital Transit Advertising"
                caption="Centrally Orchestrated Media Execution across Connected Arterials"
                aspectRatio="16/9"
                objectFit="contain"
                scanline={true}
                curtainReveal={true}
              />
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 04 — CAMPAIGN INFRASTRUCTURE & ADVERTISER CATEGORIES */}
      <section className="py-28 border-b border-white/[0.08] relative overflow-hidden bg-black">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <EditorialLine>
                <div className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                  10 — Campaign Infrastructure
                </div>
              </EditorialLine>
              <EditorialLine delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  From creative to <span className="gradient-text">moving screen.</span>
                </h2>
              </EditorialLine>
              <EditorialLine delay={0.2}>
                <p className="text-base text-white/70 leading-relaxed pt-2">
                  A complete operational lifecycle structured around:
                </p>
              </EditorialLine>
              <GsapScrollReveal delay={0.3}>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/80 leading-loose shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-indigo-500/30 transition-colors">
                  Brand <span className="text-indigo-400">→</span> Creative Upload <span className="text-indigo-400">→</span> Audience Selection <span className="text-indigo-400">→</span> Geography & Corridor Targeting <span className="text-indigo-400">→</span> Scheduling <span className="text-indigo-400">→</span> Approval <span className="text-indigo-400">→</span> Distribution <span className="text-indigo-400">→</span> Verified Proof-of-Play
                </div>
              </GsapScrollReveal>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <EditorialLine delay={0.2}>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                  Ecosystem Advertiser Categories:
                </h4>
              </EditorialLine>
              <div className="grid grid-cols-2 gap-3">
                {advertiserCategories.map((cat, i) => (
                  <GsapScrollReveal key={i} delay={i * 0.05}>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 flex items-center gap-3 text-xs text-white/80 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.01)] cursor-default">
                      <FiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{cat}</span>
                    </div>
                  </GsapScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center relative overflow-hidden bg-white border-t border-zinc-200">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/50 to-transparent pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <EditorialLine>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 mb-3">Media CTA</div>
          </EditorialLine>
          <EditorialLine delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-zinc-900">
              Don&apos;t just buy a screen. <span className="gradient-text">Buy a moment in motion.</span>
            </h2>
          </EditorialLine>
          <EditorialLine delay={0.3}>
            <div className="pt-6">
              <MagneticElement strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-black text-white font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-xl"
                >
                  Explore Mobility Media <FiArrowRight size={16} />
                </Link>
              </MagneticElement>
            </div>
          </EditorialLine>
        </div>
      </section>
    </main>
  );
}
