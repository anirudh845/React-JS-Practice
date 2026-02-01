import React from 'react'
import LeftSideContent from './LeftSideContent'
import RightSideContent from './RightSideContent'

const Page1Components = (props) => {
  return (
    <div className='py-10 flex justify-between h-[90vh] items-center px-17'>
      <LeftSideContent />
      <RightSideContent users = {props.users}/>
    </div>
  )
}

export default Page1Components
