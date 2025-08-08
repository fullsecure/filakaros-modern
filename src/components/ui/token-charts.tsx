"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// بيانات توزيع التوكن
const tokenDistribution = [
  { name: "Sales & Marketing", value: 40, color: "#6366f1", amount: "2.0B IKAROS" },
  { name: "Airdrop", value: 20, color: "#8b5cf6", amount: "1.0B IKAROS" },
  { name: "Development", value: 15, color: "#06b6d4", amount: "750M IKAROS" },
  { name: "Team", value: 15, color: "#10b981", amount: "750M IKAROS" },
  { name: "Liquidity", value: 10, color: "#f59e0b", amount: "500M IKAROS" }
]

// مكون الرسم البياني الدائري المحسّن مع التسميات
export function TokenPieChart({ className }: { className?: string }) {
  const [animatedValues, setAnimatedValues] = React.useState(tokenDistribution.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(tokenDistribution.map(item => item.value))
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // حساب زوايا الأقسام للتسميات
  const getSegmentAngle = (index: number) => {
    let totalBefore = 0
    for (let i = 0; i < index; i++) {
      totalBefore += animatedValues[i]
    }
    const segmentMiddle = totalBefore + (animatedValues[index] / 2)
    return (segmentMiddle / 100) * 360 - 90 // -90 لتعديل الدوران
  }

  // حساب موقع التسمية
  const getLabelPosition = (angle: number, radius: number = 85) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: 100 + radius * Math.cos(radian),
      y: 100 + radius * Math.sin(radian)
    }
  }

  let cumulativePercentage = 0

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {/* الرسم البياني الدائري المحسّن */}
      <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* الأقسام الدائرية */}
          {tokenDistribution.map((item, index) => {
            const percentage = animatedValues[index]
            const strokeDasharray = `${percentage * 2.51} ${251 - percentage * 2.51}`
            const strokeDashoffset = -cumulativePercentage * 2.51

            const currentCumulative = cumulativePercentage
            cumulativePercentage += percentage

            return (
              <g key={index}>
                <motion.circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={hoveredIndex === index ? "18" : "16"}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 251" }}
                  animate={{ strokeDasharray }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  className="drop-shadow-lg transition-all duration-300 cursor-pointer filter hover:brightness-110"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    filter: hoveredIndex === index ? 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.6))' : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                    transform: 'rotate(-90deg)',
                    transformOrigin: '100px 100px'
                  }}
                />
              </g>
            )
          })}

          {/* التسميات والنسب */}
          {tokenDistribution.map((item, index) => {
            if (animatedValues[index] === 0) return null

            const angle = getSegmentAngle(index)
            const position = getLabelPosition(angle)
            const isLargeSegment = item.value >= 15

            return (
              <motion.g
                key={`label-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                {/* خط التوصيل للأقسام الصغيرة */}
                {!isLargeSegment && (
                  <line
                    x1={getLabelPosition(angle, 78).x}
                    y1={getLabelPosition(angle, 78).y}
                    x2={position.x}
                    y2={position.y}
                    stroke={item.color}
                    strokeWidth="1"
                    className="opacity-60"
                  />
                )}

                {/* خلفية التسمية */}
                <rect
                  x={position.x - 20}
                  y={position.y - 12}
                  width="40"
                  height="24"
                  rx="12"
                  fill="rgba(0, 0, 0, 0.8)"
                  className="backdrop-blur-sm"
                />

                {/* النسبة المئوية */}
                <text
                  x={position.x}
                  y={position.y - 2}
                  textAnchor="middle"
                  className="fill-white text-xs font-bold"
                  style={{ fontSize: '10px' }}
                >
                  {item.value}%
                </text>

                {/* اسم القسم للأقسام الكبيرة */}
                {isLargeSegment && (
                  <text
                    x={position.x}
                    y={position.y + 8}
                    textAnchor="middle"
                    className="fill-white text-xs"
                    style={{ fontSize: '8px' }}
                  >
                    {item.name.split(' ')[0]}
                  </text>
                )}
              </motion.g>
            )
          })}
        </svg>
        
        {/* النص المركزي المحسّن */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              5B
            </div>
            <div className="text-base md:text-lg text-muted-foreground font-medium">Total Supply</div>
          </motion.div>
        </div>

        {/* مؤشر التفاعل المحسّن */}
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl z-20"
          >
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground">{tokenDistribution[hoveredIndex].name}</div>
              <div className="text-2xl font-bold text-primary">{tokenDistribution[hoveredIndex].value}%</div>
              <div className="text-sm text-muted-foreground">{tokenDistribution[hoveredIndex].amount}</div>
            </div>
          </motion.div>
        )}
      </div>

      {/* مفتاح الألوان (Legend) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-2xl"
      >
        {tokenDistribution.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
            className={`flex flex-col items-center p-3 rounded-lg border border-border/50 transition-all duration-300 cursor-pointer ${
              hoveredIndex === index ? 'bg-accent/10 border-primary/50 scale-105' : 'hover:bg-accent/5'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="w-4 h-4 rounded-full mb-2"
              style={{ backgroundColor: item.color }}
            />
            <div className="text-xs font-medium text-center">{item.name}</div>
            <div className="text-sm font-bold text-primary">{item.value}%</div>
            <div className="text-xs text-muted-foreground">{item.amount}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}



// مكون إحصائيات التداول
export function TradingStats({ className }: { className?: string }) {
  const stats = [
    { label: "24h Volume", value: "$2.1M", change: "+12.5%", positive: true },
    { label: "Total Holders", value: "152K", change: "+8.2%", positive: true },
    { label: "Liquidity", value: "$8.5M", change: "+5.1%", positive: true },
    { label: "Market Rank", value: "#247", change: "+15", positive: true }
  ]
  
  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 text-center"
        >
          <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
          <div className="text-xl font-bold mb-1">{stat.value}</div>
          <div className={cn(
            "text-sm font-medium",
            stat.positive ? "text-green-400" : "text-red-400"
          )}>
            {stat.change}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
