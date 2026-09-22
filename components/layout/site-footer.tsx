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
    { label: "Partners", href: "/company#partners" },
    { label: "Investors", href: "/company#investors" },
    { label: "Careers", href: "/company#careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white pt-16 pb-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Brand Core Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-4 max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/vmovexa-vertical.svg"
                alt="VMOVEXA"
                width={180}
                height={100}
                className="h-24 w-auto brightness-110 object-contain drop-shadow-2xl"
              />
            </Link>
            <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              INTELLIGENCE IN MOTION.
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Cloud-to-Edge Mobility Intelligence Platform connecting vehicles, edge computing, digital displays, and urban intelligence layers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all group"
            >
              <span>Initiate Deployment</span>
              <FiArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Minimal Link Columns (Chapter 17 Specification) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12 text-sm">
          <div>
            <div className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4">
              Platform
            </div>
            <ul className="space-y-2.5">
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
            <div className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4">
              Technology
            </div>
            <ul className="space-y-2.5">
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
            <div className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4">
              Solutions
            </div>
            <ul className="space-y-2.5">
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
            <div className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4">
              Industries
            </div>
            <ul className="space-y-2.5">
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
            <div className="font-mono text-xs tracking-wider uppercase text-white/40 mb-4">
              Company
            </div>
            <ul className="space-y-2.5">
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

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <div>
            © {new Date().getFullYear()} VMOVEXA. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
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
