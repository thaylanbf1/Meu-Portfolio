import { ExternalLink, Star, GitFork } from "lucide-react"

const ProjectCard = ({project}) => {
  const formatNumber = (num) => {
    if(num>=1000000) return (num/1000000).toFixed(1) + 'M'
    if(num>=1000) return (num/1000).toFixed(1) + 'K'
    return num
  }
  return (
      <div className="group relative rounded-lg overflow-hidden bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1">
      {/* Imagem do repositório
      {project.owner?.avatar_url && (
        <div className="aspect-video overflow-hidden bg-slate-950/50">
          <img 
            src={project.owner.avatar_url} 
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-50 group-hover:opacity-70"
          />
        </div>
      )}
       */}
      <div className="p-6 flex flex-col h-full">
        {/* Header com nome e owner */}
        <div className="mb-3">
          <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">
            {project.owner?.login}
          </p>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {project.name}
          </h3>
        </div>

        {/* Descrição */}
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 grow">
          {project.description || "Sem descrição disponível"}
        </p>

        {/* Linguagem principal */}
        {project.language && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              {project.language}
            </span>
          </div>
        )}

        {/* Stats: Stars e Forks */}
        <div className="flex gap-4 mb-4 pt-3 border-t border-slate-700">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-slate-200">
              {formatNumber(project.stargazers_count)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <GitFork className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-slate-200">
              {formatNumber(project.forks_count)}
            </span>
          </div>
        </div>

        {/* Link externo */}
        <a 
          href={project.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm group/link"
        >
          Ver no GitHub 
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
