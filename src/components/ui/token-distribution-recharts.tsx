"use client"

// Token Distribution Chart using Recharts with Framer Motion and Tailwind
// الكود أدناه ينشئ مخططاً دائرياً تفاعلياً متجاوباً مع دعم الوضعين الداكن والفاتح
// وتعليقات باللغة العربية لتسهيل الصيانة لاحقاً.

import * as React from "react"
import { memo, useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts"
import { cn } from "@/lib/utils"
import { tokenomics } from "@/lib/config"
import { Gift, Megaphone, Wrench, Users, Droplet } from "lucide-react"

// أنواع البيانات الداخلية
interface DistItem {
  name: string
  percentage: number
  amount: number
  color: string
}

// خريطة الأيقونات لكل فئة
const ICONS: Record<string, React.ComponentType<any>> = {
  "Sales & Marketing": Megaphone,
  Airdrop: Gift,
  Development: Wrench,
  Team: Users,
  Liquidity: Droplet,
}

// تحويل HEX إلى RGBA بدرجة شفافية لمناطق التدرج
function hexToRgba(hex: string, alpha = 1) {
  const sanitized = hex.replace('#', '')
  const bigint = parseInt(sanitized.length === 3 ? sanitized.split('').map(c=>c+c).join('') : sanitized, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// تهيئة البيانات من ملف الإعدادات
const DATA: DistItem[] = tokenomics.distribution

// عنصر Tooltip مخصص مع إمكانية الوصول
const CustomTooltip = memo(({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload as DistItem
    return (
      <div className="rounded-xl border border-border/60 bg-background/95 backdrop-blur-md shadow-lg p-3 text-xs">
        <div className="font-semibold mb-1">{d.name}</div>
        <div className="flex items-center gap-3">
          <span className="text-primary font-bold">{d.percentage}%</span>
          <span className="text-muted-foreground">{(d.amount / 1_000_000_000).toFixed(1)}B IKAROS</span>
        </div>
      </div>
    )
  }
  return null
})
CustomTooltip.displayName = "CustomTooltip"

// شكل نشط مخصص عند التحويم لزيادة السمك والظل
function renderActiveShape(props: any) {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    midAngle,
  } = props

  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 6) * cos
  const sy = cy + (outerRadius + 6) * sin
  const mx = cx + (outerRadius + 14) * cos
  const my = cy + (outerRadius + 14) * sin

  return (
    <g>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 4}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        filter="url(#glow)"
      />
      {/* خط صغير للإشارة */}
      <path d={`M${sx},${sy} L${mx},${my}`} stroke={fill} strokeWidth={2} fill="none" />
    </g>
  )
}

// المكوّن الرئيسي للمخطط
export function TokenDistributionChart({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const gradients = useMemo(
    () =>
      DATA.map((d, i) => ({
        id: `grad-${i}`,
        from: hexToRgba(d.color, 0.95),
        to: hexToRgba(d.color, 0.35),
      })),
    []
  )

  return (
    <div
      role="img"
      aria-label="IKAROS token distribution chart"
      className={cn("w-full flex flex-col items-center", className)}
    >
      {/* حاوية متجاوبة للمخطط */}
      <div className="relative w-full h-72 sm:h-80 lg:h-[440px]">
        <ResponsiveContainer width="100%" height="100%">
          {/* @ts-ignore - Recharts لا يعرّف عناوين svg مباشرة */}
          <PieChart>
            <defs>
              {gradients.map((g) => (
                <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={g.from} />
                  <stop offset="100%" stopColor={g.to} />
                </linearGradient>
              ))}
            </defs>

            <Pie
              data={DATA}
              dataKey="percentage"
              nameKey="name"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={3}
              stroke="rgba(0,0,0,0.08)"
              strokeWidth={2}
              isAnimationActive
              animationBegin={200}
              animationDuration={1200}
              onMouseEnter={(_, i) => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              activeIndex={activeIndex ?? undefined}
              activeShape={renderActiveShape}
            >
              {DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`url(#grad-${index})`} className="transition-all duration-300" />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
          </PieChart>
        </ResponsiveContainer>

        {/* تسمية مركزية داخل الحلقة */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 via-primary-400 to-accent-400">
              5B
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">Total Supply</div>
          </motion.div>
        </div>
      </div>

      {/* Legend مخصص مع أيقونات لكل فئة */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-3xl lg:hidden"
      >
        {DATA.map((item, idx) => {
          const Icon = ICONS[item.name] ?? Users
          return (
            <div
              key={idx}
              className="group flex items-center gap-3 p-3 rounded-xl border border-border/50 hover:bg-accent/5 transition-colors"
            >
              <div className="relative">
                <div
                  className="w-9 h-9 rounded-full grid place-items-center shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${hexToRgba(item.color,0.25)}, ${hexToRgba(item.color,0.05)})` }}
                >
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium truncate">{item.name}</span>
                  <span className="text-sm font-bold text-primary">{item.percentage}%</span>
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {(item.amount / 1_000_000_000).toFixed(1)}B IKAROS
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>

      {/* محتوى مخفي للشاشات القارئة */}
      <div className="sr-only" aria-live="polite">
        {DATA.map((d) => (
          <div key={d.name}>{`${d.name}: ${d.percentage}% (${(d.amount/1_000_000_000).toFixed(1)}B IKAROS)`}</div>
        ))}
      </div>
    </div>
  )
}

export default memo(TokenDistributionChart)

