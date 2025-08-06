// ===== نظام SEO المتكامل لمشروع Filakaros =====

import { Metadata } from 'next'

// الكلمات المفتاحية الأساسية
export const keywords = {
  primary: [
    'Filakaros',
    'IKAROS token',
    'cultural heritage blockchain',
    'heritage preservation cryptocurrency',
    'NFT cultural artifacts',
    'DeFi cultural heritage',
    'blockchain heritage preservation',
    'AI cultural preservation'
  ],
  secondary: [
    'cryptocurrency',
    'blockchain technology',
    'Web3',
    'NFTs',
    'DeFi',
    'cultural heritage',
    'digital preservation',
    'smart contracts',
    'tokenization',
    'decentralized finance',
    'artificial intelligence',
    'augmented reality',
    'virtual reality',
    'heritage sites',
    'cultural artifacts',
    'museum digitization',
    'heritage tourism',
    'cultural investment'
  ],
  technical: [
    'Binance Smart Chain',
    'BSC',
    'ERC-20',
    'smart contracts',
    'staking',
    'yield farming',
    'governance token',
    'presale',
    'airdrop',
    'liquidity pool',
    'market cap',
    'tokenomics'
  ]
}

// معلومات الموقع الأساسية
export const siteInfo = {
  name: 'Filakaros',
  title: 'Filakaros - Cultural Heritage Meets Blockchain Technology',
  description: 'Preserve the past, build the future with IKAROS token. Revolutionary blockchain platform combining AI-powered cultural heritage preservation with Web3 technology, NFTs, and DeFi.',
  url: 'https://filakaros.com',
  ogImage: 'https://filakaros.com/images/og-image.jpg',
  twitterHandle: '@IkarosWorld1975',
  locale: 'en_US',
  type: 'website'
}

// دالة لإنشاء metadata محسن لكل صفحة
export function createSEOMetadata({
  title,
  description,
  keywords: pageKeywords = [],
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noIndex?: boolean
}): Metadata {
  const fullTitle = title.includes('Filakaros') ? title : `${title} | ${siteInfo.name}`
  const url = `${siteInfo.url}${path}`
  const ogImage = image || siteInfo.ogImage
  
  // دمج الكلمات المفتاحية
  const allKeywords = [
    ...keywords.primary,
    ...pageKeywords,
    ...keywords.secondary.slice(0, 10) // أول 10 كلمات ثانوية
  ]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: authors ? authors.map(name => ({ name })) : [{ name: 'Filakaros Team' }],
    creator: 'Filakaros Team',
    publisher: 'Filakaros',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    
    // Open Graph
    openGraph: {
      type,
      locale: siteInfo.locale,
      url,
      title: fullTitle,
      description,
      siteName: siteInfo.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: 'image/jpeg'
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime })
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: siteInfo.twitterHandle,
      creator: siteInfo.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImage]
    },

    // Additional meta tags
    other: {
      'theme-color': '#6366f1',
      'msapplication-TileColor': '#6366f1',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no'
    },

    // Canonical URL
    alternates: {
      canonical: url
    }
  }
}

// Schema.org structured data
export const structuredData = {
  // بيانات المنظمة
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Filakaros',
    alternateName: 'IKAROS',
    url: siteInfo.url,
    logo: `${siteInfo.url}/images/logo.png`,
    description: siteInfo.description,
    foundingDate: '2024',
    sameAs: [
      'https://t.me/ikarosworld',
      'https://x.com/IkarosWorld1975',
      'https://www.facebook.com/share/1Yv6gECr65/',
      'https://www.instagram.com/ikaros.worlds'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@filakaros.com',
      availableLanguage: ['English', 'Arabic']
    }
  },

  // بيانات العملة المشفرة
  cryptocurrency: {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'IKAROS Token',
    description: 'IKAROS is the native utility token of the Filakaros ecosystem, powering cultural heritage preservation through blockchain technology.',
    about: {
      '@type': 'Thing',
      name: 'Cultural Heritage Preservation',
      description: 'Blockchain-based platform for preserving global cultural heritage'
    },
    creator: {
      '@type': 'Organization',
      name: 'Filakaros'
    }
  },

  // بيانات الموقع الإلكتروني
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteInfo.name,
    url: siteInfo.url,
    description: siteInfo.description,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteInfo.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  },

  // بيانات المنتج (التوكن)
  product: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IKAROS Token',
    description: 'Revolutionary cryptocurrency token for cultural heritage preservation and Web3 ecosystem',
    brand: {
      '@type': 'Brand',
      name: 'Filakaros'
    },
    category: 'Cryptocurrency',
    offers: {
      '@type': 'Offer',
      price: '0.001',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name: 'Filakaros'
      }
    }
  }
}

// دالة لإنشاء JSON-LD
export function generateJSONLD(data: any): string {
  return JSON.stringify(data, null, 2)
}

// معلومات الصفحات المختلفة
export const pagesSEO = {
  home: {
    title: 'Filakaros - Cultural Heritage Meets Blockchain | IKAROS Token',
    description: 'Revolutionary blockchain platform preserving global cultural heritage through AI, NFTs, and DeFi. Join the IKAROS ecosystem and invest in the future of cultural preservation.',
    keywords: [...keywords.primary, 'homepage', 'cultural blockchain platform', 'heritage investment']
  },
  
  whitepaper: {
    title: 'Filakaros Whitepaper - Technical Documentation | IKAROS Token',
    description: 'Comprehensive technical documentation of Filakaros platform. Learn about IKAROS tokenomics, cultural heritage preservation technology, and blockchain implementation.',
    keywords: ['whitepaper', 'technical documentation', 'tokenomics', 'blockchain technology']
  },

  contact: {
    title: 'Contact Filakaros Team - Get in Touch | IKAROS Support',
    description: 'Contact the Filakaros team for partnerships, support, or inquiries about IKAROS token and cultural heritage preservation projects.',
    keywords: ['contact', 'support', 'partnership', 'customer service']
  },

  faq: {
    title: 'Frequently Asked Questions - Filakaros & IKAROS Token FAQ',
    description: 'Find answers to common questions about Filakaros platform, IKAROS token, cultural heritage preservation, and blockchain technology.',
    keywords: ['FAQ', 'questions', 'answers', 'help', 'support']
  }
}
