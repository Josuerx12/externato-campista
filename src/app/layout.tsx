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
      <head>
        <meta
          name="google-site-verification"
          content="CrboVbG73I2qJN3shePFE_iEHjTxRomUIEjuk2cHsLM"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
