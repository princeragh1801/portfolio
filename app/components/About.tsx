import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">About Me</h2>
        <p className="text-muted-foreground">Learn more about my background and experience</p>
      </div>
      <Card className="bg-card hover:bg-card/80 transition-colors">
        <CardContent className="p-6 space-y-4">
          <p>
            I am a Full Stack Developer with a strong foundation in software engineering and a passion for creating
            efficient, scalable solutions. Currently working as a Software Engineer Intern at PageUp Software Services,
            where I focus on developing robust backend systems and RESTful APIs.
          </p>
          <p>
            My expertise lies in .NET technologies, particularly in building secure and performant web applications.
            I have hands-on experience with SQL Server, Entity Framework, and modern frontend frameworks like React.
          </p>
          <p>
            Beyond coding, I am an active participant in the developer community, regularly contributing to open-source
            projects and sharing my knowledge through technical blog posts.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

