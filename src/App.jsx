import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import ProjectSection from './components/Projeto/ProjectSection.jsx'
import SkillSection from './components/Skills/SkillSection.jsx'
import Contatos from './components/Contatos.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({x: 0,  y: 0})

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', handleMouseMove)
    return() => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({behavior: 'smooth'})
    setActiveSection(id)
  }

  return (
    <div className='bg-[#210d38] text-white min-h-screen relative overflow-hidden'>
      <AnimatedBackground mousePosition={mousePosition} />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero/>
      <Sobre />
      <ProjectSection />
      <SkillSection />
      <Contatos />
      <Footer/>
    </div>
  )
}

export default App
