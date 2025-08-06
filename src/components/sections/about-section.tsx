"use client"

import { motion } from "framer-motion"
import { Eye, Brain, Box, Gem, Shield, Users, Globe, TrendingUp } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundEffects } from "@/components/ui/background-effects"
import { HeritageVisual } from "./heritage-visual"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Documentation",
    description: "Advanced machine learning algorithms automatically catalog, analyze, and preserve cultural artifacts with unprecedented accuracy and detail.",
    stat: "99.7%",
    statLabel: "Accuracy Rate",
    color: "text-blue-400"
  },
  {
    icon: Box,
    title: "Blockchain Security", 
    description: "Immutable ledger technology ensures permanent, tamper-proof storage of cultural heritage data, powered by IKAROS token ecosystem.",
    stat: "100%",
    statLabel: "Immutable",
    color: "text-purple-400"
  },
  {
    icon: Gem,
    title: "NFT Marketplace",
    description: "Unique digital ownership of cultural artifacts through NFTs, creating sustainable funding for preservation projects via IKAROS transactions.",
    stat: "10K+",
    statLabel: "NFTs Created",
    color: "text-emerald-400"
  }
]

const technologies = [
  { name: "Binance Smart Chain", icon: "⚡" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "AR/VR Technology", icon: "🥽" },
  { name: "IKAROS Token", icon: "🪙" },
  { name: "Smart Contracts", icon: "🛡️" }
]

const impactStats = [
  { number: "2.5M+", label: "Artifacts Preserved" },
  { number: "150+", label: "Countries Covered" },
  { number: "500+", label: "Museums Partnered" },
  { number: "1M+", label: "IKAROS Holders" }
]

export function AboutSection() {
  return (
    <Section id="about" padding="xl" className="about-bg">
      {/* تصميم مبسط بدون عناصر معقدة */}

      <BackgroundEffects variant="geometric" className="opacity-30" />

      <div className="relative z-10 space-y-16">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="glow" size="lg" className="mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/40 backdrop-blur-md">
              🏛️ About Filakaros
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Preserving Heritage Through{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Revolutionizing cultural preservation with AI, Blockchain, and IKAROS token ecosystem
          </motion.p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="text-center max-w-4xl mx-auto glow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create the world&apos;s most comprehensive digital heritage preservation ecosystem,
                where ancient wisdom meets cutting-edge technology through the power of IKAROS token 
                and decentralized innovation.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Heritage Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Where <span className="text-gradient">Heritage Meets Innovation</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how we bridge the gap between ancient cultural treasures
              and modern blockchain technology
            </p>
          </div>
          <HeritageVisual />
        </motion.div>

        {/* Key Features Grid */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Powered by <span className="text-gradient">Advanced Technology</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:glow transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <div className={`text-2xl font-bold ${feature.color}`}>
                        {feature.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {feature.statLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" size="lg" className="text-base py-3 px-6 hover:bg-primary/10 transition-colors">
                  <span className="mr-2 text-lg">{tech.icon}</span>
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Our Global <span className="text-gradient">Impact</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
