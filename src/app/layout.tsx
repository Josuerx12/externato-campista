import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
