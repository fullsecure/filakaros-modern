"use client"

import { motion } from "framer-motion"
import { generateJSONLD, structuredData } from "@/lib/seo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { EnhancedHeroSection } from "@/components/sections/enhanced-hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { TokenomicsSection } from "@/components/sections/tokenomics-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { ProjectsSection } from "@/components/sections/trading-platform-section"
import { TeamSection } from "@/components/sections/team-section"
import { CommunitySection } from "@/components/sections/community-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJSONLD(structuredData.cryptocurrency)
        }}
      />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Enhanced Features Section - تصميم بسيط ونظيف */}
      <Section id="features" padding="xl" className="features-bg">
        {/* تصميم مبسط مع خلفية محسّنة */}

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm font-medium"
            >
              ⚡ Revolutionary Technology
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Revolutionary{" "}
              <span className="text-primary">
                Technology Stack
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Combining cutting-edge technologies to preserve cultural heritage and create digital value through IKAROS ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Web3",
                description: "Decentralized transparent system powered by blockchain technology and IKAROS token",
                icon: "🔗"
              },
              {
                title: "AI",
                description: "Smart data analysis and interactive cultural heritage explanations with machine learning",
                icon: "🧠"
              },
              {
                title: "NFTs",
                description: "Tradable digital cultural assets representing global landmarks and heritage sites",
                icon: "💎"
              },
              {
                title: "AR/VR",
                description: "Immersive virtual experience bringing ancient history to life through technology",
                icon: "🥽"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="text-center bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full min-h-[280px] sm:min-h-[320px]">
                  <CardHeader className="pb-4 px-4 sm:px-6">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                    <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Enhanced Stats Section - قسم الإحصائيات المبسط */}
      <Section padding="xl" className="stats-bg">
        {/* تصميم مبسط مع خلفية محسّنة */}

        <div className="container mx-auto">
          {/* عنوان القسم المبسط */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm font-medium"
            >
              📊 Live Statistics
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 text-foreground">
              IKAROS{" "}
              <span className="text-primary">
                Ecosystem Stats
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Real-time metrics showcasing the growth and impact of our cultural heritage preservation platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            {[
              {
                label: "Total Supply",
                value: "5B",
                subtext: "IKAROS Tokens",
                icon: "🪙"
              },
              {
                label: "Current Price",
                value: "$0.007",
                subtext: "+15.2% (24h)",
                icon: "📈"
              },
              {
                label: "Heritage NFTs",
                value: "195",
                subtext: "Countries Covered",
                icon: "🌍"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-card border border-border hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 h-full min-h-[240px] sm:min-h-[280px]">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>

                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 sm:mb-4">
                    {stat.value}
                  </div>

                  <div className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {stat.label}
                  </div>

                  <div className="text-sm sm:text-base text-muted-foreground">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <AboutSection />

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Community Section */}
      <CommunitySection />
    </div>
  );
}
