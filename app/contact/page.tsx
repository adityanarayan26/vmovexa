"use client";

import { useState } from "react";
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { RiBuilding4Line, RiMegaphoneLine, RiCpuLine, RiFundsLine } from "react-icons/ri";
import { Reveal } from "@/components/animations/reveal";
import { CubertoLines } from "@/components/animations/cuberto-text-reveal";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { site } from "@/lib/site";

export default function ContactPage() {
  const [selectedInterest, setSelectedInterest] = useState<string>("VMOVEXA Platform");
  const [submitted, setSubmitted] = useState(false);

  const tracks = [
    {
      title: "Enterprise & Fleet",
      subtitle: "Deploy connected mobility infrastructure.",
      copy: "Talk to our engineering and solutions team about fleet technology, CAD/AVL integration, and platform deployment.",
      icon: RiBuilding4Line,
      cta: "Talk to Fleet Solutions",
      color: "text-cyan-400",
      lightColor: "text-cyan-600",
      badge: "bg-cyan-500/15 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
      borderColor: "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      glowBg: "from-cyan-500/25 via-transparent to-transparent",
      accentBar: "bg-cyan-400",
    },
    {
      title: "Media & Brands",
      subtitle: "Build media that moves.",
      copy: "Explore connected vehicle media, programmatic DOOH inventory, and digital mobility infrastructure.",
      icon: RiMegaphoneLine,
      cta: "Talk to Media",
      color: "text-pink-400",
      lightColor: "text-pink-600",
      badge: "bg-pink-500/15 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.25)]",
      borderColor: "border-pink-500/40 hover:border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
      glowBg: "from-pink-500/25 via-transparent to-transparent",
      accentBar: "bg-pink-400",
    },
    {
      title: "Technology Partners",
      subtitle: "Build the ecosystem.",
      copy: "Explore integration, hardware modules, connectivity, mapping layers, and technology partnerships.",
      icon: RiCpuLine,
      cta: "Partner With VMOVEXA",
      color: "text-indigo-400",
      lightColor: "text-indigo-600",
      badge: "bg-indigo-500/15 border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.25)]",
      borderColor: "border-indigo-500/40 hover:border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
      glowBg: "from-indigo-500/25 via-transparent to-transparent",
      accentBar: "bg-indigo-400",
    },
    {
      title: "Investors",
      subtitle: "Explore the platform opportunity.",
      copy: "Discuss the technology thesis, cloud-to-edge architecture, and long-term platform economics.",
      icon: RiFundsLine,
      cta: "Investor Enquiries",
      color: "text-emerald-400",
      lightColor: "text-emerald-600",
      badge: "bg-emerald-500/15 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]",
      borderColor: "border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      glowBg: "from-emerald-500/25 via-transparent to-transparent",
      accentBar: "bg-emerald-400",
    },
  ];

  const interestOptions = [
    "VMOVEXA Platform",
    "Fleet Technology",
    "Mobility Media",
    "Technology Partnership",
    "Enterprise Deployment",
    "Investment",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/80">
                <TextDecrypt text="Contact & Enquiries" delay={150} />
              </span>
            </div>
          </Reveal>

          <CubertoLines
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-6 text-white uppercase"
            delay={0.1}
            lines={[
              "Connect with",
              <span key="sub" className="gradient-text">VMOVEXA.</span>
            ]}
          />

          <BlurReveal delay={0.2} blurAmount={10}>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-3xl mb-8">
              Whether you are deploying connected fleet infrastructure, building moving media campaigns, integrating technologies, or exploring platform investment—we are here to connect.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* 02 — 4 CONTACT TRACKS */}
      <section className="py-20 border-b border-zinc-200 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tracks.map((t, idx) => {
              const IconComp = t.icon;
              const isSelected = selectedInterest === t.title;
              return (
                <Reveal key={t.title} delay={idx * 0.05} className="h-full flex flex-col">
                  <TiltCard maxTilt={8} glare={true} className="h-full flex flex-col">
                    <div
                      onClick={() => setSelectedInterest(t.title)}
                      className={`p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 ${
                        isSelected ? "ring-2 ring-cyan-400 shadow-md" : "hover:border-zinc-300 shadow-sm"
                      } transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden flex-1 cursor-pointer`}
                    >
                      {/* Ambient top color accent */}
                      <div className={`absolute top-0 inset-x-0 h-[2px] ${t.accentBar} opacity-85 group-hover:h-1 group-hover:opacity-100 transition-all`} />
                      <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-b ${t.glowBg} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className={`w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-5 ${t.lightColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                          <IconComp size={20} />
                        </div>
                        <h3 className={`text-lg font-bold ${t.lightColor} mb-2 uppercase tracking-tight`}>{t.title}</h3>
                        <p className="text-[11px] font-mono uppercase tracking-wider mb-2.5 text-zinc-600 font-medium">{t.subtitle}</p>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal flex-1">{t.copy}</p>
                      </div>

                      <div className="pt-5 mt-5 border-t border-zinc-200 relative z-10">
                        <button
                          type="button"
                          className="inline-flex items-center justify-between w-full text-[11px] font-semibold text-zinc-900 hover:text-cyan-600 uppercase tracking-wider transition-colors group/cta cursor-pointer"
                        >
                          <span className="text-zinc-900 group-hover/cta:underline">{t.cta}</span>
                          <FiArrowRight className={`w-3.5 h-3.5 ${t.lightColor} transition-transform group-hover/cta:translate-x-1.5`} />
                        </button>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — CONTACT FORM & DIRECT INFO */}
      <section className="py-24 bg-black relative">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">Direct Communication</div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase leading-tight pt-2 text-white">
                  Let&apos;s Build <span className="gradient-text">What Moves Next.</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed pt-2">
                  Our engineering and enterprise teams operate from Hyderabad, India, working with transport networks and media ecosystems nationwide.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-3.5 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/80 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <FiMail className="w-3.5 h-3.5" />
                    </div>
                    <span>{site.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                      <FiPhone className="w-3.5 h-3.5" />
                    </div>
                    <span>{site.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400 shrink-0">
                      <FiMapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>

                {/* Direct Action Buttons: WhatsApp & Brochure */}
                <div className="pt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919999999999?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20VMOVEXA."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono font-semibold transition-all hover:scale-[1.02]"
                  >
                    <span>Chat on WhatsApp</span>
                    <FiArrowRight size={13} />
                  </a>
                  <a
                    href="/docs/VMOVEXA-Brochure.pdf"
                    download="VMOVEXA-Brochure.pdf"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-mono font-semibold transition-all hover:scale-[1.02]"
                  >
                    <span>Download Brochure</span>
                    <FiArrowRight size={13} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <FiCheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">Enquiry Received</h3>
                      <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto">
                        Thank you for reaching out to VMOVEXA. Our team will review your enquiry and get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-bold uppercase tracking-tight mb-1 text-white">Let&apos;s Talk</h3>
                        <p className="text-xs text-white/50 font-mono">Fill in your details and we will direct your enquiry to the right group.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Company *</label>
                          <input
                            required
                            type="text"
                            placeholder="Enterprise / Fleet / Agency"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Work Email *</label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Interest Selector */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">I&apos;m Interested In:</label>
                        <div className="flex flex-wrap gap-2">
                          {interestOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSelectedInterest(opt)}
                              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                                selectedInterest === opt
                                  ? "bg-white text-black font-semibold shadow-md border border-white"
                                  : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your fleet, requirements, or partnership proposal..."
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer group"
                      >
                        <span>Send Enquiry</span>
                        <FiSend size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
