"use client"

import * as React from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

const DialogContent: React.FC<DialogContentProps> = ({
  className,
  children
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ duration: 0.2 }}
    className={cn(
      "relative z-50 w-full max-w-2xl mx-4 bg-background border rounded-lg shadow-lg",
      "max-h-[90vh] overflow-y-auto p-6",
      className
    )}
  >
    {children}
  </motion.div>
)

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

const DialogClose: React.FC<{
  onClose: () => void
  className?: string
}> = ({ onClose, className }) => (
  <button
    type="button"
    onClick={onClose}
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10 bg-background",
      className
    )}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </button>
)

// Large dialog content for help dialogs and other content-heavy modals
const DialogContentLarge: React.FC<DialogContentProps> = ({
  className,
  children
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ duration: 0.2 }}
    className={cn(
      "relative z-50 bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col",
      // Responsive width
      "w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-4rem)]",
      "max-w-[95vw] sm:max-w-[90vw] lg:max-w-4xl xl:max-w-5xl",
      // Responsive height
      "h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)]",
      "max-h-[95vh] sm:max-h-[90vh] lg:max-h-[85vh]",
      className
    )}
  >
    {children}
  </motion.div>
)

export {
  Dialog,
  DialogContent,
  DialogContentLarge,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
}
