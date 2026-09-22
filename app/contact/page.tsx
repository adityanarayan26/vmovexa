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
    <main className="min-h-screen bg-white text-black">
      {/* 01 — HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-black/[0.08] bg-white">
        <div className="container relative z-10 max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/15 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-black/80">
                16 — Contact & Enquiries
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mb-8 text-black">
              Connect with VMOVEXA.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-black/70 font-normal leading-relaxed max-w-3xl mb-12">
              Whether you are deploying connected fleet infrastructure, building moving media campaigns, integrating technologies, or exploring platform investment—we are here to connect.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 — 4 CONTACT TRACKS */}
      <section className="py-24 border-b border-black/[0.08] bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tracks.map((t, idx) => {
              const IconComp = t.icon;
              const isSelected = selectedInterest === t.title;
              return (
                <Reveal key={t.title} delay={idx * 0.05} className="h-full flex flex-col">
                  <div
                    onClick={() => setSelectedInterest(t.title)}
                    className={`p-7 rounded-2xl bg-[#090b10] border ${t.borderColor} ${
                      isSelected ? "ring-2 ring-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]" : ""
                    } transition-all duration-300 h-full flex flex-col justify-between group shadow-xl relative overflow-hidden flex-1 cursor-pointer`}
                  >
                    {/* Ambient top color accent */}
                    <div className={`absolute top-0 inset-x-0 h-[2px] ${t.accentBar} opacity-85 group-hover:h-1 group-hover:opacity-100 transition-all`} />
                    <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-b ${t.glowBg} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className={`w-12 h-12 rounded-xl border ${t.badge} flex items-center justify-center mb-6 ${t.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp size={22} />
                      </div>
                      <h3 className={`text-xl font-bold ${t.color} mb-2 uppercase tracking-tight`}>{t.title}</h3>
                      <p className="text-xs font-mono uppercase tracking-wider mb-3 !text-white/80 font-medium">{t.subtitle}</p>
                      <p className="text-sm !text-zinc-200 leading-relaxed font-normal flex-1">{t.copy}</p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                      <button
                        type="button"
                        className="inline-flex items-center justify-between w-full text-xs font-semibold !text-white hover:!text-cyan-300 uppercase tracking-wider transition-colors group/cta cursor-pointer"
                      >
                        <span className="!text-white group-hover/cta:underline">{t.cta}</span>
                        <FiArrowRight className={`w-4 h-4 ${t.color} transition-transform group-hover/cta:translate-x-1.5`} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — CONTACT FORM & DIRECT INFO */}
      <section className="py-28 bg-white relative">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 font-semibold">Direct Communication</div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight pt-2 text-black">
                  Let&apos;s Build What Moves Next.
                </h2>
                <p className="text-sm text-black/70 leading-relaxed pt-2">
                  Our engineering and enterprise teams operate from Hyderabad, India, working with transport networks and media ecosystems nationwide.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4 pt-4 border-t border-black/10 text-sm text-black/80 font-medium">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-black/[0.04] border border-black/10 flex items-center justify-center text-cyan-600 shrink-0">
                      <FiMail className="w-4 h-4" />
                    </div>
                    <span>{site.email}</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-black/[0.04] border border-black/10 flex items-center justify-center text-indigo-600 shrink-0">
                      <FiPhone className="w-4 h-4" />
                    </div>
                    <span>{site.phone}</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-black/[0.04] border border-black/10 flex items-center justify-center text-purple-600 shrink-0">
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
                <div className="p-8 sm:p-10 rounded-3xl bg-black/[0.02] border border-black/10 shadow-lg">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <FiCheckCircle className="w-12 h-12 text-cyan-600 mx-auto" />
                      <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Enquiry Received</h3>
                      <p className="text-sm text-black/60 max-w-md mx-auto">
                        Thank you for reaching out to VMOVEXA. Our team will review your enquiry and get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-black">Let&apos;s Talk</h3>
                        <p className="text-xs text-black/50 font-mono">Fill in your details and we will direct your enquiry to the right group.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-black/70 uppercase tracking-wider block font-medium">Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-black placeholder-black/35 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-sm"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-black/70 uppercase tracking-wider block font-medium">Company *</label>
                          <input
                            required
                            type="text"
                            placeholder="Enterprise / Fleet / Agency"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-black placeholder-black/35 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-black/70 uppercase tracking-wider block font-medium">Work Email *</label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-black placeholder-black/35 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-sm"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-black/70 uppercase tracking-wider block font-medium">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-black placeholder-black/35 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Interest Selector */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-black/70 uppercase tracking-wider block font-medium">I&apos;m Interested In:</label>
                        <div className="flex flex-wrap gap-2">
                          {interestOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSelectedInterest(opt)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                                selectedInterest === opt
                                  ? "bg-black !text-white font-semibold shadow-md border border-black"
                                  : "bg-white border border-black/15 text-black/70 hover:bg-black/[0.04] hover:text-black shadow-sm"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-black/70 uppercase tracking-wider block font-medium">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your fleet, requirements, or partnership proposal..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-black placeholder-black/35 text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none shadow-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-black !text-white font-semibold text-xs uppercase tracking-widest hover:bg-zinc-900 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.15)] cursor-pointer group"
                      >
                        <span className="!text-white">Send Enquiry</span>
                        <FiSend size={14} className="!text-white group-hover:translate-x-1 transition-transform" />
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
