import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Event",
    description: "Participate in INFEST's Main Event and Pre Event to gain more insights on the capital market and investing world!",
    keywords: [
      "INFEST ITB",
      "Investment Festival",
      "ITB",
      "Institut Teknologi Bandung",
      "Investment",
      "Event",
      "Main Event",
      "Pre Event",
      "Capital Markets",
      "Competition",
      "Talkshow",
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
      url: `https://www.infestbdg.com/event`,
      title: "Event - INFEST ITB 2025",
      description: "Participate in INFEST's Main Event and Pre Event to gain more insights on the capital market and investing world!",
      siteName: "INFEST ITB 2025",
      images: [
        {
          url: `https://www.infestbdg.com/logo-ksep.svg`,
          width: 1200,
          height: 630,
          alt: "INFEST ITB 2025 - Event",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Event - INFEST ITB 2025",
      description: "Participate in INFEST's Main Event and Pre Event to gain more insights on the capital market and investing world!",
    },
  };
}

export default function Layout({children}: {children: React.ReactNode}) {
    return <>{children}</>;
}