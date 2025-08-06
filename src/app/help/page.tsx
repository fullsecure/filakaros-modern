"use client"

import { motion } from "framer-motion"
import { HelpCircle, Book, MessageCircle, Mail, Search, ExternalLink, FileText, Video, Users } from "lucide-react"
import { Section, Card, CardContent, CardHeader, CardTitle, Badge, Button, Input } from "@/components/ui"
import { HelpDialog } from "@/components/help/help-dialog"
import { useState } from "react"

const helpCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Book,
    description: "Learn the basics of Filakaros and how to begin your journey",
    articles: [
      { title: "What is Filakaros?", id: "what-is-filakaros" },
      { title: "How to Buy IKAROS Tokens", id: "buy-tokens" },
      { title: "Setting Up Your Wallet", id: "wallet-setup" },
      { title: "Understanding Tokenomics", id: "tokenomics" }
    ],
    color: "text-primary"
  },
  {
    id: "platform",
    title: "Platform Guide",
    icon: Users,
    description: "Navigate and use the Filakaros platform effectively",
    articles: [
      { title: "Platform Overview", id: "platform-overview" },
      { title: "NFT Marketplace Guide", id: "nft-marketplace" },
      { title: "Staking Your Tokens", id: "staking" },
      { title: "Governance Participation", id: "governance" }
    ],
    color: "text-secondary"
  },
  {
    id: "technical",
    title: "Technical Support",
    icon: HelpCircle,
    description: "Troubleshoot technical issues and get expert help",
    articles: [
      { title: "Common Issues & Solutions", id: "troubleshooting" },
      { title: "Wallet Connection Problems", id: "wallet-issues" },
      { title: "Transaction Failures", id: "transaction-issues" },
      { title: "Security Best Practices", id: "security" }
    ],
    color: "text-red-400"
  },
  {
    id: "community",
    title: "Community & Events",
    icon: MessageCircle,
    description: "Connect with the community and participate in events",
    articles: [
      { title: "Joining Our Community", id: "community" },
      { title: "Event Participation", id: "events" },
      { title: "Community Guidelines", id: "guidelines" },
      { title: "Reporting Issues", id: "reporting" }
    ],
    color: "text-accent"
  }
]

const quickActions = [
  {
    title: "Contact Support",
    description: "Get direct help from our support team",
    icon: Mail,
    action: "Contact Us",
    url: "/contact",
    color: "text-primary"
  },
  {
    title: "Join Telegram",
    description: "Connect with our community for real-time help",
    icon: MessageCircle,
    action: "Join Now",
    url: "https://t.me/ikarosworld",
    color: "text-secondary"
  },
  {
    title: "Watch Tutorials",
    description: "Learn through our video guides and tutorials",
    icon: Video,
    action: "Watch Videos",
    url: "https://youtube.com/@ikarosworld",
    color: "text-red-400"
  },
  {
    title: "Read Documentation",
    description: "Comprehensive technical documentation",
    icon: FileText,
    action: "Read Docs",
    url: "https://docs.ikarosworld.com",
    color: "text-accent"
  }
]

const popularArticles = [
  {
    title: "How to Participate in IKAROS Token Presale",
    description: "Step-by-step guide to joining our token presale",
    readTime: "5 min read",
    category: "Getting Started"
  },
  {
    title: "Understanding Cultural Heritage NFTs",
    description: "Learn about our unique NFT collection and marketplace",
    readTime: "7 min read",
    category: "Platform Guide"
  },
  {
    title: "Staking IKAROS Tokens for Rewards",
    description: "Maximize your returns through our staking program",
    readTime: "4 min read",
    category: "Platform Guide"
  },
  {
    title: "Security Best Practices for Crypto",
    description: "Keep your assets safe with these essential tips",
    readTime: "6 min read",
    category: "Technical Support"
  }
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState("")

  const handleArticleClick = (articleId: string) => {
    setSelectedArticle(articleId)
    setDialogOpen(true)
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
            🆘 Help Center
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            How Can We <span className="text-gradient-primary">Help You?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers, get support, and learn everything you need to know about 
            Filakaros and the IKAROS ecosystem.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, and tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* Quick Actions */}
      <Section padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full text-center group card-hover simple-glow">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {action.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href={action.url} 
                      target={action.url.startsWith('http') ? '_blank' : undefined}
                      rel={action.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {action.action}
                      {action.url.startsWith('http') && <ExternalLink className="w-3 h-3 ml-2" />}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Help Categories */}
      <Section padding="xl" className="section-bg-secondary">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Browse by <span className="text-gradient-accent">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the information you need organized by topic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group card-hover simple-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-muted-foreground text-sm mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <button
                          key={articleIndex}
                          type="button"
                          onClick={() => handleArticleClick((article as any).id)}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors group/article text-left"
                        >
                          <span className="text-sm font-medium group-hover/article:text-primary transition-colors">
                            {article.title}
                          </span>
                          <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/article:text-primary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Popular Articles */}
      <Section padding="xl">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Popular <span className="text-gradient-warm">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most read articles by our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group card-hover simple-glow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline" size="sm">
                          {article.category}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {article.readTime}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Support */}
      <Section padding="lg" className="section-bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Still Need <span className="text-gradient-accent">Help?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our support team is here to help you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="min-w-[200px]" asChild>
              <a href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
              <a href="https://t.me/ikarosworld" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Community
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Help Dialog */}
      <HelpDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        articleId={selectedArticle}
      />
    </div>
  )
}
