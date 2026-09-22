"use client";

import { useState } from "react";
import {
  Bus,
  Car,
  Plane,
  Briefcase,
  GraduationCap,
  Camera,
  BatteryCharging,
  Truck,
  Building2,
} from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

export function MobilityNetworkWorld() {
  const [activeSector, setActiveSector] = useState<number>(0);

  const sectors = [
    {
      id: 0,
      title: "Public Transport",
      tag: "MUNICIPAL TRANSIT // BUS & METRO FEEDERS",
      icon: Bus,
      networkRole: "High-density mass urban mobility along high-dwell arterial routes.",
      edgeConfig: "Curbside route displays, audio announcement triggers, automated stop verification.",
      telemetry: "Dwell times, schedule adherence, passenger load sensing, engine vitals.",
      accent: "var(--accent-cyan)",
    },
    {
      id: 1,
      title: "Private Fleets",
      tag: "COMMERCIAL RIDE-HAIL & TAXI NETWORKS",
      icon: Car,
      networkRole: "Distributed urban mobility navigating dynamic traffic flow 24/7.",
      edgeConfig: "Rooftop digital displays, passenger tablets, in-cabin USB telemetry hub.",
      telemetry: "Speed, high-frequency GPS, trip start/end timestamps, power draw.",
      accent: "var(--accent-indigo)",
    },
    {
      id: 2,
      title: "Airport Mobility",
      tag: "TERMINAL SHUTTLES & AIRSIDE TRANSIT",
      icon: Plane,
      networkRole: "High-net-worth passenger transit connecting terminals, parking, and luxury hotels.",
      edgeConfig: "Flight-synchronized displays, baggage claim updates, multilingual messaging.",
      telemetry: "Terminal loop adherence, flight arrival sync, beacon proximity.",
      accent: "var(--accent-purple)",
    },
    {
      id: 3,
      title: "Employee Transport",
      tag: "CORPORATE CAMPUS & WORKFORCE SHUTTLES",
      icon: Briefcase,
      networkRole: "Enterprise commuter corridors transporting corporate staff safely and punctually.",
      edgeConfig: "Corporate communications, schedule tracking, badge attendance confirmation.",
      telemetry: "Pickup adherence, route ETA accuracy, driver performance vitals.",
      accent: "var(--accent-magenta)",
    },
    {
      id: 4,
      title: "School Transport",
      tag: "INSTITUTIONAL BUSES & CAMPUS SHUTTLES",
      icon: GraduationCap,
      networkRole: "High-responsibility child transit requiring rigorous geo-tracking and alerts.",
      edgeConfig: "Strict safety telemetry, parent alert boundary triggers, speed monitoring.",
      telemetry: "Stop-gate sensor, door open/close events, geo-perimeter alarms.",
      accent: "var(--accent-cyan)",
    },
    {
      id: 5,
      title: "Tourism Mobility",
      tag: "HERITAGE BUSES & SCENIC TOUR FLEETS",
      icon: Camera,
      networkRole: "Experiential transit traversing historical landmarks, cultural zones, and resorts.",
      edgeConfig: "Location-triggered multilingual audio guides, dynamic landmark visuals.",
      telemetry: "Corridor dwell, tourist attraction proximity, POI collision logs.",
      accent: "var(--accent-indigo)",
    },
    {
      id: 6,
      title: "Electric Mobility",
      tag: "NEXT-GEN EV BUSES & ELECTRIC FLEETS",
      icon: BatteryCharging,
      networkRole: "Zero-emission commercial fleets with battery management and regenerative telemetry.",
      edgeConfig: "State-of-charge integration, smart charging-depot routing, thermal alarms.",
      telemetry: "Battery voltage, kWh consumption, regenerative braking, thermal profile.",
      accent: "var(--accent-purple)",
    },
    {
      id: 7,
      title: "Logistics & Cargo",
      tag: "URBAN FREIGHT & LAST-MILE DELIVERY",
      icon: Truck,
      networkRole: "Heavy and medium cargo vehicles moving between distribution centers and retail hubs.",
      edgeConfig: "Cargo door monitoring, route security geofences, cold-chain telemetry.",
      telemetry: "Cargo temperature, ignition state, idle fuel waste, route deviations.",
      accent: "var(--accent-magenta)",
    },
    {
      id: 8,
      title: "Smart Cities",
      tag: "MUNICIPAL SERVICES & EMERGENCY FLEETS",
      icon: Building2,
      networkRole: "Civic infrastructure vehicles acting as mobile environmental sensing and info stations.",
      edgeConfig: "City-wide civic broadcasting, emergency weather overrides, public health alerts.",
      telemetry: "Air quality sensing, road condition telemetry, spatial movement logs.",
      accent: "var(--accent-cyan)",
    },
  ];

  const current = sectors[activeSector];
  const CurrentIcon = current.icon;

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
      }}
    >
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}
        >
          MOBILITY WORLD MAP // 9 OPERATIONAL ENVIRONMENTS
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          One Unified Core. <span className="gradient-text">Nine Mobility Sectors.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          VMOVEXA does not change its architecture for each vehicle. The same cloud orchestration and edge runtime power everything from public buses to luxury airport loops and electric fleets.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        {/* Network Sector Selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeSector === idx;

            return (
              <button
                key={s.title}
                onClick={() => setActiveSector(idx)}
                type="button"
                style={{
                  borderRadius: "var(--radius-sm)",
                  border: `1px solid ${isSelected ? s.accent : "var(--border)"}`,
                  background: isSelected ? `${s.accent}18` : "rgba(0, 0, 0, 0.4)",
                  padding: "1rem 0.8rem",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? `0 0 20px ${s.accent}22` : "none",
                }}
              >
                <Icon size={20} color={isSelected ? s.accent : "var(--text-muted)"} />
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  }}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Deep-Dive Environment View */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: `1px solid ${current.accent}`,
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2.5rem 2rem",
            boxShadow: `0 0 35px ${current.accent}22`,
            minHeight: "360px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <EditorialTabTransition tabKey={activeSector}>
            <EditorialTabItem>
              <div
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.72rem",
                  color: current.accent,
                  letterSpacing: "0.12em",
                  marginBottom: "0.8rem",
                }}
              >
                {current.tag}
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.06}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "var(--gradient-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <CurrentIcon size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    {current.title}
                  </h4>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                    Active Transit Vertical
                  </div>
                </div>
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.12}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                {current.networkRole}
              </p>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.18}>
              <div style={{ display: "grid", gap: "0.75rem", background: "rgba(255, 255, 255, 0.02)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div>
                  <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>EDGE CONFIGURATION: </span>
                  <span style={{ fontSize: "0.86rem", color: "#ffffff" }}>{current.edgeConfig}</span>
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>TELEMETRY VECTORS: </span>
                  <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.82rem", color: current.accent }}>{current.telemetry}</span>
                </div>
              </div>
            </EditorialTabItem>
          </EditorialTabTransition>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            <span>CORE RUNTIME: VMOVEXA CORE</span>
            <span style={{ color: current.accent }}>READY FOR DEPLOYMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
