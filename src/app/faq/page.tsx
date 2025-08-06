"use client"

import { motion } from "framer-motion"
import { ChevronDown, Search, HelpCircle, Coins, Shield, Globe } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Metadata is exported from metadata.ts file
import { useState } from "react"

const faqCategories = [
  {
    id: "general",
    title: "General",
    icon: HelpCircle,
    color: "text-blue-400"
  },
  {
    id: "tokenomics",
    title: "Tokenomics",
    icon: Coins,
    color: "text-yellow-400"
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    color: "text-green-400"
  },
  {
    id: "platform",
    title: "Platform",
    icon: Globe,
    color: "text-purple-400"
  }
]

const faqs = [
  {
    id: "1",
    category: "general",
    question: "What is Filakaros and what does it aim to achieve?",
    answer: "Filakaros is a revolutionary project that combines cultural heritage preservation with cutting-edge blockchain technology. Our mission is to create the world's most comprehensive digital heritage preservation ecosystem, where ancient wisdom meets modern innovation through the IKAROS token. We use AI, blockchain, NFTs, and AR technology to safeguard global history while creating sustainable value for our community."
  },
  {
    id: "2",
    category: "general",
    question: "How does Filakaros preserve cultural heritage?",
    answer: "We use advanced AI algorithms to automatically catalog, analyze, and preserve cultural artifacts with 99.7% accuracy. Our blockchain technology ensures permanent, tamper-proof storage of cultural heritage data. We also create NFTs representing cultural landmarks and artifacts, providing sustainable funding for preservation projects through IKAROS token transactions."
  },
  {
    id: "3",
    category: "tokenomics",
    question: "What is the IKAROS token and how does it work?",
    answer: "IKAROS is our native utility token with a total supply of 5 billion tokens. It serves multiple purposes: governance voting, staking rewards, NFT marketplace transactions, and premium platform access. The token creates sustainable value while funding global heritage preservation projects through our innovative economic model."
  },
  {
    id: "4",
    category: "tokenomics",
    question: "How is the IKAROS token distributed?",
    answer: "Token distribution: 30% for Heritage Preservation (1.5B tokens), 25% for Community Rewards (1.25B tokens), 20% for Development (1B tokens), 15% for Liquidity Pool (750M tokens), and 10% for Team & Advisors (500M tokens). This ensures sustainable funding for our mission while rewarding our community."
  },
  {
    id: "5",
    category: "tokenomics",
    question: "What are the current token prices and where can I buy IKAROS?",
    answer: "The current presale price is $0.0007, with a planned listing price of $0.001. We're currently in Phase II of our roadmap, focusing on tokenomics and funding. Exchange listings are planned for Q2 2024. Join our Telegram community @ikarosworld for the latest updates on availability."
  },
  {
    id: "6",
    category: "security",
    question: "How secure is the Filakaros platform?",
    answer: "Security is our top priority. We use immutable blockchain technology for 100% tamper-proof data storage, smart contracts for transparent operations, and have 85% locked liquidity for guaranteed security. Our platform undergoes regular security audits and follows industry best practices for protecting user assets and data."
  },
  {
    id: "7",
    category: "security",
    question: "What measures are in place to protect my investments?",
    answer: "We implement multiple security layers: smart contract audits, locked liquidity pools, transparent tokenomics, and decentralized governance. Our economic model includes a 1% monthly burn rate for deflationary pressure and 12% annual staking APY for long-term holders. All transactions are recorded on the blockchain for complete transparency."
  },
  {
    id: "8",
    category: "platform",
    question: "What technologies does Filakaros use?",
    answer: "Our technology stack includes Ethereum blockchain for security and transparency, advanced machine learning for artifact analysis, AR/VR technology for immersive experiences, smart contracts for automated operations, and the IKAROS token ecosystem for sustainable funding and governance."
  },
  {
    id: "9",
    category: "platform",
    question: "How can I participate in the Filakaros ecosystem?",
    answer: "You can participate by: purchasing IKAROS tokens during presale, staking tokens for rewards, participating in governance voting, collecting cultural heritage NFTs, joining our community events, and contributing to preservation projects. Each participation method supports our mission while providing value to participants."
  },
  {
    id: "10",
    category: "platform",
    question: "What is the roadmap for Filakaros development?",
    answer: "Our roadmap includes 5 phases: Phase I (Foundation & Launch) - completed, Phase II (Tokenomics & Funding) - in progress, Phase III (Development & Innovation) - Q3-Q4 2024, Phase IV (Global Expansion) - Q1-Q2 2025, and Phase V (Future Vision) - Q3+ 2025. Each phase brings new features and capabilities to our ecosystem."
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section padding="xl" className="section-bg-primary text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <Badge variant="glow" size="lg" className="mb-4">
            ❓ Frequently Asked Questions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Get <span className="text-gradient-primary">Answers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Filakaros, IKAROS token, 
            and our cultural heritage preservation mission.
          </p>
        </motion.div>
      </Section>

      {/* Search and Filters */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="min-w-[120px]"
            >
              All Topics
            </Button>
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="min-w-[120px]"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.title}
              </Button>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* FAQ Items */}
      <Section padding="xl" className="section-bg-secondary">
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter
              </p>
            </motion.div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:glow transition-all duration-300">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left text-lg md:text-xl pr-4">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                          openItems.includes(faq.id) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {openItems.includes(faq.id) && (
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section padding="lg" className="section-bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Still Have <span className="text-gradient-accent">Questions?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is here to help you with any questions about Filakaros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="min-w-[200px]" asChild>
              <a href="/contact">
                Contact Support
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
              <a href="https://t.me/ikarosworld" target="_blank" rel="noopener noreferrer">
                Join Community
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
