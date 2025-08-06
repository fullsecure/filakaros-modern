"use client"

import { motion } from "framer-motion"
import { Rocket, Coins, Settings, Globe, Star, CheckCircle, Clock, Calendar } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { cn } from "@/lib/utils"

const roadmapPhases = [
  {
    id: "phase-1",
    title: "Phase I - Foundation & Launch",
    date: "Q1-Q2 2024",
    status: "completed" as const,
    icon: Rocket,
    description: "Development of project infrastructure, launch of official website and social media, release of Whitepaper, and initial marketing campaign.",
    features: [
      { title: "Project infrastructure development", completed: true },
      { title: "Official website launch", completed: true },
      { title: "Whitepaper release", completed: true },
      { title: "Initial marketing campaign", completed: true }
    ]
  },
  {
    id: "phase-2",
    title: "Phase II - Community Building & Airdrop",
    date: "Q3-Q4 2024",
    status: "completed" as const,
    icon: Globe,
    description: "Community expansion, airdrop registration campaign, and preparation for token launch with strategic partnerships.",
    features: [
      { title: "Community building initiatives", completed: true },
      { title: "Airdrop registration campaign", completed: true },
      { title: "Strategic partnerships establishment", completed: true },
      { title: "Token launch preparation", completed: true }
    ]
  },
  {
    id: "phase-3",
    title: "Phase III - Private Presale",
    date: "Q1-Q4 2025",
    status: "active" as const,
    icon: Coins,
    description: "IKAROS token private presale at $0.0005 on dedicated platform ikartoken.com with exclusive early investor benefits.",
    features: [
      { title: "Private presale platform launch", completed: true },
      { title: "IKAROS token presale at $0.0005", completed: false },
      { title: "Early investor onboarding", completed: false },
      { title: "Liquidity preparation", completed: false }
    ]
  },
  {
    id: "phase-4",
    title: "Phase IV - DEX Launch & Initial Trading",
    date: "Q4 2025 - Q2 2026",
    status: "upcoming" as const,
    icon: Settings,
    description: "Launch of IKAROS token on decentralized exchanges with comprehensive testing, security audits, and gradual rollout to ensure stability.",
    features: [
      { title: "Smart contract security audits", completed: false },
      { title: "PancakeSwap listing at $0.0007", completed: false },
      { title: "Liquidity pools establishment", completed: false },
      { title: "Community trading activation", completed: false }
    ]
  },
  {
    id: "phase-5",
    title: "Phase V - Platform Development",
    date: "Q1 2026 - Q4 2026",
    status: "upcoming" as const,
    icon: Star,
    description: "Development of core Civilizations AI platform, NFT marketplace infrastructure, and initial AR/VR integration with extensive testing phases.",
    features: [
      { title: "Civilizations AI platform beta", completed: false },
      { title: "Cultural Heritage NFT marketplace", completed: false },
      { title: "AR/VR integration development", completed: false },
      { title: "User testing and feedback integration", completed: false }
    ]
  },
  {
    id: "phase-6",
    title: "Phase VI - CEX Integration & Expansion",
    date: "Q3 2026 - Q2 2027",
    status: "upcoming" as const,
    icon: Globe,
    description: "Strategic partnerships with major centralized exchanges, comprehensive compliance procedures, and global market expansion initiatives.",
    features: [
      { title: "Regulatory compliance preparation", completed: false },
      { title: "Major CEX partnerships & listings", completed: false },
      { title: "IKAROS token listing at $0.001", completed: false },
      { title: "Global marketing campaigns", completed: false }
    ]
  },
  {
    id: "phase-7",
    title: "Phase VII - IKAR Proprietary Exchange",
    date: "Q1 2027 - Q4 2027",
    status: "future" as const,
    icon: Coins,
    description: "Development and launch of the comprehensive IKAR trading platform with advanced DeFi features, institutional-grade security, and full ecosystem integration.",
    features: [
      { title: "Exchange platform development", completed: false },
      { title: "Advanced trading features", completed: false },
      { title: "Institutional security standards", completed: false },
      { title: "Full ecosystem integration", completed: false }
    ]
  },
  {
    id: "phase-8",
    title: "Phase VIII - Ecosystem Maturation",
    date: "Q1 2028+",
    status: "future" as const,
    icon: Star,
    description: "Full ecosystem launch with AI-powered cultural preservation tools, global educational partnerships, and sustainable long-term growth initiatives.",
    features: [
      { title: "AI cultural preservation tools", completed: false },
      { title: "Educational institution partnerships", completed: false },
      { title: "Sustainable tokenomics implementation", completed: false },
      { title: "Global heritage preservation network", completed: false }
    ]
  }
]

const statusConfig = {
  completed: {
    color: "text-green-400",
    bgColor: "bg-green-400/20",
    borderColor: "border-green-400/50",
    icon: CheckCircle,
    label: "Completed"
  },
  active: {
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    borderColor: "border-blue-400/50",
    icon: Clock,
    label: "In Progress"
  },
  upcoming: {
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/20",
    borderColor: "border-yellow-400/50",
    icon: Calendar,
    label: "Upcoming"
  },
  future: {
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    borderColor: "border-purple-400/50",
    icon: Star,
    label: "Future Vision"
  }
}

export function RoadmapSection() {
  return (
    <Section id="roadmap" padding="xl" className="section-bg-secondary relative overflow-hidden">
      {/* خلفية احترافية ومبسطة */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/3 to-accent/5" />

      <div className="relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <Badge variant="glow" size="lg" className="mb-4 simple-glow">
            🗺️ Project Timeline
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            Project <span className="text-gradient-primary">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive development journey through <span className="text-primary font-semibold">carefully planned phases</span>, ensuring sustainable growth from <span className="text-accent font-semibold">IKAROS token</span> launch to full ecosystem maturation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - احترافي ومتناسق */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 via-yellow-400 to-purple-400 transform md:-translate-x-0.5 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => {
              const config = statusConfig[phase.status]
              const PhaseIcon = phase.icon
              const StatusIcon = config.icon
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 transform md:-translate-x-6 flex items-center justify-center">
                    <div className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110",
                      config.bgColor,
                      config.borderColor,
                      "bg-background/80"
                    )}>
                      <PhaseIcon className={cn("w-5 h-5", config.color)} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 ml-16 md:ml-0">
                    <Card className={cn(
                      "group card-hover simple-glow glass-effect",
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    )}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant="outline"
                            className={cn(config.color, config.borderColor, "simple-glow")}
                          >
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {config.label}
                          </Badge>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-muted/50 border border-border/50">
                            {phase.date}
                          </span>
                        </div>
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                          {phase.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {phase.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-3 bg-muted/20 rounded-lg p-4 border border-border/30">
                          {phase.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                              className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent/5 transition-colors"
                            >
                              {feature.completed ? (
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                              )}
                              <span className={cn(
                                "text-sm",
                                feature.completed ? "text-foreground" : "text-muted-foreground"
                              )}>
                                {feature.title}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Overall <span className="text-gradient-accent">Progress</span>
            </h3>
            <p className="text-muted-foreground">
              Currently in <span className="text-primary font-semibold">private presale phase</span> - tracking our journey toward full ecosystem launch
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="w-full bg-muted/50 rounded-full h-4 border border-border/50">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-4 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400"
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-muted-foreground">Started</span>
              <span className="text-lg font-bold text-blue-400">30% Complete</span>
              <span className="text-sm text-muted-foreground">Vision 2028+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
