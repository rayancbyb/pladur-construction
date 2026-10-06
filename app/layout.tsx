import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, JetBrains_Mono } from "next/font/google";
import Tape from "@/components/Tape";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Aislamientos Chairi · Pladur, lana de roca y reformas en Ceuta",
    template: "%s",
  },
  description:
    "Pladur en Ceuta, aislamiento térmico y acústico, lana de roca proyectada, techos y reformas. Cuadrilla propia, presupuesto cerrado y 2 años de garantía. Tel. +34 681 36 95 08.",
  keywords: [
    "pladur ceuta",
    "pladur en ceuta",
    "aislamiento ceuta",
    "aislamientos ceuta",
    "lana de roca ceuta",
    "techos pladur ceuta",
    "techos continuos ceuta",
    "aislamiento térmico ceuta",
    "aislamiento acústico ceuta",
    "reformas ceuta",
    "trasdosados ceuta",
    "Aislamientos Chairi",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "construction",
  openGraph: {
    title: "Aislamientos Chairi · Pladur y lana de roca en Ceuta",
    description:
      "Pladur, aislamiento, lana de roca proyectada, techos y reformas en Ceuta. Obra limpia, plazo real y acabado de verdad.",
    locale: "es_ES",
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Cuadrilla de Aislamientos Chairi montando pladur en Ceuta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aislamientos Chairi · Pladur y aislamiento en Ceuta",
    description: "Pladur, lana de roca, techos y reformas en Ceuta.",
    images: ["/og.jpg"],
  },
  alternates: {
    languages: { "es-ES": SITE.url },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  verification: {
    google: "6dUNxpoqvwtObWxbA47xko-ZfmyHb7CK-tNmkczTaxA",
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
  other: {
    "geo.region": "ES-CE",
    "geo.placename": "Ceuta",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFD60A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${archivoBlack.variable} ${jetbrains.variable}`}
    >
      <body>
        <Tape />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
