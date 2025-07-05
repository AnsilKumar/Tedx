import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SmoothScrollProvider from "@/components/smoothscroolprovider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TEDx AIET",
  description: "TEDx AIET - Ideas Worth Spreading",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.className} cursor-none font-light antialiased`}>
        <SmoothScrollProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
