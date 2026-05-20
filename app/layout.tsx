import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { defaultMetadata } from "@/seo.config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: "Insight Edge Global | Precious Metals Audit & Advisory UAE",
    template: "%s | Insight Edge Global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
