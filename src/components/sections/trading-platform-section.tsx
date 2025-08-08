"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  TrendingUp, Users, Coins, Gamepad2, Palette, Landmark, Globe
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileMockup } from "@/components/ui/mobile-mockup"
import { cn } from "@/lib/utils"
import { getResponsiveSizes, getProjectImageInfo } from "@/lib/image-optimization"

const projects = [
  {
    id: "trading-platform",
    title: "IKAR Trading Platform",
    subtitle: "🎯 Priority Project - Professional Trading Experience",
    description: "Our flagship project and top priority - a professional-grade trading platform featuring institutional-level security, advanced analytics, and seamless user experience. This platform will be the foundation of our ecosystem, generating early revenue and establishing market presence.",
    icon: TrendingUp,
    status: "Priority Project",
    timeline: "Q2 2026 - Q4 2026",
    features: [
      "Real-time advanced trading analytics",
      "Bank-grade multi-layer security protocols",
      "Sub-second order execution engine",
      "Cross-platform mobile and web applications",
      "Integrated IKAROS ecosystem features"
    ],
    technologies: ["Trading Engine", "Security", "Analytics", "Mobile Apps", "Ecosystem Integration"],
    color: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: "civilizations-ai",
    title: "Civilizations AI",
    subtitle: "Interactive Cultural Exploration",
    description: "An innovative game blending entertainment and education, allowing users to explore global cultures through NFT-based country boxes containing iconic landmarks and cultural highlights.",
    icon: Gamepad2,
    image: "/images/projects/Civilizations.png",
    status: "In Development",
    timeline: "Q1 2027 - Q3 2027",
    features: [
      "195 unique country NFT boxes",
      "3D landmark exploration with AI guides",
      "AR/VR integration for immersive experiences",
      "Player trading and investment opportunities"
    ],
    technologies: ["Web3", "NFTs", "AI", "AR/VR", "3D Graphics"],
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "nft-marketplace",
    title: "Cultural Heritage NFT Marketplace",
    subtitle: "Digital Ownership of Cultural Assets",
    description: "A specialized marketplace for trading cultural heritage NFTs, enabling communities to monetize their heritage while ensuring preservation and accessibility.",
    icon: Palette,
    image: "/images/projects/nftmarketplace.png",
    status: "Planned",
    timeline: "Q2 2027 - Q4 2027",
    features: [
      "Cultural artifact tokenization",
      "Community-driven validation",
      "Educational content integration",
      "Revenue sharing with heritage sites"
    ],
    technologies: ["NFTs", "Blockchain", "Smart Contracts", "IPFS"],
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "ikar-platform",
    title: "IKAR DeFi Platform",
    subtitle: "Decentralized Financial Ecosystem",
    description: "A comprehensive DeFi platform offering staking, governance, lending, and yield farming opportunities within the IKAROS ecosystem.",
    icon: Landmark,
    image: "/images/projects/ikarosDeFiPlatform.png",
    status: "Future",
    timeline: "Q1 2028 - Q3 2028",
    features: [
      "IKAROS token staking with rewards",
      "Decentralized governance voting",
      "Lending and borrowing protocols",
      "Yield farming opportunities"
    ],
    technologies: ["DeFi", "Smart Contracts", "Governance", "Staking"],
    color: "text-green-400",
    gradient: "from-green-500 to-emerald-500"
  }
]

const ecosystemStats = [
  {
    icon: Globe,
    label: "Countries Covered",
    value: "195",
    description: "Complete global coverage",
    color: "text-blue-400"
  },
  {
    icon: Landmark,
    label: "Heritage Sites",
    value: "500+",
    description: "Cultural landmarks",
    color: "text-purple-400"
  },
  {
    icon: Users,
    label: "Community",
    value: "50K+",
    description: "Active members",
    color: "text-green-400"
  },
  {
    icon: Coins,
    label: "IKAROS Supply",
    value: "5B",
    description: "Total token supply",
    color: "text-yellow-400"
  }
]



export function ProjectsSection() {
  return (
    <Section id="projects" padding="xl" className="section-bg-primary relative overflow-hidden">
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
            🚀 Our Projects
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            Building the <span className="text-gradient-primary">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive ecosystem of projects designed to preserve cultural heritage
            while creating sustainable value through innovative blockchain technology.
          </p>
        </motion.div>

        {/* Ecosystem Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemStats.map((stat, index) => (
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
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl md:text-3xl font-bold mb-2 text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${stat.color}`}>
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              )}
            >
              {/* Project Info */}
              <div className={cn("space-y-6", index % 2 === 1 ? "lg:col-start-2" : "")}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "w-12 h-12 rounded-lg bg-gradient-to-r flex items-center justify-center",
                      project.gradient
                    )}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {project.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{project.timeline}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Visual */}
              <div className={cn("", index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "")}>
                {project.id === "trading-platform" ? (
                  // Special mobile mockup for IKAR Trading Platform
                  <div className="flex justify-center items-center">
                    <MobileMockup variant="trading-platform" />
                  </div>
                ) : (
                  // Enhanced visual cards for other projects
                  <Card className="card-hover simple-glow">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                        {/* Project Image */}
                        {project.image ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={project.image}
                              alt={getProjectImageInfo(project.id)?.alt || project.title}
                              fill
                              className="object-cover rounded-lg"
                              loading="lazy"
                              sizes={getResponsiveSizes()}
                              quality={75}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                            {/* Overlay with project info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className={cn(
                                  "w-8 h-8 rounded-lg bg-gradient-to-r flex items-center justify-center",
                                  project.gradient
                                )}>
                                  <project.icon className="w-4 h-4 text-white" />
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {project.status}
                                </Badge>
                              </div>
                              <p className="font-semibold text-sm">{project.title}</p>
                            </div>
                          </div>
                        ) : (
                          // Fallback to original design if no image
                          <>
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5">
                              <div className="grid grid-cols-6 gap-2 h-full">
                                {Array.from({ length: 24 }).map((_, i) => (
                                  <div key={i} className="bg-primary rounded-sm" />
                                ))}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-3 relative z-10">
                              <div className={cn(
                                "w-16 h-16 mx-auto rounded-xl bg-gradient-to-r flex items-center justify-center",
                                project.gradient
                              )}>
                                <project.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="space-y-1">
                                <p className="font-semibold text-foreground">{project.title}</p>
                                <p className="text-sm text-muted-foreground">{project.status}</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </Section>
  )
}
