import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | INFEST 2025`,
    default: "INFEST 2025"
  },
  description: "INFEST (Investment Festival) is an annual event organized by KSEP ITB, dedicated to educating students and the public about investing and the capital market.",
  keywords: [
    "infest",
    "INFEST",
    "INFEST ITB",
    "Investment Festival",
    "ITB",
    "Institut Teknologi Bandung",
    "Investment",
    "Equity Research Competition",
    "Business Case Competition",
    "Competition",
    "infestbdg"
  ],
  authors: [{ name: "KSEP ITB" }],
  creator: "Kelompok Studi Ekonomi dan Pasar Modal ITB",
  publisher: "KSEP ITB",
  applicationName: "INFEST 2025",
  metadataBase: new URL("https://www.infestbdg.com"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.infestbdg.com",
    title: "INFEST ITB 2025 - Investment Festival ITB",
    description: "INFEST (Investment Festival) is an annual event organized by KSEP ITB, dedicated to educating students and the public about investing and the capital market.",
    siteName: "INFEST ITB 2025",
    images: [
      {
        url: `https://www.infestbdg.com/logo-ksep.png`,
        width: 1200,
        height: 630,
        alt: "INFEST ITB 2025 - Investment Festival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFEST ITB 2025 - Investment Festival ITB",
    description: "INFEST (Investment Festival) is an annual event organized by KSEP ITB, dedicated to educating students and the public about investing and the capital market.",
    images: [
      {
        url: `https://www.infestbdg.com/logo-ksep.png`,
        width: 1200,
        height: 630,
        alt: "INFEST ITB 2025 - Investment Festival",
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

