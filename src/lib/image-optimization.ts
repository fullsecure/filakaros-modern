// ===== تحسين الصور والأداء =====

export const imageConfig = {
  // أحجام الصور المختلفة للاستجابة
  sizes: {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1200px) 50vw', 
    desktop: '33vw'
  },
  
  // جودة الصور
  quality: {
    high: 90,      // للصور المهمة
    medium: 75,    // للصور العادية
    low: 60        // للصور الثانوية
  },
  
  // تنسيقات الصور المدعومة
  formats: {
    webp: 'image/webp',
    avif: 'image/avif',
    jpeg: 'image/jpeg',
    png: 'image/png'
  }
}

// دالة لتحسين مسار الصورة
export function getOptimizedImageSrc(
  src: string, 
  width?: number, 
  quality: keyof typeof imageConfig.quality = 'medium'
): string {
  // في Next.js، التحسين يتم تلقائياً
  // هذه الدالة للاستخدام المستقبلي مع CDN
  return src
}

// دالة للحصول على أحجام الصور المناسبة
export function getResponsiveSizes(breakpoints?: {
  mobile?: string
  tablet?: string  
  desktop?: string
}): string {
  const { mobile, tablet, desktop } = {
    ...imageConfig.sizes,
    ...breakpoints
  }
  
  return `${mobile}, ${tablet}, ${desktop}`
}

// دالة لتحديد أولوية تحميل الصور
export function getImagePriority(isAboveFold: boolean = false): boolean {
  return isAboveFold
}

// معلومات الصور للمشاريع مع Alt Text محسن للـ SEO
export const projectImages = {
  'civilizations-ai': {
    src: '/images/projects/Civilizations.png',
    alt: 'Civilizations AI Game - Interactive Cultural Heritage Exploration with NFT Country Boxes and AI-Powered Guides for 195 Countries',
    priority: false,
    quality: 'medium' as const,
    seoKeywords: ['civilizations AI', 'cultural exploration game', 'NFT country boxes', 'heritage gaming']
  },
  'nft-marketplace': {
    src: '/images/projects/nftmarketplace.png',
    alt: 'Cultural Heritage NFT Marketplace - Digital Trading Platform for Cultural Artifacts and Heritage Assets on Blockchain',
    priority: false,
    quality: 'medium' as const,
    seoKeywords: ['NFT marketplace', 'cultural heritage NFTs', 'digital artifacts', 'blockchain trading']
  },
  'trading-platform': {
    src: '/images/projects/trading-platform.png',
    alt: 'IKAR Trading Platform - Professional Grade Cryptocurrency Trading Platform with Advanced Analytics and Institutional Security',
    priority: true,
    quality: 'high' as const,
    seoKeywords: ['trading platform', 'cryptocurrency exchange', 'professional trading', 'IKAR platform']
  },
  'ikar-platform': {
    src: '/images/projects/ikarosDeFiPlatform.png',
    alt: 'IKAR DeFi Platform - Decentralized Finance Ecosystem for IKAROS Token Staking, Governance, and Yield Farming',
    priority: false,
    quality: 'medium' as const,
    seoKeywords: ['DeFi platform', 'IKAROS staking', 'decentralized finance', 'yield farming']
  }
}

// دالة للحصول على معلومات الصورة
export function getProjectImageInfo(projectId: string) {
  return projectImages[projectId as keyof typeof projectImages]
}

// نصائح لتحسين الأداء
export const performanceTips = {
  // استخدم WebP عندما يكون مدعوماً
  useWebP: true,
  
  // استخدم lazy loading للصور غير المرئية
  useLazyLoading: true,
  
  // استخدم placeholder أثناء التحميل
  usePlaceholder: true,
  
  // ضغط الصور قبل الرفع
  compressImages: true,
  
  // استخدم CDN للصور
  useCDN: false // يمكن تفعيله لاحقاً
}

// دالة لفحص دعم تنسيق الصور
export function checkImageFormatSupport(): {
  webp: boolean
  avif: boolean
} {
  if (typeof window === 'undefined') {
    return { webp: false, avif: false }
  }
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  
  return {
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
    avif: canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0
  }
}
