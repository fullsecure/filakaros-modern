"use client"

import * as React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { GlobalErrorHandler } from "@/components/global-error-handler"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <GlobalErrorHandler />
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
