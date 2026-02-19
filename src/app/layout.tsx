import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Navbar } from "@/components/layout/Navbar/Navbar";

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

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    title: "ALIDIA",
    description:
      "Liderazgo en innovación e inteligencia artificial en Ecuador, con un equipo liderado por Ing. Richard Sucuy y especialistas en ingeniería, innovación e infraestructura tecnológica.",
    url: "https://alidia.org",
    siteName: "ALIDIA",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
      }
    ],
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
    <html lang="es">
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
