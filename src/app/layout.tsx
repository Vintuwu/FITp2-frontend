import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getMetadataInfo } from "@/lib/getMetadataInfo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata>{
  const { siteName, siteDescription } = await getMetadataInfo()

  return {
    title: siteName,
    description: siteDescription,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
