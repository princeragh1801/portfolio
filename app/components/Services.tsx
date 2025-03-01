'use client'
import { Card, CardContent } from "@/components/ui/card"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "RESTful APIs",
      description: "Build secure and scalable APIs for web and mobile applications using asp.net core and nodejs.",
      icon: "/restapi.svg",
      link:"projects/backend"
    },
    {
      title: "Windows Form Applications",
      description: "Develop powerful desktop applications with modern UI and functionality.",
      icon: "/windows.png",
      link:"projects/backend"
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications using React Native and .NET.",
      icon: "/mobile-app-development.png",
      link:"projects/frontend"
    },
    {
      title: "Full-Stack Web Apps",
      description: "Develop dynamic and responsive web applications with modern frameworks.",
      icon: "/web-app-development.png",
      link : "projects/backend"
    }
  ]

  return (
    <section id="services" className="py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Services I Offer</h2>
        <p className="text-muted-foreground">Custom software solutions tailored to your needs</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link href={service.link}>
          <Card key={service.title} className="flex flex-col items-center p-6 bg-card rounded-lg">
            <Image src={service.icon} width={64} height={64} alt={service.title} />
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            </Card>
            </Link>
        ))}
      </div>
    </section>
  )
}
