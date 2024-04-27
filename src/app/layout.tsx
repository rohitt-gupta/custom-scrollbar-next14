import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScroll";

import { GeistSans } from "geist/font/sans";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "#DominateTwitter Club",
  description: "A club of digital nomads",
  icons: {
    icon: "/dt-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " antialiased"}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
