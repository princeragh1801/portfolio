import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Contact</h2>
        <p className="text-muted-foreground">Get in touch with me</p>
      </div>
      <Card className="bg-card hover:bg-card/80 transition-colors">
        <CardHeader>
          <CardTitle className="text-primary">Let's Connect</CardTitle>
          <CardDescription>Feel free to reach out for collaborations or just a friendly chat</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild className="group">
              <a href="mailto:princeraghuwanshi1801@gmail.com">
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild className="group">
              <a href="https://github.com/princeragh1801" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="group">
              <a href="https://www.linkedin.com/in/prince-raghuwanshi-b4a3541b1/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Prince Raghuwanshi. All rights reserved.
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

