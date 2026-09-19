import {
  Activity,
  BatteryCharging,
  BrainCircuit,
  CloudCog,
  Eye,
  Gauge,
  Landmark,
  Megaphone,
  RadioTower,
  ShieldCheck,
  SunMedium,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "VMOVEXA",
  url: "https://www.vmovexa.com",
  description:
    "VMOVEXA connects smart mobility, interactive media, AI, safety and renewable energy into one intelligent ecosystem.",
  email: "hello@vmovexa.com",
  phone: "+91 73828 97999",
  address: "T-Hub, Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032, India",
};

export const navigation = [
  { label: "Platform", href: "/platform" },
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  number?: string;
};

export const pillars: Feature[] = [
  {
    number: "01",
    title: "Smart Mobility",
    description: "Connected fleets that see, respond and improve with every journey.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Interactive Media",
    description: "Transparent displays that inform, engage and create measurable value.",
    icon: Eye,
  },
  {
    number: "03",
    title: "AI Intelligence",
    description:
      "Edge-to-cloud intelligence that turns live signals into better decisions.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Passenger Safety",
    description: "Safety systems designed around the moments that matter most.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Clean Energy",
    description:
      "Solar-powered systems built for a lighter footprint and enduring uptime.",
    icon: SunMedium,
  },
];

export const solutionCards: Feature[] = [
  {
    title: "Smart Public Transport",
    description: "Intelligent, connected fleets for efficient and sustainable mobility.",
    icon: Landmark,
  },
  {
    title: "Advertising Network",
    description: "High-impact, hyperlocal messaging on transparent OLED displays.",
    icon: Megaphone,
  },
  {
    title: "Government Communication",
    description: "Real-time public information and alerts where people are moving.",
    icon: RadioTower,
  },
  {
    title: "Fleet Intelligence",
    description: "Live tracking, analytics and predictive intelligence for every route.",
    icon: Activity,
  },
  {
    title: "Emergency Broadcasting",
    description: "Rapid response communications across connected vehicles.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable Operations",
    description: "Energy-conscious infrastructure engineered for daily service.",
    icon: BatteryCharging,
  },
];

export const technologies: Feature[] = [
  {
    title: "Transparent intelligence",
    description:
      "Every glass surface becomes a context-aware channel for information and impact.",
    icon: Eye,
  },
  {
    title: "Cloud + edge",
    description:
      "A resilient architecture that acts locally, learns centrally and stays connected.",
    icon: CloudCog,
  },
  {
    title: "AI mobility engine",
    description:
      "From fleet data to city insight, intelligence that makes movement more human.",
    icon: BrainCircuit,
  },
];
