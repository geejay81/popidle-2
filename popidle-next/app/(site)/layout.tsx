import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/page/Navbar";
import Footer from "@/components/page/Footer";
import ConsentManagementPlatform from "@/components/client-apps/ConsentManagementPlatform";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || ''),
  title: process.env.GAME_TITLE,
  description: "Guess the album from the pixelated image of the cover art.",
  icons: {
    icon: `/themes/${process.env.GAME_TITLE}/favicon.ico`,
    apple: `/themes/${process.env.GAME_TITLE}/apple-touch-icon.png`,
  },
  openGraph: {
    title: process.env.GAME_TITLE,
    images: `/themes/${process.env.GAME_TITLE}/popidle-card.jpg`
  },
  twitter: {
    images: `/themes/${process.env.GAME_TITLE}/popidle-card.jpg`,
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Script src="/scripts/clarity.js" id="clarity-script" data-project-id={process.env.CLARITY_PROJECT_ID} strategy="afterInteractive"></Script>
        <ConsentManagementPlatform GA_MEASUREMENT_ID={process.env.GTAG || ''} />
      </body>
    </html>
  );
}
