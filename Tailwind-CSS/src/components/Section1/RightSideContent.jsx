import React from 'react'
import RightCard from './RightCard'

const RightSideContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 rounded-4xl flex flex-nowrap overflow-x-auto gap-10 mb-10'>
      {props.users.map(function(elem, idx){
        return <RightCard key = {idx} id = {idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightSideContent
