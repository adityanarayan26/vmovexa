import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeSwitcher } from "@/components/animations/theme-switcher";
import { BackgroundGradient } from "@/components/visuals/background-gradient";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { site } from "@/lib/site";
import Script from "next/script";

const sfProHeading = localFont({
  src: "./fonts/sf-pro-text_semibold.woff2",
  variable: "--font-heading-local",
  display: "swap",
  weight: "600",
});

const sfProSans = localFont({
  src: "./fonts/sf-pro-text_regular.woff2",
  variable: "--font-sans-local",
  display: "swap",
  weight: "400",
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
    images: [
      {
        url: "/images/og-banner-hero.jpg",
        width: 1200,
        height: 630,
        alt: "VMOVEXA - The Iconic V",
      },
      {
        url: "/images/iconic-v.jpg",
        width: 2560,
        height: 2560,
        alt: "VMOVEXA - The Iconic V",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VMOVEXA | Cloud-to-Edge Mobility Intelligence Platform",
    description: site.description,
    images: ["/images/og-banner-hero.jpg"],
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

import { LanguageProvider } from "@/lib/i18n-context";
import { LanguageLocationModal } from "@/components/ui/language-location-modal";

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
    <html lang="en" className={`${sfProHeading.variable} ${sfProSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <SmoothScroll />
          <ThemeSwitcher />
          <BackgroundGradient />
          <SiteHeader />

          <main>{children}</main>
          <WhatsAppFloat />
          <LanguageLocationModal />
          <SiteFooter />
          <script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            type="application/ld+json"
          />
          <div id="google_translate_element" style={{ display: "none" }}></div>
          <Script id="google-translate-init" strategy="afterInteractive">
            {`function googleTranslateElementInit() { new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element'); }`}
          </Script>
          <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        </LanguageProvider>
      </body>
    </html>
  );
}
