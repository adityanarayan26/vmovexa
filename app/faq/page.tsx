"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiArrowRight, FiSearch, FiHelpCircle, FiMessageSquare } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { Reveal } from "@/components/animations/reveal";

interface FAQItem {
  question: string;
  answer: string;
  category: "Platform" | "Hardware" | "Media" | "Smart Cities" | "Security";
}

const faqs: FAQItem[] = [
  {
    category: "Platform",
    question: "What is VMOVEXA and how does the architecture work?",
    answer:
      "VMOVEXA is a cloud-to-edge mobility intelligence platform that transforms moving vehicles into connected computing, telemetry, and digital media nodes. The platform follows a core principle: 'The cloud orchestrates. The edge executes.' Centralized servers manage fleets, campaigns, and geofences (VMOVEXA ONE), while in-vehicle edge devices execute real-time playback, GPS triggers, and sensor diagnostics locally (VMOVEXA CORE).",
  },
  {
    category: "Platform",
    question: "How does the system operate when vehicles lose cellular connectivity?",
    answer:
      "VMOVEXA CORE is architected around complete offline resilience. All media creatives, route schedules, geofences, and operational logic are cached locally on industrial-grade solid-state storage within the vehicle. If cellular coverage drops in tunnels, highways, or remote zones, the system continues full programmatic playback, positioning, and sensor logging without interruption, synchronizing state back to the cloud once network connectivity is restored.",
  },
  {
    category: "Hardware",
    question: "What hardware is installed inside each vehicle?",
    answer:
      "Vehicles are equipped with VMOVEXA CORE edge compute controllers featuring multi-core processing, dual-band GNSS GPS receivers with dead-reckoning support, eSIM cellular connectivity, vehicle power stabilization (9V–36V surge protection), and multi-display outputs (HDMI/LVDS) supporting independent, mirrored, or split-screen configurations.",
  },
  {
    category: "Hardware",
    question: "Can VMOVEXA integrate with existing third-party bus displays and CAD/AVL systems?",
    answer:
      "Yes. VMOVEXA is hardware-agnostic and supports industry-standard protocols including GTFS, GTFS-RT, CAN-bus / OBD-II telemetry, and HDMI/DVI digital signage displays. Our platform can either run on dedicated VMOVEXA edge units or integrate directly with existing transit telemetry units.",
  },
  {
    category: "Media",
    question: "How does location-triggered mobility media (DOOH) work?",
    answer:
      "Using high-frequency GPS positioning and spatial geofencing algorithms, VMOVEXA evaluates vehicle coordinates in sub-second intervals. When a vehicle enters a targeted polygon (such as an airport corridor, IT corridor, or commercial district), the edge runtime instantly switches playback to the location-specific campaign with verifiable cryptographic proof-of-play logs.",
  },
  {
    category: "Media",
    question: "How do advertisers receive proof-of-play and analytics?",
    answer:
      "Every ad impression generates a cryptographically signed event log recording exact GPS coordinates, timestamp, speed, route ID, display status, and dwell time. These telemetry logs are aggregated in VMOVEXA ONE, giving brands transparent, audit-ready performance dashboards with zero guesswork.",
  },
  {
    category: "Smart Cities",
    question: "How does the Emergency Operations & Broadcasting override function?",
    answer:
      "During municipal emergencies (such as flash floods, fires, seismic alerts, or Amber alerts), authorized civic agencies can dispatch high-priority override commands through VMOVEXA ONE. Within 250 milliseconds, target vehicle screens instantly transition from commercial media into emergency alerts with evacuation guidance and route advisories.",
  },
  {
    category: "Smart Cities",
    question: "Can municipal alerts be restricted to specific city wards or zones?",
    answer:
      "Yes. Broadcasters can target specific geographic boundaries (such as a 2km radius around a flash-flood or hazard zone). Only buses and vehicles operating within or approaching that perimeter display the alert, avoiding unnecessary panic across unaffected parts of the city.",
  },
  {
    category: "Security",
    question: "How is cloud-to-edge communication secured against cyber threats?",
    answer:
      "All communications utilize end-to-end TLS 1.3 encryption with mutual certificate authentication (mTLS). Edge devices run hardened operating system kernels with verified boot, encrypted local storage, and secure Over-The-Air (OTA) firmware signing to guarantee that unauthorized payloads cannot execute on in-vehicle screens.",
  },
  {
    category: "Security",
    question: "How are software and firmware updates managed across large fleets?",
    answer:
      "VMOVEXA features an automated A/B partition OTA update engine. Firmware and runtime patches are distributed silently in the background, verified for cryptographic checksums, and executed during vehicle off-hours with automatic rollback safeguards if anomalies are detected.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "Platform", "Hardware", "Media", "Smart Cities", "Security"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 01 — HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08] bg-black">
        <div className="container relative z-10 max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/80">
                Knowledge & Support
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-6 text-white uppercase">
              Frequently Asked <span className="gradient-text">Questions.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-3xl mb-8">
              Everything you need to know about VMOVEXA&apos;s cloud-to-edge mobility intelligence platform, vehicle hardware, digital DOOH media, and smart city infrastructure.
            </p>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={0.3}>
            <div className="relative max-w-xl">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., offline mode, hardware, emergency, GPS)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — CATEGORIES & ACCORDION */}
      <section className="py-20 border-b border-white/[0.08] bg-black">
        <div className="container max-w-5xl mx-auto px-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-white"
                    : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <FiHelpCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No matching questions found</h3>
                <p className="text-xs text-white/50 max-w-md mx-auto">
                  Try searching with different terms or reach out directly to our engineering team on WhatsApp.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white/[0.03] border-cyan-400/40 shadow-[0_4px_25px_rgba(6,182,212,0.1)]"
                        : "bg-white/[0.015] border-white/10 hover:border-white/20 hover:bg-white/[0.025]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-400 uppercase tracking-wider shrink-0">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70"
                      >
                        <FiChevronDown size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5 font-normal">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* 03 — STILL HAVE QUESTIONS CTA */}
      <section className="py-24 text-center relative overflow-hidden bg-black">
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                Still have questions about <span className="gradient-text">VMOVEXA?</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
                Our solutions engineering group is available to answer deep architectural questions, discuss fleet pilots, and provide live dashboard walkthroughs.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://wa.me/919999999999?text=Hello!%20I%20have%20questions%20about%20VMOVEXA%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono font-semibold uppercase tracking-wider transition-all hover:scale-105"
                >
                  <RiWhatsappLine size={16} />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <span>Contact Solutions Team</span>
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
