"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { RotateCcw, XCircle, CheckCircle, Clock, AlertCircle, Mail, CreditCard, Coins } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundEffects } from "@/components/ui/background-effects"
import { LegalBreadcrumb } from "@/components/ui/breadcrumb"

// SEO metadata will be handled by layout or head.tsx

const refundCategories = [
  {
    icon: XCircle,
    title: "IKAROS Token Purchases",
    status: "no-refund",
    description: "Cryptocurrency transactions are final and irreversible",
    details: [
      "All IKAROS Token purchases are final upon blockchain confirmation",
      "Cryptocurrency transactions cannot be reversed or cancelled",
      "No refunds available for completed token transfers",
      "Price fluctuations do not qualify for refunds",
      "User error in wallet addresses cannot be refunded",
      "Network fees are non-refundable in all circumstances"
    ]
  },
  {
    icon: CheckCircle,
    title: "Platform Services",
    status: "conditional",
    description: "Limited refunds available under specific conditions",
    details: [
      "Premium subscription services may be refunded within 7 days",
      "Educational content purchases refundable within 14 days if unused",
      "Technical issues preventing service access may qualify for refunds",
      "Duplicate charges will be refunded upon verification",
      "Service downtime exceeding 72 hours may qualify for partial refunds",
      "Refunds processed to original payment method only"
    ]
  },
  {
    icon: RotateCcw,
    title: "NFT Purchases",
    status: "limited",
    description: "Very limited refund scenarios for digital collectibles",
    details: [
      "NFTs are non-refundable once minted and transferred",
      "Technical failures during minting may qualify for refunds",
      "Fraudulent or unauthorized purchases may be refunded",
      "Duplicate NFT purchases due to platform error only",
      "No refunds for changes in NFT market value",
      "Gas fees for failed transactions are non-refundable"
    ]
  },
  {
    icon: CreditCard,
    title: "Fiat Payment Services",
    status: "standard",
    description: "Traditional payment methods follow standard refund procedures",
    details: [
      "Credit card payments may be refunded within 30 days",
      "Bank transfer refunds processed within 5-10 business days",
      "PayPal refunds follow PayPal's standard procedures",
      "Processing fees may be deducted from refund amount",
      "Currency conversion fees are non-refundable",
      "Chargeback disputes handled according to card network rules"
    ]
  }
]

const refundProcess = [
  {
    step: 1,
    title: "Submit Request",
    description: "Contact our support team with your refund request and relevant details",
    timeframe: "Within 30 days of purchase",
    icon: Mail
  },
  {
    step: 2,
    title: "Review Process",
    description: "Our team reviews your request against our refund policy criteria",
    timeframe: "3-5 business days",
    icon: Clock
  },
  {
    step: 3,
    title: "Decision Notification",
    description: "You'll receive an email with our decision and next steps",
    timeframe: "1-2 business days",
    icon: AlertCircle
  },
  {
    step: 4,
    title: "Refund Processing",
    description: "If approved, refund is processed to your original payment method",
    timeframe: "5-10 business days",
    icon: RotateCcw
  }
]

const exceptions = [
  {
    title: "Technical Failures",
    description: "Platform or smart contract failures that prevent service delivery",
    eligible: true
  },
  {
    title: "Unauthorized Access",
    description: "Fraudulent transactions made without account holder consent",
    eligible: true
  },
  {
    title: "Duplicate Charges",
    description: "Multiple charges for the same transaction due to system error",
    eligible: true
  },
  {
    title: "Service Unavailability",
    description: "Extended platform downtime preventing access to purchased services",
    eligible: true
  },
  {
    title: "Market Volatility",
    description: "Price changes or market fluctuations affecting token value",
    eligible: false
  },
  {
    title: "User Error",
    description: "Mistakes in wallet addresses, transaction amounts, or user decisions",
    eligible: false
  },
  {
    title: "Regulatory Changes",
    description: "Government actions affecting cryptocurrency legality or access",
    eligible: false
  },
  {
    title: "Change of Mind",
    description: "Simple change of mind or investment strategy after purchase",
    eligible: false
  }
]

