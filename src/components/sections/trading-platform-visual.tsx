"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart, Activity, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedImage } from "@/components/ui/optimized-image"

const tradingData = [
  { pair: "IKAROS/USDT", price: "$0.001", change: "+15.2%", isPositive: true },
  { pair: "IKAROS/BTC", price: "0.000000023", change: "+8.7%", isPositive: true },
  { pair: "IKAROS/ETH", price: "0.00000041", change: "+12.1%", isPositive: true },
  { pair: "IKAROS/BNB", price: "0.0000016", change: "+6.3%", isPositive: true }
]

const chartData = [
  { time: "09:00", price: 0.0008 },
  { time: "10:00", price: 0.0009 },
  { time: "11:00", price: 0.0007 },
  { time: "12:00", price: 0.0010 },
  { time: "13:00", price: 0.0012 },
  { time: "14:00", price: 0.0011 },
  { time: "15:00", price: 0.0015 }
]

export function TradingPlatformVisual() {
  return (
    <div className="relative">
      {/* خلفية متوهجة */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* شاشة الهاتف */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
          {/* إطار الهاتف مع صورة خلفية */}
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
            {/* صورة خلفية للهاتف */}
            <div className="absolute inset-0">
              <OptimizedImage
                category="mobile"
                imageKey="trading_app"
                fill={true}
                className="object-cover"
                fallbackSrc="/images/hero/homeimg.jpg"
              />
              {/* طبقة شفافة للمحتوى */}
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
            </div>
            {/* شريط الحالة */}
            <div className="flex justify-between items-center px-6 py-3 bg-card/50">
              <div className="text-xs font-medium">9:41</div>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-green-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-green-400 rounded-sm"></div>
                <div className="w-4 h-2 bg-green-400 rounded-sm"></div>
              </div>
            </div>

            {/* محتوى التطبيق */}
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">IKAROS Trading</h3>
                  <p className="text-sm text-muted-foreground">Portfolio: $12,450</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">+$1,245</div>
                  <div className="text-sm text-green-400">+11.2%</div>
                </div>
              </div>

              {/* مخطط الأسعار */}
              <Card className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold">$0.001</div>
                    <div className="text-sm text-green-400">+15.2% (24h)</div>
                  </div>
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                
                {/* مخطط بسيط */}
                <div className="h-24 flex items-end space-x-1">
                  {chartData.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${(point.price / 0.0015) * 100}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </Card>

              {/* قائمة العملات */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Top Pairs</h4>
                {tradingData.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-card/50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-sm">{item.pair}</div>
                      <div className="text-xs text-muted-foreground">{item.price}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${item.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change}
                      </div>
                      <TrendingUp className="w-3 h-3 text-green-400 ml-auto" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* أزرار التداول */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-500 text-white py-3 rounded-xl font-medium"
                >
                  Buy IKAROS
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-red-500 text-white py-3 rounded-xl font-medium"
                >
                  Sell IKAROS
                </motion.button>
              </div>
            </div>
          </div>

          {/* تأثيرات الإضاءة على الهاتف */}
          <motion.div
            className="absolute top-1/4 -left-4 w-8 h-16 bg-primary/30 rounded-full blur-lg"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-4 w-8 h-16 bg-secondary/30 rounded-full blur-lg"
            animate={{
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* عناصر تفاعلية حول الهاتف */}
      <motion.div
        className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Activity className="w-8 h-8 text-primary" />
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center"
        animate={{
          y: [0, 10, 0],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DollarSign className="w-8 h-8 text-secondary" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-12 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center"
        animate={{
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TrendingUp className="w-6 h-6 text-accent" />
      </motion.div>
    </div>
  )
}
