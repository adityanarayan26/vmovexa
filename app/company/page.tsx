import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCpu, FiZap, FiUsers, FiGlobe } from "react-icons/fi";
import { EditorialMaskText, EditorialLine } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { CompanyClient } from "./company-client";

export const metadata: Metadata = {
  title: "About VMOVEXA | Deep-Tech Mobility Technology Company",
  description:
    "Learn about VMOVEXA, a deep-tech mobility technology platform developing cloud-to-edge infrastructure for connected vehicles, mobility intelligence and digital media.",
  keywords: [
    "mobility deep tech",
    "edge infrastructure",
    "mobility technology platform",
    "the vehicle is the new edge",
    "connected mobility company",
  ],
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 07: COMPANY) */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                    About VMOVEXA
                  </span>
                </div>
              </EditorialLine>

              <EditorialLine delay={0.15}>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mb-6 text-white">
                  Building intelligence into movement.
                </h1>
              </EditorialLine>

              <EditorialLine delay={0.3}>
                <p className="text-xl sm:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl mb-10">
                  VMOVEXA is a deep-tech mobility technology company focused on the convergence of physical mobility and digital intelligence.
                </p>
              </EditorialLine>

              <EditorialLine delay={0.4}>
                <div className="flex items-center gap-4 mb-10">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#company-details"
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    >
                      <span className="text-black font-semibold">Our Story</span>
                      <FiArrowRight size={16} className="text-black" />
                    </Link>
                  </MagneticElement>
                </div>
              </EditorialLine>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 07) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/40 tracking-[0.25em] uppercase">
              <span className="hover:text-cyan-400 transition-colors cursor-default">PEOPLE</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">TECHNOLOGY</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">PARTNERSHIPS</span>
              <span className="hover:text-cyan-400 transition-colors cursor-default">A SMARTER TOMORROW</span>
            </div>
          </div>

          {/* Central Space Earth Orbit Visual (Mockup Screen 07) */}
          <GsapScrollReveal delay={0.3}>
            <div className="relative group mb-14">
              <MediaSlot
                type="image"
                src="/images/vmovexa-company-earth-space.png"
                alt="VMOVEXA Earth From Space - Global Mobility Intelligence Horizon"
                badge="Global Perspective • Connected Planet"
                caption="Building Intelligence Into Movement — Cloud-to-Edge Infrastructure"
                aspectRatio="21/9"
                priority
              />
            </div>
          </GsapScrollReveal>

          {/* 3 Columns: OUR VISION, OUR MISSION, OUR BELIEF (Mockup Screen 07) */}
          <GsapScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                  Our Vision
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  Make Mobility Intelligent.
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-colors">
                <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 block mb-2">
                  Our Mission
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  Connect the Physical World with the Digital World.
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-colors">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-2">
                  Our Belief
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  The Future Moves Together.
                </h3>
              </div>
            </div>
          </GsapScrollReveal>

          {/* 4 Bottom Icons: Deep Tech, Innovation, Partnerships, Global Impact (Mockup Screen 07) */}
          <GsapScrollReveal delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-center">
              {[
                { title: "Deep Tech", icon: FiCpu, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
                { title: "Innovation", icon: FiZap, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]" },
                { title: "Partnerships", icon: FiUsers, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
                { title: "Global Impact", icon: FiGlobe, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.15)]" },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center justify-center group cursor-default"
                  >
                    <div className={`p-3.5 rounded-xl border ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300 mb-3`}>
                      <ItemIcon size={24} />
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </GsapScrollReveal>
        </div>
      </section>

      {/* 02 — DETAILED TABS & COMPANY ECOSYSTEM */}
      <section id="company-details" className="py-24 border-b border-white/[0.08]">
        <div className="container max-w-6xl mx-auto px-6">
          <CompanyClient />
        </div>
      </section>
    </main>
  );
}
