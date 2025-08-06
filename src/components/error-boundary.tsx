"use client"

import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { logErrorToService, shouldIgnoreError } from '@/lib/error-handler'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // تجاهل أخطاء MetaMask المعروفة
    if (shouldIgnoreError(error)) {
      return { hasError: false }
    }

    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // تجاهل أخطاء MetaMask
    if (shouldIgnoreError(error)) {
      return
    }

    this.setState({ errorInfo })
    logErrorToService(error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback } = this.props
      
      if (Fallback && this.state.error) {
        return <Fallback error={this.state.error} retry={this.handleRetry} />
      }

      return <DefaultErrorFallback error={this.state.error} retry={this.handleRetry} />
    }

    return this.props.children
  }
}

// مكون العرض الافتراضي للأخطاء
function DefaultErrorFallback({ error, retry }: { error?: Error; retry: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <CardTitle className="text-xl">Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          
          {process.env.NODE_ENV === 'development' && error && (
            <details className="text-xs bg-muted p-3 rounded-md">
              <summary className="cursor-pointer font-medium mb-2">Error Details</summary>
              <pre className="whitespace-pre-wrap break-words">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
          
          <div className="flex gap-2">
            <Button onClick={retry} className="flex-1">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()} 
              className="flex-1"
            >
              Refresh Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Hook لمعالجة الأخطاء في المكونات الوظيفية
export function useErrorHandler() {
  const handleError = React.useCallback((error: Error, context?: string) => {
    if (shouldIgnoreError(error)) {
      return
    }
    
    console.error(`Error in ${context || 'component'}:`, error)
    logErrorToService(error, { context })
  }, [])

  return { handleError }
}
