"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Coins, 
  Wallet, 
  Shield, 
  Users, 
  Gamepad2, 
  Palette, 
  Landmark, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Copy,
  ArrowRight
} from "lucide-react"
import { Dialog, DialogContent, DialogContentLarge, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HelpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  articleId: string
}

interface KeyFeature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface Step {
  step: number
  title: string
  description: string
  details?: string
}

interface WalletOption {
  name: string
  description: string
  pros: string[]
  cons: string[]
}

interface Exchange {
  name: string
  status: string
  type: string
}

interface TokenDistribution {
  category: string
  percentage: number
  amount: string
  lockup: string
  color: string
}

interface TechnicalSpecs {
  blockchain: string
  tokenStandard: string
  totalSupply: string
  contractAddress: string
}

interface EconomicModel {
  totalSupply: string
  presalePrice: string
  listingPrice: string
  expectedROI: string
  blockchain: string
}

interface ArticleContent {
  overview: string
  keyFeatures?: KeyFeature[]
  steps?: Step[]
  walletOptions?: WalletOption[]
  supportedExchanges?: Exchange[]
  securityTips?: string[]
  tokenDistribution?: TokenDistribution[]
  tokenUtility?: string[]
  technicalSpecs?: TechnicalSpecs
  economicModel?: EconomicModel
}

interface HelpArticle {
  title: string
  icon: React.ComponentType<{ className?: string }>
  category: string
  readTime: string
  content: ArticleContent
}

