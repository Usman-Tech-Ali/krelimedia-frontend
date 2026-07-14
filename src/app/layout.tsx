import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usman-ali-krelimedia-frontend.vercel.app"),
  title: {
    default: "KRELIMEDIA | Where Strategy Meets Creativity",
    template: "%s | KRELIMEDIA"
  },
  description: "A full-service digital marketing agency based in Islamabad and Dubai. Specializing in Meta Ads, Google Ads, SEO, and Video Production.",
  keywords: ["digital marketing agency", "Meta Ads", "Google Ads", "SEO", "Video Production", "Islamabad", "Dubai"],
  openGraph: {
    title: "KRELIMEDIA | Where Strategy Meets Creativity",
    description: "A full-service digital marketing agency based in Islamabad and Dubai.",
    url: "https://usman-ali-krelimedia-frontend.vercel.app",
    siteName: "KRELIMEDIA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KRELIMEDIA | Where Strategy Meets Creativity",
    description: "A full-service digital marketing agency based in Islamabad and Dubai.",
  },
  alternates: {
    canonical: "https://usman-ali-krelimedia-frontend.vercel.app",
  }
};
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Krelimedia",
    "url": "https://usman-ali-krelimedia-frontend.vercel.app",
    "logo": "https://usman-ali-krelimedia-frontend.vercel.app/new-removebg-preview.png",
    "telephone": "051-2751107",
    "email": "info@krelimedia.com",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "streetAddress": "Naseem Arcade, I-9",
        "addressCountry": "PK"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "streetAddress": "Dubai Silicon Oasis",
        "addressCountry": "AE"
      }
    ],
    "sameAs": [
      "https://instagram.com/krelimedia",
      "https://facebook.com/krelimedia",
      "https://twitter.com/krelimedia",
      "https://linkedin.com/company/krelimedia"
    ]
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
