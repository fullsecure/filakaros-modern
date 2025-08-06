"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  fill?: boolean
  sizes?: string
  quality?: number
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = "empty",
  blurDataURL,
  fill = false,
  sizes,
  quality = 85,
  ...props
}: LazyImageProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted rounded-lg",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-center text-muted-foreground">
          <div className="text-2xl mb-2">🖼️</div>
          <div className="text-sm">Image not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse"
          style={{ width, height }}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-all duration-300",
            fill ? "object-cover" : "",
            className
          )}
          {...props}
        />
      </motion.div>
    </div>
  )
}
