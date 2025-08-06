"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { generateJSONLD } from "@/lib/seo"

interface BreadcrumbItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface BreadcrumbProps {
  className?: string
  items?: BreadcrumbItem[]
  showHome?: boolean
  separator?: React.ReactNode
}

// دالة لإنشاء structured data للـ breadcrumbs
function createBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://filakaros.com${item.href}`
    }))
  }
}

// خريطة الصفحات لتحويل المسارات إلى عناوين مفهومة
const pageMap: Record<string, string> = {
  "": "Home",
  "whitepaper": "Whitepaper",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  "cookie-policy": "Cookie Policy",
  "disclaimer": "Disclaimer",
  "refund-policy": "Refund Policy",
  "about": "About",
  "tokenomics": "Tokenomics",
  "roadmap": "Roadmap",
  "events": "Events",
  "faq": "FAQ",
  "careers": "Careers",
  "contact": "Contact"
}

export function Breadcrumb({
  className,
  items,
  showHome = true,
  separator = <ChevronRight className="w-4 h-4 text-muted-foreground" />
}: BreadcrumbProps) {
  const pathname = usePathname()
  
  // إنشاء عناصر breadcrumb تلقائياً من المسار الحالي
  const generateBreadcrumbs = React.useMemo(() => {
    if (items) return items
    
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []
    
    if (showHome) {
      breadcrumbs.push({
        label: "Home",
        href: "/",
        icon: Home
      })
    }
    
    let currentPath = ""
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = pageMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      
      breadcrumbs.push({
        label,
        href: currentPath
      })
    })
    
    return breadcrumbs
  }, [pathname, items, showHome])

  if (generateBreadcrumbs.length <= 1 && !items) {
    return null
  }

  return (
    <nav className={cn("flex items-center space-x-1 text-sm", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {generateBreadcrumbs.map((item, index) => {
          const isLast = index === generateBreadcrumbs.length - 1
          const Icon = item.icon

          return (
            <li key={`${item.href}-${index}`} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 flex-shrink-0">
                  {separator}
                </span>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center"
              >
                {isLast ? (
                  <span className="flex items-center font-medium text-foreground">
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {item.label}
                  </Link>
                )}
              </motion.div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// مكون breadcrumb مبسط للصفحات القانونية
export function LegalBreadcrumb({ className }: { className?: string }) {
  const pathname = usePathname()
  
  const legalPages = [
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/terms-and-conditions", label: "Terms & Conditions" },
    { path: "/cookie-policy", label: "Cookie Policy" },
    { path: "/disclaimer", label: "Disclaimer" },
    { path: "/refund-policy", label: "Refund Policy" }
  ]
  
  const currentPage = legalPages.find(page => page.path === pathname)
  
  if (!currentPage) return null
  
  return (
    <div className={cn("border-b border-border/50 bg-muted/30", className)}>
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Legal", href: "#" },
            { label: currentPage.label, href: currentPage.path }
          ]}
        />
      </div>
    </div>
  )
}

// مكون breadcrumb للصفحات العامة
export function PageBreadcrumb({ 
  title, 
  category,
  className 
}: { 
  title: string
  category?: string
  className?: string 
}) {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" }
  ]
  
  if (category) {
    items.push({ label: category, href: `#${category.toLowerCase().replace(/\s+/g, '-')}` })
  }
  
  items.push({ label: title, href: `#${title.toLowerCase().replace(/\s+/g, '-')}` })

  return (
    <div className={cn("border-b border-border/50 bg-muted/30", className)}>
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb items={items} showHome={false} />
      </div>
    </div>
  )
}

// مكون breadcrumb متقدم مع أيقونات مخصصة
export function AdvancedBreadcrumb({
  items,
  className,
  variant = "default"
}: {
  items: BreadcrumbItem[]
  className?: string
  variant?: "default" | "minimal" | "pills"
}) {
  return (
    <nav className={cn("flex items-center", className)} aria-label="Breadcrumb">
      <ol className={cn(
        "flex items-center",
        variant === "pills" ? "space-x-2" : "space-x-1"
      )}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const Icon = item.icon

          return (
            <li key={`${item.href}-${index}-advanced`} className="flex items-center">
              {index > 0 && variant !== "pills" && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={cn(
                  "flex items-center",
                  variant === "pills" && "px-3 py-1 rounded-full text-sm",
                  variant === "pills" && isLast && "bg-primary text-primary-foreground",
                  variant === "pills" && !isLast && "bg-muted hover:bg-muted/80"
                )}
              >
                {isLast ? (
                  <span className={cn(
                    "flex items-center",
                    variant === "minimal" ? "text-foreground" : "font-medium text-foreground"
                  )}>
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center transition-colors duration-200",
                      variant === "pills" 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {item.label}
                  </Link>
                )}
              </motion.div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
