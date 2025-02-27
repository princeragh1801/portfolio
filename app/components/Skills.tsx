import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: ".NET Core", icon: "/netcore.svg" },
        { name: "C#", icon: "/c-sharp.svg" },
        { name: "Entity Framework", icon: "/efcore.png" },
        { name: "SQL Server", icon: "/sqlserver.svg" },
        { name: "Node js", icon: "/nodejs.svg" },
        { name: "Mongo db", icon: "/mongodb.svg" },
        { name: "RESTful APIs", icon: "/restapi.svg" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "/react.svg" },
        { name: "TypeScript", icon: "/typescript.svg" },
        { name: "HTML", icon: "/html5.svg" },
        { name: "CSS", icon: "/css3.svg" },
        { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
        { name: "JavaScript", icon: "/javascript.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "/git.svg" },
        { name: "Docker", icon: "/docker.svg" },
        { name: "Visual Studio", icon: "/visualstudio.svg" },
        { name: "VS Code", icon: "/vscode.svg" },
        { name: "Postman", icon: "/postman.svg" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-16 space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">Skills</h2>
        <p className="text-muted-foreground">Technologies and tools I work with</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-card hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="bg-secondary/10 text-secondary-foreground flex items-center gap-2 px-3 py-2">
                    <Image src={skill.icon} alt={skill.name} width={20} height={20} className="inline-block" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
