"use client"

import { motion } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is IKAROS Token?",
      answer: "IKAROS Token is a digital asset designed to preserve and promote cultural heritage through blockchain technology."
    },
    {
      question: "How can I purchase IKAROS Tokens?",
      answer: "You can purchase IKAROS Tokens through our platform once the token sale goes live. Stay tuned for announcements."
    },
    {
      question: "What is the purpose of Filakaros?",
      answer: "Filakaros aims to preserve cultural heritage using innovative blockchain technology and create a sustainable ecosystem for cultural preservation."
    }
  ]

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
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              FAQ
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Frequently asked questions about IKAROS and Filakaros
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
