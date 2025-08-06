"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { Download, FileText, Globe, Coins, Shield, Users, Zap, Target } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageBreadcrumb } from "@/components/ui/breadcrumb"

// Metadata is exported from metadata.ts file

const whitepaperSections = [
  {
    icon: Target,
    title: "Project Vision",
    description: "Bridging cultural heritage with blockchain technology to preserve human history",
    content: [
      "Preserve global cultural heritage for future generations",
      "Integrate artificial intelligence with blockchain technology",
      "Create interactive platforms for learning and exploration",
      "Provide sustainable investment opportunities"
    ]
  },
  {
    icon: Coins,
    title: "IKAROS Token",
    description: "The native digital currency powering the Filakaros ecosystem",
    content: [
      "Total Supply: 5 billion tokens",
      "Current Price: $0.007",
      "Active Holders: 152K wallets",
      "Built on Binance Smart Chain"
    ]
  },
  {
    icon: Globe,
    title: "Civilizations AI Platform",
    description: "Advanced cultural exploration platform launching after trading infrastructure",
    content: [
      "195 unique country NFT boxes",
      "3D historical landmarks with AI guides",
      "AR/VR immersive experiences",
      "Educational content & virtual tours"
    ]
  },
  {
    icon: Shield,
    title: "Security & Transparency",
    description: "High security standards and complete transparency in all operations",
    content: [
      "Audited smart contracts",
      "Doxxed team members",
      "Regular financial reports",
      "Community governance"
    ]
  },
  {
    icon: Users,
    title: "Ecosystem",
    description: "Integrated platform combining trading, education, investment, and entertainment",
    content: [
      "IKAR Trading Platform (Priority - Q2-Q4 2026)",
      "Civilizations AI Game (Q1-Q3 2027)",
      "Cultural Heritage NFT Marketplace (Q2-Q4 2027)",
      "IKAR DeFi Platform (Q1-Q3 2028)"
    ]
  },
  {
    icon: Zap,
    title: "Technology Stack",
    description: "Latest technologies in blockchain and artificial intelligence",
    content: [
      "Binance Smart Chain",
      "Artificial Intelligence technologies",
      "Augmented Reality (AR)",
      "3D graphics and modeling"
    ]
  }
]

const roadmapPhases = [
  {
    phase: "Phase I-III",
    period: "Q1 2024 - Q1 2025",
    title: "Foundation & Token Launch",
    items: [
      "Official website & whitepaper launch",
      "Community building & partnerships",
      "IKAROS token private presale",
      "DEX listings & liquidity establishment"
    ]
  },
  {
    phase: "Phase IV",
    period: "Q2-Q4 2026",
    title: "IKAR Trading Platform",
    items: [
      "Priority development of trading platform",
      "Advanced trading engine & security",
      "Professional-grade analytics tools",
      "Beta testing & platform launch"
    ]
  },
  {
    phase: "Phase V-VI",
    period: "Q1-Q3 2027",
    title: "Civilizations AI & Integration",
    items: [
      "Civilizations AI platform development",
      "195 unique country NFT boxes",
      "3D landmark exploration with AI guides",
      "AR/VR integration & user testing"
    ]
  },
  {
    phase: "Phase VII-IX",
    period: "Q2 2027 - Q3 2028",
    title: "Ecosystem Completion",
    items: [
      "Cultural Heritage NFT Marketplace",
      "Major CEX partnerships & listings",
      "IKAR DeFi Platform with staking",
      "Educational ecosystem & global expansion"
    ]
  }
]

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <PageBreadcrumb title="Whitepaper" category="Documentation" />
      {/* Hero Section */}
      <Section className="section-bg-primary relative overflow-hidden py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="glow" size="lg" className="mb-6 simple-glow">
              📄 Official Whitepaper
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">
                Filakaros
              </span>
              <br />
              <span className="font-cinzel text-gradient-warm">
                IKAROS
              </span>
              {" "}Whitepaper
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive whitepaper for the Filakaros project - Bridging cultural heritage with blockchain technology
              <br />
              to preserve human history and create sustainable investment opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download PDF
              </Button>
              <Button variant="outline" size="xl">
                <FileText className="w-5 h-5 mr-2" />
                Read Online
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Executive Summary */}
      <Section padding="xl" className="section-bg-secondary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Executive Summary</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Filakaros project aims to revolutionize cultural heritage preservation through the integration of cutting-edge
              blockchain and artificial intelligence technologies. The project provides an integrated platform that combines
              education, investment, and entertainment, creating a sustainable ecosystem for preserving human history and
              providing innovative investment opportunities for the global community.
            </p>
          </motion.div>

          {/* Key Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whitepaperSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover simple-glow border-border/50 hover:border-primary/40">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <p className="text-muted-foreground">{section.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roadmap */}
      <Section padding="xl" className="section-bg-accent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Roadmap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey through time and innovation, towards a real revolution in the future of digital finance and cultural heritage preservation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {phase.period}
                    </Badge>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <p className="text-primary font-semibold">{phase.title}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Download Section */}
      <Section padding="xl" className="section-bg-primary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto glass-effect simple-glow border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Get the Complete Whitepaper</h3>
                <p className="text-muted-foreground mb-6">
                  Download the complete whitepaper in PDF format for comprehensive details about the project and technologies used
                </p>

                <Button
                  variant="gradient"
                  size="xl"
                  className="group"
                  onClick={() => window.open('/docs/Whitepaper-Final.pdf', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download Whitepaper (PDF)
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  File size: ~2.5 MB | Last updated: January 2025
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
