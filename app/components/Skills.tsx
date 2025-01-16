import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [".NET Core", "C#", "ASP.NET", "Entity Framework", "SQL Server", "RESTful APIs"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Azure", "Visual Studio", "VS Code", "Postman"]
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
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground">
                    {skill}
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

