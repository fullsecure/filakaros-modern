"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is Filakaros and what does it do?",
        answer: "Filakaros is a blockchain-based platform that preserves cultural heritage through AI-powered technology. We create digital representations of historical sites, artifacts, and cultural knowledge, making them accessible to future generations while providing economic value through NFTs and the IKAROS token."
      },
      {
        question: "How does Filakaros preserve cultural heritage?",
        answer: "We use advanced AI, 3D scanning, AR/VR technologies, and blockchain to create immutable digital records of cultural sites and artifacts. Our platform allows communities to document, preserve, and monetize their cultural heritage while ensuring it remains accessible for educational and research purposes."
      },
      {
        question: "What makes Filakaros different from other heritage projects?",
        answer: "Filakaros combines cutting-edge technology with community ownership. Unlike traditional preservation methods, we give communities economic incentives to preserve their heritage through IKAROS tokenization, while using AI to make cultural knowledge more accessible and interactive."
      }
    ]
  },
  {
    category: "IKAROS Token",
    questions: [
      {
        question: "What is the IKAROS token used for?",
        answer: "IKAROS is our utility token used for governance, accessing premium features, purchasing heritage NFTs, rewarding community contributions, and participating in the cultural preservation ecosystem. Token holders can vote on which heritage sites to prioritize and earn rewards for contributing to preservation efforts."
      },
      {
        question: "How can I buy IKAROS tokens?",
        answer: "IKAROS tokens will be available through our official token sale and later on major decentralized exchanges. Join our community channels for announcements about token availability and purchasing instructions."
      },
      {
        question: "What is the total supply of IKAROS tokens?",
        answer: "The total supply is 5 billion IKAROS tokens. The distribution includes 30% for heritage preservation, 25% for community rewards, 20% for development, 15% for liquidity, and 10% for team and advisors with appropriate vesting schedules."
      }
    ]
  },
  {
    category: "Technology",
    questions: [
      {
        question: "Which blockchain does Filakaros use?",
        answer: "Filakaros is built on Binance Smart Chain (BSC) with plans to expand to other compatible blockchains. We chose BSC for its low transaction fees, fast confirmation times, and compatibility with Ethereum-based tools, making IKAROS token transactions more efficient."
      },
      {
        question: "How does the AI component work?",
        answer: "Our AI system analyzes cultural data, creates interactive explanations, generates virtual tours, and helps authenticate heritage artifacts. It can answer questions about historical sites, provide contextual information, and create personalized learning experiences."
      },
      {
        question: "Are the heritage NFTs authentic?",
        answer: "Yes, all heritage NFTs are created in partnership with verified cultural institutions, local communities, and heritage experts. Each NFT includes detailed provenance information and is backed by authentic cultural data and documentation."
      }
    ]
  },
  {
    category: "Community",
    questions: [
      {
        question: "How can I contribute to heritage preservation?",
        answer: "You can contribute by joining our Heritage Ambassador program, submitting cultural sites for preservation, participating in validation processes, creating educational content, or simply spreading awareness about cultural preservation in your community."
      },
      {
        question: "Do I need technical knowledge to participate?",
        answer: "No technical knowledge is required for most community activities. We provide user-friendly interfaces for submitting heritage sites, purchasing NFTs, and participating in governance. However, developers can contribute to our open-source projects."
      },
      {
        question: "How are heritage sites selected for preservation?",
        answer: "Sites are selected through community proposals, expert recommendations, and token holder voting. We prioritize sites based on cultural significance, preservation urgency, community support, and technical feasibility."
      }
    ]
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <Section id="faq" padding="xl" className="faq-bg">
      {/* تصميم مبسط */}

      {/* تصميم مبسط بدون عناصر عائمة */}

      <div className="relative z-10">
        <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about Filakaros, the IKAROS token, 
            and our cultural heritage preservation mission.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.questions.map((faq, index) => {
                const itemId = `${category.category}-${index}`
                const isOpen = openItems.includes(itemId)
                
                return (
                  <Card key={itemId} className="overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleItem(itemId)}
                      className="w-full text-left p-6 hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold pr-4">
                          {faq.question}
                        </h4>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </motion.div>
                  </Card>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our community and support team
              are here to help you with any questions about Filakaros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/ikarosworld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Join Community
              </a>
              <a
                href="mailto:support@filakaros.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Contact Support
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </Section>
  )
}
