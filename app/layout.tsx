import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
  display: "swap", // Use font-display: swap for faster rendering
  preload: true, // Preload the font
});

export const metadata: Metadata = {
  title: "Code by Andy | Web Development Partner for Small Businesses",
  description: "Web development partner for small businesses and entrepreneurs. Custom websites and web apps built with care, thoughtfully designed to grow your business.",
  keywords: ["Web development", "Custom website", "Shopify developer"],
  authors: [{name: "Andy McGuinness", url: "https://andymcguinness.com"}],
  creator: "Andy McGuinness",
  publisher: "Andy McGuinness",
  metadataBase: new URL("https://codebyandy.com"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  icons: {
    icon: "/favicon.ico"
  },
  other: {
    "x-robots": "index"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${readexPro.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
