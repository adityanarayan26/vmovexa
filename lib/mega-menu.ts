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
        image: "/images/nav/1.png",
        primaryLink: { label: "Learn", href: "/platform#vmovexa-one" },
        secondaryLink: { label: "Order", href: "/platform#order" },
      }
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
        image: "/images/nav/technology-nav.jpg",
        primaryLink: { label: "Learn", href: "/technology#edge" },
        secondaryLink: { label: "Order", href: "/technology#order" },
      }
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
        image: "/images/nav/3.png",
        primaryLink: { label: "Learn", href: "/solutions#fleet-operators" },
        secondaryLink: { label: "Order", href: "/solutions#order" },
      }
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
        image: "/images/nav/4.png",
        primaryLink: { label: "Learn", href: "/industries#public-transport" },
        secondaryLink: { label: "Order", href: "/industries#order" },
      }
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
        image: "/images/nav/1.png",
        primaryLink: { label: "Learn", href: "/media" },
        secondaryLink: { label: "Order", href: "/media#order" },
      }
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
        image: "/images/nav/vmovexa-bus.png",
        primaryLink: { label: "Learn", href: "/company#thesis" },
        secondaryLink: { label: "Order", href: "/company#order" },
      }
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
