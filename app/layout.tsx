import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoVista | Premium Living in South Kolkata",
  description:
    "Discover EcoVista, a thoughtfully planned community in Baruipur, South Kolkata. Explore the lifestyle, amenities, location and experience EcoVista has to offer.",
  keywords: [
    "EcoVista",
    "EcoVista Baruipur",
    "EcoVista Kolkata",
    "plots in Baruipur",
    "plots in South Kolkata",
    "residential plots Kolkata",
    "premium plots Kolkata",
    "real estate Baruipur",
  ],
  authors: [{ name: "EcoVista" }],
  creator: "EcoVista",
  publisher: "EcoVista",

  openGraph: {
    title: "EcoVista | Premium Living in South Kolkata",
    description:
      "A thoughtfully planned community in Baruipur, South Kolkata — where life meets nature.",
    type: "website",
    locale: "en_IN",
    siteName: "EcoVista",
  },

  twitter: {
    card: "summary_large_image",
    title: "EcoVista | Premium Living in South Kolkata",
    description:
      "Discover EcoVista — a thoughtfully planned community in Baruipur, South Kolkata.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}