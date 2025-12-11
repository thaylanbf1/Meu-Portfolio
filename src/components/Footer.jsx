import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-slate-300 py-8 text-center text-slate-200 relative z-10'>
        <p> &copy; {new Date().getFullYear()} Thaylan Fonseca. Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer
