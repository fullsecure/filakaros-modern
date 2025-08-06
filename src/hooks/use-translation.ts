"use client"

import { useEffect, useState, useCallback } from 'react'

interface TranslationState {
  isLoaded: boolean
  currentLanguage: string
  isTranslating: boolean
  error: string | null
}

export function useTranslation() {
  const [state, setState] = useState<TranslationState>({
    isLoaded: false,
    currentLanguage: 'en',
    isTranslating: false,
    error: null
  })

  // Initialize Google Translate
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if already loaded
    if (window.google?.translate) {
      setState(prev => ({ ...prev, isLoaded: true }))
      return
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="translate.google.com"]')
    if (existingScript) {
      return
    }

    // Create script element
    const script = document.createElement('script')
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    script.onerror = () => {
      setState(prev => ({ ...prev, error: 'Failed to load translation service' }))
    }

    // Initialize callback
    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,ar,fr,es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            },
            'google_translate_element'
          )
          setState(prev => ({ ...prev, isLoaded: true, error: null }))
        }
      } catch (error) {
        console.error('Translation initialization failed:', error)
        setState(prev => ({ ...prev, error: 'Translation initialization failed' }))
      }
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  // Translate to specific language
  const translateTo = useCallback((languageCode: string) => {
    if (!state.isLoaded || !window.google?.translate) {
      setState(prev => ({ ...prev, error: 'Translation service not available' }))
      return
    }

    setState(prev => ({ ...prev, isTranslating: true, error: null }))

    try {
      const translateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (translateElement) {
        translateElement.value = languageCode
        translateElement.dispatchEvent(new Event('change'))
        
        // Update state after a short delay to allow translation to process
        setTimeout(() => {
          setState(prev => ({ 
            ...prev, 
            currentLanguage: languageCode, 
            isTranslating: false 
          }))
        }, 500)
      } else {
        setState(prev => ({ ...prev, error: 'Translation element not found', isTranslating: false }))
      }
    } catch (error) {
      setState(prev => ({ ...prev, error: 'Translation failed', isTranslating: false }))
    }
  }, [state.isLoaded])

  // Reset to original language
  const resetToOriginal = useCallback(() => {
    translateTo('en')
  }, [translateTo])

  // Get available languages
  const getAvailableLanguages = useCallback(() => {
    return [
      { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
      { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
      { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
      { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    ]
  }, [])

  return {
    ...state,
    translateTo,
    resetToOriginal,
    getAvailableLanguages,
    isReady: state.isLoaded && !state.error
  }
}

// Hook for detecting current page language
export function usePageLanguage() {
  const [pageLanguage, setPageLanguage] = useState('en')

  useEffect(() => {
    // Detect language from HTML lang attribute
    const htmlLang = document.documentElement.lang || 'en'
    setPageLanguage(htmlLang)

    // Listen for language changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
          const newLang = document.documentElement.lang || 'en'
          setPageLanguage(newLang)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    })

    return () => observer.disconnect()
  }, [])

  return pageLanguage
}

// Hook for translation status
export function useTranslationStatus() {
  const [isTranslated, setIsTranslated] = useState(false)

  useEffect(() => {
    const checkTranslationStatus = () => {
      // Check if page is currently translated
      const comboElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
      const isCurrentlyTranslated = document.body.classList.contains('translated-ltr') ||
                                   document.body.classList.contains('translated-rtl') ||
                                   Boolean(comboElement?.value && comboElement.value !== 'en')

      setIsTranslated(isCurrentlyTranslated)
    }

    // Check initially
    checkTranslationStatus()

    // Set up interval to check translation status
    const interval = setInterval(checkTranslationStatus, 1000)

    return () => clearInterval(interval)
  }, [])

  return isTranslated
}
