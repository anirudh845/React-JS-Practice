import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />

          <button>Save <Bookmark size={13}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.jobDate}</span></h3>
          <h2>{props.post}</h2>
          <div className="job-type">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className="bottom">
          <div className="salary">
            <h4>{props.salary}</h4>
            <p>{props.jobLoc}</p>
          </div>

          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
