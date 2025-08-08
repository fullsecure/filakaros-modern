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

// مكون الرسم البياني الدائري
export function TokenPieChart({ className }: { className?: string }) {
  const [animatedValues, setAnimatedValues] = React.useState(tokenDistribution.map(() => 0))
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(tokenDistribution.map(item => item.value))
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  let cumulativePercentage = 0
  
  return (
    <div className={cn("flex flex-col lg:flex-row items-center gap-8", className)}>
      {/* الرسم البياني الدائري */}
      <div className="relative w-80 h-80">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          {tokenDistribution.map((item, index) => {
            const percentage = animatedValues[index]
            const strokeDasharray = `${percentage * 2.51} ${251 - percentage * 2.51}`
            const strokeDashoffset = -cumulativePercentage * 2.51
            
            const currentCumulative = cumulativePercentage
            cumulativePercentage += percentage
            
            return (
              <motion.circle
                key={index}
                cx="100"
                cy="100"
                r="40"
                fill="transparent"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDasharray: "0 251" }}
                animate={{ strokeDasharray }}
                transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                className="drop-shadow-lg"
              />
            )
          })}
        </svg>
        
        {/* النص المركزي */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              5B
            </div>
            <div className="text-sm text-muted-foreground">Total Supply</div>
          </motion.div>
        </div>
      </div>
      
      {/* قائمة التوزيع */}
      <div className="space-y-4 flex-1">
        <h3 className="text-2xl font-bold mb-6">Allocation Breakdown</h3>
        {tokenDistribution.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="flex items-center justify-between p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-medium">{item.name}</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">{item.value}%</div>
              <div className="text-sm text-muted-foreground">{item.amount}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// مكون الرسم البياني الخطي لسعر التوكن
export function TokenPriceChart({ className }: { className?: string }) {
  const priceData = [
    { time: "Jan", price: 0.0005 },
    { time: "Feb", price: 0.0006 },
    { time: "Mar", price: 0.0007 },
    { time: "Apr", price: 0.0008 },
    { time: "May", price: 0.0009 },
    { time: "Jun", price: 0.007 },
    { time: "Jul", price: 0.01 }
  ]
  
  const maxPrice = Math.max(...priceData.map(d => d.price))
  const minPrice = Math.min(...priceData.map(d => d.price))
  
  return (
    <div className={cn("p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50", className)}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold">IKAROS/USDT</h3>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-400">$0.01</span>
            <span className="text-sm text-green-400">+42.8% (Launch)</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Market Cap</div>
          <div className="font-bold">$5.2M</div>
        </div>
      </div>
      
      <div className="relative h-40">
        <svg className="w-full h-full" viewBox="0 0 400 160">
          <defs>
            <linearGradient id="price-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* الخطوط الشبكية */}
          <g className="text-muted-foreground/20">
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="currentColor" strokeWidth="0.5"/>
            ))}
          </g>
          
          {/* منطقة السعر */}
          <motion.path
            d={`M 0 ${160 - ((priceData[0].price - minPrice) / (maxPrice - minPrice)) * 120} ${priceData.map((d, i) => 
              `L ${(i / (priceData.length - 1)) * 400} ${160 - ((d.price - minPrice) / (maxPrice - minPrice)) * 120}`
            ).join(' ')} L 400 160 L 0 160 Z`}
            fill="url(#price-gradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          
          {/* خط السعر */}
          <motion.path
            d={`M 0 ${160 - ((priceData[0].price - minPrice) / (maxPrice - minPrice)) * 120} ${priceData.map((d, i) => 
              `L ${(i / (priceData.length - 1)) * 400} ${160 - ((d.price - minPrice) / (maxPrice - minPrice)) * 120}`
            ).join(' ')}`}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          
          {/* نقاط البيانات */}
          {priceData.map((d, i) => (
            <motion.circle
              key={i}
              cx={(i / (priceData.length - 1)) * 400}
              cy={160 - ((d.price - minPrice) / (maxPrice - minPrice)) * 120}
              r="4"
              fill="#8B5CF6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
            />
          ))}
        </svg>
        
        {/* تسميات المحاور */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
          {priceData.map((d, i) => (
            <span key={i}>{d.time}</span>
          ))}
        </div>
      </div>
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
