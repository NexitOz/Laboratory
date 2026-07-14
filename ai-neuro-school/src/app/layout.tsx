import type { Metadata } from "next";
import { Geist, Geist_Mono, Golos_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800", "900"],
});

const siteUrl = "https://neuro.school";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Neuro School — Личный AI-куратор по нейросетям",
  description:
    "Обучение Higgsfield AI, ChatGPT, Midjourney, Flux, Runway, ElevenLabs и Suno с личным куратором. Перестаньте сжигать кредиты впустую — создавайте профессиональный AI-контент уже сегодня.",
  keywords: [
    "нейросети обучение",
    "Higgsfield AI",
    "AI куратор",
    "курс нейросети",
    "ChatGPT обучение",
    "Midjourney курс",
    "AI контент",
  ],
  openGraph: {
    title: "Neuro School — Личный AI-куратор по нейросетям",
    description:
      "Профессиональное обучение AI-инструментам с личным куратором. Экономьте кредиты, растите быстрее.",
    url: siteUrl,
    siteName: "Neuro School",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro School — Личный AI-куратор по нейросетям",
    description:
      "Профессиональное обучение AI-инструментам с личным куратором. Экономьте кредиты, растите быстрее.",
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
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${golosText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-silver selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
