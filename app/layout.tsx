import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dilges-koc-website.vercel.app"),
  title: {
    default: "Dilges Koc",
    template: "%s | Dilges Koc",
  },
  description:
    "Moderne Webentwicklung, Landingpages, Firmenwebseiten und Frontend-Lösungen von Dilges Koc.",
  openGraph: {
    title: "Dilges Koc",
    description:
      "Moderne Webentwicklung, Landingpages, Firmenwebseiten und Frontend-Lösungen von Dilges Koc.",
    url: "https://dilges-koc-website.vercel.app",
    siteName: "Dilges Koc",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilges Koc",
    description:
      "Moderne Webentwicklung, Landingpages, Firmenwebseiten und Frontend-Lösungen von Dilges Koc.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
