"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BackgroundEffectsProps {
  variant?: "particles" | "geometric" | "gradient" | "mesh" | "dots" | "grid"
  className?: string
  animated?: boolean
}

export function BackgroundEffects({ 
  variant = "particles", 
  className,
  animated = true 
}: BackgroundEffectsProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderParticles = () => {
    // قيم ثابتة لتجنب مشاكل الـ hydration
    const particleCount = 50
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      initialX: (i * 17 + 10) % 100,
      initialY: (i * 23 + 15) % 100,
      targetX: (i * 31 + 20) % 100,
      targetY: (i * 37 + 25) % 100,
      duration: 10 + (i % 5) * 2
    }))

    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={animated ? {
              x: [`0%`, `${particle.targetX - particle.initialX}%`],
              y: [`0%`, `${particle.targetY - particle.initialY}%`],
              opacity: [0, 1, 0]
            } : {}}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    )
  }

  const renderGeometric = () => {
    // قيم ثابتة للأشكال الهندسية
    const shapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: 50 + (i % 5) * 20,
      height: 50 + (i % 4) * 25,
      left: (i * 13 + 10) % 90,
      top: (i * 17 + 5) % 90,
      duration: 20 + (i % 3) * 10
    }))

    return (
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute border border-primary/10 rounded-lg"
            style={{
              width: shape.width,
              height: shape.height,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
            }}
            initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
            animate={animated ? {
              rotate: 360,
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.3, 0]
            } : {}}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    )
  }

  const renderGradient = () => (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/3 via-transparent to-secondary/3" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={animated ? {
          x: ["-100%", "100%"]
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )

  const renderMesh = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/10"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={animated ? {
          x: ["-50%", "150%"]
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )

  const renderDots = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="2" fill="currentColor" className="text-primary/10"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )

  const renderEffect = () => {
    switch (variant) {
      case "particles":
        return renderParticles()
      case "geometric":
        return renderGeometric()
      case "gradient":
        return renderGradient()
      case "mesh":
        return renderMesh()
      case "dots":
        return renderDots()
      case "grid":
        return renderDots() // استخدام نفس تأثير dots للـ grid
      default:
        return renderParticles()
    }
  }

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {renderEffect()}
    </div>
  )
}

// مكون للخلفية المتحركة
export function AnimatedBackground({ children, className }: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn("relative", className)}>
      <BackgroundEffects variant="gradient" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// مكون للخلفية مع Parallax
export function ParallaxBackground({ 
  children, 
  className,
  speed = 0.5 
}: { 
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const [offsetY, setOffsetY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          y: offsetY * speed
        }}
      >
        <BackgroundEffects variant="mesh" />
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
