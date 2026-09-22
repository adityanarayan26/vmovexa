import type { Metadata } from "next";
import Link from "next/link";
import { FiShield, FiLock, FiFileText, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | VMOVEXA",
  description: "VMOVEXA privacy notice, telemetry data governance, and terms of platform use.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <FiShield className="w-3.5 h-3.5" />
            <span>Governance & Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Privacy Policy &amp; Terms of Use
          </h1>
          <p className="text-white/50 text-base max-w-2xl font-light">
            How VMOVEXA handles cloud orchestration, edge telemetry, location coordinates, and operational mobility data.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-sm text-white/70 leading-relaxed font-light">
          {/* Section 1 */}
          <section className="p-8 rounded-2xl border border-white/10 bg-[#020610] space-y-4">
            <div className="flex items-center gap-3 text-white font-medium text-lg">
              <FiLock className="w-5 h-5 text-cyan-400" />
              <h2>1. Platform Telemetry &amp; Edge Processing</h2>
            </div>
            <p>
              VMOVEXA operates a Cloud-to-Edge mobility architecture. On-vehicle telemetry data—including GPS coordinates, vehicle operational states, screen status, and device diagnostics—is processed locally on edge nodes (VMOVEXA CORE) before encrypted transmission to VMOVEXA ONE cloud infrastructure.
            </p>
            <p>
              No personal passenger identity information or biometric data is captured or stored on vehicle edge nodes during standard transit operations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-8 rounded-2xl border border-white/10 bg-[#020610] space-y-4">
            <div className="flex items-center gap-3 text-white font-medium text-lg">
              <FiFileText className="w-5 h-5 text-indigo-400" />
              <h2>2. Digital Media Verification &amp; Proof of Play</h2>
            </div>
            <p>
              Campaign delivery logs and impressions are recorded using cryptographic timestamps matched to geographical geofences and operational runtimes. This verification confirms ad delivery without aggregating user-specific personal profiles.
            </p>
          </section>

          {/* Section 3 */}
          <section id="terms" className="p-8 rounded-2xl border border-white/10 bg-[#020610] space-y-4">
            <div className="flex items-center gap-3 text-white font-medium text-lg">
              <FiCheckCircle className="w-5 h-5 text-emerald-400" />
              <h2>3. Enterprise Access &amp; Fleet Governance</h2>
            </div>
            <p>
              Access to VMOVEXA ONE is restricted to authorized fleet operators, enterprise mobility managers, and accredited media partners. Role-based access control (RBAC), multi-factor authentication, and end-to-end encrypted tunnels are enforced across all cloud endpoints.
            </p>
          </section>

          {/* Contact */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
            <div>
              Last revised: September 2026. For privacy inquiries: privacy@vmovexa.com
            </div>
            <Link
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Contact Legal &amp; Compliance Team →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
