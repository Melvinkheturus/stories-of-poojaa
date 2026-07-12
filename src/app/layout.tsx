'use client';

import { Antonio, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Menu from '../components/Menu';

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
  const [loading, setLoading] = useState(true);

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

    // Minimal elegant loading delay for asset caching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
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
        {loading ? (
          <div className="fixed inset-0 bg-[#050505] z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="font-heading text-4xl tracking-[0.2em] animate-pulse">POOJA G</span>
              <div className="w-12 h-[1px] bg-zinc-700 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-zinc-200 animate-[loading_1.5s_infinite_ease-in-out]"></div>
              </div>
            </div>
            <style jsx>{`
              @keyframes loading {
                0% { left: -50%; }
                100% { left: 100%; }
              }
            `}</style>
          </div>
        ) : (
          <>
            <Menu />
            <main>
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  );
}
