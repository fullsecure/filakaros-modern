"use client"

import * as React from "react"
import { motion } from "framer-motion"

// خلفيات SVG متدرجة لكل شريحة
export const HeroBackgrounds = {
  heritage: () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-800/30 to-red-900/20" />
      
      {/* أنماط هندسية تراثية */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="heritage-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" opacity="0.3"/>
            <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heritage-pattern)" className="text-amber-400"/>
      </svg>
      
      {/* عناصر تراثية متحركة */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400">
          <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" fill="currentColor"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-16 w-24 h-24 opacity-15"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="currentColor"/>
          <rect x="30" y="30" width="40" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </motion.div>
    </div>
  ),

  technology: () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* خلفية متدرجة تقنية */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-800/30 to-indigo-900/20" />
      
      {/* شبكة تقنية */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="tech-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 0 L50 0 L50 50 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" className="text-blue-400"/>
      </svg>
      
      {/* عقد البلوك تشين */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-16 h-16 opacity-30"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
          <rect x="10" y="10" width="30" height="30" fill="currentColor" opacity="0.8"/>
          <rect x="60" y="10" width="30" height="30" fill="currentColor" opacity="0.6"/>
          <rect x="10" y="60" width="30" height="30" fill="currentColor" opacity="0.6"/>
          <rect x="60" y="60" width="30" height="30" fill="currentColor" opacity="0.8"/>
          <line x1="40" y1="25" x2="60" y2="25" stroke="currentColor" strokeWidth="2"/>
          <line x1="25" y1="40" x2="25" y2="60" stroke="currentColor" strokeWidth="2"/>
          <line x1="40" y1="75" x2="60" y2="75" stroke="currentColor" strokeWidth="2"/>
          <line x1="75" y1="40" x2="75" y2="60" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </motion.div>
      
      {/* دوائر متحركة */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/4 w-20 h-20 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="50" cy="50" r="10" fill="currentColor"/>
        </svg>
      </motion.div>
    </div>
  ),

  innovation: () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* خلفية متدرجة للابتكار */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-800/30 to-cyan-900/20" />
      
      {/* موجات الابتكار */}
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        <path d="M0 500 Q250 400 500 500 T1000 500 V1000 H0 Z" fill="url(#wave-gradient)" className="text-emerald-400"/>
        <path d="M0 600 Q250 500 500 600 T1000 600 V1000 H0 Z" fill="url(#wave-gradient)" className="text-teal-400" opacity="0.7"/>
      </svg>
      
      {/* رموز الابتكار */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-24 h-24 opacity-25"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
          <path d="M50 10 L50 30 M35 25 L65 25 M50 30 C35 30 35 50 50 50 C65 50 65 30 50 30 M50 50 L50 90 M40 80 L60 80 M45 85 L55 85" 
                stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </motion.div>
    </div>
  ),

  experience: () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* خلفية AR/VR */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-800/30 to-violet-900/20" />
      
      {/* شبكة AR */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="ar-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <polygon points="40,10 70,30 70,50 40,70 10,50 10,30" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="40" cy="40" r="3" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ar-pattern)" className="text-pink-400"/>
      </svg>
      
      {/* عناصر AR متحركة */}
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-28 h-28 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
          <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
        </svg>
      </motion.div>
    </div>
  ),

  token: () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* خلفية العملة الذهبية */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-800/30 to-orange-900/20" />
      
      {/* أنماط العملة */}
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="coin-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <text x="60" y="65" textAnchor="middle" fontSize="12" fill="currentColor">I</text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#coin-pattern)" className="text-yellow-400"/>
      </svg>
      
      {/* عملات متحركة */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/5 w-20 h-20 opacity-30"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
          <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.8"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2"/>
          <text x="50" y="55" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">I</text>
        </svg>
      </motion.div>
    </div>
  ),

  game: () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* خلفية الألعاب */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-800/30 to-purple-900/20" />
      
      {/* عناصر الألعاب */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="game-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="20" y="20" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="35" cy="40" r="3" fill="currentColor"/>
            <circle cx="65" cy="40" r="3" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#game-pattern)" className="text-indigo-400"/>
      </svg>
      
      {/* عناصر تفاعلية */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-25"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
          <rect x="10" y="30" width="80" height="40" rx="20" fill="currentColor"/>
          <circle cx="30" cy="50" r="8" fill="white"/>
          <circle cx="70" cy="50" r="8" fill="white"/>
          <rect x="45" y="20" width="10" height="20" fill="currentColor"/>
        </svg>
      </motion.div>
    </div>
  )
}

// مكون خلفية ديناميكية مع الصور
export function DynamicHeroBackground({ theme, image }: { theme: string; image?: string }) {
  const BackgroundComponent = HeroBackgrounds[theme as keyof typeof HeroBackgrounds]

  // تحويل اسم الصورة إلى كلاس CSS
  const getImageClass = (imageName: string) => {
    const cleanName = imageName.replace('.jpg', '').replace('.png', '')
    return `hero-bg-${cleanName}`
  }

  return (
    <div className="absolute inset-0">
      {/* صورة الخلفية مع حركة زوم انسيابية */}
      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {/* طبقة الصورة مع زوم بطيء جداً من المركز */}
          <motion.div
            className={`hero-background-smooth ${getImageClass(image)}`}
            animate={{
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
        </motion.div>
      )}

      {/* طبقة زجاجية مغشاة */}
      <div className="absolute inset-0 hero-glass-overlay" />

      {/* طبقة الأنماط SVG فوق الطبقة الزجاجية */}
      <div className="absolute inset-0 opacity-15">
        {BackgroundComponent ? <BackgroundComponent /> : <HeroBackgrounds.heritage />}
      </div>
    </div>
  )
}
