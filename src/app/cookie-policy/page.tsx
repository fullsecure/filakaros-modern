"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Cookie, Settings, BarChart, Shield, Globe, Eye, Trash2, RefreshCw } from "lucide-react"
import {
  Section,
  Container,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
  BackgroundEffects
} from "@/components/ui"
import { LegalBreadcrumb } from "@/components/ui/breadcrumb"

// SEO metadata will be handled by layout or head.tsx

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "Necessary for basic website functionality and security",
    duration: "Session / 1 year",
    canDisable: false,
    examples: [
      "Authentication and login status",
      "Security tokens and CSRF protection",
      "Language and region preferences",
      "Shopping cart and transaction data",
      "Load balancing and performance optimization"
    ]
  },
  {
    icon: BarChart,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website",
    duration: "2 years",
    canDisable: true,
    examples: [
      "Google Analytics for traffic analysis",
      "Page views and user journey tracking",
      "Performance metrics and error reporting",
      "A/B testing and feature optimization",
      "Conversion tracking for IKAROS Token purchases"
    ]
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Enable enhanced features and personalization",
    duration: "1 year",
    canDisable: true,
    examples: [
      "Dark/light theme preferences",
      "Dashboard layout customization",
      "Notification settings and preferences",
      "Wallet connection preferences",
      "Trading interface configurations"
    ]
  },
  {
    icon: Globe,
    title: "Marketing Cookies",
    description: "Used to deliver relevant advertisements and track campaigns",
    duration: "90 days",
    canDisable: true,
    examples: [
      "Social media integration and sharing",
      "Advertising campaign effectiveness",
      "Retargeting and remarketing pixels",
      "Affiliate and referral tracking",
      "Email marketing campaign tracking"
    ]
  }
]

const thirdPartyServices = [
  {
    name: "Google Analytics",
    purpose: "Website traffic analysis and user behavior insights",
    dataShared: "Anonymized usage data, page views, session duration",
    optOut: "https://tools.google.com/dlpage/gaoptout"
  },
  {
    name: "MetaMask",
    purpose: "Blockchain wallet integration for IKAROS Token transactions",
    dataShared: "Wallet addresses (public), transaction data",
    optOut: "Disconnect wallet from browser extension"
  },
  {
    name: "Cloudflare",
    purpose: "Content delivery, security, and performance optimization",
    dataShared: "IP addresses, browser information, security logs",
    optOut: "Cannot be disabled (essential for security)"
  },
  {
    name: "Intercom",
    purpose: "Customer support and live chat functionality",
    dataShared: "Contact information, support conversations",
    optOut: "Disable chat widget in settings"
  }
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <LegalBreadcrumb />
      {/* Hero Section */}
      <Section className="relative overflow-hidden py-20">
        <BackgroundEffects variant="dots" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="glow" size="lg" className="mb-6">
              🍪 Cookie Policy
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Cookie Usage
              </span>
              <br />
              & Tracking Policy
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn how Filakaros uses cookies and similar technologies to enhance your experience,
              <br />
              analyze website performance, and provide personalized services.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>Last Updated: December 2024</span>
              <span>•</span>
              <span>Effective: January 1, 2025</span>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* What Are Cookies */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Are Cookies?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cookies are small text files stored on your device when you visit our website. They help us remember your 
              preferences, analyze how you use our services, and provide a better user experience for IKAROS Token holders 
              and Filakaros platform users.
            </p>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Cookie className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Session Cookies</h3>
                    <p className="text-sm text-muted-foreground">Temporary cookies that expire when you close your browser</p>
                  </div>
                  <div>
                    <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                    <p className="text-sm text-muted-foreground">Remain on your device for a set period or until deleted</p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Third-Party Cookies</h3>
                    <p className="text-sm text-muted-foreground">Set by external services we use to enhance functionality</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Cookie Types */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Types of Cookies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use different types of cookies for various purposes to improve your experience on the Filakaros platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge variant={type.canDisable ? "secondary" : "destructive"}>
                          {type.canDisable ? "Optional" : "Required"}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                    <p className="text-sm text-primary font-medium">Duration: {type.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{example}</span>
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

      {/* Third Party Services */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Third-Party Services</h2>
            
            <div className="space-y-6">
              {thirdPartyServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h3 className="font-semibold text-primary">{service.name}</h3>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Purpose</h4>
                          <p className="text-sm text-muted-foreground">{service.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Data Shared</h4>
                          <p className="text-sm text-muted-foreground">{service.dataShared}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Opt-Out</h4>
                          <p className="text-sm text-muted-foreground">{service.optOut}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Cookie Management */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Managing Your Cookie Preferences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-primary" />
                    Browser Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>View and delete existing cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Block cookies from specific websites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Block third-party cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Clear cookies when closing browser</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-primary" />
                    Our Cookie Banner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    When you first visit our website, you&apos;ll see a cookie banner where you can:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Accept all cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Reject non-essential cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Customize your preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>Change settings anytime</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="text-center">
              <CardContent className="p-8">
                <Trash2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Clear Your Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  Want to start fresh? You can clear all cookies and reset your preferences at any time.
                </p>
                <Button variant="outline" size="lg">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All Cookies
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
