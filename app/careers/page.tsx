"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiMapPin, FiCpu, FiCheck, FiSend, FiClock } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { Reveal } from "@/components/animations/reveal";
import { CubertoLines } from "@/components/animations/cuberto-text-reveal";
import { TextDecrypt } from "@/components/animations/text-decrypt";
import { BlurReveal } from "@/components/animations/blur-reveal";
import { TiltCard } from "@/components/animations/tilt-card";

interface Role {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  desc: string;
  skills: string[];
}

const openRoles: Role[] = [
  {
    id: "embedded-edge",
    title: "Senior Embedded / Edge Linux Engineer",
    team: "Edge Runtime Systems",
    location: "Hyderabad, India / Hybrid",
    type: "Full-Time",
    desc: "Architect and optimize the VMOVEXA CORE in-vehicle edge computing runtime. You will work on hardware acceleration for display playback, high-precision GPS dead-reckoning, offline storage sync, and secure Over-The-Air updates.",
    skills: ["C++", "Rust", "Embedded Linux", "GStreamer / OpenGL", "CAN-bus / OBD-II", "OTA Systems"],
  },
  {
    id: "cloud-platform",
    title: "Staff Cloud Platform Engineer",
    team: "Centralized Orchestration",
    location: "Hyderabad, India / Remote",
    type: "Full-Time",
    desc: "Scale the VMOVEXA ONE cloud backend orchestrating fleets of moving assets. Build distributed event streaming systems, spatial geofencing query engines, and high-throughput real-time telemetry pipelines.",
    skills: ["Go / Golang", "Next.js", "PostgreSQL / PostGIS", "Kafka / MQTT", "Docker / K8s", "TypeScript"],
  },
  {
    id: "spatial-telemetry",
    title: "Spatial Data & Telemetry Engineer",
    team: "Mobility Intelligence",
    location: "Hyderabad, India / Hybrid",
    type: "Full-Time",
    desc: "Develop geospatial indexing algorithms, route-matching logic, and proof-of-play verification systems processing millions of daily touchpoints from transit networks across metropolitan hubs.",
    skills: ["Python", "Spatial GIS", "Time-Series DB", "GNSS / GPS Processing", "Data Pipelines"],
  },
  {
    id: "hardware-integration",
    title: "Automotive Hardware Integration Specialist",
    team: "Fleet Hardware & Displays",
    location: "Hyderabad, India",
    type: "Full-Time",
    desc: "Lead hardware integration across bus fleets, taxi networks, and charging hubs. Oversee edge device power stabilization (9V-36V automotive transient protection), display interfaces, and diagnostic sensors.",
    skills: ["Automotive Electrical", "PCB Diagnostics", "LVDS / HDMI Signage", "Field Integration", "Firmware QA"],
  },
  {
    id: "product-manager",
    title: "Technical Product Manager — Mobility DOOH & Fleet",
    team: "Product & Growth",
    location: "Hyderabad, India",
    type: "Full-Time",
    desc: "Bridge engineering capabilities with fleet operator and advertiser needs. Define roadmaps for programmatic media campaigns, geo-fenced broadcasting, and smart city emergency alert integrations.",
    skills: ["Product Strategy", "Transit Tech / DOOH", "API Design", "Data-Driven Roadmaps", "Stakeholder Management"],
  },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(openRoles[0]);
  const [applied, setApplied] = useState(false);

  const values = [
    {
      title: "Real Physical Impact",
      desc: "We write code that doesn't just live in browser tabs, but runs on thousands of physical buses navigating heavy metropolitan roads every second.",
    },
    {
      title: "Deep-Tech & Resilience",
      desc: "We build for edge autonomy and intermittent connectivity. Our systems are engineered to never fail even when cellular towers disappear.",
    },
    {
      title: "High Ownership & Speed",
      desc: "Small, autonomous engineering teams with massive leverage. You own features from low-level Linux daemon drivers to cloud dashboards.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-black">
        <div className="container relative z-10 max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/80">
                <TextDecrypt text="Join VMOVEXA • Careers" delay={150} />
              </span>
            </div>
          </Reveal>

          <CubertoLines
            as="h1"
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl mb-6 text-white uppercase"
            delay={0.1}
            lines={[
              "Build the Future of",
              <span key="sub" className="gradient-text">Connected Movement.</span>
            ]}
          />

          <BlurReveal delay={0.2} blurAmount={10}>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-3xl mb-8">
              Join our engineering, systems, and product teams solving cloud-to-edge mobility, embedded runtime computing, and massive urban scale.
            </p>
          </BlurReveal>

          {/* Quick Metrics */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-3xl">
              <div>
                <div className="text-2xl font-bold text-white font-mono"><TextDecrypt text="Multi-Fleet" delay={300} /></div>
                <div className="text-xs text-white/50 uppercase font-mono">Edge Network</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 font-mono"><TextDecrypt text="10M+" delay={450} /></div>
                <div className="text-xs text-white/50 uppercase font-mono">Daily Reach</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400 font-mono"><TextDecrypt text="Low-Latency" delay={600} /></div>
                <div className="text-xs text-white/50 uppercase font-mono">Edge Dispatch</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400 font-mono"><TextDecrypt text="100%" delay={750} /></div>
                <div className="text-xs text-white/50 uppercase font-mono">Offline Uptime</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — CORE CULTURE & VALUES */}
      <section className="py-20 bg-black">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
              Engineering Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
              Why Build with <span className="gradient-text">VMOVEXA?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <TiltCard key={i} maxTilt={8} glare={true} className="h-full">
                <div
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-cyan-400/30 hover:bg-white/[0.03] transition-all h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-normal">{v.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — OPEN ROLES & APPLICATION */}
      <section className="py-24 bg-black" id="open-positions">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                Open <span className="gradient-text">Engineering Roles</span>
              </h2>
            </div>
            <div className="text-xs font-mono text-white/50">
              Showing {openRoles.length} positions across Systems, Cloud & Product
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Roles List */}
            <div className="lg:col-span-6 space-y-4">
              {openRoles.map((role) => {
                const isSelected = selectedRole?.id === role.id;
                return (
                  <div
                    key={role.id}
                    onClick={() => {
                      setSelectedRole(role);
                      setApplied(false);
                    }}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white/[0.04] border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        : "bg-white/[0.015] border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase">
                        {role.team}
                      </span>
                      <span className="text-[11px] font-mono text-white/40 flex items-center gap-1">
                        <FiClock size={12} /> {role.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                      {role.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-white/50 font-mono mb-4">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={12} className="text-cyan-400" /> {role.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-white/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Role Detail & Apply Form */}
            <div className="lg:col-span-6 sticky top-28">
              {selectedRole ? (
                <div className="p-7 sm:p-8 rounded-3xl bg-[#080b12] border border-white/10 shadow-2xl space-y-6">
                  <div>
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                      {selectedRole.team} • {selectedRole.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      {selectedRole.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-white/50 mt-1">
                      <FiMapPin size={13} className="text-cyan-400" /> {selectedRole.location}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {selectedRole.desc}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Required Disciplines</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRole.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-4">
                    {applied ? (
                      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                        <FiCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                        <h4 className="text-base font-bold text-white uppercase">Application Forwarded</h4>
                        <p className="text-xs text-white/70 max-w-xs mx-auto">
                          Thank you! Our engineering talent team will review your profile and reach out within 48 hours.
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setApplied(true);
                        }}
                        className="space-y-4"
                      >
                        <h4 className="text-sm font-mono uppercase tracking-wider text-white">Fast-Track Application</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            required
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-cyan-400"
                          />
                          <input
                            required
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                        <input
                          required
                          type="url"
                          placeholder="GitHub / LinkedIn / Portfolio URL"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-cyan-400"
                        />
                        <textarea
                          rows={3}
                          placeholder="Briefly share what you built that you're most proud of..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-cyan-400 resize-none"
                        />

                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                          <span>Submit Application</span>
                          <FiSend size={13} />
                        </button>
                      </form>
                    )}

                    <div className="pt-2 text-center">
                      <span className="text-[11px] font-mono text-white/40">
                        Prefer direct contact? Email your CV to{" "}
                        <a href="mailto:careers@vmovexa.com" className="text-cyan-400 underline hover:text-white">
                          careers@vmovexa.com
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
