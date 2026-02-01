import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'

const LeftSideContent = () => {
  return (
    <div className='h-full w-1/3 mx-10 flex flex-col justify-between'>
      <Hero />
      <Arrow />
    </div>
  )
}

export default LeftSideContent
