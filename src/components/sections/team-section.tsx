"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import {
  Linkedin,
  Twitter,
  Github,
  Palette,
  Crown,
  Shield,
  Code,
  Briefcase,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
  Globe
} from "lucide-react"

interface TeamMemberSocial {
  linkedin?: string
  twitter?: string
  github?: string
  behance?: string
}

interface TeamMember {
  name: string
  role: string
  fullRole: string
  bio: string
  image: string
  icon: any
  iconColor: string
  iconBg: string
  social: TeamMemberSocial
  expertise: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Abdullah M S Alhoti",
    role: "CEO",
    fullRole: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in blockchain and fintech. Driving strategic direction and innovation at Filakaros to revolutionize cultural heritage preservation.",
    image: "/team/ceo.jpg",
    icon: Crown,
    iconColor: "text-yellow-400",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
    social: {
      linkedin: "#",
      twitter: "#"
    },
    expertise: ["Leadership", "Strategy", "Blockchain"]
  },
  {
    name: "Ali Mohammed",
    role: "COO",
    fullRole: "Chief Operating Officer",
    bio: "Operations expert with deep expertise in scaling tech companies. Ensures seamless project execution and operational excellence across all Filakaros initiatives.",
    image: "/team/coo.jpg",
    icon: Shield,
    iconColor: "text-blue-400",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    social: {
      linkedin: "https://www.linkedin.com/in/ali-mohammed1975/"
    },
    expertise: ["Operations", "Scaling", "Management"]
  },
  {
    name: "Ana's Al Samman",
    role: "CIO",
    fullRole: "Chief Information Officer",
    bio: "Experienced development manager leading technical teams and project delivery. Expert in agile methodologies and ensuring high-quality software development across all Filakaros platforms.",
    image: "/team/development-manager.jpg",
    icon: Code,
    iconColor: "text-green-400",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    social: {
      linkedin: "#"
    },
    expertise: ["Development", "Team Leadership", "Project Management"]
  },
  {
    name: "Eiad Saeed",
    role: "CTO",
    fullRole: "Chief Technology Officer",
    bio: "Technology infrastructure expert and site development specialist ensuring robust, scalable systems. Manages cloud architecture, security protocols, and leads website development for enterprise-grade performance.",
    image: "/team/it-manager.jpg",
    icon: Zap,
    iconColor: "text-purple-400",
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-500",
    social: {
      linkedin: "https://www.linkedin.com/in/eiadsaeed/"
    },
    expertise: ["Infrastructure", "Security", "Cloud", "Site Development"]
  },
  {
    name: "Mohammad Douglas",
    role: "CMO",
    fullRole: "Chief Marketing Officer",
    bio: "Dynamic sales manager with expertise in building strategic partnerships and driving revenue growth. Specializes in blockchain technology sales and expanding market reach for innovative cultural heritage solutions.",
    image: "/team/sales-manager.jpg",
    icon: TrendingUp,
    iconColor: "text-orange-400",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    social: {
      linkedin: "#"
    },
    expertise: ["Sales", "Partnerships", "Business Development"]
  },
  {
    name: "Ahmed Kair",
    role: "Design & Marketing Coordinator",
    fullRole: "Design & Marketing Coordinator",
    bio: "Creative professional specializing in visual design and marketing coordination. Expert in brand development, digital marketing campaigns, and creating compelling visual content that bridges cultural heritage with modern design aesthetics.",
    image: "/team/design-manager.jpg",
    icon: Palette,
    iconColor: "text-pink-400",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    social: {
      behance: "#"
    },
    expertise: ["Design", "Marketing", "Branding", "Coordination"]
  }
]

export function TeamSection() {
  return (
    <Section id="team" padding="xl" className="team-bg">
      {/* تصميم مبسط */}

      {/* تصميم مبسط بدون عناصر عائمة */}

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-400/30 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium tracking-wide">
                👥 Expert Team
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate innovators and experts driving the future of cultural heritage preservation
              through cutting-edge blockchain technology and AI solutions.
            </p>
          </motion.div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:glow transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full ${member.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <member.icon className={`w-10 h-10 ${member.iconColor} drop-shadow-lg`} />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.fullRole}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && member.social.linkedin !== "#" && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name} LinkedIn Profile`}
                      aria-label={`${member.name} LinkedIn Profile`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && member.social.twitter !== "#" && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name} Twitter Profile`}
                      aria-label={`${member.name} Twitter Profile`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && member.social.github !== "#" && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name} GitHub Profile`}
                      aria-label={`${member.name} GitHub Profile`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.behance && member.social.behance !== "#" && (
                    <a
                      href={member.social.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name} Behance Profile`}
                      aria-label={`${member.name} Behance Profile`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                    >
                      <Palette className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Join Team CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re always looking for passionate individuals who share our vision
              of preserving cultural heritage through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#community"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@filakaros.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </Section>
  )
}
