"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"
import {
  Section,
  Container,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Input
} from "@/components/ui"
import { PageBreadcrumb } from "@/components/ui/breadcrumb"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cultural Heritage Preservation",
    excerpt: "Exploring how blockchain technology and AI are revolutionizing the way we preserve and share cultural heritage for future generations.",
    author: "IKAROS Team",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/images/blog/heritage-future.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Understanding IKAROS Tokenomics",
    excerpt: "A comprehensive guide to IKAROS token distribution, utility, and the economic model behind our cultural heritage ecosystem.",
    author: "Economic Team",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Economics",
    image: "/images/blog/tokenomics-guide.jpg",
    featured: false
  },
  {
    id: 3,
    title: "NFTs and Cultural Heritage: A New Era",
    excerpt: "How Non-Fungible Tokens are creating new opportunities for cultural institutions and heritage preservation projects.",
    author: "NFT Specialist",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "NFTs",
    image: "/images/blog/nft-heritage.jpg",
    featured: false
  }
]

const categories = ["All", "Technology", "Economics", "NFTs", "Community", "Updates"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-16">
      <PageBreadcrumb title="Blog" category="Resources" />
      
      <Section padding="xl" className="section-bg-primary">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              IKAROS <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news, insights, and developments in cultural heritage preservation and blockchain technology.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={post.featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                    <span className="text-4xl">📚</span>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" size="sm">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge variant="default" size="sm">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter to receive the latest updates about IKAROS and cultural heritage preservation.
                </p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <Input placeholder="Enter your email" type="email" />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
