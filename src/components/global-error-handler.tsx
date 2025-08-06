"use client"

import { useEffect } from 'react'
import { shouldIgnoreError } from '@/lib/error-handler'

export function GlobalErrorHandler() {
  useEffect(() => {
    // معالج الأخطاء العام للنافذة
    const handleError = (event: ErrorEvent) => {
      // تجاهل أخطاء MetaMask المعروفة
      if (shouldIgnoreError(event.error)) {
        event.preventDefault()
        return false
      }

      // تسجيل الأخطاء الأخرى
      console.error('Global error:', event.error)
    }

    // معالج الأخطاء غير المعالجة في Promise
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // تجاهل أخطاء MetaMask المعروفة
      if (shouldIgnoreError(event.reason)) {
        event.preventDefault()
        return false
      }

      // تسجيل الأخطاء الأخرى
      console.error('Unhandled promise rejection:', event.reason)
    }

    // إضافة معالجات الأحداث
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // تنظيف المعالجات عند إلغاء التحميل
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null // هذا المكون لا يعرض أي شيء
}
