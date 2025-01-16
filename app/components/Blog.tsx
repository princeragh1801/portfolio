import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      title: "Building Secure APIs with .NET Core",
      description: "Learn how to implement JWT authentication and authorization in .NET Core Web APIs",
      date: "2024-01-15",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Entity Framework Core Best Practices",
      description: "Tips and tricks for optimizing database operations with Entity Framework Core",
      date: "2024-01-10",
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "React Server Components: A Deep Dive",
      description: "Understanding the benefits and use cases of React Server Components",
      date: "2024-01-05",
      readTime: "10 min read",
      link: "#"
    }
  ]

  return (
    <section id="blog" className="py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Blog</h2>
        <p className="text-muted-foreground">Technical articles and tutorials</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="text-primary">{post.title}</CardTitle>
              <CardDescription>
                {post.date} · {post.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{post.description}</p>
              <Button variant="outline" asChild className="group">
                <a href={post.link}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

