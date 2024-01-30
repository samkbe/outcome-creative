"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/themeContext";

const metadata: Metadata = {
  title: "Outcome Creative",
  description: "Outcome Creative Description",
};

export const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik-Air.woff2",
      weight: "100",
    },
    {
      path: "../public/fonts/Aeonik-Light.woff2",
      weight: "200",
    },
    {
      path: "../public/fonts/Aeonik-Thin.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Aeonik-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Aeonik-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aeonik-Bold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/Aeonik-Black.woff2",
      weight: "700",
    },
  ],
  variable: "--font-aeonik",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <body className={aeonik.variable + " dark:bg-black"}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