const helpContent: Record<string, HelpArticle> = {
  "what-is-filakaros": {
    title: "What is Filakaros?",
    icon: Landmark,
    category: "Getting Started",
    readTime: "5 min read",
    content: {
      overview: "Filakaros is a revolutionary blockchain-based platform that combines cultural heritage preservation with cutting-edge Web3 technology. Our mission is to preserve the world's cultural treasures while creating sustainable economic value through the IKAROS token ecosystem.",
      keyFeatures: [
        {
          title: "Cultural Heritage Preservation",
          description: "AI-powered documentation and blockchain storage of cultural artifacts from 195+ countries",
          icon: Palette
        },
        {
          title: "NFT Marketplace",
          description: "Trade unique digital representations of cultural landmarks and heritage sites",
          icon: Coins
        },
        {
          title: "AR/VR Experiences",
          description: "Immersive virtual tours and interactive cultural experiences",
          icon: Gamepad2
        },
        {
          title: "Community Governance",
          description: "Decentralized decision-making powered by IKAROS token holders",
          icon: Users
        }
      ],
      technicalSpecs: {
        blockchain: "Binance Smart Chain (BSC)",
        tokenStandard: "BEP-20",
        totalSupply: "5,000,000,000 IKAROS",
        contractAddress: "0x9149f60cDDf92985DFB60118e37e03e93397bb7a"
      }
    }
  },
  "buy-tokens": {
    title: "How to Buy IKAROS Tokens",
    icon: Coins,
    category: "Getting Started",
    readTime: "8 min read",
    content: {
      overview: "Learn how to purchase IKAROS tokens through our presale or on supported exchanges. Follow this step-by-step guide to join the Filakaros ecosystem.",
      steps: [
        {
          step: 1,
          title: "Set Up Your Wallet",
          description: "Install MetaMask or Trust Wallet and create a new wallet or import existing one",
          details: "Make sure to securely store your seed phrase and never share it with anyone"
        },
        {
          step: 2,
          title: "Add BSC Network",
          description: "Configure your wallet to connect to Binance Smart Chain network",
          details: "Network Name: Smart Chain, RPC URL: https://bsc-dataseed.binance.org/, Chain ID: 56"
        },
        {
          step: 3,
          title: "Get BNB",
          description: "Purchase BNB from a centralized exchange and transfer to your wallet",
          details: "You'll need BNB to pay for transaction fees and to swap for IKAROS tokens"
        },
        {
          step: 4,
          title: "Visit Our Platform",
          description: "Go to our official website and connect your wallet",
          details: "Always verify you're on the official Filakaros website to avoid scams"
        },
        {
          step: 5,
          title: "Purchase Tokens",
          description: "Enter the amount of IKAROS tokens you want to buy and confirm the transaction",
          details: "Current presale price: $0.0007 per token, listing price: $0.001 per token"
        }
      ],
      supportedExchanges: [
        { name: "PancakeSwap", status: "Coming Soon", type: "DEX" },
        { name: "MEXC", status: "Coming Soon", type: "CEX" },
        { name: "Bitget", status: "Coming Soon", type: "CEX" },
        { name: "OKX", status: "Coming Soon", type: "CEX" }
      ]
    }
  },
  "wallet-setup": {
    title: "Setting Up Your Wallet",
    icon: Wallet,
    category: "Getting Started",
    readTime: "6 min read",
    content: {
      overview: "A comprehensive guide to setting up and securing your cryptocurrency wallet for interacting with the Filakaros ecosystem.",
      walletOptions: [
        {
          name: "MetaMask",
          description: "Most popular browser extension wallet with excellent DApp support",
          pros: ["Easy to use", "Wide compatibility", "Strong security"],
          cons: ["Browser-based only", "Requires extension"]
        },
        {
          name: "Trust Wallet",
          description: "Mobile-first wallet with built-in DApp browser and staking features",
          pros: ["Mobile native", "Built-in DApp browser", "Staking support"],
          cons: ["Limited desktop support", "Smaller ecosystem"]
        },
        {
          name: "Binance Chain Wallet",
          description: "Official wallet for Binance Smart Chain with seamless BSC integration",
          pros: ["Native BSC support", "Low fees", "Fast transactions"],
          cons: ["Limited to BSC", "Centralized development"]
        }
      ],
      securityTips: [
        "Never share your seed phrase with anyone",
        "Use hardware wallets for large amounts",
        "Enable two-factor authentication when available",
        "Regularly update your wallet software",
        "Verify all transaction details before confirming",
        "Use strong, unique passwords for all accounts"
      ]
    }
  },
  "tokenomics": {
    title: "Understanding IKAROS Tokenomics",
    icon: TrendingUp,
    category: "Getting Started",
    readTime: "10 min read",
    content: {
      overview: "Dive deep into the IKAROS token economics, distribution model, and utility within the Filakaros ecosystem.",
      tokenDistribution: [
        { category: "Sales & Marketing", percentage: 40, amount: "2,000,000,000", lockup: "6 months gradual", color: "bg-blue-500" },
        { category: "Airdrop", percentage: 20, amount: "1,000,000,000", lockup: "Gradual unlock", color: "bg-purple-500" },
        { category: "Development", percentage: 15, amount: "750,000,000", lockup: "12 months gradual", color: "bg-cyan-500" },
        { category: "Team", percentage: 15, amount: "750,000,000", lockup: "18 months", color: "bg-green-500" },
        { category: "Liquidity", percentage: 10, amount: "500,000,000", lockup: "No lockup", color: "bg-yellow-500" }
      ],
      tokenUtility: [
        "Governance voting rights",
        "Staking rewards and yield farming",
        "NFT marketplace transactions",
        "Platform fee discounts",
        "Access to premium features",
        "Cultural heritage project funding"
      ],
      economicModel: {
        totalSupply: "5,000,000,000 IKAROS",
        presalePrice: "$0.007",
        listingPrice: "$0.01",
        expectedROI: "42.8% at listing",
        blockchain: "Binance Smart Chain"
      }
    }
  },
  "platform-overview": {
    title: "Platform Overview",
    icon: Landmark,
    category: "Platform Features",
    readTime: "7 min read",
    content: {
      overview: "Discover the comprehensive features and capabilities of the Filakaros platform, designed to revolutionize cultural heritage preservation through blockchain technology.",
      keyFeatures: [
        {
          title: "Heritage Documentation",
          description: "Advanced AI-powered tools for documenting and preserving cultural artifacts",
          icon: Palette
        },
        {
          title: "Virtual Experiences",
          description: "Immersive AR/VR tours of historical sites and cultural landmarks",
          icon: Gamepad2
        },
        {
          title: "Community Governance",
          description: "Decentralized decision-making for heritage preservation projects",
          icon: Users
        },
        {
          title: "NFT Marketplace",
          description: "Trade and collect unique digital representations of cultural heritage",
          icon: Coins
        }
      ]
    }
  },
  "security": {
    title: "Security Best Practices",
    icon: Shield,
    category: "Security",
    readTime: "6 min read",
    content: {
      overview: "Learn essential security practices to protect your digital assets and maintain safe interactions within the Filakaros ecosystem.",
      securityTips: [
        "Never share your private keys or seed phrases with anyone",
        "Use hardware wallets for storing large amounts of cryptocurrency",
        "Enable two-factor authentication on all accounts",
        "Verify all transaction details before confirming",
        "Only use official Filakaros websites and applications",
        "Keep your wallet software updated to the latest version",
        "Use strong, unique passwords for all accounts",
        "Be cautious of phishing attempts and suspicious links",
        "Regularly backup your wallet and store backups securely",
        "Never enter your seed phrase on websites or applications"
      ]
    }
  },
  "troubleshooting": {
    title: "Common Issues & Solutions",
    icon: AlertCircle,
    category: "Troubleshooting",
    readTime: "8 min read",
    content: {
      overview: "Find solutions to common issues you might encounter while using the Filakaros platform and interacting with IKAROS tokens.",
      steps: [
        {
          step: 1,
          title: "Check Network Connection",
          description: "Ensure you're connected to the correct blockchain network (BSC)",
          details: "Go to your wallet settings and verify you're connected to Binance Smart Chain (Chain ID: 56)"
        },
        {
          step: 2,
          title: "Clear Browser Cache",
          description: "Clear your browser cache and cookies to resolve loading issues",
          details: "Press Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac) and clear browsing data"
        },
        {
          step: 3,
          title: "Update Wallet Software",
          description: "Make sure you're using the latest version of your wallet",
          details: "Check for updates in your wallet's settings or download the latest version from the official website"
        },
        {
          step: 4,
          title: "Check Gas Fees",
          description: "Ensure you have enough BNB to cover transaction fees",
          details: "BSC transactions require BNB for gas fees. Keep at least 0.01 BNB in your wallet"
        }
      ]
    }
  }
}

