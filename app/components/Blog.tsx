'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    slug: 'building-secure-apis-with-dotnet-core',
    title: "Building Secure APIs with .NET Core",
    description: "Learn how to implement JWT authentication and authorization in .NET Core Web APIs",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    slug: 'entity-framework-core-best-practices',
    title: "Entity Framework Core Best Practices",
    description: "Tips and tricks for optimizing database operations with Entity Framework Core",
    date: "2024-01-10",
    readTime: "6 min read",
  },
  {
    slug: 'react-server-components-deep-dive',
    title: "React Server Components: A Deep Dive",
    description: "Understanding the benefits and use cases of React Server Components",
    date: "2024-01-05",
    readTime: "10 min read",
  },
  // Add more blog posts here...
]

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3)

  return (
    <section id="blog" className="py-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Blog</h2>
        <p className="text-muted-foreground">Technical articles and tutorials</p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-card hover:bg-card/80 transition-colors h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-primary">{post.title}</CardTitle>
                <CardDescription>
                  {post.date} · {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="mb-4 text-muted-foreground">{post.description}</p>
                <Button variant="outline" asChild className="group w-full border-primary text-primary hover:bg-primary/10">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() => setVisiblePosts(prevVisible => prevVisible + 3)}
            variant="outline"
            className="group border-primary text-primary hover:bg-primary/10"
          >
            View More Posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      )}
    </section>
  )
}

