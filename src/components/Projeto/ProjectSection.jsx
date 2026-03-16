import { Loader, AlertCircle } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { useState, useEffect } from "react"


const ProjectSection = ({username = 'thaylanbf1'}) => {
     const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Buscar projetos apenas uma vez ao montar o componente
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        
        // URL da API do GitHub - sempre ordenado por stars, desc
        const url = `https://api.github.com/users/${username}/repos?per_page=6&sort=stars&order=desc`

        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        let data = await response.json()
        setProjects(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setProjects([])
        console.error('Erro ao buscar projetos do GitHub:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [username])

  return (
    <section id="projetos" className="min-h-screen py-20 px-6 relative z-10">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>
        <p className="text-slate-400 text-lg">Explorando código e criando soluções</p>
      </div>

      {/* Estado de carregamento */}
      {loading && (
        <div className="flex justify-center items-center min-h-96">
          <div className="text-center">
            <Loader className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
            <p className="text-slate-400 text-lg">Carregando projetos...</p>
          </div>
        </div>
      )}

      {/* Estado de erro */}
      {error && (
        <div className="flex justify-center items-center min-h-96">
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 text-center max-w-md">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <p className="text-red-300 font-semibold mb-2">Erro ao carregar projetos</p>
            <p className="text-red-200 text-sm">{error}</p>
            <p className="text-slate-400 text-xs mt-4">
              Verifique se o nome de usuário "{username}" está correto
            </p>
          </div>
        </div>
      )}

      {/* Grid de projetos */}
      {!loading && !error && (
        <>
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">
                Nenhum projeto encontrado
              </p>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default ProjectSection
