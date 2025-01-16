import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description: "HRMS Web API built with ASP.NET Core and Entity Framework",
      technologies: ["C#", ".NET Core", "SQL Server", "JWT Auth"],
      github: "https://github.com/princeragh1801/EmployeeManagementAPI",
      demo: "#"
    },
    {
      title: "Alumni E-Connect",
      description: "Full stack web application for alumni networking and event management",
      technologies: ["React", ".NET Core", "SQL Server", "Azure"],
      github: "https://github.com/princeragh1801/Alumini",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Projects</h2>
        <p className="text-muted-foreground">Some of my recent work</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

