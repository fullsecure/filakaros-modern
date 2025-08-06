"use client"

import { motion } from "framer-motion"
import { Coins, TrendingUp, Users, Lock, Vote, Wallet, Gem, Key, ExternalLink, Copy, Zap } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { TokenPieChart, TokenPriceChart, TradingStats } from "@/components/ui/token-charts"
import { tokenomics } from "@/lib/config"

const overviewStats = [
  {
    icon: Coins,
    title: "Total Supply",
    value: "5,000,000,000",
    label: "IKAROS Tokens",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Current Price",
    value: "$0.001",
    label: "+15.2% (24h)",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Holders",
    value: "1M+",
    label: "Active Wallets",
    color: "text-secondary"
  },
  {
    icon: Lock,
    title: "Locked Liquidity",
    value: "85%",
    label: "Security Guaranteed",
    color: "text-primary"
  }
]

const useCases = [
  {
    icon: Vote,
    title: "Governance",
    description: "Vote on preservation projects, funding allocation, and platform upgrades through decentralized governance.",
    color: "text-primary"
  },
  {
    icon: Wallet,
    title: "Staking Rewards",
    description: "Earn passive income by staking IKAROS tokens and supporting heritage preservation initiatives.",
    color: "text-secondary"
  },
  {
    icon: Gem,
    title: "NFT Marketplace",
    description: "Purchase exclusive cultural heritage NFTs and access premium AR experiences using IKAROS.",
    color: "text-accent"
  },
  {
    icon: Key,
    title: "Premium Access",
    description: "Unlock advanced AI documentation tools and exclusive educational content with token holdings.",
    color: "text-primary"
  }
]

const economicModel = [
  {
    percentage: "2.5%",
    label: "Transaction Fee",
    description: "Funds heritage preservation projects"
  },
  {
    percentage: "12%",
    label: "Annual Staking APY",
    description: "Rewards for long-term holders"
  },
  {
    percentage: "1%",
    label: "Monthly Burn Rate",
    description: "Deflationary mechanism"
  },
  {
    percentage: "$50M+",
    label: "Heritage Fund",
    description: "Accumulated preservation budget"
  }
]

export function TokenomicsSection() {
  return (
    <Section id="tokenomics" padding="xl" className="section-bg-primary relative overflow-hidden">
      {/* خلفية مبسطة ومتناسقة */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5" />

      <div className="relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <Badge variant="glow" size="lg" className="mb-4 simple-glow">
            🪙 IKAROS Tokenomics
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            Powering Cultural Heritage <span className="text-gradient-warm">Preservation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how IKAROS token creates <span className="text-accent font-semibold">sustainable value</span> while funding global heritage preservation projects through <span className="text-primary font-semibold">innovative blockchain economics</span>
          </p>
        </motion.div>

        {/* Token Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center group card-hover simple-glow">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Interactive Chart */}
          <div className="space-y-6">
            <TokenPieChart />
          </div>

          {/* Distribution Details */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-gradient-primary">Allocation</span> Breakdown
            </h3>
            <div className="space-y-4">
              {tokenomics.distribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{item.percentage}%</div>
                    <div className="text-sm text-muted-foreground">
                      {(item.amount / 1000000000).toFixed(1)}B IKAROS
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            IKAROS Token <span className="text-gradient-accent">Utility</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group card-hover simple-glow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Economic Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Sustainable <span className="text-gradient-warm">Economic Model</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {economicModel.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4 p-6 rounded-xl border border-border/50 hover:bg-accent/5 transition-all duration-300 simple-glow"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                  {model.percentage}
                </div>
                <div className="font-semibold text-lg">
                  {model.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {model.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Smart Contract Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="max-w-3xl mx-auto glass-effect simple-glow border-border/50">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-gradient-accent">IKAROS Smart Contract</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Verified on Binance Smart Chain
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 mb-4 border border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Contract Address</p>
                    <p className="font-mono text-sm text-primary truncate">
                      0x9149f60cDDf92985DFB60118e37e03e93397bb7a
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 text-primary hover:bg-primary/10"
                    onClick={() => {
                      navigator.clipboard.writeText('0x9149f60cDDf92985DFB60118e37e03e93397bb7a')
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 group"
                  onClick={() => {
                    navigator.clipboard.writeText('0x9149f60cDDf92985DFB60118e37e03e93397bb7a')
                  }}
                >
                  <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Copy Address
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group"
                  asChild
                >
                  <a
                    href="https://bscscan.com/token/0x9149f60cDDf92985DFB60118e37e03e93397bb7a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    BSCScan
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="w-8 h-8 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium">Verified</div>
                </div>
                <div className="space-y-1">
                  <div className="w-8 h-8 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-xs font-medium">Audited</div>
                </div>
                <div className="space-y-1">
                  <div className="w-8 h-8 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="text-xs font-medium">BSC Network</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
