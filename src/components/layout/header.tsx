"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageTranslator, LanguageTranslatorCompact } from "@/components/ui/language-translator"
import { Logo } from "@/components/ui/logo"
import { navigation, siteConfig } from "@/lib/config"
import { handleAnchorClick, useActiveSection } from "@/lib/smooth-scroll"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Track active section for navigation highlighting
  const sections = navigation.map(item => item.href.replace('#', ''))
  const activeSection = useActiveSection(sections)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/5"
          : "bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm"
      )}
    >
      {/* Enhanced background effects when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      )}
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo size="md" variant="full" animated={true} />
            </motion.div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group cursor-pointer px-3 py-2 rounded-lg",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}

                  {/* Enhanced underline effect */}
                  <span className={cn(
                    "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded-full",
                    isActive ? "w-8" : "w-0 group-hover:w-8"
                  )} />

                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              )
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageTranslator />
            <ThemeToggle />
            <Button variant="gradient" size="sm" asChild>
              <Link href="https://t.me/ikarosworld" target="_blank">
                Join Community
              </Link>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageTranslatorCompact />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleAnchorClick(e, item.href, () => setIsOpen(false))
                    }}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                      isActive
                        ? "text-primary bg-accent/50"
                        : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                    )}
                  >
                    {item.title}
                  </a>
                )
              })}
              <div className="px-4 pt-4 space-y-2">
                <Button variant="gradient" size="sm" className="w-full" asChild>
                  <Link href="https://t.me/ikarosworld" target="_blank">
                    Join Community
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  )
}
