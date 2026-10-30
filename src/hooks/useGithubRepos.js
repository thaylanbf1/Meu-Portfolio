import { useState, useEffect } from 'react'

const CACHE_TTL = 60 * 60 * 1000 // 1h, evita estourar o limite de 60 req/h sem token

const readCache = (key) => {
  try {
    const cached = JSON.parse(sessionStorage.getItem(key))
    if (cached && Date.now() - cached.time < CACHE_TTL) return cached.data
  } catch {
    // cache inválido ou indisponível: segue para o fetch
  }
  return null
}

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cacheKey = `github-repos:${username}`
    const controller = new AbortController()

    const fetchRepos = async () => {
      const cached = readCache(cacheKey)
      if (cached) {
        setRepos(cached)
        setError(null)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        const data = (await response.json()).filter((repo) => !repo.fork && !repo.archived)

        try {
          sessionStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), data }))
        } catch {
          // storage cheio ou bloqueado: ignora
        }

        setRepos(data)
        setError(null)
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err.message)
        setRepos([])
        console.error('Erro ao buscar repositórios do GitHub:', err)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchRepos()
    return () => controller.abort()
  }, [username])

  return { repos, loading, error }
}

export default useGithubRepos
