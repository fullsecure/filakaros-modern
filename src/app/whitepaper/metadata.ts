import { Metadata } from "next"
import { createSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = createSEOMetadata({
  title: "Filakaros Whitepaper - Technical Documentation | IKAROS Token",
  description: "Comprehensive technical documentation of Filakaros platform. Learn about IKAROS tokenomics, cultural heritage preservation technology, and blockchain implementation.",
  keywords: [
    "whitepaper",
    "technical documentation", 
    "tokenomics",
    "blockchain technology",
    "cultural heritage preservation",
    "IKAROS token economics",
    "smart contracts",
    "DeFi platform"
  ],
  path: "/whitepaper",
  type: "article"
})
