"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FileText, Scale, AlertTriangle, Shield, Users, Coins, Globe, Ban } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundEffects } from "@/components/ui/background-effects"
import { LegalBreadcrumb } from "@/components/ui/breadcrumb"

// SEO metadata will be handled by layout or head.tsx

const termsSections = [
  {
    icon: Users,
    title: "Acceptance of Terms",
    content: [
      "By using the Filakaros website and services, you agree to these terms and conditions",
      "You must be of legal age in your country of residence to use our services",
      "If you are using services on behalf of a company, you must be legally authorized",
      "We reserve the right to modify these terms at any time with prior notice",
      "Continued use of services means your acceptance of updated terms",
      "If you do not agree to any of these terms, you must stop using our services"
    ]
  },
  {
    icon: Coins,
    title: "IKAROS Token Services",
    content: [
      "IKAROS is a digital token operating on the Binance Smart Chain",
      "The token is designed for use within the Filakaros ecosystem",
      "We do not guarantee the token's value or market performance",
      "All blockchain transactions are final and cannot be reversed",
      "You are responsible for the security of your digital wallet and private keys",
      "Token transactions may be subject to network and gas fees"
    ]
  },
  {
    icon: Shield,
    title: "Acceptable Use",
    content: [
      "Use services for legal and legitimate purposes only",
      "Do not violate any local or international laws",
      "Do not use services for money laundering or terrorism financing",
      "Do not attempt to hack or disrupt our systems",
      "Do not create multiple or fake accounts",
      "Respect intellectual property rights of others"
    ]
  },
  {
    icon: Ban,
    title: "Prohibited Activities",
    content: [
      "Market manipulation of token prices or trading",
      "Use of automated programs or bots without permission",
      "Publishing misleading or fraudulent content",
      "Impersonating other persons or entities",
      "Distributing viruses or malicious software",
      "Collecting other users' information without permission"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Risks & Disclaimers",
    content: [
      "Cryptocurrency investment involves high risks",
      "IKAROS Token value may fluctuate significantly",
      "You may lose your entire investment in the token",
      "New technologies may contain bugs or vulnerabilities",
      "Regulatory changes may affect services",
      "We do not provide investment or financial advice"
    ]
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: [
      "We provide services 'as is' without express or implied warranties",
      "We are not liable for direct or indirect damages",
      "Our liability is limited to the maximum extent permitted by law",
      "We do not guarantee uninterrupted or error-free service",
      "You are responsible for your investment decisions",
      "We are not responsible for third-party actions"
    ]
  }
]

const jurisdictionInfo = {
  governingLaw: "United Arab Emirates Law",
  jurisdiction: "Courts of the United Arab Emirates",
  arbitration: "Dubai International Arbitration Centre (DIAC)",
  language: "English and Arabic"
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <LegalBreadcrumb />
      {/* Hero Section */}
      <Section className="relative overflow-hidden py-20">
        <BackgroundEffects variant="grid" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="glow" size="lg" className="mb-6">
              📋 Terms & Conditions
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Terms of Service
              </span>
              <br />
              & Usage Agreement
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Please read carefully the terms and conditions governing your use of the Filakaros website and IKAROS Token services.
              <br />
              These terms are legally binding and define your rights and obligations.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>Last Updated: December 2024</span>
              <span>•</span>
              <span>Effective: January 1, 2025</span>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Terms Sections */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
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

      {/* Important Notices */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Important Notices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-yellow-500/20 bg-yellow-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Investment Warning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Investment in cryptocurrencies and tokens involves high risks. You may lose your entire invested capital.
                    Only invest what you can afford to lose and seek independent financial advice if necessary.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 bg-red-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                    <Ban className="w-5 h-5 mr-2" />
                    Geographic Restrictions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our services may not be available in all countries. You must check local laws before use.
                    We reserve the right to restrict access from certain regions without prior notice.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  Jurisdiction and Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Governing Law</h4>
                    <p className="text-sm text-muted-foreground">{jurisdictionInfo.governingLaw}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Jurisdiction</h4>
                    <p className="text-sm text-muted-foreground">{jurisdictionInfo.jurisdiction}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Arbitration</h4>
                    <p className="text-sm text-muted-foreground">{jurisdictionInfo.arbitration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contract Language</h4>
                    <p className="text-sm text-muted-foreground">{jurisdictionInfo.language}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Contact and Changes */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Terms Modification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We reserve the right to modify these terms and conditions at any time. We will notify you of any
                    material changes via email or notice on the website.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Changes become effective 30 days after notice, unless laws require a different notice period.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-primary" />
                    Legal Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For any questions about these terms and conditions, please contact our legal team:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> legal@filakaros.com</p>
                    <p><strong>Address:</strong> Filakaros Legal Department</p>
                    <p><strong>Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact and Changes */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Terms Modification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We reserve the right to modify these terms and conditions at any time. We will notify you of any
                    material changes via email or notice on the website.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Changes become effective 30 days after notice, unless laws require a different notice period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-primary" />
                    Legal Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For any questions about these terms and conditions, please contact our legal team:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> legal@filakaros.com</p>
                    <p><strong>Address:</strong> Filakaros Legal Department</p>
                    <p><strong>Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
