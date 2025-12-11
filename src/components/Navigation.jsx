import { useState } from 'react'
import {X, Menu} from 'lucide-react'

const Navigation = ({activeSection, scrollToSection}) => {
    const [isMenuOpen, setIsMebuOpen] = useState(false)
    const menuItens = ['home', 'sobre', 'projeto', 'skills', 'contato']
  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-[#210d38] border-b border-slate-600'>
        <div className='max-w 7xl mx-auto px-6 py-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold bg-linear-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent'>Thaylan.dev</h1>

                <div className='hidden md:flex gap-8'>
                    {menuItens.map((item) => (
                        <button key={item} onClick={() => scrollToSection(item)} className={`capitalize hover:text-purple-400 transition-colors ${activeSection == item ? 'text-purple-500' : ''}`}>{item}</button>
                    ))}
                </div>

                <button className='md:hidden' onClick={() => setIsMebuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu /> }
                </button>
            </div>

            {isMenuOpen && (
                <div className='md:hidden mt-4 pb-4 flex flex-col gap-4'>
                    {menuItens.map((item) => (
                        <button key={item} onClick={() => {scrollToSection(item); setIsMebuOpen(false);} }className='capitalize text-left hover:text-purple-400 trasition-collors'>
                            {item} </button>
                    ))}
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navigation
