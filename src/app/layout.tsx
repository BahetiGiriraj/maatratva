import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Maatratva — From Womb to Wonder | Holistic Pregnancy Wellness",
    template: "%s | Maatratva",
  },
  description:
    "Maatratva is a premium holistic pregnancy wellness platform integrating Garbh Sanskar, Ayurveda, prenatal yoga, meditation, NLP, and modern scientific care — supporting mothers from fertility to postpartum.",
  keywords: [
    "pregnancy wellness", "Garbh Sanskar", "prenatal yoga", "pregnancy care India",
    "holistic pregnancy", "Ayurveda pregnancy", "NLP pregnancy", "pregnancy meditation",
    "Dheera Somani", "Maatratva", "postpartum recovery", "fertility wellness",
    "IVF support", "high-risk pregnancy care", "womb design",
  ],
  authors: [{ name: "Maatratva", url: "https://maatratva.com" }],
  creator: "Maatratva",
  publisher: "Maatratva",
  metadataBase: new URL("https://maatratva.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maatratva.com",
    siteName: "Maatratva",
    title: "Maatratva — From Womb to Wonder",
    description: "A journey of care, connection and growth. Holistic pregnancy wellness integrating Garbh Sanskar, Ayurveda, prenatal yoga, and modern science.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maatratva — From Womb to Wonder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatratva — From Womb to Wonder",
    description: "Holistic pregnancy wellness platform supporting mothers with Garbh Sanskar, Ayurveda, prenatal yoga, and modern science.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for faster Google Fonts load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cormorant Garamond + Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q2MHJZTWRY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q2MHJZTWRY');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
