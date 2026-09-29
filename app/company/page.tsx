import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiCpu, FiZap, FiUsers, FiGlobe } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { EditorialMaskText, EditorialLine, CubertoLines } from "@/components/animations/editorial-text";
import { MagneticElement, GsapScrollReveal } from "@/components/animations/gsap-scroll-fx";
import { MediaSlot } from "@/components/ui/media-slot";
import { CompanyClient } from "./company-client";
import { PatentsAndCerts } from "@/components/visuals/patents-and-certs";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { FloatingElement } from "@/components/animations/image-reveal";
import { GridWaveBackground } from "@/components/visuals/grid-wave-background";

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

const leadershipTeam = [
  {
    name: "G Satyanarayana",
    role: "Founder & CEO",
    image: "/people/g-satyanarayana-real.png",
    linkedin: "https://www.linkedin.com/in/satyanarayanakleetechnologiesceo/",
  },
  {
    name: "BS Anuhya",
    role: "Director",
    image: "/people/bs-anuhya-real.png",
    linkedin: "https://www.linkedin.com/in/klee-technologies/",
  },
  {
    name: "Nikhil Mungilwar",
    role: "Business Head",
    image: "/people/nikhil-mungilwar-real.png",
    linkedin: "https://www.linkedin.com/in/nikhil-mungilwar-553521164/",
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO (Mockup Screen 07: COMPANY) */}
      <section className="relative min-h-[90vh] pt-32 pb-12 overflow-hidden bg-black flex flex-col justify-center">
        {/* Background Earth Orbit Visual behind 'Building intelligence into movement.' */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/vmovexa-company-earth-space.png"
            alt="VMOVEXA Earth From Space - Global Mobility Intelligence Horizon"
            fill
            priority
            quality={95}
            className="object-cover object-bottom opacity-70 select-none"
          />
          {/* Cinematic Vignette Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/85 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_90%)] z-10" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-10">
              <EditorialLine>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/90">
                    <TextDecrypt text="About VMOVEXA" delay={150} />
                  </span>
                </div>
              </EditorialLine>

              <CubertoLines
                as="h1"
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] max-w-4xl mb-6 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
                delay={0.15}
                lines={[
                  "Building intelligence",
                  <span key="sub" className="gradient-text">into movement.</span>
                ]}
              />

              <BlurReveal delay={0.25} blurAmount={10}>
                <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                  VMOVEXA is a deep-tech mobility technology company focused on the convergence of physical mobility and digital intelligence.
                </p>
              </BlurReveal>

              <GsapScrollReveal delay={0.4}>
                <div className="flex items-center gap-4 mb-6 py-4 -my-4 overflow-visible">
                  <MagneticElement strength={0.3}>
                    <Link
                      href="#company-details"
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                    >
                      <span className="text-black font-semibold">Our Story</span>
                      <FiArrowRight size={16} className="text-black" />
                    </Link>
                  </MagneticElement>
                </div>
              </GsapScrollReveal>
            </div>

            {/* Right Side Vertical Floating Tags (Screen 07) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pt-16 font-mono text-[11px] text-white/60 tracking-[0.25em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <FloatingElement duration={5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">PEOPLE</span>
              </FloatingElement>
              <FloatingElement duration={4.2} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">TECHNOLOGY</span>
              </FloatingElement>
              <FloatingElement duration={5.5} yOffset={4}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">PARTNERSHIPS</span>
              </FloatingElement>
              <FloatingElement duration={4.7} yOffset={5}>
                <span className="hover:text-cyan-400 transition-colors cursor-default">A SMARTER TOMORROW</span>
              </FloatingElement>
            </div>
          </div>

          {/* 3 Columns: OUR VISION, OUR MISSION, OUR BELIEF (Mockup Screen 07) */}
          <GsapScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/15">
              <TiltCard maxTilt={8} glare={true} className="h-full">
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-cyan-500/40 hover:bg-black/60 transition-all shadow-xl group h-full">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                    Our Vision
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                    Make Mobility Intelligent.
                  </h3>
                </div>
              </TiltCard>

              <TiltCard maxTilt={8} glare={true} className="h-full">
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-indigo-500/40 hover:bg-black/60 transition-all shadow-xl group h-full">
                  <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 block mb-2">
                    Our Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                    Connect the Physical World with the Digital World.
                  </h3>
                </div>
              </TiltCard>

              <TiltCard maxTilt={8} glare={true} className="h-full">
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-purple-500/40 hover:bg-black/60 transition-all shadow-xl group h-full">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-2">
                    Our Belief
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                    The Future Moves Together.
                  </h3>
                </div>
              </TiltCard>
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
                  <TiltCard key={item.title} maxTilt={10} glare={true}>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center justify-center group cursor-default">
                      <div className={`p-3.5 rounded-xl border ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300 mb-3`}>
                        <ItemIcon size={24} />
                      </div>
                      <span className="text-sm font-semibold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </GsapScrollReveal>
        </div>
        
      </section>

      {/* 02 — LEADERSHIP (Matching Klee Technologies Design) */}
      <section id="leadership" className="py-12 relative overflow-hidden bg-white scroll-mt-20">
        <GridWaveBackground variant="cyan" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <EditorialLine>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-tight">
                Leadership
              </h2>
            </EditorialLine>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {leadershipTeam.map((leader, i) => (
              <GsapScrollReveal key={leader.name} delay={i * 0.1}>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="flex items-center justify-between gap-3.5 p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-full border border-zinc-200/70 bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] group cursor-pointer"
                  style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                >
                  {/* Circular Avatar */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 bg-transparent">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 bg-transparent"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1 min-w-0 pl-1">
                    <div className="font-bold text-black text-base sm:text-[17px] tracking-tight truncate group-hover:text-cyan-600 transition-colors">
                      {leader.name}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-500 font-normal truncate mt-0.5">
                      {leader.role}
                    </div>
                  </div>

                  {/* LinkedIn Pill with Arrow */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-neutral-200 text-black group-hover:border-cyan-600 group-hover:text-cyan-600 transition-all group-hover:scale-105 shadow-sm flex-shrink-0"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5 text-black group-hover:text-cyan-600 transition-colors" />
                    <FiArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
        
      </section>

      {/* 03 — DETAILED TABS & COMPANY ECOSYSTEM */}
      <section id="company-details" className="py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <CompanyClient />
        </div>
      </section>
      
      {/* 04 — PATENTS & CERTIFICATIONS */}
      <PatentsAndCerts />

      {/* ========================================================================= */}
      {/* 05 // THE BRAND IDENTITY: THE SOUL OF INTELLIGENT MOVEMENT.               */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-black">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <EditorialLine>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-mono text-xs tracking-wider mb-5">
                <span>BRAND IDENTITY</span>
              </div>
            </EditorialLine>
            <CubertoLines
              as="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.05] text-white"
              delay={0.1}
              stagger={0.1}
              lines={[
                <div key="l1">THE SOUL OF</div>,
                <div key="l2" className="mt-1 sm:mt-2 gradient-text">INTELLIGENT MOVEMENT.</div>,
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column: The Iconic V */}
            <GsapScrollReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/images/iconic-v.jpg"
                      alt="The Iconic V"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-4 px-4 sm:px-0">
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase flex items-center gap-3">
                    THE ICONIC 
                    <span className="relative inline-flex items-center justify-center -top-0.5 ml-1">
                      <div className="absolute inset-1 bg-white blur-[8px] opacity-25 rounded-full" />
                      <Image src="/logos/vmovexa-icon-dark.svg" alt="V" width={32} height={32} className="relative z-10" />
                    </span>
                  </h3>
                  <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
                    Three ideas. One identity.
                  </div>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Velocity. Vision. Value.<br />
                    Move + Nexus.<br />
                    A symbol for the movement of what comes next.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white text-xl tracking-wider">
                      <Image src="/logos/vmovexa-wordmark-light.svg" alt="VMOVEXA" width={140} height={24} />
                    </div>
                    <div className="text-sm text-white/50">The Soul of Intelligent Movement.</div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>

            {/* Right Column: The Gradient X */}
            <GsapScrollReveal delay={0.3}>
              <div className="flex flex-col gap-6 md:mt-16">
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/images/gradient-x.jpg"
                      alt="The Gradient X"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-4 px-4 sm:px-0">
                  <h3 className="text-2xl font-bold text-white tracking-wide uppercase flex items-center gap-3">
                    AND 
                    <span className="relative inline-flex items-center justify-center -top-0.5 ml-1">
                      <div className="absolute inset-1 bg-white blur-[10px] opacity-25 rounded-full" />
                      <Image src="/images/X.png" alt="X" width={32} height={32} className="relative z-10" />
                    </span>
                  </h3>
                  <div className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
                    Digital Intelligent Media.
                  </div>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    Media. With intelligence.<br />
                    It sees the moment.<br />
                    Understands the context.<br />
                    Moves with the world.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white text-xl tracking-wider flex items-center gap-3">
                      <Image src="/logos/vmovexa-wordmark-light.svg" alt="VMOVEXA" width={120} height={20} />
                      <span className="relative inline-flex items-center justify-center -top-0.5">
                        <div className="absolute inset-0 bg-white blur-[8px] opacity-25 rounded-full" />
                        <Image src="/images/X.png" alt="X" width={24} height={24} className="relative z-10" />
                      </span>
                    </div>
                    <div className="text-sm text-white/50">Where movement becomes experience.</div>
                  </div>
                </div>
              </div>
            </GsapScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 // SUSTAINABILITY                                                      */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-white border-t border-zinc-200 overflow-hidden">
        <GridWaveBackground variant="purple" />
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <GsapScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
                  Sustainabil<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">ity</span>
                </h2>
                <p className="text-base text-zinc-600 leading-relaxed max-w-md mx-auto md:mx-0">
                  We are committed to building a sustainable future where technology and nature coexist in perfect harmony.
                </p>
              </div>

              <div className="md:w-2/3 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-8 lg:gap-12">
                {/* Zero Paper */}
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M9 15v-1l-2 2 2 2v-1h4v1l2-2-2-2v1H9z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-zinc-800 uppercase tracking-wide">Zero Paper</span>
                </div>

                {/* Divider */}
                <div className="hidden md:flex flex-row items-center">
                  <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-purple-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                  <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-purple-300" />
                </div>

                {/* Zero Ink */}
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-full border border-purple-200 bg-purple-50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                    <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v4M10 2h4M9 6h6v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6z"></path>
                      <path d="M16 10l4-4-2-2-4 4"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-zinc-800 uppercase tracking-wide">Zero Ink</span>
                </div>

                {/* Divider */}
                <div className="hidden md:flex flex-row items-center">
                  <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-purple-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                  <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-purple-300" />
                </div>

                {/* Infinite Possibilities */}
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-full border border-indigo-200 bg-indigo-50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                    <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 12c-2-2.5-4-4-6-4-3 0-4.5 2-4.5 4s1.5 4 4.5 4c2 0 4-1.5 6-4Zm0 0c2 2.5 4 4 6 4 3 0 4.5-2 4.5-4s-1.5-4-4.5-4c-2 0-4 1.5-6 4Z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-zinc-800 uppercase tracking-wide">Infinite Possibilities</span>
                </div>
              </div>
            </div>
          </GsapScrollReveal>
        </div>
      </section>
    </main>
  );
}
