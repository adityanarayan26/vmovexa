"use client";

import { motion } from "framer-motion";
import { FiAward, FiFileText, FiShield, FiLock, FiCheckCircle } from "react-icons/fi";

const certifications = [
  {
    title: "ISO 27001",
    subtitle: "Information Security",
    icon: FiLock,
    color: "from-cyan-50 to-white",
    border: "border-cyan-200",
    glow: "shadow-sm",
    iconColor: "text-cyan-600",
  },
  {
    title: "Automotive Grade",
    subtitle: "Linux Compliant",
    icon: FiShield,
    color: "from-indigo-50 to-white",
    border: "border-indigo-200",
    glow: "shadow-sm",
    iconColor: "text-indigo-600",
  },
  {
    title: "SOC 2 Type II",
    subtitle: "Data Privacy",
    icon: FiCheckCircle,
    color: "from-emerald-50 to-white",
    border: "border-emerald-200",
    glow: "shadow-sm",
    iconColor: "text-emerald-600",
  },
];

const patents = [
  {
    id: "US-2026-A1",
    title: "Dynamic Edge-Caching for Mobile Advertising Networks",
    status: "Pending",
    desc: "Method for zero-loss media caching and synchronized playback across transit vehicles during network dropouts.",
  },
  {
    id: "US-2025-B2",
    title: "Low-Latency Geofence Triggering in High-Velocity Contexts",
    status: "Granted",
    desc: "Architecture for executing hyper-local digital events based on high-speed telemetry prediction.",
  },
  {
    id: "EU-2025-C1",
    title: "Multi-Zone Vehicle Screen Orchestration Protocol",
    status: "Granted",
    desc: "System for independent, mirrored, or continuous display mapping across disparate vehicle screens.",
  },
];

export function PatentsAndCerts() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-t border-zinc-200">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-cyan-100/50 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-mono text-cyan-600 mb-6 shadow-sm"
          >
            <FiAward />
            <span>STANDARDS & IP</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg font-light leading-relaxed"
          >
            Our core technologies are protected by international patents and built to the highest enterprise standards of security, privacy, and automotive compliance.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Certifications (Left Column) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold text-zinc-900 mb-8 flex items-center gap-2">
              <FiShield className="text-cyan-600" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.border} ${cert.glow} flex items-center gap-5`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center shrink-0">
                    <cert.icon className={`w-5 h-5 ${cert.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-zinc-500 mb-1">{cert.subtitle}</div>
                    <div className="text-lg font-bold text-zinc-900 tracking-wide">{cert.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Patents (Right Column) */}
          <div className="lg:col-span-8">
            <h3 className="text-xl font-semibold text-zinc-900 mb-8 flex items-center gap-2">
              <FiFileText className="text-indigo-600" />
              Core Patents
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {patents.map((patent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-cyan-500/30 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="font-mono text-xs text-cyan-700 px-2 py-1 rounded bg-cyan-50 border border-cyan-200">
                      {patent.id}
                    </div>
                    <div className={`text-xs font-semibold px-2 py-1 rounded ${
                      patent.status === 'Granted' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {patent.status}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-zinc-900 mb-3 leading-snug group-hover:text-cyan-700 transition-colors">
                    {patent.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-light">
                    {patent.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
