import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/page/Navbar";
import Footer from "@/components/page/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PopIdle",
  description: "Music puzzles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto px-5 py-5 bg-gray-700 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
