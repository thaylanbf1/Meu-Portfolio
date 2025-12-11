import {Github, Linkedin, Mail, Users, ChevronDown} from 'lucide-react'
import thayImg from '../assets/thay.jpg'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative px-6'>
        <div className='max-w-4xl mx-auto text-center relative z-10'>
            <div className='mb-6 inline-block'>
                <div className="w-32 h-32 rounded-full bg-linear-to-r from-purple-700 to-blue-400 p-1 mx-auto animate-pulse">
                <div className='w-full h-full rounded-full overflow-hidden bg-slate-300 flex items-center justify-center'>
                    <img src={thayImg} alt="" srcset=""  className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>

        <h1 className='text-6xl md:text-8xl font-bold mb-6 animate-fade-in'>
            Olá, sou <span className='bg-linear-to-r from-purple-700 via-blue-400 to-blue-800 bg-clip-text text-transparent'>
                Thaylan
            </span>
        </h1>

        <p className='text-xl md:text-2xl text-slate-200 mb-8'>
            Desenvolvedor Front End em formação, apaixonado pro criar experiencias visuais, interativas e responsivas na web. Com desejo de migrar para a carreira Full Stack.
        </p>

        <div className='flex gap-4 justify-center mb-12'>
            <a href="#projeto" className='px-8 py-3 bg-linear-to-r from-purple-700 via-blue-400 to-blue-800 rounded-full font-bold hover:scale-105 transition-transform'>Ver Projetos</a>

            <a href="#contato" className='px-8 py-3 border border-purple-500 rounded-full font-bold hover:bg-purple-500/10 transition-colors'>Contatos</a>
        </div>

        <div className='flex gap-6 justify-center'>
            <a href="https://github.com/thaylanbf1" target='_blank' rel='noopener noreferrer' className='hover:text-purple-400 transition-colors'>
                <Github className='w-6 h-6'/>
            </a>
            <a href="www.linkedin.com/in/thaylanbf1" target='_blank' rel='noopener noreferrer' className='hover:text-purple-400 transition-colors'>
                <Linkedin className='w-6 h-6'/>
            </a>
            <a href="mailto:thaylanfonseca12@gmail.com" target='_blank' rel='noopener noreferrer' className='hover:text-purple-400 transition-colors'>
                <Mail className='w-6 h-6'/>
            </a>
        </div>

        <div className='absolute bottom-9 left-1/2 -translate-x-1/2 animate-bounce'>
            <ChevronDown className='w-8 h-8 text-purple-400'/>
        </div>
        </div>
    </section>
  )
}

export default Hero
