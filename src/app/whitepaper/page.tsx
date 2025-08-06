"use client"
import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"
export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Whitepaper</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Learn about IKAROS Token and our vision</p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">IKAROS Whitepaper</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Discover our comprehensive whitepaper detailing the IKAROS Token ecosystem, 
              cultural heritage preservation technology, and our roadmap for the future.
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
