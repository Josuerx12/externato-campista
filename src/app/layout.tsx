import type { Metadata } from "next";
import "./globals.css";

import { Parisienne, Montserrat } from "next/font/google";

export const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Externato Campista",
  description: "Externato campista a escola ideal para seu filho!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${parisienne.className} ${montserrat.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
