import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Host Nellie — Professional Event Host",
  description:
    "Weddings, corporate events, birthdays, and more. Let Host Nellie make your event unforgettable.",
  alternates: {
    canonical: "https://hostnellie.vercel.app",
  },
  openGraph: {
    title: "Host Nellie — Professional Event Host",
    description:
      "Weddings, corporate events, birthdays, and more. Let Host Nellie make your event unforgettable.",
    url: "https://hostnellie.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Host Nellie — Professional Event Host",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-ivory focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
