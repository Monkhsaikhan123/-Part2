import React from 'react'
import {Link} from 'react-router-dom'

const MenuItem = ({image,name,desc}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default MenuItem