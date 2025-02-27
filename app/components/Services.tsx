'use client'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "RESTful APIs",
      description: "Build secure and scalable APIs for web and mobile applications using asp.net core and nodejs.",
      icon: "/restapi.svg"
    },
    {
      title: "Windows Form Applications",
      description: "Develop powerful desktop applications with modern UI and functionality.",
      icon: "/windows.png"
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications using React Native and .NET.",
      icon: "/mobile-app-development.png"
    },
    {
      title: "Full-Stack Web Apps",
      description: "Develop dynamic and responsive web applications with modern frameworks.",
      icon: "/web-app-development.png"
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
          <Card key={service.title} className="bg-card hover:bg-card/80 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image src={service.icon} alt={service.title} width={50} height={50} />
              </div>
              <h3 className="font-semibold text-lg text-primary">{service.title}</h3>
              <p className="text-muted-foreground mt-2">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
