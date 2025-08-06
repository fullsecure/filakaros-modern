"use client"

import { motion } from "framer-motion"
import { LifeBuoy, MessageCircle, Book, Mail } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <LifeBuoy className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get the support you need for IKAROS and Filakaros
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get instant help from our support team through live chat.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8">
              <Mail className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send us an email at info@filakaros.com for detailed support.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8">
              <Book className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Browse our comprehensive documentation and guides.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8">
              <LifeBuoy className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our community for peer support and discussions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
