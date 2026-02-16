import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-6 bg-teal-600'>
      <h2 className='font-semibold text-3xl'>Portfolio</h2>
      <div className='flex gap-10 text-xl font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
