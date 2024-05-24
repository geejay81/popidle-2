import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/page/Navbar";
import Footer from "@/components/page/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.GAME_TITLE,
  description: "Guess the album from the pixelated image of the cover art.",
  icons: {
    icon: `/${process.env.GAME_TITLE}/favicon.ico`,
    apple: `/${process.env.GAME_TITLE}/apple-touch-icon.png`,
  },
  openGraph: {
    title: process.env.GAME_TITLE,
    images: `/${process.env.GAME_TITLE}/popidle-card.jpg`
  },
  twitter: {
    images: `/${process.env.GAME_TITLE}/popidle-card.jpg`,
    card: "summary"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`flex min-h-full flex-col ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
