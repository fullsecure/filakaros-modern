import Head from "next/head"
import { siteConfig } from "@/lib/config"

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  noindex?: boolean
}

export function SEOHead({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url,
  type = "website",
  noindex = false,
}: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={pageUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@filakaros" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Filakaros Team" />
      <meta name="keywords" content="Filakaros, IKAROS, cryptocurrency, blockchain, Web3, NFT, cultural heritage, AI, AR, DeFi" />
      <meta name="theme-color" content="#6366f1" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteConfig.name,
            "description": siteConfig.description,
            "url": siteConfig.url,
            "logo": `${siteConfig.url}/images/projects/token.png`,
            "sameAs": [
              siteConfig.links.twitter,
              siteConfig.links.telegram,
              siteConfig.links.github,
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@filakaros.com",
            },
          }),
        }}
      />
    </Head>
  )
}
