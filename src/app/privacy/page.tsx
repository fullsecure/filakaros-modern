"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Users, FileText, AlertCircle } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement industry-leading security measures to protect your personal information and ensure it remains confidential."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are transparent about what data we collect, how we use it, and with whom we share it."
  },
  {
    icon: Lock,
    title: "User Control",
    description: "You have full control over your data, including the right to access, modify, or delete your information."
  },
  {
    icon: Users,
    title: "Minimal Collection",
    description: "We only collect data that is necessary for providing our services and improving user experience."
  }
]

export default function PrivacyPage() {
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
            🔒 Privacy Policy
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Privacy <span className="text-gradient">Matters</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Filakaros, we are committed to protecting your privacy and ensuring 
            the security of your personal information.
          </p>
          
          <div className="text-sm text-muted-foreground">
            Last updated: March 2024
          </div>
        </motion.div>
      </Section>

      {/* Privacy Principles */}
      <Section padding="xl">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Privacy <span className="text-gradient">Principles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Privacy Policy Content */}
      <Section padding="xl" background="card">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Privacy Policy <span className="text-gradient">Details</span>
            </h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Information We Collect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    participate in our community, or contact us for support. This may include:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Email address and contact information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Wallet addresses and transaction data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Usage data and analytics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Communication preferences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>How We Use Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Process transactions and manage your account</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Send important updates and notifications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Improve our platform and user experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Comply with legal obligations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5" />
                    <span>Data Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    This includes encryption, secure servers, and regular security audits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Your Rights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Right to access your personal data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Right to rectify inaccurate data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Right to erase your data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Right to data portability</span>
                    </li>
                  </ul>
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
            Questions About <span className="text-gradient">Privacy?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, 
            please don&apos;t hesitate to contact us.
          </p>
          <div className="text-sm text-muted-foreground">
            Email: privacy@filakaros.com
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
