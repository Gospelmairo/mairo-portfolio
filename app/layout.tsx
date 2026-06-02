import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mairo Gospel — Backend Engineer | Data Engineer",
  description:
    "Backend Engineer specializing in scalable APIs, secure authentication systems, cloud-native applications, and production-ready backend services. Based in Lagos, Nigeria.",
  keywords: [
    "Backend Engineer", "API Development", "Node.js", "Go", "PostgreSQL",
    "Docker", "JWT", "OAuth", "REST API", "Data Engineer", "Lagos Nigeria",
  ],
  authors: [{ name: "Mairo Gospel" }],
  openGraph: {
    title: "Mairo Gospel — Backend Engineer",
    description:
      "Building scalable APIs, secure backend systems, cloud-native applications, and production-ready services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mairo Gospel — Backend Engineer",
    description:
      "Building scalable APIs, secure backend systems, cloud-native applications, and production-ready services.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
