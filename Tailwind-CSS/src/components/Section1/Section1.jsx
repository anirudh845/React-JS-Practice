import React from 'react'
import Navbar from './Navbar'
import Page1Components from './Page1Components'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Components users = {props.users}/>
    </div>
  )
}

export default Section1
