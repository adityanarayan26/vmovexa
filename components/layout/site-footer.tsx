"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const footerNavigation = {
  platform: [
    { label: "VMOVEXA ONE", href: "/platform#vmovexa-one" },
    { label: "VMOVEXA CORE", href: "/platform#vmovexa-core" },
    { label: "Mobility Intelligence", href: "/platform" },
    { label: "Cloud + Edge", href: "/platform#cloud-to-edge" },
  ],
  technology: [
    { label: "Architecture", href: "/technology#disciplines" },
    { label: "Edge Computing", href: "/technology#edge" },
    { label: "Connected Vehicles", href: "/technology" },
    { label: "GPS & Geofencing", href: "/technology#gps" },
    { label: "Telemetry", href: "/technology#telemetry" },
    { label: "Data Infrastructure", href: "/technology#security" },
  ],
  solutions: [
    { label: "Fleet Operators", href: "/solutions#fleet-operators" },
    { label: "Mobility Media", href: "/solutions#mobility-media" },
    { label: "Smart Cities", href: "/solutions#smart-cities" },
    { label: "Enterprise Mobility", href: "/solutions#enterprise-mobility" },
  ],
  industries: [
    { label: "Public Transport", href: "/industries#public-transport" },
    { label: "Private Fleets", href: "/industries#private-fleets" },
    { label: "Airport Mobility", href: "/industries#airport-mobility" },
    { label: "Electric Mobility", href: "/industries#electric-mobility" },
    { label: "Tourism", href: "/industries#tourism" },
    { label: "Logistics", href: "/industries#logistics" },
  ],
  company: [
    { label: "About", href: "/company#vision" },
    { label: "Deep Tech", href: "/company#thesis" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Partners", href: "/company#partners" },
    { label: "Investors", href: "/company#investors" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: "/images/social/linkedin.png", href: "https://www.linkedin.com/company/vmovexa" },
  { name: "Instagram", icon: "/images/social/instagram.png", href: "https://www.instagram.com/vmovexa" },
  { name: "Facebook", icon: "/images/social/facebook.png", href: "https://www.facebook.com/vmovexa" },
  { name: "X", icon: "/images/social/twitter.png", href: "https://x.com/vmovexa" },
  { name: "YouTube", icon: "/images/social/youtube.png", href: "https://www.youtube.com/@vmovexa" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Main Footer Grid: Brand & CTAs (Left 4 cols) + Navigation (Right 8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          {/* Brand Info & Action CTAs */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/logos/vmovexa-vertical.svg"
                alt="VMOVEXA"
                width={280}
                height={155}
                className="w-60 sm:w-64 md:w-72 h-auto brightness-110 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            <div className="space-y-1.5">
              <div className="font-mono text-[11px] tracking-widest text-cyan-400 uppercase font-semibold">
                INTELLIGENCE IN MOTION.
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm">
                Cloud-to-Edge Mobility Intelligence Platform connecting vehicles, edge computing, digital displays, and urban intelligence layers.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="https://wa.me/919999999999?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20VMOVEXA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-medium text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all hover:scale-[1.02]"
              >
                <span>WhatsApp</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/docs/VMOVEXA-Brochure.pdf"
                download="VMOVEXA-Brochure.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-medium text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all hover:scale-[1.02]"
              >
                <span>Brochure</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-sm"
              >
                <span>Initiate Deployment</span>
                <FiArrowUpRight className="w-3.5 h-3.5 text-black" />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="pt-1">
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2.5">
                Follow VMOVEXA
              </div>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 hover:bg-white/[0.1] hover:border-cyan-400/50 hover:scale-110 transition-all shadow-sm group"
                  >
                    <Image
                      src={s.icon}
                      alt={s.name}
                      width={18}
                      height={18}
                      className="object-contain filter group-hover:brightness-125 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Columns (Right 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 text-sm">
            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-cyan-400 mb-3.5 font-semibold">
                Platform
              </div>
              <ul className="space-y-2">
                {footerNavigation.platform.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors block text-xs tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-indigo-400 mb-3.5 font-semibold">
                Technology
              </div>
              <ul className="space-y-2">
                {footerNavigation.technology.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors block text-xs tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-purple-400 mb-3.5 font-semibold">
                Solutions
              </div>
              <ul className="space-y-2">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors block text-xs tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-pink-400 mb-3.5 font-semibold">
                Industries
              </div>
              <ul className="space-y-2">
                {footerNavigation.industries.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors block text-xs tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-emerald-400 mb-3.5 font-semibold">
                Company
              </div>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-white transition-colors block text-xs tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <div>
            © {new Date().getFullYear()} VMOVEXA. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/faq" className="hover:text-cyan-400 transition-colors">
              FAQ
            </Link>
            <Link href="/careers" className="hover:text-cyan-400 transition-colors">
              Careers
            </Link>
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy#terms" className="hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy#cookies" className="hover:text-white/80 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
