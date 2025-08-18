import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Equity Research Competition",
    description: "Join the Equity Research Competition at INFEST ITB 2025. Showcase your analytical skills in financial markets and compete with Indonesia's brightest minds.",
    keywords: [
      "INFEST ITB",
      "Investment Festival",
      "ITB",
      "Institut Teknologi Bandung",
      "Investment",
      "Equity Research Competition",
      "Financial Analysis",
      "Stock Research",
      "Capital Markets",
      "Competition",
    ],
    authors: [{ name: "KSEP ITB" }],
    creator: "Kelompok Studi Ekonomi dan Pasar Modal ITB",
    publisher: "KSEP ITB",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `https://www.infestbdg.com/erc`,
      title: "Equity Research Competition - INFEST ITB 2025",
      description: "Join the Equity Research Competition at INFEST ITB 2025. Showcase your analytical skills in financial markets and compete with Indonesia's brightest minds.",
      siteName: "INFEST ITB 2025",
      images: [
        {
          url: `https://www.infestbdg.com/logo-ksep.svg`,
          width: 1200,
          height: 630,
          alt: "INFEST ITB 2025 - Equity Research Competition",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Equity Research Competition - INFEST ITB 2025",
      description: "Join the Equity Research Competition at INFEST ITB 2025. Showcase your analytical skills in financial markets and compete with Indonesia's brightest minds.",
    },
  };
}

export default function Layout({children}: {children: React.ReactNode}) {
    return <>{children}</>;
}