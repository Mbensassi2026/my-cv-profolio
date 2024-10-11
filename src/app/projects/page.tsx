import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Star, GitFork } from "lucide-react"
import Link from "next/link"
import { getProjects } from "~/lib/getRepos"

type Repo = {
  id: string
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  primaryLanguage: {
    name: string
    color: string
  } | null
}

export default async function ProjectsPage() {
  const projects = await getProjects() as Repo[]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {project.primaryLanguage && (
                <Badge 
                  variant="outline" 
                  style={{backgroundColor: project.primaryLanguage.color, color: '#fff'}}
                >
                  {project.primaryLanguage.name}
                </Badge>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link 
                href={project.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </Link>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {project.stargazers_count}
                </span>
                <span className="flex items-center">
                  <GitFork className="w-4 h-4 mr-1" />
                  {project.forks_count}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}