import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Navbar } from "@/components/layout/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alidia.org"),

  title: {
    default: "ALIDIA | Innovación y Desarrollo en Inteligencia Artificial",
    template: "%s | ALIDIA",
  },

  description:
    "ALIDIA es una alianza para el liderazgo e innovación en inteligencia artificial y tecnología. Equipo liderado por Ing. Richard Sucuy junto a profesionales como Ing. Karla Aguilar, Ing. Bryan Cuero, Ing. Dylan Sócola y colaboración académica del PhD. Eduardo Tusa.",

  keywords: [
    "inteligencia artificial",
    "IA Ecuador",
    "innovación tecnológica",
    "desarrollo IA",
    "transformación digital",
    "ALIDIA",
    "ALIDIA ORG",
    "alidia",
    "alidia org",

    "Richard Sucuy",
    "Karla Aguilar",
    "Bryan Cuero",
    "Dylan Sócola",
    "Eduardo Tusa",
  ],

  authors: [
    { name: "ALIDIA" },
    { name: "Richard Sucuy" },
    { name: "Karla Aguilar" },
    { name: "Bryan Cuero" },
    { name: "Dylan Sócola" },
  ],

  openGraph: {
    title: "ALIDIA",
    description:
      "Liderazgo en innovación e inteligencia artificial en Ecuador, con un equipo liderado por Ing. Richard Sucuy y especialistas en ingeniería, innovación e infraestructura tecnológica.",
    url: "https://alidia.org",
    siteName: "ALIDIA",
    locale: "es_EC",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ALIDIA",
    description:
      "Innovación, inteligencia artificial y desarrollo tecnológico en Ecuador.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://alidia.org",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header>
          <Navbar />
        </header>

        {children}
        {/* Chatbot global */}
        <ChatWidget />
      </body>
    </html>
  );
}
