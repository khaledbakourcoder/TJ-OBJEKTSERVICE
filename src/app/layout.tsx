import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TJ Objekt Services – Hausmeisterservice in Flensburg & Umgebung",
    template: "%s | TJ Objekt Services",
  },
  description:
    "Ihr zuverlässiger Partner für Hausmeisterdienste, Gebäudereinigung, Gartenpflege und Winterdienst – engagiert & modern in Flensburg und Umgebung.",
 
    icons: {
      icon: "/logo.png", // funktioniert auch mit .png oder .svg, z. B. "/logo.svg"
    },
    keywords: [
    "Hausmeisterservice Flensburg",
    "Gebäudereinigung",
    "Winterdienst",
    "Gartenpflege",
    "Hausmeister",
    "Immobilienservice",
    "TJ Objekt Services",
  ],
  twitter: {
    card: "summary_large_image",
    title: "TJ Objekt Services – Hausmeisterservice in Flensburg & Umgebung",
    description: "Professioneller Service für Gebäude, Gärten und mehr – zuverlässig, jung & engagiert.",
    images: ["https://tj-objektservice-9dc1.vercel.app/logo.png"],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TJ Objekt Services – Hausmeisterservice in Flensburg & Umgebung",
    description:
      "Professioneller Service für Gebäude, Gärten und mehr – zuverlässig, jung & engagiert.",
    url: "https://www.tj-objektservices.de",
    siteName: "TJ Objekt Services",
    locale: "de_DE",
    type: "website",

    images: [
      {
        url: "https://tj-objektservice-9dc1.vercel.app/logo.png", 
        width: 1200,
        height: 630,
        alt: "TJ Objekt Services ",
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
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
