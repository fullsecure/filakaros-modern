/**
 * معالج الأخطاء العام للموقع
 * Global Error Handler for the Website
 */

// أنواع الأخطاء المختلفة
export type ErrorType = 
  | 'WALLET_CONNECTION_ERROR'
  | 'NETWORK_ERROR'
  | 'VALIDATION_ERROR'
  | 'UNKNOWN_ERROR'

export interface AppError {
  type: ErrorType
  message: string
  details?: any
  timestamp: Date
}

// معالج أخطاء MetaMask
export function handleMetaMaskError(error: any): AppError {
  console.warn('MetaMask connection attempt failed:', error)
  
  return {
    type: 'WALLET_CONNECTION_ERROR',
    message: 'Wallet connection is optional. The website works without it.',
    details: error,
    timestamp: new Date()
  }
}

// معالج الأخطاء العام
export function handleError(error: any, context?: string): AppError {
  // تحديد نوع الخطأ
  let errorType: ErrorType = 'UNKNOWN_ERROR'
  let message = 'An unexpected error occurred'

  if (error?.message?.includes('MetaMask') || error?.message?.includes('ethereum')) {
    return handleMetaMaskError(error)
  }

  if (error?.message?.includes('Network') || error?.message?.includes('fetch')) {
    errorType = 'NETWORK_ERROR'
    message = 'Network connection error. Please check your internet connection.'
  }

  if (error?.name === 'ValidationError') {
    errorType = 'VALIDATION_ERROR'
    message = 'Please check your input and try again.'
  }

  // تسجيل الخطأ للمطورين
  console.error(`Error in ${context || 'unknown context'}:`, error)

  return {
    type: errorType,
    message,
    details: error,
    timestamp: new Date()
  }
}

// معالج أخطاء React Error Boundary
export function logErrorToService(error: Error, errorInfo: any) {
  // في بيئة الإنتاج، يمكن إرسال الأخطاء لخدمة مراقبة
  if (process.env.NODE_ENV === 'production') {
    // مثال: Sentry, LogRocket, etc.
    console.error('Production Error:', error, errorInfo)
  } else {
    console.error('Development Error:', error, errorInfo)
  }
}

// دالة لتجاهل أخطاء MetaMask المعروفة
export function shouldIgnoreError(error: any): boolean {
  const ignoredErrors = [
    'Failed to connect to MetaMask',
    'MetaMask is not installed',
    'User rejected the request',
    'ethereum is not defined'
  ]

  return ignoredErrors.some(ignoredError => 
    error?.message?.includes(ignoredError)
  )
}
