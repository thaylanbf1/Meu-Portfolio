import { Loader, AlertCircle } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { useState, useMemo } from "react"
import useGithubRepos from "../../hooks/useGithubRepos"

const PAGE_SIZE = 6

const SORT_OPTIONS = {
  stars: { label: "Mais estrelas", compare: (a, b) => b.stargazers_count - a.stargazers_count },
  recent: { label: "Mais recentes", compare: (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at) },
  forks: { label: "Mais forks", compare: (a, b) => b.forks_count - a.forks_count },
  name: { label: "Nome (A-Z)", compare: (a, b) => a.name.localeCompare(b.name) },
}

const selectClass =
  "bg-slate-900/60 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-400"

const ProjectSection = ({username = 'thaylanbf1'}) => {
  const { repos, loading, error } = useGithubRepos(username)
  const [sortBy, setSortBy] = useState("stars")
  const [language, setLanguage] = useState("all")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Filtro e ordenação em memória: não geram novas requisições à API
  const languages = useMemo(
    () => [...new Set(repos.map((repo) => repo.language).filter(Boolean))].sort(),
    [repos]
  )

  const filtered = useMemo(() => {
    const list = language === "all" ? repos : repos.filter((repo) => repo.language === language)
    return [...list].sort(SORT_OPTIONS[sortBy].compare)
  }, [repos, sortBy, language])

  const projects = filtered.slice(0, visibleCount)

  const handleSortChange = (event) => {
    setSortBy(event.target.value)
    setVisibleCount(PAGE_SIZE)
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
    setVisibleCount(PAGE_SIZE)
  }

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
          {repos.length > 0 && (
            <div className="max-w-6xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                Mostrando {projects.length} de {filtered.length} projetos
              </p>
              <div className="flex flex-wrap gap-3">
                <select value={sortBy} onChange={handleSortChange} className={selectClass} aria-label="Ordenar por">
                  {Object.entries(SORT_OPTIONS).map(([value, { label }]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
                <select value={language} onChange={handleLanguageChange} className={selectClass} aria-label="Filtrar por linguagem">
                  <option value="all">Todas as linguagens</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {projects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {(visibleCount < filtered.length || visibleCount > PAGE_SIZE) && (
                <div className="flex flex-wrap justify-center gap-4">
                  {visibleCount < filtered.length && (
                    <button
                      onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                      className="px-6 py-3 rounded-lg border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition-colors"
                    >
                      Mostrar mais ({filtered.length - visibleCount} restantes)
                    </button>
                  )}
                  {visibleCount > PAGE_SIZE && (
                    <button
                      onClick={() => setVisibleCount(PAGE_SIZE)}
                      className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-700/30 transition-colors"
                    >
                      Mostrar menos
                    </button>
                  )}
                </div>
              )}
            </>
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
