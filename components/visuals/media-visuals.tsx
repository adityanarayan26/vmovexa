"use client";

import { useState } from "react";
import {
  Monitor,
  MapPin,
  Clock,
  Compass,
  CheckCircle,
  Layers,
  Plane,
  Building2,
  Trophy,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

/* 1. SCREEN AS A STRUCTURED SOFTWARE OBJECT */
export function ScreenInventoryObject() {

  const metadataFields = [
    { key: "Screen ID", value: "VMX-DISP-HYD-0428", tag: "IDENTIFIER", icon: Monitor },
    { key: "Location Coordinates", value: "17.4435° N, 78.3772° E (±0.8m GNSS)", tag: "SPATIAL", icon: MapPin },
    { key: "Active Route", value: "Corridor 12: Hitec City ↔ Financial District", tag: "TRANSIT", icon: Compass },
    { key: "Vehicle Association", value: "EV-Transit-Bus #884 (VMOVEXA CORE Edge)", tag: "ASSET", icon: Layers },
    { key: "City Zone", value: "Hyderabad Metropolitan // West Corridor", tag: "REGION", icon: Building2 },
    { key: "Time Window", value: "18:42:15 IST // Peak Evening Commute", tag: "TEMPORAL", icon: Clock },
    { key: "Screen Type", value: "Ultra High-Nit (5500 nits) Exterior Rooftop Dual", tag: "HARDWARE", icon: Monitor },
    { key: "Availability State", value: "Active Dynamic Slot // 100% Pacing", tag: "YIELD", icon: CheckCircle },
    { key: "Active Campaign", value: "Tier 1 Enterprise Cloud Launch Q3", tag: "MEDIA", icon: Sparkles },
  ];

  return (
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
          THE NEW MEDIA UNIT // OBJECT ORIENTED
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          The Screen Is Now An <span className="gradient-text">Inventory Object.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          In legacy OOH, a billboard is just static paint or an isolated looping screen. VMOVEXA models every moving screen as a structured digital software object with continuous real-time metadata.
        </p>
      </div>

      {/* Structured Software Object Card */}
      <div
        style={{
          borderRadius: "var(--radius-sm)",
          border: "1px solid rgba(0, 229, 255, 0.3)",
          background: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          boxShadow: "0 0 35px rgba(0, 229, 255, 0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.72rem",
          }}
        >
          <span style={{ color: "var(--accent-cyan)" }}>OBJECT_CLASS: VmovexaScreenInventory</span>
          <span style={{ color: "var(--text-muted)" }}>PARSING: JSON_SCHEMA_VALID</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {metadataFields.map((field) => {
            const Icon = field.icon;
            return (
              <div
                key={field.key}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "8px",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.68rem", color: "var(--accent-cyan)" }}>
                      {field.tag}
                    </span>
                    <Icon size={14} color="var(--text-muted)" />
                  </div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>{field.key}</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "#ffffff", marginTop: "0.25rem", wordBreak: "break-word" }}>
                    {field.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* 2. CONTEXT WHERE + WHEN MATRIX */
export function ContextWhereWhenMatrix() {
  const [selectedZone, setSelectedZone] = useState<string>("airport");
  const [selectedTime, setSelectedTime] = useState<string>("evening");

  const zones = [
    { id: "airport", name: "Airport Corridor", icon: Plane, audience: "Business travelers & tourists", pitch: "Flight arrivals, global roaming, luxury automotive" },
    { id: "business", name: "Business District", icon: Building2, audience: "Corporate executives & decision-makers", pitch: "B2B enterprise SaaS, wealth management, fintech" },
    { id: "stadium", name: "Sports Arena & Stadium", icon: Trophy, audience: "Event crowds & passionate sports fans", pitch: "Sports apparel, beverages, quick delivery" },
    { id: "retail", name: "Retail & High Street", icon: ShoppingBag, audience: "High-intent urban shoppers", pitch: "Fashion flash sales, dining, point-of-sale footfall" },
    { id: "transit", name: "High-Density Transit", icon: Compass, audience: "Daily commuter flow", pitch: "Mass consumer brands, telecom, OTT entertainment" },
    { id: "centre", name: "City Centre", icon: Building2, audience: "Pedestrians & urban dwellers", pitch: "Lifestyle, entertainment, civic messaging" },
    { id: "tourism", name: "Tourism District", icon: Sparkles, audience: "Leisure visitors & domestic tourists", pitch: "Hospitality, heritage tours, artisanal crafts" },
  ];

  const timeSlots = [
    { id: "morning", name: "Morning Commute", range: "07:30 - 10:30", vibe: "High coffee intent, news, finance, workday prep" },
    { id: "afternoon", name: "Mid-Day / Business", range: "11:30 - 15:30", vibe: "Executive dining, B2B services, retail discovery" },
    { id: "evening", name: "Peak Commute", range: "17:30 - 20:30", vibe: "Highest corridor dwell time, entertainment, delivery" },
    { id: "late", name: "Nightlife & Leisure", range: "21:00 - 01:00", vibe: "Dining, nightlife, late entertainment, ride-hailing" },
    { id: "events", name: "Marquee Events", range: "Dynamic Schedule", vibe: "High-intensity crowd activation during matches/concerts" },
  ];

  const currentZone = zones.find((z) => z.id === selectedZone) || zones[0];
  const currentTime = timeSlots.find((t) => t.id === selectedTime) || timeSlots[0];

  return (
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
          CONTEXTUAL MATRIX // WHERE × WHEN
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          Context Starts With Where. <br />
          <span className="gradient-text">Context Also Has A Clock.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          Dynamic mobility media changes creative triggers in real-time as vehicles cross geographic polygons and transition between dayparting clocks.
        </p>
      </div>

      {/* Selection Control Panel */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
        {/* WHERE: Select Zone */}
        <div>
          <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.74rem", color: "var(--accent-cyan)", marginBottom: "0.8rem" }}>
            1. SELECT LOCATION (WHERE):
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setSelectedZone(z.id)}
                type="button"
                style={{
                  borderRadius: "6px",
                  border: `1px solid ${selectedZone === z.id ? "var(--accent-cyan)" : "var(--border)"}`,
                  background: selectedZone === z.id ? "rgba(0, 229, 255, 0.15)" : "rgba(0, 0, 0, 0.4)",
                  padding: "0.5rem 0.8rem",
                  color: selectedZone === z.id ? "#ffffff" : "var(--text-secondary)",
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {z.name}
              </button>
            ))}
          </div>
        </div>

        {/* WHEN: Select Time Clock */}
        <div>
          <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.74rem", color: "var(--accent-magenta)", marginBottom: "0.8rem" }}>
            2. SELECT DAYPART (WHEN):
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {timeSlots.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTime(t.id)}
                type="button"
                style={{
                  borderRadius: "6px",
                  border: `1px solid ${selectedTime === t.id ? "var(--accent-magenta)" : "var(--border)"}`,
                  background: selectedTime === t.id ? "rgba(217, 70, 239, 0.15)" : "rgba(0, 0, 0, 0.4)",
                  padding: "0.5rem 0.8rem",
                  color: selectedTime === t.id ? "#ffffff" : "var(--text-secondary)",
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Fused Result Card with Editorial Mask Transitions */}
      <EditorialTabTransition tabKey={`${selectedZone}-${selectedTime}`}>
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            background: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          <div>
            <EditorialTabItem>
              <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--accent-cyan)", marginBottom: "0.4rem" }}>
                RESOLVED WHERE + WHEN:
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.06}>
              <h4 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.5rem" }}>
                {currentZone.name} × {currentTime.name}
              </h4>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.12}>
              <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.8rem", color: "var(--accent-magenta)", marginBottom: "1rem" }}>
                ACTIVE WINDOW: {currentTime.range}
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.18}>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                <strong>Target Audience:</strong> {currentZone.audience}
              </p>
            </EditorialTabItem>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "1.2rem", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <EditorialTabItem>
              <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                DYNAMIC CREATIVE LOGIC:
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.06}>
              <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                {currentZone.pitch}
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.12}>
              <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {currentTime.vibe}
              </div>
            </EditorialTabItem>
          </div>
        </div>
      </EditorialTabTransition>
    </div>
  );
}

