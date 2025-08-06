"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "icon" | "text" | "full"
  className?: string
  animated?: boolean
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8", 
  lg: "w-12 h-12",
  xl: "w-16 h-16"
}

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl", 
  xl: "text-3xl"
}

export function Logo({ 
  size = "md", 
  variant = "full", 
  className,
  animated = true 
}: LogoProps) {
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const textVariants = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  }

  const LogoIcon = () => (
    <motion.div
      variants={animated ? iconVariants : undefined}
      initial={animated ? "initial" : false}
      animate={animated ? "animate" : false}
      whileHover={animated ? "hover" : undefined}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg",
        sizeClasses[size]
      )}
    >
      <Image
        src="/images/logo.png"
        alt="Filakaros Logo"
        width={size === "sm" ? 24 : size === "md" ? 32 : size === "lg" ? 48 : 64}
        height={size === "sm" ? 24 : size === "md" ? 32 : size === "lg" ? 48 : 64}
        className="w-full h-full object-contain"
        priority={true}
      />
    </motion.div>
  )

  const LogoText = () => (
    <motion.span
      variants={animated ? textVariants : undefined}
      initial={animated ? "initial" : false}
      animate={animated ? "animate" : false}
      className={cn(
        "font-bold text-gradient tracking-tight",
        textSizeClasses[size]
      )}
    >
      Filakaros
    </motion.span>
  )

  if (variant === "icon") {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    )
  }

  if (variant === "text") {
    return (
      <div className={className}>
        <LogoText />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <LogoIcon />
      {variant === "full" && <LogoText />}
    </div>
  )
}

// مكون لوغو SVG مخصص
export function LogoSVG({ 
  className, 
  width = 32, 
  height = 32 
}: { 
  className?: string
  width?: number
  height?: number 
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* خلفية دائرية */}
      <circle cx="16" cy="16" r="15" fill="url(#logoGradient)" />
      
      {/* حرف F مع تصميم تراثي */}
      <path
        d="M10 8h12v2h-10v4h8v2h-8v8h-2V8z"
        fill="white"
      />
      
      {/* عنصر تراثي إضافي */}
      <path
        d="M20 10l2-1v10l-2-1V10z"
        fill="white"
        opacity="0.8"
      />
      
      {/* نقاط تزيينية */}
      <circle cx="24" cy="8" r="1" fill="white" opacity="0.6" />
      <circle cx="26" cy="12" r="0.5" fill="white" opacity="0.4" />
      <circle cx="24" cy="16" r="0.5" fill="white" opacity="0.4" />
    </svg>
  )
}
