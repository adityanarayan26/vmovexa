import type { IconType } from "react-icons";
import {
  FiActivity,
  FiBatteryCharging,
  FiBriefcase,
  FiCloud,
  FiCode,
  FiCompass,
  FiCpu,
  FiEye,
  FiLayers,
  FiLock,
  FiMapPin,
  FiMonitor,
  FiRadio,
  FiRefreshCw,
  FiServer,
  FiSliders,
  FiTruck,
  FiWifi,
  FiZap,
} from "react-icons/fi";
import {
  RiBuilding2Line,
  RiBusLine,
  RiFlightTakeoffLine,
  RiGraduationCapLine,
  RiMegaphoneLine,
} from "react-icons/ri";


export const site = {
  name: "VMOVEXA",
  tagline: "INTELLIGENCE IN MOTION.",
  descriptor: "Cloud-to-Edge Mobility Intelligence Platform",
  url: "https://www.vmovexa.com",
  description:
    "VMOVEXA is a deep-tech mobility intelligence platform connecting vehicles, edge computing, cloud infrastructure, intelligent displays, GPS, telemetry, geofencing and digital media.",
  email: "hello@vmovexa.com",
  phone: "+91 73828 97999",
  address: "T-Hub, Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032, India",
};

// Global Navigation approved in PDF:
// Platform → Technology → Solutions → Industries → Media → Company → Contact
export const navigation = [
  { label: "Platform", href: "/platform" },
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Media", href: "/media" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
  number?: string;
  tag?: string;
};

// Home: The Big Idea (A Vehicle Can Be More)
export const vehicleNodes: Feature[] = [
  {
    number: "01",
    title: "Computing Node",
    description:
      "High-throughput localized edge execution running real-time processing directly inside the moving vehicle.",
    icon: FiCpu,
  },
  {
    number: "02",
    title: "Communication Node",
    description:
      "Continuous synchronization bridge between vehicle endpoints, central cloud systems, and urban networks.",
    icon: FiWifi,
  },
  {
    number: "03",
    title: "Digital Media Node",
    description:
      "Intelligent multi-screen display management turning vehicles into dynamic, context-aware digital surfaces.",
    icon: FiMonitor,
  },
  {
    number: "04",
    title: "Telemetry Node",
    description:
      "Real-time capture and continuous transmission of vehicle diagnostics, device health, and environmental states.",
    icon: FiActivity,
  },
  {
    number: "05",
    title: "Data-Generation Node",
    description:
      "Transforming routes, stops, and physical movement into structured, programmable mobility intelligence.",
    icon: FiLayers,
  },
];

// Home: 4-Tier Architecture Flow (Cloud to Moving Edge)
export const architectureTiers = [
  {
    level: "01",
    title: "CLOUD",
    subtitle: "Centralized Orchestration",
    items: [
      "Fleet management",
      "Dynamic configuration",
      "Analytics & telemetry indexing",
      "Digital media campaign management",
      "Multi-tenant access control",
    ],
    icon: FiCloud,
  },
  {
    level: "02",
    title: "EDGE",
    subtitle: "VMOVEXA CORE Runtime",
    items: [
      "Local execution engine",
      "Device & screen coordination",
      "Near-real-time geofence triggering",
      "Telemetry aggregation",
      "Offline cache operation",
    ],
    icon: FiServer,
  },
  {
    level: "03",
    title: "VEHICLE",
    subtitle: "Physical Mobility Layer",
    items: [
      "Multi-zone connected displays",
      "High-precision GPS module",
      "Onboard diagnostic sensors",
      "Cellular & local connectivity",
      "Edge computing hardware",
    ],
    icon: RiBusLine,
  },
  {
    level: "04",
    title: "DATA",
    subtitle: "Mobility Intelligence",
    items: [
      "Operational intelligence",
      "Mobility & route information",
      "Device health & state alerts",
      "Verified media performance",
      "Contextual spatial analytics",
    ],
    icon: FiActivity,
  },
];

