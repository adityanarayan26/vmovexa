"use client";

import { useState } from "react";
import {
  Plane,
  Building2,
  Trophy,
  Compass,
  Landmark,
  Camera,
} from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

export function VmovexaOneFlow() {
  const [activeZone, setActiveZone] = useState<string>("airport");
  const [activeStep, setActiveStep] = useState<number>(0);

  const hierarchyNodes = [
    { label: "Organization", sub: "Global Tenant & Governance", count: "1 Enterprise" },
    { label: "Fleet", sub: "Geographic Fleet Divisions", count: "12 Fleets" },
    { label: "Vehicle", sub: "Physical Mobility Assets", count: "250 Vehicles" },
    { label: "Device", sub: "VMOVEXA CORE Edge Nodes", count: "250 Compute Nodes" },
    { label: "Screen", sub: "Addressable Surface Inventory", count: "500 Displays" },
  ];

  const pipelineSteps = [
    { name: "CREATIVE", detail: "Dynamic video & static assets formatted to high-nit display specs." },
    { name: "CITY", detail: "Metropolitan zone selection and regional fleet availability checks." },
    { name: "ROUTE", detail: "Arterial transit routes, corridor prioritization, and traffic density." },
    { name: "VEHICLE", detail: "Automated routing to active operational EV and public transit fleets." },
    { name: "SCREEN", detail: "Targeting rooftop exterior displays vs in-cabin passenger screens." },
    { name: "DATE", detail: "Calendar pacing, event windows, and scheduled flight arrival matching." },
    { name: "TIME", detail: "Dayparting logic (morning peak commute, business hours, evening transit)." },
    { name: "GEO CONTEXT", detail: "High-precision polygonal geofence boundaries with sub-second collision." },
    { name: "APPROVAL", detail: "Real-time compliance checks and multi-tenant creative sign-off." },
    { name: "DISTRIBUTION", detail: "Encrypted delta dispatch directly to VMOVEXA CORE edge storage." },
    { name: "MEASUREMENT", detail: "Cryptographic proof-of-play, duration logs & telemetry verification." },
  ];

  const zones = [
    {
      id: "airport",
      name: "Airport Mobility Corridor",
      icon: Plane,
      geoLogic: "TRIGGER: International Terminal Inbound & Departure Arteries",
      context: "High-net-worth business travelers, incoming flights, premium hospitality, global telecom.",
      rules: "Activate flight-synced premium creative; suppress local retail; prioritize currency exchange & mobility transfers.",
      accent: "var(--accent-cyan)",
    },
    {
      id: "business",
      name: "Central Business District (CBD)",
      icon: Building2,
      geoLogic: "TRIGGER: Financial Tower Perimeter & Tech Parks",
      context: "Corporate executives, enterprise decision-makers, tech professionals, mid-day dining.",
      rules: "Target B2B SaaS, fintech, executive auto, and corporate banking between 08:30–19:30.",
      accent: "var(--accent-indigo)",
    },
    {
      id: "stadium",
      name: "Sports Arena & Stadium Zone",
      icon: Trophy,
      geoLogic: "TRIGGER: Arena Radius (Within 1.5km during event hours)",
      context: "Mass sports audiences, live entertainment attendees, high emotional energy.",
      rules: "Trigger dynamic sponsor content, sports merchandise, quick-service delivery & beverage campaigns.",
      accent: "var(--accent-purple)",
    },
    {
      id: "corridor",
      name: "High-Density Transit Corridor",
      icon: Compass,
      geoLogic: "TRIGGER: Metro Ring Road & Expressways",
      context: "Heavy daily commuters, dual-direction traffic flow, high dwell at intersections.",
      rules: "High-contrast bold visual messaging optimized for rapid vehicular viewing and commuter engagement.",
      accent: "var(--accent-magenta)",
    },
    {
      id: "centre",
      name: "Historic City Centre",
      icon: Landmark,
      geoLogic: "TRIGGER: Pedestrian Plazas & Commercial Hubs",
      context: "Urban shoppers, lifestyle consumers, high pedestrian density at low vehicular speeds.",
      rules: "Lifestyle, consumer fashion, retail flash-offers, and immediate footfall directional prompts.",
      accent: "var(--accent-cyan)",
    },
    {
      id: "tourism",
      name: "Tourism & Heritage District",
      icon: Camera,
      geoLogic: "TRIGGER: Heritage Sites & Cultural Venues",
      context: "Domestic & international tourists, leisure travelers, weekend footfall.",
      rules: "Multilingual cultural guides, hotel promotions, experiential entertainment, and local artisanal showcases.",
      accent: "var(--accent-indigo)",
    },
  ];

  const activeZoneData = zones.find((z) => z.id === activeZone) || zones[0];
  const ActiveZoneIcon = activeZoneData.icon;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      {/* 1. Network Hierarchy Visualization */}
      <div
        style={{
          borderRadius: "var(--radius)",
          border: "1px solid var(--border-bright)",
          background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
          padding: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            VMOVEXA ONE // TOPOLOGY MODEL
          </div>
          <h3
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.8rem",
            }}
          >
            End-to-End <span className="gradient-text">Network Hierarchy.</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
            VMOVEXA ONE structures thousands of distributed transit elements into a deterministic, multi-tenant hierarchy.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            position: "relative",
          }}
        >
          {hierarchyNodes.map((node, idx) => (
            <div
              key={node.label}
              style={{
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border)",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "150px",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.7rem",
                    color: "var(--accent-cyan)",
                    marginBottom: "0.4rem",
                  }}
                >
                  LEVEL 0{idx + 1}
                </div>
                <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>
                  {node.label}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
                  {node.sub}
                </div>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.74rem",
                  color: "var(--accent-magenta)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  paddingTop: "0.6rem",
                  marginTop: "0.8rem",
                }}
              >
                {node.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Cinematic Horizontal Campaign Flow Pipeline */}
      <div
        style={{
          borderRadius: "var(--radius)",
          border: "1px solid var(--border-bright)",
          background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          overflow: "hidden",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            OPERATING PIPELINE // SCROLL-CONTROLLED SEQUENCE
          </div>
          <h3
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.8rem",
            }}
          >
            The 11-Stage <span className="gradient-text">Campaign Delivery Pipeline.</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
            From brand creative upload to decentralized proof-of-play telemetry, every step is strictly orchestrated.
          </p>
        </div>

        {/* Pipeline horizontal selector */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            paddingBottom: "1.2rem",
            marginBottom: "2rem",
            borderBottom: "1px solid var(--border)",
          }}
          className="no-scrollbar"
        >
          {pipelineSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.name}
                onClick={() => setActiveStep(idx)}
                type="button"
                style={{
                  background: isActive ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${isActive ? "var(--accent-cyan)" : "var(--border)"}`,
                  borderRadius: "8px",
                  padding: "0.6rem 1rem",
                  color: isActive ? "#ffffff" : "var(--text-muted)",
                  cursor: "pointer",
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.75rem",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ color: isActive ? "var(--accent-cyan)" : "var(--text-muted)" }}>0{idx + 1}</span>
                <span>{step.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            background: "rgba(0, 0, 0, 0.6)",
            padding: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <EditorialTabTransition tabKey={activeStep} style={{ flex: 1 }}>
            <EditorialTabItem>
              <div
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.14em",
                  marginBottom: "0.4rem",
                }}
              >
                STAGE 0{activeStep + 1} OF 11 // PIPELINE STATE
              </div>
            </EditorialTabItem>
            <EditorialTabItem delayOffset={0.06}>
              <h4 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.6rem" }}>
                {pipelineSteps[activeStep].name}
              </h4>
            </EditorialTabItem>
            <EditorialTabItem delayOffset={0.12}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "600px", lineHeight: 1.6 }}>
                {pipelineSteps[activeStep].detail}
              </p>
            </EditorialTabItem>
          </EditorialTabTransition>

          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.76rem",
              padding: "0.8rem 1.4rem",
              borderRadius: "8px",
              background: "rgba(0, 229, 255, 0.08)",
              border: "1px solid rgba(0, 229, 255, 0.2)",
              color: "var(--accent-cyan)",
            }}
          >
            STATUS: PIPELINE VERIFIED
          </div>
        </div>
      </div>

      {/* 3. Geo Intelligence: Location Becomes Logic */}
      <div
        style={{
          borderRadius: "var(--radius)",
          border: "1px solid var(--border-bright)",
          background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
          padding: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            GEO-INTELLIGENCE // CONTEXTUAL POLICY ENGINE
          </div>
          <h3
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.8rem",
            }}
          >
            Location Becomes <span className="gradient-text">Logic.</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
            Select a metropolitan zone below to inspect the real-time context and programmatic delivery rules enforced by VMOVEXA ONE.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.8rem",
            marginBottom: "2rem",
          }}
        >
          {zones.map((zone) => {
            const Icon = zone.icon;
            const isSelected = activeZone === zone.id;

            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                type="button"
                style={{
                  background: isSelected ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${isSelected ? "var(--accent-cyan)" : "var(--border)"}`,
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "6px",
                    background: isSelected ? "var(--accent-cyan)" : "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isSelected ? "#050608" : "#cbd5e1",
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>
                    {zone.name.split(" ")[0]}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                    {isSelected ? "ACTIVE ZONE" : "SELECT ZONE"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Policy Inspector */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: `1px solid ${activeZoneData.accent}`,
            background: "rgba(0, 0, 0, 0.6)",
            padding: "2.5rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            boxShadow: `0 0 30px ${activeZoneData.accent}22`,
          }}
        >
          <EditorialTabTransition tabKey={activeZone}>
            <EditorialTabItem>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.8rem" }}>
                <ActiveZoneIcon size={24} color={activeZoneData.accent} />
                <h4 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                  {activeZoneData.name}
                </h4>
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.06}>
              <div
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.78rem",
                  color: activeZoneData.accent,
                  background: "rgba(0, 0, 0, 0.4)",
                  padding: "0.6rem 0.9rem",
                  borderRadius: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "1.2rem",
                }}
              >
                {activeZoneData.geoLogic}
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.12}>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
                <strong>Context Profile:</strong> {activeZoneData.context}
              </p>
            </EditorialTabItem>
          </EditorialTabTransition>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <EditorialTabTransition tabKey={activeZone}>
              <EditorialTabItem>
                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.72rem",
                    color: "var(--accent-cyan)",
                    letterSpacing: "0.12em",
                    marginBottom: "0.5rem",
                  }}
                >
                  AUTOMATED CONTEXTUAL RULES
                </div>
              </EditorialTabItem>
              <EditorialTabItem delayOffset={0.06}>
                <p style={{ color: "#ffffff", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {activeZoneData.rules}
                </p>
              </EditorialTabItem>
            </EditorialTabTransition>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: "0.8rem",
                marginTop: "1.2rem",
              }}
            >
              <span>TRIGGER LATENCY: &lt; 50ms</span>
              <span>VERIFICATION: GPS + TIME</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
