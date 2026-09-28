import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with VMOVEXA. Connect with our teams for fleet infrastructure, mobility technology, media partnerships, and enterprise deployments.",
  keywords: ["contact vmovexa", "mobility technology contact", "fleet infrastructure contact", "vmovexa support", "vmovexa business"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
