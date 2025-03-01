'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
    project: any
    index: number
}
const ProjectCard = ({project, index} : ProjectCardProps) => {
  return (
    <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }} // Scale-up effect on hover
          whileTap={{ scale: 0.95 }}  // Scale-down effect on tap/click
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Card
            className="bg-card hover:bg-card/80 transition-colors h-full flex flex-col"
          >
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, ease: "easeInOut", delay: 0.02 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech : any) => (
                    <motion.span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary-foreground"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                      }} // Slightly enlarges the tag on hover
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary group text-primary hover:bg-primary/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1 " />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      size="sm"
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <Button
                variant="outline"
                asChild
                className="group w-full mt-4 border-primary text-primary hover:bg-primary/10"
              >
                <Link href={`/projects/${project.slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
  )
}

export default ProjectCard