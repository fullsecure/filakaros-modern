import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { siteConfig, socialLinks } from "@/lib/config"
import { handleAnchorClick } from "@/lib/smooth-scroll"
import {
  MessageCircle,
  Send,
  Mail,
  MapPin,
  Phone
} from "lucide-react"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa"

const footerLinks = {
  product: [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Projects", href: "#projects" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Whitepaper", href: "/whitepaper" },
  ],
  community: [
    { name: "Team", href: "#team" },
    { name: "Community", href: "#community" },
    { name: "FAQ", href: "/faq" },
    { name: "Telegram", href: "https://t.me/ikarosworld" },
    { name: "X (Twitter)", href: "https://x.com/IkarosWorld1975" },
  ],
  resources: [
    { name: "Events", href: "/events" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
}

const socialIcons = {
  telegram: MessageCircle,
  twitter: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  discord: FaDiscord,
  github: FaGithub,
}

export function Footer() {
  return (
    <footer className="section-bg-accent border-t border-border relative overflow-hidden">
      {/* تأثير خلفية بسيط ومتناسق */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-4">
                <Logo size="md" variant="full" animated={true} />
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                {siteConfig.description}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons]
                  return (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="simple-glow"
                    >
                      <Button variant="outline" size="icon" asChild className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <Icon className="h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-gradient-primary">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Community Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-gradient-accent">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-muted-foreground hover:text-secondary transition-all duration-300 cursor-pointer hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-gradient-warm">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6 bg-muted/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </motion.p>
            <motion.div
              className="flex items-center space-x-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/privacy-policy" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-primary transition-all duration-300 hover:scale-105">
                Disclaimer
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
