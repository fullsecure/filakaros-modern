import type { Metadata } from "next";
import { Inter, Cinzel, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { siteConfig } from "@/lib/config";
import { createSEOMetadata, structuredData, generateJSONLD } from "@/lib/seo";

// تحسين الخطوط للموقع
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://filakaros.com'),
  ...createSEOMetadata({
    title: "Filakaros - Cultural Heritage Meets Blockchain | IKAROS Token",
    description: "Revolutionary blockchain platform preserving global cultural heritage through AI, NFTs, and DeFi. Join the IKAROS ecosystem and invest in the future of cultural preservation.",
    keywords: [
      "cultural heritage blockchain",
      "heritage preservation cryptocurrency",
      "NFT cultural artifacts",
      "DeFi cultural heritage",
      "AI cultural preservation",
      "blockchain heritage preservation",
      "IKAROS token presale",
      "Web3 cultural platform"
    ]
  }),
  // إضافة معلومات إضافية للـ metadata
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    'theme-color': '#6366f1',
    'msapplication-TileColor': '#6366f1',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cinzel.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJSONLD(structuredData.organization)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJSONLD(structuredData.website)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJSONLD(structuredData.product)
          }}
        />

        <ErrorBoundary>
          <ThemeProvider
            defaultTheme="dark"
            storageKey="filakaros-ui-theme"
          >
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
