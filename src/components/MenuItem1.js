import React from 'react'
import '../styles/MenuItem1.css'

const MenuItem1 = ({image,name,desc}) => {
  return (
    <div className='menuItem1'>
        <div style={{backgroundImage:`url(${image})`}}> 
        </div>
        <h2>{name}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default MenuItem1