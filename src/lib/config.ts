import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: "Filakaros",
  description: "Cultural Heritage meets Blockchain - Preserve the past, build the future with AI-powered cultural heritage preservation on blockchain",
  url: "https://filakaros.com",
  ogImage: "https://filakaros.com/og-image.jpg",
  links: {
    twitter: "https://x.com/IkarosWorld1975",
    telegram: "https://t.me/ikarosworld",
    github: "https://github.com/ikarosworld"
  }
}

export const navigation = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Tokenomics",
    href: "#tokenomics",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
  },
  {
    title: "Team",
    href: "#team",
  },
  {
    title: "Community",
    href: "#community",
  }
]

export const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/ikarosworld",
    icon: "telegram"
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/IkarosWorld1975",
    icon: "twitter"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1Yv6gECr65/",
    icon: "facebook"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ikaros.worlds",
    icon: "instagram"
  }
]

export const tokenomics = {
  totalSupply: 5000000000,
  currentPrice: 0.001,
  holders: 1000000,
  lockedLiquidity: 85,
  distribution: [
    {
      name: "Heritage Preservation",
      percentage: 30,
      amount: 1500000000,
      color: "#6366f1"
    },
    {
      name: "Community Rewards",
      percentage: 25,
      amount: 1250000000,
      color: "#8b5cf6"
    },
    {
      name: "Development",
      percentage: 20,
      amount: 1000000000,
      color: "#06b6d4"
    },
    {
      name: "Liquidity Pool",
      percentage: 15,
      amount: 750000000,
      color: "#10b981"
    },
    {
      name: "Team & Advisors",
      percentage: 10,
      amount: 500000000,
      color: "#f59e0b"
    }
  ]
}
