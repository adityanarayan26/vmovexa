import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";

const geist = localFont({
  src: "../node_modules/next/dist/next-devtools/server/font/geist-latin.woff2",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "VMOVEXA | Intelligent Connected Mobility",
    template: "%s | VMOVEXA",
  },
  description: site.description,
  keywords: [
    "connected mobility",
    "smart transport",
    "fleet intelligence",
    "transparent OLED",
    "mobility AI",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "VMOVEXA | Intelligent Connected Mobility",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "VMOVEXA | Intelligent Connected Mobility",
    description: site.description,
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
    <html lang="en">
      <body className={geist.variable}>
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
