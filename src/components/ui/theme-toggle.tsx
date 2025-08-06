"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("system")
    } else {
      setTheme("dark")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-4 w-4" />
      case "light":
        return <Sun className="h-4 w-4" />
      case "system":
        return <Monitor className="h-4 w-4" />
      default:
        return <Moon className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "dark":
        return "Dark mode"
      case "light":
        return "Light mode"
      case "system":
        return "System mode"
      default:
        return "Dark mode"
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative overflow-hidden"
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : theme === "light" ? "system" : "dark"} mode`}
      title={getLabel()}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {getIcon()}
      </motion.div>
    </Button>
  )
}
