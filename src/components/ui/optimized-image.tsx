"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getImageSrc, getImageAlt, imageSizes } from "@/lib/images"

interface OptimizedImageProps {
  category: string
  imageKey: string
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  animated?: boolean
  fallbackSrc?: string
  containerClassName?: string
}

export function OptimizedImage({
  category,
  imageKey,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  animated = true,
  fallbackSrc = "/images/placeholder.jpg",
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)
  const [imageSrc, setImageSrc] = React.useState<string>("")

  React.useEffect(() => {
    const src = getImageSrc(category as any, imageKey, fallbackSrc)
    if (src && src.trim() !== "") {
      setImageSrc(src)
    } else {
      setImageSrc(fallbackSrc)
    }
  }, [category, imageKey, fallbackSrc])

  const imageAlt = alt || getImageAlt(category as any, imageKey, `صورة ${imageKey}`)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
      setHasError(false)
    }
  }

  if (hasError && imageSrc === fallbackSrc) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted rounded-lg border border-border/50",
          containerClassName
        )}
        style={{ width, height }}
      >
        <div className="text-center text-muted-foreground p-4">
          <div className="text-4xl mb-2">🖼️</div>
          <div className="text-sm">الصورة غير متوفرة</div>
        </div>
      </div>
    )
  }

  const imageComponent = (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Loading skeleton */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse rounded-lg"
          style={{ width, height }}
        />
      )}
      
      {/* الصورة الفعلية */}
      {imageSrc && imageSrc.trim() !== "" && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes || imageSizes.card.mobile}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-all duration-500",
            fill ? "object-cover" : "",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          {...props}
        />
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={containerClassName}
      >
        {imageComponent}
      </motion.div>
    )
  }

  return imageComponent
}

// مكون للصور مع تأثيرات hover
export function HoverImage({
  category,
  imageKey,
  alt,
  className,
  containerClassName,
  hoverScale = 1.05,
  ...props
}: OptimizedImageProps & { hoverScale?: number }) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("cursor-pointer", containerClassName)}
    >
      <OptimizedImage
        category={category}
        imageKey={imageKey}
        alt={alt}
        className={cn("rounded-lg", className)}
        {...props}
      />
    </motion.div>
  )
}

// مكون للصور مع overlay
export function OverlayImage({
  category,
  imageKey,
  alt,
  overlayContent,
  className,
  containerClassName,
  overlayClassName,
  ...props
}: OptimizedImageProps & {
  overlayContent?: React.ReactNode
  overlayClassName?: string
}) {
  return (
    <div className={cn("relative group", containerClassName)}>
      <OptimizedImage
        category={category}
        imageKey={imageKey}
        alt={alt}
        className={className}
        {...props}
      />
      {overlayContent && (
        <div
          className={cn(
            "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg",
            overlayClassName
          )}
        >
          {overlayContent}
        </div>
      )}
    </div>
  )
}

// مكون للصور مع lazy loading متقدم
export function LazyOptimizedImage({
  category,
  imageKey,
  threshold = 0.1,
  ...props
}: OptimizedImageProps & { threshold?: number }) {
  const [isInView, setIsInView] = React.useState(false)
  const imgRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={imgRef}>
      {isInView ? (
        <OptimizedImage
          category={category}
          imageKey={imageKey}
          {...props}
        />
      ) : (
        <div
          className="bg-muted animate-pulse rounded-lg"
          style={{ width: props.width, height: props.height }}
        />
      )}
    </div>
  )
}
