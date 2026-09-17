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
    default: "Aislamientos Chairi · Pladur, aislamiento y reformas en Ceuta",
    template: "%s",
  },
  description:
    "Pladur, aislamiento térmico y acústico y reformas en Ceuta. Cuadrilla propia, presupuesto cerrado y 2 años de garantía. 20 años y +500 obras.",
  openGraph: {
    title: "Aislamientos Chairi · Ceuta",
    description: "Pladur, aislamiento y reformas en Ceuta. Obra limpia, plazo real y acabado de verdad.",
    locale: "es_ES",
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Cuadrilla de Aislamientos Chairi montando pladur en Ceuta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aislamientos Chairi · Ceuta",
    description: "Pladur, aislamiento y reformas en Ceuta.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.GOOGLE_SITE_VERIFICATION
            ? { google: process.env.GOOGLE_SITE_VERIFICATION }
            : {}),
          ...(process.env.BING_SITE_VERIFICATION
            ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
            : {}),
        },
      }
    : {}),
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
