import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://www.axxessdenied.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Axxess Denied LLP | Mobile Automotive Locksmith",
    template: "%s | Axxess Denied LLP",
  },
  description:
    "Professional mobile automotive locksmith services including key programming, key replacement, car remote replacement, key cutting, ignition services and emergency lockouts.",
  openGraph: {
    title: "Axxess Denied LLP | Mobile Automotive Locksmith",
    description:
      "Fast, reliable and affordable mobile automotive locksmith services. We come to you.",
    url: SITE_URL,
    siteName: "Axxess Denied LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axxess Denied LLP | Mobile Automotive Locksmith",
    description:
      "Fast, reliable and affordable mobile automotive locksmith services. We come to you.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-full flex flex-col bg-[var(--bg-0)] text-[var(--white)] antialiased">
        <Header />
        <main className="flex-1 animate-fade-in">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
