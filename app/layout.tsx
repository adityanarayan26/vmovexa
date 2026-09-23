import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeSwitcher } from "@/components/animations/theme-switcher";
import { BackgroundGradient } from "@/components/visuals/background-gradient";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { site } from "@/lib/site";

// Brand headlines / emotional moments
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Enterprise / product / website body
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Deep-tech / data / engineering / plain text
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "VMOVEXA | Cloud-to-Edge Mobility Intelligence Platform",
    template: "%s | VMOVEXA",
  },
  description: site.description,
  keywords: [
    "mobility intelligence platform",
    "connected mobility platform",
    "vehicle edge computing",
    "cloud-to-edge mobility",
    "smart mobility technology",
    "connected vehicle platform",
    "fleet intelligence",
    "mobility technology",
    "DOOH platform India",
    "digital transit media",
    "vehicle telemetry platform",
    "geofencing platform",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "VMOVEXA | Cloud-to-Edge Mobility Intelligence Platform",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "VMOVEXA | Cloud-to-Edge Mobility Intelligence Platform",
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logos/vmovexa-icon-dark.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <SmoothScroll />
        <ThemeSwitcher />
        <BackgroundGradient />
        <SiteHeader />

        <main>{children}</main>
        <WhatsAppFloat />
        <SiteFooter />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
