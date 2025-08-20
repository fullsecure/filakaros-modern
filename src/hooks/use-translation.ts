"use client"

import { useEffect, useState, useCallback } from 'react'
import { loadGoogleTranslateScript } from '@/lib/translation-loader'

interface TranslationState {
  isReady: boolean
  currentLanguage: string
  isTranslating: boolean
  error: string | null
}

// Function to set a cookie robustly
function setCookie(name: string, value: string) {
  // Set cookie for the root path to be accessible across the site for 1 day
  document.cookie = `${name}=${value || ""}; path=/; max-age=86400`;
}

// Function to get a cookie
function getCookie(name: string): string | null {
  const nameEQ = name + "="
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// Function to delete a cookie
function deleteCookie(name: string) {
  // To delete a cookie, set its expiry date to the past
  document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


export function useTranslation() {
  const [state, setState] = useState<TranslationState>({
    isReady: false,
    currentLanguage: 'en',
    isTranslating: false,
    error: null
  })

  // Effect to initialize the translator
  useEffect(() => {
    loadGoogleTranslateScript()
      .then(() => {
        setState(prev => ({ ...prev, isReady: true, error: null }))
      })
      .catch(error => {
        console.error(error)
        setState(prev => ({ ...prev, error: 'Failed to initialize translator.' }))
      })
  }, [])

  // Effect to read the current language from the cookie on load
  useEffect(() => {
    const langCookie = getCookie('goog-translate-c')
    const lang = langCookie ? langCookie.split('/')[2] : 'en'
    setState(prev => ({ ...prev, currentLanguage: lang || 'en' }))
  }, [])

  // Translate to a specific language
  const translateTo = useCallback((languageCode: string) => {
    if (!state.isReady) {
      console.warn('⚠️ Translation service not ready')
      return
    }
    
    setState(prev => ({ ...prev, isTranslating: true }))
    setCookie('goog-translate-c', `/en/${languageCode}`)
    
    // Use a small timeout to ensure the cookie is set before reload
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }, [state.isReady])

  // Reset to the original language
  const resetToOriginal = useCallback(() => {
    if (!state.isReady) {
      console.warn('⚠️ Translation service not ready')
      return
    }
    
    setState(prev => ({ ...prev, isTranslating: true }))
    deleteCookie('goog-translate-c')
    
    // Use a small timeout to ensure the cookie is deleted before reload
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }, [state.isReady])

  return {
    ...state,
    translateTo,
    resetToOriginal,
  }
}
