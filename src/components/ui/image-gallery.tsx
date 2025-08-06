"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { OptimizedImage } from "./optimized-image"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: Array<{
    category: string
    imageKey: string
    alt?: string
    title?: string
    description?: string
  }>
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showThumbnails?: boolean
  showControls?: boolean
}

export function ImageGallery({
  images,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
  showThumbnails = true,
  showControls = true
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  // Auto play functionality
  React.useEffect(() => {
    if (!autoPlay || isFullscreen) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, images.length, isFullscreen])

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFullscreen) return

      switch (event.key) {
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
        case 'Escape':
          closeFullscreen()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen, goToNext, goToPrevious])

  if (images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <>
      {/* Gallery Container */}
      <div className={cn("relative group", className)}>
        {/* Main Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full cursor-pointer"
            onClick={openFullscreen}
          >
            <OptimizedImage
              category={currentImage.category}
              imageKey={currentImage.imageKey}
              alt={currentImage.alt}
              fill={true}
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
            />
          </motion.div>

          {/* Navigation Controls */}
          {showControls && images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToNext}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {/* Image Info Overlay */}
          {(currentImage.title || currentImage.description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {currentImage.title && (
                <h3 className="font-semibold text-lg">{currentImage.title}</h3>
              )}
              {currentImage.description && (
                <p className="text-sm text-gray-200">{currentImage.description}</p>
              )}
            </div>
          )}

          {/* Slide Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  title={`Go to slide ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  )}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {showThumbnails && images.length > 1 && (
          <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                title={`View ${image.title || image.alt || `image ${index + 1}`}`}
                className={cn(
                  "flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all",
                  index === currentIndex
                    ? "border-primary scale-105"
                    : "border-transparent hover:border-primary/50"
                )}
                onClick={() => goToSlide(index)}
              >
                <OptimizedImage
                  category={image.category}
                  imageKey={image.imageKey}
                  alt={image.alt}
                  width={80}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                category={currentImage.category}
                imageKey={currentImage.imageKey}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={closeFullscreen}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Navigation in Fullscreen */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={goToNext}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
