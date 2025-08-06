"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Twitter,
  Github,
  Send,
  Users,
  Globe,
  Calendar,
  Award,
  TrendingUp
} from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const communityStats = [
  { label: "Community Members", value: "50K+", icon: Users },
  { label: "Countries", value: "120+", icon: Globe },
  { label: "Monthly Events", value: "25+", icon: Calendar },
  { label: "Heritage Sites", value: "500+", icon: Award }
]

const socialPlatforms = [
  {
    name: "Telegram",
    description: "Join our main community for daily discussions and updates",
    members: "25,000+",
    icon: MessageCircle,
    href: "https://t.me/ikarosworld",
    color: "bg-blue-500"
  },
  {
    name: "Twitter",
    description: "Follow us for the latest news and announcements",
    members: "15,000+",
    icon: Twitter,
    href: "https://x.com/IkarosWorld1975",
    color: "bg-sky-500"
  },
  {
    name: "Facebook",
    description: "Connect with our community on Facebook",
    members: "10,000+",
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61571425265684",
    color: "bg-blue-600"
  },
  {
    name: "Instagram",
    description: "Follow our visual journey and updates",
    members: "8,000+",
    icon: FaInstagram,
    href: "https://www.instagram.com/ikaros_worlds/",
    color: "bg-pink-500"
  }
]

const communityPrograms = [
  {
    title: "Heritage Ambassadors",
    description: "Represent Filakaros in your region and help preserve local cultural heritage",
    benefits: ["Exclusive NFTs", "Monthly Rewards", "Direct Team Access"],
    status: "Open"
  },
  {
    title: "Developer Program",
    description: "Build on our platform and contribute to the cultural preservation ecosystem",
    benefits: ["API Access", "Technical Support", "Revenue Sharing"],
    status: "Open"
  },
  {
    title: "Cultural Validators",
    description: "Help verify and validate cultural heritage information and artifacts",
    benefits: ["Token Rewards", "Recognition", "Expert Network"],
    status: "Coming Soon"
  }
]

export function CommunitySection() {
  return (
    <Section id="community" padding="xl" className="community-bg">
      {/* Community Pattern Overlay */}
      <div className="absolute inset-0 community-pattern" />

      {/* Network-like connecting lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(15)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration issues
            const x1 = (i * 67 + 123) % 1000
            const y1 = (i * 89 + 234) % 1000
            const x2 = (i * 43 + 567) % 1000
            const y2 = (i * 71 + 890) % 1000
            const duration = 2 + (i % 2)

            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#communityGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: duration,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            )
          })}
          <defs>
            <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* تصميم مبسط بدون عناصر عائمة */}

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-400/30 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium tracking-wide">
                🌍 Global Community
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Global{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with heritage enthusiasts, developers, and cultural preservationists
              from around the world who share our mission.
            </p>
          </motion.div>
      </div>

      {/* Community Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {communityStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="text-center group hover:glow">
              <CardContent className="p-6">
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>

      {/* Social Platforms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Connect With Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <Card key={platform.name} className="group hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {platform.description}
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {platform.members} members
                  </Badge>
                  <Button asChild className="w-full">
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>

      {/* Community Programs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">Community Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityPrograms.map((program, index) => (
            <Card key={program.title} className="group hover:glow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <Badge 
                    variant={program.status === "Open" ? "default" : "secondary"}
                    className="ml-2"
                  >
                    {program.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="space-y-2 mb-4">
                  <h5 className="font-semibold text-sm">Benefits:</h5>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-center">
                        <TrendingUp className="w-3 h-3 mr-2 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full" 
                  variant={program.status === "Open" ? "default" : "outline"}
                  disabled={program.status !== "Open"}
                >
                  {program.status === "Open" ? "Apply Now" : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
      </div>
    </Section>
  )
}