// Home: Platform Capabilities (8 Core Capabilities from PDF)
export const platformCapabilities: Feature[] = [
  {
    number: "01",
    title: "Cloud Orchestration",
    description:
      "Manage distributed mobility infrastructure across thousands of vehicles through centralized, scalable software.",
    icon: FiCloud,
  },
  {
    number: "02",
    title: "Vehicle Edge Computing",
    description:
      "Bring computing power directly to the moving asset where mobility happens, enabling low-latency edge responsiveness.",
    icon: FiCpu,
  },
  {
    number: "03",
    title: "Location Intelligence",
    description:
      "Turn geographic position, velocity, and real-world movement into programmable, actionable digital context.",
    icon: FiCompass,
  },
  {
    number: "04",
    title: "Multi-Screen Infrastructure",
    description:
      "Coordinate multiple digital surfaces inside and outside the vehicle with independent, split, or synchronized layouts.",
    icon: FiMonitor,
  },
  {
    number: "05",
    title: "Fleet Intelligence",
    description:
      "Create centralized visibility across all vehicles, connected hardware, and distributed operational infrastructure.",
    icon: FiSliders,
  },
  {
    number: "06",
    title: "Telemetry Engine",
    description:
      "Continuously capture, monitor, and broadcast operational states, device health, and network connectivity across fleets.",
    icon: FiActivity,
  },
  {
    number: "07",
    title: "Digital Media",
    description:
      "Transform vehicle screens into remotely managed, software-defined digital media infrastructure.",
    icon: RiMegaphoneLine,
  },
  {
    number: "08",
    title: "Offline Resilience",
    description:
      "Maintain flawless local operations, campaign execution, and safety messages even during temporary network blackouts.",
    icon: FiRefreshCw,
  },
];

// Platform: VMOVEXA ONE Cloud Control Features
export const vmovexaOneFeatures = [
  "Fleets Management",
  "Connected Vehicles",
  "Hardware Devices",
  "Multi-Screen Displays",
  "Transit Routes",
  "Trips & Journeys",
  "Digital Content",
  "Campaign Orchestration",
  "Dynamic Geofences",
  "Operational Analytics",
  "User Access & Roles",
  "System Configurations",
];

// Platform: VMOVEXA CORE Edge Engines
export const vmovexaCoreEngines: Feature[] = [
  {
    title: "Network Engine",
    description: "Intelligent connectivity handling, packet priority, and cellular handoff management.",
    icon: FiWifi,
  },
  {
    title: "Media Engine",
    description: "Hardware-accelerated media rendering, split-screen layouts, and seamless audio-visual execution.",
    icon: FiMonitor,
  },
  {
    title: "Campaign Engine",
    description: "Local campaign rule validation, frequency capping, schedule checks, and verification.",
    icon: FiZap,
  },
  {
    title: "Geo-Fence Engine",
    description: "Low-latency boundary detection that triggers hyper-local content and alerts in real time.",
    icon: FiMapPin,
  },
  {
    title: "GPS Positioning",
    description: "High-accuracy coordinate tracking feeding continuous speed and location telemetry.",
    icon: FiCompass,
  },
  {
    title: "Telemetry Aggregator",
    description: "Continuous health tracking of power, thermals, display status, and peripheral performance.",
    icon: FiActivity,
  },
  {
    title: "Multi-Screen Controller",
    description: "Orchestrates synchronized, mirrored, independent, or multi-zone screen states across the vehicle.",
    icon: FiLayers,
  },
  {
    title: "Security Shield",
    description: "End-to-end encrypted tunnels, tamper resistance, and secure cloud-to-edge communication.",
    icon: FiLock,
  },
  {
    title: "OTA Lifecycle Manager",
    description: "Reliable over-the-air firmware updates, kernel patches, and remote rollbacks.",
    icon: FiRefreshCw,
  },
  {
    title: "Offline Cache",
    description: "On-device storage buffer preserving uninterrupted playback and logs when connectivity drops.",
    icon: FiServer,
  },
];

// Solutions: 5 Core Solutions from PDF
export const solutionsList: Feature[] = [
  {
    number: "01",
    title: "Fleet Operators",
    tag: "Digitalize The Fleet",
    description:
      "Connect vehicles, displays, edge computing, positioning, and telemetry under one centralized management architecture.",
    icon: RiBusLine,
  },
  {
    number: "02",
    title: "Mobility Media",
    tag: "Moving Digital Inventory",
    description:
      "Transform vehicle displays into centrally managed, location-aware, and time-aware programmatic media inventory.",
    icon: RiMegaphoneLine,
  },
  {
    number: "03",
    title: "Smart Cities",
    tag: "Urban Digital Infrastructure",
    description:
      "Empower municipalities and transit authorities with real-time public information, emergency alerts, and civic messaging.",
    icon: RiBuilding2Line,
  },
  {
    number: "04",
    title: "Enterprise Mobility",
    tag: "Corporate Mobility Layer",
    description:
      "Connect enterprise transit operations, employee shuttles, and corporate assets with unified digital infrastructure.",
    icon: FiBriefcase,
  },
  {
    number: "05",
    title: "Connected Infrastructure",
    tag: "Vehicle as Digital Endpoint",
    description:
      "Create an architecture where physical mobility assets become software-addressable, measurable digital infrastructure.",
    icon: FiRadio,
  },
];