/* 3. MEASUREMENT: DISPLAY IS NOT ENOUGH */
export function MeasurementProofOfPlay() {
  const steps = [
    {
      step: "01",
      name: "Playback",
      desc: "Video and static creative renders on vehicle display via hardware-accelerated GPU pipeline.",
      metric: "Frame-accurate 60 FPS decode",
    },
    {
      step: "02",
      name: "Completion",
      desc: "VMOVEXA CORE edge runtime verifies 100% of duration played without interruption or dropouts.",
      metric: "Duration verification log",
    },
    {
      step: "03",
      name: "Campaign Performance",
      desc: "Impressions quota, frequency capping, and ad pacing parameters dynamically evaluated and updated.",
      metric: "Pacing compliance audit",
    },
    {
      step: "04",
      name: "Location Performance",
      desc: "Sub-meter GNSS coordinates and timestamp cryptographically hashed as tamper-proof proof-of-play.",
      metric: "Cryptographic coordinate hash",
    },
  ];

  return (
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
          MEASUREMENT &amp; AUDITABILITY
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          Display Is <span className="gradient-text">Not Enough.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          Advertisers and transit operators require deterministic proof. VMOVEXA moves past estimates into verifiable proof-of-play verified down to coordinates and seconds.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.2rem",
        }}
      >
        {steps.map((s) => (
          <div
            key={s.step}
            style={{
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              background: "rgba(0, 0, 0, 0.5)",
              padding: "1.6rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "220px",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--accent-cyan)", marginBottom: "0.4rem" }}>
                PHASE {s.step}
              </div>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.6rem" }}>
                {s.name}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                {s.desc}
              </p>
            </div>

            <div
              style={{
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.7rem",
                color: "var(--accent-magenta)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: "0.6rem",
                marginTop: "1rem",
              }}
            >
              • {s.metric}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
