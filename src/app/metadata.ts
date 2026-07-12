import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poojaa G | HR Professional Portfolio",
  description: "Building workplaces where people and performance grow together",
  keywords: ["HR", "Human Resources", "Portfolio", "HR Professional", "Talent Management"],
  openGraph: {
    title: "Poojaa G | HR Professional Portfolio",
    description: "Building workplaces where people and performance grow together",
    url: "https://poojaag.vercel.app", // Replace with your actual domain
    siteName: "Poojaa G | HR Professional Portfolio",
    images: [
      {
        url: "https://poojaag.vercel.app/Logo.png", // Replace with your actual image URL
        width: 800,
        height: 600,
        alt: "Poojaa G Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poojaa G | HR Professional Portfolio",
    description: "Building workplaces where people and performance grow together",
    images: ["https://poojaag.vercel.app/Logo.png"], // Replace with your actual image URL
  },
};