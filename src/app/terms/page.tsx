"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section padding="xl" background="gradient" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <Badge variant="glow" size="lg" className="mb-4">
            📋 Terms of Service
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using the Filakaros platform and services.
          </p>
          
          <div className="text-sm text-muted-foreground">
            Last updated: March 2024
          </div>
        </motion.div>
      </Section>

      {/* Terms Content */}
      <Section padding="xl" background="card">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Acceptance of Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the Filakaros platform, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>User Responsibilities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As a user of our platform, you agree to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Provide accurate and truthful information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Maintain the security of your account credentials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Respect the rights of other users</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Risk Disclosure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Cryptocurrency and blockchain investments carry inherent risks:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      <span>Market volatility may result in significant losses</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      <span>Regulatory changes may affect token value</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      <span>Technology risks including smart contract vulnerabilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      <span>Liquidity risks in secondary markets</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Limitation of Liability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Filakaros shall not be liable for any direct, indirect, incidental, special, consequential, 
                    or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                    or other intangible losses, resulting from your use of the platform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Scale className="w-5 h-5" />
                    <span>Governing Law</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms shall be interpreted and governed in accordance with the laws of the jurisdiction 
                    where Filakaros is incorporated, without regard to its conflict of law provisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Modifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of any material 
                    changes via email or through our platform. Continued use of the service after such modifications 
                    constitutes acceptance of the updated terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section padding="lg" background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Questions About <span className="text-gradient">Terms?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          <div className="text-sm text-muted-foreground">
            Email: legal@filakaros.com
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
