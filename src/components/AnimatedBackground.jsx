import React from 'react'

const AnimatedBackground = ({mousePosition}) => {
  return (
    <div className='fixed inset-0 pointer-events-none'>
      <div className='absolute w-96 h-96 bg-purple-500/20 rounded-full blur-2xl transition-all duration-300' style={{
        left: `${mousePosition.x - 192}px`,
        top: `${mousePosition.y - 192}px`
      }}> 
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-2xl'></div>
      </div>
    </div>
  )
}

export default AnimatedBackground
