import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Business Case Competition - INFEST ITB 2025",
    description:
      "Join the Business Case Competition at INFEST ITB 2025. Solve real-world business challenges, develop strategic thinking, and compete with top students from across Indonesia.",
    keywords: [
      "INFEST ITB",
      "Investment Festival",
      "ITB",
      "Institut Teknologi Bandung",
      "Business Case Competition",
      "Business Strategy",
      "Problem Solving",
      "Case Study",
      "Competition",
      "Student Competition",
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
      url: `https://www.infestbdg.com/bcc`,
      title: "Business Case Competition - INFEST ITB 2025",
      description:
        "Join the Business Case Competition at INFEST ITB 2025. Solve real-world business challenges, develop strategic thinking, and compete with top students from across Indonesia.",
      siteName: "INFEST ITB 2025",
      images: [
        {
          url: `https://www.infestbdg.com/logo-ksep.svg`,
          width: 1200,
          height: 630,
          alt: "INFEST ITB 2025 - Business Case Competition",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Business Case Competition - INFEST ITB 2025",
      description:
        "Join the Business Case Competition at INFEST ITB 2025. Solve real-world business challenges, develop strategic thinking, and compete with top students from across Indonesia.",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}