"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sparkles, Landmark, Globe, Coins } from "lucide-react"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  showCursor?: boolean
  onComplete?: () => void
}

export function TypewriterText({
  text,
  className,
  speed = 50,
  delay = 0,
  showCursor = true,
  onComplete
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    if (!text) return

    // Reset states when text changes
    setDisplayedText("")
    setIsComplete(false)

    const timer = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsComplete(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay, onComplete])

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="inline-block min-h-[1.2em]">
        {displayedText}
      </span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
          style={{ display: isComplete ? "none" : "inline-block" }}
        />
      )}
    </span>
  )
}

// مكون محسن للنصوص مع أيقونات التراث الثقافي
export function HeroTypewriterText({
  texts,
  className,
  speed = 80,
  pauseDuration = 2500,
  showIcon = true
}: {
  texts: string[]
  className?: string
  speed?: number
  pauseDuration?: number
  showIcon?: boolean
}) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [displayedText, setDisplayedText] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(true)

  // Heritage-themed icons for different text types
  const getIconForText = (text: string) => {
    if (text.toLowerCase().includes('heritage') || text.toLowerCase().includes('ancient')) {
      return Landmark
    } else if (text.toLowerCase().includes('global') || text.toLowerCase().includes('community')) {
      return Globe
    } else if (text.toLowerCase().includes('nft') || text.toLowerCase().includes('digital')) {
      return Coins
    } else {
      return Sparkles
    }
  }

  // حساب أطول نص للحفاظ على ارتفاع ثابت
  const longestText = React.useMemo(() => {
    return texts.reduce((longest, current) =>
      current.length > longest.length ? current : longest, ""
    )
  }, [texts])

  React.useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentTextIndex]

    const timer = setTimeout(() => {
      if (isTyping) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Finished typing, pause then start next text
          setTimeout(() => {
            setIsTyping(false)
            setDisplayedText("")
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            setIsTyping(true)
          }, pauseDuration)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, isTyping, currentTextIndex, texts, speed, pauseDuration])

  const IconComponent = showIcon ? getIconForText(texts[currentTextIndex] || "") : null

  return (
    <div className={cn("relative flex items-center justify-center gap-4", className)}>
      {IconComponent && (
        <motion.div
          key={currentTextIndex}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="p-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30">
            <IconComponent className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
          </div>
        </motion.div>
      )}

      <div className="relative flex-1 text-center">
        {/* حاوي ثابت للحفاظ على ارتفاع السطر */}
        <div className="relative min-h-[2.5em] flex items-center justify-center">
          {/* نص شفاف لحجز المساحة */}
          <span className="absolute inset-0 opacity-0 pointer-events-none whitespace-nowrap overflow-hidden text-center flex items-center justify-center">
            {longestText}
          </span>

          {/* النص المرئي */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
              {displayedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-0.5 h-[1.2em] bg-gradient-to-b from-blue-400 to-purple-400 ml-2 align-middle rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// مكون للنصوص المتعددة مع تأثير typewriter
export function MultiTypewriterText({
  texts,
  className,
  speed = 50,
  pauseDuration = 2000,
  loop = true
}: {
  texts: string[]
  className?: string
  speed?: number
  pauseDuration?: number
  loop?: boolean
}) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [displayedText, setDisplayedText] = React.useState("")

  // حساب أطول نص للحفاظ على ارتفاع ثابت
  const longestText = React.useMemo(() => {
    return texts.reduce((longest, current) =>
      current.length > longest.length ? current : longest, ""
    )
  }, [texts])

  React.useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentTextIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // كتابة النص
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // انتهى من الكتابة، انتظر ثم ابدأ الحذف
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        // حذف النص
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          // انتهى من الحذف، انتقل للنص التالي
          setIsDeleting(false)
          if (loop || currentTextIndex < texts.length - 1) {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, pauseDuration, loop])

  return (
    <span className={cn("relative inline-block", className)}>
      {/* حاوي ثابت للحفاظ على ارتفاع السطر */}
      <span className="relative inline-block min-h-[1.2em]">
        {/* نص شفاف لحجز المساحة */}
        <span className="absolute inset-0 opacity-0 pointer-events-none whitespace-nowrap">
          {longestText}
        </span>

        {/* النص المرئي */}
        <span className="relative z-10 inline-block">
          {displayedText}
        </span>
      </span>

      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  )
}

// مكون للنصوص مع تأثير fade-in متدرج
export function FadeInText({
  text,
  className,
  delay = 0,
  duration = 0.8,
  stagger = 0.05
}: {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration: duration,
            ease: "easeOut"
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// مكون للنصوص مع تأثير slide-in
export function SlideInText({
  text,
  className,
  direction = "left",
  delay = 0,
  duration = 0.8
}: {
  text: string
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -50, y: 0 }
      case "right":
        return { x: 50, y: 0 }
      case "up":
        return { x: 0, y: -50 }
      case "down":
        return { x: 0, y: 50 }
      default:
        return { x: -50, y: 0 }
    }
  }

  return (
    <motion.span
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay,
        duration,
        ease: "easeOut"
      }}
      className={className}
    >
      {text}
    </motion.span>
  )
}
