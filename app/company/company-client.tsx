"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCpu,
  FiCloud,
  FiDatabase,
  FiMonitor,
  FiLayers,
  FiWifi,
  FiBriefcase,
} from "react-icons/fi";
import { RiCarLine, RiMegaphoneLine } from "react-icons/ri";
import { EditorialMaskText, EditorialLine, EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";

const partnerCategories = [
  { title: "Transportation", desc: "Fleet operators, public transit authorities & EV mobility networks" },
  { title: "Cloud Infrastructure", desc: "Hyperscalers, secure distributed computing & object storage fabrics" },
  { title: "Telecom", desc: "Cellular carriers, low-latency SIM/eSIM gateways & 5G connectivity" },
  { title: "IoT & Hardware", desc: "Automotive-grade hardware modules, bus bridge interfaces & sensors" },
  { title: "Displays", desc: "Automotive-grade digital signage, high-nit outdoor screens & controllers" },
  { title: "Mapping & GIS", desc: "High-resolution geospatial layers, GIS vector polygons & map providers" },
  { title: "Advertising & Media", desc: "Programmatic DSPs, agencies, media buyers & verification vendors" },
  { title: "System Integrators", desc: "Telematics specialists, CAD/AVL installers & enterprise partners" },
];

const commercialDimensions = [
  { title: "Media", desc: "High-margin digital advertising & location-aware inventory monetization", icon: RiMegaphoneLine, color: "text-pink-400", badge: "bg-pink-500/10 border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.12)]" },
  { title: "Software (SaaS)", desc: "Subscription platform licensing for fleet management, telemetry & routing", icon: FiLayers, color: "text-indigo-400", badge: "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.12)]" },
  { title: "Hardware", desc: "Integrated edge gateways, telemetry units & multi-screen controllers", icon: FiCpu, color: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.12)]" },
  { title: "Connectivity", desc: "Managed cellular transport, eSIM bandwidth pooling & edge sync", icon: FiWifi, color: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.12)]" },
  { title: "Data Infrastructure", desc: "Aggregated geospatial intelligence, traffic flow telemetry & transit insights", icon: FiDatabase, color: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.12)]" },
  { title: "Commerce", desc: "Transaction facilitation, connected mobility services & smart payments", icon: FiBriefcase, color: "text-amber-400", badge: "bg-amber-500/10 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.12)]" },
];

const engineeringDomains = [
  "Edge Computing & Runtime Optimization",
  "Connected Devices & Hardware Bus Protocols",
  "Distributed Systems & Fault-Tolerant Sync",
  "Enterprise Software & Real-Time Orchestration",
];

