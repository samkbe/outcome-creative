import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://outcomecreative.com"),
  title: "Creative Agency in NYC | Outcome Creative",
  description:
    "We are Outcome Creative. A strategic branding, design, and business development shop that toes the line between solving for creativity and growth. Contact Us.",
  openGraph: {
    title: "Outcome Creative",
    description:
      "A strategic branding, design, and business development shop that toes the line between solving for creativity and growth.",
    url: "/",
    siteName: "Outcome Creative",
    images: [
      {
        url: "/outcome-creative-logo.jpg",
        width: 4000,
        height: 917,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      url: "https://outcomecreative.com/",
      name: "Outcome Creative",
      description:
        "We are Outcome Creative. A strategic branding, design, and business development shop that toes the line between solving for creativity and growth. Contact Us.",
    },
    {
      "@type": "Service",
      url: "https://outcomecreative.com/#services",
      serviceType: "Creative agency services",
      name: "Our Services",
      description: "Overview of our services",
    },
    {
      "@type": "ContactPage",
      url: "https://outcomecreative.com/#footer",
      contactType: "customer support",
      name: "Contact Us",
      description: "Get In Touch Today",
    },
    {
      "@type": "CollectionPage",
      url: "https://outcomecreative.com/#projects",
      name: "Projects",
      description: "Our portfolio of projects",
    },
  ],
};

const aeonik = localFont({
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
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={aeonik.variable + " dark:bg-black"}>{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4WTWFNSW35" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}
