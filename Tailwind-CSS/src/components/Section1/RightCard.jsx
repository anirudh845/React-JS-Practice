import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0 w-80 relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="WP" />

      <RightCardContent tag = {props.tag} id = {props.id} />
    </div>

    
      
    
  )
}

export default RightCard
