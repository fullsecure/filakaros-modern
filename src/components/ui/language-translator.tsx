"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Languages, ChevronDown, Globe, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
]

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export function LanguageTranslator({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(languages[0])
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const { isLoaded, isTranslating, translateTo, resetToOriginal, error } = useTranslation()

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    setIsOpen(false)
    if (isLoaded) {
      translateTo(language.code)
    }
  }

  const handleReset = () => {
    setCurrentLanguage(languages[0])
    setIsOpen(false)
    if (isLoaded) {
      resetToOriginal()
    }
  }

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
      
      {/* Custom Language Selector */}
      <div className="relative">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Select language"
          disabled={isTranslating}
        >
          {isTranslating ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Globe className="w-4 h-4" />
          )}
          <span className="hidden sm:inline-block">{currentLanguage.flag}</span>
          <span className="hidden md:inline-block">{currentLanguage.nativeName}</span>
          <ChevronDown className={cn(
            "w-3 h-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50"
            >
              <div className="p-2">
                <div className="text-xs font-medium text-muted-foreground px-2 py-1 mb-1">
                  Select Language
                </div>
                
                {languages.map((language) => (
                  <button
                    type="button"
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-2 py-2 text-sm rounded-md transition-colors",
                      "hover:bg-muted focus:bg-muted focus:outline-none",
                      currentLanguage.code === language.code && "bg-muted"
                    )}
                    disabled={isTranslating}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{language.nativeName}</div>
                      <div className="text-xs text-muted-foreground">{language.name}</div>
                    </div>
                    {currentLanguage.code === language.code && (
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    )}
                  </button>
                ))}
                
                {currentLanguage.code !== 'en' && (
                  <>
                    <div className="border-t border-border my-2"></div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full flex items-center space-x-3 px-2 py-2 text-sm rounded-md transition-colors hover:bg-muted focus:bg-muted focus:outline-none text-primary"
                      disabled={isTranslating}
                    >
                      <Languages className="w-4 h-4" />
                      <span>Reset to Original</span>
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading indicator */}
      {!isLoaded && !error && (
        <div className="absolute top-full left-0 mt-1 text-xs text-muted-foreground">
          Loading translator...
        </div>
      )}

      {/* Error indicator */}
      {error && (
        <div className="absolute top-full left-0 mt-1 text-xs text-red-500">
          Translation unavailable
        </div>
      )}
    </div>
  )
}

// Compact version for mobile
export function LanguageTranslatorCompact({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(languages[0])
  const { translateTo, isTranslating } = useTranslation()

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2"
        aria-label="Select language"
        disabled={isTranslating}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage.flag}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[120px]"
          >
            <div className="p-1">
              {languages.map((language) => (
                <button
                  type="button"
                  key={language.code}
                  onClick={() => {
                    setCurrentLanguage(language)
                    setIsOpen(false)
                    translateTo(language.code)
                  }}
                  className="w-full flex items-center space-x-2 px-2 py-1.5 text-sm rounded hover:bg-muted transition-colors"
                  disabled={isTranslating}
                >
                  <span>{language.flag}</span>
                  <span className="text-xs">{language.nativeName}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