export default function RefundPolicyPage() {
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
              💰 Refund Policy
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Refund Policy
              </span>
              <br />
              & Procedures
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Understand our refund policy for IKAROS Token purchases, platform services,
              <br />
              and digital assets on the Filakaros ecosystem.
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-yellow-500 mr-3" />
                <span className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">Important Notice</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Cryptocurrency transactions are irreversible by nature. Most IKAROS Token purchases
                cannot be refunded once confirmed on the blockchain.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>Last Updated: December 2024</span>
              <span>•</span>
              <span>Effective: January 1, 2025</span>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Refund Categories */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Refund Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different types of purchases and services have different refund policies and procedures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {refundCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                  category.status === 'no-refund' ? 'border-red-500/20 bg-red-500/5' :
                  category.status === 'conditional' ? 'border-yellow-500/20 bg-yellow-500/5' :
                  category.status === 'limited' ? 'border-orange-500/20 bg-orange-500/5' :
                  'border-green-500/20 bg-green-500/5'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        category.status === 'no-refund' ? 'bg-red-500' :
                        category.status === 'conditional' ? 'bg-yellow-500' :
                        category.status === 'limited' ? 'bg-orange-500' :
                        'bg-green-500'
                      }`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant={
                        category.status === 'no-refund' ? 'destructive' :
                        category.status === 'conditional' ? 'secondary' :
                        category.status === 'limited' ? 'outline' :
                        'default'
                      }>
                        {category.status === 'no-refund' ? 'No Refunds' :
                         category.status === 'conditional' ? 'Conditional' :
                         category.status === 'limited' ? 'Limited' :
                         'Standard'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            category.status === 'no-refund' ? 'bg-red-500' :
                            category.status === 'conditional' ? 'bg-yellow-500' :
                            category.status === 'limited' ? 'bg-orange-500' :
                            'bg-green-500'
                          }`} />
                          <span className="text-sm leading-relaxed">{detail}</span>
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

      {/* Refund Process */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Refund Request Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to submit a refund request for eligible purchases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {refundProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">Step {step.step}</div>
                    <h3 className="font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <Badge variant="outline" size="sm">{step.timeframe}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Exceptions */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Refund Eligibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">
                  ✅ Eligible for Refund
                </h3>
                <div className="space-y-4">
                  {exceptions.filter(e => e.eligible).map((exception, index) => (
                    <Card key={index} className="border-green-500/20 bg-green-500/5">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{exception.title}</h4>
                        <p className="text-sm text-muted-foreground">{exception.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-600 dark:text-red-400">
                  ❌ Not Eligible for Refund
                </h3>
                <div className="space-y-4">
                  {exceptions.filter(e => !e.eligible).map((exception, index) => (
                    <Card key={index} className="border-red-500/20 bg-red-500/5">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{exception.title}</h4>
                        <p className="text-sm text-muted-foreground">{exception.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section padding="xl" className="bg-muted/30">
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
                
                <h3 className="text-2xl font-bold mb-4">Submit a Refund Request</h3>
                <p className="text-muted-foreground mb-6">
                  Need to request a refund? Contact our support team with your transaction details
                </p>
                
                <div className="space-y-4 text-sm mb-6">
                  <div>
                    <strong>Email:</strong> refunds@filakaros.com
                  </div>
                  <div>
                    <strong>Subject:</strong> Refund Request - [Transaction ID]
                  </div>
                  <div>
                    <strong>Include:</strong> Transaction hash, purchase date, reason for refund
                  </div>
                </div>
                
                <Button variant="gradient" size="lg" className="group">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Support
                </Button>
                
                <p className="text-xs text-muted-foreground mt-6">
                  Response time: 3-5 business days | Refund processing: 5-10 business days
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
