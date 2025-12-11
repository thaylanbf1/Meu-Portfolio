import { projects } from "../data/data"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <section id="projeto" className="min-h-screen py-20 px-6 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center">
            <span className=" bg-linear-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent">
                Projetos
            </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
  )
}

export default ProjectSection
