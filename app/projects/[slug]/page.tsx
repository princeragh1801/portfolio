'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from a database or API
const projects = [
  {
    slug: 'employee-management-system',
    title: "Employee Management System",
    description: "HRMS Web API built with ASP.NET Core and Entity Framework",
    technologies: ["C#", ".NET Core", "SQL Server", "JWT Auth"],
    github: "#",
    demo: "#",
    details: `
      <p>The Employee Management System is a comprehensive HRMS solution designed to streamline HR processes and improve employee management. Key features include:</p>
      <ul>
        <li>Employee onboarding and offboarding workflows</li>
        <li>Time and attendance tracking</li>
        <li>Performance management</li>
        <li>Payroll integration</li>
      </ul>
      <p>This project showcases my expertise in building scalable backend systems using .NET Core and implementing secure authentication mechanisms.</p>
    `
  },
  {
    slug: 'alumni-e-connect',
    title: "Alumni E-Connect",
    description: "Full stack web application for alumni networking and event management",
    technologies: ["React", ".NET Core", "SQL Server", "Azure"],
    github: "#",
    demo: "#",
    details: `
      <p>Alumni E-Connect is a platform that helps educational institutions maintain strong connections with their alumni. The application features:</p>
      <ul>
        <li>Alumni directory and networking capabilities</li>
        <li>Event management and RSVP system</li>
        <li>Job board for alumni opportunities</li>
        <li>Donation and fundraising tools</li>
      </ul>
      <p>This project demonstrates my full-stack development skills, combining a React frontend with a .NET Core backend, all deployed on Azure for scalability.</p>
    `
  },
  {
    slug: 'portfolio-website',
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    details: `
      <p>My personal portfolio website showcases my skills, projects, and blog posts. It features:</p>
      <ul>
        <li>Responsive design using Tailwind CSS</li>
        <li>Server-side rendering with Next.js for improved performance</li>
        <li>Dynamic content management for easy updates</li>
        <li>Accessibility considerations for all users</li>
      </ul>
      <p>This project highlights my frontend development skills and my ability to create performant, visually appealing web applications.</p>
    `
  }
]

export default function ProjectDetail() {
  const params = useParams()
  const project = projects.find(project => project.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

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
            Back to Projects
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4 gradient-text">{project.title}</h1>
        <p className="text-muted-foreground mb-8">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mb-8">
          <Button variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
          <Button asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.details }}
        />
      </motion.div>
    </div>
  )
}

