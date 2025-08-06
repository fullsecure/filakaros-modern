// ===== إدارة الصور المركزية =====

export const imageConfig = {
  // صور Hero Section
  hero: {
    homeimg: '/images/hero/homeimg.jpg',
    homeimg1: '/images/hero/homeimg1.jpg',
    homeimg2: '/images/hero/homeimg2.jpg',
    new3: '/images/hero/new3.jpg',
    new4: '/images/hero/new4.jpg',
    new5: '/images/hero/new5.jpg',
    // للتوافق مع الأسماء القديمة
    background1: '/images/hero/homeimg.jpg',
    background2: '/images/hero/homeimg1.jpg',
    background3: '/images/hero/homeimg2.jpg',
    cultural1: '/images/hero/new3.jpg',
    cultural2: '/images/hero/new4.jpg',
    cultural3: '/images/hero/new5.jpg',
  },
  
  // صور التراث الثقافي (استخدام الصور الموجودة كـ fallback)
  heritage: {
    museum: '/images/hero/homeimg.jpg',
    artifacts: '/images/hero/homeimg1.jpg',
    architecture: '/images/hero/homeimg2.jpg',
    traditional_art: '/images/hero/new3.jpg',
    monuments: '/images/hero/new4.jpg',
    cultural_site: '/images/hero/new5.jpg',
  },

  // صور التكنولوجيا (استخدام الصور الموجودة كـ fallback)
  technology: {
    ai: '/images/hero/new3.jpg',
    blockchain: '/images/hero/new4.jpg',
    ar_vr: '/images/hero/new5.jpg',
    nft: '/images/hero/homeimg.jpg',
    mobile_app: '/images/hero/homeimg1.jpg',
    digital_art: '/images/hero/homeimg2.jpg',
  },

  // صور الهواتف والتطبيقات
  mobile: {
    iphone: '/images/hero/homeimg.jpg',
    android: '/images/hero/homeimg1.jpg',
    trading_app: '/images/hero/homeimg2.jpg',
    wallet_app: '/images/hero/new3.jpg',
  },
  
  // اللوغو والأيقونات
  branding: {
    logo: '/images/logo.png',
    icon: '/icon.svg',
    favicon: '/favicon.ico',
  },
  
  // صور الشركاء
  partners: {
    coinmarketcap: '/images/coinmarketcap.png',
    pancakeswap: '/images/pancakeswap.png',
  }
}

// دالة للحصول على صورة مع fallback
export function getImageSrc(category: keyof typeof imageConfig, key: string, fallback?: string): string {
  const categoryImages = imageConfig[category] as Record<string, string>
  return categoryImages?.[key] || fallback || '/images/placeholder.svg'
}

// دالة للتحقق من وجود الصورة
export function hasImage(category: keyof typeof imageConfig, key: string): boolean {
  const categoryImages = imageConfig[category] as Record<string, string>
  return Boolean(categoryImages?.[key])
}

// أحجام الصور المختلفة للاستجابة
export const imageSizes = {
  hero: {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1024px) 80vw',
    desktop: '60vw'
  },
  card: {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw'
  },
  thumbnail: {
    mobile: '(max-width: 768px) 50vw',
    tablet: '(max-width: 1024px) 25vw',
    desktop: '20vw'
  },
  fullwidth: '100vw'
}

// نصوص بديلة للصور
export const imageAltTexts = {
  hero: {
    background1: 'خلفية رئيسية لموقع فيلاكاروس - التراث الثقافي وعملة إيكاروس',
    background2: 'صورة توضيحية للتكنولوجيا الحديثة والتراث',
    background3: 'مشهد يجمع بين الحضارة القديمة والتقنيات المتطورة',
    cultural1: 'تراث ثقافي عريق يلتقي مع التكنولوجيا',
    cultural2: 'فنون تقليدية محفوظة رقمياً',
    cultural3: 'آثار تاريخية في العصر الرقمي',
  },
  heritage: {
    museum: 'متحف يعرض التراث الثقافي العالمي',
    artifacts: 'قطع أثرية نادرة ومحفوظة رقمياً',
    architecture: 'عمارة تراثية تاريخية',
    traditional_art: 'فنون تقليدية وحرف يدوية',
    monuments: 'معالم تاريخية وأثرية',
    cultural_site: 'موقع ثقافي ذو أهمية تاريخية',
  },
  technology: {
    ai: 'تقنيات الذكاء الاصطناعي في حفظ التراث',
    blockchain: 'تقنية البلوك تشين لحماية التراث الرقمي',
    ar_vr: 'تقنيات الواقع المعزز والافتراضي',
    nft: 'الرموز غير القابلة للاستبدال للتراث الرقمي',
    mobile_app: 'تطبيق الهاتف المحمول لفيلاكاروس وعملة إيكاروس',
    digital_art: 'الفن الرقمي والإبداع التقني',
  },
  mobile: {
    iphone: 'تطبيق فيلاكاروس وعملة إيكاروس على آيفون',
    android: 'تطبيق فيلاكاروس وعملة إيكاروس على أندرويد',
    trading_app: 'واجهة تطبيق التداول',
    wallet_app: 'تطبيق المحفظة الرقمية',
  }
}

// دالة للحصول على النص البديل
export function getImageAlt(category: keyof typeof imageAltTexts, key: string, fallback?: string): string {
  const categoryAlts = imageAltTexts[category] as Record<string, string>
  return categoryAlts?.[key] || fallback || 'صورة توضيحية لموقع فيلاكاروس وعملة إيكاروس'
}
