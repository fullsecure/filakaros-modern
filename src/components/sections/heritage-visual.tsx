"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Cpu,
  Palette,
  Globe,
  Zap,
  Building2,
  Scroll,
  Trophy,
  Landmark,
  Drama,
  Crown,
  Blocks,
  Brain,
  Coins,
  Gamepad2
} from "lucide-react"

const heritageElements = [
  {
    icon: Building2,
    label: "Ancient Architecture",
    position: { top: "20%", left: "15%" },
    color: "text-amber-400",
    bgColor: "bg-amber-500/20"
  },
  {
    icon: Palette,
    label: "Cultural Arts",
    position: { top: "60%", left: "10%" },
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  },
  {
    icon: Scroll,
    label: "Historical Documents",
    position: { top: "30%", right: "20%" },
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    icon: Trophy,
    label: "Ancient Artifacts",
    position: { bottom: "25%", right: "15%" },
    color: "text-orange-400",
    bgColor: "bg-orange-500/20"
  },
  {
    icon: Drama,
    label: "Cultural Performances",
    position: { bottom: "40%", left: "25%" },
    color: "text-pink-400",
    bgColor: "bg-pink-500/20"
  },
  {
    icon: Landmark,
    label: "Historic Monuments",
    position: { top: "45%", right: "35%" },
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  }
]

const techElements = [
  {
    icon: Brain,
    label: "AI Processing",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    icon: Blocks,
    label: "Blockchain",
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  },
  {
    icon: Coins,
    label: "NFT Technology",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  },
  {
    icon: Gamepad2,
    label: "AR Gaming",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  }
]

export function HeritageVisual() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // قيم ثابتة للجسيمات لتجنب مشاكل الـ hydration
  const particlePositions = React.useMemo(() =>
    Array.from({ length: 10 }, (_, i) => ({
      left: `${(i * 11 + 15) % 100}%`,
      top: `${(i * 13 + 20) % 100}%`,
    })), []
  )

  if (!mounted) {
    return (
      <div className="relative w-full h-96 mx-auto bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gradient">Heritage + Tech</div>
            <div className="text-sm text-muted-foreground">Loading...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-96 mx-auto">
      {/* خلفية متوهجة */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl"
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

      {/* الحاوية الرئيسية */}
      <div className="relative w-full h-full bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
        {/* شبكة الخلفية */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heritageGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heritageGrid)" />
          </svg>
        </div>

        {/* العناصر التراثية */}
        {heritageElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={element.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              animate={{
                y: [0, -5, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={`w-16 h-16 ${element.bgColor} backdrop-blur-sm rounded-xl border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110`}>
                <element.icon className={`w-8 h-8 ${element.color} drop-shadow-lg`} />
              </div>

              {/* تسمية توضيحية */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-card/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium whitespace-nowrap border border-border/50">
                  {element.label}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* العناصر التقنية */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-center space-x-4">
            {techElements.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <motion.div
                  className="w-12 h-12 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={`w-full h-full ${tech.bgColor} backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className={`w-6 h-6 ${tech.color} drop-shadow-lg`} />
                  </div>
                </motion.div>

                {/* تسمية توضيحية */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-card/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium whitespace-nowrap border border-border/50">
                    {tech.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* خط الاتصال المتحرك */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 50 50 Q 200 100 350 50 T 650 50"
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* النص المركزي */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center space-y-2"
          >
            <div className="text-3xl font-bold text-gradient">Heritage + Tech</div>
            <div className="text-sm text-muted-foreground">Preserving the past, building the future</div>
          </motion.div>
        </div>

        {/* جسيمات متحركة */}
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={position}
            animate={{
              x: [0, (i % 2 === 0 ? 30 : -30)],
              y: [0, (i % 3 === 0 ? 40 : -40)],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  )
}
