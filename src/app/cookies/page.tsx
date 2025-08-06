"use client"

import { motion } from "framer-motion"
import { Cookie, Settings, BarChart, Shield, Info, CheckCircle } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cookieTypes = [
  {
    icon: CheckCircle,
    title: "Essential Cookies",
    description: "Required for basic website functionality and security. These cannot be disabled.",
    examples: ["Authentication", "Security", "Load balancing"],
    color: "text-green-400"
  },
  {
    icon: BarChart,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website to improve user experience.",
    examples: ["Page views", "User behavior", "Performance metrics"],
    color: "text-blue-400"
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Remember your preferences and settings to provide a personalized experience.",
    examples: ["Theme preferences", "Language settings", "User preferences"],
    color: "text-purple-400"
  }
]

export default function CookiesPage() {
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
            🍪 Cookie Policy
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn about how we use cookies and similar technologies to improve your experience on Filakaros.
          </p>
          
          <div className="text-sm text-muted-foreground">
            Last updated: March 2024
          </div>
        </motion.div>
      </Section>

      {/* What are Cookies */}
      <Section padding="xl">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              What Are <span className="text-gradient">Cookies?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Understanding Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and ensuring security.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Cookie Types */}
      <Section padding="xl" background="card">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Types of <span className="text-gradient">Cookies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use different types of cookies for various purposes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
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
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Examples:</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center space-x-2">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cookie Management */}
      <Section padding="xl">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Managing <span className="text-gradient">Cookies</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Browser Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 mt-4">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>View what cookies are stored on your device</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Delete cookies individually or all at once</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Block cookies from specific sites</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Block all cookies (may affect functionality)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Third-Party Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services that set their own cookies. These include analytics providers, 
                  social media platforms, and advertising networks. We do not control these third-party cookies, 
                  and they are subject to their respective privacy policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="w-5 h-5" />
                  <span>Cookie Consent</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By continuing to use our website, you consent to our use of cookies as described in this policy. 
                  You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
                </p>
              </CardContent>
            </Card>
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
            Questions About <span className="text-gradient">Cookies?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you have any questions about our use of cookies, please don&apos;t hesitate to contact us.
          </p>
          <div className="text-sm text-muted-foreground">
            Email: privacy@filakaros.com
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
