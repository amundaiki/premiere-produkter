import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premiere Produkter – Profesjonelle renholdsmidler siden 1978",
  description:
    "Over 3 500 produkter for profesjonelt renhold. Renholdsmidler, maskiner, tørkepapir og utstyr. Levert fritt i hele Norge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
