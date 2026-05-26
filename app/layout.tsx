import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aislamientos Chairi · Pladur, aislamiento y reformas",
  description:
    "Especialistas en pladur, aislamiento térmico y acústico y reformas integrales en Madrid y alrededores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
