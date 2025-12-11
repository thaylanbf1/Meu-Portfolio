import { ExternalLink } from "lucide-react"

const ProjectCard = ({project}) => {
  return (
     <div className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      {/* <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div> */}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-purple-500/20 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} target="_blank"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          Ver projeto <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
