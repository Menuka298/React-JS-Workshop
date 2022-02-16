import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {

  /*const topic ="My fav food is koththu"
  const item = "and rice"
  const a = 10;
  const b = 20;
  const c = a+b;*/

  return (
    <div>
        <div className='topicBox'>
            <span className='text'>My fav food is {props.food}</span>
            {props.children}
        </div>
    </div>
  )
}
