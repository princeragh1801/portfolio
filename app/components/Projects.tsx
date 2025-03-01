'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

const projects = [
  {
    slug: 'employee-management-system',
    title: "Employee Management System",
    description: "HRMS Web API built with ASP.NET Core and Entity Framework",
    technologies: ["C#", ".NET Core", "SQL Server", "JWT Auth"],
    github: "https://github.com/princeragh1801/EmployeeManagementAPI",
    demo: "#"
  },
  {
    slug: 'alumni-e-connect',
    title: "Alumni E-Connect",
    description: "Full stack web application for alumni networking and event management",
    technologies: ["React", ".NET Core", "SQL Server", "Azure"],
    github: "https://github.com/NidhiSharma-21/Alumni_Econnect_Major",
    demo: "#"
  },
  {
    slug: 'portfolio-website',
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },{
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

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  return (
    <section id="projects" className="py-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Projects</h2>
        <p className="text-muted-foreground">Some of my recent work</p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard project={project} index={index} />
        
        ))}
      </div>
      {visibleProjects < projects.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() => setVisibleProjects(prevVisible => prevVisible + 3)}
            variant="outline"
            className="group border-primary text-primary hover:bg-primary/10"
          >
            View More Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      )}
    </section>
  )
}

