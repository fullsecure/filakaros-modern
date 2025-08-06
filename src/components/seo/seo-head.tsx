"use client"

import Head from 'next/head'
import { generateJSONLD } from '@/lib/seo'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  structuredData?: any
  noIndex?: boolean
  canonical?: string
}

export function SEOHead({
  title = "Filakaros - Cultural Heritage Meets Blockchain",
  description = "Revolutionary blockchain platform preserving global cultural heritage through AI, NFTs, and DeFi.",
  keywords = [],
  image = "https://filakaros.com/images/og-image.jpg",
  url = "https://filakaros.com",
  type = "website",
  structuredData,
  noIndex = false,
  canonical
}: SEOHeadProps) {
  const fullTitle = title.includes('Filakaros') ? title : `${title} | Filakaros`
  const keywordsString = keywords.length > 0 ? keywords.join(', ') : undefined

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <meta name="author" content="Filakaros Team" />
      <meta name="creator" content="Filakaros Team" />
      <meta name="publisher" content="Filakaros" />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Filakaros" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@IkarosWorld1975" />
      <meta name="twitter:creator" content="@IkarosWorld1975" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJSONLD(structuredData)
          }}
        />
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  )
}

// مكون مبسط للصفحات
export function PageSEO({
  title,
  description,
  path = "",
  keywords = [],
  structuredData
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  structuredData?: any
}) {
  const url = `https://filakaros.com${path}`
  
  return (
    <SEOHead
      title={title}
      description={description}
      url={url}
      keywords={keywords}
      structuredData={structuredData}
      canonical={url}
    />
  )
}

// مكون للمقالات
export function ArticleSEO({
  title,
  description,
  path = "",
  keywords = [],
  publishedTime,
  modifiedTime,
  authors = ["Filakaros Team"],
  structuredData
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  structuredData?: any
}) {
  const url = `https://filakaros.com${path}`
  
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": authors.map(author => ({
      "@type": "Person",
      "name": author
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Filakaros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://filakaros.com/images/logo.png"
      }
    }
  }
  
  return (
    <SEOHead
      title={title}
      description={description}
      url={url}
      type="article"
      keywords={keywords}
      structuredData={structuredData || articleStructuredData}
      canonical={url}
    />
  )
}
