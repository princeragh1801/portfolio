'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/app/components/ProjectCard'

// This would typically come from a database or API

const projects = [
    {
        slug: "employee-management-system",
        title: "Employee Management API",
        description: "A backend service for managing employees with role-based authentication and authorization.",
        technologies: ["C#", ".NET Core", "SQL Server", "Entity Framework Core"],
        github: "https://github.com/princeragh1801/EmployeeManagementAPI", // Add your GitHub repo link if available
        demo: "#",   // Add your demo link if available (e.g., API documentation or hosted backend)
      },
{
  slug: "book-my-show",
  title: "Book My Show",
  description: "A backend service for a movie ticket booking system with JWT-based authentication.",
  technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  github: "#", // Add your GitHub repo link if available
  demo: "#",   // Add your demo link if available (e.g., API documentation or hosted backend)
},
{
  slug: "dot",
  title: ".Dot",
  description: "A full-stack web application where users can publish their project details and explore projects shared by others.",
  technologies: ["React.js", "Node.js", "Express", "MongoDB"],
  github: "#", // Add your GitHub repo link if available
  demo: "#",   // Add your demo link if available
},
{
  slug: "chat-app",
  title: "Chat App",
  description: "A real-time chat application with WebSocket support using SignalR, allowing users to send and receive messages instantly.",
  technologies: ["React.js", "ASP.NET Core Web API", "SQL Server", "Entity Framework Core", "SignalR"],
  github: "#", // Add your GitHub repo link if available
  demo: "#",   // Add your demo link if available
},
    {
      slug: 'alumni-e-connect',
      title: "Alumni E-Connect",
      description: "Full stack web application for alumni networking and event management",
      technologies: ["React", ".NET Core", "SQL Server", "Azure"],
      github: "https://github.com/NidhiSharma-21/Alumni_Econnect_Major",
      demo: "#"
    },
    
    // Add more projects here...
  ]

export default function ProjectDetail() {
//   const params = useParams()
//   const project = projects.find(project => project.slug === params.slug)

//   if (!project) {
//     return <div>Project not found</div>
//   }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/#projects">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} />
        
        ))}
      </div>
        </motion.div>
        </div>
  )
}

