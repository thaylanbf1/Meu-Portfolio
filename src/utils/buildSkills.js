const ALIASES = {
  reactjs: 'react',
  tailwind: 'tailwindcss',
  js: 'javascript',
  ts: 'typescript',
  html5: 'html',
  css3: 'css',
}

export const normalizeSkillKey = (value) => {
  const key = value.toLowerCase().replace(/[\s._-]/g, '')
  return ALIASES[key] ?? key
}

// Conta quantos repos usam cada skill (linguagem principal + topics).
// Linguagens desconhecidas viram skill genérica; topics desconhecidos são ignorados.
// Retorna [{ key, name, count, repos: [nomes] }] ordenado por uso.
export const buildSkills = (repos, catalogKeys, alwaysKeys = []) => {
  const found = new Map()

  const add = (key, name, repoName) => {
    if (!found.has(key)) found.set(key, { key, name, repos: new Set() })
    found.get(key).repos.add(repoName)
  }

  for (const repo of repos) {
    if (repo.language) {
      const key = normalizeSkillKey(repo.language)
      add(key, repo.language, repo.name)
    }
    for (const topic of repo.topics ?? []) {
      const key = normalizeSkillKey(topic)
      if (catalogKeys.includes(key)) add(key, topic, repo.name)
    }
  }

  // Skills que não aparecem em linguagem/topics (ex.: Git) valem para todos os repos
  for (const key of alwaysKeys) {
    for (const repo of repos) add(key, key, repo.name)
  }

  return [...found.values()]
    .map(({ repos: names, ...skill }) => ({ ...skill, count: names.size, repos: [...names] }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}
