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
  title: {
    default: "TEDx AIET 2025 - Ideas Worth Spreading",
    template: "%s | TEDx AIET",
  },
  description: "Join TEDx AIET 2025 featuring inspiring speakers including Lt Gen A Arun, Suyog Shetty, and more. Experience transformative ideas, innovation, and networking at Alva's Institute of Engineering and Technology.",
  keywords:[
    "TEDx AIET",
    "TEDx AIET 2025", 
    "TED talks",
    "Alva's Institute",
    "Engineering Technology",
    "Innovation",
    "Ideas Worth Spreading",
    "Speakers",
    "Lt Gen A Arun",
    "Suyog Shetty",
    "Patla Sathish Shetty",
    "Abhishek Mishra",
    "Janaki Anand",
    "Dr Achyuthan Eswar",
    "Sufiyan Alam",
    "Conference",
    "Event",
    "Moodbidri",
    "Karnataka",
    "India" 
  ],
  authors:[{name: "TEDx AIET", url: "https://tedxaiet.in"}],
  creator: "TEDx AIET",
  publisher: "Alva's Instituue of Engineering and Technology",
  formatDetection:{
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TEDx AIET 2025 - Ideas Worth Spreading",
    description: "Join TEDx AIET 2025 featuring inspiring speakers including Lt Gen A Arun, Suyog Shetty, and more. Experience transformative ideas, innovation, and networking at Alva's Institute of Engineering and Technology.",
    url: "https://tedxaiet.in",
    siteName: "TEDx AIET",
    images: [
      {
        url: "https://tedxaiet.in/QRcode/og-image.png",
        width: 1200,
        height: 630,
        alt: "TEDx AIET 2025 - Ideas Worth Spreading",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates:{
    canonical: "https://tedxaiet.in",
    languages: {
      "en-US": "https://tedxaiet.in",
    },
  },
  metadataBase: new URL("https://tedxaiet.in"),
  themeColor: "#000000",
  colorScheme: "dark",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/icon.svg",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  category: "Education",
  
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
  
        <link rel="preload" href="/logo-white.png" as="image"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} font-light antialiased`}>
        <SmoothScrollProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
