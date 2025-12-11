import {Code, User, Briefcase} from 'lucide-react'

const Sobre = () => {
  return (
   <section id='sobre' className='min-h-screen flex items-center justify-center px-6 py-20 relative z-10'>
    <div className='max-w-6xl mx-auto'>
        <h2 className='text-5xl font-bold mb-12 text-center'>
            <span className='bg-linear-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent'>Sobre mim</span>
        </h2>
        
       
            <div className='space-y-6'>
                <p className='text-base md:text-lg text-slate-300 leading-relaxed'>
                     Formado como Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Pará (IFPA), atualmente estou cursando Bacharelado em Engenharia de Software na Universidade do Estado do Pará (UEPA).
                </p>
                <p className='text-base md:text-lg text-slate-300 leading-relaxed'>
                    Tenho uma paixão especial por desenvolvimento Web, onde posso combinar minhas habilidades técnicas com minha criatividade para criar interfaces de usuário atraentes e funcionais.
                </p>
                <p className='text-base md:text-lg text-slate-300 leading-relaxed'>
                   Atualmente estudo React, Tailwind e tecnologias modernas de front-end, buscando sempre aprimorar minhas habilidades e me manter atualizado com as tendências do setor. Sempre em busca de novos desafios e oportunidades de aprendizado.
                </p>
                 <div className="flex gap-4 flex-wrap pt-2">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm">
                Front-end
              </span>
              {/* <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/50 rounded-full text-sm">
                Back-end
              </span>
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-sm">
                Full Stack
              </span> */}
            </div>
            </div>

            <div className='relative pt-15'>
                <div className='w-full rounded-2xl bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 p-6 md:p-8'>
                <div className='space-y-6'>
                    <div className='flex items-center gap-3'>
                         <Code className="w-6 h-6 text-purple-400 shrink-0" />
                         <span>Técnico em Informática (IFPA)</span>
                    </div>
                    <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-pink-400 shrink-0" />
                  <span className="text-base md:text-lg">Engenharia de Software (UEPA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-blue-400 shrink-0" />
                  <span className="text-base md:text-lg">Dev Front End </span>
                </div>
                </div>
                </div>
            </div>
        </div>
    
   </section>
  )
}

export default Sobre
