'use client';

import { Antonio, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Menu from '@/components/Menu';
import CustomCursor from '@/components/CustomCursor';

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-antonio",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Poojaa G" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${antonio.variable} ${cormorant.variable} ${inter.variable} antialiased bg-[#050505] text-zinc-100`}>
        <CustomCursor />
        <Menu />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
