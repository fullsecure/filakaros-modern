"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Send, Briefcase, HelpCircle } from "lucide-react"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Metadata is exported from metadata.ts file
import { useState } from "react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get in touch with our team for general inquiries and support",
    contact: "info@filakaros.com",
    action: "Send Email",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Telegram Community",
    description: "Join our active community for real-time discussions and updates",
    contact: "@ikarosworld",
    action: "Join Telegram",
    color: "text-secondary"
  },
  {
    icon: Briefcase,
    title: "Partnership Inquiries",
    description: "Explore collaboration opportunities with Filakaros",
    contact: "partnerships@filakaros.com",
    action: "Contact Us",
    color: "text-accent"
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Get help with platform issues and technical questions",
    contact: "support@filakaros.com",
    action: "Get Help",
    color: "text-primary"
  }
]

const contactTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "support", label: "Technical Support" },
  { value: "media", label: "Media & Press" }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    type: "general",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setSubmitMessage(result.message)
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          type: "general",
          message: ""
        })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.message || "An error occurred while sending the message")
      }
    } catch {
      setSubmitStatus("error")
      setSubmitMessage("A connection error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section padding="xl" className="section-bg-primary text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <Badge variant="glow" size="lg" className="mb-4">
            📞 Get in Touch
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Contact <span className="text-gradient-primary">Filakaros</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join the revolution in cultural heritage preservation? 
            We&apos;d love to hear from you and explore how we can work together.
          </p>
        </motion.div>
      </Section>

      {/* Contact Methods */}
      <Section padding="xl">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Multiple Ways to <span className="text-gradient-accent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group card-hover simple-glow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                    <div className="space-y-3">
                      <div className={`font-mono text-sm ${method.color}`}>
                        {method.contact}
                      </div>
                      <Button variant="outline" className="w-full">
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section padding="xl" background="card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Send Us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glow">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status message */}
                  {submitMessage && (
                    <div className={`p-4 rounded-lg text-center ${
                      submitStatus === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium">
                        Inquiry Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary"
                      >
                        {contactTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief subject of your message"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="min-w-[200px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="min-w-[200px]" asChild>
                      <a href="https://t.me/ikarosworld" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Join Telegram
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section padding="lg" background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Explore More About <span className="text-gradient">Filakaros</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://filakaros.com/whitepaper/" target="_blank" rel="noopener noreferrer">
                📄 Whitepaper
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/faq">
                ❓ FAQ
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/careers">
                💼 Careers
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/events">
                📅 Events
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
