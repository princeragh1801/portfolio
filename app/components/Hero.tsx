import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text">
          Prince Raghuwanshi
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Full Stack Developer specializing in .NET and modern web technologies.
          Building robust and scalable applications with a focus on clean code and performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" className="group">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

