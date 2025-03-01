'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/app/components/ProjectCard'

// This would typically come from a database or API

const projects = [
    {
        slug: "music-school",
        title: "Music School",
        description: "A frontend web application for managing music school activities and courses.",
        technologies: ["Next.js", "Aceternity UI", "TypeScript"],
        github: "#", // Add your GitHub repo link if available
        demo: "#",   // Add your demo link if available
      },
      {
        slug: "write-ease",
        title: "Write-Ease",
        description: "A simple UI project for enhancing writing experience with a clean and minimalistic design.",
        technologies: ["HTML", "CSS"],
        github: "#", // Add your GitHub repo link if available
        demo: "#",   // Add your demo link if available
      },
      {
        slug: "currency-converter",
        title: "Currency Converter",
        description: "A React-based web application for real-time currency conversion.",
        technologies: ["React", "JavaScript"],
        github: "#", // Add your GitHub repo link if available
        demo: "#",   // Add your demo link if available
      },
      {
        slug: "password-generator",
        title: "Password Generator",
        description: "A React-based web application for generating secure and customizable passwords.",
        technologies: ["React", "JavaScript"],
        github: "#", // Add your GitHub repo link if available
        demo: "#",   // Add your demo link if available
      },
      {
        slug: "background-changer",
        title: "Background Changer",
        description: "A React-based web application that allows users to change the background color dynamically.",
        technologies: ["React", "JavaScript"],
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

