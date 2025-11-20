import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code by Andy | Web Development Partner for Small Businesses",
  description: "Professional web development partner for small businesses and entrepreneurs. Custom websites and web apps built with care, thoughtfully designed to grow with your business. No jargon, just quality work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${readexPro.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
