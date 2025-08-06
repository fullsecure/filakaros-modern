"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Shield, Info, Zap, Globe, Scale, FileX } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundEffects } from "@/components/ui/background-effects"
import { LegalBreadcrumb } from "@/components/ui/breadcrumb"

// SEO metadata will be handled by layout or head.tsx

const disclaimerSections = [
  {
    icon: TrendingDown,
    title: "Investment Risk Warning",
    type: "critical",
    content: [
      "Cryptocurrency investments are highly speculative and carry substantial risk of loss",
      "IKAROS Token value may fluctuate dramatically and you may lose your entire investment",
      "Past performance does not guarantee future results or returns",
      "Digital assets are subject to market volatility and regulatory changes",
      "Only invest what you can afford to lose completely",
      "Seek independent financial advice before making investment decisions"
    ]
  },
  {
    icon: Info,
    title: "No Financial Advice",
    type: "warning",
    content: [
      "Information provided is for educational and informational purposes only",
      "Content does not constitute financial, investment, or legal advice",
      "We are not licensed financial advisors or investment professionals",
      "All investment decisions are your sole responsibility",
      "Consult qualified professionals for personalized advice",
      "Market analysis and projections are opinions, not guarantees"
    ]
  },
  {
    icon: Zap,
    title: "Technology Risks",
    type: "info",
    content: [
      "Blockchain technology is experimental and may contain bugs or vulnerabilities",
      "Smart contracts may have coding errors or security flaws",
      "Network congestion may cause transaction delays or failures",
      "Wallet security is your responsibility - protect your private keys",
      "Technology upgrades may affect token functionality",
      "Third-party integrations may experience downtime or issues"
    ]
  },
  {
    icon: Globe,
    title: "Regulatory Uncertainty",
    type: "warning",
    content: [
      "Cryptocurrency regulations vary by jurisdiction and are constantly evolving",
      "Future regulatory changes may affect IKAROS Token availability or value",
      "Some jurisdictions may prohibit or restrict cryptocurrency activities",
      "Tax implications vary by location and individual circumstances",
      "Compliance with local laws is your responsibility",
      "We may restrict access from certain jurisdictions without notice"
    ]
  },
  {
    icon: Shield,
    title: "Platform Limitations",
    type: "info",
    content: [
      "Services provided 'as is' without warranties of any kind",
      "Platform availability is not guaranteed and may experience downtime",
      "Features and services may be modified or discontinued",
      "User error or misuse may result in permanent loss of funds",
      "Customer support response times are not guaranteed",
      "Third-party service dependencies may affect platform functionality"
    ]
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    type: "critical",
    content: [
      "Our liability is limited to the maximum extent permitted by law",
      "We are not liable for indirect, consequential, or punitive damages",
      "Total liability shall not exceed the amount paid for services",
      "Force majeure events are beyond our control and responsibility",
      "User actions and decisions are at their own risk",
      "Third-party actions or services are not our responsibility"
    ]
  }
]

const riskFactors = [
  {
    title: "Market Volatility",
    description: "Cryptocurrency prices can change rapidly and unpredictably",
    severity: "high"
  },
  {
    title: "Liquidity Risk",
    description: "You may not be able to sell tokens when desired",
    severity: "medium"
  },
  {
    title: "Technical Failures",
    description: "Smart contracts or blockchain networks may malfunction",
    severity: "high"
  },
  {
    title: "Regulatory Changes",
    description: "Government actions may affect token legality or value",
    severity: "high"
  },
  {
    title: "Cybersecurity Threats",
    description: "Hacking or security breaches may result in loss of funds",
    severity: "high"
  },
  {
    title: "Project Failure",
    description: "The Filakaros project may not achieve its objectives",
    severity: "medium"
  }
]

export default function DisclaimerPage() {
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
            <Badge variant="destructive" size="lg" className="mb-6">
              ⚠️ Important Disclaimer
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Legal Disclaimer
              </span>
              <br />
              & Risk Warnings
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Please read these important disclaimers and risk warnings carefully before using
              <br />
              the Filakaros platform or investing in IKAROS Token.
            </p>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <span className="text-lg font-semibold text-red-500">High Risk Investment Warning</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Cryptocurrency investments carry substantial risk. You may lose your entire investment.
                Only invest what you can afford to lose completely.
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

      {/* Disclaimer Sections */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {disclaimerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                  section.type === 'critical' ? 'border-red-500/20 bg-red-500/5' :
                  section.type === 'warning' ? 'border-yellow-500/20 bg-yellow-500/5' :
                  'border-primary/20'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        section.type === 'critical' ? 'bg-red-500' :
                        section.type === 'warning' ? 'bg-yellow-500' :
                        'bg-gradient-to-r from-primary to-secondary'
                      }`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant={
                        section.type === 'critical' ? 'destructive' :
                        section.type === 'warning' ? 'secondary' :
                        'default'
                      }>
                        {section.type === 'critical' ? 'Critical' :
                         section.type === 'warning' ? 'Warning' : 'Information'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            section.type === 'critical' ? 'bg-red-500' :
                            section.type === 'warning' ? 'bg-yellow-500' :
                            'bg-primary'
                          }`} />
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

      {/* Risk Factors */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Risk Factors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riskFactors.map((risk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full ${
                    risk.severity === 'high' ? 'border-red-500/20 bg-red-500/5' :
                    'border-yellow-500/20 bg-yellow-500/5'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{risk.title}</h3>
                        <Badge variant={risk.severity === 'high' ? 'destructive' : 'secondary'} size="sm">
                          {risk.severity === 'high' ? 'High Risk' : 'Medium Risk'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{risk.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* No Warranties */}
      <Section padding="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-red-500/20 bg-red-500/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <FileX className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">No Warranties or Guarantees</h2>
                </div>
                
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong>DISCLAIMER OF WARRANTIES:</strong> The Filakaros platform, IKAROS Token, and all related 
                    services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, either express
                    or implied, including but not limited to warranties of merchantability, fitness for a particular 
                    purpose, or non-infringement.
                  </p>
                  
                  <p>
                    <strong>NO GUARANTEE OF PERFORMANCE:</strong> We do not warrant that the platform will be 
                    uninterrupted, error-free, or free from viruses or other harmful components. We do not guarantee 
                    the accuracy, completeness, or usefulness of any information provided.
                  </p>
                  
                  <p>
                    <strong>INVESTMENT RESULTS:</strong> We make no representations or warranties regarding the 
                    potential profitability, performance, or value of IKAROS Token or any investment strategy. 
                    All investments carry risk of loss.
                  </p>
                  
                  <p>
                    <strong>THIRD-PARTY SERVICES:</strong> We are not responsible for the availability, accuracy, 
                    or reliability of third-party services, websites, or applications that may be linked to or 
                    integrated with our platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section padding="xl" className="bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Questions About This Disclaimer?</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about this disclaimer or need clarification on any risks,
              please contact our legal team.
            </p>
            
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> legal@filakaros.com</p>
              <p><strong>Subject Line:</strong> Disclaimer Inquiry</p>
              <p><strong>Response Time:</strong> 5-7 business days</p>
            </div>
            
            <p className="text-xs text-muted-foreground mt-6">
              This disclaimer is governed by the laws of the United Arab Emirates and any disputes 
              shall be subject to the exclusive jurisdiction of the courts of Dubai.
            </p>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
