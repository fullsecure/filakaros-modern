"use client"

import { useEffect, useState, useCallback } from 'react'

interface TranslationState {
  isLoaded: boolean
  currentLanguage: string
  isTranslating: boolean
  error: string | null
}

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

export function useTranslation() {
  const [state, setState] = useState<TranslationState>({
    isLoaded: false,
    currentLanguage: 'en',
    isTranslating: false,
    error: null
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    console.log('🚀 Initializing Google Translate...')

    // Check if already working
    const existingCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (existingCombo && existingCombo.options && existingCombo.options.length > 0) {
      console.log('✅ Google Translate already working')
      setState(prev => ({ ...prev, isLoaded: true, error: null }))
      return
    }

    // Clean up any existing attempts
    const cleanup = () => {
      document.querySelectorAll('script[src*="translate.google.com"]').forEach(s => s.remove())
      document.querySelectorAll('#google_translate_element').forEach(e => e.remove())
      document.querySelectorAll('.goog-te-combo').forEach(e => e.remove())
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit = undefined as any
      }
      if (window.google?.translate) {
        window.google.translate = undefined
      }
    }

    cleanup()

    // Create container
    const container = document.createElement('div')
    container.id = 'google_translate_element'
    container.className = 'notranslate'
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    container.style.width = '1px'
    container.style.height = '1px'
    container.style.overflow = 'hidden'
    container.style.opacity = '0'
    document.body.appendChild(container)

    // Set up callback function
    window.googleTranslateElementInit = function() {
      console.log('📞 Google Translate callback triggered')
      
      // Wait for API to be fully ready
      setTimeout(() => {
        try {
          if (window.google?.translate?.TranslateElement?.InlineLayout) {
            console.log('🏗️ Creating TranslateElement...')
            
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,ar,fr,es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            }, 'google_translate_element')

            // Wait for combo element to be created
            let attempts = 0
            const maxAttempts = 30
            
            const checkForCombo = () => {
              attempts++
              console.log(`🔍 Checking for combo element... (${attempts}/${maxAttempts})`)
              
              const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
              
              if (combo && combo.options && combo.options.length > 0) {
                console.log(`✅ Success! Found combo with ${combo.options.length} options`)
                
                // Hide the combo but keep it functional
                combo.style.position = 'absolute'
                combo.style.left = '-9999px'
                combo.style.opacity = '0'
                
                setState(prev => ({ 
                  ...prev, 
                  isLoaded: true, 
                  error: null 
                }))
              } else if (attempts < maxAttempts) {
                setTimeout(checkForCombo, 500)
              } else {
                console.log('❌ Combo element not found after maximum attempts')
                setState(prev => ({ 
                  ...prev, 
                  error: 'Translation service initialization failed' 
                }))
              }
            }
            
            // Start checking after a delay
            setTimeout(checkForCombo, 1000)
            
          } else {
            console.log('❌ Google Translate API not fully available')
            setState(prev => ({ 
              ...prev, 
              error: 'Google Translate API not available' 
            }))
          }
        } catch (error) {
          console.error('❌ Error in callback:', error)
          setState(prev => ({ 
            ...prev, 
            error: `Initialization error: ${error}` 
          }))
        }
      }, 1000)
    }

    // Load the Google Translate script
    console.log('📥 Loading Google Translate script...')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    
    script.onload = () => {
      console.log('✅ Google Translate script loaded')
    }
    
    script.onerror = (error) => {
      console.error('❌ Failed to load Google Translate script:', error)
      setState(prev => ({ 
        ...prev, 
        error: 'Failed to load translation script' 
      }))
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      cleanup()
    }
  }, [])

  // Translate to specific language
  const translateTo = useCallback((languageCode: string) => {
    console.log(`🌐 Translating to: ${languageCode}`)

    if (!state.isLoaded) {
      console.warn('⚠️ Translation service not ready')
      setState(prev => ({ ...prev, error: 'Translation service not available' }))
      return
    }

    setState(prev => ({ ...prev, isTranslating: true, error: null }))

    try {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
      
      if (!combo) {
        setState(prev => ({ 
          ...prev, 
          error: 'Translation interface not found', 
          isTranslating: false 
        }))
        return
      }

      // Set the language and trigger change
      combo.value = languageCode
      combo.dispatchEvent(new Event('change', { bubbles: true }))
      
      // Update state after translation
      setTimeout(() => {
        setState(prev => ({ 
          ...prev, 
          currentLanguage: languageCode, 
          isTranslating: false,
          error: null
        }))
      }, 1000)
      
    } catch (error) {
      console.error('❌ Translation error:', error)
      setState(prev => ({ 
        ...prev, 
        error: `Translation failed: ${error}`, 
        isTranslating: false 
      }))
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

// Hook for translation status
export function useTranslationStatus() {
  const [isTranslated, setIsTranslated] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    const checkStatus = () => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
      const translated = document.body.classList.contains('translated-ltr') ||
                        document.body.classList.contains('translated-rtl') ||
                        Boolean(combo?.value && combo.value !== 'en')
      
      setIsTranslated(translated)
      setCurrentLang(combo?.value || 'en')
    }

    checkStatus()
    const interval = setInterval(checkStatus, 1000)
    return () => clearInterval(interval)
  }, [])

  return { isTranslated, currentLang }
}
