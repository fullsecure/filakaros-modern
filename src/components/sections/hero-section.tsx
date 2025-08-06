"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/ui/section"
import { BackgroundEffects, ParallaxBackground } from "@/components/ui/background-effects"
import { OptimizedImage, OverlayImage } from "@/components/ui/optimized-image"
import { imageSizes } from "@/lib/images"

const heroStats = [
  { label: "Total Supply", value: "5B", subtext: "IKAROS Tokens" },
  { label: "Current Price", value: "$0.007", subtext: "+15.2% (24h)" },
  { label: "Countries NFTs", value: "195", subtext: "Global Coverage" }
]

export function HeroSection() {
  return (
    <Section padding="xl" className="relative min-h-screen flex items-center overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <BackgroundEffects variant="particles" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        
        {/* شبكة خلفية */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        {/* تأثير الإضاءة */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* النص الرئيسي */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="glow" size="lg" className="mb-6">
                🚀 Revolutionary Crypto Project
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gradient">Cultural Heritage</span>
              <br />
              Meets Blockchain
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Discover how Filakaros uses AI and blockchain to safeguard global history
              while creating value through IKAROS token, NFTs, DeFi, and immersive AR experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gradient" size="xl" className="min-w-[200px] group">
                <span className="group-hover:scale-105 transition-transform">
                  Download Whitepaper
                </span>
              </Button>
              <Button variant="glow" size="xl" className="min-w-[200px] group">
                <span className="group-hover:scale-105 transition-transform">
                  Join Community
                </span>
              </Button>
            </motion.div>

            {/* إحصائيات سريعة */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* الصورة الرئيسية */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* خلفية متوهجة للصورة */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* الصورة الرئيسية */}
              <div className="relative">
                <OverlayImage
                  category="hero"
                  imageKey="cultural1"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                  containerClassName="relative"
                  sizes={imageSizes.hero.mobile}
                  priority={true}
                  overlayContent={
                    <div className="text-center space-y-4 text-white">
                      <div className="text-3xl font-bold">Heritage + Tech</div>
                      <div className="text-lg">AI • Blockchain • AR</div>
                    </div>
                  }
                />

                {/* صور صغيرة متحركة */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-4 -left-4 w-24 h-24"
                >
                  <OptimizedImage
                    category="hero"
                    imageKey="cultural2"
                    width={96}
                    height={96}
                    className="rounded-xl shadow-lg border-2 border-white"
                    animated={true}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 w-32 h-24"
                >
                  <OptimizedImage
                    category="hero"
                    imageKey="cultural3"
                    width={128}
                    height={96}
                    className="rounded-xl shadow-lg border-2 border-white"
                    animated={true}
                  />
                </motion.div>
              </div>

              {/* عناصر تفاعلية */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-border/50"
                >
                  <div className="text-2xl mb-2">🪙</div>
                  <div className="text-sm font-semibold">IKAROS Token</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-border/50"
                >
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm font-semibold">Heritage NFTs</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* مؤشر التمرير */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </Section>
  )
}
