import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingDock from "@/components/ui/FloatingDock";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://moustaphacheikhJidou.github.io/MyPortfolio";
const title = "El Moustpha Cheikh Jiddou — AI & Data Engineer";
const description =
  "State Engineer in Statistics & Data Engineering (ESP Mauritania). Building AI chatbots, RAG systems and data pipelines.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "El Moustpha Cheikh Jiddou" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      { url: withBasePath("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: withBasePath("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: withBasePath("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { url: withBasePath("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: withBasePath("/apple-touch-icon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", spaceGrotesk.variable, inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <ScrollProgress />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingDock />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
