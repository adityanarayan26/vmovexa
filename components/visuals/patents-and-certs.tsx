"use client";

import { motion } from "framer-motion";
import { FiAward, FiFileText, FiShield, FiCheckCircle, FiTrendingUp, FiBox, FiCheck, FiClock } from "react-icons/fi";
import { BsRocket } from "react-icons/bs";

const certifications = [
  {
    title: "UDYAM-TS-02-0361288",
    subtitle: "MSME Certified",
    icon: FiTrendingUp,
    color: "from-cyan-50 to-white",
    border: "border-cyan-200",
    glow: "shadow-sm",
    iconColor: "text-cyan-600",
  },
  {
    title: "DIPP279277",
    subtitle: "DEEP-TECH Verified Startup",
    icon: BsRocket,
    color: "from-indigo-50 to-white",
    border: "border-indigo-200",
    glow: "shadow-sm",
    iconColor: "text-indigo-600",
  },
  {
    title: "Novelty & Industrial Applicability",
    subtitle: "FER Acceptance",
    desc: "Acceptance for novelty of technology and industrial applicability in the First Examination Report (FER).",
    icon: FiCheckCircle,
    color: "from-emerald-50 to-white",
    border: "border-emerald-200",
    glow: "shadow-sm",
    iconColor: "text-emerald-600",
  },
];

const patents = [
  {
    id: "IN-202641061322",
    title: "Vehicle-Integrated Digital Display System",
    status: "FER Acceptance",
    statusColor: "bg-orange-50 text-orange-700 border border-orange-200",
    idColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
    desc: "Application filed for a vehicle-integrated digital display system with edge computing, positioning, multi-surface displays, cloud connectivity, analytics and user interaction.",
    keyStatus: "Accepted for novelty of technology and industrial applicability in the FER.",
    keyStatusIcon: FiCheckCircle,
    keyStatusColor: "text-emerald-600",
    keyStatusBg: "bg-emerald-100",
  },
  {
    id: "PCT/IN2026/051194",
    title: "PCT International Application",
    status: "Under Review",
    statusColor: "bg-purple-50 text-purple-700 border border-purple-200",
    idColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
    desc: "Filed under the Patent Cooperation Treaty (PCT) for global protection of our core technology.",
    keyStatus: "Currently under review.",
    keyStatusIcon: FiClock,
    keyStatusColor: "text-purple-600",
    keyStatusBg: "bg-purple-100",
  },
];

const claimsLeft = [
  "a vehicle unit;",
  "an edge computing device configured to locally cache, adapt, and synchronize digital content;",
  "a positioning module configured to determine real-time location information associated with the vehicle unit;",
  "a plurality of display units disposed across multiple surfaces of the vehicle unit;"
];

const claimsRight = [
  "a communication interface configured to communicate with a cloud-based content management system;",
  "an analytics engine configured to process content playback data and interaction data;",
  "an interaction interface configured to receive user interaction inputs."
];

export function PatentsAndCerts() {
  return (
    <section className="pt-10 pb-24 relative overflow-hidden bg-white border-t border-zinc-200">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-cyan-100/50 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cyan-200 text-xs font-mono text-cyan-600 mb-6 shadow-sm"
          >
            <FiAward />
            <span>INTELLECTUAL PROPERTY & RECOGNITIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6"
          >
            Innovation <span className="gradient-text">Protected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Our technology is protected through patents and recognized by leading national programs, validating its novelty, industrial applicability and deep-tech impact.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Certifications (Left Column) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold text-zinc-900 mb-6 flex items-center gap-2">
              <FiShield className="text-cyan-600" />
              Certifications & Recognitions
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.border} ${cert.glow} flex flex-col justify-center min-h-[100px]`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center shrink-0">
                      <cert.icon className={`w-6 h-6 ${cert.iconColor}`} />
                    </div>
                    <div className="flex-1 mt-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">{cert.subtitle}</div>
                      <div className="text-[17px] font-bold text-zinc-900 tracking-wide leading-tight">{cert.title}</div>
                      {cert.desc && (
                        <p className="mt-3 text-xs text-zinc-600 leading-relaxed">{cert.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Patents (Right Column) */}
          <div className="lg:col-span-8 flex flex-col">
            <h3 className="text-xl font-semibold text-zinc-900 mb-6 flex items-center gap-2">
              <FiFileText className="text-indigo-600" />
              Core Patent Filings
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {patents.map((patent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-5">
                    <div className={`font-mono text-xs px-2.5 py-1 rounded border ${patent.idColor}`}>
                      {patent.id}
                    </div>
                    <div className={`text-xs font-semibold px-2.5 py-1 rounded ${patent.statusColor}`}>
                      {patent.status}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-zinc-900 mb-3 leading-snug">
                    {patent.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-light flex-1">
                    {patent.desc}
                  </p>
                  
                  <div className="w-full h-px bg-zinc-100 my-5" />
                  
                  <div className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${patent.keyStatusBg}`}>
                      <patent.keyStatusIcon className={`w-3.5 h-3.5 ${patent.keyStatusColor}`} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">Key Status</div>
                      <div className="text-xs text-zinc-700 leading-snug">{patent.keyStatus}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Wide Card - Patent Claims */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-7 rounded-2xl bg-[#F8FAFC] border border-zinc-200 shadow-sm mt-auto"
            >
              <h4 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center gap-2">
                <FiBox className="text-cyan-500" />
                Patent Claims
              </h4>
              <p className="text-sm font-medium text-zinc-800 mb-5">
                A vehicle-integrated digital display system comprising:
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="space-y-3">
                  {claimsLeft.map((claim, idx) => (
                    <div key={`left-${idx}`} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-cyan-600" />
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed flex-1">{claim}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {claimsRight.map((claim, idx) => (
                    <div key={`right-${idx}`} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-cyan-600" />
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed flex-1">{claim}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
