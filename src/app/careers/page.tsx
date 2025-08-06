"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Globe, Star, ExternalLink } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const jobOpenings = [
  {
    id: "1",
    title: "Senior Blockchain Developer",
    department: "Engineering",
    location: "Remote / Dubai",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead the development of our blockchain infrastructure, smart contracts, and DeFi protocols. Work with cutting-edge technology to preserve cultural heritage on the blockchain.",
    requirements: [
      "3+ years of Solidity and smart contract development",
      "Experience with Ethereum, Web3.js, and DeFi protocols",
      "Knowledge of blockchain security best practices",
      "Experience with testing frameworks and deployment tools"
    ],
    benefits: ["Competitive salary", "IKAROS token allocation", "Remote work", "Health insurance"]
  },
  {
    id: "2",
    title: "AI/ML Engineer - Cultural Heritage",
    department: "Technology",
    location: "Remote / London",
    type: "Full-time",
    experience: "2+ years",
    description: "Develop AI algorithms for cultural artifact analysis, preservation, and documentation. Create innovative solutions that bridge ancient heritage with modern technology.",
    requirements: [
      "2+ years in machine learning and computer vision",
      "Experience with TensorFlow, PyTorch, or similar frameworks",
      "Knowledge of image processing and pattern recognition",
      "Interest in cultural heritage and archaeology"
    ],
    benefits: ["Competitive salary", "IKAROS token allocation", "Learning budget", "Flexible hours"]
  },
  {
    id: "3",
    title: "Community Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Build and nurture our global community across social media platforms, organize events, and create engaging content that educates about our mission.",
    requirements: [
      "2+ years in community management or social media",
      "Experience with crypto/blockchain communities",
      "Excellent communication skills in English",
      "Knowledge of Telegram, Discord, Twitter, and Reddit"
    ],
    benefits: ["Competitive salary", "IKAROS token allocation", "Event travel", "Creative freedom"]
  },
  {
    id: "4",
    title: "Partnership Development Manager",
    department: "Business Development",
    location: "Dubai / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Establish strategic partnerships with museums, cultural institutions, and technology companies to expand our global heritage preservation network.",
    requirements: [
      "3+ years in business development or partnerships",
      "Experience in cultural sector or blockchain industry",
      "Strong negotiation and relationship building skills",
      "Willingness to travel internationally"
    ],
    benefits: ["Competitive salary", "IKAROS token allocation", "Travel opportunities", "Commission structure"]
  }
]

const companyValues = [
  {
    icon: Heart,
    title: "Heritage Preservation",
    description: "We're passionate about preserving cultural heritage for future generations through innovative technology.",
    color: "text-red-400"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We embrace cutting-edge technology and creative solutions to solve complex preservation challenges.",
    color: "text-yellow-400"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work spans across cultures and continents, creating positive impact on a global scale.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "We believe in the power of diverse teams working together towards a common mission.",
    color: "text-accent"
  }
]

const benefits = [
  "Competitive salary with performance bonuses",
  "IKAROS token allocation and vesting schedule",
  "Comprehensive health and dental insurance",
  "Flexible working hours and remote work options",
  "Professional development and learning budget",
  "Annual team retreats and cultural heritage trips",
  "State-of-the-art equipment and technology",
  "Opportunity to work with leading cultural institutions"
]

export default function CareersPage() {
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
            💼 Join Our Mission
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build the Future of <span className="text-gradient-primary">Cultural Heritage</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join a passionate team of innovators, technologists, and heritage enthusiasts 
            working to preserve human culture through blockchain and AI technology.
          </p>
        </motion.div>
      </Section>

      {/* Company Values */}
      <Section padding="xl">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="text-gradient-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What drives us every day and shapes our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center group card-hover simple-glow">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Job Openings */}
      <Section padding="xl" className="section-bg-secondary">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Open <span className="text-gradient-warm">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our growing team and help shape the future of cultural heritage preservation
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group card-hover simple-glow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-2">
                        <CardTitle className="text-xl md:text-2xl">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {job.department}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="w-3 h-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline">
                            <Star className="w-3 h-3 mr-1" />
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="gradient" className="lg:min-w-[150px]">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Benefits:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section padding="xl" className="section-bg-accent">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Work at <span className="text-gradient-primary">Filakaros?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive benefits and a unique opportunity to make a lasting impact on cultural heritage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Application CTA */}
      <Section padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Don&apos;t See the Perfect <span className="text-gradient-accent">Role?</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for cultural heritage and innovation.
            Send us your resume and let&apos;s explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="min-w-[200px]" asChild>
              <a href="/contact">
                Send Your Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
              <a href="https://t.me/ikarosworld" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Community
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
