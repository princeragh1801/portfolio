'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from a database or API
const blogPosts = [
  {
    slug: 'building-secure-apis-with-dotnet-core',
    title: "Building Secure APIs with .NET Core",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
      <p>In this article, we'll explore how to implement JWT authentication and authorization in .NET Core Web APIs. We'll cover the following topics:</p>
      <ul>
        <li>Setting up a .NET Core Web API project</li>
        <li>Implementing JWT authentication</li>
        <li>Adding authorization to your API endpoints</li>
        <li>Best practices for secure API development</li>
      </ul>
      <p>By the end of this tutorial, you'll have a solid understanding of how to secure your .NET Core APIs using industry-standard practices.</p>
    `
  },
  {
    slug: 'entity-framework-core-best-practices',
    title: "Entity Framework Core Best Practices",
    date: "2024-01-10",
    readTime: "6 min read",
    content: `
      <p>Entity Framework Core is a powerful ORM, but it's important to use it correctly to ensure optimal performance. In this article, we'll discuss:</p>
      <ul>
        <li>Efficient querying techniques</li>
        <li>Proper use of lazy loading vs. eager loading</li>
        <li>Optimizing database operations</li>
        <li>Common pitfalls and how to avoid them</li>
      </ul>
      <p>Follow these best practices to get the most out of Entity Framework Core in your .NET applications.</p>
    `
  },
  {
    slug: 'react-server-components-deep-dive',
    title: "React Server Components: A Deep Dive",
    date: "2024-01-05",
    readTime: "10 min read",
    content: `
      <p>React Server Components are changing the way we think about building React applications. In this deep dive, we'll cover:</p>
      <ul>
        <li>What are React Server Components?</li>
        <li>How do they differ from traditional React components?</li>
        <li>Use cases and benefits</li>
        <li>Implementing Server Components in your Next.js application</li>
      </ul>
      <p>Discover how React Server Components can improve your application's performance and developer experience.</p>
    `
  }
]

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/#blog">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4 gradient-text">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.date} · {post.readTime}</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </div>
  )
}

