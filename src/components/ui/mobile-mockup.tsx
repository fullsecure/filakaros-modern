"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MobileMockupProps {
  className?: string
  variant?: "ikaros-wallet" | "ar-explorer" | "nft-marketplace" | "trading-platform"
}

export function MobileMockup({ className, variant = "trading-platform" }: MobileMockupProps) {
  const [currentScreen, setCurrentScreen] = React.useState(0)
  
  // شاشات مختلفة حسب النوع
  const screens: Record<string, Array<{ title: string; content: React.ReactElement }>> = {
    "ikaros-wallet": [
      {
        title: "IKAROS Wallet",
        content: (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="font-bold text-white">IKAROS Wallet</span>
              </div>
              <div className="text-green-400 text-sm">Connected</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-gray-400 text-sm">Total Balance</div>
              <div className="text-white text-2xl font-bold">$12,450.00</div>
            </div>
          </div>
        )
      }
    ],
    "trading-platform": [
      {
        title: "IKAROS Trading",
        content: (
          <div className="space-y-4">
            {/* رأس التطبيق */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="font-bold text-white">IKAROS</span>
              </div>
              <div className="text-green-400 text-sm">+15.2%</div>
            </div>
            
            {/* السعر الحالي */}
            <div className="text-center py-4">
              <div className="text-3xl font-bold text-white">$0.001</div>
              <div className="text-green-400 text-sm">+15.2% (24h)</div>
            </div>
            
            {/* الرسم البياني */}
            <div className="h-32 bg-gray-800/50 rounded-lg p-4 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 80">
                <defs>
                  <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 60 L20 55 L40 50 L60 45 L80 40 L100 35 L120 30 L140 25 L160 20 L180 15 L200 10"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                <motion.path
                  d="M0 60 L20 55 L40 50 L60 45 L80 40 L100 35 L120 30 L140 25 L160 20 L180 15 L200 10 L200 80 L0 80 Z"
                  fill="url(#chart-gradient)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>
            </div>
            
            {/* أزرار التداول */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-green-500 text-white py-3 rounded-lg font-semibold">
                Buy IKAROS
              </button>
              <button className="bg-red-500 text-white py-3 rounded-lg font-semibold">
                Sell IKAROS
              </button>
            </div>
          </div>
        )
      },
      {
        title: "Portfolio",
        content: (
          <div className="space-y-4">
            <div className="text-center py-4">
              <div className="text-2xl font-bold text-white">Portfolio Value</div>
              <div className="text-3xl font-bold text-green-400">$12,450</div>
              <div className="text-sm text-green-400">+$1,250 (11.2%)</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">I</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">IKAROS</div>
                    <div className="text-xs text-gray-400">15,000 tokens</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">$15.00</div>
                  <div className="text-xs text-green-400">+15.2%</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">N</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Heritage NFTs</div>
                    <div className="text-xs text-gray-400">5 items</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">$2,500</div>
                  <div className="text-xs text-green-400">+8.5%</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    
    "ar-explorer": [
      {
        title: "AR Heritage Explorer",
        content: (
          <div className="space-y-4">
            <div className="h-40 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="font-semibold">Scan Monument</div>
                  <div className="text-xs opacity-75">Point camera at landmark</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-white">Pyramids of Giza</span>
                <span className="text-green-400">Discovered</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-white">Colosseum</span>
                <span className="text-yellow-400">In Progress</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-white">Machu Picchu</span>
                <span className="text-gray-400">Locked</span>
              </div>
            </div>
          </div>
        )
      }
    ],
    
    "nft-marketplace": [
      {
        title: "Heritage NFTs",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-800/50 rounded-lg p-3">
                  <div className="h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded mb-2"></div>
                  <div className="text-xs text-white font-semibold">Heritage #{i}</div>
                  <div className="text-xs text-green-400">0.5 IKAROS</div>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
              <div className="text-sm font-semibold text-white mb-1">Featured Collection</div>
              <div className="text-xs text-purple-300">Ancient Wonders Series</div>
              <div className="text-xs text-green-400 mt-1">Floor: 2.5 IKAROS</div>
            </div>
          </div>
        )
      }
    ]
  }
  
  const currentScreens = screens[variant] || screens["trading-platform"]
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % currentScreens.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [currentScreens.length])
  
  return (
    <div className={cn("relative", className)}>
      {/* إطار الجوال */}
      <div className="relative w-64 h-[500px] mx-auto">
        {/* الجوال الخارجي */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl">
          {/* الشاشة */}
          <div className="absolute top-4 left-4 right-4 bottom-4 bg-gray-900 rounded-[2rem] overflow-hidden">
            {/* شريط الحالة */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
              <div className="text-xs text-white">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-3 h-1 bg-green-400 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* محتوى الشاشة */}
            <div className="p-4 h-full">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <h2 className="text-lg font-bold text-white mb-4">
                  {currentScreens[currentScreen].title}
                </h2>
                {currentScreens[currentScreen].content}
              </motion.div>
            </div>
          </div>
          
          {/* زر الهوم */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
        </div>
        
        {/* تأثيرات الإضاءة */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[3rem] blur-xl"></div>
      </div>
      
      {/* مؤشرات الشاشات */}
      <div className="flex justify-center mt-6 space-x-2">
        {currentScreens.map((_: { title: string; content: React.ReactElement }, index: number) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to screen ${index + 1}`}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentScreen ? "bg-purple-500 scale-125" : "bg-gray-500"
            )}
            onClick={() => setCurrentScreen(index)}
          />
        ))}
      </div>
    </div>
  )
}
