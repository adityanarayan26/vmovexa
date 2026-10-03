"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiCheck } from "react-icons/fi";
import { RiBuilding4Line, RiMegaphoneLine, RiCpuLine, RiFundsLine } from "react-icons/ri";
import { Reveal } from "@/components/animations/reveal";
import { CubertoLines } from "@/components/animations/cuberto-text-reveal";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { GridWaveBackground } from "@/components/visuals/grid-wave-background";
import { site } from "@/lib/site";

export default function ContactPage() {
  const [selectedInterest, setSelectedInterest] = useState<string>("Fleet Technology");
  const [submitted, setSubmitted] = useState(false);

  const tracks = [
    {
      title: "Enterprise & Fleet",
      category: "FLEET INFRASTRUCTURE",
      subtitle: "Deploy Connected Transit",
      formOption: "Fleet Technology",
      copy: "Talk to our engineering and solutions team about fleet technology, CAD/AVL integration, and platform deployment.",
      features: ["CAD/AVL Telemetry", "Depot Operations", "Edge Hardware"],
      icon: RiBuilding4Line,
      cta: "Talk to Fleet Solutions",
      accentDot: "bg-cyan-500",
      accentText: "text-cyan-700",
      accentBg: "bg-cyan-50",
      accentBorder: "border-cyan-200/80",
      iconColor: "text-cyan-600",
      badgeBg: "bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-blue-500/10",
      badgeBorder: "border-cyan-200/80 shadow-[0_4px_16px_rgba(6,182,212,0.12)]",
      gradientBar: "from-cyan-400 via-blue-500 to-indigo-500",
      glowBg: "from-cyan-500/20 via-blue-500/5 to-transparent",
      ringActive: "border-cyan-400 ring-2 ring-cyan-400/40 shadow-[0_16px_40px_rgba(6,182,212,0.16)]",
      ringHover: "hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/40 hover:shadow-[0_16px_40px_rgba(6,182,212,0.16)]",
    },
    {
      title: "Media & Brands",
      category: "DOOH ECOSYSTEM",
      subtitle: "Build Media That Moves",
      formOption: "Mobility Media",
      copy: "Explore connected vehicle media, programmatic DOOH inventory, hyper-targeted campaigns, and digital mobility infrastructure.",
      features: ["Programmatic DOOH", "Real-Time Geo Sync", "Proof-of-Play"],
      icon: RiMegaphoneLine,
      cta: "Talk to Media",
      accentDot: "bg-pink-500",
      accentText: "text-pink-700",
      accentBg: "bg-pink-50",
      accentBorder: "border-pink-200/80",
      iconColor: "text-pink-600",
      badgeBg: "bg-gradient-to-br from-pink-500/10 via-pink-500/5 to-rose-500/10",
      badgeBorder: "border-pink-200/80 shadow-[0_4px_16px_rgba(236,72,153,0.12)]",
      gradientBar: "from-pink-400 via-rose-500 to-purple-500",
      glowBg: "from-pink-500/20 via-rose-500/5 to-transparent",
      ringActive: "border-pink-400 ring-2 ring-pink-400/40 shadow-[0_16px_40px_rgba(236,72,153,0.16)]",
      ringHover: "hover:border-pink-400 hover:ring-2 hover:ring-pink-400/40 hover:shadow-[0_16px_40px_rgba(236,72,153,0.16)]",
    },
    {
      title: "Technology Partners",
      category: "SYSTEM INTEGRATION",
      subtitle: "Build the Ecosystem",
      formOption: "Technology Partnership",
      copy: "Explore integration, telematics hardware modules, connectivity SDKs, mapping layers, and joint technology partnerships.",
      features: ["Unified SDKs & APIs", "Edge Telematics", "Custom Mapping"],
      icon: RiCpuLine,
      cta: "Partner With VMOVEXA",
      accentDot: "bg-indigo-500",
      accentText: "text-indigo-700",
      accentBg: "bg-indigo-50",
      accentBorder: "border-indigo-200/80",
      iconColor: "text-indigo-600",
      badgeBg: "bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-violet-500/10",
      badgeBorder: "border-indigo-200/80 shadow-[0_4px_16px_rgba(99,102,241,0.12)]",
      gradientBar: "from-indigo-400 via-purple-500 to-pink-500",
      glowBg: "from-indigo-500/20 via-purple-500/5 to-transparent",
      ringActive: "border-indigo-400 ring-2 ring-indigo-400/40 shadow-[0_16px_40px_rgba(99,102,241,0.16)]",
      ringHover: "hover:border-indigo-400 hover:ring-2 hover:ring-indigo-400/40 hover:shadow-[0_16px_40px_rgba(99,102,241,0.16)]",
    },
    {
      title: "Investors",
      category: "CAPITAL & SCALE",
      subtitle: "Explore Platform Thesis",
      formOption: "Investment",
      copy: "Discuss the mobility intelligence thesis, cloud-to-edge architecture, recurring enterprise economics, and long-term expansion.",
      features: ["Platform Thesis", "TAM Economics", "Series Expansion"],
      icon: RiFundsLine,
      cta: "Investor Enquiries",
      accentDot: "bg-emerald-500",
      accentText: "text-emerald-700",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-200/80",
      iconColor: "text-emerald-600",
      badgeBg: "bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-teal-500/10",
      badgeBorder: "border-emerald-200/80 shadow-[0_4px_16px_rgba(16,185,129,0.12)]",
      gradientBar: "from-emerald-400 via-teal-500 to-cyan-500",
      glowBg: "from-emerald-500/20 via-teal-500/5 to-transparent",
      ringActive: "border-emerald-400 ring-2 ring-emerald-400/40 shadow-[0_16px_40px_rgba(16,185,129,0.16)]",
      ringHover: "hover:border-emerald-400 hover:ring-2 hover:ring-emerald-400/40 hover:shadow-[0_16px_40px_rgba(16,185,129,0.16)]",
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'), // We'll split the full name or just use full name as firstName
      workEmail: formData.get('workEmail'),
      phone: formData.get('phone'),
      companyName: formData.get('companyName'),
      interest: selectedInterest,
      message: formData.get('message')
    };
    
    // Split full name if provided in a single field
    const fullName = formData.get('fullName') as string;
    if (fullName) {
      const parts = fullName.split(' ');
      data.firstName = parts[0];
      data.lastName = parts.slice(1).join(' ') || '-';
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectTrack = (formOption: string) => {
    setSelectedInterest(formOption);

    const formEl = document.getElementById("contact-form");
    if (formEl) {
      const headerOffset = 80;
      const targetY = formEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-black">
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
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[0.98] sm:leading-[1.02] max-w-4xl mb-6 text-white"
            delay={0.1}
            lines={[
              "Connect With",
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
      <section className="py-24 sm:py-28 bg-[#fafaff] relative overflow-hidden">
        <GridWaveBackground variant="cyan" />
        {/* Multi-layered Ambient Background Glow & Cyber-Grid Mask */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[360px] bg-cyan-400/8 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[550px] h-[360px] bg-purple-400/8 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-400/6 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <Reveal>
              <div 
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.15] border border-zinc-200/70 text-zinc-700 font-mono text-[11px] uppercase tracking-[0.2em] mb-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] backdrop-blur-[2px]"
                style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-cyan-500 to-indigo-500" />
                </span>
                <span className="font-semibold">Collaborative Tracks // 01—04</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 tracking-tight leading-[1.15] ">
                Choose Your <span className="gradient-text">Collaboration Track.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-zinc-500 mt-3.5 max-w-xl mx-auto font-normal leading-relaxed">
                Direct routing to specialized engineering, programmatic DOOH media, partner integrations, or capital desks.
              </p>
            </Reveal>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tracks.map((t, idx) => {
              const IconComp = t.icon;
              const isSelected = selectedInterest === t.formOption || selectedInterest === t.title;
              return (
                <Reveal key={t.title} delay={idx * 0.08} className="h-full flex flex-col">
                  <TiltCard maxTilt={5} glare={false} className="h-full flex flex-col">
                    <div
                      onClick={() => handleSelectTrack(t.formOption)}
                      className={`p-7 sm:p-8 rounded-[28px] bg-white/[0.12] hover:bg-white/[0.28] backdrop-blur-[2px] border ${
                        isSelected
                          ? t.ringActive
                          : `border-zinc-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.02)] ${t.ringHover}`
                      } transition-all duration-500 h-full flex flex-col justify-between group relative overflow-hidden flex-1 cursor-pointer hover:-translate-y-2`}
                      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
                    >
                      {/* Top Luminous Light Bar */}
                      <div className={`absolute top-0 inset-x-0 h-[3.5px] bg-gradient-to-r ${t.gradientBar} transition-all duration-500 group-hover:h-[5px]`} />
                      
                      {/* Soft Ambient Radial Corner Flare */}
                      <div className={`absolute -top-14 -right-14 w-40 h-40 bg-gradient-to-br ${t.glowBg} rounded-full blur-3xl opacity-0 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none`} />

                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Top Meta: Icon + Track Number */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${t.badgeBg} border ${t.badgeBorder} flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-sm`}>
                            <IconComp size={24} className={t.iconColor} />
                          </div>
                          
                          <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase bg-zinc-50 px-2.5 py-1 rounded-full border border-zinc-200/80 font-semibold text-zinc-500 shadow-2xs">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${t.accentDot} opacity-60`} />
                              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${t.accentDot}`} />
                            </span>
                            <span>TRACK 0{idx + 1}</span>
                          </div>
                        </div>

                        {/* Category & Title */}
                        <div className="mb-1">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
                            {t.category}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-zinc-900 group-hover:text-black mb-2  tracking-tight transition-colors">
                          {t.title}
                        </h3>

                        {/* Subtitle Pill */}
                        <div className="mb-3.5">
                          <span className={`inline-flex items-center text-[10.5px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${t.accentBg} ${t.accentText} border ${t.accentBorder}`}>
                            {t.subtitle}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal mb-5 flex-1">
                          {t.copy}
                        </p>

                        {/* Capability Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {t.features.map((feat) => (
                            <span
                              key={feat}
                              className="text-[10px] font-mono text-zinc-600 bg-zinc-50 border border-zinc-200/70 rounded-md px-2 py-0.5 flex items-center gap-1.5 group-hover:border-zinc-300 transition-colors"
                            >
                              <span className={`w-1 h-1 rounded-full ${t.accentDot} opacity-70`} />
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Action */}
                      <div className="pt-4 mt-auto border-t border-zinc-100 relative z-10 flex items-center justify-between group/cta">
                        <span className="text-[11px] font-semibold text-zinc-800 tracking-wider uppercase group-hover/cta:text-black transition-colors">
                          {isSelected ? "Track Selected" : t.cta}
                        </span>
                        <div className={`w-8 h-8 rounded-full ${isSelected ? "bg-zinc-900 text-white border-zinc-900" : "bg-zinc-50 border-zinc-200/80 text-zinc-700"} border flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 group-hover:scale-110 shadow-xs`}>
                          {isSelected ? (
                            <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                          )}
                        </div>
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
      <section id="contact-form" className="py-24 bg-black relative scroll-mt-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">Direct Communication</div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight  leading-tight pt-2 text-white">
                  Let&apos;s Build <span className="gradient-text">What Moves Next.</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed pt-2">
                  Our engineering and enterprise teams operate from Hyderabad, India, working with transport networks and media ecosystems nationwide.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-3.5 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/80 font-medium">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                      <FiMail className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <span>{site.email}</span>
                      <span>support@vmovexa.com</span>
                      <span>hr@vmovexa.com</span>
                      <span>business@vmovexa.com</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                      <FiPhone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <span>{site.phone}</span>
                      <span>+91 93903 93994</span>
                    </div>
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
                    href="https://wa.me/919390393994?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20VMOVEXA."
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
                      <h3 className="text-xl font-bold text-white  tracking-tight">Enquiry Received</h3>
                      <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto">
                        Thank you for reaching out to VMOVEXA. Our team will review your enquiry and get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-bold  tracking-tight mb-1 text-white">Let&apos;s Talk</h3>
                        <p className="text-xs text-white/50 font-mono">Fill in your details and we will direct your enquiry to the right group.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Full Name *</label>
                          <input
                            name="fullName"
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Company *</label>
                          <input
                            name="companyName"
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
                            name="workEmail"
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono text-white/70 uppercase tracking-wider block font-medium">Phone Number</label>
                          <input
                            name="phone"
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
                          name="message"
                          rows={4}
                          placeholder="Tell us about your fleet, requirements, or partnership proposal..."
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                        {!isSubmitting && <FiSend size={14} className="group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </form>
                  )}

                  {/* Submission Form Footer: Copyright & Social Icons */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="font-mono text-[11px] text-white/50 tracking-wider">
                      Copyright © 2026 VMOVEXA Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2.5">
                      {[
                        { name: "LinkedIn", icon: "/images/social/linkedin.png", href: "https://www.linkedin.com/company/vmovexa" },
                        { name: "X", icon: "/images/social/twitter.png", href: "https://x.com/vmovexa" },
                        { name: "Instagram", icon: "/images/social/instagram.png", href: "https://www.instagram.com/vmovexa" },
                        { name: "Facebook", icon: "/images/social/facebook.png", href: "https://www.facebook.com/vmovexa" },
                        { name: "YouTube", icon: "/images/social/youtube.png", href: "https://www.youtube.com/@vmovexa" },
                      ].map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 hover:bg-white/10 hover:border-cyan-400/50 hover:scale-110 transition-all duration-200"
                          title={s.name}
                        >
                          <Image src={s.icon} alt={s.name} width={16} height={16} className="w-full h-full object-contain opacity-75 hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}
