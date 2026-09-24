export interface MegaMenuVisualItem {
  title: string;
  subtitle: string;
  image: string;
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
}

export interface MegaMenuSectionLink {
  label: string;
  href: string;
  tag?: string;
}

export interface MegaMenuItem {
  navLabel: string;
  href: string;
  visualItems: MegaMenuVisualItem[];
  sectionLinks: MegaMenuSectionLink[];
}

export const megaMenuData: Record<string, MegaMenuItem> = {
  Platform: {
    navLabel: "Platform",
    href: "/platform",
    visualItems: [
      {
        title: "VMOVEXA ONE",
        subtitle: "Full-Stack Moving Edge Hardware & OS",
        image: "/images/vmovexa-bus-official.png",
        primaryLink: { label: "Learn", href: "/platform#vmovexa-one" },
        secondaryLink: { label: "Architecture", href: "/platform#cloud-to-edge" },
      },
      {
        title: "VMOVEXA CORE",
        subtitle: "10 Core In-Vehicle Operational Engines",
        image: "/images/vmovexa-platform-layers-3d-black.png",
        primaryLink: { label: "Learn", href: "/platform#vmovexa-core" },
        secondaryLink: { label: "Engines", href: "/platform#vmovexa-core" },
      },
    ],
    sectionLinks: [
      { label: "VMOVEXA ONE", href: "/platform#vmovexa-one" },
      { label: "VMOVEXA CORE", href: "/platform#vmovexa-core" },
      { label: "Mobility Intelligence", href: "/platform" },
      { label: "Cloud + Edge", href: "/platform#cloud-to-edge" },
      { label: "Connected Intelligence", href: "/platform#connected-intelligence" },
      { label: "Platform Principle", href: "/platform#platform-principle" },
    ],
  },

  Technology: {
    navLabel: "Technology",
    href: "/technology",
    visualItems: [
      {
        title: "Vehicle Edge Architecture",
        subtitle: "Decentralized Compute & Local Decisioning",
        image: "/images/vmovexa-technology-bus-xray.PNG",
        primaryLink: { label: "Learn", href: "/technology#edge" },
        secondaryLink: { label: "Disciplines", href: "/technology#disciplines" },
      },
      {
        title: "Cloud & Telemetry Fabric",
        subtitle: "Real-Time Sensor Ingestion & Telemetry",
        image: "/images/vmovexa-cloud-edge-architecture.png",
        primaryLink: { label: "Learn", href: "/technology#telemetry" },
        secondaryLink: { label: "Security", href: "/technology#security" },
      },
    ],
    sectionLinks: [
      { label: "Architecture", href: "/technology#disciplines" },
      { label: "Edge Computing", href: "/technology#edge" },
      { label: "Connected Vehicles", href: "/technology" },
      { label: "GPS & Geofencing", href: "/technology#gps" },
      { label: "Telemetry", href: "/technology#telemetry" },
      { label: "Data Infrastructure", href: "/technology#security" },
    ],
  },

  Solutions: {
    navLabel: "Solutions",
    href: "/solutions",
    visualItems: [
      {
        title: "Fleet Operators",
        subtitle: "Unified Fleet Control & Remote Diagnostics",
        image: "/images/solution-fleet-operators.png",
        primaryLink: { label: "Learn", href: "/solutions#fleet-operators" },
        secondaryLink: { label: "Explore", href: "/solutions#fleet-operators" },
      },
      {
        title: "Mobility Media Network",
        subtitle: "High-Resolution Geofenced Screen Networks",
        image: "/images/solution-mobility-media.png",
        primaryLink: { label: "Learn", href: "/solutions#mobility-media" },
        secondaryLink: { label: "Media Engine", href: "/media" },
      },
    ],
    sectionLinks: [
      { label: "Fleet Operators", href: "/solutions#fleet-operators" },
      { label: "Mobility Media", href: "/solutions#mobility-media" },
      { label: "Smart Cities", href: "/solutions#smart-cities" },
      { label: "Enterprise Mobility", href: "/solutions#enterprise-mobility" },
      { label: "Emergency Operations", href: "/solutions#smart-cities" },
    ],
  },

  Industries: {
    navLabel: "Industries",
    href: "/industries",
    visualItems: [
      {
        title: "Public Transport Networks",
        subtitle: "State & Municipal Transit Fleets",
        image: "/images/industry-public-transport.png",
        primaryLink: { label: "Learn", href: "/industries#public-transport" },
        secondaryLink: { label: "Transit", href: "/industries#public-transport" },
      },
      {
        title: "Airport & Electric Mobility",
        subtitle: "Airside Aprons, EVs & Inter-Terminal Shuttles",
        image: "/images/industry-airport-mobility.png",
        primaryLink: { label: "Learn", href: "/industries#airport-mobility" },
        secondaryLink: { label: "Electric", href: "/industries#electric-mobility" },
      },
    ],
    sectionLinks: [
      { label: "Public Transport", href: "/industries#public-transport" },
      { label: "Private Fleets", href: "/industries#private-fleets" },
      { label: "Airport Mobility", href: "/industries#airport-mobility" },
      { label: "Electric Mobility", href: "/industries#electric-mobility" },
      { label: "Tourism", href: "/industries#tourism" },
      { label: "Logistics", href: "/industries#logistics" },
    ],
  },

  Media: {
    navLabel: "Media",
    href: "/media",
    visualItems: [
      {
        title: "Digital Out-of-Home",
        subtitle: "Moving Digital Billboards with GPS Synchronization",
        image: "/images/vmovexa-media-bus-banner.png",
        primaryLink: { label: "Learn", href: "/media" },
        secondaryLink: { label: "Ad Engine", href: "/media" },
      },
      {
        title: "Smart Transit Displays",
        subtitle: "Geofenced Campaign Scheduling & Playback",
        image: "/images/vmovexa-smart-bus-night.png",
        primaryLink: { label: "Learn", href: "/media" },
        secondaryLink: { label: "Campaigns", href: "/media" },
      },
    ],
    sectionLinks: [
      { label: "Dynamic Scheduling", href: "/media" },
      { label: "Geo-Targeted Media", href: "/media" },
      { label: "Fleet Display Sync", href: "/media" },
      { label: "Campaign Analytics", href: "/media" },
      { label: "Ad Network Specs", href: "/media" },
    ],
  },

  Company: {
    navLabel: "Company",
    href: "/company",
    visualItems: [
      {
        title: "Deep-Tech Mobility Thesis",
        subtitle: "Convergence of Physical Mobility & Computing",
        image: "/images/vmovexa-company-earth-space.png",
        primaryLink: { label: "Learn", href: "/company#thesis" },
        secondaryLink: { label: "Our Story", href: "/company#vision" },
      },
      {
        title: "Executive Leadership",
        subtitle: "World-Class Engineering & Operations",
        image: "/people/g-satyanarayana-real.png",
        primaryLink: { label: "Leadership", href: "/company#leadership" },
        secondaryLink: { label: "Partners", href: "/company#partners" },
      },
    ],
    sectionLinks: [
      { label: "About", href: "/company#vision" },
      { label: "Deep Tech", href: "/company#thesis" },
      { label: "Leadership", href: "/company#leadership" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
      { label: "Partners", href: "/company#partners" },
      { label: "Investors", href: "/company#investors" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
