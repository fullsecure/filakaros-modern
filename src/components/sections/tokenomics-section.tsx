"use client"

import { motion } from "framer-motion"
import { Coins, TrendingUp, Users, Lock, ExternalLink, Copy, Zap } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import dynamic from "next/dynamic"
import { tokenomics } from "@/lib/config"

// Lazy load for heavy chart component to optimize performance
const TokenDistributionChart = dynamic(() => import("@/components/ui/token-distribution-recharts").then(m => m.TokenDistributionChart), {
  ssr: false,
  loading: () => <div className="h-72 sm:h-80 lg:h-[440px] w-full animate-pulse rounded-xl bg-muted/20" aria-busy="true" aria-label="Loading chart" />
})

const overviewStats = [
  {
    icon: Coins,
    title: "Total Supply",
    value: "5B",
    label: "IKAROS Tokens",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Presale Price",
    value: "$0.007",
    label: "Presale Price",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Holders",
    value: "152K",
    label: "Active Wallets",
    color: "text-secondary"
  },
  {
    icon: Lock,
    title: "Locked Liquidity",
    value: "85%",
    label: "Security Guaranteed",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Launch Price",
    value: "$0.01",
    label: "Future Launch",
    color: "text-secondary"
  }
]

const platforms = [
  {
    name: "MEXC",
    logo: "/images/platforms/mexc.png",
    hasWhiteBg: true
  },
  {
    name: "OKX",
    logo: "/images/platforms/okx.png",
    hasWhiteBg: true
  },
  {
    name: "Trust Wallet",
    logo: "/images/platforms/trust_wallet.png",
    hasWhiteBg: false
  },
  {
    name: "PancakeSwap",
    logo: "/images/platforms/PancakeSwap.png",
    hasWhiteBg: false
  },
  {
    name: "MetaMask",
    logo: "/images/platforms/MetaMask.jpg",
    hasWhiteBg: false
  },
  {
    name: "CoinMarketCap",
    logo: "/images/platforms/CoinMarketCap.png",
    hasWhiteBg: true
  },
  {
    name: "Bitget",
    logo: "/images/platforms/bitget.png",
    hasWhiteBg: false
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
            <TokenDistributionChart />
          </div>

          {/* Distribution Details - hidden on mobile to avoid duplication with chart legend */}
          <div className="hidden lg:block space-y-6">
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





        {/* Coming Soon Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Coming Soon <span className="text-gradient-cool">On</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              IKAROS will be available on major exchanges and platforms soon
            </p>
          </div>

          {/* Scrolling Platforms */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll space-x-6 md:space-x-8">
              {/* Duplicate platforms for seamless loop */}
              {platforms.concat(platforms).map((platform, index) => (
                <motion.div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 w-28 h-14 md:w-32 md:h-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center hover:bg-card/70 transition-all duration-300 group platform-logo-container"
                  data-logo={platform.hasWhiteBg ? "white-bg" : "normal"}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="max-w-[100px] max-h-[32px] md:max-w-[120px] md:max-h-[40px] object-contain platform-logo group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Smart Contract Section - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-accent">IKAROS Smart Contract</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Verified on Binance Smart Chain
              </p>
            </motion.div>

            <Card className="glass-effect simple-glow border-border/50 overflow-hidden">
              <CardContent className="p-0">
                {/* Contract Address Section */}
                <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-6 border-b border-border/50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Contract Address</p>
                      <div className="flex items-center gap-3">
                        <p className="font-mono text-lg font-bold text-primary break-all lg:break-normal">
                          0x9149f60cDDf92985DFB60118e37e03e93397bb7a
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="shrink-0 text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-200"
                          onClick={() => {
                            navigator.clipboard.writeText('0x9149f60cDDf92985DFB60118e37e03e93397bb7a')
                          }}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 border-b border-border/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      variant="default"
                      className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                      onClick={() => {
                        navigator.clipboard.writeText('0x9149f60cDDf92985DFB60118e37e03e93397bb7a')
                      }}
                    >
                      <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Copy Address
                    </Button>

                    <Button
                      variant="outline"
                      className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://bscscan.com/token/0x9149f60cDDf92985DFB60118e37e03e93397bb7a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View on BSCScan
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Security Features */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-full shadow-lg"></div>
                      </div>
                      <h4 className="text-lg font-bold mb-2">Verified</h4>
                      <p className="text-sm text-muted-foreground">Contract source code verified</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Lock className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Audited</h4>
                      <p className="text-sm text-muted-foreground">Security audit completed</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">BSC Network</h4>
                      <p className="text-sm text-muted-foreground">Binance Smart Chain</p>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
