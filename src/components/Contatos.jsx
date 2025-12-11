import {Linkedin, Mail } from 'lucide-react'

const Contatos = () => {
  return (
    <section id='contato' className='min-h-screen py-20 px-6 relative z-10'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-5xl font-bold mb-12 text-center'>
                <span className='bg-linear-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent'>Vamos conversar?</span>
            </h2>

            <p className="text-xl text-slate-200 mb-12">
                Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades.
            </p>


            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="mailto:thaylanfonseca12@gmail.com" className="px-8 py-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Enviar Email
                </a>
                <a href="www.linkedin.com/in/thaylanbf1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors flex items-center justify-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>
          </div>
        </div>
    </section>
  )
}

export default Contatos
