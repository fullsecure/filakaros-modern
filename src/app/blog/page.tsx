"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              IKAROS Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Insights, innovations, and stories from the world of cultural heritage preservation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our blog is under development. Stay tuned for exciting content about cultural heritage preservation!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}