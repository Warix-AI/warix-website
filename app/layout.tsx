import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/chrome/Header";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { SITE } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Warix",
    template: "%s — Warix",
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} bg-background antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
