import { Metadata } from "next"
import { createSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = createSEOMetadata({
  title: "Frequently Asked Questions - Filakaros & IKAROS Token FAQ",
  description: "Find answers to common questions about Filakaros platform, IKAROS token, cultural heritage preservation, blockchain technology, and more.",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "IKAROS token questions",
    "filakaros help",
    "blockchain FAQ",
    "cultural heritage questions",
    "cryptocurrency help",
    "DeFi questions",
    "NFT questions"
  ],
  path: "/faq"
})
