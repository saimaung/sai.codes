import ProjectsWithSearch from "@/components/projects-with-search"
import { getProjects } from "@/lib/projects"

export async function generateStaticParams() {
  const posts = await getProjects()
  return posts.map(project => ({
    slug: project.slug,
  }))
}

const ProjectsPage = async () => {
  const projects = await getProjects()
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        {/* Terminal-style header preview */}
        <div className="flex items-center gap-2 font-mono mb-8">
          <span className="text-primary">$</span>
          <span className="text-muted-foreground">ls</span>
          <span className="text-primary">~/projects</span>
          <span className="text-muted-foreground animate-pulse">▋</span>
        </div>

        <h1 className="title mb-12">Projects</h1>
        <ProjectsWithSearch projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsPage