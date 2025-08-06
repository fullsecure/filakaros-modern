// تعريفات الأنواع الأساسية للمشروع

export interface NavItem {
  title: string
  href: string
  description?: string
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    telegram: string
    github: string
  }
}

export interface TokenomicsData {
  totalSupply: number
  currentPrice: number
  holders: number
  lockedLiquidity: number
  distribution: {
    name: string
    percentage: number
    amount: number
    color: string
  }[]
}

export interface RoadmapPhase {
  id: string
  title: string
  description: string
  date: string
  status: 'completed' | 'active' | 'upcoming' | 'future'
  features: {
    title: string
    completed: boolean
  }[]
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface Feature {
  icon: string
  title: string
  description: string
  color?: string
}

export interface Stat {
  label: string
  value: string | number
  icon: string
  change?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'webinar' | 'conference' | 'workshop' | 'meetup'
  image?: string
  registrationUrl?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  tags: string[]
  readTime: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'partnership' | 'support' | 'media'
}
