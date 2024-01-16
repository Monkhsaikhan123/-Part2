import React from 'react'
import '../styles/UserUndsen.css'
import BannerImage from '../assets/image/womanworking.jpg'
const UserUndsen = () => {
  return (
    <div className='UserUndsen' style={{backgroundImage:`url(${BannerImage})`}}>
        <h1>
            Green's Garden
        </h1>
        <p>
        It is a long established fact that a reader will be <br/> distracted by the readable content of a page <br/>when looking at its layout.
        </p>
    </div>
  )
}

export default UserUndsen