export function CompanyClient() {
  const [activeTab, setActiveTab] = useState("About");
  const tabs = ["About", "Deep Tech", "Partners", "Investors", "Careers"];

  return (
    <>
      {/* Section Navigation Tabs */}
      <EditorialLine delay={0.25}>
        <div className="flex flex-wrap items-center gap-2.5 mb-14">
          {tabs.map((tab) => (
            <MagneticElement key={tab} strength={0.1}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {tab}
              </button>
            </MagneticElement>
          ))}
        </div>
      </EditorialLine>

      {/* Tab Content with EditorialTabTransition */}
      <div className="min-h-[600px]">
        <EditorialTabTransition tabKey={activeTab}>
          
          {/* TAB: ABOUT */}
          {activeTab === "About" && (
            <div className="space-y-16">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#020610] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-6 space-y-6">
                    <EditorialTabItem delayOffset={0.1}>
                      <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block">Our Vision</span>
                        <h3 className="text-xl font-semibold text-white">Make mobility intelligent.</h3>
                        <p className="text-xs text-white/50">Unified system of physical movement and digital intelligence.</p>
                      </div>
                    </EditorialTabItem>

                    <EditorialTabItem delayOffset={0.2}>
                      <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
                        <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 block">Our Mission</span>
                        <h3 className="text-xl font-semibold text-white">Connect the physical world with the digital world.</h3>
                        <p className="text-xs text-white/50">Turning moving vehicles into programmatic edge compute nodes.</p>
                      </div>
                    </EditorialTabItem>

                    <EditorialTabItem delayOffset={0.3}>
                      <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block">Our Belief</span>
                        <h3 className="text-xl font-semibold text-white">The future won&apos;t just be connected. It will be contextual.</h3>
                        <p className="text-xs text-white/50">Intelligence reacting to location, velocity, environment and time.</p>
                      </div>
                    </EditorialTabItem>
                  </div>

                  <div className="lg:col-span-6">
                    <EditorialTabItem delayOffset={0.4}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-1000 z-10 pointer-events-none" />
                        <MediaSlot
                          type="image"
                          src="/images/vmovexa-earth-horizon.png"
                          alt="VMOVEXA Global Intelligence"
                          badge="Global Perspective • Connected Planet"
                          caption="INTELLIGENCE IN MOTION — The Digital Operating Layer for Worldwide Mobility"
                          aspectRatio="16/9"
                          priority
                        />
                      </div>
                    </EditorialTabItem>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { title: "Deep Tech", subtitle: "Driven", color: "cyan" },
                  { title: "Ecosystem", subtitle: "Focused", color: "indigo" },
                  { title: "Global", subtitle: "Perspective", color: "purple" },
                  { title: "A Smarter", subtitle: "Tomorrow", color: "pink" }
                ].map((highlight, i) => (
                  <EditorialTabItem key={highlight.title} delayOffset={0.5 + (i * 0.1)}>
                    <div className={`p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-${highlight.color}-500/30 transition-colors cursor-default`}>
                      <div className={`font-mono text-xs uppercase tracking-widest text-${highlight.color}-400`}>{highlight.title}</div>
                      <div className="text-sm font-semibold text-white mt-1">{highlight.subtitle}</div>
                    </div>
                  </EditorialTabItem>
                ))}
              </div>
            </div>
          )}

          {/* TAB: DEEP TECH */}
          {activeTab === "Deep Tech" && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <EditorialTabItem delayOffset={0.1}>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 space-y-4 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] hover:border-cyan-500/30 transition-colors">
                    <div className="font-mono text-xs uppercase tracking-widest text-cyan-400">Our Vision</div>
                    <h3 className="text-3xl font-semibold uppercase">Make Mobility Intelligent.</h3>
                    <p className="text-base text-white/70 leading-relaxed">
                      We envision a future where physical movement and digital intelligence operate as one connected system.
                    </p>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/80">
                      Cloud + Edge + Displays + Data + Location + Mobility into one unified intelligent ecosystem.
                    </div>
                  </div>
                </EditorialTabItem>

                <EditorialTabItem delayOffset={0.2}>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 space-y-4 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] hover:border-indigo-500/30 transition-colors">
                    <div className="font-mono text-xs uppercase tracking-widest text-indigo-400">Our Technology Thesis</div>
                    <h3 className="text-3xl font-semibold uppercase">The Vehicle is the New Edge.</h3>
                    <p className="text-base text-white/70 leading-relaxed">
                      The central proposition is that each connected vehicle can operate as an intelligent edge node.
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed font-mono">
                      That idea forms the foundation of the VMOVEXA technology strategy. Every vehicle on the road has power, movement, spatial coordinates, and physical presence—making it the ideal platform for decentralized intelligence.
                    </p>
                  </div>
                </EditorialTabItem>
              </div>

              <div>
                <EditorialTabItem delayOffset={0.3}>
                  <div className="max-w-2xl mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight uppercase leading-tight">
                      Technology Convergence.
                    </h2>
                    <p className="text-sm text-white/50 font-mono mt-3">
                      VMOVEXA is designed at the boundary between the physical and digital worlds.
                    </p>
                  </div>
                </EditorialTabItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { title: "Mobility", desc: "Physical movement creates the operating environment.", icon: RiCarLine, color: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.12)]" },
                    { title: "Edge Computing", desc: "Computing moves closer to the vehicle.", icon: FiCpu, color: "text-indigo-400", badge: "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.12)]" },
                    { title: "Cloud", desc: "Central infrastructure coordinates distributed assets.", icon: FiCloud, color: "text-sky-400", badge: "bg-sky-500/10 border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.12)]" },
                    { title: "Data", desc: "Operational events create structured intelligence.", icon: FiDatabase, color: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.12)]" },
                    { title: "Media", desc: "Connected screens deliver contextual communication.", icon: FiMonitor, color: "text-pink-400", badge: "bg-pink-500/10 border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.12)]" },
                  ].map((node, i) => (
                    <EditorialTabItem key={node.title} delayOffset={0.4 + (i * 0.1)}>
                      <MagneticElement strength={0.05}>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 h-full flex flex-col justify-between group hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300">
                          <div>
                            <div className={`w-11 h-11 rounded-xl border ${node.badge} flex items-center justify-center mb-4 ${node.color} group-hover:scale-110 transition-all duration-300`}>
                              <node.icon className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">Pillar 0{i + 1}</span>
                            <h4 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">{node.title}</h4>
                            <p className="text-xs text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{node.desc}</p>
                          </div>
                        </div>
                      </MagneticElement>
                    </EditorialTabItem>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: PARTNERS */}
          {activeTab === "Partners" && (
            <div className="space-y-12">
              <EditorialTabItem delayOffset={0.1}>
                <div className="max-w-3xl mb-8">
                  <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight uppercase leading-tight mb-4">
                    Build the Moving Ecosystem.
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    VMOVEXA is designed to work within a broader technology ecosystem, partnering across hardware, connectivity, cloud, and media.
                  </p>
                </div>
              </EditorialTabItem>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {partnerCategories.map((p, i) => (
                  <EditorialTabItem key={p.title} delayOffset={0.2 + (i * 0.05)}>
                    <MagneticElement strength={0.05}>
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 h-full hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 cursor-default">
                        <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                        <p className="text-xs text-white/55 leading-relaxed">{p.desc}</p>
                      </div>
                    </MagneticElement>
                  </EditorialTabItem>
                ))}
              </div>
              <EditorialTabItem delayOffset={0.7}>
                <div className="pt-8">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(255,255,255,0.2)]"
                    >
                      Become a Partner <FiArrowRight size={16} />
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialTabItem>
            </div>
          )}

          {/* TAB: INVESTORS */}
          {activeTab === "Investors" && (
            <div className="space-y-16">
              <EditorialTabItem delayOffset={0.1}>
                <div className="max-w-3xl mb-8">
                  <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight uppercase leading-tight mb-4">
                    Building a New Digital Layer <br />
                    <span className="text-cyan-400">Across Mobility.</span>
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed mb-4">
                    VMOVEXA operates at the intersection of several expanding technology categories: Connected Mobility, Edge Computing, Cloud Software, IoT, Digital Media, Data Infrastructure, and Smart Transportation.
                  </p>
                  <p className="text-xs font-mono text-white/50">
                    That creates the foundation for scalable, high-margin platform economics across multiple commercial dimensions.
                  </p>
                </div>
              </EditorialTabItem>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercialDimensions.map((cd, i) => (
                  <EditorialTabItem key={cd.title} delayOffset={0.2 + (i * 0.1)}>
                    <MagneticElement strength={0.05}>
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 h-full group hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`font-mono text-xs uppercase tracking-widest ${cd.color}`}>Dimension 0{i + 1}</span>
                          <div className={`w-10 h-10 rounded-xl border ${cd.badge} flex items-center justify-center ${cd.color} group-hover:scale-110 transition-all duration-300`}>
                            <cd.icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">{cd.title}</h4>
                        <p className="text-xs text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{cd.desc}</p>
                      </div>
                    </MagneticElement>
                  </EditorialTabItem>
                ))}
              </div>
              <EditorialTabItem delayOffset={0.8}>
                <div className="relative group overflow-hidden rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <MediaSlot
                    type="image"
                    src="/images/VMOVEXA INVESTOR MAGAZINE10.png"
                    alt="VMOVEXA Investor Overview"
                    badge="Investor Overview • Platform Opportunity"
                    caption="Market Intersection & Multi-Dimensional Platform Economics"
                    aspectRatio="21/9"
                  />
                </div>
              </EditorialTabItem>
            </div>
          )}

          {/* TAB: CAREERS */}
          {activeTab === "Careers" && (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <EditorialTabItem delayOffset={0.1}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight uppercase mb-6">
                  Build With VMOVEXA.
                </h2>
              </EditorialTabItem>
              <EditorialTabItem delayOffset={0.2}>
                <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
                  For builders. For engineers. For product thinkers. For people who want to work where software meets the physical world.
                </p>
              </EditorialTabItem>
              <div className="flex flex-wrap justify-center gap-3 mb-12 text-xs font-mono text-white/70">
                {engineeringDomains.map((domain, i) => (
                  <EditorialTabItem key={i} delayOffset={0.3 + (i * 0.1)}>
                    <span className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors cursor-default inline-block">
                      {domain}
                    </span>
                  </EditorialTabItem>
                ))}
              </div>
              <EditorialTabItem delayOffset={0.8}>
                <MagneticElement strength={0.3}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    View Opportunities <FiArrowRight size={16} />
                  </Link>
                </MagneticElement>
              </EditorialTabItem>
            </div>
          )}

        </EditorialTabTransition>
      </div>
    </>
  );
}
