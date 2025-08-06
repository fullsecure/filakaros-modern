"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, Users, Database, Globe, AlertTriangle, Mail } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundEffects } from "@/components/ui/background-effects"
import { LegalBreadcrumb } from "@/components/ui/breadcrumb"

// SEO metadata will be handled by layout or head.tsx

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Account information: Name, email address, encrypted password",
      "Wallet data: Digital wallet addresses (public only)",
      "Trading information: Transaction history and investment records",
      "Technical data: IP address, browser type, operating system",
      "Cookies: To improve user experience and functionality",
      "Usage data: How you interact with our platform and services"
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Data",
    content: [
      "Provide and improve IKAROS Token services and platform",
      "Process transactions and digital transfers",
      "Verify identity and prevent fraud",
      "Send important updates about the project",
      "Personalize user experience and deliver relevant content",
      "Comply with legal and regulatory requirements"
    ]
  },
  {
    icon: Users,
    title: "Data Sharing",
    content: [
      "We do not sell or rent your personal data to third parties",
      "We may share data with trusted service providers",
      "Disclosure to authorities when legally required",
      "Sharing aggregated and anonymized data for analysis",
      "Data transfer in case of merger or acquisition",
      "Obtaining your explicit consent before any other sharing"
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "Encryption of all sensitive data using industry standards",
      "Use of HTTPS protocols for all communications",
      "Secure storage on protected and monitored servers 24/7",
      "Regular security audits and system updates",
      "Limited access control for authorized personnel only",
      "Regular encrypted backups of data"
    ]
  },
  {
    icon: Globe,
    title: "International Data Transfers",
    content: [
      "Your data may be processed in different countries",
      "We ensure appropriate protection level in all locations",
      "Compliance with international data protection laws",
      "Use of legally approved transfer mechanisms",
      "Additional protection for data transferred outside the EU",
      "Complete transparency about data processing locations"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Your Rights",
    content: [
      "Right to access your personal data",
      "Request correction or update of inaccurate information",
      "Delete your data (right to be forgotten)",
      "Restrict processing of your data under certain circumstances",
      "Transfer your data to another service provider",
      "Object to processing of your data for marketing purposes"
    ]
  }
]

const contactInfo = {
  email: "privacy@filakaros.com",
  address: "Filakaros Privacy Office, Digital Innovation Center",
  phone: "+1-XXX-XXX-XXXX",
  hours: "الاثنين - الجمعة، 9:00 ص - 6:00 م (UTC)"
}

export default function PrivacyPolicyPage() {
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
              🔒 Privacy Policy
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Protecting Your Privacy
              </span>
              <br />
              Our Top Priority
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Filakaros, we are committed to protecting your privacy and securing your personal data.
              <br />
              Learn how we collect, use, and protect your information with complete transparency.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>Last Updated: December 2024</span>
              <span>•</span>
              <span>Effective: January 1, 2025</span>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Privacy Sections */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {privacySections.map((section, index) => (
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

      {/* Legal Basis */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Legal Basis for Data Processing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Consent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We process your data based on your explicit consent, which you can withdraw at any time without affecting the lawfulness of previous processing.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Contract Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Data processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-primary" />
                    Legal Obligation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Processing is necessary to comply with legal obligations we are subject to, such as anti-money laundering laws.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-primary" />
                    Legitimate Interest
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Processing is necessary for the purposes of legitimate interests we pursue, such as improving our services and preventing fraud.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions about our privacy policy or want to exercise your rights? We&apos;re here to help you.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    <span>privacy@filakaros.com</span>
                  </div>
                  <div className="text-muted-foreground">
                    <p>Filakaros Privacy Office, Digital Innovation Center</p>
                    <p>Monday - Friday, 9:00 AM - 6:00 PM (UTC)</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-6">
                  We will respond to your inquiries within 72 hours of receipt
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
