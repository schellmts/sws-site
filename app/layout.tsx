import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";

import { SmoothRouteScroll } from "./components/smooth-route-scroll";
import { SmoothScroll } from "./components/smooth-scroll";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Schell Web Services · Desenvolvimento de software",
  description:
    "Desenvolvimento de software sob medida: web, APIs, cloud e produto digital com performance e engenharia sólida.",
  openGraph: {
    title: "Schell Web Services",
    description:
      "Engenharia de software ponta a ponta para produtos web de alto desempenho.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <SmoothRouteScroll />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
