import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeSwitcher } from "@/components/animations/theme-switcher";
import { BackgroundGradient } from "@/components/visuals/background-gradient";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

// TEMPORARY FALLBACK: Using Orbitron (as requested) until the Super League font file is uploaded
const customHeading = Orbitron({ subsets: ["latin"], variable: "--font-custom-heading", weight: "700" });

// WHEN YOU HAVE THE SUPER LEAGUE FONT FILE, UNCOMMENT THIS AND DELETE THE ORBITRON LINE ABOVE:
// const customHeading = localFont({
//   src: "../public/fonts/SuperLeague-SemiBold.otf",
//   variable: "--font-custom-heading",
//   weight: "600",
//   display: "swap",
// });

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
    <html lang="en" className={`${inter.variable} ${customHeading.variable} ${jetbrainsMono.variable}`}>
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
