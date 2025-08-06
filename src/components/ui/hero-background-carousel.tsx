"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface HeroBackgroundCarouselProps {
  className?: string
  autoPlayInterval?: number
  transitionDuration?: number
}

// Hero background images configuration
const heroImages = [
  {
    src: "/images/hero/homeimg.jpg",
    alt: "Cultural Heritage Site 1",
    priority: true
  },
  {
    src: "/images/hero/homeimg1.jpg",
    alt: "Cultural Heritage Site 2",
    priority: false
  },
  {
    src: "/images/hero/homeimg2.jpg",
    alt: "Cultural Heritage Site 3",
    priority: false
  },
  {
    src: "/images/hero/new3.jpg",
    alt: "Ancient Architecture",
    priority: false
  },
  {
    src: "/images/hero/new4.jpg",
    alt: "Historical Monument",
    priority: false
  },
  {
    src: "/images/hero/new5.jpg",
    alt: "Cultural Landmark",
    priority: false
  }
]

export function HeroBackgroundCarousel({
  className,
  autoPlayInterval = 4000,
  transitionDuration = 1000
}: HeroBackgroundCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [loadedImages, setLoadedImages] = React.useState<Set<number>>(new Set())

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      )
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlayInterval])

  // Preload images for smooth transitions
  React.useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = heroImages.map((image, index) => {
          return new Promise<number>((resolve) => {
            if (typeof window !== 'undefined') {
              const img = new window.Image()
              img.onload = () => resolve(index)
              img.onerror = () => resolve(index) // Still resolve to avoid blocking
              img.src = image.src
            } else {
              resolve(index)
            }
          })
        })

        const loadedIndices = await Promise.all(imagePromises)
        setLoadedImages(new Set(loadedIndices))
        setIsLoaded(true)
      } catch (error) {
        console.warn("Some images failed to preload:", error)
        setIsLoaded(true) // Continue anyway
      }
    }

    preloadImages()
  }, [])

  const currentImage = heroImages[currentImageIndex]

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Background Images with Crossfade Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: transitionDuration / 1000,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority={currentImage.priority}
            quality={85}
            sizes="100vw"
            className="object-cover object-center will-change-transform"
            style={{
              filter: "brightness(0.75) contrast(1.1) saturate(1.15)"
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse" />
      )}

      {/* تم حذف نقاط التنقل لتصميم أنظف */}
    </div>
  )
}

// Hook for external control of the carousel
export function useHeroBackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  const nextImage = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }, [])
  
  const previousImage = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])
  
  const goToImage = React.useCallback((index: number) => {
    if (index >= 0 && index < heroImages.length) {
      setCurrentIndex(index)
    }
  }, [])
  
  return {
    currentIndex,
    totalImages: heroImages.length,
    nextImage,
    previousImage,
    goToImage
  }
}
