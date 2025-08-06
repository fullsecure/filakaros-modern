import { Metadata } from "next"
import { createSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = createSEOMetadata({
  title: "Contact Filakaros Team - Get in Touch | IKAROS Support",
  description: "Contact the Filakaros team for partnerships, support, or inquiries about IKAROS token and cultural heritage preservation projects. We're here to help!",
  keywords: [
    "contact filakaros",
    "IKAROS support",
    "partnership inquiries",
    "customer service",
    "blockchain support",
    "cultural heritage contact",
    "technical support",
    "business inquiries"
  ],
  path: "/contact"
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
