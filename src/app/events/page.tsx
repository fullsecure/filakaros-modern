"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users, Video, Globe, ExternalLink, Bell } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: "1",
    title: "Filakaros Global Launch Webinar",
    description: "Join us for the official global launch presentation where we&apos;ll unveil our revolutionary platform, demonstrate AI-powered heritage preservation, and announce major partnerships.",
    date: "2024-03-15",
    time: "14:00 UTC",
    duration: "2 hours",
    type: "webinar",
    location: "Online",
    registrationUrl: "https://filakaros.com/events/launch-webinar",
    speakers: ["Dr. Sarah Chen - CEO", "Prof. Ahmed Hassan - CTO", "Maria Rodriguez - Head of Partnerships"],
    image: "/events/launch-webinar.jpg",
    featured: true
  },
  {
    id: "2",
    title: "Blockchain & Cultural Heritage Conference",
    description: "A comprehensive conference exploring the intersection of blockchain technology and cultural preservation, featuring industry leaders and innovative projects.",
    date: "2024-03-22",
    time: "09:00 UTC",
    duration: "Full Day",
    type: "conference",
    location: "Dubai, UAE",
    registrationUrl: "https://filakaros.com/events/dubai-conference",
    speakers: ["Multiple Industry Leaders", "UNESCO Representatives", "Blockchain Experts"],
    image: "/events/dubai-conference.jpg",
    featured: true
  },
  {
    id: "3",
    title: "IKAROS Token Economics Deep Dive",
    description: "An in-depth workshop covering tokenomics, staking mechanisms, governance participation, and investment strategies for the IKAROS ecosystem.",
    date: "2024-03-28",
    time: "16:00 UTC",
    duration: "90 minutes",
    type: "workshop",
    location: "Online",
    registrationUrl: "https://filakaros.com/events/tokenomics-workshop",
    speakers: ["Financial Team", "Community Managers"],
    image: "/events/tokenomics-workshop.jpg",
    featured: false
  },
  {
    id: "4",
    title: "Community Meetup - Europe",
    description: "Connect with fellow Filakaros enthusiasts, learn about local heritage projects, and participate in community governance discussions.",
    date: "2024-04-05",
    time: "18:00 CET",
    duration: "3 hours",
    type: "meetup",
    location: "Berlin, Germany",
    registrationUrl: "https://filakaros.com/events/berlin-meetup",
    speakers: ["Community Leaders", "Local Heritage Experts"],
    image: "/events/berlin-meetup.jpg",
    featured: false
  }
]

const pastEvents = [
  {
    id: "past-1",
    title: "Filakaros Foundation Announcement",
    description: "The historic announcement of Filakaros project and our mission to revolutionize cultural heritage preservation.",
    date: "2024-01-15",
    type: "announcement",
    attendees: "5,000+",
    recording: "https://youtube.com/watch?v=filakaros-foundation"
  },
  {
    id: "past-2",
    title: "Whitepaper Release Event",
    description: "Official release of our comprehensive whitepaper detailing the technical and economic aspects of the Filakaros ecosystem.",
    date: "2024-02-01",
    type: "release",
    attendees: "3,200+",
    recording: "https://youtube.com/watch?v=whitepaper-release"
  },
  {
    id: "past-3",
    title: "Partnership Announcements",
    description: "Major partnership announcements with leading museums, cultural institutions, and technology companies.",
    date: "2024-02-20",
    type: "announcement",
    attendees: "4,500+",
    recording: "https://youtube.com/watch?v=partnerships"
  }
]

const eventTypes = {
  webinar: { icon: Video, color: "text-primary", bg: "bg-primary/20" },
  conference: { icon: Users, color: "text-secondary", bg: "bg-secondary/20" },
  workshop: { icon: Globe, color: "text-accent", bg: "bg-accent/20" },
  meetup: { icon: MapPin, color: "text-primary", bg: "bg-primary/20" }
}

export default function EventsPage() {
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
            📅 Events & Community
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Join Our <span className="text-gradient-primary">Events</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with the Filakaros community, learn about cultural heritage preservation, 
            and be part of the blockchain revolution in heritage conservation.
          </p>
        </motion.div>
      </Section>

      {/* Upcoming Events */}
      <Section padding="xl">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Upcoming <span className="text-gradient-accent">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t miss these exciting opportunities to learn, connect, and grow with Filakaros
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => {
              const EventTypeIcon = eventTypes[event.type as keyof typeof eventTypes]?.icon || Calendar
              const typeColor = eventTypes[event.type as keyof typeof eventTypes]?.color || "text-gray-400"
              const typeBg = eventTypes[event.type as keyof typeof eventTypes]?.bg || "bg-gray-400/20"

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`group card-hover simple-glow ${event.featured ? 'ring-2 ring-primary/50' : ''}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                      {/* Event Image Placeholder */}
                      <div className="lg:col-span-1">
                        <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <EventTypeIcon className={`w-12 h-12 ${typeColor}`} />
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className={`${typeColor} border-current`}>
                                <EventTypeIcon className="w-3 h-3 mr-1" />
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </Badge>
                              {event.featured && (
                                <Badge variant="gradient" size="sm">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">{event.title}</h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time} ({event.duration})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-medium">Speakers:</div>
                          <div className="text-sm text-muted-foreground">
                            {event.speakers.join(" • ")}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button variant="gradient" className="flex-1" asChild>
                            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                              <Bell className="w-4 h-4 mr-2" />
                              Register Now
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Learn More
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Past Events */}
      <Section padding="xl" className="section-bg-secondary">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Past <span className="text-gradient-warm">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Catch up on what you missed with recordings and highlights from our previous events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group card-hover simple-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" size="sm">
                        {event.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">
                        {event.attendees} attendees
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={event.recording} target="_blank" rel="noopener noreferrer">
                          <Video className="w-3 h-3 mr-1" />
                          Watch
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section padding="lg" className="section-bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Never Miss an <span className="text-gradient-accent">Event</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest Filakaros events, announcements, and community activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="gradient" size="lg" className="flex-1" asChild>
              <a href="https://t.me/ikarosworld" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="flex-1" asChild>
              <a href="/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