export function HelpDialog({ open, onOpenChange, articleId }: HelpDialogProps) {
  const article = helpContent[articleId]

  if (!article) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogClose onClose={() => onOpenChange(false)} />
          <DialogHeader>
            <DialogTitle>Article Not Found</DialogTitle>
            <DialogDescription>
              The requested help article could not be found. Please try selecting a different article.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  const IconComponent = article.icon

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You can add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContentLarge>
        <DialogClose onClose={() => onOpenChange(false)} />

        {/* Fixed Header */}
        <div className="flex-shrink-0 p-6 pb-4 border-b">
          <DialogHeader className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-2xl font-bold">{article.title}</DialogTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" size="sm">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
              </div>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {article.content.overview}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
          {/* Key Features */}
          {article.content.keyFeatures && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.content.keyFeatures.map((feature: KeyFeature, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <feature.icon className="w-5 h-5 text-primary" />
                          <CardTitle className="text-base">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Steps */}
          {article.content.steps && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Step-by-Step Guide</h3>
              <div className="space-y-4">
                {article.content.steps.map((step: Step, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {step.details && (
                        <div className="bg-muted/50 rounded-lg p-3 mt-2">
                          <p className="text-xs text-muted-foreground">{step.details}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specs */}
          {article.content.technicalSpecs && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technical Specifications</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Blockchain:</span>
                        <span className="text-sm font-medium">{article.content.technicalSpecs.blockchain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Token Standard:</span>
                        <span className="text-sm font-medium">{article.content.technicalSpecs.tokenStandard}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Supply:</span>
                        <span className="text-sm font-medium">{article.content.technicalSpecs.totalSupply}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Contract:</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                            {article.content.technicalSpecs.contractAddress.slice(0, 10)}...
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(article.content.technicalSpecs?.contractAddress || "")}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Supported Exchanges */}
          {article.content.supportedExchanges && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Supported Exchanges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {article.content.supportedExchanges.map((exchange: Exchange, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{exchange.name}</span>
                      <Badge variant="outline" size="sm">{exchange.type}</Badge>
                    </div>
                    <Badge
                      variant={exchange.status === "Live" ? "default" : "secondary"}
                      size="sm"
                    >
                      {exchange.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wallet Options */}
          {article.content.walletOptions && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recommended Wallets</h3>
              <div className="space-y-4">
                {article.content.walletOptions.map((wallet: WalletOption, index: number) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{wallet.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{wallet.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-green-600 mb-2">Pros:</h5>
                          <ul className="text-xs space-y-1">
                            {wallet.pros.map((pro: string, i: number) => (
                              <li key={i} className="flex items-center space-x-1">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-orange-600 mb-2">Cons:</h5>
                          <ul className="text-xs space-y-1">
                            {wallet.cons.map((con: string, i: number) => (
                              <li key={i} className="flex items-center space-x-1">
                                <AlertCircle className="w-3 h-3 text-orange-500" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Security Tips */}
          {article.content.securityTips && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Security Best Practices</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {article.content.securityTips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Token Distribution */}
          {article.content.tokenDistribution && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Token Distribution</h3>
              <div className="space-y-3">
                {article.content.tokenDistribution.map((item: TokenDistribution, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className={cn("w-4 h-4 rounded-full", item.color)}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-sm font-bold">{item.percentage}%</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{item.amount} tokens</span>
                        <span>{item.lockup}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Token Utility */}
          {article.content.tokenUtility && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Token Utility</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {article.content.tokenUtility.map((utility: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-sm">{utility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Economic Model */}
          {article.content.economicModel && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Economic Model</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(article.content.economicModel).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xs text-muted-foreground capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="font-semibold text-sm">{value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t mt-6">
            <Button variant="gradient" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Platform
            </Button>
            <Button variant="outline" className="flex-1">
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </DialogContentLarge>
    </Dialog>
  )
}
