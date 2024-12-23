import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

import Footer from "@/shared/components/Footer";
import Navbar from "@/shared/components/Navbar";
import TanStackProvider from "@/providers/Tanstack.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Hooks",
  description: "Ticket Hooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        <TanStackProvider>
          <Navbar />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
