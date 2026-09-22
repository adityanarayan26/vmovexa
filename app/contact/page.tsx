"use client";

import { useState } from "react";
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { RiBuilding4Line, RiMegaphoneLine, RiCpuLine, RiFundsLine } from "react-icons/ri";
import { Reveal } from "@/components/animations/reveal";
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
      badge: "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    },
    {
      title: "Media & Brands",
      subtitle: "Build media that moves.",
      copy: "Explore connected vehicle media, programmatic DOOH inventory, and digital mobility infrastructure.",
      icon: RiMegaphoneLine,
      cta: "Talk to Media",
      color: "text-pink-400",
      badge: "bg-pink-500/10 border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.15)]",
    },
    {
      title: "Technology Partners",
      subtitle: "Build the ecosystem.",
      copy: "Explore integration, hardware modules, connectivity, mapping layers, and technology partnerships.",
      icon: RiCpuLine,
      cta: "Partner With VMOVEXA",
      color: "text-indigo-400",
      badge: "bg-indigo-500/10 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]",
    },
    {
      title: "Investors",
      subtitle: "Explore the platform opportunity.",
      copy: "Discuss the technology thesis, cloud-to-edge architecture, and long-term platform economics.",
      icon: RiFundsLine,
      cta: "Investor Enquiries",
      color: "text-emerald-400",
      badge: "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
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
                16 — Contact & Enquiries
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mb-8 text-white">
              Connect with VMOVEXA.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl mb-12">
              Whether you are deploying connected fleet infrastructure, building moving media campaigns, integrating technologies, or exploring platform investment—we are here to connect.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 — 4 CONTACT TRACKS */}
      <section className="py-24 border-b border-white/[0.08]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((t, idx) => {
              const IconComp = t.icon;
              return (
                <Reveal key={t.title} delay={idx * 0.05}>
                  <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/[0.04] h-full flex flex-col justify-between space-y-6 group">
                    <div>
                      <div className={`w-12 h-12 rounded-xl border ${t.badge} flex items-center justify-center mb-4 ${t.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp size={22} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">{t.title}</h3>
                      <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${t.color}`}>{t.subtitle}</p>
                      <p className="text-xs text-white/65 leading-relaxed font-normal">{t.copy}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedInterest(t.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 uppercase tracking-wider hover:text-white transition-colors pt-4 border-t border-white/10"
                    >
                      {t.cta} <FiArrowRight size={13} className={t.color} />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — CONTACT FORM & DIRECT INFO */}
      <section className="py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400">Direct Communication</div>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase leading-tight pt-2">
                  Let&apos;s Build What Moves Next.
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our engineering and enterprise teams operate from Hyderabad, India, working with transport networks and media ecosystems nationwide.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-white/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <FiMail className="w-4 h-4" />
                    </div>
                    <span>{site.email}</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <FiPhone className="w-4 h-4" />
                    </div>
                    <span>{site.phone}</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <FiMapPin className="w-4 h-4" />
                    </div>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <FiCheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                      <h3 className="text-2xl font-semibold text-white uppercase">Enquiry Received</h3>
                      <p className="text-sm text-white/60 max-w-md mx-auto">
                        Thank you for reaching out to VMOVEXA. Our team will review your enquiry and get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-semibold uppercase tracking-tight mb-2">Let&apos;s Talk</h3>
                        <p className="text-xs text-white/50 font-mono">Fill in your details and we will direct your enquiry to the right group.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block">Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block">Company *</label>
                          <input
                            required
                            type="text"
                            placeholder="Enterprise / Fleet / Agency"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block">Work Email *</label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Interest Selector */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-white/70 uppercase tracking-wider block">I&apos;m Interested In:</label>
                        <div className="flex flex-wrap gap-2">
                          {interestOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSelectedInterest(opt)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                                selectedInterest === opt
                                  ? "bg-white text-black font-semibold shadow-md"
                                  : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08]"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-white/70 uppercase tracking-wider block">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your fleet, requirements, or partnership proposal..."
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
                      >
                        Send Enquiry <FiSend size={14} />
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
