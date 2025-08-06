"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, MessageCircle, Copy, ExternalLink, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/ui/section"

import { HeroTypewriterText } from "@/components/ui/typewriter-text"
import { HeroBackgroundCarousel } from "@/components/ui/hero-background-carousel"

// بيانات المشروع الأساسية
const projectData = {
  name: "IKAROS",
  tagline: "Cultural Heritage Meets Blockchain",
  description: "Preserve the past, build the future with AI-powered cultural heritage preservation on blockchain technology.",
  contractAddress: "0x9149f60cDDf92985DFB60118e37e03e93397bb7a",
  links: {
    whitepaper: "/whitepaper",
    telegram: "https://t.me/ikarosworld",
    bscscan: "https://bscscan.com/token/0x9149f60cDDf92985DFB60118e37e03e93397bb7a"
  }
}



// النصوص المتحركة للعنوان الفرعي
const dynamicTexts = [
  "Preserve Ancient Heritage",
  "Build Digital Future",
  "Create NFT Collections",
  "Explore AR Experiences",
  "Join Global Community",
  "Discover Cultural Treasures",
  "Bridge Past and Future",
  "Unlock Digital Heritage"
]

export function EnhancedHeroSection() {
  const [isLoaded, setIsLoaded] = React.useState(false)

  // تحميل المكون
  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  // دالة التمرير السلس
  const scrollToNextSection = React.useCallback(() => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [])

  // نسخ عنوان العقد الذكي
  const copyContractAddress = async () => {
    try {
      await navigator.clipboard.writeText(projectData.contractAddress)
      // يمكن إضافة toast notification هنا
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Section className="hero-bg relative min-h-screen overflow-hidden p-0" containerSize="full">
      {/* خلفية مبسطة ومتناسقة مع النظام الجديد */}
      <div className="absolute inset-0 z-0">
        {/* Hero Background Carousel */}
        <HeroBackgroundCarousel
          autoPlayInterval={4500}
          transitionDuration={1200}
          className="z-0"
        />

        {/* طبقة تدرج مبسطة ومتناسقة */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

        {/* تأثير خلفية بسيط */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/80 via-background/40 to-background/20" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-30 w-full flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col justify-center items-center text-center space-y-4 lg:space-y-6 py-20">

            {/* Badge التقديمي */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-3"
            >
              <Badge
                variant="glow"
                size="lg"
                className="bg-primary/20 text-primary-foreground border-primary/40 backdrop-blur-md px-6 py-3 text-sm font-medium tracking-wide simple-glow"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                BLOCKCHAIN HERITAGE REVOLUTION
              </Badge>
            </motion.div>

            {/* العنوان الرئيسي */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
              className="space-y-4 mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="block">
                  <span className="text-foreground drop-shadow-lg">Welcome to </span>
                  <span className="text-gradient-warm font-extrabold">
                    {projectData.name}
                  </span>
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground max-w-5xl mx-auto leading-relaxed drop-shadow-sm">
                {projectData.tagline}
              </h2>
            </motion.div>

            {/* العنوان الفرعي الديناميكي */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="max-w-5xl mx-auto mb-6"
            >
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium">
                <HeroTypewriterText
                  texts={dynamicTexts}
                  className="text-gradient-primary font-semibold"
                  speed={80}
                  pauseDuration={2500}
                  showIcon={true}
                />
              </div>
            </motion.div>

            {/* الوصف */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <div className="glass-effect rounded-2xl p-6 border border-border/30 simple-glow">
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed font-light">
                  {projectData.description}
                </p>
              </div>
            </motion.div>

            {/* أزرار العمل */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                variant="gradient"
                size="lg"
                className="min-w-[240px] h-14 text-base font-semibold group simple-glow hover:shadow-primary/25 transition-all duration-300"
                asChild
              >
                <a href={projectData.links.whitepaper}>
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform duration-200">
                    Download Whitepaper
                  </span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="min-w-[240px] h-14 text-base font-semibold group border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href={projectData.links.telegram} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform duration-200">
                    Join Telegram
                  </span>
                </a>
              </Button>
            </motion.div>

            {/* معلومات العقد الذكي */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="mb-12"
            >
              <div className="glass-effect rounded-2xl p-6 border border-border/50 max-w-lg mx-auto simple-glow">
                <div className="text-center mb-4">
                  <p className="text-sm text-foreground mb-3 font-semibold tracking-wide">IKAROS Smart Contract</p>
                  <p className="font-mono text-sm text-muted-foreground break-all bg-muted/30 rounded-lg p-3 border border-border/30">
                    {projectData.contractAddress}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="glow"
                    size="default"
                    className="flex-1 group bg-primary/20 border-primary/50 text-primary-foreground hover:bg-primary/30 backdrop-blur-sm transition-all duration-300"
                    onClick={copyContractAddress}
                  >
                    <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Copy Address
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    className="flex-1 group border-border/50 text-foreground hover:bg-secondary/10 hover:border-secondary/50 backdrop-blur-sm transition-all duration-300"
                    asChild
                  >
                    <a
                      href={projectData.links.bscscan}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View on BSCScan
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>



            {/* مؤشر التمرير المحسّن */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={scrollToNextSection}
            >
              <motion.span
                className="text-muted-foreground text-sm font-medium tracking-wider mb-4 group-hover:text-primary transition-colors duration-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                SCROLL TO EXPLORE
              </motion.span>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* الحاوية الخارجية */}
                <div className="w-8 h-14 border-2 border-border/60 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm group-hover:border-primary/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  {/* النقطة المتحركة */}
                  <motion.div
                    animate={{ y: [2, 20, 2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-6 bg-gradient-to-b from-primary via-primary to-primary/30 rounded-full mt-2 group-hover:from-primary group-hover:via-secondary group-hover:to-accent"
                  />
                </div>

                {/* تأثير الإضاءة */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10"
                />
              </motion.div>

              {/* أيقونة إضافية */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="mt-3"
              >
                <ChevronDown className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary/80 transition-colors duration-300" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </Section>
  )

}
