/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  eslint: {
    dirs: ['src'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // إعدادات معالجة الأخطاء
  onDemandEntries: {
    // فترة الاحتفاظ بالصفحات في الذاكرة
    maxInactiveAge: 25 * 1000,
    // فترة التحديث
    pagesBufferLength: 2,
  },
  // تحسين الأداء
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