// Industries: 9 Target Environments from PDF
export const industriesList: Feature[] = [
  {
    number: "01",
    title: "Public Transport",
    tag: "Connected Public Mobility",
    description:
      "Transform city bus fleets and transit corridors into connected digital endpoints with passenger info and civic messaging.",
    icon: RiBusLine,
  },
  {
    number: "02",
    title: "Private Fleets",
    tag: "Turn Fleets Into Networks",
    description:
      "Centralize vehicle, device, and digital screen infrastructure across private transport networks and commercial fleets.",
    icon: FiSliders,
  },
  {
    number: "03",
    title: "Airport Mobility",
    tag: "Moving Extension of the Airport",
    description:
      "Premium commercial, flight information, and passenger experience platform for airport shuttles and transit loops.",
    icon: RiFlightTakeoffLine,
  },
  {
    number: "04",
    title: "Employee Transport",
    tag: "Intelligence for Corporate Mobility",
    description:
      "Equip corporate transit fleets with real-time route communication, safety broadcasts, and centralized fleet health.",
    icon: FiBriefcase,
  },
  {
    number: "05",
    title: "School Transport",
    tag: "Connected Educational Transit",
    description:
      "Create a reliable technology foundation for connected school transportation environments with telemetry and alerts.",
    icon: RiGraduationCapLine,
  },
  {
    number: "06",
    title: "Tourism Mobility",
    tag: "Journeys Into Experiences",
    description:
      "Deliver location-aware cultural insights, monuments, hotels, dining, and city discovery directly on tourist transit routes.",
    icon: FiEye,
  },
  {
    number: "07",
    title: "Electric Mobility",
    tag: "Digital Layer for EV Fleets",
    description:
      "Integration foundation for electric buses and vans, tracking battery vitals, route efficiency, and charging data.",
    icon: FiBatteryCharging,
  },
  {
    number: "08",
    title: "Logistics & Cargo",
    tag: "Beyond Passenger Mobility",
    description:
      "Extend connected mobility infrastructure into logistics and cargo networks for asset telemetry and spatial tracking.",
    icon: FiTruck,
  },
  {
    number: "09",
    title: "Smart Cities",
    tag: "Mobility as Urban Infrastructure",
    description:
      "Integrate city transportation fleets into urban data infrastructure for emergency broadcasts and transport information.",
    icon: RiBuilding2Line,
  },
];

// Media: Screen as Inventory Object Attributes
export const mediaUnitAttributes = [
  { label: "Location", desc: "Live GPS coordinates and geographic bounding zone" },
  { label: "Route", desc: "Active transit corridor and upcoming stops" },
  { label: "Vehicle", desc: "Specific vehicle unit, route assignment, and asset tier" },
  { label: "City", desc: "Metropolitan zone, municipality, and neighborhood context" },
  { label: "Time", desc: "Hour of day, peak commute windows, and schedule triggers" },
  { label: "Screen Type", desc: "Display dimensions, orientation, split-zone capability" },
  { label: "Availability", desc: "Real-time inventory slots and programmatic capacity" },
  { label: "Campaign", desc: "Targeting rules, pacing, verification, and proof of play" },
];

// Media: Brand Categories
export const brandCategories = [
  "FMCG",
  "Automotive",
  "BFSI & Fintech",
  "Retail & E-commerce",
  "Telecom",
  "Technology & SaaS",
  "Entertainment & OTT",
  "Education",
  "Healthcare & Pharma",
  "Real Estate",
  "Travel & Hospitality",
  "Food & Beverage",
];

// Media: Campaign Lifecycle Steps
export const campaignLifecycle = [
  { step: "01", name: "Brand & Creative", desc: "Dynamic multi-format creatives uploaded and staged" },
  { step: "02", name: "Audience & Geography", desc: "Targeting parameters, city zones, and POI geofences defined" },
  { step: "03", name: "Route & Vehicle", desc: "Automated matching against active fleet corridors and screens" },
  { step: "04", name: "Approval & Distribution", desc: "Policy verification and OTA edge distribution to local cache" },
  { step: "05", name: "Location & Time Playback", desc: "Precision triggering when vehicle enters target zone" },
  { step: "06", name: "Telemetry & Analytics", desc: "Cryptographically verified playback, completion, and impressions" },
];

// Company: Partners Types
export const partnerTypes: Feature[] = [
  {
    title: "Technology Partners",
    description: "Integrate specialized hardware, edge computing units, display panels, and IoT connectivity.",
    icon: FiCode,
  },
  {
    title: "Mobility Partners",
    description: "Deploy VMOVEXA software and edge hardware across transit authorities and private fleet operations.",
    icon: RiBusLine,
  },
  {
    title: "Enterprise Partners",
    description: "Build custom enterprise workflows, internal communications, and mobility SaaS integrations.",
    icon: FiBriefcase,
  },
  {
    title: "Media Partners",
    description: "Access scalable digital OOH inventory, programmatic exchanges, and verified location-aware audiences.",
    icon: RiMegaphoneLine,
  },
];

